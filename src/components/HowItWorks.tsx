
import React from 'react';
import { Calendar, Clock, UserPlus, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "../context/TranslationContext";

const HowItWorks: React.FC = () => {
  const { t } = useTranslations();

  const steps = [
    {
      icon: UserPlus,
      titleKey: 'howItWorks.steps.signup.title',
      descriptionKey: 'howItWorks.steps.signup.description'
    },
    {
      icon: Calendar,
      titleKey: 'howItWorks.steps.matched.title',
      descriptionKey: 'howItWorks.steps.matched.description'
    },
    {
      icon: MessageCircle,
      titleKey: 'howItWorks.steps.connect.title',
      descriptionKey: 'howItWorks.steps.connect.description'
    },
    {
      icon: Clock,
      titleKey: 'howItWorks.steps.meetings.title',
      descriptionKey: 'howItWorks.steps.meetings.description'
    }
  ];

  return (
    <div id="how-it-works" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('howItWorks.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all-smooth">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <step.icon size={24} />
                </div>
                <CardTitle className="text-xl font-semibold">{t(step.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t(step.descriptionKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
