
import React from 'react';
import { UserPlus, Users, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "../context/TranslationContext";

const HowItWorks: React.FC = () => {
  const { language } = useTranslations();

  const steps = [
    {
      icon: UserPlus,
      titleKey: {
        kk: "Тіркелу",
        ru: "Регистрация",
        en: "Sign Up"
      },
      descriptionKey: {
        kk: "Қарапайым тіркелу формасын толтырыңыз",
        ru: "Заполните простую форму регистрации",
        en: "Fill out a simple registration form"
      }
    },
    {
      icon: Users,
      titleKey: {
        kk: "Серіктеспен танысу",
        ru: "Знакомство с собеседником",
        en: "Match with Someone"
      },
      descriptionKey: {
        kk: "Біз сізді қызықты адаммен байланыстырамыз",
        ru: "Мы свяжем вас с интересным собеседником",
        en: "We'll connect you with an interesting person"
      }
    },
    {
      icon: MessageCircle,
      titleKey: {
        kk: "Сөйлесуді бастау",
        ru: "Начать разговор",
        en: "Start Talking"
      },
      descriptionKey: {
        kk: "Жоспарланған қоңыраулар арқылы сөйлесіңіз",
        ru: "Общайтесь через запланированные звонки",
        en: "Chat via scheduled video calls"
      }
    }
  ];

  return (
    <div id="how-it-works" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {language === 'kk' ? (
              "Қалай жұмыс істейді"
            ) : language === 'ru' ? (
              "Как это работает"
            ) : (
              "How It Works"
            )}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'kk' ? (
              "3 қарапайым қадамда байланыс орнатыңыз"
            ) : language === 'ru' ? (
              "Установите связь всего за 3 простых шага"
            ) : (
              "Connect in just 3 simple steps"
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card relative">
                <CardHeader className="pb-2 text-center">
                  <div className="bg-primary/20 text-primary w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto">
                    <Icon size={32} />
                  </div>
                  <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-semibold text-card-foreground">
                    {step.titleKey[language as keyof typeof step.titleKey]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {step.descriptionKey[language as keyof typeof step.descriptionKey]}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
