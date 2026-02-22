import React from 'react';
import HeroSection from '../Components/home/HeroSection';
import BrandIntro from '../Components/home/BrandIntro';
import StatsSection from '../Components/home/StatsSection';
import ServicesSection from '../Components/home/ServicesSection';
import WhyChooseUs from '../Components/home/WhyChooseUs';
import ProjectsPreview from '../Components/home/ProjectsPreview';
import CTASection from '../Components/home/CTASection';

const Home = () => {
  return (
    <main className="bg-[#f7f7f5] text-[#111827]">
      <HeroSection />
      <BrandIntro />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsPreview />
      <CTASection />
    </main>
  );
};

export default Home;

