
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MarqueeGroup = ({ partners, direction = 1 }) => (
  <div
    className="flex gap-8 py-4"
    style={{
      animation: `scroll${direction > 0 ? 'Left' : 'Right'} 30s linear infinite`
    }}
  >
    {[...partners, ...partners].map((partner, idx) => (
      <a
        key={`${partner.name}-${idx}`}
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center transition-all duration-300"
      >
        <div className="relative h-32 aspect-video">
          <img
            src={partner.logo}
            alt={partner.name}
            className="object-scale-down w-full h-full transition-opacity duration-300"
          />
        </div>
      </a>
    ))}
  </div>
);

export default function PartnersSection({ partners }) {
  return (
    <section className="py-20 bg-secondary-900 overflow-hidden">
      <style jsx global>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2rem)); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(calc(-100% - 2rem)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-heading-2 font-heading font-bold text-warm-50 mb-4">
            Our Trusted <span className="text-primary-500">Partners</span>
          </h2>
          <p className="text-body-large text-warm-100 max-w-2xl mx-auto">
            Working together with industry leaders to create opportunities for our members
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-secondary-900 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-secondary-900 to-transparent z-10" />
        
        {/* Marquee content */}
        <div className="flex flex-col gap-8">
          {/* <MarqueeGroup partners={partners} direction={1} /> */}
          <MarqueeGroup partners={partners} direction={-1} />
        </div>
      </div>
    </section>
  );
}