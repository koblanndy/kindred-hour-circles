
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from '../context/TranslationContext';

const ParticipantForms: React.FC = () => {
  const [seniorName, setSeniorName] = useState('');
  const [seniorWhatsapp, setSeniorWhatsapp] = useState('');
  const [seniorEmail, setSeniorEmail] = useState('');
  const [seniorAge, setSeniorAge] = useState('');
  
  const [youthName, setYouthName] = useState('');
  const [youthWhatsapp, setYouthWhatsapp] = useState('');
  const [youthEmail, setYouthEmail] = useState('');
  const [youthAge, setYouthAge] = useState('');
  
  const { toast } = useToast();
  const { t } = useTranslations();

  const handleSeniorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Received!",
      description: "We'll contact you soon to continue the matching process.",
    });
    setSeniorName('');
    setSeniorWhatsapp('');
    setSeniorEmail('');
    setSeniorAge('');
  };

  const handleYouthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Received!",
      description: "We'll contact you soon to continue the matching process.",
    });
    setYouthName('');
    setYouthWhatsapp('');
    setYouthEmail('');
    setYouthAge('');
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
          
          <Tabs defaultValue="seniors" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="seniors" className="text-lg py-3">{t('join.seniors.title')}</TabsTrigger>
              <TabsTrigger value="youth" className="text-lg py-3">{t('join.youth.title')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="seniors">
              <Card>
                <CardHeader>
                  <CardTitle>{t('join.seniors.title')}</CardTitle>
                  <CardDescription>
                    {t('join.seniors.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSeniorSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="senior-name">{t('join.seniors.fullName')}</Label>
                      <Input 
                        id="senior-name" 
                        placeholder={t('join.seniors.fullName')}
                        value={seniorName}
                        onChange={(e) => setSeniorName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="senior-whatsapp">WhatsApp Number</Label>
                      <Input 
                        id="senior-whatsapp" 
                        type="tel" 
                        placeholder="+7 700 000 0000"
                        value={seniorWhatsapp}
                        onChange={(e) => setSeniorWhatsapp(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="senior-age">Age</Label>
                      <Input 
                        id="senior-age" 
                        type="number" 
                        placeholder="60"
                        value={seniorAge}
                        onChange={(e) => setSeniorAge(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="senior-email">{t('join.seniors.email')} (Optional)</Label>
                      <Input 
                        id="senior-email" 
                        type="email" 
                        placeholder={t('join.seniors.email')}
                        value={seniorEmail}
                        onChange={(e) => setSeniorEmail(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      {t('join.seniors.register')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="youth">
              <Card>
                <CardHeader>
                  <CardTitle>{t('join.youth.title')}</CardTitle>
                  <CardDescription>
                    {t('join.youth.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleYouthSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="youth-name">{t('join.youth.fullName')}</Label>
                      <Input 
                        id="youth-name" 
                        placeholder={t('join.youth.fullName')}
                        value={youthName}
                        onChange={(e) => setYouthName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="youth-whatsapp">WhatsApp Number</Label>
                      <Input 
                        id="youth-whatsapp" 
                        type="tel" 
                        placeholder="+7 700 000 0000"
                        value={youthWhatsapp}
                        onChange={(e) => setYouthWhatsapp(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="youth-age">Age</Label>
                      <Input 
                        id="youth-age" 
                        type="number" 
                        placeholder="18"
                        value={youthAge}
                        onChange={(e) => setYouthAge(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="youth-email">{t('join.youth.email')} (Optional)</Label>
                      <Input 
                        id="youth-email" 
                        type="email" 
                        placeholder={t('join.youth.email')}
                        value={youthEmail}
                        onChange={(e) => setYouthEmail(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500">
                      {t('join.youth.register')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ParticipantForms;
