
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from '../context/TranslationContext';
import { supabase } from '@/integrations/supabase/client';

const ParticipantForms: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  const { t } = useTranslations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save participant data to Supabase
      const { error } = await supabase
        .from('participants')
        .insert([
          { 
            full_name: fullName,
            whatsapp,
            email: email || null, // Handle empty email as null
            age: parseInt(age),
          }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "There was a problem submitting your registration. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Registration Received!",
        description: "We'll contact you soon to continue the matching process.",
      });
      
      // Reset form after successful submission
      setFullName('');
      setWhatsapp('');
      setEmail('');
      setAge('');
      
    } catch (err) {
      console.error('Error in form submission:', err);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-blue-50"></div>
      <div id="join" className="bg-blue-50 section-padding pt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('join.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('join.subtitle')}
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('join.registration.title')}</CardTitle>
              <CardDescription>
                {t('join.registration.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="full-name">{t('join.registration.fullName')}</Label>
                  <Input 
                    id="full-name" 
                    placeholder={t('join.registration.fullName')}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">{t('join.registration.whatsapp')}</Label>
                  <Input 
                    id="whatsapp" 
                    type="tel" 
                    placeholder="+7 700 000 0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">{t('join.registration.age')}</Label>
                  <Input 
                    id="age" 
                    type="number" 
                    placeholder="18"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('join.registration.email')} ({t('optional')})</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t('join.registration.email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('loading') : t('join.registration.register')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParticipantForms;
