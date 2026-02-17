/**
 * Safari Lounge Bar - Menu avec 3 grandes catégories et changement de langue
 */

// ==================== TRADUCTIONS ====================
const translations = {
  fr: {
    title: "SAFARI LOUNGE BAR",
    nav: {
      menu: "MENU",
      drinks: "BOISSONS",
      hookah: "CHICHA",
      food: "PLATS",
      signature: "Cocktails signatures",
      classic: "Cocktails classiques",
      whiskey: "Whisky & Bourbon",
      liqueurs: "Liqueurs & Vermouths",
      tequila: "Tequila",
      rum: "Rhum",
      wine: "Vin",
      beer: "Bière",
      soft: "Softs & Thés & Cafés",
      hookah_standard: "Standard",
      hookah_water: "Premium sur eau",
      hookah_wine: "Premium sur vin",
      hookah_orange: "À l'orange",
      appetizers: "Entrées",
      salads: "Salades",
      hot_dishes: "Plats chauds",
      desserts: "Desserts"
    },
    footer: {
      prices: "Prix en roubles (Р)",
      welcome: "Bienvenue au Safari Lounge",
      hours: "Ouvert tous les jours"
    }
  },
  en: {
    title: "SAFARI LOUNGE BAR",
    nav: {
      menu: "MENU",
      drinks: "DRINKS",
      hookah: "HOOKAH",
      food: "FOOD",
      signature: "Signature cocktails",
      classic: "Classic cocktails",
      whiskey: "Whiskey & Bourbon",
      liqueurs: "Liqueurs & Vermouths",
      tequila: "Tequila",
      rum: "Rum",
      wine: "Wine",
      beer: "Beer",
      soft: "Soft drinks & Tea & Coffee",
      hookah_standard: "Standard",
      hookah_water: "Premium on water",
      hookah_wine: "Premium on wine",
      hookah_orange: "On orange",
      appetizers: "Appetizers",
      salads: "Salads",
      hot_dishes: "Hot dishes",
      desserts: "Desserts"
    },
    footer: {
      prices: "Prices in rubles (Р)",
      welcome: "Welcome to Safari Lounge",
      hours: "Open every day"
    }
  },
  ru: {
    title: "SAFARI LOUNGE BAR",
    nav: {
      menu: "МЕНЮ",
      drinks: "НАПИТКИ",
      hookah: "КАЛЬЯНЫ",
      food: "БЛЮДА",
      signature: "Авторские коктейли",
      classic: "Классические коктейли",
      whiskey: "Виски & Бурбон",
      liqueurs: "Ликеры & Вермуты",
      tequila: "Текила",
      rum: "Ром",
      wine: "Вино",
      beer: "Пиво",
      soft: "Софт & Чай & Кофе",
      hookah_standard: "Стандарт",
      hookah_water: "Премиум на воде",
      hookah_wine: "Премиум на вине",
      hookah_orange: "На апельсине",
      appetizers: "Закуски",
      salads: "Салаты",
      hot_dishes: "Горячие блюда",
      desserts: "Десерты"
    },
    footer: {
      prices: "Цены указаны в рублях (Р)",
      welcome: "Добро пожаловать в Safari Lounge",
      hours: "Работаем каждый день"
    }
  }
};

