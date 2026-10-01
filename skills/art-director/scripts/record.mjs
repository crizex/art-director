// Records a page as video plus a contact sheet, for animated references and for direction sketches.
//
//   node record.mjs <url-or-file> <out-prefix> [--still <seconds>] [--width 1280] [--height 800]
//
// Default: waits for the intro, scrolls slowly to the bottom, moves the mouse, then writes
//   <out-prefix>.mp4          the recording (H.264, no sound)
//   <out-prefix>-sheet.jpg    16 frames in a 4x4 grid, the file to actually look at
//   <out-prefix>.json         fonts and motion technique found on the page
// --still <seconds> records without scrolling, for a direction sketch whose motion plays in place.
//
// Needs Node, ffmpeg and Playwright with Chromium (`npm i -D playwright && npx playwright install chromium`).
// If Playwright lives elsewhere, point PLAYWRIGHT_PATH at its index.mjs.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(name); return i < 0 ? def : args.splice(i, 2)[1]; };
const still = Number(opt('--still', 0));
const width = Number(opt('--width', 1280)), height = Number(opt('--height', 800));
const [target, out] = args;
if (!target || !out) { console.error('usage: node record.mjs <url-or-file> <out-prefix> [--still <s>]'); process.exit(2); }
const url = /^https?:|^file:/.test(target) ? target : pathToFileURL(path.resolve(target)).href;

let chromium;
try { ({ chromium } = await import(process.env.PLAYWRIGHT_PATH ? pathToFileURL(process.env.PLAYWRIGHT_PATH).href : 'playwright')); }
catch { console.error('Playwright not found. Install it or set PLAYWRIGHT_PATH.'); process.exit(2); }

// Video and Chromium's shared memory go next to the output, not to /tmp: with --disable-dev-shm-usage
// Chromium writes to TMPDIR, and a full /tmp shows up as crashed tabs or ERR_INSUFFICIENT_RESOURCES.
const tmp = fs.mkdtempSync(`${out}-rec-`);
const fail = msg => { console.error(msg); fs.rmSync(tmp, { recursive: true, force: true }); process.exit(1); };
const kill = setTimeout(() => fail('timeout'), 240000);
// No --single-process: it crashes Chromium on long recordings. /dev/shm is often tiny in containers.
const browser = await chromium.launch({ args: ['--disable-dev-shm-usage', '--enable-unsafe-swiftshader'], env: { ...process.env, TMPDIR: tmp } });
const ctx = await browser.newContext({ viewport: { width, height }, recordVideo: { dir: tmp, size: { width, height } } });
const page = await ctx.newPage();
const info = { url };
try {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 40000 });
  if (still) await page.waitForTimeout(still * 1000);
  else {
    await page.waitForTimeout(6000); // let the intro play
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < Math.min(h, 8000); y += 120) { await page.mouse.wheel(0, 120); await page.waitForTimeout(90); }
    await page.waitForTimeout(1500);
    await page.mouse.move(width / 2, height / 2, { steps: 15 });
  }
  info.found = await page.evaluate(() => {
    const t = [], s = [...document.scripts].map(x => x.src).join(' ');
    if (window.gsap || /gsap/.test(s)) t.push('GSAP' + (window.ScrollTrigger ? ' + ScrollTrigger' : ''));
    if (window.lenis || document.documentElement.classList.contains('lenis') || /lenis/.test(s)) t.push('Lenis');
    if (window.THREE || /three/.test(s)) t.push('Three.js');
    if (document.querySelector('spline-viewer') || /spline/.test(s)) t.push('Spline');
    if (document.querySelector('[data-framer-name],[data-framer-component-type]')) t.push('Framer');
    if (document.querySelector('canvas')) t.push('canvas x' + document.querySelectorAll('canvas').length);
    if (document.querySelector('video')) t.push('video');
    const f = new Set();
    document.querySelectorAll('h1,h2,p,a,button').forEach(e => f.add(getComputedStyle(e).fontFamily.split(',')[0].replace(/"/g, '')));
    t.push('fonts: ' + [...f].slice(0, 4).join(' / '));
    return t;
  });
} catch (e) { info.error = e.message.split('\n')[0]; }
await ctx.close(); await browser.close(); clearTimeout(kill);

const webm = fs.readdirSync(tmp).map(f => path.join(tmp, f)).sort((a, b) => fs.statSync(b).size - fs.statSync(a).size)[0];
if (!webm || fs.statSync(webm).size < 1000 || info.error) fail(`no usable recording: ${info.error || 'empty video'}`);
const dur = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', webm]).toString().trim();
const ff = a => execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', webm, ...a]);
ff(['-vf', `fps=16/${dur},scale='if(gt(iw,ih),640,-2)':'if(gt(iw,ih),-2,640)',tile=4x4:padding=6:color=white`, '-frames:v', '1', '-q:v', '5', `${out}-sheet.jpg`]);
ff(['-vf', 'scale=960:-2,fps=24', '-c:v', 'libx264', '-crf', '30', '-pix_fmt', 'yuv420p', '-an', '-movflags', '+faststart', `${out}.mp4`]);
fs.rmSync(tmp, { recursive: true, force: true });
fs.writeFileSync(`${out}.json`, JSON.stringify(info, null, 1));
console.log(JSON.stringify(info), `\n${out}.mp4\n${out}-sheet.jpg`);
