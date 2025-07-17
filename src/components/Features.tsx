import React from 'react';
import { useTranslations } from "../context/TranslationContext";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { UserPlus, Calendar, MessageCircle, Globe, Heart, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const { language } = useTranslations();
  
  const features = [
    {
      icon: UserPlus,
      titleKey: {
        kk: "Оңай тіркелу",
        ru: "Простая регистрация", 
        en: "Easy Onboarding"
      },
      descKey: {
        kk: "Қарапайым және тез тіркелу процесі",
        ru: "Простой и быстрый процесс регистрации",
        en: "Simple and quick registration process"
      }
    },
    {
      icon: Calendar,
      titleKey: {
        kk: "Сөйлесулерді жоспарлау",
        ru: "Планирование разговоров",
        en: "Schedule Conversations"
      },
      descKey: {
        kk: "Ыңғайлы уақытта кездесулер ұйымдастыру",
        ru: "Организуйте встречи в удобное время",
        en: "Organize meetings at convenient times"
      }
    },
    {
      icon: MessageCircle,
      titleKey: {
        kk: "Сөйлесу тақырыптары",
        ru: "Темы для разговоров",
        en: "Conversation Starters"
      },
      descKey: {
        kk: "Дайын тақырыптар мен сұрақтар",
        ru: "Готовые темы и вопросы для общения",
        en: "Ready-made topics and questions"
      }
    },
    {
      icon: Globe,
      titleKey: {
        kk: "Мәдени алмасу",
        ru: "Культурный обмен",
        en: "Cultural Exchange"
      },
      descKey: {
        kk: "Әртүрлі мәдениеттермен танысу",
        ru: "Знакомство с разными культурами",
        en: "Learn about different cultures"
      }
    },
    {
      icon: Heart,
      titleKey: {
        kk: "Көп тілді қолдау",
        ru: "Многоязычность",
        en: "Multi-language Support"
      },
      descKey: {
        kk: "Қазақ, орыс және ағылшын тілдерінде",
        ru: "На казахском, русском и английском языках",
        en: "Available in Kazakh, Russian, and English"
      }
    },
    {
      icon: Shield,
      titleKey: {
        kk: "Ұлттар үшін ыңғайлы",
        ru: "Удобно для пожилых",
        en: "Elderly-Friendly Design"
      },
      descKey: {
        kk: "Ірі түймешіктер мен оқулы қаріптер",
        ru: "Большие кнопки и читаемые шрифты",
        en: "Large buttons and readable fonts"
      }
    }
  ];
  
  return (
    <div className="bg-primary/10 section-padding" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {language === 'kk' ? (
              "Мүмкіндіктер"
            ) : language === 'ru' ? (
              "Возможности"
            ) : (
              "Features"
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'kk' ? (
              "Сіздің ыңғайлылығыңыз үшін жасалған мүмкіндіктер"
            ) : language === 'ru' ? (
              "Функции, разработанные для вашего удобства"
            ) : (
              "Features designed for your comfort and convenience"
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow duration-300 bg-card">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-card-foreground">
                    {feature.titleKey[language as keyof typeof feature.titleKey]}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.descKey[language as keyof typeof feature.descKey]}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;