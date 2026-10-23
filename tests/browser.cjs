const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const server = http.createServer((req,res) => {
  const file = path.join(root, req.url.split('?')[0] === '/' ? 'index.html' : req.url.split('?')[0]);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (err,data) => {
    if(err) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', ({'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp'})[path.extname(file)] || 'text/plain');
    res.end(data);
  });
});
(async () => {
  await new Promise(resolve => server.listen(4173,'127.0.0.1',resolve));
  const browser = await chromium.launch();
  try {
    for(const width of [360,768,1440]) for(const lang of ['en','ko']) {
      const page = await browser.newPage({viewport:{width,height:900}});
      const errors=[]; page.on('pageerror',e=>errors.push(e.message));
      await page.goto('http://127.0.0.1:4173');
      if(lang==='ko') await page.locator('#langBtn').click();
      assert.equal(await page.locator('html').getAttribute('lang'),lang);
      assert.equal(await page.locator('#boxGrid .product-card').count(),3);
      assert.equal(await page.locator('#productGrid .product-card').count(),7);
      const overflow=()=>page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
      assert.equal(await overflow(),false,`catalog overflow ${width}/${lang}`);
      if(width<=800) {
        await page.locator('#menuBtn').click();
        assert.equal(await page.locator('#menuBtn').getAttribute('aria-expanded'),'true');
        await page.locator('#mainNav a').first().click();
        assert.equal(await page.locator('#menuBtn').getAttribute('aria-expanded'),'false');
      }
      await page.locator('[data-detail="sauce"]').first().click();
      assert.equal(await page.locator('#productDialog').evaluate(d=>d.open),true);
      await page.keyboard.press('Escape');
      await page.locator('[data-add="sauce"]').first().click();
      if(width<=800) {
        assert.equal(await page.locator('#quickBag').isVisible(),true);
        await page.locator('#quickBag').click();
      } else await page.locator('#cartBtn').click();
      await page.locator('[data-close="cartDialog"]').first().click();
      await page.locator('[data-add="date"]').click();
      assert.equal(await page.locator('#cartDialog').isVisible(),true);
      await page.locator('#checkoutBtn').click();
      await page.locator('#shippingForm button[type=submit]').click();
      assert.equal(await page.locator('#recipient').getAttribute('aria-invalid'),'true');
      await page.locator('#useSample').click();
      await page.locator('#shippingForm button[type=submit]').click();
      assert.equal(await page.locator('#reviewStep').isVisible(),true);
      assert.equal(await overflow(),false,`checkout overflow ${width}/${lang}`);
      await page.locator('#backDelivery').click();
      assert.equal(await page.locator('#recipient').inputValue(),'Demo Guest');
      await page.locator('#shippingForm button[type=submit]').click();
      await page.locator('#placeOrder').click();
      assert.equal(await page.locator('#success').isVisible(),true);
      assert.equal(await page.locator('#cartCount').textContent(),'0');
      assert.deepEqual(errors,[]);
      console.log(`PASS ${width}px ${lang}: menu, detail, cart, validation, review, completion, overflow`);
      await page.close();
    }
  } finally { await browser.close(); server.close(); }
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
