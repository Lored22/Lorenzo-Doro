// Vero Seoul partner preview. No real transactions or form submissions.
const products = [
  {
    "id": "sauce",
    "name": "Black Truffle Sauce",
    "ko": "블랙 트러플 소스",
    "desc": "A deep, earthy finish for pasta, eggs and warm bread. 90g.",
    "descKo": "파스타, 달걀, 따뜻한 빵에 깊고 풍부한 향을 더합니다. 90g.",
    "price": 18900,
    "badge": "Hero ingredient",
    "badgeKo": "시그니처",
    "category": "truffle",
    "label": "TARTUFO"
  },
  {
    "id": "honey",
    "name": "Truffle Acacia Honey",
    "ko": "트러플 아카시아 꿀",
    "desc": "Floral sweetness with a savoury truffle edge. 100g.",
    "descKo": "꽃향의 달콤함과 트러플의 감칠맛이 만납니다. 100g.",
    "price": 22900,
    "category": "truffle",
    "label": "MIELE"
  },
  {
    "id": "salt",
    "name": "Black Truffle Salt",
    "ko": "블랙 트러플 소금",
    "desc": "The effortless final touch for risotto, fries and steak. 60g.",
    "descKo": "리소토, 감자튀김, 스테이크를 위한 간편한 마무리. 60g.",
    "price": 14900,
    "category": "truffle",
    "label": "SALE"
  },
  {
    "id": "pasta",
    "name": "Bronze-cut Tagliatelle",
    "ko": "브론즈컷 탈리아텔레",
    "desc": "Slow-dried artisan pasta with a sauce-loving texture. 500g.",
    "descKo": "소스가 잘 배는 식감의 저온 건조 수제 파스타. 500g.",
    "price": 9900,
    "category": "table",
    "label": "PASTA"
  },
  {
    "id": "taralli",
    "name": "EVOO Taralli",
    "ko": "엑스트라 버진 올리브오일 타랄리",
    "desc": "A crisp Puglian aperitivo companion. 250g.",
    "descKo": "아페리티보에 어울리는 바삭한 풀리아식 스낵. 250g.",
    "price": 7900,
    "category": "table",
    "label": "TARALLI"
  },
  {
    "id": "balsamic",
    "name": "Aged Balsamic Condiment",
    "ko": "숙성 발사믹 콘디멘토",
    "desc": "Velvety, balanced and made for finishing. 100ml.",
    "descKo": "부드럽고 균형 잡힌 풍미의 피니싱 콘디멘토. 100ml.",
    "price": 19900,
    "category": "table",
    "label": "BALSAMICO"
  }
];

const boxes = [
  {
    "id": "discovery",
    "name": "Discovery Box",
    "ko": "디스커버리 박스",
    "desc": "Truffle sauce + artisan pasta. Your first Italian night.",
    "descKo": "트러플 소스 + 수제 파스타. 첫 번째 이탈리안 나이트.",
    "price": 44900,
    "badge": "For two",
    "badgeKo": "2인용",
    "included": [
      "sauce",
      "pasta"
    ],
    "label": "I"
  },
  {
    "id": "date",
    "name": "Italian Date Night",
    "ko": "이탈리안 데이트 나이트",
    "desc": "Five pieces for pasta, aperitivo and a sweet finish.",
    "descKo": "파스타, 아페리티보, 달콤한 마무리를 위한 5종 구성.",
    "price": 74900,
    "badge": "For an occasion",
    "badgeKo": "특별한 날",
    "included": [
      "sauce",
      "honey",
      "salt",
      "pasta",
      "taralli"
    ],
    "label": "II"
  },
  {
    "id": "signature",
    "name": "Signature Gift Box",
    "ko": "시그니처 기프트 박스",
    "desc": "The complete six-piece Vero Seoul table.",
    "descKo": "베로 서울의 6가지 셀렉션을 모두 담은 완벽한 테이블.",
    "price": 94900,
    "badge": "The full ritual",
    "badgeKo": "풀 컬렉션",
    "included": [
      "sauce",
      "honey",
      "salt",
      "pasta",
      "taralli",
      "balsamic"
    ],
    "label": "III"
  }
];

