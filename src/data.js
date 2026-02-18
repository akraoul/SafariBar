export const menuData = {
  drinks: {
    categories: {
      fr: {
        "TOUS": "all",
        "COCKTAILS SIGNATURE": "signature",
        "COCKTAILS CLASSIQUES": "classics",
        "WHISKIES & BOURBONS": "whisky",
        "LIQUEURS": "liqueurs",
        "VERMOUTHS": "vermouths",
        "TEQUILA": "tequila",
        "RHUM": "rhum",
        "VINS": "wine",
        "VINS EFFERVESCENTS": "sparkling",
        "BIÈRES": "beer",
        "SOFT": "soft",
        "BOISSONS CHAUDES": "hot",
        "THÉS": "tea"
      },
      en: {
        "ALL": "all",
        "SIGNATURE COCKTAILS": "signature",
        "CLASSIC COCKTAILS": "classics",
        "WHISKIES & BOURBONS": "whisky",
        "LIQUEURS": "liqueurs",
        "VERMOUTHS": "vermouths",
        "TEQUILA": "tequila",
        "RUM": "rhum",
        "WINES": "wine",
        "SPARKLING WINES": "sparkling",
        "BEERS": "beer",
        "SOFT DRINKS": "soft",
        "HOT DRINKS": "hot",
        "TEAS": "tea"
      },
      ru: {
        "ВСЕ": "all",
        "СИГНАТУРНЫЕ КОКТЕЙЛИ": "signature",
        "КЛАССИЧЕСКИЕ КОКТЕЙЛИ": "classics",
        "ВИСКИ И БУРБОН": "whisky",
        "ЛИКЕРЫ": "liqueurs",
        "ВЕРМУТЫ": "vermouths",
        "ТЕКИЛА": "tequila",
        "РОМ": "rhum",
        "ВИНА": "wine",
        "ИГРИСТЫЕ ВИНА": "sparkling",
        "ПИВО": "beer",
        "БЕЗАЛКОГОЛЬНЫЕ": "soft",
        "ГОРЯЧИЕ НАПИТКИ": "hot",
        "ЧАИ": "tea"
      }
    },
    items: {
      signature: [
        { name: { fr: "LOVE - Любовь", en: "LOVE - Любовь", ru: "LOVE - Любовь" }, description: { fr: "tequila, cynar, cerise, violette", en: "tequila, cynar, cherry, violet", ru: "текила, чинар, вишня, фиалка" }, volume: "85ml", price: "85  BYN" },
        { name: { fr: "WAKE UP - 6 утра", en: "WAKE UP - 6 AM", ru: "WAKE UP - 6 утра" }, description: { fr: "cognac, liqueur de café, miel, jus de pamplemousse", en: "cognac, coffee liqueur, honey, grapefruit juice", ru: "коньяк, кофейный ликер, мед, грейпфрутовый сок" }, volume: "105ml", price: "85  BYN" },
        { name: { fr: "THE IMPOSSIBLE IS POSSIBLE", en: "THE IMPOSSIBLE IS POSSIBLE", ru: "НЕВОЗМОЖНОЕ ВОЗМОЖНО" }, description: { fr: "rhum, eau de citron, jus d'ananas", en: "rum, lemon water, pineapple juice", ru: "ром, лимонная вода, ананасовый сок" }, volume: "115ml", price: "85  BYN" },
        { name: { fr: "MADNESS - Безумие", en: "MADNESS - Безумие", ru: "MADNESS - Безумие" }, description: { fr: "gin, eau de citron, jus de pamplemousse, sureau", en: "gin, lemon water, grapefruit juice, elderberry", ru: "джин, лимонная вода, грейпфрутовый сок, бузина" }, volume: "105ml", price: "85  BYN" }
      ],
      classics: [
        { name: { fr: "Aperol Spritz", en: "Aperol Spritz", ru: "Апероль Шприц" }, volume: "200ml", price: "25  BYN" },
        { name: { fr: "White Russian", en: "White Russian", ru: "Белый Русский" }, volume: "120ml", price: "25  BYN" },
        { name: { fr: "Pina Colada", en: "Pina Colada", ru: "Пина Колада" }, volume: "180ml", price: "25  BYN" },
        { name: { fr: "Negroni", en: "Negroni", ru: "Негрони" }, volume: "90ml", price: "25  BYN" },
        { name: { fr: "Long Island Iced Tea", en: "Long Island Iced Tea", ru: "Лонг Айленд Айс Ти" }, volume: "200ml", price: "28  BYN" },
        { name: { fr: "Margarita", en: "Margarita", ru: "Маргарита" }, volume: "115ml", price: "25  BYN" },
        { name: { fr: "Tequila Sunrise", en: "Tequila Sunrise", ru: "Текила Санрайз" }, volume: "200ml", price: "25  BYN" },
        { name: { fr: "French 75", en: "French 75", ru: "Френч 75" }, volume: "120ml", price: "25  BYN" },
        { name: { fr: "Sex on the Beach", en: "Sex on the Beach", ru: "Секс на пляже" }, volume: "185ml", price: "25  BYN" },
        { name: { fr: "Whiskey Sour", en: "Whiskey Sour", ru: "Виски Сауэр" }, volume: "120ml", price: "25  BYN" }
      ],
      whisky: [
        { name: { fr: "JACK DANIEL'S", en: "JACK DANIEL'S", ru: "ДЖЕК ДЭНИЕЛС" }, price: "22  BYN / 440  BYN", volume: "50ml / 1L" },
        { name: { fr: "TULLAMORE DEW", en: "TULLAMORE DEW", ru: "ТАЛЛАМОР ДЬЮ" }, price: "16  BYN / 320  BYN", volume: "50ml / 1L" },
        { name: { fr: "JAMESON", en: "JAMESON", ru: "ДЖЕЙМСОН" }, price: "16  BYN / 320  BYN", volume: "50ml / 1L" },
        { name: { fr: "RED LABEL", en: "RED LABEL", ru: "РЕД ЛЕЙБЛ" }, price: "15  BYN / 300  BYN", volume: "50ml / 1L" },
        { name: { fr: "CHIVAS REGAL 12 Y.O.", en: "CHIVAS REGAL 12 Y.O.", ru: "ЧИВАС РЕГАЛ 12 ЛЕТ" }, price: "25  BYN / 500  BYN", volume: "50ml / 1L" },
        { name: { fr: "BALLANTINES", en: "BALLANTINES", ru: "БАЛЛАНТАЙНС" }, price: "14  BYN / 280  BYN", volume: "50ml / 1L" },
        { name: { fr: "GRANTS", en: "GRANTS", ru: "ГРАНТС" }, price: "14  BYN / 280  BYN", volume: "50ml / 1L" },
        { name: { fr: "WILLIAM LAWSONS", en: "WILLIAM LAWSONS", ru: "УИЛЬЯМ ЛОСОН" }, price: "14  BYN / 280  BYN", volume: "50ml / 1L" },
        { name: { fr: "MONKEY SHOULDER", en: "MONKEY SHOULDER", ru: "МАНКИ ШОУЛДЕР" }, price: "30  BYN / 600  BYN", volume: "50ml / 1L" },
        { name: { fr: "BUSHMILLS", en: "BUSHMILLS", ru: "БУШМИЛЛС" }, price: "15  BYN / 300  BYN", volume: "50ml / 1L" },
        { name: { fr: "MACALLAN 12", en: "MACALLAN 12", ru: "МАККАЛЛАН 12" }, price: "40  BYN / 800  BYN", volume: "50ml / 0.7L" },
        { name: { fr: "JIM BEAM", en: "JIM BEAM", ru: "ДЖИМ БИМ" }, price: "14  BYN / 280  BYN", volume: "50ml / 1L" }
      ],
      liqueurs: [
        { name: { fr: "BECHEROVKA", en: "BECHEROVKA", ru: "БЕХЕРОВКА" }, price: "15  BYN" },
        { name: { fr: "CYNAR", en: "CYNAR", ru: "ЧИНАР" }, price: "15  BYN" },
        { name: { fr: "JAGERMEISTER", en: "JAGERMEISTER", ru: "ЕГЕРМАЙСТЕР" }, price: "15  BYN" },
        { name: { fr: "CAMPARI", en: "CAMPARI", ru: "КАМПАРИ" }, price: "15  BYN" },
        { name: { fr: "SAMBUCA", en: "SAMBUCA", ru: "САМБУКА" }, price: "15  BYN" }
      ],
      vermouths: [
        { name: { fr: "MARTINI ROSSO", en: "MARTINI ROSSO", ru: "МАРТИНИ РОССО" }, price: "12 BYN" },
        { name: { fr: "MARTINI BIANCO", en: "MARTINI BIANCO", ru: "МАРТИНИ БЬЯНКО" }, price: "12 BYN" },
        { name: { fr: "MARTINI EXTRA DRY", en: "MARTINI EXTRA DRY", ru: "МАРТИНИ ЭКСТРА ДРАЙ" }, price: "12 BYN" },
        { name: { fr: "MARTINI ROSSO FIERO", en: "MARTINI ROSSO FIERO", ru: "МАРТИНИ РОССО ФЬЕРО" }, price: "12 BYN" }
      ],
      tequila: [
        { name: { fr: "OLMECA SILVER", en: "OLMECA SILVER", ru: "ОЛЬМЕКА СИЛЬВЕР" }, price: "16 BYN / 265 BYN", volume: "50ml / 1L" },
        { name: { fr: "SIERRA BLANCO", en: "SIERRA BLANCO", ru: "СЬЕРРА БЛАНКО" }, price: "16 BYN / 265 BYN", volume: "50ml / 1L" },
        { name: { fr: "DON JULIO REPOSADO", en: "DON JULIO REPOSADO", ru: "ДОН ХУЛИО РЕПОСАДО" }, price: "790 BYN" },
        { name: { fr: "DON JULIO BLANCO", en: "DON JULIO BLANCO", ru: "ДОН ХУЛИО БЛАНКО" }, price: "760 BYN" },
        { name: { fr: "DON JULIO 1942", en: "DON JULIO 1942", ru: "ДОН ХУЛИО 1942" }, price: "2700 BYN" },
        { name: { fr: "AZUL PLATA", en: "AZUL PLATA", ru: "АСУЛЬ ПЛАТА" }, price: "2900 BYN" },
        { name: { fr: "AZUL REPOSADO", en: "AZUL REPOSADO", ru: "АСУЛЬ РЕПОСАДО" }, price: "3900 BYN" }
      ],
      rhum: [
        { name: "HAVANA CLUB", price: "12 BYN / 240 BYN", volume: "50ml / 1L" },
        { name: "ANEJO 3 ANOS", price: "14 BYN / 280 BYN", volume: "50ml / 1L" },
        { name: "BACARDI CARTA NEGRA", price: "14 BYN / 280 BYN", volume: "50ml / 1L" },
        { name: "BACARDI CARTA BLANCA", price: "14 BYN / 280 BYN", volume: "50ml / 1L" },
        { name: "BACARDI OAKHEART", price: "14 BYN / 280 BYN", volume: "50ml / 1L" }
      ],
      wine: [
        { name: "HANS BAER RIESLING", description: "sec, 0.33L", price: "18 BYN / 90 BYN", volume: "0.33L / 1L" },
        { name: "TINI BIANCO", description: "demi-sec, Italie", price: "16 BYN / 80 BYN", volume: "0.33L / 1L" },
        { name: "MUCHO MAS", description: "Blanc", price: "18 BYN / 90 BYN", volume: "0.33L / 1L" },
        { name: "HANS BAER PINOT NOIR", description: "sec, 0.33L", price: "18 BYN / 90 BYN", volume: "0.33L / 1L" },
        { name: "TINI ROSSO", description: "demi-sec, Italie", price: "16 BYN / 80 BYN", volume: "0.33L / 1L" },
        { name: "HANS BAER PINOT NOIR ROSE", description: "sec, 0.33L", price: "70 BYN", volume: "0.33L" }
      ],
      sparkling: [
        { name: "BOLLA PROSECCO", description: "Italie", price: "20 BYN / 120 BYN", volume: "0.33L / 1L" },
        { name: "NOZEKO 6/A", description: "France", price: "12 BYN / 60 BYN", volume: "0.33L / 1L" },
        { name: "BARON D'ARIGNAC", price: "12 BYN / 65 BYN", volume: "0.33L / 1L" },
        { name: "SANTO STEFANO GOLD", price: "19 BYN / 110 BYN", volume: "0.33L / 1L" }
      ],
      beer: [
        { name: "MILLER GENUINE DRAFT", volume: "0.44L", price: "10 BYN" },
        { name: "MILLER LIME", volume: "0.44L", price: "15 BYN" },
        { name: "KRUSOVICE CERNE", volume: "0.45L", price: "10 BYN" },
        { name: "GARAGE", description: "pêche/cerise/citron", price: "10 BYN" },
        { name: "CORONA EXTRA", price: "10 BYN" },
        { name: "KRONENBOURG 1664 BLANC", volume: "0.46L", price: "10 BYN" },
        { name: "НЕПРАВИЛЬНЫЙ МЁД", volume: "0.45L", price: "10 BYN" },
        { name: "ШОКОЛАДНЫЙ СТАУТ", volume: "0.45L", price: "10 BYN" },
        { name: "GRIMBERGEN BLANCHE", volume: "0.33L", price: "10 BYN" },
        { name: "GRIMBERGEN AMBREE", volume: "0.33L", price: "10 BYN" }
      ],
      soft: [
        { name: "COCA-COLA / FANTA / SPRITE", price: "5 BYN" },
        { name: "SCHWEPPES INDIAN TONIC", price: "5 BYN" },
        { name: "Jus (assortiment)", volume: "0.25L / 1L", price: "variable" },
        { name: "BONAQUA", volume: "0.5L", price: "variable" },
        { name: "GORILLA", volume: "0.33L", price: "variable" },
        { name: "BURN / MALTINA", price: "14 BYN" }
      ],
      hot: [
        { name: "Espresso", volume: "30ml", price: "variable" },
        { name: "Espresso Double", volume: "60ml", price: "variable" },
        { name: "Americano", volume: "110ml", price: "variable" },
        { name: "Americano Double", volume: "140ml", price: "variable" },
        { name: "Cappuccino", volume: "200ml", price: "variable" },
        { name: "Cappuccino Double", volume: "300ml", price: "variable" },
        { name: "Flat White", volume: "200ml", price: "variable" },
        { name: "Latte", volume: "300ml", price: "variable" },
        { name: "Raf", volume: "200ml", price: "variable" },
        { name: "Raf Double", volume: "300ml", price: "variable" },
        { name: "Bumble", volume: "170ml", price: "variable" },
        { name: "Espresso Tonic", volume: "170ml", price: "variable" },
        { name: "Cacao", volume: "300ml", price: "variable" }
      ],
      tea: [
        { name: "Framboise menthe", price: "15 BYN" },
        { name: "Mangue fruit de la passion", price: "15 BYN" },
        { name: "Cerise amande", price: "15 BYN" },
        { name: "Épices fruits rouges", price: "15 BYN" },
        { name: "Infusion forestière", price: "15 BYN" },
        { name: "Thé noir", price: "12 BYN" },
        { name: "Thé vert", price: "12 BYN" }
      ]
    }
  },
  hookah: {
    types: [
      { name: { fr: "STANDARD", en: "STANDARD", ru: "СТАНДАРТ" }, price: "50 BYN" },
      { name: { fr: "PREMIUM SUR EAU", en: "PREMIUM ON WATER", ru: "ПРЕМИУМ НА ВОДЕ" }, price: "à préciser" },
      { name: { fr: "PREMIUM SUR VIN", en: "PREMIUM ON WINE", ru: "ПРЕМИУМ НА ВИНЕ" }, price: "à préciser" },
      { name: { fr: "HOOKAH SUR ORANGE", en: "HOOKAH ON ORANGE", ru: "КАЛЬЯН НА АПЕЛЬСИНЕ" }, price: "75 BYN" }
    ]
  },
  food: {
    categories: {
      "ENTRÉES": "starters",
      "PLATS PRINCIPAUX": "mains",
      "DESSERTS": "desserts",
      "SNACKS": "snacks"
    },
    items: {
      starters: [],
      mains: [],
      desserts: [],
      snacks: []
    }
  }
};

