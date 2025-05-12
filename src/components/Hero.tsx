
import React from 'react';
import { Button } from "@/components/ui/button";
import { useTranslations } from "../context/TranslationContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const { t, language } = useTranslations();
  const isMobile = useIsMobile();
  
  const scrollToRegistration = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="bg-gradient-to-b from-yellow-100 via-yellow-50 to-blue-100 section-padding min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto text-center">
        <h1 className="text-base md:text-xl lg:text-3xl font-bold leading-tight mb-4 md:mb-8 text-gray-800 px-4">
          {language === 'kk' ? (
            <span className="block">ЖҮРЕКТЕН ЖҮРЕККЕ,</span>
            <span className="block">ҰРПАҚТАН ҰРПАҚҚА</span>
          ) : language === 'ru' ? (
            <>
              <span className="block">ОТ СЕРДЦА К СЕРДЦУ,</span>
              <span className="block">ОТ ПОКОЛЕНИЯ К ПОКОЛЕНИЮ</span>
            </>
          ) : (
            <>
              <span className="block">HEART TO HEART,</span>
              <span className="block">GENERATION TO GENERATION</span>
            </>
          )}
        </h1>
        
        {/* Image grid with responsive layout */}
        <div className="flex flex-col mb-8 md:mb-16 w-full px-4">
          {isMobile ? (
            // Stacked images for mobile
            <div className="flex flex-col space-y-4 items-center">
              <div className="bg-gray-200 rounded-lg h-40 w-full max-w-sm flex items-center justify-center shadow-lg">
                <span className="text-gray-500">Placeholder Image</span>
              </div>
              <div className="bg-gray-200 rounded-lg h-40 w-full max-w-sm flex items-center justify-center shadow-lg">
                <span className="text-gray-500">Placeholder Image</span>
              </div>
              <div className="bg-gray-200 rounded-lg h-40 w-full max-w-sm flex items-center justify-center shadow-lg">
                <span className="text-gray-500">Placeholder Image</span>
              </div>
            </div>
          ) : (
            // Multiple images for larger screens
            <div className="w-full flex flex-row space-x-4 justify-center">
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
          )}
        </div>
        
        <p className="text-sm md:text-lg lg:text-2xl text-gray-800 max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex justify-center">
          <Button 
            className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 text-base md:text-lg px-6 py-3 md:px-12 md:py-6 rounded-full shadow-md w-auto md:w-48"
            onClick={scrollToRegistration}
          >
            {t('hero.registerButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
