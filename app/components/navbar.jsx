"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check window width and close mobile menu if screen is large enough
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Check initial scroll position
    const checkInitialScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    // Run initial checks
    handleResize();
    checkInitialScroll();

    // Add scroll listener
    window.addEventListener("scroll", checkInitialScroll);

    return () => {
      window.removeEventListener("scroll", checkInitialScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Add loading bar logic
  useEffect(() => {
    const handleStart = (url) => {
      if (url !== pathname) {
        setIsLoading(true);
      }
    };
    const handleStop = () => {
      setIsLoading(false);
    };

    router.events?.on("routeChangeStart", handleStart);
    router.events?.on("routeChangeComplete", handleStop);
    router.events?.on("routeChangeError", handleStop);

    return () => {
      router.events?.off("routeChangeStart", handleStart);
      router.events?.off("routeChangeComplete", handleStop);
      router.events?.off("routeChangeError", handleStop);
    };
  }, [router, pathname]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
      // Add keyboard listener
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Teams", href: "/teams" },
  ];

  return (
    <>
      {/* Loading Bar */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[60]"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={twMerge(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
          isScrolled ? "bg-white/40 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link href="/" className="flex items-center space-x-2">
                <img src="/assets/header.png" className="h-12" alt="Student Conscious Club" />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 relative group ${
                      isScrolled ? "text-secondary-600 hover:text-primary-500" : "text-secondary-800 hover:text-primary-500"
                    }`}>
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/join-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200">
                  Join Us
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden z-50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                isMobileMenuOpen ? "text-white" : isScrolled ? "text-secondary-900" : "text-secondary-800"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu">
              {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Fullscreen Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 w-screen h-screen bg-primary-500/95 backdrop-blur-lg z-40"
              style={{ width: "100vw" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="h-screen flex flex-col items-center justify-center px-6">
                <nav className="space-y-8 text-center">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.1 * index },
                      }}
                      exit={{ opacity: 0, y: 20 }}>
                      <Link
                        href={link.href}
                        className="text-warm-50 text-3xl font-heading hover:text-white transition-colors duration-200 block py-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                        tabIndex={isMobileMenuOpen ? 0 : -1}>
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/join-us"
                      onClick={() => setIsMobileMenuOpen(false)}
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                      className="bg-warm-50 px-4  text-3xl font-heading hover:bg-warm-200 transition-colors duration-200 block py-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg">
                      Join Us
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default NavBar;
