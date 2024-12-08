'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Teams', href: '/teams' },
    { name: 'Join Club', href: '/join-us' },
  ];


  const contactInfo = {
    email: 'scc.scriet@gmail.com',
    // phone: '+91 123 456 7890',
    address: 'C.C.S. University, Meerut, Uttar Pradesh - 250004'
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/studentconsciousclub/', icon: <FaInstagram /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/student-conscious-club/', icon: <FaLinkedin /> },
    { name: 'YouTube', href: 'https://www.youtube.com/@studentconsciousclub', icon: <FaYoutube /> },
  ];

  return (
    <footer className="bg-primary-700 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Club Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-2">
                <Image src="/logo.png" width={80} height={80} alt="SCC Logo" />
                <span className="text-xl font-heading font-bold text-secondary-800">Student Conscious Club</span>
              </div>
            </Link>
            <p className="text-warm-50/80 text-sm leading-relaxed mb-6">
              Empowering students through holistic development and meaningful experiences. Join us in our journey of growth and excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-warm-50/60 text-lg hover:text-primary-500 transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-50/60 hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-heading font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4 text-warm-50/60">
              <p>{contactInfo.address}</p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-500 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-warm-50 text-sm">
          <p>© {currentYear} Student Conscious Club. All rights reserved.</p>
          <p>Developed with ❤️ by <a href="https://www.linkedin.com/in/devangspsingh" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 underline transition-colors duration-200">devangspsingh</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
