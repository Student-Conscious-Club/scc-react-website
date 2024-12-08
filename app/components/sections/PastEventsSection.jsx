'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import EventCard from '../cards/EventCard';

export default function PastEventsSection({ events }) {
  const currentDate = new Date();
  const pastEvents = events
    .filter(event => new Date(event.date) < currentDate)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4); // Show 4 past events instead of 3

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-2 font-heading font-bold text-secondary-900 mb-4">
            Past Events
          </h2>
          <p className="text-body-large text-secondary-600 max-w-2xl mx-auto">
            Relive our most recent gatherings and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pastEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <Link 
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-300 font-medium"
          >
            View All Past Events
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}