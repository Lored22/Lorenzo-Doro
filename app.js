// Vero Seoul partner preview. No real transactions or form submissions.
const products = [
  {
    "id": "sauce",
    "name": "Black Truffle Sauce",
    "ko": "블랙 트러플 소스",
    "desc": "Truffle sauce for pasta, eggs or warm bread. Stir into a dish or serve as a spread. 90g.",
    "descKo": "파스타, 달걀, 따뜻한 빵에 곁들이는 트러플 소스. 요리에 섞거나 빵에 발라 즐겨보세요. 90g.",
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
    "desc": "Acacia honey with truffle. Drizzle over cheese or toast for a sweet and savoury finish. 100g.",
    "descKo": "트러플을 더한 아카시아 꿀. 치즈나 토스트에 뿌려 달콤한 맛과 감칠맛을 즐겨보세요. 100g.",
    "price": 22900,
    "category": "truffle",
    "label": "MIELE"
  },
  {
    "id": "salt",
    "name": "Black Truffle Salt",
    "ko": "블랙 트러플 소금",
    "desc": "Salt with black truffle. Sprinkle over potatoes, eggs or risotto just before serving. 60g.",
    "descKo": "블랙 트러플을 더한 소금. 감자, 달걀 요리, 리소토에 먹기 직전 살짝 뿌려주세요. 60g.",
    "price": 14900,
    "category": "truffle",
    "label": "SALE"
  },
  {
    "id": "pasta",
    "name": "Bronze-cut Tagliatelle",
    "ko": "브론즈컷 탈리아텔레",
    "desc": "Tagliatelle with a textured surface that holds sauce. Pair with truffle sauce for a simple dinner. 500g.",
    "descKo": "소스가 잘 묻는 표면의 탈리아텔레. 트러플 소스와 함께 간편한 저녁을 준비해 보세요. 500g.",
    "price": 9900,
    "category": "table",
    "label": "PASTA"
  },
  {
    "id": "taralli",
    "name": "Olive Oil Taralli",
    "ko": "엑스트라 버진 올리브오일 타랄리",
    "desc": "Crunchy Italian olive-oil crackers. Enjoy on their own or share with cheese before dinner. 250g.",
    "descKo": "바삭한 이탈리안 올리브오일 스낵. 그대로 먹거나 식사 전 치즈와 함께 나눠 즐겨보세요. 250g.",
    "price": 7900,
    "category": "table",
    "label": "TARALLI"
  },
  {
    "id": "balsamic",
    "name": "Aged Balsamic Condiment",
    "ko": "숙성 발사믹 콘디멘토",
    "desc": "A sweet and tangy balsamic condiment. Drizzle over salads, roasted vegetables or cheese. 100ml.",
    "descKo": "달콤하고 새콤한 발사믹 콘디멘토. 샐러드, 구운 채소, 치즈에 조금씩 곁들여보세요. 100ml.",
    "price": 19900,
    "category": "table",
    "label": "BALSAMICO"
  },
  {
    "id": "cruschi",
    "name": "Peperoni Cruschi",
    "ko": "페페로니 크루스키",
    "desc": "Ready-to-eat crunchy sweet peppers. Enjoy as a snack or crumble over pasta and salads. Proposed 25g pack.",
    "descKo": "바로 먹는 바삭한 스위트 페퍼 스낵. 그대로 즐기거나 파스타와 샐러드 위에 부숴 뿌려보세요. 제안 용량 25g.",
    "price": 9900,
    "category": "table",
    "label": "CRUSCHI"
  }
];

