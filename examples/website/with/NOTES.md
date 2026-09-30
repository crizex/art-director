# Halden, landing page with Art Director

**Brief.** Build a landing page for Halden, a sauna and cold-plunge club on a converted barge in Copenhagen harbour. Members book sessions online. The page has to carry the ritual (heat, plunge, rest), the barge, sessions with times and seats left, membership and the location.

**Directions sketched** (`directions/`)
- a "thermal": the sauna photo read as a thermal camera, temperature scale 82° to 4°, giant wordmark.
- b "waterline": harbour photo, HALDEN broken at the water surface, swimmer below.
- c: polaroids on orange.
- **Pick:** a and b mixed. Heat above the waterline, cold harbour below; scrolling dives from the sauna through the waterline into the plunge while the temperature scale runs along.

## Sources
Rotation from the skill's source lists (award-site hero and scroll-story galleries, footer and CTA galleries). Used for structure ideas only: a single continuous world instead of stacked sections, a fixed instrument rail, a pinned dive. No pixels copied.

## Fonts and colours
- Archivo variable (wdth 62..125): extended above the line, condensed uppercase below it. JetBrains Mono for readouts.
- Heat: ink #07020f, bone #f6efff, hot #ffb000, mag #ff2d87, cold cyan #46f0ff, ember #ff6a1a (booking pill).
- Cold: cobalt #0d1a8c fading to navy #060b45 and #04072c. Secondary text --sky #c8d3ff (cold), --mute #d6cfe4 (heat).

## Motion (GSAP + ScrollTrigger + Lenis, CDN)
- Hero: thermal lens (radial mask) follows the pointer or wanders, grows on scroll. Wavy waterline via animated clip-path; the wordmark reflection is flipped and refracted with an SVG feTurbulence/feDisplacementMap filter. Load timeline: scan line, lens opens, letters rise, water rises.
- Fixed temperature rail, 82°C to 4°C over scroll progress, with a 0 m tick at the dive (thin bar plus readout in the nav on mobile).
- Sessions: rows ordered hot to cold with heat bars; sticky image crossfades thermal/normal/plunge with the active row; native `<dialog>` booking form.
- The dive: pinned stage, image pans up through the waterline with annotation tags, cobalt veil, refracted "Below the line." heading.
- Cold zone: clip-path reveals, rising bubbles, floating booking pill.
- `prefers-reduced-motion`: no Lenis, no pin, static hero and dive, bars pre-filled.

## Assumptions I made
- Times, seats and temperatures are invented: 18:30 sauna 85°C 6 of 14 left; 06:30 82°C 3 left; 12:30 80°C full with waitlist; 08:00 plunge 4°C 8 of 12; 21:00 plunge 4°C 5 of 12.
- Membership 690 kr. a month, 212 members (cap 240), 38 waiting (about five weeks). Guests book 2 days ahead, members 14.
- Address Islands Brygge, Copenhagen S (no street number), coordinates about 55.6626 N, 12.5797 E.
- Barge built 1961 in Svendborg for coal, 31 m, carrying people since 2024.
- Email hello@halden.example. Booking is a front-end simulation, no backend. A booking is a 90-minute block.
- Photos are AI generated (gemini-bild), no text in images, compressed to webp under 300 KB.

## Checks run and what they changed
- Contrast measured on screenshots at 1440 and 400 px (small text min 6.79:1): added scrims behind hero text, raised the rail width, added mobile scrims for plunge and location.
- hallmark audit: cut the universal fade-up, clip-path reveal for figures, removed glows, overflow-x: clip, heading wrapping.
- web-design-guidelines: color-scheme, theme-color, touch-action, tabular-nums, text-wrap balance, dialog overscroll, input name/inputmode/autocomplete, translate="no" on the brand.
- Screenshots 1440x900 and 400x800: fixed the DEGREES overflow, a padding shorthand bug and a misplaced 0 m tick; no horizontal scroll at 400 px.
- Reduced-motion and dialog test: booking flow, waitlist and validation work.
- index.mp4 is assembled from stepped frames (load plus eased scroll through the whole ritual), because headless video recording crashed.
