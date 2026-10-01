---
name: art-director
description: A personal art director for every interface you build, from landing pages to app screens, dashboards and internal tools. Use for any design, redesign, new page, new screen or layout work, whenever the user asks for something "premium", "high end", "polished", "bold" or "make it prettier", and when the user sends a screenshot as a reference ("like this", "remember this", "save as reference"). Asks everything up front, rotates inspiration sources instead of repeating habits, shows 2 to 3 directions as real images for the user to pick, builds without interruptions, verifies before calling it done, and records the user's taste verbatim so the next project starts smarter.
---

# Art Director

Goal: the user gets what they mean, not a remix of whatever was built last.
All questions happen **at the start**. After the user picks a direction, building runs without interruptions.

## The taste profile

The user's taste lives outside this skill, so plugin updates never overwrite it:

```
~/.claude/art-director/
  taste.md        what the user liked and disliked, in their own words
  log.md          which sources were used on which project (drives rotation)
  sources.md      optional: the user's own additions to the source list
  setup.md        optional: local environment, accounts, tool paths, house rules
  references/     screenshots the user collected, plus index.md
  drafts/         optional: HTML sketches of directions worth keeping
```

**Read `setup.md` first when it exists.** It describes this particular machine and user: which
browser automation works, logged-in accounts for galleries, where installed design tools live,
how drafts get published, typographic house rules. Where it is more specific than this skill, it wins.

If the folder does not exist, create it from the files in `templates/` next to this skill
(`taste.md`, `log.md`, `setup.md`, `references-index.md` becomes `references/index.md`). Say once that you did.
Write entries in the language the user writes in.

Bundled with this skill: `sources.md`, a curated list of inspiration galleries by category.
Merge it with the user's own `sources.md` when choosing.

## 0. Receiving a reference

