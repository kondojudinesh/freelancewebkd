import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedGigs from '../components/home/FeaturedGigs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedGigs />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;