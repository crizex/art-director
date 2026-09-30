# Vault show-night dashboard, with Art Director

## Brief in three sentences
1. The night manager and the door and bar leads of Vault (1,500 capacity) glance at this screen, which hangs on the office wall, and from 2 m it must answer "are we safe, are we selling, what is on stage".
2. It should feel like the venue's own broadcast of the night, with photography as the main material and everything that changes visibly changing.
3. Desktop first at 1440x900; must show scans per door, bar sales, fill per zone and the running order; must not be a KPI tile row, sidebar plus cards, neon on black, a dot floor plan, a timing tower or level meters.

## Directions and the pick
- A, The Room Fills: one photo of the hall that develops the crowd as people scan in.
- **B, Live Gallery: a TV gallery with program monitor, zone cameras, rundown and tickers. Picked ("B ist ok"); earlier rounds were "not krass enough", so this build goes past the sketch.**
- C, Night Poster: fluorescent poster type that fills with ink like tanks.

## Sources
- Sketch B and its sources: FIFA World Cup page (pale broadcast blue, white plates), Premier League (hard white plates, tabular figures beside photography).
- Broadcast vocabulary from memory of live TV, not seen live (those sites are cookie-walled): vision mixer with PREVIEW/PROGRAM and tally lights, scorebug that stays over every camera, lower thirds with masked wipes and staggered text, a stinger wipe between cameras, a rundown, two opposing crawls.
- Images (generated, fictional people and acts, all data fake): stage, packed hall (three zone crops) from the sketch round; new for this build: wide stage, drummer, bar close-up, door scan, next act backstage (`gemini-bild`, compressed to webp under 300 KB each).

## Fonts and colors
Barlow Condensed (plates, numerals, all big type) and Barlow (two small labels). Ink #06141C, plate white #F5F8FA, tally red #FF2B2B (light and border) with #D4161C as the plate fill and #C5121A as red text so small white and red text holds 4.5:1, tally green #2BE070 (preview only), warning amber #FFC21A (a zone at 90 % or more, stand-by). Red always means "on air", green "next", amber "look at this".

## Motion
- A director script of 29 s loops: preselect on PREVIEW (green), then a hard cut or a skewed stinger wipe to PROGRAM (red); the old program becomes preview. Cuts at 4.2, 12.4, 22.0 and 28.2 s, wipes at 8.2, 17.4 and 25.0 s. Triggers are real data: a door B spike, the balcony crossing 90 %, a bar record minute, the set ending, then the floor and the wide shot as fillers.
- Lower thirds (on stage, door spike, balcony near limit, bar record, stand by, now on stage) wipe in with a mask, the tab first, the plate after, text staggered up, a light sweep across the plate, and wipe out to the right. The scorebug, clock and source tag wipe in at start and stay over every camera.
- Camera life: a random slow push-in per shot, light flicker with occasional stage strobes on stage shots, film grain (a tiled noise image, no blend mode), vignette, scan lines on preview and zone monitors only.
- Timecode runs in real frames; the wall clock runs 12x (demo) and drives the rundown: Mira's minutes count down, "stand by" flashes on the next act, at 22:30 the row plate wipes over to Kolja Venn and the stage camera dissolves to his picture. Door counters flash red on each scan, inside and bar sales tick. Scans crawl left, bar sales crawl right.
- `prefers-reduced-motion` (or `?still`, and a "Stop motion" link that appears on keyboard focus) gives a static screen: stage on program, doors on preview, lower third up, tickers still, clock only.

## Assumptions I made
- Zone caps: floor 900, balcony 350, bar E 100 (foyer 95 people, not shown) and 1,500 total; the sketch's door totals above capacity were replaced by tonight's scans (524, 441, 283, 90).
- Running order: Oda Brandt 20:00, Mira Lund 21:15 to 22:30, Kolja Venn 22:30, curfew 00:30. Demo night starts at 22:26:40 so the act change falls into the loop.
- Bar sales sit in the strip under the monitor, not in the lower third, so they stay visible when the director is on another camera.
- The three zone tiles double as cameras 4 to 6; the door, wide, drum and wings cameras only appear on program and preview.
- Desktop scales the 1440x900 stage to fit; under 900 px the blocks stack into one column.
- The demo loop restarts every 29 s with a hard reset (numbers and acts rewind).

## Checks run and what they changed
- Headless render and a 10 s capture: the grain layer with `mix-blend-mode: overlay` crashed Chromium when the wipe started; replaced by plain low-opacity noise. The capture shows a lower third in and out, a cut and a wipe.
- Contrast of every text node measured against its background: all at 4.5:1 or better (the three flagged lines sit on a pseudo-element plate, checked by hand: ink on white 17:1, red text #C5121A on white 5.8:1).
- hallmark audit (anti-slop): no fake chrome, no eyebrow labels (all small labels are data), tokens used for colour; added the stamp comment.
- web-design-guidelines: added explicit width and height on images, `theme-color`, a keyboard-reachable stop-motion link for autoplay motion over 5 s, `aria-live` announcements for cuts and alerts, reduced-motion path; a wall display has no form controls.
- Found while checking: stand-by fired at the start (next act 3 min away), so the threshold is 1 minute; a floor zone near 90 % competed with the balcony crossing, so the floor starts lower.
- Screenshots at 1440x900 and 400 px looked at; phone stacks without horizontal scroll.
