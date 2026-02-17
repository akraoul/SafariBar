import React, { useEffect, useMemo, useRef, useState } from 'react'

const translations = {
  fr: {
    title: 'SAFARI LOUNGE BAR',
    nav: {
      menu: 'MENU',
      drinks: 'BOISSONS',
      hookah: 'CHICHA',
      food: 'PLATS',
      signature: 'Cocktails signatures',
      classic: 'Cocktails classiques',
      whiskey: 'Whisky & Bourbon',
      liqueurs: 'Liqueurs & Vermouths',
      tequila: 'Tequila',
      rum: 'Rhum',
      wine: 'Vin',
      beer: 'Bière',
      soft: 'Softs & Thés & Cafés',
      hookah_standard: 'Standard',
      hookah_water: 'Premium sur eau',
      hookah_wine: 'Premium sur vin',
      hookah_orange: "À l'orange",
      appetizers: 'Entrées',
      salads: 'Salades',
      hot_dishes: 'Plats chauds',
      desserts: 'Desserts'
    },
    footer: {
      prices: 'Prix en roubles (Р)',
      welcome: 'Bienvenue au Safari Lounge',
      hours: 'Ouvert tous les jours'
    }
  },
  en: {
    title: 'SAFARI LOUNGE BAR',
    nav: {
      menu: 'MENU',
      drinks: 'DRINKS',
      hookah: 'HOOKAH',
      food: 'FOOD',
      signature: 'Signature cocktails',
      classic: 'Classic cocktails',
      whiskey: 'Whiskey & Bourbon',
      liqueurs: 'Liqueurs & Vermouths',
      tequila: 'Tequila',
      rum: 'Rum',
      wine: 'Wine',
      beer: 'Beer',
      soft: 'Soft drinks & Tea & Coffee',
      hookah_standard: 'Standard',
      hookah_water: 'Premium on water',
      hookah_wine: 'Premium on wine',
      hookah_orange: 'On orange',
      appetizers: 'Appetizers',
      salads: 'Salads',
      hot_dishes: 'Hot dishes',
      desserts: 'Desserts'
    },
    footer: {
      prices: 'Prices in rubles (Р)',
      welcome: 'Welcome to Safari Lounge',
      hours: 'Open every day'
    }
  },
  ru: {
    title: 'SAFARI LOUNGE BAR',
    nav: {
      menu: 'МЕНЮ',
      drinks: 'НАПИТКИ',
      hookah: 'КАЛЬЯНЫ',
      food: 'БЛЮДА',
      signature: 'Авторские коктейли',
      classic: 'Классические коктейли',
      whiskey: 'Виски & Бурбон',
      liqueurs: 'Ликеры & Вермуты',
      tequila: 'Текила',
      rum: 'Ром',
      wine: 'Вино',
      beer: 'Пиво',
      soft: 'Софт & Чай & Кофе',
      hookah_standard: 'Стандарт',
      hookah_water: 'Премиум на воде',
      hookah_wine: 'Премиум на вине',
      hookah_orange: 'На апельсине',
      appetizers: 'Закуски',
      salads: 'Салаты',
      hot_dishes: 'Горячие блюда',
      desserts: 'Десерты'
    },
    footer: {
      prices: 'Цены указаны в рублях (Р)',
      welcome: 'Добро пожаловать в Safari Lounge',
      hours: 'Работаем каждый день'
    }
  }
}

const menuData = {
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
      { name: "JACK DANIEL'S", origin: 'IRL', price50: '22Р', price1l: '440Р' },
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
      { name: "BARON D'ARIGNAC", priceGlass: '12Р', priceBottle: '65Р' },
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
  'hookah-standard': {
    category: 'hookah',
    title: { fr: 'Chicha - Standard', en: 'Hookah - Standard', ru: 'Кальяны - Стандарт' },
    icon: 'fa-joint',
    items: [{ name: { fr: 'Standard', en: 'Standard', ru: 'Стандарт / STANDART' }, price: '50Р' }]
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
    title: { fr: "Chicha - À l'orange", en: 'Hookah - On orange', ru: 'Кальяны - На апельсине' },
    icon: 'fa-joint',
    items: [{ name: { fr: "Chicha à l'orange", en: 'Hookah on orange', ru: 'Кальян на апельсине / HOOKAH ON ORANGE' }, price: '75Р' }]
  },
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
}

