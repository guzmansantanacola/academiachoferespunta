import React from 'react';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import StatsSection from '../sections/StatsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

export default Home;
