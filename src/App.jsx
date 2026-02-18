import React, { useState, useEffect } from 'react';
import { menuData, languages, currencies } from './data';
import SafariLogo from './components/SafariLogo';

function App() {
  const [activeTab, setActiveTab] = useState('drinks');
  const [activeCategory, setActiveCategory] = useState('all');
  const [language, setLanguage] = useState('fr');
  const [currency, setCurrency] = useState('BYN');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const convertPrice = (price) => {
    if (!price || price === 'variable' || price === 'à préciser') return price;
    
    // Handle prices with multiple values (e.g., "22 BYN / 440 BYN")
    if (price.includes('/')) {
      const prices = price.split('/').map(p => convertSinglePrice(p.trim()));
      return prices.join(' / ');
    }
    
    return convertSinglePrice(price);
  };

  const convertSinglePrice = (price) => {
    // Extract numeric value from price string
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    if (isNaN(numericPrice)) return price;
    
    // Convert based on current currency
    const converted = (numericPrice * currencies[currency].rate).toFixed(2);
    
    // Format the price appropriately
    if (currency === 'BYN') {
      return `${parseFloat(converted).toFixed(0)} BYN`;
    } else {
      return `${currencies[currency].symbol}${parseFloat(converted).toFixed(2)}`;
    }
  };

  const renderMenuItem = (item, index) => (
    <div key={index} className="menu-item p-4 border-b border-gray-800 hover:bg-gray-900 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className="font-bold text-white mb-1 font-bebas text-lg">
            {typeof item.name === 'string' ? item.name : item.name[language]}
          </h4>
          {item.description && (
            <p className="text-gray-400 text-sm mb-1 font-rajdhani">
              {typeof item.description === 'string' ? item.description : item.description[language]}
            </p>
          )}
          {item.volume && (
            <p className="text-gray-500 text-xs font-rajdhani">{item.volume}</p>
          )}
        </div>
        <div className="ml-4">
          <span className="price-tag font-montserrat">
            {convertPrice(item.price)}
          </span>
        </div>
      </div>
    </div>
  );

  const renderDrinksTab = () => {
    const categories = menuData.drinks.categories[language];
    const items = menuData.drinks.items;

    const displayItems = activeCategory === 'all' 
      ? Object.values(items).flat()
      : items[activeCategory] || [];

    return (
      <div className="flex flex-col md:flex-row gap-6 flex-grow">
        {!isMobile && (
          <div className="md:w-1/4">
            <div className="sticky top-4">
              <h3 className="text-neon-cyan font-bebas text-xl mb-4 neon-text">
                {language === 'fr' ? 'CATÉGORIES' : language === 'en' ? 'CATEGORIES' : 'КАТЕГОРИИ'}
              </h3>
              <div className="space-y-2">
                {Object.entries(categories).map(([name, key]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full text-left p-3 rounded transition-all duration-300 font-rajdhani ${
                      activeCategory === key
                        ? 'bg-gradient-to-r from-neon-pink to-neon-cyan text-white shadow-neon-pink'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex-1 flex flex-col">
          {isMobile && (
            <div className="mb-4">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white border border-neon-pink rounded font-rajdhani"
              >
                {Object.entries(categories).map(([name, key]) => (
                  <option key={key} value={key}>{name}</option>
                ))}
              </select>
            </div>
          )}
          
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl flex-grow flex flex-col">
            <div className="scroll-container flex-grow overflow-y-auto">
              {displayItems.map((item, index) => renderMenuItem(item, index))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderHookahTab = () => (
    <div className="max-w-2xl mx-auto flex-grow flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg p-8 shadow-2xl w-full">
        <h3 className="text-neon-cyan font-bebas text-2xl mb-6 neon-text text-center">
          {language === 'fr' ? 'HOOKAH - KALYAN' : language === 'en' ? 'HOOKAH - KALYAN' : 'КАЛЬЯН - КАЛЯН'}
        </h3>
        <div className="space-y-4">
          {menuData.hookah.types.map((type, index) => (
            <div key={index} className="menu-item p-4 border border-gray-700 rounded-lg hover:border-neon-pink transition-all duration-300">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-white font-bebas text-lg">
                  {typeof type.name === 'string' ? type.name : type.name[language]}
                </h4>
                <span className="price-tag font-montserrat">{convertPrice(type.price)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-400 text-center font-rajdhani">
            {language === 'fr' ? 'Saveurs disponibles et personnalisation sur demande' : 
             language === 'en' ? 'Flavors available and customization on request' : 
             'Доступные вкусы и кастомизация по запросу'}
          </p>
        </div>
      </div>
    </div>
  );

  const renderFoodTab = () => (
    <div className="max-w-4xl mx-auto flex-grow flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg p-8 shadow-2xl w-full">
        <h3 className="text-neon-cyan font-bebas text-2xl mb-6 neon-text text-center">
          {language === 'fr' ? 'PLATS' : language === 'en' ? 'FOOD' : 'БЛЮДА'}
        </h3>
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg font-rajdhani mb-4">
            {language === 'fr' ? 'Menu en préparation' : 
             language === 'en' ? 'Menu in preparation' : 
             'Меню в подготовке'}
          </p>
          <p className="text-gray-500 font-rajdhani">
            {language === 'fr' ? 'Nos plats arrivent bientôt...' : 
             language === 'en' ? 'Our dishes are coming soon...' : 
             'Наши блюда скоро появятся...'}
          </p>
        </div>
      </div>
    </div>
  );

  const currentLang = languages[language];

  return (
    <div className="noise-bg min-h-screen flex flex-col">
      <div className="content-wrapper flex-grow flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-anthracite via-gray-900 to-anthracite border-b border-neon-pink shadow-neon-pink">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center gap-4">
              {/* Logo on the left - always */}
              <div className="flex-shrink-0">
                <SafariLogo />
              </div>
              
              {/* Title and subtitle on the right - always */}
              <div className="text-left">
                <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan neon-text mb-1 sm:mb-2">
                  {currentLang.title}
                </h1>
                <p className="font-rajdhani text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 tracking-wider">
                  {currentLang.subtitle}
                </p>
              </div>
            </div>
            
            {/* Language & Currency Controls */}
            <div className="flex justify-center gap-4 mt-6">
              <div className="flex gap-2">
                {Object.keys(languages).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 rounded font-rajdhani text-sm transition-all duration-300 ${
                      language === lang
                        ? 'bg-neon-pink text-anthracite font-bold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                {Object.keys(currencies).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1 rounded font-rajdhani text-sm transition-all duration-300 ${
                      currency === curr
                        ? 'bg-neon-cyan text-anthracite font-bold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {currencies[curr].symbol}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 flex-grow flex flex-col">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 rounded-full p-1 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-1">
                {Object.entries(currentLang.tabs).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-6 py-3 rounded-full font-bebas text-lg transition-all duration-300 ${
                      activeTab === key
                        ? 'tab-active text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-grow flex flex-col animate-pulse-neon">
            {activeTab === 'drinks' && renderDrinksTab()}
            {activeTab === 'hookah' && renderHookahTab()}
            {activeTab === 'food' && renderFoodTab()}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-anthracite via-gray-900 to-anthracite border-t border-neon-cyan mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              {/* Logo in footer - much smaller */}
              <div className="mb-4 flex justify-center">
                <div className="transform scale-50">
                  <SafariLogo />
                </div>
              </div>
              
              <div className="space-y-2 font-rajdhani">
                <p className="text-gold font-semibold">{currentLang.footer.hours}</p>
                <p className="text-gray-300">{currentLang.footer.address}</p>
                <p className="text-neon-cyan font-semibold">{currentLang.footer.contact}</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
