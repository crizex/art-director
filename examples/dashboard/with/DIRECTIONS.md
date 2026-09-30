# Vault show-night dashboard: directions (steps 1 to 3, round 3)

Brief typed by the user: "Build the show-night dashboard for Vault, a 1,500-capacity concert venue: ticket scans at each door, bar sales, how full each zone is, and tonight's running order. Desktop first."

## Brief in three sentences

1. This is the screen the night manager and the door and bar leads of Vault glance at, and that hangs on the office wall: from 2 m it must answer "are we safe, are we selling, what is on stage".
2. It should feel like the venue's own broadcast of the night, not an admin panel: generated photography of the actual room and stage as the main material, big type, and everything that changes visibly changes (people arriving, scans, sales, the set running down).
3. Desktop first at 1440x900; must have scans per door, bar sales, fill per zone, running order with a now-playing moment; must not: KPI tile rows, sidebar plus cards, neon on black, a floor plan with dots, a timing tower, level meters (all tried or rejected in rounds 1 and 2).

(No intake questions were asked; the answers above are assumptions. All people, artists and the venue are fictional and generated, all data is fake. The demo clock runs faster than real time so a 6 s clip shows the numbers moving.)

## Research (what was actually looked at)

Viewed in headless Chromium, screenshots in the scratchpad: teenage.engineering EP-133 K.O. II page, tomorrowland.com (404 page), lollapalooza.com, fifa.com World Cup page, premierleague.com, malighting.com. Blocked or useless: nba.com (Access Denied), roskilde-festival.dk and eurovision.tv (Cloudflare), primaverasound.com (502), uefa.com (crashed the headless browser), ma-lighting.com (a parked domain; the real malighting.com sat behind a cookie layer, only its hero with fader icons on black was visible). Sports broadcast motion (scorebugs, lower-third wipes, tickers) could not be seen live because those pages are cookie-walled and mostly static; the graphics vocabulary below comes from long familiarity and is marked as such.

What the round-2 result taught: "wow" came from generated photography as the main material and one idea that holds the whole product in a single image. All three directions below therefore start from a generated photo, not from drawn graphics.

## A. The Room Fills

