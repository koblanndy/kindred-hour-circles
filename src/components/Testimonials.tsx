
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { useTranslations } from '../context/TranslationContext';

const testimonials = [
  {
    quote: "My weekly conversations with Jake have become the highlight of my week. We talk about everything from World War II to TikTok trends.",
    name: "Eleanor, 78",
    role: "Retired Schoolteacher",
    image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    quote: "Maria shares such wonderful stories from her childhood in Italy. I've learned more from her than from any history book.",
    name: "Devon, 22",
    role: "College Student",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    quote: "I was feeling isolated, but now I look forward to our talks every Wednesday. Sarah has become like the granddaughter I never had.",
    name: "Herbert, 84",
    role: "Retired Electrician",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

const Testimonials: React.FC = () => {
  const { t } = useTranslations();

  return (
    <div id="testimonials" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-all-smooth">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <blockquote className="text-center italic text-gray-600 mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="flex flex-col items-center pb-6">
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
