# Crate, with Art Director: three directions (step 3, nothing built beyond the key screen)

Brief typed by the user: "Design the main screens of a mobile app for Crate, an independent vinyl record shop: new arrivals, your place in the listening booth queue, and a record detail page. Show the three screens side by side, each at iPhone size (390x844)."

## Brief in three sentences
Crate is the phone companion of an independent record shop: customers see what just came in, keep their place in the queue for the single listening booth, and open a record to hear, hold or buy it. It is for people who dig for records and want the app to feel like the bins, not like a shop checkout. Light or dark is open, nothing is fixed by a brand; the one thing people should remember is how a new arrival physically moves under the thumb.

Sketches (key screen, 390x844, motion implemented): `with/directions/{a,b,c}.html`, stills `{a,b,c}.png`, captures `{a,b,c}.mp4`. The same eight invented sleeves (Gemini, no real album art, no rendered text) are used in all three.

## Research (what was actually looked at)
Real pages opened in headless Chromium: ninjatune.net/releases, nike.com/launch (SNKRS), rijksmuseum.nl, bandcamp.com, screenlane.com, uisources.com (ScreensDesign), pttrns.com, refero.design. Blocked or useless: mobbin.com (page crashed headless, search needs login), saasframe.io and warp.net (Cloudflare check), tidal.com (empty shell). The scroll recordings of the Rijksmuseum (crashed) and SNKRS (only skeleton loaders) did not show useful motion, so motion ideas come from the live behaviour of the pages on screen plus the interaction patterns named below, not from contact sheets.

## A. Dig
- Idea: the app is the crate itself. You flick through arrivals the way you flip through a bin.
- Sources: [Ninja Tune releases](https://ninjatune.net/releases): covers are the whole UI, the grid has nothing but sleeve, title, artist and a "PRE-ORDER" tag; so the cover stays full width and all chrome is reduced to a mono label strip. [Bandcamp front page](https://bandcamp.com): "Selling right now" row with "sold 32 seconds ago" stamps shows how a shop can feel live with one line of mono text, used for the booth pill.
- Fonts: Bricolage Grotesque (800 titles) + DM Mono (labels).
- Colors: bone `#ECE9E1`, cobalt `#1E3BFF`, ink `#11131A`. Light, no black background, no orange.
- Floor plan: no tab bar, no list. Top: wordmark left, booth queue pill right. Centre: one 340 px sleeve in front, the next four peek above it as label strips like the tops of records in a bin. Below: title, artist, price, then two thumb buttons (Hear it in the booth, Hold). A 3 px rail on the right edge counts position.
- Motion: vertical drag with a spring. The front sleeve tips forward (rotateX about its bottom edge, sliding down and fading) while the stack behind rises one notch in perspective. Wheel and swipe both work, release snaps to a record.

## B. Flood
- Idea: each record owns the whole screen. The background takes the sleeve's colour, and a giant artist name stands behind the sleeve like a poster.
- Sources: [Rijksmuseum](https://www.rijksmuseum.nl/en): wordmark at full-bleed width, cropped by the screen, behind a lit object; taken as cropped giant type behind the cover. [Nike SNKRS](https://www.nike.com/launch): one weekly poster next to large single-product tiles, a drop feed with huge white space and a countdown-style status; taken for the one-product-per-screen rhythm and the dock with a live progress ring.
- Fonts: Anton (giant name, cropped), Syne 800 (titles, wide), Instrument Sans (body).
- Colors: lime `#D6F24A` (first record; the palette is per record: red-orange, cobalt, yellow, magenta, pink, violet, grey), ink navy `#14123A`, white/cream for text on dark floods.
- Floor plan: horizontal carousel. Sleeve top-left at 300 px, the artist name at 270 px sits behind and below it and is cut off by the screen edge, title and price under it, and a rounded dock at the bottom holds the queue (progress ring with the place number, time estimate, Hold it).
- Motion: drag follows the finger. Background, text and dock colours interpolate continuously between neighbouring records, sleeve leans 5 degrees per step and shrinks when off centre, and the giant name moves at 300 px per step against the sleeve's 340 px, so type and cover drift apart like layers.

## C. Pile (the one a cautious designer would not propose)
- Idea: no list at all. New arrivals are thrown onto the shop bench; you push them around with your fingers.
- Sources: [Ninja Tune releases](https://ninjatune.net/releases): the price/pre-order sticker stuck onto the corner of a cover, turned into coral price stickers. [Bandcamp](https://bandcamp.com) and record-shop counters in general: the tangle of sleeves on a counter is what the direction simulates; the queue is a torn ticket stub.
- Fonts: Bowlby One (headline, big number on the ticket) + Chivo Mono (everything else).
- Colors: concrete `#D8D6CE` with paper grain, signal coral `#FF3D5A`, ink `#141414`.
- Floor plan: a bench surface under a stacked "NEW IN." headline, eight sleeves lying at different angles and overlapping it, each with its price sticker; bottom edge is a perforated ticket "4, Listening booth, you're 4th, about 11 min". No nav, no cards, no grid.
- Motion: on load the sleeves fall from above with gravity and bounce once onto the bench. Drag lifts a sleeve to the top, release throws it with inertia, friction and a wall bounce, and its rotation follows the throw. Tap enlarges one and shows its caption.

## Recommendation
C, refined: it is the only one that could not be mistaken for a shop app, the motion is physical and tied to the act of shopping in a record store, and it passes the "would get a screenshot on Mobbin" bar because nobody has seen a catalogue as a pile. Its risk is findability (8 records fit, 200 do not), so the real app needs a bin view behind "see all" and B's full-screen record as the detail page. If the client is risk-averse, B: strongest as a set of three screens, because the colour flood carries from arrivals into detail and into the booth queue with no extra design work.

## Assumptions
Invented shop data (artists, prices, queue place 4). Status bar and home indicator are drawn for scale only. Only the key screen exists per direction; queue and detail screens are not sketched until the user picks. Nothing committed.
