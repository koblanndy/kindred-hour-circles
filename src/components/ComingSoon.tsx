import React from 'react';
import { useTranslations } from "../context/TranslationContext";
import { Sparkles } from 'lucide-react';

const ComingSoon: React.FC = () => {
  const { language } = useTranslations();
  
  return (
    <div className="bg-white section-padding" id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-16 h-16 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          {language === 'kk' ? (
            "✨ Жақын арада! ✨"
          ) : language === 'ru' ? (
            "✨ Скоро! ✨"
          ) : (
            "✨ Coming Soon! ✨"
          )}
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground">
          {language === 'kk' ? (
            "Ұрпақтар арасында байланыс орнататын алғашқылардың бірі болыңыз."
          ) : language === 'ru' ? (
            "Станьте первым, кто соединит поколения."
          ) : (
            "Be the first to connect across generations."
          )}
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;