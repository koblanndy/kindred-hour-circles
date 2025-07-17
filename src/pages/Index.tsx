
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import ComingSoon from '../components/ComingSoon';
import WaitlistForm from '../components/WaitlistForm';
import Footer from '../components/Footer';
import PageDivider from '../components/PageDivider';
import AnalyticsService from '../services/AnalyticsService';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize analytics service safely
    try {
      const analyticsService = AnalyticsService.getInstance();
      
      // Track section views with intersection observer
      const sections = ['how-it-works', 'features', 'join'];
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
      <About />
      <PageDivider type="white-to-gray" />
      <HowItWorks />
      <PageDivider type="gray-to-white" />
      <Features />
      <PageDivider type="white-to-gray" />
      <ComingSoon />
      <PageDivider type="gray-to-white" />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
