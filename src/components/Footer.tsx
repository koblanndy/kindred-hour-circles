
import React from 'react';
import { Instagram } from 'lucide-react';
import { useTranslations } from "../context/TranslationContext";

const Footer: React.FC = () => {
  const { language } = useTranslations();
  
  return (
    <footer className="bg-foreground text-background py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-background">
              Jüzdesu
            </h3>
            <p className="text-sm md:text-base mb-3 md:mb-4 text-background/80">
              {language === 'kk' ? (
                "Мағыналы сөйлесулер арқылы ұрпақтар арасында көпір салу."
              ) : language === 'ru' ? (
                "Строим мосты между поколениями через содержательные разговоры."
              ) : (
                "Building bridges across generations through meaningful conversations."
              )}
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-all-smooth">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-md md:text-lg font-semibold mb-3 md:mb-4 text-background">
              {language === 'kk' ? "Байланыс" : language === 'ru' ? "Контакты" : "Contact"}
            </h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-background/80">
              <li>Email: juzdesu@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-md md:text-lg font-semibold mb-3 md:mb-4 text-background">
              {language === 'kk' ? "Сілтемелер" : language === 'ru' ? "Ссылки" : "Links"}
            </h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'kk' ? "Жеке өмір саясаты" : language === 'ru' ? "Политика конфиденциальности" : "Privacy Policy"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'kk' ? "Пайдалану шарттары" : language === 'ru' ? "Условия использования" : "Terms of Use"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-background/20 text-center text-sm md:text-base text-background/80">
          <p>&copy; 2025 Jüzdesu. 
            {language === 'kk' ? " Барлық құқықтар қорғалған." : language === 'ru' ? " Все права защищены." : " All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
