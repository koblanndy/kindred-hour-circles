
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ParticipantForms from '../components/ParticipantForms';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import PageDivider from '../components/PageDivider';
import AnalyticsService from '../services/AnalyticsService';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize analytics service safely
    try {
      const analyticsService = AnalyticsService.getInstance();
      
      // Track section views with intersection observer
      const sections = ['how-it-works', 'testimonials', 'join'];
      const observers: IntersectionObserver[] = [];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  analyticsService.trackSectionView(section);
                }
              });
            }, 
            { threshold: 0.5 }
          );
          observer.observe(element);
          observers.push(observer);
        }
      });
      
      // Cleanup function
      return () => {
        observers.forEach(observer => observer.disconnect());
      };
    } catch (error) {
      console.error("Error initializing analytics:", error);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <PageDivider type="blue-to-white" />
      <HowItWorks />
      <PageDivider type="white-to-gray" />
      <Testimonials />
      <PageDivider type="gray-to-white" />
      <ParticipantForms />
      <Footer />
    </div>
  );
};

export default Index;
