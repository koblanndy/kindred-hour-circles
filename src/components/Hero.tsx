
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Connecting Generations Through Meaningful Conversations
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Kindred Hours brings together older adults and young people for weekly or bi-weekly conversations, creating 
            meaningful relationships that bridge generational gaps.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8" size="lg">
              I'm a Senior
            </Button>
            <Button className="bg-orange-400 hover:bg-orange-500 text-white text-lg py-6 px-8" size="lg">
              I'm a Young Adult
            </Button>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
            alt="Elderly person and young adult having a conversation" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