// ==================== DATA ====================
const menuData = {
  // Напитки (Drinks) - sous-catégories
  signature: {
    category: 'signature',
    title: { fr: 'Cocktails signatures', en: 'Signature cocktails', ru: 'Авторские коктейли' },
    icon: 'fa-crown',
    price: '23Р',
    items: [
      { name: 'LOVE — Любовь', volume: '85 мл', desc: { fr: 'tequila, chinarr, cerise, violette', en: 'tequila, chinarr, cherry, violet', ru: 'текила, чинар, вишня, филка' } },
      { name: 'WAKE UP — 6 утра', volume: '105 мл', desc: { fr: 'cognac, liqueur de café, miel, jus de pamplemousse', en: 'cognac, coffee liqueur, honey, grapefruit juice', ru: 'коньяк, кофейный ликер, мед, грейпфрутовый сок' } },
      { name: 'THE IMPOSSIBLE IS POSSIBLE', volume: '115 мл', desc: { fr: 'rhum, eau citronnée, jus d\'ananas', en: 'rum, lemon water, pineapple juice', ru: 'ром, лимонная вода, ананасовый сок' } },
      { name: 'MADNESS — Безумие', volume: '105 мл', desc: { fr: 'gin, eau citronnée, jus de pamplemousse, sureau', en: 'gin, lemon water, grapefruit juice, elderflower', ru: 'джин, лимонная вода, грейпфрутовый сок, бузина' } }
    ]
  },
  
  classic: {
    category: 'classic',
    title: { fr: 'Cocktails classiques', en: 'Classic cocktails', ru: 'Классические коктейли' },
    icon: 'fa-glass-martini-alt',
    price: '25Р',
    items: [
      { name: 'Aperol Spritz', volume: '200 мл', price: '25Р' },
      { name: 'White Russian', volume: '120 мл', price: '25Р' },
      { name: 'Pina Colada', volume: '180 мл', price: '25Р' },
      { name: 'Negroni', volume: '90 мл', price: '25Р' },
      { name: 'Long Island Iced Tea', volume: '200 мл', price: '28Р' },
      { name: 'Margarita', volume: '115 мл', price: '25Р' },
      { name: 'Tequila Sunrise', volume: '200 мл', price: '25Р' },
      { name: 'French 75', volume: '120 мл', price: '25Р' },
      { name: 'Sex on the beach', volume: '185 мл', price: '25Р' },
      { name: 'Whiskey Sour', volume: '120 мл', price: '25Р' }
    ]
  },
  
  whiskey: {
    category: 'whiskey',
    title: { fr: 'Whisky & Bourbon', en: 'Whiskey & Bourbon', ru: 'Виски & Бурбон' },
    icon: 'fa-whiskey-glass',
    subtitle: { fr: '50ml / 1L', en: '50ml / 1L', ru: '50мл / 1л' },
    items: [
      { name: 'JACK DANIEL\'S', origin: 'IRL', price50: '22Р', price1l: '440Р' },
      { name: 'TULLAMORE DEW', origin: 'IRL', price50: '16Р', price1l: '320Р' },
      { name: 'JAMESON', origin: 'IRL', price50: '16Р', price1l: '320Р' },
      { name: 'RED LABEL', price50: '15Р', price1l: '300Р' },
      { name: 'CHIVAS REGAL 12 Y.O.', price50: '25Р', price1l: '500Р' },
      { name: 'BALLANTINES', origin: 'SCT', price50: '14Р', price1l: '280Р' },
      { name: 'GRANTS', price50: '14Р', price1l: '280Р' },
      { name: 'WILLIAM LAWSONS', price50: '14Р', price1l: '280Р' },
      { name: 'MONKEY SHOULDER', price50: '30Р', price1l: '600Р' },
      { name: 'BUSHMILLS', price50: '15Р', price1l: '300Р' },
      { name: 'MACALLAN 12', origin: '0,7л', price50: '40Р', price1l: '800Р' },
      { name: 'JIM BEAM', origin: 'USA', price50: '14Р', price1l: '280Р' }
    ]
  },
  
  liqueurs: {
    category: 'liqueurs',
    title: { fr: 'Liqueurs & Vermouths', en: 'Liqueurs & Vermouths', ru: 'Ликеры & Вермуты' },
    icon: 'fa-wine-bottle',
    items: [
      { name: 'BECHEROVKA', price: '15Р' },
      { name: 'CYNAR', price: '15Р' },
      { name: 'JAGERMEISTER', price: '15Р' },
      { name: 'CAMPARI', price: '15Р' },
      { name: 'SAMBUCA', price: '15Р' },
      { separator: true },
      { name: 'MARTINI ROSSO', price: '12Р' },
      { name: 'MARTINI BIANCO', price: '12Р' },
      { name: 'MARTINI EXTRA DRY', price: '12Р' },
      { name: 'MARTINI ROSSO FIERO', price: '12Р' }
    ]
  },
  
  tequila: {
    category: 'tequila',
    title: { fr: 'Tequila', en: 'Tequila', ru: 'Текила' },
    icon: 'fa-seedling',
    items: [
      { name: 'OLMECA SILVER', price50: '16Р', price1l: '265Р' },
      { name: 'SIERRA BLANCO MEX', price50: '16Р', price1l: '265Р' },
      { name: 'DON JULIO REPOSADO', price: '790Р' },
      { name: 'DON JULIO BLANCO', price: '760Р' },
      { name: 'DON JULIO 1942', price: '2700Р' },
      { name: 'AZUL PLATA', price: '2900Р' },
      { name: 'AZUL REPOSADO', price: '3900Р' }
    ]
  },
  
  rum: {
    category: 'rum',
    title: { fr: 'Rhum', en: 'Rum', ru: 'Ром' },
    icon: 'fa-ship',
    items: [
      { name: 'HAVANA CLUB', price50: '12Р', price1l: '240Р' },
      { name: 'ANEJO 3 ANOS CUB', price50: '14Р', price1l: '280Р' },
      { name: 'BACARDI CARTA NEGRA USA', price50: '14Р', price1l: '280Р' },
      { name: 'BACARDI CARTA BLANCA USA', price50: '14Р', price1l: '280Р' },
      { name: 'BACARDI OAKHEART USA', price50: '14Р', price1l: '280Р' }
    ]
  },
  
  wine: {
    category: 'wine',
    title: { fr: 'Vin', en: 'Wine', ru: 'Вино' },
    icon: 'fa-wine-glass-alt',
    items: [
      { name: 'HANS BAER RIESLING сухое DEU 0,33л', priceGlass: '18Р', priceBottle: '90Р' },
      { name: 'TINI BIANCO п/сухое ИТА', priceGlass: '16Р', priceBottle: '80Р' },
      { name: 'MUCHO MAS', priceGlass: '18Р', priceBottle: '90Р' },
      { name: 'HANS BAER PINOT NOIR сухое DEU 0,33л', priceGlass: '18Р', priceBottle: '90Р' },
      { name: 'TINI ROSSO п/сухое ИТА', priceGlass: '16Р', priceBottle: '80Р' },
      { name: 'HANS BAER PINOT NOIR ROSE сухое DEU 0,33л', price: '70Р' },
      { separator: true },
      { name: 'BOLLA PROSECCO ITA', priceGlass: '20Р', priceBottle: '120Р' },
      { name: 'NOZEKO 6/A FRA', priceGlass: '12Р', priceBottle: '60Р' },
      { name: 'BARON D\'ARIGNAC', priceGlass: '12Р', priceBottle: '65Р' },
      { name: 'SANTO STEFANO GOLD', priceGlass: '19Р', priceBottle: '110Р' }
    ]
  },
  
  beer: {
    category: 'beer',
    title: { fr: 'Bière', en: 'Beer', ru: 'Пиво' },
    icon: 'fa-beer',
    items: [
      { name: 'MILLER GENUINE DRAFT 0,44л', price: '10Р' },
      { name: 'MILLER LIME 0,44л', price: '15Р' },
      { name: 'KRUSOVICE CERNE BRL 0,45л', price: '10Р' },
      { name: 'GARAGE PEACH/CHERRY/LEMON', price: '10Р' },
      { name: 'CORONA EXTRA', price: '10Р' },
      { name: 'KRONENBOURG 1664 BLANC BLR 0,46л' },
      { name: 'НЕПРАВИЛЬНЫЙ МЕД RUS 0,45л' },
      { name: 'ШОКОЛАДНЫЙ СТАУТ RUS 0,45л' },
      { name: 'GRIMBERGEN BLANCHE FRA 0,33л' },
      { name: 'GRIMBERGEN AMBREE FRA 0,33л' }
    ]
  },
  
  soft: {
    category: 'soft',
    title: { fr: 'Softs & Thés & Cafés', en: 'Soft drinks & Tea & Coffee', ru: 'Софт & Чай & Кофе' },
    icon: 'fa-coffee',
    items: [
      { name: 'COCA-COLA / FANTA / SPRITE', price: '5Р' },
      { name: 'SCHWEPPES INDIAN TONIC', price: '5Р' },
      { name: 'BONAQUA 0,5л / GORILLA 0,33л' },
      { name: 'BURN MALTA / MALTINA', price: '14Р' },
      { separator: true },
      { name: { fr: 'Espresso / double', en: 'Espresso / double', ru: 'Эспрессо / двойной' }, volume: '30/60 мл' },
      { name: { fr: 'Americano / double', en: 'Americano / double', ru: 'Американо / двойной' }, volume: '110/140 мл' },
      { name: { fr: 'Cappuccino / double', en: 'Cappuccino / double', ru: 'Капучино / двойной' }, volume: '200/300 мл' },
      { name: { fr: 'Flat white 200 ml', en: 'Flat white 200 ml', ru: 'Флэт-уайт 200 мл' } },
      { name: { fr: 'Latte 300 ml', en: 'Latte 300 ml', ru: 'Латте 300 мл' } },
      { name: { fr: 'Raf / double 200/300 ml', en: 'Raf / double 200/300 ml', ru: 'Раф / двойной 200/300 мл' } },
      { name: { fr: 'Bumble 170 ml', en: 'Bumble 170 ml', ru: 'Бамбл 170 мл' } },
      { name: { fr: 'Espresso tonic 170 ml', en: 'Espresso tonic 170 ml', ru: 'Эспрессо-тоник 170 мл' } },
      { name: { fr: 'Hot chocolate 300 ml', en: 'Hot chocolate 300 ml', ru: 'Какао 300 мл' } },
      { separator: true },
      { name: { fr: 'Tea: raspberry-mint / mango-passion', en: 'Tea: raspberry-mint / mango-passion', ru: 'Чай: малина-мята / манго-маракуйя' }, price: '15Р' },
      { name: { fr: 'Cherry-almond', en: 'Cherry-almond', ru: 'Вишня-миндаль' }, price: '15Р' },
      { name: { fr: 'Spiced forest berries', en: 'Spiced forest berries', ru: 'Пряные лесные ягоды' }, price: '15Р' },
      { name: { fr: 'Forest herbal blend', en: 'Forest herbal blend', ru: 'Лесной травяной сбор' }, price: '15Р' },
      { name: { fr: 'Black tea / Green tea', en: 'Black tea / Green tea', ru: 'Черный чай / Зеленый чай' }, price: '12Р' }
    ]
  },
  
  // Кальяны (Hookah)
  'hookah-standard': {
    category: 'hookah',
    title: { fr: 'Chicha - Standard', en: 'Hookah - Standard', ru: 'Кальяны - Стандарт' },
    icon: 'fa-joint',
    items: [
      { name: { fr: 'Standard', en: 'Standard', ru: 'Стандарт / STANDART' }, price: '50Р' }
    ]
  },
  
  'hookah-premium-water': {
    category: 'hookah',
    title: { fr: 'Chicha - Premium sur eau', en: 'Hookah - Premium on water', ru: 'Кальяны - Премиум на воде' },
    icon: 'fa-joint',
    note: { fr: 'Chicha premium sur eau — demandez le prix au bar', en: 'Premium hookah on water — ask at the bar for price', ru: 'Премиум кальяны на воде — уточните цену у бара' },
    items: []
  },
  
  'hookah-premium-wine': {
    category: 'hookah',
    title: { fr: 'Chicha - Premium sur vin', en: 'Hookah - Premium on wine', ru: 'Кальяны - Премиум на вине' },
    icon: 'fa-joint',
    note: { fr: 'Chicha premium sur vin — demandez le prix au bar', en: 'Premium hookah on wine — ask at the bar for price', ru: 'Премиум кальяны на вине — уточните цену у бара' },
    items: []
  },
  
  'hookah-orange': {
    category: 'hookah',
    title: { fr: 'Chicha - À l\'orange', en: 'Hookah - On orange', ru: 'Кальяны - На апельсине' },
    icon: 'fa-joint',
    items: [
      { name: { fr: 'Chicha à l\'orange', en: 'Hookah on orange', ru: 'Кальян на апельсине / HOOKAH ON ORANGE' }, price: '75Р' }
    ]
  },
  
  // Блюда (Food) - à compléter selon votre carte
  appetizers: {
    category: 'food',
    title: { fr: 'Entrées', en: 'Appetizers', ru: 'Закуски' },
    icon: 'fa-plate-wheat',
    items: [
      { name: { fr: 'Entrée 1', en: 'Appetizer 1', ru: 'Закуска 1' }, price: '0Р' },
      { name: { fr: 'Entrée 2', en: 'Appetizer 2', ru: 'Закуска 2' }, price: '0Р' }
    ]
  },
  
  salads: {
    category: 'food',
    title: { fr: 'Salades', en: 'Salads', ru: 'Салаты' },
    icon: 'fa-leaf',
    items: [
      { name: { fr: 'Salade 1', en: 'Salad 1', ru: 'Салат 1' }, price: '0Р' },
      { name: { fr: 'Salade 2', en: 'Salad 2', ru: 'Салат 2' }, price: '0Р' }
    ]
  },
  
  'hot-dishes': {
    category: 'food',
    title: { fr: 'Plats chauds', en: 'Hot dishes', ru: 'Горячие блюда' },
    icon: 'fa-utensils',
    items: [
      { name: { fr: 'Plat 1', en: 'Dish 1', ru: 'Блюдо 1' }, price: '0Р' },
      { name: { fr: 'Plat 2', en: 'Dish 2', ru: 'Блюдо 2' }, price: '0Р' }
    ]
  },
  
  desserts: {
    category: 'food',
    title: { fr: 'Desserts', en: 'Desserts', ru: 'Десерты' },
    icon: 'fa-cake-candles',
    items: [
      { name: { fr: 'Dessert 1', en: 'Dessert 1', ru: 'Десерт 1' }, price: '0Р' },
      { name: { fr: 'Dessert 2', en: 'Dessert 2', ru: 'Десерт 2' }, price: '0Р' }
    ]
  }
};