- **Idea:** the screen is one photograph of the empty hall taken from the stage; every person who scans in develops the crowd into the photo, zone by zone (floor from the barrier backwards, balcony from the centre outwards, bar side from the door), so the night manager reads the state of the room by looking at the room.
- **Sources:** Teenage Engineering ([EP-133 K.O. II](https://teenage.engineering/products/ep-133)): a full-bleed photograph with huge plain type set straight on it, no panel between type and image. Tomorrowland ([404 page](https://www.tomorrowland.com/global/)): numerals as the thing the photography lives in. Lollapalooza ([lollapalooza.com](https://www.lollapalooza.com)): one greyscale photo, one loud type voice, one accent colour. Generated: two photos from the same camera position (empty hall with work lights, then the same hall packed under haze), blended by the live fill.
- **Fonts:** Anybody (extended, weight 900, numerals), IBM Plex Mono (labels).
- **Colors:** ink #0A0B0D, work-light blue-white #DCEBFA, show-light amber #FF9F3A (only for things that are happening now).
- **Floor plan:** full-bleed photo; giant inside count top left, clock top right; three zone tags sit on their zone in the picture (floor, balcony, bar + foyer); the stage-floor strip at the bottom holds the four door counters and bar sales; under it the running order as one timeline with a moving playhead. Shown at 20:31 with Oda Brandt on stage, because the change from empty to full only shows while the room is still filling.
- **Motion:** crowd reveal edges creep forward as people scan in, a slow camera breathing, amber show light flickering along the ceiling, door counters flash amber on each scan, sales tick up, playhead and clock run.
- **Files:** `with/directions/a.html`, `a.png`, `a.mp4` (images `img/room-empty.webp`, `img/room-full.webp`).

## B. Live Gallery

- **Idea:** the night as a TV gallery: the stage is the program monitor with a scorebug and lower thirds, each zone is a camera with its fill burned in, the running order is the rundown, scans and sales crawl as two opposing tickers.
- **Sources:** FIFA World Cup page ([fifa.com](https://www.fifa.com/en/tournaments/mens/worldcup)): "Next Up" labelling and a pale broadcast blue with white plates. Premier League ([premierleague.com](https://www.premierleague.com)): hard white plates and tabular figures next to photography. Scorebug, lower-third wipe, gallery multiviewer with tally borders and a two-line crawl: from memory of sports and news broadcast, not seen live. Generated: a stage photo that happens to contain an operator's TV camera with its red tally light, and the packed-hall photo cropped into three camera frames.
- **Fonts:** Barlow Condensed (plates, numerals), Barlow (small labels).
- **Colors:** deep ink #06141C, plate white #F5F8FA, tally red #FF2B2B. The photo brings its own teal.
- **Floor plan:** program monitor top left (stage photo, scorebug top left, clock top right, lower third bottom), three zone cameras stacked on the right, rundown under the monitor, full-width two-line ticker at the bottom. The zone nearest its limit (balcony, 92 %) gets the red tally border.
- **Motion:** slow push-in on the stage photo, strobe flashes, lower third wipes through on stage / door scans / bar sales every few seconds, the scan counter of a door flashes red on each scan, rundown time-left counts down, tickers crawl in opposite directions at different speeds, scan lines and a slow drift on the zone cameras.
- **Files:** `with/directions/b.html`, `b.png`, `b.mp4` (images `img/stage-mira.webp`, `img/room-full.webp`).

## C. Night Poster (the one a cautious designer would not dare)

- **Idea:** the dashboard is the gig poster: a fluorescent yellow full-screen ground, and every zone is a word set in giant black type that fills with ink like a tank as the room fills.
- **Sources:** Tomorrowland ([404 page](https://www.tomorrowland.com/global/)): giant type as a container for content instead of a label for it. Teenage Engineering ([EP-133](https://teenage.engineering/products/ep-133)): hazard-triangle yellow and flat signal colour next to plain numerals. Lollapalooza ([lollapalooza.com](https://www.lollapalooza.com)): the festival poster voice, heavy type, one colour. Generated: a two-colour riso print of the act (black on fluorescent yellow, halftone, misregistration), blended into the paper with multiply.
- **Fonts:** Archivo at weight 900 (words, numerals), Space Mono (labels).
- **Colors:** fluorescent paper #FFFF13, ink #0B0B0B, riso red-orange #FF4B2B (a zone at 90 % or more and the bar sales block; always with black text on it).
- **Floor plan:** inside count as the top-left headline with the clock top right; left two thirds are four stacked zone words with their percentages in a column beside them; right column the lineup (ended acts struck through, current act a black bar with a progress line) over the riso print; a black band at the bottom with four door counters and the bar sales as a red-orange block. No cards, no tiles.
- **Motion:** the liquid in each word slops (two sine waves, bigger after every scan) with a red-orange layer printed slightly off register under the black, ticket scans flash the door number and push the level up, counters and clock run, the progress line on the current act grows.
- **Files:** `with/directions/c.html`, `c.png`, `c.mp4` (image `img/riso-mira.webp`).

## Recommendation

A. It is the only one where the picture itself is the data: from across the room you see whether the floor is full before you read a number, and a photo that fills up while you watch is something people film. B is the safest to read and the most recognisably "broadcast", and the multiviewer idea stays strong if the wall display is the main use. C is the most daring and the loudest from 2 m, but the poster is a metaphor dressed over a work tool (the skill warns about that), so it fits a festival's public screen better than the office wall. Possible mix: A's floor plan with B's rundown and ticker lines.

Caveats: the room photos are generated, so a real build would shoot or regenerate them from the venue's actual hall, and zone regions for the reveal would be drawn for that photo. Motion in the files is implemented live (canvas and CSS), the mp4s are screen recordings of it.
