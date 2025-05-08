
import React from 'react';
import { Button } from "@/components/ui/button";
import { useTranslations } from "../context/TranslationContext";

const Hero: React.FC = () => {
  const { t, language } = useTranslations();
  
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-blue-100 section-padding min-h-[80vh] flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-gray-800 whitespace-nowrap overflow-x-auto">
          {language === 'kk' ? 'ЖҮРЕКТЕН ЖҮРЕККЕ, ҰРПАҚТАН ҰРПАҚҚА' : 
           language === 'ru' ? 'ОТ СЕРДЦА К СЕРДЦУ, ОТ ПОКОЛЕНИЯ К ПОКОЛЕНИЮ' : 
           'FROM HEART TO HEART, FROM GENERATION TO GENERATION'}
        </h1>
        
        <div className="flex justify-center space-x-6 mb-16">
          <div className="w-full max-w-4xl flex flex-row space-x-4 justify-center">
            <div className="bg-gray-200 rounded-lg h-48 w-1/3 flex items-center justify-center shadow-lg">
              <span className="text-gray-500">Placeholder Image</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-48 w-1/3 flex items-center justify-center shadow-lg">
              <span className="text-gray-500">Placeholder Image</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-48 w-1/3 flex items-center justify-center shadow-lg">
              <span className="text-gray-500">Placeholder Image</span>
            </div>
          </div>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 max-w-3xl mx-auto mb-12">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex justify-center">
          <Button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 text-lg px-12 py-6 rounded-full shadow-md w-48">
            {t('hero.registerButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
