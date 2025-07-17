import React, { useState } from 'react';
import { useTranslations } from "../context/TranslationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm: React.FC = () => {
  const { language } = useTranslations();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: language === 'kk' ? "Сәттілік!" : language === 'ru' ? "Успех!" : "Success!",
        description: language === 'kk' ? 
          "Сіз күту тізіміне қосылдыңыз!" : 
          language === 'ru' ? 
          "Вы добавлены в список ожидания!" : 
          "You've been added to the waitlist!"
      });
      setFormData({ name: '', email: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-primary/5 section-padding" id="join">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {language === 'kk' ? (
              "Күту тізіміне қосылу"
            ) : language === 'ru' ? (
              "Присоединиться к списку ожидания"
            ) : (
              "Join the Waitlist"
            )}
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === 'kk' ? (
              "Ерте қол жетімділік алыңыз"
            ) : language === 'ru' ? (
              "Получите ранний доступ"
            ) : (
              "Get Early Access"
            )}
          </p>
        </div>

        <Card className="border border-border shadow-lg bg-card">
          <CardHeader>
            <CardTitle className="text-center text-card-foreground">
              {language === 'kk' ? (
                "Біз сізге хабарлама жібереміз"
              ) : language === 'ru' ? (
                "Мы уведомим вас"
              ) : (
                "We'll notify you"
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={language === 'kk' ? "Толық атыңыз" : language === 'ru' ? "Ваше полное имя" : "Your full name"}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-lg py-3 bg-background border-input"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={language === 'kk' ? "Электрондық пошта" : language === 'ru' ? "Электронная почта" : "Your email address"}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-lg py-3 bg-background border-input"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="interactive-button w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 rounded-lg font-semibold"
              >
                {isSubmitting ? (
                  language === 'kk' ? "Жіберілуде..." : language === 'ru' ? "Отправка..." : "Submitting..."
                ) : (
                  language === 'kk' ? "Күту тізіміне қосылу" : language === 'ru' ? "Присоединиться" : "Join Waitlist"
                )}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground text-center mt-4">
              {language === 'kk' ? (
                "Біз сізге спам жібермейміз. Тек жаңартулар мен ерте шақырулар."
              ) : language === 'ru' ? (
                "Мы никогда не будем спамить. Только обновления и ранние приглашения."
              ) : (
                "We'll never spam you. Just updates and early invites."
              )}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WaitlistForm;