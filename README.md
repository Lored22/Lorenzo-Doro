# Vero Seoul — partner preview

A bilingual English/Korean concept for an Italian gourmet brand in Seoul. This is an illustrative catalogue, not an operational shop. Products, packaging, sample prices, suppliers and fulfilment remain subject to validation.

## Run locally

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. There is no build step or runtime dependency.

## Experience

- Responsive editorial layout, distinct CSS packaging illustrations and the existing hero image.
- Three gift-box concepts with explicit contents; six pantry products with category filters and price sorting.
- Product details, persistent demo bag, quantity controls and a guided delivery/address, review and confirmation flow.
- Native modal dialogs, keyboard focus handling, accessible labels, reduced-motion support and a mobile navigation menu.
- English/Korean page copy, metadata, social titles/descriptions, image alternatives and controls.
- A readable English catalogue in the HTML when JavaScript is unavailable. Demo controls are disabled until the script loads.

Only `veroLang` and `veroCart` are stored locally, when browser storage is available. Invalid or obsolete cart data is discarded. Delivery fields are held only in the open checkout, rendered in an escaped review, and cleared when the checkout closes or completes. Use the fictional sample-data button to test safely. Newsletter input is reset locally; neither form saves or submits personal details. Google Fonts is an external font request; system font fallbacks remain available.

## Checks

Requires Node.js 20 or newer. No package installation is needed.

```sh
node --check app.js
node --test tests/app.test.cjs
```

GitHub Actions runs these checks for pull requests and pushes to `main`. Tests execute application code using a DOM adapter and check static content. They do not replace real browser, visual or assistive-technology testing.

Suggested browser review before merging:

1. Check 360px, 768px and 1440px widths in English and Korean.
2. Open/close the mobile menu, details, bag and checkout using keyboard and Escape.
3. Filter/sort products, change quantities, remove the last item, fill delivery details (or use the fictional sample), review/edit the address and finish a demo order.
4. Reload with Korean selected, with a populated bag and with browser storage unavailable.
5. Disable JavaScript to inspect the readable static catalogue.

## Files and deployment

`index.html` contains the static English fallback. `app.js` contains catalogue data, translation dictionaries and interactions; keep static text and cards aligned when editing the catalogue. `styles.css` owns all styling. There are no separate preview override files.

For GitHub Pages, select **GitHub Actions** in Settings → Pages. `.github/workflows/pages.yml` deploys only `index.html`, `app.js`, `styles.css` and `assets/` after a push to `main` or a manual dispatch. Opening/updating a pull request does not deploy the site.

The active language is a browser-local preference on one URL. This implementation does not create independently indexed Korean URLs or `hreflang` alternates. Canonical URLs and absolute social-image URLs should be configured only after confirming the intended public hostname.

Before commercial launch, validate suppliers, ingredients, allergens, origin, Korean import and labelling requirements, taxes, prices, delivery, payments and privacy terms. Do not present this preview as an available ordering service.

## QA acceptance matrix

Run against the PR head, not the `main` Pages deployment. Record commit, browser/version, viewport height and width, language, PASS/FAIL and evidence. Every browser result remains **not run** until recorded by a tester.

