# Changelog

Every release is also published on the [releases page](https://github.com/crizex/art-director/releases).

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