// ==================== FONCTIONS DE RENDU ====================
let currentLang = 'fr';

function getText(textObj) {
  if (typeof textObj === 'string') return textObj;
  if (textObj && typeof textObj === 'object') {
    return textObj[currentLang] || textObj.fr || textObj.en || textObj.ru || '';
  }
  return textObj || '';
}

function renderMenuItem(item) {
  if (item.separator) return '<hr>';
  
  let priceHtml = '';
  if (item.price) priceHtml = `<span class="item-price">${item.price}</span>`;
  else if (item.price50 && item.price1l) {
    priceHtml = `
      <span class="item-prices">
        <span class="price-50ml"><i class="fas fa-glass"></i> ${item.price50}</span>
        <span class="price-1l"><i class="fas fa-flask"></i> ${item.price1l}</span>
      </span>
    `;
  }
  else if (item.priceGlass && item.priceBottle) {
    priceHtml = `
      <span class="item-prices">
        <span class="price-50ml">${currentLang === 'fr' ? 'verre' : currentLang === 'en' ? 'glass' : 'бокал'} ${item.priceGlass}</span>
        <span class="price-1l">${currentLang === 'fr' ? 'bouteille' : currentLang === 'en' ? 'bottle' : 'бутылка'} ${item.priceBottle}</span>
      </span>
    `;
  }
  else if (item.price) priceHtml = `<span class="item-price">${item.price}</span>`;
  
  const originHtml = item.origin ? `<span class="origin">${item.origin}</span>` : '';
  const volumeHtml = item.volume ? `<span class="item-volume">${item.volume}</span>` : '';
  const descHtml = item.desc ? `<div class="cocktail-desc">${getText(item.desc)}</div>` : '';
  const itemName = getText(item.name);
  
  if (item.desc) {
    return `
      <div class="cocktail-item">
        <div class="cocktail-title">
          <span>${itemName}</span>
          <span>${item.volume || ''}</span>
        </div>
        ${descHtml}
        ${priceHtml}
      </div>
    `;
  }
  
  return `
    <div class="menu-item">
      <span class="item-name">${itemName} ${originHtml} ${volumeHtml}</span>
      ${priceHtml}
    </div>
  `;
}

