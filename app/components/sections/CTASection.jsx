"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function CTASection({
  title = "Ready to Start Your Journey?",
  description = "Join SCC today and be part of something extraordinary",
  buttonText = "Become a Member",
  variant = "light", // 'light' or 'dark'
}) {
  const themes = {
    light: {
      background: "bg-gradient-to-br from-primary-500/10 to-secondary-500/10",
      title: "text-secondary-900",
      description: "text-secondary-600",
      button: "bg-primary-500 text-white hover:bg-primary-600",
    },
    dark: {
      background: "bg-secondary-900",
      title: "text-white",
      description: "text-warm-50/90",
      button: "bg-primary-500 text-white hover:bg-primary-600",
    },
  };

  const theme = themes[variant];

  return (
    <section className={`py-20 ${theme.background} relative overflow-hidden`}>
      {variant === "dark" && <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20" />}
      <div className="container mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto">
          <h2 className={`text-heading-2 font-heading font-bold ${theme.title} mb-6`}>{title}</h2>
          <p className={`text-body-large ${theme.description} mb-8`}>{description}</p>
          <Link 
            href="/join-us"
            className={`inline-block px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${theme.button}`}
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