const copy = {
  "en": {
    "announcement": "An Italian idea for Seoul · Partner preview",
    "navBoxes": "Gift boxes",
    "navPantry": "The pantry",
    "navStory": "Our story",
    "cart": "Bag",
    "heroEyebrow": "A little Italy. A slower evening.",
    "heroTitle": "Good food.<br>Better company.",
    "heroText": "Six pantry favourites. Three thoughtfully composed boxes. An Italian-inspired table, imagined for Seoul.",
    "heroCta": "Find your evening",
    "heroNote": "Collection No. 01 / The Italian evening",
    "introEyebrow": "The Vero philosophy",
    "introTitle": "Less to choose.<br>More to savour.",
    "introText": "A good evening does not need a complicated menu. Our concept brings a small Italian pantry together with simple serving rituals, so you can spend more time at the table.",
    "pillar1Title": "Origin matters",
    "pillar1Text": "Regional stories guide our sourcing. Producers are still to be confirmed.",
    "pillar2Title": "Only the essentials",
    "pillar2Text": "Six ingredients, chosen to work beautifully together.",
    "pillar3Title": "An evening to give",
    "pillar3Text": "Gift-box concepts for a first taste, a date night or a generous table.",
    "boxesEyebrow": "01 / The collection",
    "boxesTitle": "What kind of evening?",
    "boxesText": "Start small or make an occasion of it. Explore three gift-box concepts, with sample prices in Korean won.",
    "ritualEyebrow": "03 / At the table",
    "ritualTitle": "A little truffle.<br>A little time.",
    "step1": "Boil the pasta until al dente.",
    "step2": "Loosen the sauce with a spoon of pasta water.",
    "step3": "Finish with truffle salt. Put the phones away.",
    "pantryEyebrow": "02 / The essentials",
    "pantryTitle": "A small pantry.<br>Endless possibilities.",
    "pantryText": "Meet the six pieces behind the collection. Every product and package shown is illustrative.",
    "storyEyebrow": "Italy → Seoul",
    "storyTitle": "Two places.<br>One shared table.",
    "storyText": "Vero Seoul is an idea for bringing regional Italian specialities to curious Korean tables. Origin, flavour and the pleasure of sharing guide the concept. The collection is a starting point for conversations with future partners.",
    "storyNote": "Producers, ingredients, Korean import arrangements and fulfilment are not yet confirmed. This is a concept preview, not a live shop.",
    "newsletterEyebrow": "Before you go",
    "newsletterTitle": "A taste of what’s next.",
    "join": "Try the demo",
    "footer": "Italian inspiration. Seoul perspective.",
    "yourBag": "Your demo bag",
    "items": "items",
    "subtotal": "Sample subtotal",
    "checkout": "Review demo order",
    "demoNote": "Partner preview · No real purchases",
    "checkoutEyebrow": "Your selection",
    "checkoutTitle": "One last look.",
    "email": "Email address",
    "placeOrder": "Complete the demo",
    "successEyebrow": "Demo complete",
    "successTitle": "An evening, imagined.",
    "successText": "You have completed the preview. Nothing was purchased or sent, and your demo bag has been cleared.",
    "continue": "Back to the collection",
    "add": "Add to bag",
    "added": "Added to your demo bag",
    "empty": "Your evening starts here.",
    "thanks": "Demo complete — your email was not saved or sent.",
    "remove": "Remove",
    "heroSecondary": "Explore the pantry",
    "ritualNote": "Serving inspiration · Follow the final product’s cooking instructions.",
    "newsletterText": "Try the tasting-list interaction. This demo does not subscribe you or store your email.",
    "footerNote": "© 2026 Vero Seoul · Independent concept preview",
    "navRitual": "The ritual",
    "navFaq": "Questions",
    "menu": "Menu",
    "close": "Close",
    "skip": "Skip to content",
    "home": "Vero Seoul home",
    "navigation": "Main navigation",
    "switchLanguage": "Switch to Korean",
    "openBag": "Open demo bag",
    "heroAlt": "Illustrative Italian pantry collection with pasta, truffle and a gift box on a stone table",
    "emailPlaceholder": "Your email address",
    "samplePrice": "Sample price",
    "details": "Discover what’s inside",
    "collectionLabel": "Concept packaging",
    "included": "Inside this box",
    "productNote": "Concept product. Ingredients, allergens, origin and shelf life will be confirmed with suppliers before launch.",
    "boxNote": "Sample box price includes the proposed packaging and tasting experience; it is not a discounted bundle.",
    "backCollection": "Explore the collection",
    "emptyText": "Choose a box or a pantry favourite to try the demo.",
    "increase": "Increase quantity",
    "decrease": "Decrease quantity",
    "bagNote": "Sample prices only. Shipping and taxes are not calculated. No purchase will be made.",
    "checkoutNote": "No address, payment or personal details needed. This only simulates an order.",
    "all": "All six",
    "truffle": "Truffle",
    "table": "For the table",
    "sortLabel": "Sort by",
    "curated": "Our selection",
    "priceLow": "Price: low to high",
    "priceHigh": "Price: high to low",
    "showing": "products shown",
    "faqEyebrow": "Good to know",
    "faqTitle": "A few things, before dinner.",
    "faq1": "Can I place a real order?",
    "answer1": "Not yet. This is a partner preview: products, packaging and prices are illustrative. The bag and checkout let you explore the experience without making a purchase.",
    "faq2": "What is inside each gift box?",
    "answer2": "Discovery pairs truffle sauce and tagliatelle. Date Night adds honey, salt and taralli. Signature includes all six pantry pieces. Open a box to see its full selection.",
    "faq3": "Are delivery and imports confirmed?",
    "answer3": "No. Suppliers, Korean import requirements, final labels and delivery arrangements must be confirmed before a commercial launch.",
    "faq4": "What happens to my data?",
    "answer4": "The demo remembers only your language and bag in this browser when storage is available. No email, address or payment data is saved or sent by the demo forms.",
    "limit": "You can add up to 99 of each item in this demo.",
    "removed": "Removed from your demo bag"
  },
  "ko": {
    "announcement": "서울을 위한 이탈리안 아이디어 · 파트너 프리뷰",
    "navBoxes": "기프트 박스",
    "navPantry": "팬트리",
    "navStory": "브랜드 스토리",
    "cart": "장바구니",
    "heroEyebrow": "이탈리아의 맛. 여유로운 저녁.",
    "heroTitle": "맛있는 음식.<br>더 좋은 사람들.",
    "heroText": "여섯 가지 팬트리 제품과 세 가지 기프트 박스. 서울의 테이블을 위해 그려본 이탈리안 다이닝 콘셉트입니다.",
    "heroCta": "나에게 맞는 박스 찾기",
    "heroNote": "컬렉션 No. 01 / 이탈리안 이브닝",
    "introEyebrow": "베로의 철학",
    "introTitle": "선택은 간결하게.<br>즐거움은 풍성하게.",
    "introText": "좋은 저녁에 복잡한 메뉴가 꼭 필요한 것은 아닙니다. 작은 이탈리안 팬트리와 간단한 서빙 아이디어로 테이블에서 함께하는 시간을 더 길게 만드는 콘셉트입니다.",
    "pillar1Title": "원산지의 이야기",
    "pillar1Text": "지역의 이야기를 바탕으로 생산자를 찾아갈 예정입니다.",
    "pillar2Title": "꼭 필요한 것만",
    "pillar2Text": "서로 잘 어울리는 여섯 가지 재료로 구성했습니다.",
    "pillar3Title": "저녁을 선물하다",
    "pillar3Text": "첫 만남, 데이트 나이트, 풍성한 테이블을 위한 기프트 박스 콘셉트.",
    "boxesEyebrow": "01 / 컬렉션",
    "boxesTitle": "어떤 저녁을 원하세요?",
    "boxesText": "가볍게 시작하거나 특별한 시간을 만들어보세요. 원화 예시 가격과 함께 세 가지 기프트 박스 콘셉트를 소개합니다.",
    "ritualEyebrow": "03 / 테이블에서",
    "ritualTitle": "트러플 한 스푼.<br>여유 한 스푼.",
    "step1": "파스타를 알 덴테로 삶아주세요.",
    "step2": "면수 한 스푼으로 소스를 부드럽게 풀어주세요.",
    "step3": "트러플 소금으로 마무리하고, 휴대폰은 잠시 내려놓으세요.",
    "pantryEyebrow": "02 / 에센셜",
    "pantryTitle": "작은 팬트리.<br>다양한 가능성.",
    "pantryText": "컬렉션을 구성하는 여섯 가지 제품을 만나보세요. 모든 제품과 패키지는 콘셉트 예시입니다.",
    "storyEyebrow": "이탈리아 → 서울",
    "storyTitle": "두 도시의 감성.<br>하나의 테이블.",
    "storyText": "베로 서울은 이탈리아 지역 특산품을 한국의 호기심 많은 테이블에 소개하기 위한 아이디어입니다. 원산지, 맛, 함께 나누는 즐거움을 중심으로 미래의 파트너들과 대화를 시작하고자 합니다.",
    "storyNote": "생산자, 성분, 한국 수입 절차 및 배송은 아직 확정되지 않았습니다. 실제 쇼핑몰이 아닌 콘셉트 프리뷰입니다.",
    "newsletterEyebrow": "다음 만남을 위해",
    "newsletterTitle": "앞으로의 맛을 상상하며.",
    "join": "데모 체험",
    "footer": "이탈리아의 영감. 서울의 시선.",
    "yourBag": "데모 장바구니",
    "items": "개 상품",
    "subtotal": "예시 상품 합계",
    "checkout": "데모 주문 확인",
    "demoNote": "파트너 프리뷰 · 실제 구매 불가",
    "checkoutEyebrow": "선택한 제품",
    "checkoutTitle": "마지막으로 확인해 보세요.",
    "email": "이메일 주소",
    "placeOrder": "데모 완료하기",
    "successEyebrow": "데모 완료",
    "successTitle": "상상 속의 특별한 저녁.",
    "successText": "프리뷰 체험이 완료되었습니다. 구매나 정보 전송은 없으며 데모 장바구니가 비워졌습니다.",
    "continue": "컬렉션으로 돌아가기",
    "add": "담기",
    "added": "데모 장바구니에 담았습니다",
    "empty": "당신의 저녁은 여기서 시작됩니다.",
    "thanks": "데모 완료 — 이메일은 저장되거나 전송되지 않았습니다.",
    "remove": "삭제",
    "heroSecondary": "팬트리 둘러보기",
    "ritualNote": "서빙 아이디어 · 최종 제품의 조리 안내를 따라주세요.",
    "newsletterText": "테이스팅 리스트 기능을 체험해 보세요. 실제 구독은 이루어지지 않으며 이메일은 저장되지 않습니다.",
    "footerNote": "© 2026 Vero Seoul · 독립 브랜드 콘셉트 프리뷰",
    "navRitual": "서빙 리추얼",
    "navFaq": "자주 묻는 질문",
    "menu": "메뉴",
    "close": "닫기",
    "skip": "본문 바로가기",
    "home": "베로 서울 홈",
    "navigation": "주 메뉴",
    "switchLanguage": "영어로 변경",
    "openBag": "데모 장바구니 열기",
    "heroAlt": "돌 테이블 위 파스타, 트러플, 기프트 박스로 구성한 이탈리안 팬트리 콘셉트 이미지",
    "emailPlaceholder": "이메일 주소",
    "samplePrice": "예시 가격",
    "details": "구성 자세히 보기",
    "collectionLabel": "패키지 콘셉트",
    "included": "박스 구성",
    "productNote": "콘셉트 제품입니다. 성분, 알레르기 정보, 원산지 및 유통기한은 출시 전 공급업체와 확인할 예정입니다.",
    "boxNote": "박스 예시 가격에는 패키지와 테이스팅 경험이 반영되어 있으며, 할인 묶음 상품이 아닙니다.",
    "backCollection": "컬렉션 둘러보기",
    "emptyText": "박스나 팬트리 제품을 선택해 데모를 체험해 보세요.",
    "increase": "수량 늘리기",
    "decrease": "수량 줄이기",
    "bagNote": "예시 가격입니다. 배송비와 세금은 계산되지 않습니다. 실제 구매는 이루어지지 않습니다.",
    "checkoutNote": "주소, 결제 정보 또는 개인정보 없이 주문 과정을 체험합니다.",
    "all": "전체",
    "truffle": "트러플",
    "table": "테이블을 위해",
    "sortLabel": "정렬",
    "curated": "추천 순서",
    "priceLow": "낮은 가격순",
    "priceHigh": "높은 가격순",
    "showing": "개 제품 표시",
    "faqEyebrow": "미리 알아두세요",
    "faqTitle": "저녁 식사 전, 몇 가지 질문.",
    "faq1": "실제로 주문할 수 있나요?",
    "answer1": "아직은 불가합니다. 제품, 패키지 및 가격은 파트너 프리뷰를 위한 예시입니다. 장바구니와 주문 확인은 실제 구매 없이 체험할 수 있습니다.",
    "faq2": "기프트 박스는 어떻게 구성되나요?",
    "answer2": "디스커버리는 트러플 소스와 탈리아텔레, 데이트 나이트는 여기에 꿀, 소금, 타랄리를 더한 구성입니다. 시그니처에는 여섯 가지 제품이 모두 포함됩니다. 각 박스의 상세 보기를 확인해 주세요.",
    "faq3": "배송과 수입 절차가 확정되었나요?",
    "answer3": "아닙니다. 공급업체, 한국 수입 요건, 최종 라벨 및 배송 방식은 정식 출시 전에 확정해야 합니다.",
    "faq4": "개인정보는 어떻게 처리되나요?",
    "answer4": "저장 기능을 사용할 수 있는 경우 이 브라우저에 언어와 장바구니만 기억합니다. 데모 양식에서 이메일, 주소 또는 결제 정보는 저장하거나 전송하지 않습니다.",
    "limit": "데모에서는 제품당 최대 99개까지 담을 수 있습니다.",
    "removed": "데모 장바구니에서 삭제했습니다"
  }
};

