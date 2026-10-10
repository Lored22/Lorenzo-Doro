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
- Product details, persistent demo bag, quantity controls and a review/confirmation flow with no personal-data fields.
- Native modal dialogs, keyboard focus handling, accessible labels, reduced-motion support and a mobile navigation menu.
- English/Korean page copy, metadata, social titles/descriptions, image alternatives and controls.
- A readable English catalogue in the HTML when JavaScript is unavailable. Demo controls are disabled until the script loads.

Only `veroLang` and `veroCart` are stored locally, when browser storage is available. Invalid or obsolete cart data is discarded. Newsletter input is reset locally; it is never saved or submitted by the demo. Google Fonts is an external font request; system font fallbacks remain available.

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
3. Filter/sort products, change quantities, remove the last item and finish a demo order.
4. Reload with Korean selected, with a populated bag and with browser storage unavailable.
5. Disable JavaScript to inspect the readable static catalogue.

## Files and deployment

`index.html` contains the static English fallback. `app.js` contains catalogue data, translation dictionaries and interactions; keep static text and cards aligned when editing the catalogue. `styles.css` owns all styling. There are no separate preview override files.

For GitHub Pages, select **GitHub Actions** in Settings → Pages. `.github/workflows/pages.yml` deploys only `index.html`, `app.js`, `styles.css` and `assets/` after a push to `main` or a manual dispatch. Opening/updating a pull request does not deploy the site.

The active language is a browser-local preference on one URL. This implementation does not create independently indexed Korean URLs or `hreflang` alternates. Canonical URLs and absolute social-image URLs should be configured only after confirming the intended public hostname.

Before commercial launch, validate suppliers, ingredients, allergens, origin, Korean import and labelling requirements, taxes, prices, delivery, payments and privacy terms. Do not present this preview as an available ordering service.
