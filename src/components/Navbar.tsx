
import React, { useState } from 'react';
import { useTranslations } from "../context/TranslationContext";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const translations = {
    nav: {
      howItWorks: {
        kk: 'Қалай жұмыс істейді',
        ru: 'Как это работает',
        en: 'How It Works',
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
        kk: 'Сұрақ-Жауап',
        ru: 'Вопрос-Ответ',
        en: 'FAQ',
      }
    }
  };

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-4 md:py-6 md:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent juzdesu-gradient px-2 py-1 rounded-md">
            Jüzdesu
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 flex-1 justify-center">
          <a 
            href="#how-it-works" 
            className="text-lg text-gray-700 hover:text-blue-600 transition-all-smooth"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('how-it-works');
            }}
          >
            {translations.nav.howItWorks[language]}
          </a>
          <a 
            href="#testimonials" 
            className="text-lg text-gray-700 hover:text-blue-600 transition-all-smooth"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('testimonials');
            }}
          >
            {translations.nav.testimonials[language]}
          </a>
          <a 
            href="#join" 
            className="text-lg text-gray-700 hover:text-blue-600 transition-all-smooth"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('join');
            }}
          >
            {translations.nav.joinNow[language]}
          </a>
          <a 
            href="#faq" 
            className="text-lg text-gray-700 hover:text-blue-600 transition-all-smooth"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('faq');
            }}
          >
            {translations.nav.faq[language]}
          </a>
        </div>
        
        {/* Language Switcher - Always visible */}
        <div className="flex items-center">
          <div className="flex space-x-1 md:space-x-3">
            <button 
              onClick={() => setLanguage('kk')} 
              className={`text-sm md:text-base px-2 md:px-3 py-1 md:py-2 rounded font-medium ${language === 'kk' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            >
              KZ
            </button>
            <button 
              onClick={() => setLanguage('ru')} 
              className={`text-sm md:text-base px-2 md:px-3 py-1 md:py-2 rounded font-medium ${language === 'ru' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            >
              RU
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`text-sm md:text-base px-2 md:px-3 py-1 md:py-2 rounded font-medium ${language === 'en' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            >
              EN
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="ml-4 md:hidden text-gray-700"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Conditional Rendering */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white shadow-lg z-40 py-4 px-6 flex flex-col space-y-4 border-t border-gray-100">
          <a 
            href="#how-it-works" 
            className="text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('how-it-works');
            }}
          >
            {translations.nav.howItWorks[language]}
          </a>
          <a 
            href="#testimonials" 
            className="text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('testimonials');
            }}
          >
            {translations.nav.testimonials[language]}
          </a>
          <a 
            href="#join" 
            className="text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('join');
            }}
          >
            {translations.nav.joinNow[language]}
          </a>
          <a 
            href="#faq" 
            className="text-lg text-gray-700 hover:text-blue-600 py-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('faq');
            }}
          >
            {translations.nav.faq[language]}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
