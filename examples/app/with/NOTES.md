# Crate, with Art Director: the final three screens (direction B, Flood)

**Brief in three sentences.** Crate is the phone companion of an independent record shop: customers see what just came in, keep their place in the queue for the single listening booth, and open a record to hear, hold or buy it. It is for people who dig for records and want the app to feel like the bins, not like a shop checkout. The one thing to remember is how every record floods the whole screen with its own colour.

**Directions and the pick.**
- A Dig: the app is the crate, a vertical stack of sleeves you flip through.
- B Flood: each record owns the screen, its colour and a giant cropped name behind the sleeve. **Picked.**
- C Pile: sleeves thrown on a shop bench, dragged with inertia.

Files: `index.html` (open it, three phones at 390x844, all interactive), `img/` (8 generated sleeves, webp, 32 to 81 KB each), `index.mp4` (12 s capture, 0.85 MB, H.264), `directions/` and `DIRECTIONS.md` (step 3).

## Sources (what shaped the build)
- [Rijksmuseum](https://www.rijksmuseum.nl/en): wordmark at full-bleed width, cropped by the screen, behind a lit object. Became the giant Anton word behind each sleeve, and the giant place number on the queue screen.
- [Nike SNKRS](https://www.nike.com/launch): one product per screen and a dock with a live status. Became the bottom dock with progress ring and the countdown.
- [Ninja Tune releases](https://ninjatune.net/releases) and [Bandcamp](https://bandcamp.com): the sleeve is the UI, plus one mono-style "live" stamp. Became the LIVE tag on the person in the booth and the sleeve thumbnails in the queue bar.

## Fonts and colours
- Anton (giant cropped words and numerals, track numbers), Syne 800 (titles, prices, buttons), Instrument Sans (body). Google Fonts CDN.
- One flood colour per record, text colour chosen per record: lime `#D6F24A` / ink `#14123A`, red-orange `#FF4B2B` / `#1F0703`, cobalt `#1E3BFF` / `#FFFFFF`, yellow `#F4C90D` / `#1A1405`, magenta `#A8128A` / `#FFFFFF`, pink `#F7C6D6` / `#3A1530`, violet `#2B1B8C` / `#FFD9A0`, grey `#E5E3DE` / `#16161A`. Muted text is a 14 % mix towards the background.
- Page around the phones: `#0D0C12`.
- Contrast measured (WCAG formula, every flood): text on flood 5.77 to 14.15, muted text on flood 4.88 to 10.25, dock text (reversed) 5.77 to 14.15, muted dock text 4.54 to 10.64. Minimum 4.5.

## Motion
- Arrivals: drag follows the finger, colour, text and dock interpolate continuously between neighbours, sleeve leans 5 degrees per step, giant word drifts at 300 px per step against the sleeve's 340 px and fades between records. Velocity flick, wheel, arrow keys. A 0.22 nudge on load shows it moves.
- Flood: on the queue and detail screens a new colour grows as a circle (clip-path) from the sleeve or finger position, text swaps at 40 %.
- Detail opens from the sleeve: the sleeve flies from its place on the arrivals screen to its place on the detail page (FLIP), the colour circle grows from it, the rest rises in a stagger. Back reverses it.
- Queue: real ticking countdown, place number drops and slides in, queue chips slide left when someone leaves, colour floods to the record now playing in the booth, disc spins, equaliser.
- Detail: tap a track, the disc slides out of the sleeve and spins, the row opens a waveform that fills over a 30 s preview.
- `prefers-reduced-motion`: all animations and transitions off, spring snaps, floods are instant. The countdown still ticks because it is data.

## Assumptions I made
- All shop data, names, prices and the queue are invented. Sleeves are the eight generated images from step 3, no real album art.
- No audio: the preview is shown with waveform, progress and spinning disc only.
- Booth time is compressed for the demo: one listener gets 45 s instead of about 8 min, so the place changes while you watch. `?t=9` in the URL speeds the clock up (used for the capture). When you reach the booth the queue restarts.
- "Hold it" means hold the record at the counter, shared across all three phones. "Hold place" on the queue screen only marks that the door waits for you, it does not pause the clock. "Let next in" swaps you with the person behind.
- The three phones are separate apps on one page, state shared only for holds and the queue. Tapping the dock on phone 1 scrolls to the queue phone.
- The detail overlay on phone 1 closes by the back button or Escape, not by swipe down. Phone 3 switches records by sideways swipe or arrow keys.
- Status bar, island and home indicator are drawn for scale only.

## Checks run and what they changed
- Measured contrast for all eight floods: changed the red-orange text from cream (3.05) to near-black (5.77), the cobalt text to white, and the magenta from `#B5158F` to `#A8128A`; muted mix lowered from 22 % to 14 %.
- Screenshots at 1380 px (three phones) after each round: giant numeral on the queue screen overlapped its label, so it was shrunk and moved; the detail sleeve moved to the right so the title word stays readable; the "IN BOOTH" tag became "LIVE"; price moved off the title; queue buttons shortened so they stay on one line.
- hallmark (audit): the "NEW IN THIS WEEK" eyebrow above every title is a known tell, removed. Structure is not the AI template (full-screen carousel, dock, no cards, no feature rows).
- web-design-guidelines: added `touch-action: manipulation`, `overscroll-behavior: contain` on the tracklist, `theme-color`, explicit image width and height, non-draggable images (the native image drag was eating the swipe on the detail screen, found while recording). Already fine: labels on icon buttons, `aria-live` status for place changes, `:focus-visible` rings, keyboard alternatives to swipes, tabular numbers. Left as is on purpose: clip-path and grid-row animations (not only transform/opacity), no skip link (single page of three demo phones).
