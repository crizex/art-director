// Checks every link in one or more sources.md files and reports the ones that are dead, blocked or empty.
//
//   node check-sources.mjs [sources.md ...]     (default: the sources.md next to this script)
//
// Plain HTTP only. A page marked "JS" in the access column is expected to look empty here,
// and Cloudflare challenges show up as 403. Review the report by hand before changing the list:
// a source that is fine in a real browser stays, one that is gone for good gets removed.
// Needs Node 18 or newer.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const files = process.argv.slice(2);
if (!files.length) files.push(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'sources.md'));

const urls = new Set();
for (const f of files) for (const m of fs.readFileSync(f, 'utf8').matchAll(/https?:\/\/[^\s|,)`]+/g)) urls.add(m[0]);

async function check(url) {
  try {
    const r = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000),
      headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/130 Safari/537.36' } });
    const body = await r.text();
    const text = body.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const moved = new URL(r.url).hostname.replace(/^www\./, '') !== new URL(url).hostname.replace(/^www\./, '');
    let note = '';
    if (r.status >= 400) note = r.status === 403 || r.status === 429 ? 'blocked' : 'dead';
    else if (moved) note = `moved to ${new URL(r.url).hostname}`;
    else if (text.length < 300) note = 'empty shell (JS)';
    return [url, r.status, note];
  } catch (e) { return [url, 0, e.name === 'TimeoutError' ? 'timeout' : 'unreachable']; }
}

const results = [];
const queue = [...urls];
await Promise.all(Array.from({ length: 6 }, async () => { while (queue.length) results.push(await check(queue.shift())); }));
results.sort((a, b) => (a[2] ? 0 : 1) - (b[2] ? 0 : 1) || a[0].localeCompare(b[0]));
for (const [url, status, note] of results) console.log(`${note ? '!!' : 'ok'}  ${String(status).padEnd(3)}  ${url}${note ? '  ' + note : ''}`);
console.log(`\n${results.filter(r => r[2]).length} of ${results.length} need a look`);
