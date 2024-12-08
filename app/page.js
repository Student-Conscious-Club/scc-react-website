'use client'
import Header from "./components/header";
import CTASection from "./components/sections/CTASection";
import FeatureSection from "./components/sections/FeatureSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import PastEventsSection from "./components/sections/PastEventsSection";
import { eventsData } from '../data/events';
import StatisticsSection from "./components/sections/StatisticsSection";
import TeamSection from "./components/sections/TeamSection";
import { testimonials } from '../data/testimonials';
import { features, coreValues } from '../data/content';
import SocialFeedSection from "./components/sections/SocialFeedSection";


export default function Home() {
  return (
    <>
      <Header />
      <FeatureSection
        title="Why Join SCC?"
        subtitle="Discover the opportunities that await you"
        features={features}
      />
      <StatisticsSection />
      <PastEventsSection events={eventsData} />
      <FeatureSection
        title="Our Core Values"
        subtitle="The principles that guide us in everything we do"
        features={coreValues}
      />
      <TeamSection />
      <TestimonialSection testimonials={testimonials} />
      <SocialFeedSection />
      <CTASection />
    </>
  );
}