export const languages = {
  fr: {
    title: "SAFARI LOUNGE BAR",
    subtitle: "Menus & Cartes",
    tabs: {
      drinks: "BOISSONS 🍸",
      hookah: "CHICHA 💨",
      food: "PLATS 🍽"
    },
    footer: {
      hours: "Ouvert tous les jours",
      address: "MINSK, ZYBITSKAYA, 23",
      contact: "+375 29 000 00 00"
    }
  },
  en: {
    title: "SAFARI LOUNGE BAR",
    subtitle: "Menus & Cards",
    tabs: {
      drinks: "DRINKS 🍸",
      hookah: "HOOKAH 💨",
      food: "FOOD 🍽"
    },
    footer: {
      hours: "Open every day",
      address: "MINSK, ZYBITSKAYA, 23",
      contact: "+375 29 000 00 00"
    }
  },
  ru: {
    title: "SAFARI LOUNGE BAR",
    subtitle: "Меню & Карты",
    tabs: {
      drinks: "НАПИТКИ 🍸",
      hookah: "КАЛЬЯН 💨",
      food: "БЛЮДА 🍽"
    },
    footer: {
      hours: "Открыты каждый день",
      address: "МИНСК, ЗЫБИЦКАЯ, 23",
      contact: "+375 29 000 00 00"
    }
  }
};

export const currencies = {
  BYN: { symbol: "BYN", rate: 1 },
  EUR: { symbol: "€", rate: 0.45 },
  USD: { symbol: "$", rate: 0.50 }
};
