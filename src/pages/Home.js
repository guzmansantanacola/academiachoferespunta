import React, { useEffect } from 'react';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import StatsSection from '../sections/StatsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import LocationSection from '../sections/LocationSection';
import PsychologySection from '../sections/PsychologySection';
import CTASection from '../sections/CTASection';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <LocationSection />
      <PsychologySection />
      <CTASection />
    </div>
  );
}

export default Home;
