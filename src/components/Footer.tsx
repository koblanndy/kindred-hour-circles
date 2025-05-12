
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="col-span-1">
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent kindred-gradient">
              Jüzdesu
            </h3>
            <p className="text-sm md:text-base mb-3 md:mb-4">Building bridges across generations through meaningful conversations.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition-all-smooth">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-md md:text-lg font-semibold mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>Email: juzdesu@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-gray-700 text-center text-sm md:text-base">
          <p>&copy; 2025 Jüzdesu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