| Scenario | Source | Automated evidence (test order) | Browser acceptance |
| --- | --- | --- | --- |
| 360/768/1440 × EN/KO | styles.css, index.html, app.js | No rendered-layout coverage | All six combinations: full page, details, bag, delivery and review; no clipped text, overlapping controls or horizontal overflow. Checkout stacks at 900px; delivery fields stack at 540px. |
| Language and metadata | app.js translate/pageMetadata/copy; index.html data-i18n | T1 metadata; T7/T20 key coverage; T14 errors; T19 sample feedback | Toggle EN/KO, inspect all metadata, labels and open states; reload retains language when storage works. |
| Mobile menu | app.js closeMenu/listeners; styles.css 800px breakpoint | T6 aria-expanded and Escape | Touch/keyboard opening; Escape returns focus; link and outside click close; resizing resets open state; anchor destination receives focus. |
| Native dialogs | index.html dialog; app.js openDialog/close; styles.css | DOM simulation only; T15 queued close regression; T18 description targets | Tab/Shift+Tab stay inside, background inert, Escape/X/backdrop close, focus returns sensibly, tall content scrolls. |
| Filters/sort and box contents | app.js renderProducts/renderDetail/boxes | T3 subset/order samples; T4 Discovery KO; T9 bundle progression | Every filter/sort; 2/5/6 box contents consistent in cards/details/bag/review; EN/KO. |
| Bag/quantities/empty state | app.js renderCart/saveCart | T5 totals, persistence, limit; T16 last removal | Quantity controls keep focus; remove final item; empty state and disabled checkout; reload populated bag. |
| Delivery/review/edit/complete | app.js validation, step transitions, resetShipping; index.html shippingForm | T9–T12; T14 errors | Required-field errors and correction, fictional sample, review/edit, back to bag, X/Escape/backdrop clearing, complete/reopen. No real payable total, payment or shipment. |
| Blocked/corrupt storage | app.js storage/readCart/sanitizeCart | T2 startup/corrupt/stale data; T13 complete flow with reads/writes throwing | Actually deny reads and writes, then language/bag/checkout; no crash. Reload persistence is not expected while blocked. Incognito alone is not this test. |
| No JavaScript | index.html static catalogue; styles.css html:not(.js) | T7 nine static cards; T8 IDs/anchors/assets; T17 newsletter guard | Reload with JS disabled at all widths; readable English catalogue, visible section navigation, working FAQ/anchors, disabled demo controls. |
| Assistive technology | labels, live regions, CSS focus/reduced-motion/forced-colors | T20 reference integrity; T18 active description; CSS declarations inspected only | **NOT RUN:** screen-reader names/announcements on delivery, review, errors and completion; visible focus, reduced motion and forced colors in a real browser. |
| Network behavior | app.js submit handlers/storage; index.html forms/fonts | T6 handler simulation; T8 form markup; T11–T12 storage adapter; T17 fallback guard | **NOT RUN:** DevTools Network with Preserve log through newsletter and full checkout. Verify no navigation or outbound request carrying fictional form details; separately record initial asset and Google Fonts requests and blocked-font fallback. |

Automated checks use a small DOM adapter, not a browser. They do not certify viewport layout, native dialog focus trapping, screen-reader behavior or network traffic. Keep the PR in draft until the real-browser acceptance review is recorded.


## Static and adapter audit — 2026-10-14

Reviewed baseline: `1f273fd04e2fbc21abcbb934b28f8a6f6f55b3a3` on PR #1. This audit covers the PR runtime, tests, README and CI/Pages workflow changes; deleted preview overrides have no remaining runtime references.

| Evidence class | Verified here | Explicit limit |
| --- | --- | --- |
| Static source/file checks | JS syntax; nine fallback cards; unique HTML IDs; local assets/anchors; EN/KO key parity; static label/ARIA reference targets; workflow commands and runtime packaging | Text/reference integrity is not rendered layout, accessible-name computation or successful hosted deployment. |
| Executed Node DOM adapter | Metadata preference, cart/filter samples, validation, escaped review, clearing, simulated blocked storage, queued-close guard, active checkout description and sample feedback | The adapter creates synthetic elements for selectors, does not parse the real HTML, and does not implement native dialog focus/inertness, default form actions, media queries, CSS or HTTP. A passing simulation cannot establish browser acceptance. |
| Real browser | **NOT RUN** for every browser acceptance row above | 360/768/1440 × EN/KO, touch/keyboard/resizing, native dialogs, disabled JS/storage and network evidence remain required. |
| Assistive technology | **NOT RUN** | Screen reader, announcements, focus visibility and operating-system accessibility settings need an actual browser/AT combination. |

Closed source-level gaps:

- Disable the newsletter input in fallback HTML until its submit handler is installed; use `method="dialog"` as a declarative no-navigation guard. This closes an active no-JS input gap without treating source inspection as a browser form test.
- Point the completed checkout description at its visible success explanation, then restore the delivery notice on reopening. Previously the completion description still referenced the hidden form notice.
- Translate the fictional-sample status when the language changes, without reviving a status cleared by user input.
- Add T17–T20 for those regressions and translation/reference integrity.

Local validation after these changes: **PASS** `node --check app.js`; **PASS** `node --test tests/app.test.cjs` (20/20); **PASS** `git diff --check`. Executed with Node v24.19.0; CI is configured for Node 22. This record is local evidence, not a claim that GitHub Actions ran or passed on the new commit.

Browser/AT results have intentionally not been promoted to PASS. Keep the PR open in draft. For each outstanding result record the tested commit, browser/version (and AT/version when applicable), viewport width/height, EN or KO, steps, expected/actual result and screenshot or other evidence. Reuse the acceptance criteria above; use fictional personal details only. Do not reuse the older private preview as evidence for the updated code unless it has been rebuilt from the tested commit.
