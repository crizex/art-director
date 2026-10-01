# Changelog

Every release is also published on the [releases page](https://github.com/crizex/art-director/releases).

## 1.4.0

- Directions are sketched at the level of the final result: real or generated imagery instead of
  grey boxes and flat SVG, and each direction's core motion shown as a clip or contact sheet.
- Motion is dosed by the brand's register: lots for consumer brands, one moving element for
  professional services. Warm cream with a serif and a terracotta or oxblood accent joins the list
  of default AI looks to avoid.
- Products with several screens get a screen list to approve alongside the directions, including the
  dull parts (settings, roles, admin, empty states), so missing screens do not cost extra rounds.
- New section on existing products: siblings of a product follow its look, a single component needs
  no direction round, and patterns from the taste profile are no default look for unrelated products.
- Every new screen gets fresh research, small ones too.
- New `scripts/record.mjs`: records a page or a local sketch as MP4 plus a 4x4 contact sheet and
  names the fonts and motion libraries it finds. Avoids the usual crashes (no single-process mode,
  no recording into a full /tmp).
- Before the user sees the directions, each sketch is placed next to the strongest reference find and
  run through the slop detector, so a generic first round gets caught early.
- Every 10 projects, a review in `log.md`: rounds until approval, why first rounds failed, which
  sources actually fed approved work.
- New `scripts/check-sources.mjs`: flags dead, moved and blocked sources. First run updated the list:
  screenlane is now pageflows.com, uisources is now screensdesign.com, savee moved to savee.com.
- New inspiration sources: manus.im (a calm AI product brand), Bklit UI (bklit.com), Tremor and Evil Charts
  for dashboards and charts, Watermelon UI and Motion Primitives for components.

## 1.3.0

- New `examples/` folder and a **With and without** section in the README: three fair tests
  (website, app, dashboard), same brief, plain Claude Code against Art Director with an empty
  taste profile. Each has the build, a screen capture and all three sketched directions.
- README: unattended runs are described correctly (they stop at the directions, since 1.2.0).

## 1.2.2

- Three new inspiration sources for single sections: footer.design (footers), cta.gallery
  (calls to action) and pricingpages.design (pricing pages).

## 1.2.1

- References from links to animated pages are recorded as video and a contact sheet of frames,
  not a single screenshot, and the notes say what moves and with which technique.

## 1.2.0

Lessons from the first day of real use, where first rounds were often rejected as "too AI" or "too basic".

- Directions now name their **floor plan**. A motif alone is not a direction: at least one direction
  needs a layout that differs from the default, and the build keeps the sketch's floor plan instead of
  drifting back to top bar, tabs and tables.
- Motifs and metaphors belong on websites. Tools and apps get their character from light, type, color and motion.
- New path for **illustrations, mascots and logos with a figure**: an image generation model instead of hand-drawn SVG.
- `taste.md` gets a **Patterns** section (derived, backed by rows) once 5 results were liked. One direction
  follows the pattern, at least one breaks it.
- `log.md` gets two columns: rounds until approval and which checks ran.
- Autonomous runs stop after sketching the directions and recommend one, instead of fully building a
  direction the user has not seen. Building without a pick only when the task says so.

## 1.1.2

- README: the workflow diagram is readable on GitHub again. It runs top to bottom now, and the step
  descriptions no longer get cut off inside their boxes.

## 1.1.1

- README: short demo animation of a brief, three directions, a pick and the taste.md entry.
- README: note that the project is not affiliated with Anthropic.

## 1.1.0

First public release.

- Six-step process: intake, rotating research, 2 to 3 directions as images, uninterrupted build, verification, learning.
- Taste profile outside the plugin in `~/.claude/art-director/` (`taste.md`, `log.md`, `sources.md`, `setup.md`, `references/`, `drafts/`), created from templates on first use.
- `setup.md` for machine-specific notes: browser automation, gallery accounts, tool paths, house rules.
- 25+ curated inspiration sources by category, with access notes and lessons (category neighbours, motifs).
- Autonomous mode for scheduled and background runs.