const categoryImages = {
  signature: 'https://source.unsplash.com/800x600/?cocktail',
  classic: 'https://source.unsplash.com/800x600/?classic-cocktail',
  whiskey: 'https://source.unsplash.com/800x600/?whiskey',
  liqueurs: 'https://source.unsplash.com/800x600/?liqueur',
  tequila: 'https://source.unsplash.com/800x600/?tequila',
  rum: 'https://source.unsplash.com/800x600/?rum',
  wine: 'https://source.unsplash.com/800x600/?wine',
  beer: 'https://source.unsplash.com/800x600/?beer',
  soft: 'https://source.unsplash.com/800x600/?coffee',
  'hookah-standard': 'https://source.unsplash.com/800x600/?hookah',
  'hookah-premium-water': 'https://source.unsplash.com/800x600/?hookah%20water',
  'hookah-premium-wine': 'https://source.unsplash.com/800x600/?hookah%20wine',
  'hookah-orange': 'https://source.unsplash.com/800x600/?hookah%20orange',
  appetizers: 'https://source.unsplash.com/800x600/?appetizer',
  salads: 'https://source.unsplash.com/800x600/?salad',
  'hot-dishes': 'https://source.unsplash.com/800x600/?hot%20dish',
  desserts: 'https://source.unsplash.com/800x600/?dessert'
}

