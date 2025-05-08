
import React from 'react';
import { useTranslations } from '../context/TranslationContext';

const Testimonials: React.FC = () => {
  const { t } = useTranslations();

  return (
    <div id="testimonials" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="flex justify-center items-center p-12 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              {t('testimonials.comingSoon')}
            </p>
            <p className="text-lg text-gray-600">
              {t('testimonials.stayTuned')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