When the user sends an image with "remember this", "reference", "like this" or similar and no build task:
copy it to `references/YYYY-MM-DD-keyword.ext`, add a row to `references/index.md`
(file, the user's comment verbatim, your guess at what makes it good). If it is an animation,
the still frame loses the motion: ask once what moves, and note the answer with its proper term.
When the user sends links to animated pages, a screenshot is not enough. Record the page loading and
scrolling slowly (for example Playwright's `recordVideo`), keep the video, and turn it into a contact
sheet of 12 to 16 frames that you actually look at. `scripts/record.mjs` next to this skill does both
and names the fonts and motion libraries it finds (`node scripts/record.mjs <url> <out-prefix>`).
Note what moves, when, and with which technique (GSAP, Lenis, Three.js, Spline, Framer, canvas).

## 1. Intake: every question at once

Read `taste.md` and `references/index.md` first. Then **one** round of questions
(several questions per ask, two asks back to back is fine). Skip anything the brief already answers:

- What is it for, and for whom? (client site, own tool, sales page, internal app)
- Mood: calm and refined, loud and playful, technical and sober, warm and personal?
- Light, dark, or both?
- Is there a brand palette that must stay? (Client work: usually yes. Keep the colors, rethink the building blocks.)
- The one element people should remember: a hero effect, a data view, an interaction?
- Device: phone first, desktop first, or equal?
- Must have / must not: content, features, taboos.

The answers become the **brief in three sentences**, shown together with the directions in step 3.

### Existing products and small changes

Ask whether the thing already has an approved look: a live website, a sibling app, a design system.
- **Sibling of an existing product** (the app for a website, the phone version of a desktop app):
  one direction follows the existing world closely. Products of one family share their look;
  consistency usually beats novelty here.
- **One component inside an existing design** (a banner, a dialog, a new card): no direction round.
  Build it in the existing system, show it, adjust.
- **A new product**: the patterns in `taste.md` came from other products. They are no default look.
  Reusing the look of one product for an unrelated one (the dark dashboard style for a playful
  consumer app) gets rejected.

## 2. Inspiration: rotate, do not repeat

Every new screen or product gets fresh research, small ones too. Only follow-up rounds on a chosen
direction may reuse the sources of the round before.

1. Read `log.md`: which sources did the last 3 projects use?
2. Pick **3 to 4 sources** from `sources.md`:
   - at least 2 from the matching category (web, app, dashboard, components),
   - at least 1 that does **not** appear in the last 3 log entries,
   - no source is mandatory. Favorites are exactly how every project ends up looking the same.
3. Galleries alone produce gallery averages. Also look at **real products next to the category**:
   for a meditation app, look at premium audio and journaling brands; for a compliance tool, at banking
   and legal software. Then look for a **motif** in the product name or the scene where it is used.
   Motifs belong on websites and brand moments. Tools and apps the user works in every day get their
   character from light, type, color and motion instead; a metaphor dressed over a work tool reads as
   playful or gimmicky.
4. On each source, search for **the same kind of product or screen**. Do not skim the front page.
   JavaScript-heavy galleries need a real browser (Playwright or similar). Save screenshots to a scratch folder.
5. Add matching images from `references/`. The user's own finds outweigh any gallery.
6. If a design-system generator or palette tool is installed (for example `ui-ux-pro-max`), run it for
   palette, type and industry anti-patterns. Treat its output as the category default to beat, not the answer.

## 3. Show directions, the user picks

2 to 3 **clearly different** directions, each as a real image: a small HTML sketch of the most important
screen, screenshotted, or rendered side by side. For each direction:

- one sentence on what you understood,
- where the inspiration came from (source and the concrete find, linked),
- fonts and the 3 main colors,
- its **floor plan** in one line (where navigation, content and actions sit).

Sketch at the level of the final result, not as a wireframe. Directions with flat shapes, no images
and no motion read as generic and get rejected, even with a clever floor plan:
- **real imagery**: photos, products, people or textures, generated with an image model when one
  is available, never grey boxes or flat SVG stand-ins,
- **the core motion** of each direction (the intro, the hero effect, the one transition that carries it),
  shown as a short clip or contact sheet next to the still (`scripts/record.mjs <sketch.html> <out> --still 6`).
  Dose it by the brand's register: consumer and lifestyle brands can carry a lot of motion, while
  professional services (security, finance, law, health) want one moving element and everything
  else still. Too much movement makes a serious company look unserious.

A motif alone is not a direction. Header, tabs, table and cards with a motif painted on still read as
"generic AI". At least one direction needs a floor plan that differs from the default layout, and each
floor plan must match the sketch it came from.

If `taste.md` has a "Patterns" section, let one direction follow it and at least one deliberately
break it, so a known preference does not become the next monoculture.

For a product or prototype with more than one screen, add a **screen list**: every screen and state
it needs. Include everything the website or brief promises, plus the dull parts of the category
(settings, users and roles, admin, empty and error states, onboarding). `checklist.design` lists what
common screen types need. Missing screens found after the build cost a full round each.

Before showing anything, two checks on the sketches themselves:
- **Measure against the bar.** Put the strongest find from step 2 next to each direction, at the same
  size. If a sketch looks plainly weaker than the reference beside it, redo it before the user sees it.
  Show the pairs to the user too: it tells them where each idea came from and keeps you honest.
- **Run the slop detector early.** If a design review skill with a detector is installed, run it on
  every sketch now, not only on the final build, and fix what it finds. A generic first round costs a
  whole round.

Add the three-sentence brief from step 1. The user picks, mixing is welcome
("colors from A, layout from B"). **No production code before the pick.**

## 4. Build without interruptions

After the pick, no more questions. When something is unclear, decide in the spirit of the chosen
direction and write it down. Finish with a short list: **"Assumptions I made"**.

Keep the floor plan of the chosen sketch. The usual drift during a full build is back to the default
layout (top bar, text tabs, a title, table sections) with the direction's motif left as decoration.
Compare the first full screen with the sketch before building the rest.
Build every screen on the approved screen list.

**Illustrations, mascots, logos with a figure:** use an image generation model if one is available.
Hand-drawn SVG figures rarely hold up. Show 3 to 6 generated concepts, then refine the chosen one at
high resolution. Check that the scene makes sense: objects in the right place, and real-world details
(devices, brands, hands) right.

Standing rules (extend them in the user's `taste.md`):
- small text on dark backgrounds at roughly 6:1 contrast or better, measured, never eyeballed,
- works at 400 px width,
- none of the default AI patterns: purple gradients, warm cream with a light serif display and a
  terracotta or oxblood accent, big-number stat tiles as the hero,
  sidebar plus card feed, `[ 01 ]` style numbering, an eyebrow label above every heading,
  the standard SaaS sequence of split sections, three-column features, check lists, pricing cards,
  FAQ accordion and a giant closing CTA.

## 5. Verify before "done"

1. Critique the result with any installed design review skill (for example `impeccable` or `hallmark`),
   and run its detector if it has one. Fix what it finds.
2. Audit the code for accessibility, contrast and performance (`web-design-guidelines` or equivalent).
3. Screenshot desktop and phone widths and actually look at both.
4. Check every rule in the user's `taste.md` against the changed files.

## 6. Learn

- `log.md`: one row (date, project, kind, sources, chosen direction and the rejected ones,
  rounds until the user approved, which checks from step 5 ran). Update the rounds count when a
  later round follows. It shows whether first rounds are getting better.
- When the user praises or criticizes the result, write their words **verbatim** into `taste.md`
  under "Liked" or "Disliked", with date and a link to the draft. Add a "so what" in brackets when
  the lesson is not obvious from the quote. Never put your own guesses in `taste.md`.
- **Every 10 rows in `log.md`, review.** Read the rows since the last review together with `taste.md`
  and write a short "Review" block at the end of `log.md`: average rounds until approval, why first
  rounds failed (quoted reasons, grouped), which sources fed the approved directions and which never
  did. Run `scripts/check-sources.mjs` on the bundled and the user's `sources.md` at the same time and
  update the access notes. Change your own approach from what the review shows, not from one project.
- A rule the user states ("never X", "always Y") goes under "Standing rules".
- Once "Liked" has 5 or more rows, keep a short **"Patterns"** section in `taste.md`: what the liked
  results share (background, accent, type, motion), each point backed by the rows it comes from.
  Mark it as derived. It is the only place where your own reading goes, and it is revised whenever
  the evidence changes.

## Autonomous runs

When nobody is there to answer (scheduled jobs, background agents, overnight runs): ask nothing.
Still do step 2, then **stop at step 3**: sketch 2 to 3 directions, say which one you would pick and
why, and leave the full build for after the user's pick. A full build on a direction the user then
rejects costs far more than one short answer.

Only if the task says to finish without a pick: build your favorite, and name your reasoning plus
the two rejected alternatives in the final report, so the user can steer afterwards.
