
import React from 'react';
import { Button } from "@/components/ui/button";
import { useTranslations } from "../context/TranslationContext";

const Hero: React.FC = () => {
  const { t } = useTranslations();
  
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-blue-100 section-padding min-h-[80vh] flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-gray-800">
          ЖҮРЕКТЕН ЖҮРЕККЕ, ҰРПАҚТАН ҰРПАҚҚА
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/15272052-14fa-45ba-a1cf-fc9b027af4d7.png" 
              alt="Nature scene with blue sky and green hills" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/15272052-14fa-45ba-a1cf-fc9b027af4d7.png" 
              alt="Nature scene with blue sky and green hills" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/15272052-14fa-45ba-a1cf-fc9b027af4d7.png" 
              alt="Nature scene with blue sky and green hills" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 max-w-3xl mx-auto mb-12">
          «Жүздесу» жобасы — ұрпақтарды жүрек пен сөз арқылы жақындастырып, қазақ тілінің тамырына жан бітіретін алтын көпір.
        </p>
        
        <div className="flex justify-center space-x-6">
          <Button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 text-lg px-12 py-6 rounded-full shadow-md">
            {t('hero.signInButton')}
          </Button>
          <Button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 text-lg px-12 py-6 rounded-full shadow-md">
            {t('hero.signUpButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
