"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const FixedBottomMarquee = ({
  linkTitle = "Register for Chess Competetion 2025",
  linkHref = "https://forms.gle/X5Jm2YAWj2Jydm4D8",
  linkCount = 15,
  endDate = "2025-02-03T00:00:00+05:30",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const checkTimeAndDate = () => {
      const now = new Date();
      setIsVisible(now < new Date(endDate));
    };

    checkTimeAndDate(); // Initial check
    const interval = setInterval(checkTimeAndDate, 60000);

    return () => clearInterval(interval);
  }, [endDate]);

  if (!isVisible) return null;

  const links = Array.from({ length: linkCount }, (_, i) => (
    <Link
      key={i}
      href={linkHref}
      target="_blank"
      className="mx-8 text-warm-100 hover:text-warm-200 transition-colors duration-300 flex items-center space-x-2">
      <span className="text-body-large font-bold">{linkTitle}</span>
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
          {links}
        </div>
      </div>
    </div>
  );
};

export default FixedBottomMarquee;