const boxes = [
  {
    "id": "discovery",
    "name": "Discovery Box",
    "ko": "디스커버리 박스",
    "desc": "Truffle sauce and tagliatelle: two products for a simple pasta dinner.",
    "descKo": "트러플 소스와 탈리아텔레, 간편한 파스타 저녁을 위한 2종 구성.",
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
    "desc": "Five products for pasta, a crunchy snack and honey to pair with cheese.",
    "descKo": "파스타, 바삭한 스낵, 치즈에 곁들일 꿀을 담은 5종 구성.",
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
    "desc": "Six favourites for a generous table: pasta, truffle sauce, honey, salt, taralli and balsamic.",
    "descKo": "풍성한 테이블을 위한 6종 구성: 파스타, 트러플 소스, 꿀, 소금, 타랄리, 발사믹.",
    "price": 94900,
    "badge": "For sharing",
    "badgeKo": "함께 즐기는 구성",
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
    "heroTitle": "Italian pantry.<br>Ready to share.",
    "heroText": "Choose from three Italian gift-box concepts for Seoul. Compare exactly what is inside, then try the delivery journey.",
    "heroCta": "Compare the boxes",
    "heroNote": "Collection No. 01 / The Italian evening",
    "introEyebrow": "The Vero philosophy",
    "introTitle": "Less to choose.<br>More to savour.",
    "introText": "A good evening does not need a complicated menu. Our concept brings a small Italian pantry together with simple serving rituals, so you can spend more time at the table.",
    "pillar1Title": "Origin matters",
    "pillar1Text": "Regional stories guide our sourcing. Producers are still to be confirmed.",
    "pillar2Title": "Only the essentials",
    "pillar2Text": "Seven products, with simple ways to enjoy them.",
    "pillar3Title": "An evening to give",
    "pillar3Text": "Gift-box concepts for a first taste, a date night or a generous table.",
    "boxesEyebrow": "01 / The collection",
    "boxesTitle": "Find the box for your evening.",
    "boxesText": "Three occasions. Clear contents and sample prices. Choose a box, or explore individual products below.",
    "ritualEyebrow": "03 / At the table",
    "ritualTitle": "A little truffle.<br>A little time.",
    "step1": "Boil the pasta until al dente.",
    "step2": "Loosen the sauce with a spoon of pasta water.",
    "step3": "Finish with truffle salt. Put the phones away.",
    "pantryEyebrow": "02 / The essentials",
    "pantryTitle": "Prefer to choose separately?",
    "pantryText": "Explore seven individual products. Add your favourites to the same demo bag.",
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
    "checkout": "Continue to delivery",
    "demoNote": "Partner preview · No real purchases",
    "checkoutEyebrow": "Your evening, step by step",
    "checkoutTitle": "Where should it arrive?",
    "email": "Email address",
    "placeOrder": "Confirm demo — no payment",
    "successEyebrow": "Demo complete",
    "successTitle": "Your delivery demo is complete.",
    "successText": "No order was placed, no payment was taken and nothing will be shipped. Your entered details have been cleared.",
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
    "details": "View details",
    "collectionLabel": "Concept packaging",
    "included": "Inside this box",
    "productNote": "Concept product. Ingredients, allergens, origin and shelf life will be confirmed with suppliers before launch.",
    "boxNote": "Sample box price includes the proposed packaging and tasting experience; it is not a discounted bundle.",
    "backCollection": "Explore the collection",
    "emptyText": "Choose a box or a pantry favourite to try the demo.",
    "increase": "Increase quantity",
    "decrease": "Decrease quantity",
    "bagNote": "Check the contents and quantities. Next: delivery details, then review. No real payment or shipment.",
    "checkoutNote": "Delivery simulation only. Use fictional details. They stay in memory while you edit your bag and delivery details, and are cleared when you leave or finish the shopping journey.",
    "all": "All products",
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
    "answer2": "Discovery includes truffle sauce and tagliatelle. Date Night adds honey, truffle salt and taralli. Signature also includes balsamic. Peperoni Cruschi are sold separately in this preview and are not included in the boxes.",
    "faq3": "Are delivery and imports confirmed?",
    "answer3": "No. Suppliers, Korean import requirements, final labels and delivery arrangements must be confirmed before a commercial launch.",
    "faq4": "What happens to my data?",
    "answer4": "Only your language and bag can be remembered in this browser. Delivery details stay in memory while you edit your selection, and are cleared when you leave or finish the shopping journey. No personal details are saved or sent by the demo forms.",
    "limit": "You can add up to 99 of each item in this demo.",
    "removed": "Removed from your demo bag",
    "chooseBox": "Add box to bag",
    "bundleContinue": "Add box to bag",
    "stepBag": "Bag",
    "stepDelivery": "Delivery",
    "stepReview": "Review",
    "progressLabel": "Checkout progress",
    "shippingTitle": "Delivery details",
    "shippingIntro": "Enter the recipient and a complete Seoul address. Fields marked * are required.",
    "contactTitle": "Who is receiving it?",
    "addressTitle": "Where are we delivering?",
    "recipientLabel": "Recipient’s full name",
    "recipientHint": "The person who will receive the package.",
    "phoneLabel": "Mobile number",
    "phoneHint": "Include the country code if needed, e.g. +82 10-0000-0000.",
    "orderEmailLabel": "Email address",
    "orderEmailHint": "For order updates in a real checkout. No email is sent in this demo.",
    "countryLabel": "Country",
    "countryValue": "South Korea",
    "cityLabel": "City",
    "cityValue": "Seoul",
    "cityHint": "This preview demonstrates delivery within Seoul only. Coverage is not confirmed.",
    "postcodeLabel": "Postal code",
    "postcodeHint": "Enter the 5-digit Korean postal code for the address.",
    "districtLabel": "District (gu)",
    "districtHint": "For example: Gangbuk-gu / 강북구.",
    "streetLabel": "Street address and building number",
    "streetHint": "Use the road-name address, e.g. 123 Example-ro. Korean or Latin characters are accepted.",
    "unitLabel": "Apartment, building or floor (optional)",
    "unitHint": "For an apartment, add the building and unit, e.g. 101-dong, 502-ho.",
    "notesLabel": "Delivery instructions (optional)",
    "notesHint": "For example, a preferred drop-off location. Do not enter access codes or sensitive details.",
    "useSample": "Use fictional sample details",
    "sampleFilled": "Fictional details inserted. You can change them before continuing.",
    "continueReview": "Review delivery & order",
    "backBag": "Back to bag",
    "backDelivery": "Edit delivery details",
    "reviewTitle": "Check before confirming",
    "reviewIntro": "Review the box contents, quantities and recipient. This is still a demo, with no payment or shipment.",
    "deliverySummary": "Delivery to",
    "selectionSummary": "Your selection",
    "deliveryFees": "Shipping cost",
    "notCalculated": "Not calculated in this preview",
    "paymentLabel": "Payment",
    "paymentUnavailable": "Unavailable — demo only",
    "reviewNotice": "No final payable total is available. Delivery, tax treatment and payment must be configured before real orders can be accepted.",
    "formError": "Check the highlighted fields before continuing.",
    "recipientError": "Enter the recipient’s full name (at least 2 characters).",
    "phoneError": "Enter a phone number containing 8–15 digits; +, spaces, hyphens and parentheses are allowed.",
    "orderEmailError": "Enter a valid email address, such as demo@example.com.",
    "postcodeError": "Enter a 5-digit postal code.",
    "districtError": "Enter the district, such as Gangbuk-gu.",
    "streetError": "Enter the street name and building number.",
    "lengthError": "This entry is too long. Please shorten it.",
    "howEyebrow": "A clear path",
    "howTitle": "Three simple steps.",
    "howNote": "Try the journey with fictional details. This preview does not take payments or place orders.",
    "howChoose": "Choose your box",
    "howChooseText": "Compare the contents and sample prices.",
    "howDelivery": "Add delivery details",
    "howDeliveryText": "Enter the recipient and Seoul address.",
    "howReview": "Review and confirm",
    "howReviewText": "Check your selection before finishing the demo.",
    "contentsCount": "products included",
    "addInstructions": "Add delivery instructions (optional)",
    "bagSaved": "Your delivery details are kept while you edit this bag. They are cleared when you leave the shopping journey.",
    "quantityUpdated": "Quantity updated",
    "itemAdded": "Added to bag"
  },
  "ko": {
    "announcement": "서울을 위한 이탈리안 아이디어 · 파트너 프리뷰",
    "navBoxes": "기프트 박스",
    "navPantry": "팬트리",
    "navStory": "브랜드 스토리",
    "cart": "장바구니",
    "heroEyebrow": "이탈리아의 맛. 여유로운 저녁.",
    "heroTitle": "이탈리안 팬트리.<br>함께 나누는 즐거움.",
    "heroText": "서울을 위한 이탈리안 기프트 박스 콘셉트 3종. 구성을 비교하고 배송 정보 입력부터 확인까지 체험해 보세요.",
    "heroCta": "박스 비교하기",
    "heroNote": "컬렉션 No. 01 / 이탈리안 이브닝",
    "introEyebrow": "베로의 철학",
    "introTitle": "선택은 간결하게.<br>즐거움은 풍성하게.",
    "introText": "좋은 저녁에 복잡한 메뉴가 꼭 필요한 것은 아닙니다. 작은 이탈리안 팬트리와 간단한 서빙 아이디어로 테이블에서 함께하는 시간을 더 길게 만드는 콘셉트입니다.",
    "pillar1Title": "원산지의 이야기",
    "pillar1Text": "지역의 이야기를 바탕으로 생산자를 찾아갈 예정입니다.",
    "pillar2Title": "꼭 필요한 것만",
    "pillar2Text": "간편하게 즐기는 일곱 가지 제품.",
    "pillar3Title": "저녁을 선물하다",
    "pillar3Text": "첫 만남, 데이트 나이트, 풍성한 테이블을 위한 기프트 박스 콘셉트.",
    "boxesEyebrow": "01 / 컬렉션",
    "boxesTitle": "오늘 저녁에 어울리는 박스를 찾아보세요.",
    "boxesText": "세 가지 테마, 명확한 구성과 예시 가격. 박스를 선택하거나 아래에서 개별 제품을 살펴보세요.",
    "ritualEyebrow": "03 / 테이블에서",
    "ritualTitle": "트러플 한 스푼.<br>여유 한 스푼.",
    "step1": "파스타를 알 덴테로 삶아주세요.",
    "step2": "면수 한 스푼으로 소스를 부드럽게 풀어주세요.",
    "step3": "트러플 소금으로 마무리하고, 휴대폰은 잠시 내려놓으세요.",
    "pantryEyebrow": "02 / 에센셜",
    "pantryTitle": "하나씩 고르고 싶으신가요?",
    "pantryText": "개별 제품 7종을 살펴보세요. 마음에 드는 제품을 같은 데모 장바구니에 담을 수 있습니다.",
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
    "checkout": "배송 정보 입력",
    "demoNote": "파트너 프리뷰 · 실제 구매 불가",
    "checkoutEyebrow": "한 단계씩 완성하는 저녁",
    "checkoutTitle": "어디로 보내드릴까요?",
    "email": "이메일 주소",
    "placeOrder": "데모 확인 — 실제 결제 없음",
    "successEyebrow": "데모 완료",
    "successTitle": "배송 데모가 완료되었습니다.",
    "successText": "실제 주문, 결제 및 배송은 이루어지지 않았습니다. 입력한 정보는 모두 삭제되었습니다.",
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
    "details": "자세히 보기",
    "collectionLabel": "패키지 콘셉트",
    "included": "박스 구성",
    "productNote": "콘셉트 제품입니다. 성분, 알레르기 정보, 원산지 및 유통기한은 출시 전 공급업체와 확인할 예정입니다.",
    "boxNote": "박스 예시 가격에는 패키지와 테이스팅 경험이 반영되어 있으며, 할인 묶음 상품이 아닙니다.",
    "backCollection": "컬렉션 둘러보기",
    "emptyText": "박스나 팬트리 제품을 선택해 데모를 체험해 보세요.",
    "increase": "수량 늘리기",
    "decrease": "수량 줄이기",
    "bagNote": "구성과 수량을 확인해 주세요. 다음은 배송 정보 입력과 최종 확인입니다. 실제 결제나 배송은 없습니다.",
    "checkoutNote": "배송 정보 입력 데모입니다. 가상 정보를 사용해 주세요. 장바구니와 배송 정보를 수정하는 동안 메모리에만 유지되며, 쇼핑 과정을 나가거나 완료하면 삭제됩니다.",
    "all": "전체 제품",
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
    "answer2": "디스커버리는 트러플 소스와 탈리아텔레, 데이트 나이트는 여기에 꿀, 트러플 소금, 타랄리를 더한 구성입니다. 시그니처에는 발사믹도 포함됩니다. 페페로니 크루스키는 이 프리뷰에서 개별 제품으로만 판매되며 박스에는 포함되지 않습니다.",
    "faq3": "배송과 수입 절차가 확정되었나요?",
    "answer3": "아닙니다. 공급업체, 한국 수입 요건, 최종 라벨 및 배송 방식은 정식 출시 전에 확정해야 합니다.",
    "faq4": "개인정보는 어떻게 처리되나요?",
    "answer4": "이 브라우저에 언어와 장바구니만 저장될 수 있습니다. 배송 정보는 선택한 상품을 수정하는 동안 메모리에만 유지되며, 쇼핑 과정을 나가거나 완료하면 삭제됩니다. 데모 양식은 개인정보를 저장하거나 전송하지 않습니다.",
    "limit": "데모에서는 제품당 최대 99개까지 담을 수 있습니다.",
    "removed": "데모 장바구니에서 삭제했습니다",
    "chooseBox": "박스 담기",
    "bundleContinue": "박스 담기",
    "stepBag": "장바구니",
    "stepDelivery": "배송 정보",
    "stepReview": "최종 확인",
    "progressLabel": "주문 진행 단계",
    "shippingTitle": "배송 정보",
    "shippingIntro": "받는 분과 서울 내 상세 주소를 입력해 주세요. * 표시 항목은 필수입니다.",
    "contactTitle": "누가 받으시나요?",
    "addressTitle": "어디로 배송하나요?",
    "recipientLabel": "받는 분 성함",
    "recipientHint": "택배를 받을 분의 이름을 입력해 주세요.",
    "phoneLabel": "휴대전화 번호",
    "phoneHint": "필요한 경우 국가번호를 포함해 주세요. 예: +82 10-0000-0000.",
    "orderEmailLabel": "이메일 주소",
    "orderEmailHint": "실제 주문 시 안내를 받을 주소입니다. 이 데모에서는 이메일을 보내지 않습니다.",
    "countryLabel": "국가",
    "countryValue": "대한민국",
    "cityLabel": "도시",
    "cityValue": "서울",
    "cityHint": "서울 내 배송 과정을 보여주는 프리뷰입니다. 실제 배송 가능 지역은 확정되지 않았습니다.",
    "postcodeLabel": "우편번호",
    "postcodeHint": "해당 주소의 5자리 우편번호를 입력해 주세요.",
    "districtLabel": "구",
    "districtHint": "예: 강북구 / Gangbuk-gu.",
    "streetLabel": "도로명 주소 및 건물번호",
    "streetHint": "도로명과 건물번호를 입력해 주세요. 한글 또는 영문으로 입력할 수 있습니다.",
    "unitLabel": "동, 호수 또는 층 (선택)",
    "unitHint": "아파트라면 동과 호수를 추가해 주세요. 예: 101동 502호.",
    "notesLabel": "배송 요청사항 (선택)",
    "notesHint": "원하는 수령 장소 등을 입력해 주세요. 출입 비밀번호나 민감한 정보는 입력하지 마세요.",
    "useSample": "가상 예시 정보 입력",
    "sampleFilled": "가상 정보가 입력되었습니다. 다음 단계 전에 수정할 수 있습니다.",
    "continueReview": "배송 정보 및 주문 확인",
    "backBag": "장바구니로 돌아가기",
    "backDelivery": "배송 정보 수정",
    "reviewTitle": "확인 후 완료해 주세요",
    "reviewIntro": "박스 구성, 수량, 받는 분을 확인해 주세요. 실제 결제나 배송이 없는 데모입니다.",
    "deliverySummary": "받는 분 및 주소",
    "selectionSummary": "선택한 제품",
    "deliveryFees": "배송비",
    "notCalculated": "프리뷰에서는 계산되지 않습니다",
    "paymentLabel": "결제",
    "paymentUnavailable": "이용 불가 — 데모 전용",
    "reviewNotice": "최종 결제 금액은 제공되지 않습니다. 실제 주문을 받기 전에 배송, 세금 처리 및 결제 기능을 확정해야 합니다.",
    "formError": "표시된 항목을 확인한 뒤 다시 진행해 주세요.",
    "recipientError": "받는 분의 성함을 2자 이상 입력해 주세요.",
    "phoneError": "숫자 8~15자리의 전화번호를 입력해 주세요. +, 공백, 하이픈, 괄호를 사용할 수 있습니다.",
    "orderEmailError": "올바른 이메일 주소를 입력해 주세요. 예: demo@example.com.",
    "postcodeError": "5자리 우편번호를 입력해 주세요.",
    "districtError": "강북구와 같이 구 이름을 입력해 주세요.",
    "streetError": "도로명과 건물번호를 입력해 주세요.",
    "lengthError": "입력한 내용이 너무 깁니다. 짧게 입력해 주세요.",
    "howEyebrow": "간단한 이용 방법",
    "howTitle": "간단한 세 단계.",
    "howNote": "가상 정보로 체험해 보세요. 실제 결제나 주문은 이루어지지 않습니다.",
    "howChoose": "박스 선택",
    "howChooseText": "구성과 예시 가격을 비교하세요.",
    "howDelivery": "배송 정보 입력",
    "howDeliveryText": "받는 분과 서울 주소를 입력하세요.",
    "howReview": "확인 및 완료",
    "howReviewText": "선택한 상품을 확인하고 데모를 완료하세요.",
    "contentsCount": "종 구성",
    "addInstructions": "배송 요청사항 추가 (선택)",
    "bagSaved": "장바구니를 수정하는 동안 배송 정보가 유지됩니다. 쇼핑 과정을 나가면 삭제됩니다.",
    "quantityUpdated": "수량이 변경되었습니다",
    "itemAdded": "장바구니에 담았습니다"
  }
};


