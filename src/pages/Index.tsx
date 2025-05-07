
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ParticipantForms from '../components/ParticipantForms';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <ParticipantForms />
      <Footer />
    </div>
  );
};

export default Index;
