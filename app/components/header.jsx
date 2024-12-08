"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const Header = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-warm-50 to-warm-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-primary-500/5 rounded-bl-[100px]" />
        <div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-secondary-500/5 rounded-tr-[100px]" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Left Content */}
        <motion.div 
          className="flex-1 z-10 max-w-2xl pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <motion.h1 
              className="text-heading-1 font-heading font-bold text-secondary-900"
              aria-label="Where Students Transform Into Leaders"
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Where Students
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-primary-500"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                  Transform
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Into Leaders
                </motion.span>
              </span>
            </motion.h1>

            <motion.p 
              className="text-body-large text-neutral-500 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join our community of passionate learners, creators, and achievers. 
              Experience growth through diverse activities and meaningful connections.
            </motion.p>

            <motion.div 
              className="flex gap-4 pt-4 justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/join-us">
                <button className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
                  Join Now
                </button>
              </Link>
              <Link href="/about">
              <button className="px-8 py-3 border-2 border-secondary-500 text-secondary-500 rounded-lg hover:bg-secondary-500 hover:text-white transition-colors duration-300">
                Learn More
              </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="flex-1 z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary-500/10 rounded-2xl blur-lg" />
            <img 
              src="/assets/header/home/13.jpg" 
              alt="Students in Action"
              className="relative w-full h-auto rounded-2xl shadow-xl"
            />
            
            <div className="absolute -bottom-6 right-6 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
              <p className="text-secondary-500 font-medium">Join 1500+ Active Members</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