const pageMetadata = {
  "en": {
    "title": "Vero Seoul — Italian gourmet concept | Partner preview",
    "description": "Explore Vero Seoul, an Italian gourmet concept for Korea: seven pantry products and three gift boxes. Partner preview only; no real purchases."
  },
  "ko": {
    "title": "Vero Seoul — 이탈리안 고메 브랜드 콘셉트 | 파트너 프리뷰",
    "description": "한국을 위한 이탈리안 고메 브랜드 콘셉트, 베로 서울을 만나보세요. 팬트리 제품 7종과 기프트 박스 3종을 소개하는 파트너 프리뷰로, 실제 구매는 불가합니다."
  }
};

const $ = id => document.getElementById(id);
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* The demo also works without storage. */ } }
};
const allItems = [...products, ...boxes];
const findItem = id => allItems.find(item => item.id === id);
const packSizes = {sauce:'90g', honey:'100g', salt:'60g', pasta:'500g', taralli:'250g', balsamic:'100ml', cruschi:'25g'};
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
  const shape = item.included ? 'gift' : item.id === 'balsamic' ? 'bottle' : ['pasta','taralli','cruschi'].includes(item.id) ? 'bag' : 'jar';
  const tag = interactive ? 'button' : 'div';
  const attrs = interactive ? `type="button" data-detail="${item.id}" aria-label="${escapeHTML(t('details') + ': ' + itemName(item))}"` : 'aria-hidden="true"';
  return `<${tag} class="product-visual ${interactive ? 'visual-button' : ''}" data-product="${item.id}" ${attrs}>
    ${item.badge ? `<span class="badge">${escapeHTML(lang === 'ko' ? item.badgeKo : item.badge)}</span>` : ''}
    <span class="package ${shape}" aria-hidden="true"><small>VERO.</small><em>SEOUL</em><strong>${item.label}</strong><span class="package-line"></span></span>
    <span class="visual-label">${t('collectionLabel')}</span>${interactive ? '<span class="visual-arrow" aria-hidden="true">↗</span>' : ''}</${tag}>`;
}
function cardMarkup(item) {
  return `<article class="product-card" data-card="${item.id}">${packaging(item, true)}<div class="product-info"><h3>${escapeHTML(itemName(item))}</h3><p>${escapeHTML(itemDescription(item))}</p>${item.included ? `<p class="box-contents-label">${item.included.length} ${t('contentsCount')}</p><ul class="box-contents">${item.included.map(id => `<li><span>${escapeHTML(itemName(findItem(id)))}</span><small>1 × ${packSizes[id]}</small></li>`).join('')}</ul>` : ''}<button class="details-btn" data-detail="${item.id}" aria-label="${escapeHTML(t('details') + ': ' + itemName(item))}">${t('details')} <span aria-hidden="true">↗</span></button><div class="product-bottom"><div><span class="price-label">${t('samplePrice')}</span><span class="price">${won(item.price)}</span></div><button class="add-btn" data-add="${item.id}" aria-label="${escapeHTML(t(item.included ? 'chooseBox' : 'add') + ': ' + itemName(item))}">${item.included ? t('chooseBox') : t('add')} <span aria-hidden="true">+</span></button></div></div></article>`;
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
  const quickBag = $('quickBag');
  if (quickBag) {
    quickBag.hidden = count === 0;
    quickBag.textContent = `${t('yourBag')} · ${count} · ${won(total())} →`;
    document.body.classList.toggle('has-bag', count > 0);
  }
  $('cartCount').textContent = count;
  $('cartBtn').setAttribute('aria-label', `${t('openBag')} (${count})`);
  $('subtotal').textContent = won(total());
  $('bagStatus').textContent = `${count} ${t('items')} · ${won(total())}`;
  $('checkoutBtn').disabled = count === 0;
  $('cartItems').innerHTML = count ? entries().map(({item,quantity}) => `<div class="cart-line"><div><h3>${escapeHTML(itemName(item))}</h3>${item.included ? `<p class="bundle-contents">${item.included.map(id => escapeHTML(itemName(findItem(id)))).join(' · ')}</p>` : ''}<p>${won(item.price)}</p><div class="cart-controls"><div class="qty"><button data-qty="${item.id}" data-delta="-1" aria-label="${escapeHTML(t('decrease') + ': ' + itemName(item))}">−</button><span>${quantity}</span><button data-qty="${item.id}" data-delta="1" ${quantity >= 99 ? 'disabled' : ''} aria-label="${escapeHTML(t('increase') + ': ' + itemName(item))}">+</button></div><button class="remove" data-remove="${item.id}" aria-label="${escapeHTML(t('remove') + ': ' + itemName(item))}">${t('remove')}</button></div></div><strong>${won(item.price * quantity)}</strong></div>`).join('') : `<div class="empty"><span aria-hidden="true">V.</span><h3>${t('empty')}</h3><p>${t('emptyText')}</p><button class="button dark" data-explore>${t('backCollection')} ↗</button></div>`;
}
function saveCart() { storage.set('veroCart', JSON.stringify(cart)); renderCart(); }
function toast(message) {
  clearTimeout(toastTimer);
  $('toast').textContent = message;
  $('toast').classList.add('show');
  toastTimer = setTimeout(() => $('toast').classList.remove('show'), 2400);
}
let activeShoppingId = null;
let editingBag = false;
function syncModalState() { document.body.classList.toggle('modal-open', Boolean(document.querySelector('dialog[open]'))); }
function shoppingRoute(route, replace = false) {
  if (typeof history === 'undefined') return;
  const hash = route ? '#shop-' + route : '#boxes';
  if (location.hash === hash) return;
  history[replace ? 'replaceState' : 'pushState']({veroShopping: route}, '', hash);
}
function showShopping(id, route = true) {
  closeMenu();
  for (const page of ['cartDialog', 'checkoutDialog']) { $(page).hidden = page !== id; $(page).open = page === id; }
  activeShoppingId = id;
  $('main').hidden = true; $('siteFooter').hidden = true; $('shoppingFlow').hidden = false;
  document.body.classList.add('shopping-open');
  $('skipLink').setAttribute('href', '#shoppingFlow');
  if (route) shoppingRoute(id === 'cartDialog' ? 'bag' : $('success').hidden ? $('reviewStep').hidden ? 'delivery' : 'review' : 'complete');
  if (typeof window !== 'undefined') window.scrollTo({top:0, behavior:'instant'});
}
function exitShopping(updateRoute = true) {
  for (const page of ['cartDialog', 'checkoutDialog']) { $(page).hidden = true; $(page).open = false; }
  activeShoppingId = null; editingBag = false; resetShipping();
  $('shoppingFlow').hidden = true; $('main').hidden = false; $('siteFooter').hidden = false;
  document.body.classList.remove('shopping-open');
  $('skipLink').setAttribute('href', '#main');
  if (updateRoute) shoppingRoute(null, true);
  $('cartBtn').focus();
}

