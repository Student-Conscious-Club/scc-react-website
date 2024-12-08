'use client'
import { testimonials } from '../../data/testimonials';
import { coreValues, aboutSections } from '../../data/content';
import TeamSection from '../components/sections/TeamSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import HeroSection from '../components/sections/HeroSection';
import CTASection from '../components/sections/CTASection';
import SocialFeedSection from '../components/sections/SocialFeedSection';
import FeatureSection from '../components/sections/FeatureSection';
import AlternatingSection from '../components/sections/AlternatingSection';

export default function About() {
  
  return (
    <main className="overflow-hidden">
      <HeroSection
        title="About"
        highlightedText="SCC"
        description="Welcome to the Student Conscious Club (SCC), a student-led organization dedicated to fostering social responsibility, leadership, and self-awareness among the youth of our nation."
      />

      {aboutSections && <AlternatingSection sections={aboutSections} />}

      <FeatureSection 
        title="Our Core Values" 
        subtitle="The principles that guide us in everything we do" 
        features={coreValues} 
      />

      <TeamSection />
      <TestimonialSection testimonials={testimonials} />
      <SocialFeedSection />
      <CTASection />
    </main>
  );
}
