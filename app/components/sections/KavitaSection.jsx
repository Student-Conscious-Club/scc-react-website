'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { kavitas } from '../../../data/kavitas';

export default function KavitaSection() {
  const [currentKavita, setCurrentKavita] = useState(kavitas[0]);

  useEffect(() => {
    const randomKavita = () => {
      const random = Math.floor(Math.random() * kavitas.length);
      setCurrentKavita(kavitas[random]);
    };
    
    randomKavita();
    const interval = setInterval(randomKavita, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-warm-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dotted-pattern bg-[length:16px_16px] opacity-30" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Daily Inspiration
          </span>
          <h2 className="text-heading-2 font-heading font-bold text-secondary-900 mb-8">
            काव्य कोना
          </h2>
          <motion.div 
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-heading-4 font-heading text-secondary-900 mb-6">
              {currentKavita.title}
            </h3>
            <p className="text-body-large text-secondary-600 whitespace-pre-line mb-6 leading-relaxed">
              {currentKavita.content}
            </p>
            <p className="text-secondary-500 italic">- {currentKavita.author}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}