const dialogTriggers = new Map();
function openDialog(id) {
  closeMenu();
  if ($(id).open) return;
  if (id !== 'productDialog') { showShopping(id); return; }
  dialogTriggers.set(id, document.activeElement);
  $(id).showModal(); syncModalState();
}
function restoreDialogFocus(id) {
  if (activeShoppingId || document.querySelector('dialog[open]')) return;
  const trigger = dialogTriggers.get(id);
  if (trigger && trigger.isConnected !== false && !trigger.disabled) trigger.focus();
  else $('cartBtn').focus();
}
function closeDialog(id) { if (id !== 'productDialog') { exitShopping(); return; } $(id).close(); syncModalState(); }
function renderDetail(id) {
  const item = findItem(id);
  if (!item) return;
  detailId = id;
  $('productDetail').innerHTML = `<div class="product-detail-grid">${packaging(item)}<div class="detail-copy"><p class="eyebrow">VERO SEOUL / ${t('collectionLabel')}</p><h2 id="detailTitle">${escapeHTML(itemName(item))}</h2><p>${escapeHTML(itemDescription(item))}</p>${item.included ? `<h3>${t('included')}</h3><ul>${item.included.map(productId => `<li>${escapeHTML(itemName(findItem(productId)))}</li>`).join('')}</ul><p>${t('boxNote')}</p>` : ''}<p class="detail-price"><span class="price-label">${t('samplePrice')}</span>${won(item.price)}</p><button class="button dark full" data-add="${id}">${item.included ? t('bundleContinue') : t('add')} +</button><p class="preview-label">${t('productNote')}</p></div></div>`;
}
function renderOrder() {
  $('orderSummary').innerHTML = entries().map(({item,quantity}) => `<div class="order-line"><div><span>${escapeHTML(itemName(item))} × ${quantity}</span>${item.included ? `<small class="bundle-contents">${item.included.map(id => escapeHTML(itemName(findItem(id)))).join(' · ')}</small>` : ''}</div><strong>${won(item.price * quantity)}</strong></div>`).join('') + `<div class="subtotal"><span>${t('subtotal')}</span><strong>${won(total())}</strong></div><div class="cost-note"><span>${t('deliveryFees')}</span><span>${t('notCalculated')}</span></div><div class="cost-note"><span>${t('paymentLabel')}</span><span>${t('paymentUnavailable')}</span></div>`;
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
  $('recipient').placeholder = lang === 'ko' ? '예: 김데모' : 'e.g. Kim Demo';
  document.querySelector('.filters').setAttribute('aria-label', lang === 'ko' ? '제품 카테고리' : 'Product categories');
  $('boxGrid').innerHTML = boxes.map(cardMarkup).join('');
  renderProducts(); renderCart();
  if (detailId) renderDetail(detailId);
  if ($('checkoutDialog').open) { renderOrder(); if (shippingDetails) renderShippingSummary(); }
  $('newsletterMsg').textContent = '';
  if ($('sampleStatus').textContent) $('sampleStatus').textContent = t('sampleFilled');
  renderShippingErrors();
}
function closeMenu() { $('mainNav').classList.remove('open'); $('menuBtn').setAttribute('aria-expanded', 'false'); }
const shippingFields = ['recipient','phone','orderEmail','postcode','district','street','unit','deliveryNotes'];
const shippingLimits = {recipient:80,phone:30,orderEmail:160,postcode:5,district:80,street:160,unit:100,deliveryNotes:200};
let shippingDetails = null;
let shippingErrors = {};
function renderShippingErrors() {
  for (const id of shippingFields) {
    if (shippingErrors[id]) $(id + 'Error').textContent = t(shippingErrors[id]);
  }
  $('formErrors').textContent = Object.keys(shippingErrors).length ? t('formError') : '';
}
function readShippingFields() {
  return Object.fromEntries(shippingFields.map(id => [id, $(id).value.trim()]));
}
function validateShipping(values) {
  const errors = {};
  if (!values.recipient || values.recipient.trim().length < 2) errors.recipient = 'recipientError';
  const digits = (values.phone || '').replace(/\D/g, '');
  if (!/^[+()\d\s.-]+$/.test(values.phone || '') || digits.length < 8 || digits.length > 15) errors.phone = 'phoneError';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.orderEmail || '')) errors.orderEmail = 'orderEmailError';
  if (!/^\d{5}$/.test(values.postcode || '')) errors.postcode = 'postcodeError';
  if (!values.district || values.district.trim().length < 2) errors.district = 'districtError';
  if (!values.street || values.street.trim().length < 3) errors.street = 'streetError';
  for (const id of shippingFields) if ((values[id] || '').length > shippingLimits[id]) errors[id] = 'lengthError';
  return errors;
}
function clearFieldError(id) {
  delete shippingErrors[id];
  $(id).removeAttribute('aria-invalid');
  $(id + 'Error').textContent = '';
}
function resetShipping() {
  shippingDetails = null;
  $('shippingForm').reset();
  // Explicitly clear input values as well as the transient review markup.
  for (const id of shippingFields) { $(id).value = ''; clearFieldError(id); }
  $('shippingSummary').textContent = '';
  $('formErrors').textContent = '';
  $('sampleStatus').textContent = '';
  $('optionalNotes').open = false;
}
function setCheckoutStep(step, focus = true) {
  const review = step === 'review';
  $('shippingStep').hidden = review;
  $('reviewStep').hidden = !review;
  document.querySelector('.checkout-layout').classList.toggle('reviewing', review);
  $('checkoutDialog').setAttribute('aria-labelledby', review ? 'reviewTitle' : 'shippingTitle');
  $('checkoutDialog').setAttribute('aria-describedby', 'checkoutNotice');
  $('stepDelivery').setAttribute('aria-current', review ? 'false' : 'step');
  $('stepReview').setAttribute('aria-current', review ? 'step' : 'false');
  if (focus) $(review ? 'reviewTitle' : 'shippingTitle').focus();
  if (activeShoppingId === 'checkoutDialog') shoppingRoute(review ? 'review' : 'delivery');
  if (typeof window !== 'undefined') window.scrollTo({top:0, behavior:'instant'});
}
function renderShippingSummary() {
  if (!shippingDetails) return;
  const v = shippingDetails;
  $('shippingSummary').innerHTML = `<strong>${escapeHTML(v.recipient)}</strong><p>${escapeHTML(v.phone)}<br>${escapeHTML(v.orderEmail)}</p><p>${escapeHTML(v.street)}${v.unit ? '<br>' + escapeHTML(v.unit) : ''}<br>${escapeHTML(v.district)}, ${t('cityValue')} ${escapeHTML(v.postcode)}<br>${t('countryValue')}</p>${v.deliveryNotes ? `<p><strong>${t('notesLabel')}</strong><br>${escapeHTML(v.deliveryNotes)}</p>` : ''}`;
}
$('shippingForm').addEventListener('submit', event => {
  event.preventDefault();
  if (!entries().length) return;
  const values = readShippingFields();
  const errors = validateShipping(values);
  for (const id of shippingFields) {
    clearFieldError(id);
    if (errors[id]) { shippingErrors[id] = errors[id]; $(id).setAttribute('aria-invalid','true'); $(id + 'Error').textContent = t(errors[id]); }
  }
  const invalid = Object.keys(errors);
  $('formErrors').textContent = invalid.length ? t('formError') : '';
  if (invalid.length) { if (errors.deliveryNotes) $('optionalNotes').open = true; $(invalid[0]).focus(); return; }
  shippingDetails = values; renderShippingSummary(); renderOrder(); setCheckoutStep('review');
});
for (const id of shippingFields) $(id).addEventListener('input', () => { clearFieldError(id); $('sampleStatus').textContent = ''; shippingDetails = null; renderShippingErrors(); });
$('backDelivery').addEventListener('click', () => setCheckoutStep('delivery'));
$('backBag').addEventListener('click', () => { editingBag = true; showShopping('cartDialog'); $('bagStatus').textContent = t('bagSaved'); $('bagTitle').focus(); });
$('useSample').addEventListener('click', () => {
  // Deliberately fictional, explicitly labelled sample data; never a real recipient.
  const sample = {recipient:'Demo Guest',phone:'010-0000-0000',orderEmail:'demo@example.com',postcode:'01234',district:'Gangbuk-gu',street:'123 Example-ro',unit:'Demo building, 502-ho',deliveryNotes:''};
  for (const id of shippingFields) { $(id).value = sample[id]; clearFieldError(id); }
  $('formErrors').textContent = ''; $('sampleStatus').textContent = t('sampleFilled');
});

