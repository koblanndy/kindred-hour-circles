
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
    <div className="bg-background section-padding min-h-[80vh] flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground px-4">
          {language === 'kk' ? (
            "Ұрпақтарды байланыстыру, бір сөйлесу арқылы"
          ) : language === 'ru' ? (
            "Соединяя поколения, один разговор за раз"
          ) : (
            "Connecting Generations, One Conversation at a Time"
          )}
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 px-4">
          {language === 'kk' ? (
            "Jüzdesu барлық жастағы адамдарға сөйлесуді, үйренуді және бөлісуді жеңілдетеді."
          ) : language === 'ru' ? (
            "Jüzdesu упрощает общение, обучение и обмен опытом для людей всех возрастов."
          ) : (
            "Jüzdesu makes it easy for people of all ages to talk, learn, and share."
          )}
        </p>
        
        <div className="flex justify-center">
          <Button 
            className="interactive-button bg-primary hover:bg-primary/90 text-primary-foreground border-0 text-lg md:text-xl px-8 py-4 md:px-12 md:py-6 rounded-full shadow-lg font-semibold"
            onClick={scrollToRegistration}
          >
            {language === 'kk' ? (
              "Күту тізіміне қосылу"
            ) : language === 'ru' ? (
              "Присоединиться к списку ожидания"
            ) : (
              "Join the Waitlist"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
