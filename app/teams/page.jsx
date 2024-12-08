'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineData from '../../data/timeline.json';
import HeroSection from '../components/sections/HeroSection';

export default function Teams() {
  const reversedTimeline = [...timelineData.timeline].reverse();

  return (
    <main className="">
      {/* Hero Section */}
      <HeroSection
        title="Our Journey Through"
        highlightedText="Time"
        description="Discover the evolution of SCC and the amazing teams that made it possible"
      />

      {/* Timeline Section */}
      <section className="py-16 md:py-32 relative bg-gradient-to-b from-warm-50 via-warm-100 to-warm-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute w-96 h-96 bottom-0 left-0 bg-secondary-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <VerticalTimeline lineColor="#EF5A6F">
            {reversedTimeline.map((period, index) => (
              <VerticalTimelineElement
                key={period.year}
                className="vertical-timeline-element"
                contentStyle={{
                  background: 'white',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid rgba(239, 90, 111, 0.1)',
                }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date={period.year}

                icon={
                  <div className="flex items-center justify-center w-full h-full">
                    {true && (
                      <div className="absolute w-full h-full bg-primary-400 rounded-full opacity-100" />
                    )}
                  </div>
                }
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -top-1 -right-1 w-20 h-20 bg-primary-50 rounded-full opacity-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-50 rounded-full opacity-20 -z-10" />

                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 
                      text-white rounded-lg font-bold shadow-md">
                      {period.year}
                    </span>
                    {index === 0 && (
                      <motion.span 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="px-3 py-1 bg-secondary-500 text-white text-sm rounded-md"
                      >
                        Latest
                      </motion.span>
                    )}
                  </div>

                  <h3 className="text-heading-3 font-heading font-bold text-secondary-900 mb-4 
                    relative before:content-[''] before:absolute before:-bottom-2 before:left-0 
                    before:w-16 before:h-1 before:bg-primary-500/30">
                    {period.title}
                  </h3>

                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {period.description}
                  </p>

                  <div className="bg-warm-50/50 rounded-xl p-4 mb-8">
                    <ul className="space-y-3">
                      {period.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 
                            flex items-center justify-center group-hover:bg-primary-500 
                            transition-all duration-300">
                            <span className="w-2 h-2 rounded-full bg-primary-500 
                              group-hover:bg-white transition-all duration-300" />
                          </span>
                          <span className="text-secondary-600 group-hover:text-secondary-900 
                            transition-all duration-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/teams/${period.year}`}>
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-secondary-900 to-secondary-800 
                        text-white rounded-lg hover:from-secondary-800 hover:to-secondary-700 
                        transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      View {period.year} Team
                      <svg 
                        className="w-4 h-4 transform transition-all duration-300 group-hover:translate-x-1" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </Link>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </main>
  );
}



