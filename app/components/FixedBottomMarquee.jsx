"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const FixedBottomMarquee = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const checkTimeAndDate = () => {
      const currentHour = new Date().getHours();
      const endDate = new Date("2025-01-22T00:00:00+05:30"); // IST (UTC+5:30)
      const now = new Date();

      // Show only if current time is between 9 AM and 9 PM AND before end date
      setIsVisible(now < endDate);
    };

    checkTimeAndDate(); // Initial check
    const interval = setInterval(checkTimeAndDate, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  // Create array of 15 items for smooth infinite scroll
  const links = Array.from({ length: 15 }, (_, i) => (
    <Link
      key={i}
      href="https://forms.gle/rw38dYmkXCTF54HF7"
      target="_blank"
      className="mx-8 text-warm-100 hover:text-warm-200 transition-colors duration-300 flex items-center space-x-2">
      <span className="text-body-large font-bold">Register for Talent Fiesta 2025</span>
    </Link>
  ));

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 z-50">
      <div className="relative overflow-hidden">
        <div
          className={`flex whitespace-nowrap ${
            isAnimating ? "animate-[marquee_30s_linear_infinite]" : ""
          }`}
          onMouseEnter={() => setIsAnimating(false)}
          onMouseLeave={() => setIsAnimating(true)}>
          {links}
          {/* Duplicate the links to ensure seamless loop */}
          {links}
        </div>
      </div>
    </div>
  );
};

export default FixedBottomMarquee;
