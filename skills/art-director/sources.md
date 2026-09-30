# Inspiration sources

"JS" means the page ships an empty shell to plain HTTP clients, so view it in a real browser.
Remove sources that stay blocked instead of failing on them every time.
Add your own in `~/.claude/art-director/sources.md`.

## Websites and landing pages

| Source | Strength | Access |
|---|---|---|
| https://godly.design | lots of unusual work, sections for hero, CTA, footer, apps | ok |
| https://21st.dev | premium React components, good for single effects | ok |
| https://land-book.com | large landing page collection, filter and search by industry (`?search=film`) | ok, sometimes Cloudflare |
| https://www.awwwards.com | award winners, heavy on motion and WebGL, category pages | ok, dismiss the cookie layer |
| https://minimal.gallery | calm, typographic, editorial | ok |
| https://www.curated.design | curated, mixed industries | ok |
| https://onepagelove.com | one-pagers and portfolios | ok |
| https://httpster.net | opinionated, often loud sites | ok |
| https://recent.design | new sites | ok |
| https://supahero.io | hero sections only | ok |
| https://www.footer.design | footers only, filter by style (typographic, unusual layout, WebGL) | ok |
| https://mubi.com, https://a24films.com | real film brands, worth viewing directly for anything cinematic | ok in a real browser |
| https://cosmos.so | moodboards, good for mood beyond the web | ok |
| https://savee.it | moodboards, graphic design and photography | Cloudflare check in headless browsers |
| https://www.darkmodedesign.com | dark sites only | loads empty in headless browsers |
| https://www.siteinspire.com | curated, filter by style | often rate limited |
| https://www.lapa.ninja | landing pages | blocks automated access (403) |

## SaaS and app interfaces

| Source | Strength | Access |
|---|---|---|
| https://mobbin.com | the largest collection of real app screens (iOS, Android, web) | search needs an account |
| https://refero.design | real product screens, search by screen type | few results without an account; use the search field on the front page, `?q=` is ignored |
| https://www.saasframe.io | SaaS screens by type | ok |
| https://saaspo.com | SaaS websites | ok, sometimes Cloudflare |
| https://pricingpages.design | pricing pages only | ok |
| https://screenlane.com | app screens and flows | ok |
| https://uisources.com | app interactions | ok |
| https://www.pttrns.com | iOS patterns | ok |
| https://collectui.com | single UI challenges by category | ok |
| https://www.uidesigndaily.com | single screens | ok |

## Dashboards, data, tools

| Source | Strength | Access |
|---|---|---|
| https://mobbin.com | filters "Dashboard", "Analytics" | account |
| https://bentogrids.com | bento layouts | ok |

## Components and micro-interactions

| Source | Strength | Access |
|---|---|---|
| https://21st.dev | buttons, cards, heroes, shaders | ok |
| https://uiverse.io | buttons, loaders, toggles as plain HTML/CSS | ok |
| https://navbar.gallery | navigation | ok |
| https://www.cta.gallery | calls to action by type (button, form, newsletter, pricing, modal) | ok |
| https://www.checklist.design | what a given screen type needs | JS |

## Lessons

- Four gallery front pages are not enough research. The result reads as "AI made this".
  What works: **brands next to the category**, looked at directly. A habit tracker learns more from
  premium wellness and audio brands than from other habit trackers.
- A **motif** from the product name or the scene of use gives a direction a spine
  (a filing cabinet for a compliance tool, a darkroom for a photo app).
  Keep the motif on the marketing site. Inside the tool itself, sober usually wins: tools built around
  a metaphor from the scene of use (a signal box, flight strips, a switchboard) were rejected outright,
  while the same product in a calm modern dark look with one warm light was approved.
- Example neighbour lists that worked: for a compliance
  tool, harvey.ai, legora.com, mercury.com, vanta.com, attio.com, linear.app; for a privacy photo app,
  halide.cam, darkroom.co, mullvad.net, teenage.engineering; for a developer tool, warp.dev, zed.dev,
  raycast.com, superhuman.com, cursor.com.
- Some brand sites block or break headless browsers (Letterboxd behind Cloudflare, redirect loops on
  flighty.com and arc.net). Skip them quickly instead of fighting.
- nicelydone.club no longer exists.
- For app ideas without a Mobbin account, real products of the category (their websites and
  screenshots in app stores) beat thin free gallery previews.
