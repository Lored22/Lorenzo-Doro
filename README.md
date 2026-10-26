# Vero Seoul — partner preview

A bilingual English/Korean concept for an Italian gourmet brand in Seoul. This is an illustrative catalogue, not an operational shop. Products, packaging, sample prices, suppliers and fulfilment remain subject to validation.

**Partner preview:** [Open Vero Seoul](https://lored22.github.io/Lorenzo-Doro/) — the same responsive URL serves desktop and mobile.

## Current project status

Status checked on 2026-10-26 against `main` at [`a538e91`](https://github.com/Lored22/Lorenzo-Doro/commit/a538e91c35c9749773f1a55f10e4a13381d8540b).

- [PR #1](https://github.com/Lored22/Lorenzo-Doro/pull/1) was merged on 2026-10-23 as `b12ef36`. Its old draft instructions and pre-merge deployment notes are historical, not current requirements.
- `a39eef2` added browser checks to the Pages workflow; `a538e91` versioned the CSS/JavaScript asset URLs to reduce stale assets after deployment.
- The [check workflow](https://github.com/Lored22/Lorenzo-Doro/actions/runs/39907989357) and [Pages workflow](https://github.com/Lored22/Lorenzo-Doro/actions/runs/39907989437) both completed successfully for that exact head on 2026-10-23. The Pages job logs report 26/26 Node tests and all six automated Chromium viewport/language scenarios passing, followed by successful publication to the preview URL above.
- These are recorded CI/deployment results for that commit, not a claim that every manual acceptance check or the live hosted site has been independently verified. Outstanding checks are listed below.

## Experience and demo limits

- Task-first homepage: concise hero, three comparable boxes, how it works, individual products, FAQ and brand story.
- Three gift-box concepts with all 2/5/6 contents visible on the cards; seven pantry products with category filters and price sorting.
- Product details, persistent demo bag, quantity controls and a guided delivery/address, review and confirmation flow.
- Dedicated nonmodal bag/checkout screens with progress and browser Back handling. Only product details use a native modal dialog. A quick bag control is available on smaller screens when the bag is populated.
- English/Korean copy, metadata, social titles/descriptions, image alternatives and controls.
- A readable English catalogue when JavaScript is unavailable; demo controls remain disabled until the script loads.

Only `veroLang` and `veroCart` are stored locally, when browser storage is available. Invalid or obsolete cart data is discarded. Delivery fields remain in memory during the shopping journey, including bag edits and backward navigation. They appear in an escaped review and are cleared on leaving or completing the journey. Reload does not restore personal fields. Use the fictional sample-data button for testing.

Newsletter input is reset locally; neither form is designed to submit personal details. No real order, payment, subscription or shipment occurs. Actual outbound traffic still needs the network review below. Google Fonts makes external font requests; system font fallbacks are provided.

Peperoni Cruschi is the seventh standalone product; taralli and the existing box contents are retained. Its proposed 25g format and ₩9,900 sample price are placeholders, not supplier-verified terms. Cruschi is not included in the boxes; calzoncelli is not in the catalogue.

## Run locally

From the repository root:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. There is no build step or runtime package dependency.

## Automated checks

The Node checks require Node.js 20 or newer and no package installation. CI uses Node 22.

```sh
node --check app.js
node --test tests/app.test.cjs
```

The 26 Node tests use static checks and a small DOM/history adapter. They cover catalogue/translation integrity, metadata, cart/validation/review behavior, delivery preservation and clearing, simulated navigation, and blocked/corrupt storage. The adapter does not implement browser layout, native dialog behavior or HTTP.

To run the separate browser suite locally (matching the Pages workflow):

```sh
npm install --no-save --package-lock=false playwright@1.56.1
npx playwright install --with-deps chromium
node tests/browser.cjs
```

The suite starts its own local HTTP server on `127.0.0.1:4173`; leave that port available. Playwright/Chromium are test tools only.

| Workflow | Trigger | Checks and output |
| --- | --- | --- |
| [checks.yml](.github/workflows/checks.yml) | Pull requests and pushes to `main` | JS syntax and 26 Node tests. Does not run Chromium or publish. |
| [pages.yml](.github/workflows/pages.yml) | Pushes to `main` or manual dispatch | Syntax and Node tests, then Playwright Chromium checks; packages runtime files and publishes only after those steps succeed. PR updates alone do not deploy. |

### Recorded browser coverage and remaining acceptance

[tests/browser.cjs](tests/browser.cjs) uses headless Chromium at **360×900, 768×900 and 1440×900**, each in **English and Korean**. The successful Pages run linked above records six PASS results. It tests locally served checked-out files before deployment, not the hosted Pages URL.

| Area | Recorded automated evidence at `a538e91` | Still to verify manually |
| --- | --- | --- |
| Responsive catalogue and checkout | Correct language; 3 box/7 product cards; no horizontal overflow on the catalogue and review screen at all six combinations | Full visual inspection of every screen, clipped/overlapping text and controls, other viewport heights, touch and physical devices; Firefox and Safari/iOS |
| Mobile menu | Opens and closes after a navigation-link click at 360/768px | Keyboard/Escape focus return, outside click, resize behavior and destination focus |
| Product details | Sauce dialog opens and Escape is exercised | Assert close/focus return; Tab/Shift+Tab trapping, background inertness, backdrop/X closing and tall-content scrolling |
| Shopping journey | Add individual product and box, quick bag at narrow widths, bag navigation, required-field error, sample details, review, return to delivery with recipient retained, completion and empty cart count; no uncaught page errors | Every filter/sort/product and quantity/empty-state interaction in browser; address preservation through bag quantity edits; actual browser Back, scroll and focus; exit/reopen clearing |
| Language and storage | Node adapter tests translation keys, metadata, persistence and storage failures; Chromium toggles language during each KO scenario | Metadata/open-state inspection, reload persistence, actually blocked/corrupt storage in browser; incognito alone is not a blocked-storage test |
| No JavaScript | Static catalogue, IDs/anchors/assets and fallback guards checked by Node tests | Reload with JS disabled at all three widths; English catalogue, FAQ/anchors/navigation and disabled demo controls |
| Accessibility | Source/adapter checks for labels, ARIA references and state | **NOT RUN:** screen-reader names/announcements, errors/completion, visible focus, reduced motion and forced colors with an actual browser/AT combination |
| Network and hosted site | Pages publication succeeded; browser suite uses a local server | **NOT RUN:** independent hosted-site smoke test and DevTools Network review through newsletter/checkout with Preserve log; confirm no requests/navigation carrying fictional form details, record font/asset requests and blocked-font fallback |

Passing headless Chromium scenarios do not certify visual quality, all native dialog behavior, assistive technology, privacy/network behavior or physical-device support. For each new acceptance result, record the tested commit, URL, browser/version (and AT/version), viewport width/height, language, steps, expected/actual outcome and evidence. Use fictional personal details only. Do not mark untested cases PASS or reuse an older private preview as evidence for current `main`.

## Files and deployment

- `index.html`: static English fallback and versioned CSS/JS references (`?v=20261023` at the reviewed head).
- `app.js`: catalogue, translation dictionaries and interactions; keep fallback cards/text aligned when editing the catalogue.
- `styles.css`: all styling; there are no separate preview override files.
- `assets/`: site imagery.
- `tests/app.test.cjs` and `tests/browser.cjs`: Node adapter/static checks and Chromium checks, respectively.

GitHub Pages uses **GitHub Actions** as its publishing source. The Pages workflow packages only `index.html`, `app.js`, `styles.css`, `assets/` and a generated `.nojekyll` into `_site`. README, tests and test dependencies are not included in that website artifact; they remain visible in this public repository. Update the asset version references when changed CSS/JS needs a new cache key.

The active language is a browser-local preference on one URL. There are no independently indexed Korean URLs or `hreflang` alternates. A successful Pages deployment does not settle the final commercial hostname or SEO strategy: canonical URLs and absolute social-image URLs remain unconfigured pending that decision.

Before commercial launch, validate suppliers, ingredients, allergens, origin, Korean import/labelling requirements, taxes, prices, delivery, payments and privacy terms. Do not present this preview as an available ordering service.

## Historical context

The source audit and task-first UX/catalogue notes from 2026-10-14 described intermediate PR #1 revisions with 20, then 24, then 26 Node tests. Their statements that PR #1 should remain in draft, all browser checks were unrun and no merge/Pages deployment had occurred applied to those earlier stages only. See the [pre-update README](https://github.com/Lored22/Lorenzo-Doro/blob/a538e91c35c9749773f1a55f10e4a13381d8540b/README.md) for that audit trail and PR #1 for implementation history. The current status and remaining acceptance work are documented above.