$('menuBtn').addEventListener('click', () => {
  const open = $('menuBtn').getAttribute('aria-expanded') !== 'true';
  $('menuBtn').setAttribute('aria-expanded', String(open));
  $('mainNav').classList.toggle('open', open);
});
$('mainNav').addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  const href = link.getAttribute('href');
  if (href?.startsWith('#')) {
    const section = $(href.slice(1));
    if (section) { section.setAttribute('tabindex', '-1'); section.focus({preventScroll:true}); }
  }
});
if (typeof matchMedia === 'function') {
  const mobileNavigation = matchMedia('(max-width: 800px)');
  mobileNavigation.addEventListener('change', () => closeMenu());
}
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
    if (findItem(id).included) { openDialog('cartDialog'); $('bagTitle').focus(); }
    else toast(`${t('itemAdded')}: ${itemName(findItem(id))}`);
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
    else $('bagStatus').textContent = `${t('quantityUpdated')}: ${itemName(findItem(id))} × ${cart[id]} · ${won(total())}`;
  }
  const close = event.target.closest('[data-close]');
  if (close) closeDialog(close.dataset.close);
  if (event.target.closest('[data-explore]')) { closeDialog('cartDialog'); location.hash = 'boxes'; $('boxesTitle').setAttribute('tabindex','-1'); $('boxesTitle').focus(); }
  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) { filter = filterButton.dataset.filter; renderProducts(); }
});
$('sortSelect').addEventListener('change', event => { sort = event.target.value; renderProducts(); });
$('langBtn').addEventListener('click', () => { lang = lang === 'en' ? 'ko' : 'en'; storage.set('veroLang', lang); translate(); });
$('cartBtn').addEventListener('click', () => { if (activeShoppingId === 'checkoutDialog') editingBag = true; openDialog('cartDialog'); $('bagTitle').focus(); });
if ($('quickBag')) $('quickBag').addEventListener('click', () => { openDialog('cartDialog'); $('bagTitle').focus(); });
$('checkoutBtn').addEventListener('click', () => {
  if (!entries().length) return;
  if (!editingBag) resetShipping();
  editingBag = false;
  $('checkoutFormWrap').hidden = false; $('success').hidden = true;
  renderOrder(); setCheckoutStep('delivery', false); openDialog('checkoutDialog');
  $('recipient').focus();
});
$('placeOrder').addEventListener('click', () => {
  if (!entries().length || !shippingDetails || Object.keys(validateShipping(shippingDetails)).length) return;
  cart = {}; saveCart(); resetShipping();
  $('checkoutFormWrap').hidden = true; $('success').hidden = false;
  $('checkoutDialog').setAttribute('aria-labelledby','successTitle');
  $('checkoutDialog').setAttribute('aria-describedby','successDescription');
  shoppingRoute('complete');
  $('successTitle').focus();
});
$('continueBtn').addEventListener('click', () => { closeDialog('checkoutDialog'); $('cartBtn').focus(); });
$('newsletterForm').addEventListener('submit', event => { event.preventDefault(); $('newsletterMsg').textContent = t('thanks'); event.target.reset(); });
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('close', () => {
    syncModalState();
    // A queued product-dialog close must not steal focus from a shopping page.
    if (dialog.open) return;
    if (!activeShoppingId && !document.querySelector('dialog[open]') &&
        (!document.activeElement || document.activeElement === document.body ||
         document.activeElement.isConnected === false || dialog.contains?.(document.activeElement))) restoreDialogFocus(dialog.id);
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog.id);
  });
});
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    const route = location.hash;
    if (!activeShoppingId) { if (route.startsWith('#shop-')) shoppingRoute(null, true); return; }
    if (!$('success').hidden && route !== '#shop-complete') { exitShopping(false); shoppingRoute(null, true); return; }
    if (route === '#shop-complete' && !$('success').hidden) return;
    if (route === '#shop-bag') { editingBag = true; showShopping('cartDialog', false); $('bagTitle').focus(); }
    else if (route === '#shop-delivery' || (route === '#shop-review' && shippingDetails)) {
      showShopping('checkoutDialog', false); setCheckoutStep(route === '#shop-review' ? 'review' : 'delivery');
    } else { exitShopping(false); shoppingRoute(null, true); }
  });
  document.querySelectorAll('.brand, #mainNav a').forEach(link => link.addEventListener('click', () => { if (activeShoppingId) exitShopping(); }));
  // A reload never reconstructs personal fields or an in-progress checkout from a URL.
  if (location.hash.startsWith('#shop-')) shoppingRoute(null, true);
}
translate();
document.querySelector('.catalog-tools').hidden = false;
for (const id of ['langBtn', 'cartBtn', 'menuBtn']) $(id).disabled = false;
$('email').disabled = false;
document.querySelector('#newsletterForm button').disabled = false;
// No-JS visitors retain readable catalogue content; interactive controls need this script.
document.documentElement.classList.add('js');