function renderCategory(categoryKey) {
  const cat = menuData[categoryKey];
  if (!cat) return '';
  
  let itemsHtml = '';
  if (cat.items && cat.items.length > 0) {
    itemsHtml = cat.items.map(item => renderMenuItem(item)).join('');
  }
  
  const noteHtml = cat.note ? `<div class="note-premium"><i class="fas fa-star"></i> ${getText(cat.note)}</div>` : '';
  const title = getText(cat.title);
  const subtitle = cat.subtitle ? getText(cat.subtitle) : '';
  
  return `
    <div class="card" data-category="${cat.category}">
      <div class="card-header">
        <i class="fas ${cat.icon}"></i>
        <h2>${title} ${subtitle ? `<small>${subtitle}</small>` : ''}</h2>
      </div>
      ${itemsHtml}
      ${noteHtml}
    </div>
  `;
}

// ==================== SCRIPT PRINCIPAL ====================
document.addEventListener('DOMContentLoaded', function() {
  const menuGrid = document.getElementById('menuGrid');
  const navItems = document.querySelectorAll('.subnav-item');
  const sectionHeaders = document.querySelectorAll('.section-header');
  const menuToggle = document.getElementById('menuToggle');
  const navClose = document.getElementById('navClose');
  const categoryNav = document.getElementById('categoryNav');
  
  // Éléments du dropdown de langue
  const languageBtn = document.getElementById('languageBtn');
  const languageMenu = document.getElementById('languageMenu');
  const langOptions = document.querySelectorAll('.lang-option');
  const currentLangSpan = document.querySelector('.current-lang');
  
  // Créer l'overlay
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);
  
  let activeCategory = 'signature';

  // Gestion du dropdown de langue
  languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageMenu.classList.toggle('show');
  });

  // Fermer le dropdown en cliquant ailleurs
  document.addEventListener('click', (e) => {
    if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
      languageMenu.classList.remove('show');
    }
  });

  // Fonction pour mettre à jour les textes de l'interface
  function updateUILanguage() {
    // Mettre à jour les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const keys = key.split('.');
      let value = translations[currentLang];
      for (const k of keys) {
        if (value) value = value[k];
      }
      if (value) el.textContent = value;
    });

    // Mettre à jour les sous-catégories
    navItems.forEach(item => {
      const key = item.dataset.i18n;
      if (key) {
        const keys = key.split('.');
        let value = translations[currentLang];
        for (const k of keys) {
          if (value) value = value[k];
        }
        if (value) item.textContent = value;
      }
    });

    // Mettre à jour le texte du bouton de langue
    if (currentLang === 'fr') currentLangSpan.textContent = 'FR';
    else if (currentLang === 'en') currentLangSpan.textContent = 'EN';
    else if (currentLang === 'ru') currentLangSpan.textContent = 'RU';

    // Re-rendre le menu actif
    renderMenu(activeCategory);
  }

  // Fonction pour changer de langue
  function changeLang(lang) {
    currentLang = lang;
    
    // Mettre à jour les options actives
    langOptions.forEach(opt => {
      if (opt.dataset.lang === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
    
    updateUILanguage();
    languageMenu.classList.remove('show');
  }

  // Écouteurs pour les options de langue
  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      changeLang(opt.dataset.lang);
    });
  });

  // Fonction pour ouvrir/fermer le menu
  function toggleMenu(force) {
    const isVisible = categoryNav.classList.contains('visible');
    
    if (force === true || !isVisible) {
      categoryNav.classList.add('visible');
      overlay.classList.add('visible');
      document.body.classList.add('menu-open');
    } else {
      categoryNav.classList.remove('visible');
      overlay.classList.remove('visible');
      document.body.classList.remove('menu-open');
    }
  }

  // Gestionnaire pour les sections principales
  sectionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const section = this.dataset.section;
      const subsectionList = document.getElementById(`${section}Subsections`);
      const isActive = this.classList.contains('active');
      
      // Fermer toutes les autres sections
      sectionHeaders.forEach(h => {
        if (h !== this) {
          h.classList.remove('active');
          const otherSection = document.getElementById(`${h.dataset.section}Subsections`);
          if (otherSection) otherSection.style.display = 'none';
        }
      });
      
      // Toggle la section courante
      if (isActive) {
        this.classList.remove('active');
        subsectionList.style.display = 'none';
      } else {
        this.classList.add('active');
        subsectionList.style.display = 'block';
      }
    });
  });

  // Ouvrir le menu
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(true);
  });

  // Fermer avec le bouton X
  navClose.addEventListener('click', () => {
    toggleMenu(false);
  });

  // Fermer en cliquant sur l'overlay
  overlay.addEventListener('click', () => {
    toggleMenu(false);
  });

  // Fermer avec la touche Echap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && categoryNav.classList.contains('visible')) {
      toggleMenu(false);
    }
  });

  // Rendu du menu
  function renderMenu(category) {
    if (category === 'all') {
      // Afficher toutes les catégories de boissons par défaut
      const drinkCategories = ['signature', 'classic', 'whiskey', 'liqueurs', 'tequila', 'rum', 'wine', 'beer', 'soft'];
      menuGrid.innerHTML = drinkCategories.map(cat => renderCategory(cat)).join('');
    } else {
      menuGrid.innerHTML = renderCategory(category);
    }
  }

  // Gestionnaire de clic sur les sous-catégories
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const category = this.dataset.category;
      
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      
      activeCategory = category;
      renderMenu(activeCategory);
      
      // Fermer le menu après sélection
      toggleMenu(false);
    });
  });

  // Activer la première sous-catégorie par défaut
  document.querySelector('.subnav-item.active')?.classList.add('active');
  
  // Rendu initial
  renderMenu('signature');
  
  console.log('Safari menu avec changement de langue chargé ✅');
});