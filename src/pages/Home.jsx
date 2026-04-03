import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseMeSection from '../components/WhyChooseMeSection';
import ProjectShowcase from '../components/ProjectShowcase';
import CapabilitiesSection from '../components/CapabilitiesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="font-sans antialiased text-neutral-900 bg-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <WhyChooseMeSection />
        <ProjectShowcase />
        <CapabilitiesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
