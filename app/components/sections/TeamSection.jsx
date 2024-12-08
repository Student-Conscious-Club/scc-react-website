'use client';
import { motion } from 'framer-motion';
import TeamMembers from '../TeamMembers';
import teams2024_25 from '../../../data/teams/2024-25.csv';
import Link from 'next/link';

export default function TeamSection() {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-warm-50 via-white to-secondary-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-2 font-heading font-bold text-secondary-900 mb-4">
            Meet Our <span className="text-primary-500">Core Team</span>
          </h2>
          <p className="text-body-large text-secondary-600 max-w-2xl mx-auto">
            The driving force behind our success
          </p>
        </motion.div>

        {/* Reusing the TeamMembers component */}
        <TeamMembers csvData={teams2024_25} />

        {/* View All Team Members Button */}
        <div className="text-center mt-12">
          <Link 
            href="/teams"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-300 font-medium"
          >
            View Past Teams
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}