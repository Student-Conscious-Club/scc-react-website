"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function NotFound() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-warm-50 to-warm-100 flex items-center justify-center px-6">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-primary-500/5 rounded-bl-[100px]" />
        <div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-secondary-500/5 rounded-tr-[100px]" />
      </div>

      <motion.div 
        className="relative text-center max-w-2xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-display font-heading font-bold text-secondary-900"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <div className="space-y-4">
          <h2 className="text-heading-2 font-heading font-bold text-primary-500">
            Page Not Found
          </h2>
          <p className="text-body-large text-neutral-500">
            Oops! The page you are looking for seems to have wandered off.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/" className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
            Back to Home
          </Link>
        </div>

        <div className="pt-12 space-y-4">
          <p className="text-body text-secondary-500 font-medium">Helpful Resources:</p>
          <div className="flex flex-wrap justify-center gap-4 text-body-small">
            <Link href="/about" className="text-primary-500 hover:text-primary-600">About Us</Link>
            <Link href="/events" className="text-primary-500 hover:text-primary-600">Events</Link>
            <Link href="/" className="text-primary-500 hover:text-primary-600">Home</Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
