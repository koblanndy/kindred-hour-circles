
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

const ParticipantForms: React.FC = () => {
  const [seniorEmail, setSeniorEmail] = useState('');
  const [seniorName, setSeniorName] = useState('');
  const [youthEmail, setYouthEmail] = useState('');
  const [youthName, setYouthName] = useState('');
  const { toast } = useToast();

  const handleSeniorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Received!",
      description: "We'll contact you soon to continue the matching process.",
    });
    setSeniorEmail('');
    setSeniorName('');
  };

  const handleYouthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Received!",
      description: "We'll contact you soon to continue the matching process.",
    });
    setYouthEmail('');
    setYouthName('');
  };

  return (
    <div id="join" className="bg-blue-50 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-600">
            Start your journey towards meaningful intergenerational connections.
          </p>
        </div>
        
        <Tabs defaultValue="seniors" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="seniors" className="text-lg py-3">For Seniors</TabsTrigger>
            <TabsTrigger value="youth" className="text-lg py-3">For Young Adults</TabsTrigger>
          </TabsList>
          
          <TabsContent value="seniors">
            <Card>
              <CardHeader>
                <CardTitle>Senior Registration</CardTitle>
                <CardDescription>
                  Connect with younger generations and share your wisdom and life experiences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSeniorSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="senior-name">Full Name</Label>
                    <Input 
                      id="senior-name" 
                      placeholder="Your full name" 
                      value={seniorName}
                      onChange={(e) => setSeniorName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="senior-email">Email</Label>
                    <Input 
                      id="senior-email" 
                      type="email" 
                      placeholder="Your email address" 
                      value={seniorEmail}
                      onChange={(e) => setSeniorEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Register as a Senior
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="youth">
            <Card>
              <CardHeader>
                <CardTitle>Young Adult Registration</CardTitle>
                <CardDescription>
                  Gain perspective and wisdom by connecting with seniors in your community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleYouthSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="youth-name">Full Name</Label>
                    <Input 
                      id="youth-name" 
                      placeholder="Your full name" 
                      value={youthName}
                      onChange={(e) => setYouthName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="youth-email">Email</Label>
                    <Input 
                      id="youth-email" 
                      type="email" 
                      placeholder="Your email address" 
                      value={youthEmail}
                      onChange={(e) => setYouthEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500">
                    Register as a Young Adult
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParticipantForms;
