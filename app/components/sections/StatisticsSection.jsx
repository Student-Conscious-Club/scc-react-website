
'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StatisticCounter = ({ value, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(value * percentage));

      if (progress < duration) {
        countRef.current = requestAnimationFrame(step);
      }
    };

    countRef.current = requestAnimationFrame(step);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [value, duration, isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      <span>{count}</span>
      {suffix}
    </motion.div>
  );
};

export default function StatisticsSection() {
  const statistics = [
    { number: 1500, label: "Active Members", suffix: "+" },
    { number: 50, label: "Events", suffix: "+" },
    { number: 200, label: "Alumni Team", suffix: "+" },
    { number: 5, label: "Partner Organizations", suffix: "+" }
  ];

  return (
    <section className="py-20 bg-secondary-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-heading-2 font-bold text-primary-500 mb-2">
                <StatisticCounter value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-warm-50/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}