const pageMetadata = {
  "en": {
    "title": "Vero Seoul — Italian gourmet concept | Partner preview",
    "description": "Explore Vero Seoul, an Italian gourmet concept for Korea: six pantry products and three gift boxes. Partner preview only; no real purchases."
  },
  "ko": {
    "title": "Vero Seoul — 이탈리안 고메 브랜드 콘셉트 | 파트너 프리뷰",
    "description": "한국을 위한 이탈리안 고메 브랜드 콘셉트, 베로 서울을 만나보세요. 팬트리 제품 6종과 기프트 박스 3종을 소개하는 파트너 프리뷰로, 실제 구매는 불가합니다."
  }
};

const $ = id => document.getElementById(id);
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* The demo also works without storage. */ } }
};
const allItems = [...products, ...boxes];
const findItem = id => allItems.find(item => item.id === id);
const won = value => '₩' + value.toLocaleString('ko-KR');
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let lang = storage.get('veroLang') === 'ko' ? 'ko' : 'en';
let filter = 'all';
let sort = 'curated';
let detailId = null;
let toastTimer;
function sanitizeCart(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).filter(([id, quantity]) => findItem(id) && Number.isInteger(quantity) && quantity > 0).map(([id, quantity]) => [id, Math.min(quantity, 99)]));
}
function readCart() {
  try { return sanitizeCart(JSON.parse(storage.get('veroCart') || '{}')); } catch { return {}; }
}
let cart = readCart();
const t = key => copy[lang][key];
const itemName = item => lang === 'ko' ? item.ko : item.name;
const itemDescription = item => lang === 'ko' ? item.descKo : item.desc;
const entries = () => Object.entries(cart).map(([id, quantity]) => ({item: findItem(id), quantity}));
const total = () => entries().reduce((sum, {item, quantity}) => sum + item.price * quantity, 0);
function packaging(item, interactive = false) {
  const shape = item.included ? 'gift' : item.id === 'balsamic' ? 'bottle' : ['pasta','taralli'].includes(item.id) ? 'bag' : 'jar';
  const tag = interactive ? 'button' : 'div';
  const attrs = interactive ? `type="button" data-detail="${item.id}" aria-label="${escapeHTML(t('details') + ': ' + itemName(item))}"` : 'aria-hidden="true"';
  return `<${tag} class="product-visual ${interactive ? 'visual-button' : ''}" data-product="${item.id}" ${attrs}>
    ${item.badge ? `<span class="badge">${escapeHTML(lang === 'ko' ? item.badgeKo : item.badge)}</span>` : ''}
    <span class="package ${shape}" aria-hidden="true"><small>VERO.</small><em>SEOUL</em><strong>${item.label}</strong><span class="package-line"></span></span>
    <span class="visual-label">${t('collectionLabel')}</span>${interactive ? '<span class="visual-arrow" aria-hidden="true">↗</span>' : ''}</${tag}>`;
}
function cardMarkup(item) {
  return `<article class="product-card">${packaging(item, true)}<div class="product-info"><h3>${escapeHTML(itemName(item))}</h3><p>${escapeHTML(itemDescription(item))}</p><button class="details-btn" data-detail="${item.id}">${t('details')} <span aria-hidden="true">↗</span></button><div class="product-bottom"><div><span class="price-label">${t('samplePrice')}</span><span class="price">${won(item.price)}</span></div><button class="add-btn" data-add="${item.id}" aria-label="${escapeHTML(t('add') + ': ' + itemName(item))}">${t('add')} <span aria-hidden="true">+</span></button></div></div></article>`;
}
function renderProducts() {
  const visible = products.filter(item => filter === 'all' || item.category === filter);
  if (sort === 'priceLow') visible.sort((a,b) => a.price - b.price);
  if (sort === 'priceHigh') visible.sort((a,b) => b.price - a.price);
  $('productGrid').innerHTML = visible.map(cardMarkup).join('');
  $('resultCount').textContent = `${visible.length} ${t('showing')}`;
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
}
function renderCart() {
  const count = entries().reduce((sum, {quantity}) => sum + quantity, 0);
  $('cartCount').textContent = count;
  $('cartBtn').setAttribute('aria-label', `${t('openBag')} (${count})`);
  $('subtotal').textContent = won(total());
  $('bagStatus').textContent = `${count} ${t('items')} · ${won(total())}`;
  $('checkoutBtn').disabled = count === 0;
  $('cartItems').innerHTML = count ? entries().map(({item,quantity}) => `<div class="cart-line"><div><h3>${escapeHTML(itemName(item))}</h3><p>${won(item.price)}</p><div class="cart-controls"><div class="qty"><button data-qty="${item.id}" data-delta="-1" aria-label="${escapeHTML(t('decrease') + ': ' + itemName(item))}">−</button><span>${quantity}</span><button data-qty="${item.id}" data-delta="1" ${quantity >= 99 ? 'disabled' : ''} aria-label="${escapeHTML(t('increase') + ': ' + itemName(item))}">+</button></div><button class="remove" data-remove="${item.id}" aria-label="${escapeHTML(t('remove') + ': ' + itemName(item))}">${t('remove')}</button></div></div><strong>${won(item.price * quantity)}</strong></div>`).join('') : `<div class="empty"><span aria-hidden="true">V.</span><h3>${t('empty')}</h3><p>${t('emptyText')}</p><button class="button dark" data-explore>${t('backCollection')} ↗</button></div>`;
}
function saveCart() { storage.set('veroCart', JSON.stringify(cart)); renderCart(); }
function toast(message) {
  clearTimeout(toastTimer);
  $('toast').textContent = message;
  $('toast').classList.add('show');
  toastTimer = setTimeout(() => $('toast').classList.remove('show'), 2400);
}
function syncModalState() { document.body.classList.toggle('modal-open', Boolean(document.querySelector('dialog[open]'))); }
function openDialog(id) { closeMenu(); $(id).showModal(); syncModalState(); }
function closeDialog(id) { $(id).close(); syncModalState(); }
function renderDetail(id) {
  const item = findItem(id);
  if (!item) return;
  detailId = id;
  $('productDetail').innerHTML = `<div class="product-detail-grid">${packaging(item)}<div class="detail-copy"><p class="eyebrow">VERO SEOUL / ${t('collectionLabel')}</p><h2 id="detailTitle">${escapeHTML(itemName(item))}</h2><p>${escapeHTML(itemDescription(item))}</p>${item.included ? `<h3>${t('included')}</h3><ul>${item.included.map(productId => `<li>${escapeHTML(itemName(findItem(productId)))}</li>`).join('')}</ul><p>${t('boxNote')}</p>` : ''}<p class="detail-price"><span class="price-label">${t('samplePrice')}</span>${won(item.price)}</p><button class="button dark full" data-add="${id}">${t('add')} +</button><p class="preview-label">${t('productNote')}</p></div></div>`;
}
function renderOrder() {
  $('orderSummary').innerHTML = entries().map(({item,quantity}) => `<div class="order-line"><span>${escapeHTML(itemName(item))} × ${quantity}</span><strong>${won(item.price * quantity)}</strong></div>`).join('') + `<div class="subtotal"><span>${t('subtotal')}</span><strong>${won(total())}</strong></div>`;
}
function translate() {
  const meta = pageMetadata[lang];
  document.documentElement.lang = lang;
  document.title = meta.title;
  for (const selector of ['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]']) document.querySelector(selector).content = meta.description;
  for (const selector of ['meta[property="og:title"]','meta[name="twitter:title"]']) document.querySelector(selector).content = meta.title;
  document.querySelector('meta[property="og:locale"]').content = lang === 'ko' ? 'ko_KR' : 'en_US';
  document.querySelector('meta[property="og:locale:alternate"]').content = lang === 'ko' ? 'en_US' : 'ko_KR';
  document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = t(element.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => element.setAttribute('aria-label', t(element.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-alt]').forEach(element => element.alt = t(element.dataset.i18nAlt));
  $('langBtn').textContent = lang === 'en' ? '한국어' : 'EN';
  $('langBtn').lang = lang === 'en' ? 'ko' : 'en';
  $('langBtn').setAttribute('aria-label', t('switchLanguage'));
  $('email').placeholder = t('emailPlaceholder');
  document.querySelector('.filters').setAttribute('aria-label', lang === 'ko' ? '제품 카테고리' : 'Product categories');
  $('boxGrid').innerHTML = boxes.map(cardMarkup).join('');
  renderProducts(); renderCart();
  if (detailId) renderDetail(detailId);
  if ($('checkoutDialog').open) renderOrder();
  $('newsletterMsg').textContent = '';
}
function closeMenu() { $('mainNav').classList.remove('open'); $('menuBtn').setAttribute('aria-expanded', 'false'); }
$('menuBtn').addEventListener('click', () => {
  const open = $('menuBtn').getAttribute('aria-expanded') !== 'true';
  $('menuBtn').setAttribute('aria-expanded', String(open));
  $('mainNav').classList.toggle('open', open);
});
$('mainNav').addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('mainNav').classList.contains('open')) { closeMenu(); $('menuBtn').focus(); } });
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
  const add = event.target.closest('[data-add]');
  if (add && findItem(add.dataset.add)) {
    const id = add.dataset.add;
    if ((cart[id] || 0) >= 99) { toast(t('limit')); return; }
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    if ($('productDialog').open) closeDialog('productDialog');
    toast(t('added'));
  }
  const detail = event.target.closest('[data-detail]');
  if (detail) { renderDetail(detail.dataset.detail); openDialog('productDialog'); }
  const quantity = event.target.closest('[data-qty]');
  const remove = event.target.closest('[data-remove]');
  if (quantity || remove) {
    const id = quantity ? quantity.dataset.qty : remove.dataset.remove;
    if (!cart[id]) return;
    if (remove) delete cart[id];
    else {
      cart[id] = Math.max(0, Math.min(99, cart[id] + Number(quantity.dataset.delta)));
      if (!cart[id]) delete cart[id];
    }
    saveCart();
    const selector = quantity ? `[data-qty="${id}"][data-delta="${quantity.dataset.delta}"]:not(:disabled)` : `[data-remove="${id}"]`;
    (document.querySelector(selector) || document.querySelector(`[data-qty="${id}"]:not(:disabled)`) || document.querySelector('[data-qty]') || document.querySelector('[data-explore]') || $('checkoutBtn')).focus();
    if (!cart[id]) toast(t('removed'));
  }
  const close = event.target.closest('[data-close]');
  if (close) closeDialog(close.dataset.close);
  if (event.target.closest('[data-explore]')) { closeDialog('cartDialog'); location.hash = 'boxes'; $('boxesTitle').setAttribute('tabindex','-1'); $('boxesTitle').focus(); }
  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) { filter = filterButton.dataset.filter; renderProducts(); }
});
$('sortSelect').addEventListener('change', event => { sort = event.target.value; renderProducts(); });
$('langBtn').addEventListener('click', () => { lang = lang === 'en' ? 'ko' : 'en'; storage.set('veroLang', lang); translate(); });
$('cartBtn').addEventListener('click', () => openDialog('cartDialog'));
$('checkoutBtn').addEventListener('click', () => {
  if (!entries().length) return;
  closeDialog('cartDialog');
  $('checkoutFormWrap').hidden = false; $('success').hidden = true;
  $('checkoutDialog').setAttribute('aria-labelledby','checkoutTitle');
  renderOrder(); openDialog('checkoutDialog');
});
$('placeOrder').addEventListener('click', () => {
  if (!entries().length) return;
  cart = {}; saveCart();
  $('checkoutFormWrap').hidden = true; $('success').hidden = false;
  $('checkoutDialog').setAttribute('aria-labelledby','successTitle');
  $('continueBtn').focus();
});
$('continueBtn').addEventListener('click', () => { closeDialog('checkoutDialog'); $('cartBtn').focus(); });
$('newsletterForm').addEventListener('submit', event => { event.preventDefault(); $('newsletterMsg').textContent = t('thanks'); event.target.reset(); });
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('close', () => { syncModalState(); if (dialog.id === 'checkoutDialog') $('cartBtn').focus(); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog.id);
  });
});
translate();
document.querySelector('.catalog-tools').hidden = false;
for (const id of ['langBtn', 'cartBtn', 'menuBtn']) $(id).disabled = false;
document.querySelector('#newsletterForm button').disabled = false;
// No-JS visitors retain readable catalogue content; interactive controls need this script.
document.documentElement.classList.add('js');
