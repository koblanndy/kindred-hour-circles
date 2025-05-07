
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<'kk' | 'ru' | 'en'>('kk'); // Default to Kazakh
  
  const translations = {
    nav: {
      howItWorks: {
        kk: 'Қалай жұмыс істейді?',
        ru: 'Как это работает?',
        en: 'How It Works?',
      },
      testimonials: {
        kk: 'Пікірлер',
        ru: 'Отзывы',
        en: 'Testimonials',
      },
      joinNow: {
        kk: 'Қосылу',
        ru: 'Присоединяйся',
        en: 'Join Now',
      },
      faq: {
        kk: 'Сұрақ - Жауап',
        ru: 'Вопрос - Ответ',
        en: 'FAQ',
      },
      getStarted: {
        kk: 'Бірге бастайық!',
        ru: 'Давай начнём вместе!',
        en: 'Let's Get Started!',
      },
    }
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent juzdesu-gradient">
            Jüzdesu
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 flex-1 justify-center">
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-all-smooth">
            {translations.nav.howItWorks[language]}
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-all-smooth">
            {translations.nav.testimonials[language]}
          </a>
          <a href="#join" className="text-gray-600 hover:text-blue-600 transition-all-smooth">
            {translations.nav.joinNow[language]}
          </a>
          <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-all-smooth">
            {translations.nav.faq[language]}
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button 
              onClick={() => setLanguage('kk')} 
              className={`text-sm px-2 py-1 rounded ${language === 'kk' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'}`}
            >
              KZ
            </button>
            <button 
              onClick={() => setLanguage('ru')} 
              className={`text-sm px-2 py-1 rounded ${language === 'ru' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'}`}
            >
              RU
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`text-sm px-2 py-1 rounded ${language === 'en' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'}`}
            >
              EN
            </button>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all-smooth">
            {translations.nav.getStarted[language]}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
