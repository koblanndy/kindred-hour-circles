
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent kindred-gradient">
            Kindred Hours
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 flex-1 justify-center">
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-all-smooth">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-all-smooth">
            Testimonials
          </a>
          <a href="#join" className="text-gray-600 hover:text-blue-600 transition-all-smooth">
            Join Now
          </a>
          <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-all-smooth">
            FAQ
          </a>
        </div>
        
        <div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all-smooth">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
