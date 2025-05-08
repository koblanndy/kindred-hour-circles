
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent kindred-gradient">
              Jüzdesu
            </h3>
            <p className="mb-4">Building bridges across generations through meaningful conversations.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition-all-smooth">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: juzdesu@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 Jüzdesu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