const fallbackImage =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f7700"/>
          <stop offset="100%" stop-color="#020202"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#e8eae8" font-family="Montserrat" font-size="28">Image indisponible</text>
    </svg>`
  )

function getText(textObj, lang) {
  if (typeof textObj === 'string') return textObj
  if (textObj && typeof textObj === 'object') return textObj[lang] || textObj.fr || textObj.en || textObj.ru || ''
  return textObj || ''
}

function MenuItem({ item, lang }) {
  if (item.separator) return <hr />
  let priceEl = null
  if (item.price) {
    priceEl = <span className="item-price">{item.price}</span>
  } else if (item.price50 && item.price1l) {
    priceEl = (
      <span className="item-prices">
        <span className="price-50ml"><i className="fas fa-glass"></i> {item.price50}</span>
        <span className="price-1l"><i className="fas fa-flask"></i> {item.price1l}</span>
      </span>
    )
  } else if (item.priceGlass && item.priceBottle) {
    priceEl = (
      <span className="item-prices">
        <span className="price-50ml">{lang === 'fr' ? 'verre' : lang === 'en' ? 'glass' : 'бокал'} {item.priceGlass}</span>
        <span className="price-1l">{lang === 'fr' ? 'bouteille' : lang === 'en' ? 'bottle' : 'бутылка'} {item.priceBottle}</span>
      </span>
    )
  }
  const originEl = item.origin ? <span className="origin">{item.origin}</span> : null
  const volumeEl = item.volume ? <span className="item-volume">{item.volume}</span> : null
  const descEl = item.desc ? <div className="cocktail-desc">{getText(item.desc, lang)}</div> : null
  const itemName = getText(item.name, lang)
  if (item.desc) {
    return (
      <div className="cocktail-item">
        <div className="cocktail-title">
          <span>{itemName}</span>
          <span>{item.volume || ''}</span>
        </div>
        {descEl}
        {priceEl}
      </div>
    )
  }
  return (
    <div className="menu-item">
      <span className="item-name">{itemName} {originEl} {volumeEl}</span>
      {priceEl}
    </div>
  )
}

function CategoryCard({ categoryKey, lang }) {
  const cat = menuData[categoryKey]
  if (!cat) return null
  const noteEl = cat.note ? <div className="note-premium"><i className="fas fa-star"></i> {getText(cat.note, lang)}</div> : null
  const title = getText(cat.title, lang)
  const subtitle = cat.subtitle ? getText(cat.subtitle, lang) : ''
  const image = categoryImages[categoryKey]
  return (
    <div className="card" data-category={cat.category}>
      {image ? (
        <div className="card-image">
          <img
            src={image}
            alt={title}
            loading="lazy"
            onError={(e) => {
              if (e.currentTarget.dataset.fallbackApplied) return
              e.currentTarget.src = fallbackImage
              e.currentTarget.dataset.fallbackApplied = 'true'
            }}
          />
        </div>
      ) : null}
      <div className="card-header">
        <i className={`fas ${cat.icon}`}></i>
        <h2>{title} {subtitle ? <small>{subtitle}</small> : null}</h2>
      </div>
      {cat.items && cat.items.map((item, idx) => <MenuItem key={idx} item={item} lang={lang} />)}
      {noteEl}
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('fr')
  const [navVisible, setNavVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('drinks')
  const [activeCategory, setActiveCategory] = useState('signature')
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const langDropdownRef = useRef(null)

  const t = translations[lang]

  useEffect(() => {
    if (navVisible) document.body.classList.add('menu-open')
    else document.body.classList.remove('menu-open')
    return () => document.body.classList.remove('menu-open')
  }, [navVisible])

  useEffect(() => {
    function handleClick(e) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setLangMenuOpen(false)
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') setLangMenuOpen(false)
    }
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])
  const drinkCategories = useMemo(() => ([
    { key: 'signature', labelKey: 'nav.signature' },
    { key: 'classic', labelKey: 'nav.classic' },
    { key: 'whiskey', labelKey: 'nav.whiskey' },
    { key: 'liqueurs', labelKey: 'nav.liqueurs' },
    { key: 'tequila', labelKey: 'nav.tequila' },
    { key: 'rum', labelKey: 'nav.rum' },
    { key: 'wine', labelKey: 'nav.wine' },
    { key: 'beer', labelKey: 'nav.beer' },
    { key: 'soft', labelKey: 'nav.soft' },
  ]), [])

  const hookahCategories = useMemo(() => ([
    { key: 'hookah-standard', labelKey: 'nav.hookah_standard' },
    { key: 'hookah-premium-water', labelKey: 'nav.hookah_water' },
    { key: 'hookah-premium-wine', labelKey: 'nav.hookah_wine' },
    { key: 'hookah-orange', labelKey: 'nav.hookah_orange' },
  ]), [])

  const foodCategories = useMemo(() => ([
    { key: 'appetizers', labelKey: 'nav.appetizers' },
    { key: 'salads', labelKey: 'nav.salads' },
    { key: 'hot-dishes', labelKey: 'nav.hot_dishes' },
    { key: 'desserts', labelKey: 'nav.desserts' },
  ]), [])

  const renderMenuGrid = () => {
    if (activeCategory === 'all') {
      return drinkCategories.map(c => <CategoryCard key={c.key} categoryKey={c.key} lang={lang} />)
    }
    return <CategoryCard categoryKey={activeCategory} lang={lang} />
  }

  const getLabel = (labelKey) => {
    const path = labelKey.split('.')
    let v = t
    for (const p of path) v = v?.[p]
    return v || labelKey
  }

  return (
    <>
      <div className="menu-container" id="menuContainer">
        <div className="brand-header">
          <div className="header-left">
            <button className="menu-toggle" onClick={() => { setNavVisible(true) }}>
              <i className="fas fa-bars"></i>
            </button>
            <img src="Asset/safari.png" alt="Safari Lounge Bar" className="logo" />
            <h1>{t.title}</h1>
          </div>
          <div className="header-right">
            <div className="language-dropdown" ref={langDropdownRef}>
              <button className="language-btn" onClick={(e) => { e.stopPropagation(); setLangMenuOpen(v => !v) }}>
                <i className="fas fa-globe"></i>
                <span className="current-lang">{lang.toUpperCase()}</span>
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className={`language-menu ${langMenuOpen ? 'show' : ''}`}>
                <button className={`lang-option ${lang === 'fr' ? 'active' : ''}`} onClick={() => { setLang('fr'); setLangMenuOpen(false) }}>
                  <span className="flag">🇫🇷</span> Français
                </button>
                <button className={`lang-option ${lang === 'en' ? 'active' : ''}`} onClick={() => { setLang('en'); setLangMenuOpen(false) }}>
                  <span className="flag">🇬🇧</span> English
                </button>
                <button className={`lang-option ${lang === 'ru' ? 'active' : ''}`} onClick={() => { setLang('ru'); setLangMenuOpen(false) }}>
                  <span className="flag">🇷🇺</span> Русский
                </button>
              </div>
            </div>
          </div>
        </div>

        <nav className={`category-nav ${navVisible ? 'visible' : ''}`}>
          <div className="nav-header">
            <span>{t.nav.menu}</span>
            <button className="nav-close" onClick={() => setNavVisible(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="nav-sections">
            <div className="nav-section">
              <div className={`section-header ${activeSection === 'drinks' ? 'active' : ''}`} onClick={() => setActiveSection(s => s === 'drinks' ? '' : 'drinks')}>
                <i className="fas fa-glass-cheers"></i>
                <span>{t.nav.drinks}</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <ul className="subsection-list" style={{ display: activeSection === 'drinks' ? 'block' : 'none' }}>
                {drinkCategories.map(({ key, labelKey }) => (
                  <li key={key} className={`subnav-item ${activeCategory === key ? 'active' : ''}`} onClick={() => { setActiveCategory(key); setNavVisible(false) }}>
                    {getLabel(labelKey)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-section">
              <div className={`section-header ${activeSection === 'hookah' ? 'active' : ''}`} onClick={() => setActiveSection(s => s === 'hookah' ? '' : 'hookah')}>
                <i className="fas fa-joint"></i>
                <span>{t.nav.hookah}</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <ul className="subsection-list" style={{ display: activeSection === 'hookah' ? 'block' : 'none' }}>
                {hookahCategories.map(({ key, labelKey }) => (
                  <li key={key} className={`subnav-item ${activeCategory === key ? 'active' : ''}`} onClick={() => { setActiveCategory(key); setNavVisible(false) }}>
                    {getLabel(labelKey)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-section">
              <div className={`section-header ${activeSection === 'food' ? 'active' : ''}`} onClick={() => setActiveSection(s => s === 'food' ? '' : 'food')}>
                <i className="fas fa-utensils"></i>
                <span>{t.nav.food}</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <ul className="subsection-list" style={{ display: activeSection === 'food' ? 'block' : 'none' }}>
                {foodCategories.map(({ key, labelKey }) => (
                  <li key={key} className={`subnav-item ${activeCategory === key ? 'active' : ''}`} onClick={() => { setActiveCategory(key); setNavVisible(false) }}>
                    {getLabel(labelKey)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className={`nav-overlay ${navVisible ? 'visible' : ''}`} onClick={() => setNavVisible(false)}></div>

        <div className="menu-grid">
          {renderMenuGrid()}
        </div>

        <div className="footer-note">
          <span><i className="fas fa-tag"></i> {t.footer.prices}</span>
          <span><i className="fas fa-glass-cheers"></i> {t.footer.welcome}</span>
          <span><i className="fas fa-clock"></i> {t.footer.hours}</span>
        </div>
      </div>
    </>
  )
}
