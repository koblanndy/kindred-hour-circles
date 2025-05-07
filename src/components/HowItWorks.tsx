
import React from 'react';
import { Calendar, Clock, UserPlus, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Fill out our easy registration form and tell us about your interests and availability."
  },
  {
    icon: Calendar,
    title: "Get Matched",
    description: "Our system carefully matches seniors and young adults based on common interests and availability."
  },
  {
    icon: MessageCircle,
    title: "Connect",
    description: "Schedule your first virtual meeting through our secure platform and start your conversation."
  },
  {
    icon: Clock,
    title: "Regular Meetings",
    description: "Meet weekly or bi-weekly for an hour of meaningful conversation and connection."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Kindred Hours Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple process makes it easy to form meaningful connections across generations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all-smooth">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <step.icon size={24} />
                </div>
                <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
