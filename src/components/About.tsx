import React from 'react';
import { useTranslations } from "../context/TranslationContext";

const About: React.FC = () => {
  const { language } = useTranslations();
  
  return (
    <div className="bg-white section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
          {language === 'kk' ? (
            "Jüzdesu туралы"
          ) : language === 'ru' ? (
            "О Jüzdesu"
          ) : (
            "About Jüzdesu"
          )}
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {language === 'kk' ? (
            "Jüzdesu - бұл жастар мен ұлттар арасында мағыналы онлайн сөйлесулер арқылы байланыс орнататын платформа. Біздің мақсатымыз - ұрпақтар арасындағы алшақтықты жою және өзара түсіністікті арттыру арқылы әлемді жақындату."
          ) : language === 'ru' ? (
            "Jüzdesu — это платформа, которая соединяет молодежь и пожилых людей через содержательные онлайн-разговоры. Наша цель — преодолеть разрыв поколений и сделать мир ближе через взаимопонимание и обмен опытом."
          ) : (
            "Jüzdesu is a platform that connects youth and elderly people through meaningful online conversations. Our goal is to bridge the generational gap and bring the world closer together through understanding and shared experiences."
          )}
        </p>
      </div>
    </div>
  );
};

export default About;