
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ParticipantForms from '../components/ParticipantForms';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import PageDivider from '../components/PageDivider';

const Index: React.FC = () => {
  useEffect(() => {
    // Simple analytics tracking
    const trackPageView = () => {
      console.log("Page view tracked");
      // In a real implementation, you would send this to your analytics service
      
      // Example of what this would typically look like:
      // if (window.gtag) {
      //   window.gtag('event', 'page_view', {
      //     page_title: document.title,
      //     page_location: window.location.href,
      //     page_path: window.location.pathname
      //   });
      // }
    };

    // Track page view when component mounts
    trackPageView();
    
    // You could also track when users navigate between sections
    const trackSectionView = (sectionId: string) => {
      console.log(`Section view tracked: ${sectionId}`);
      // Similar implementation as above but with section information
    };

    // Optional: set up intersection observers to track when sections come into view
    const sections = ['how-it-works', 'testimonials', 'join'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                trackSectionView(section);
              }
            });
          }, 
          { threshold: 0.5 }
        );
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observers if needed
    };
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
