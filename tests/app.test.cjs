const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
// The suite exercises application code with a small DOM adapter, not a browser renderer.
function boot(saved = {}, blocked = false) {
  const elements = new Map();
  function element(key) {
    if (!elements.has(key)) {
      const classes = new Set();
      elements.set(key, {
        id: key, dataset: {}, attributes: {}, listeners: {}, innerHTML: '', textContent: '', content: '', hidden: false, disabled: false,
        classList: { add: x => classes.add(x), remove: x => classes.delete(x), contains: x => classes.has(x), toggle(x,on) { if (on ?? !classes.has(x)) classes.add(x); else classes.delete(x); } },
        removeAttribute(k) { delete this.attributes[k]; }, setAttribute(k,v) { this.attributes[k] = v; }, getAttribute(k) { return this.attributes[k]; },
        addEventListener(k,f) { this.listeners[k] = f; }, focus() { document.activeElement = this; }, reset() { this.didReset = true; },
        showModal() { this.open = true; }, close() { this.open = false; this.listeners.close?.(); },
        getBoundingClientRect() { return {left:0,right:400,top:0,bottom:600}; }
      });
    }
    return elements.get(key);
  }
  const dialogs=['cartDialog','productDialog','checkoutDialog'].map(element);
  const filters=['all','truffle','table'].map(id=>{const e=element('filter-'+id);e.dataset.filter=id;return e;});
  const document = {
    documentElement: element('html'), body: element('body'), listeners: {},
    getElementById: element,
    querySelector(selector) {
      if (selector === 'dialog[open]') return dialogs.find(d=>d.open) || null;
      return element(selector);
    },
    querySelectorAll(selector) { if (selector === 'dialog') return dialogs; if (selector === '[data-filter]') return filters; return []; },
    addEventListener(k,f) { this.listeners[k] = f; }
  };
  const stored={...saved};
  const context=vm.createContext({document,location:{hash:''},localStorage:{getItem(k){if(blocked)throw Error('blocked');return stored[k]??null;},setItem(k,v){if(blocked)throw Error('blocked');stored[k]=v;}},setTimeout:()=>1,clearTimeout(){}});
  vm.runInContext(source,context);
  return {context,document,element,stored,run:code=>vm.runInContext(code,context)};
}
test('English fallback and social metadata stay aligned; KO persists and toggles back',()=>{
 const app=boot();
 assert.equal(app.document.documentElement.lang,'en');
 assert.equal(app.document.title,html.match(/<title>(.*?)<\/title>/)[1]);
 assert.equal(app.element('meta[name="description"]').content,html.match(/name="description" content="([^"]+)"/)[1]);
 app.element('langBtn').listeners.click();
 assert.equal(app.document.documentElement.lang,'ko');
 assert.match(app.document.title,/파트너 프리뷰/);
 assert.equal(app.element('meta[property="og:title"]').content,app.document.title);
 assert.equal(app.element('meta[property="og:locale"]').content,'ko_KR');
 assert.equal(boot(app.stored).document.documentElement.lang,'ko');
 app.element('langBtn').listeners.click();assert.equal(app.document.documentElement.lang,'en');
});
test('invalid language, corrupt cart, blocked storage and stale SKUs do not break startup',()=>{
 for(const input of ['{broken','null','[]','"bad"']) assert.equal(boot({veroLang:'it',veroCart:input}).run('total()'),0);
 const app=boot({veroCart:JSON.stringify({sauce:200,pasta:2,unknown:3,honey:-1,salt:1.5})});
 assert.equal(app.run('cart.sauce'),99);assert.equal(app.run('Object.keys(cart).length'),2);
 assert.equal(app.run('total()'),99*18900+2*9900);
 assert.equal(boot({},true).document.documentElement.lang,'en');
});
test('filter and sort show the correct subset and price order',()=>{
 const app=boot();app.run("filter='truffle';sort='priceLow';renderProducts()");
 const markup=app.element('productGrid').innerHTML;
 assert.equal((markup.match(/<article/g)||[]).length,3);
 assert(markup.indexOf('data-product="salt"')<markup.indexOf('data-product="sauce"'));
 assert(markup.indexOf('data-product="sauce"')<markup.indexOf('data-product="honey"'));
 assert(!markup.includes('data-product="pasta"'));
 app.run("filter='all';sort='priceHigh';renderProducts()");assert.equal((app.element('productGrid').innerHTML.match(/<article/g)||[]).length,6);
});
test('product details list actual box contents, localized names and sample-price notice',()=>{
 const app=boot({veroLang:'ko'});app.run("renderDetail('discovery')");
 assert.match(app.element('productDetail').innerHTML,/블랙 트러플 소스/);
 assert.match(app.element('productDetail').innerHTML,/탈리아텔레/);
 assert(!app.element('productDetail').innerHTML.includes('아카시아'));
 assert.match(app.element('productDetail').innerHTML,/예시 가격/);
});
test('cart changes update totals, respect limits, persist and checkout clears the demo',()=>{
 const app=boot();
 const click=attrs=>app.document.listeners.click({target:{closest:s=>s==='.site-header'?{}:s==='[data-add]'&&attrs.add?{dataset:{add:attrs.add}}:s==='[data-qty]'&&attrs.qty?{dataset:{qty:attrs.qty,delta:attrs.delta}}:s==='[data-remove]'&&attrs.remove?{dataset:{remove:attrs.remove}}:null}});
 click({add:'sauce'});click({add:'sauce'});click({add:'pasta'});
 assert.equal(app.run('total()'),47700);assert.equal(app.element('cartCount').textContent,3);
 click({qty:'sauce',delta:'-1'});assert.equal(app.run('total()'),28800);
 click({remove:'pasta'});assert.equal(app.run('total()'),18900);
 assert.equal(JSON.parse(app.stored.veroCart).sauce,1);
 app.element('cartBtn').listeners.click();assert(app.element('cartDialog').open);
 app.element('checkoutBtn').listeners.click();assert(app.element('checkoutDialog').open);assert(!app.element('cartDialog').open);
 app.element('useSample').listeners.click();
 app.element('shippingForm').listeners.submit({preventDefault(){}});
 assert(!app.element('reviewStep').hidden);
 app.element('placeOrder').listeners.click();assert.equal(app.run('total()'),0);assert(app.element('checkoutFormWrap').hidden);assert(!app.element('success').hidden);assert.equal(app.stored.veroCart,'{}');
 app.run('cart={sauce:99};renderCart()');click({add:'sauce'});assert.equal(app.run('cart.sauce'),99);
});
test('newsletter is local-only and mobile menu exposes its state',()=>{
 const app=boot();let prevented=false;let reset=false;
 app.element('newsletterForm').listeners.submit({preventDefault(){prevented=true;},target:{reset(){reset=true;}}});
 assert(prevented&&reset);assert.match(app.element('newsletterMsg').textContent,/not saved or sent/);
 assert(!Object.keys(app.stored).some(k=>/email/i.test(k)));
 app.element('menuBtn').listeners.click();assert.equal(app.element('menuBtn').getAttribute('aria-expanded'),'true');
 app.document.listeners.keydown({key:'Escape'});assert.equal(app.element('menuBtn').getAttribute('aria-expanded'),'false');
});
test('static page includes nine readable products, bilingual copy coverage and no live-shop promises',()=>{
 assert.equal((html.match(/<h1\b/g)||[]).length,1);
 assert.equal((html.match(/name="description"/g)||[]).length,1);
 assert.equal((html.match(/class="product-card"/g)||[]).length,9);
 assert(!html.includes('150 boxes'));assert(!html.includes('Complimentary Seoul delivery'));
 const app=boot();for(const match of html.matchAll(/data-i18n(?:-aria|-alt)?="([^"]+)"/g)){
   assert.equal(app.run(`typeof copy.en[${JSON.stringify(match[1])}]`),'string');
   assert.equal(app.run(`typeof copy.ko[${JSON.stringify(match[1])}]`),'string');
 }
});
test('static IDs are unique, anchor and local asset targets exist, and forms have no outbound fields',()=>{
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);
 for(const [,target] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(target),`Missing anchor ${target}`);
 for(const [,target] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
   if(/^(https?:|data:)/.test(target)) continue;
   assert(fs.existsSync(path.join(__dirname,'..',target)),`Missing asset ${target}`);
 }
 assert(!/<form[^>]*action=/.test(html));assert(!/<input[^>]*\bname=/.test(html));
 assert(!html.includes('preview.js'));assert(!html.includes('preview.css'));
});
test('choosing a bundle opens the bag and leads to required delivery fields',()=>{
 const app=boot();
 app.document.listeners.click({target:{closest:s=>s==='.site-header'?{}:s==='[data-add]'?{dataset:{add:'discovery'}}:null}});
 assert(app.element('cartDialog').open);
 assert.match(app.element('cartItems').innerHTML,/Black Truffle Sauce/);
 app.element('checkoutBtn').listeners.click();
 assert(!app.element('shippingStep').hidden);assert(app.element('reviewStep').hidden);
 app.element('shippingForm').listeners.submit({preventDefault(){}});
 assert(app.element('reviewStep').hidden);assert.equal(app.element('recipient').getAttribute('aria-invalid'),'true');
 assert.equal(app.document.activeElement.id,'recipient');
 app.element('placeOrder').listeners.click();assert.equal(app.run('total()'),44900);
});
test('invalid postal code, phone, email and overlong notes cannot advance to review',()=>{
 const app=boot();app.run('cart={discovery:1}');app.element('checkoutBtn').listeners.click();app.element('useSample').listeners.click();
 app.element('postcode').value='123';app.element('phone').value='not a phone';app.element('orderEmail').value='bad@';app.element('deliveryNotes').value='x'.repeat(201);
 app.element('shippingForm').listeners.submit({preventDefault(){}});
 for(const id of ['postcode','phone','orderEmail','deliveryNotes']) assert.equal(app.element(id).getAttribute('aria-invalid'),'true');
 assert(app.element('reviewStep').hidden);
});
test('delivery review escapes user input, preserves edits and never persists personal fields',()=>{
 const app=boot();app.run('cart={signature:1}');app.element('checkoutBtn').listeners.click();app.element('useSample').listeners.click();
 app.element('unit').value='<img src=x onerror=alert(1)>';
 app.element('shippingForm').listeners.submit({preventDefault(){}});
 assert(!app.element('reviewStep').hidden);
 assert.match(app.element('shippingSummary').innerHTML,/&lt;img/);assert(!app.element('shippingSummary').innerHTML.includes('<img'));
 app.element('backDelivery').listeners.click();assert(!app.element('shippingStep').hidden);assert.equal(app.element('recipient').value,'Demo Guest');
 app.element('street').value='456 Updated-ro';app.element('shippingForm').listeners.submit({preventDefault(){}});
 assert.match(app.element('shippingSummary').innerHTML,/456 Updated-ro/);
 assert(!JSON.stringify(app.stored).includes('demo@example.com'));
 app.element('checkoutDialog').close();assert.equal(app.element('recipient').value,'');assert.equal(app.element('street').value,'');assert.equal(app.element('shippingSummary').textContent,'');assert.equal(app.run('shippingDetails'),null);
 assert.equal(app.run('total()'),94900);
});
test('completion clears transient delivery details and the success copy promises no shipment',()=>{
 const app=boot({veroLang:'ko'});app.run('cart={date:1}');app.element('checkoutBtn').listeners.click();app.element('useSample').listeners.click();
 app.element('shippingForm').listeners.submit({preventDefault(){}});app.element('placeOrder').listeners.click();
 assert.equal(app.element('phone').value,'');assert.equal(app.element('orderEmail').value,'');assert.equal(app.run('shippingDetails'),null);
 assert.equal(app.stored.veroCart,'{}');assert.match(app.run('copy.en.successText'),/nothing will be shipped/);
 assert.equal(app.element('checkoutDialog').getAttribute('aria-labelledby'),'successTitle');
});
test('blocked storage supports language changes and a complete demo checkout',()=>{
 const app=boot({},true);app.element('langBtn').listeners.click();
 assert.equal(app.document.documentElement.lang,'ko');
 app.run('cart={discovery:1};saveCart()');app.element('checkoutBtn').listeners.click();
 app.element('useSample').listeners.click();app.element('shippingForm').listeners.submit({preventDefault(){}});
 app.element('placeOrder').listeners.click();assert.equal(app.run('total()'),0);assert(!app.element('success').hidden);
 assert.deepEqual(app.stored,{});
});
test('validation feedback changes language and clears as fields are corrected',()=>{
 const app=boot();app.run('cart={date:1}');app.element('checkoutBtn').listeners.click();
 app.element('shippingForm').listeners.submit({preventDefault(){}});
 app.element('langBtn').listeners.click();assert.match(app.element('recipientError').textContent,/성함/);
 app.element('recipient').value='Demo Guest';app.element('recipient').listeners.input();
 assert.equal(app.element('recipientError').textContent,'');assert.equal(app.element('recipient').getAttribute('aria-invalid'),undefined);
 app.element('useSample').listeners.click();assert.equal(app.element('formErrors').textContent,'');
});
test('a queued close event cannot erase a reopened checkout or steal modal focus',()=>{
 const app=boot();app.run('cart={date:1}');app.element('checkoutBtn').listeners.click();app.element('useSample').listeners.click();
 app.element('checkoutDialog').listeners.close();assert.equal(app.element('recipient').value,'Demo Guest');
 app.run("closeDialog('checkoutDialog');openDialog('cartDialog')");
 app.element('cartBtn').focus();app.element('checkoutDialog').listeners.close();
 assert.equal(app.document.activeElement.id,'cartBtn');assert(app.element('cartDialog').open);
});
test('removing the last item disables checkout and restores the empty bag',()=>{
 const app=boot();app.run('cart={sauce:1};renderCart()');
 app.document.listeners.click({target:{closest:s=>s==='.site-header'?{}:s==='[data-remove]'?{dataset:{remove:'sauce'}}:null}});
 assert.equal(app.run('total()'),0);assert(app.element('checkoutBtn').disabled);
 assert.match(app.element('cartItems').innerHTML,/Your evening starts here/);
 app.element('checkoutBtn').listeners.click();assert(!app.element('checkoutDialog').open);
});
test('newsletter fallback cannot collect input; script enables it with a local submit handler',()=>{
 const form=html.match(/<form\b[^>]*id="newsletterForm"[^>]*>/)[0];
 const input=html.match(/<input\b[^>]*id="email"[^>]*>/)[0];
 assert.match(form,/method="dialog"/);
 assert.match(input,/\bdisabled\b/);
 const app=boot();assert.equal(app.element('email').disabled,false);
 assert.equal(typeof app.element('newsletterForm').listeners.submit,'function');
});
test('checkout description follows delivery, review and success, including reopening',()=>{
 const app=boot();app.run('cart={date:1}');app.element('checkoutBtn').listeners.click();
 assert.equal(app.element('checkoutDialog').getAttribute('aria-describedby'),'checkoutNotice');
 app.element('useSample').listeners.click();app.element('shippingForm').listeners.submit({preventDefault(){}});
 assert.equal(app.element('checkoutDialog').getAttribute('aria-describedby'),'checkoutNotice');
 app.element('placeOrder').listeners.click();
 assert.equal(app.element('checkoutDialog').getAttribute('aria-describedby'),'successDescription');
 assert.match(html,/<p id="successDescription" data-i18n="successText">/);
 app.run("closeDialog('checkoutDialog');cart={date:1}");app.element('checkoutBtn').listeners.click();
 assert.equal(app.element('checkoutDialog').getAttribute('aria-describedby'),'checkoutNotice');
});
test('fictional-sample feedback localizes while present and stays clear after input',()=>{
 const app=boot();app.element('useSample').listeners.click();app.element('langBtn').listeners.click();
 assert.equal(app.element('sampleStatus').textContent,app.run('copy.ko.sampleFilled'));
 app.element('recipient').listeners.input();app.element('langBtn').listeners.click();
 assert.equal(app.element('sampleStatus').textContent,'');
});
test('translation dictionaries and static label/ARIA references are complete',()=>{
 const app=boot();
 assert.equal(app.run('JSON.stringify(Object.keys(copy.en).sort())'),app.run('JSON.stringify(Object.keys(copy.ko).sort())'));
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const [,value] of html.matchAll(/\b(?:for|aria-labelledby|aria-describedby|aria-controls)="([^"]+)"/g)) {
  for(const id of value.split(/\s+/)) {
   if(id==='detailTitle') {
    for(const lang of ['en','ko']) { app.run(`lang='${lang}';renderDetail('discovery')`);assert.match(app.element('productDetail').innerHTML,/id="detailTitle"/); }
   } else assert(ids.has(id),`Missing label/ARIA target ${id}`);
  }
 }
});
