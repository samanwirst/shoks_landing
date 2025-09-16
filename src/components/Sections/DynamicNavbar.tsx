"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { ButtonNav } from '../Buttons/ButtonNav';
import ButtonThemeToggle from '../Buttons/ButtonThemeToggle';

interface DynamicNavbarProps {
  isWhiteTheme?: boolean;
}

interface NavItem {
  label: string;
  action: () => void;
  isPrimary?: boolean;
}

const transition: Transition = {
  duration: 0.3,
  ease: "easeOut",
};

const contentVariants: Variants = {
  top: { scale: 1, y: 0 },
  scrolled: { scale: 0.95, y: 0 },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -20, transition },
};

const NAVBAR_CONFIG = {
  height: { top: "80px", scrolled: "60px" },
  bg: {
    white: {
      top: "rgba(255, 255, 255, 0)",
      scrolled: "rgba(255, 255, 255, 0.95)",
    },
    dark: {
      top: "rgba(10, 10, 10, 0)",
      scrolled: "rgba(10, 10, 10, 0.8)",
    },
  },
  shadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
};

const createScrollAction = (id: string) => () => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const navItems: NavItem[] = [
  { label: "Services", action: createScrollAction("services") },
  { label: "Why Us", action: createScrollAction("unique-selling-points") },
  { label: "Reviews", action: createScrollAction("testimonials") },
  { label: "Results", action: createScrollAction("results") },
  { label: "Get Started", action: createScrollAction("hero"), isPrimary: true },
];

export function DynamicNavbar({ isWhiteTheme = false }: DynamicNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--navbar-height', NAVBAR_CONFIG.height.top);
    document.documentElement.style.setProperty('--navbar-orb-active', '0');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Check if orb should be in navbar (same timing as hero orb fade)
      const windowHeight = window.innerHeight;
      const navbarSwitchPoint = windowHeight * 0.6; // Match fadeEnd from hero
      const showOrbInNavbar = window.scrollY >= navbarSwitchPoint;

      // Set CSS variable for navbar spacing
      document.documentElement.style.setProperty('--navbar-orb-active', showOrbInNavbar ? '1' : '0');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const height = scrolled ? NAVBAR_CONFIG.height.scrolled : NAVBAR_CONFIG.height.top;
    document.documentElement.style.setProperty('--navbar-height', height);
  }, [scrolled]);

  const navbarVariants: Variants = {
    top: {
      height: NAVBAR_CONFIG.height.top,
      backgroundColor: isWhiteTheme
        ? NAVBAR_CONFIG.bg.white.top
        : NAVBAR_CONFIG.bg.dark.top,
      backdropFilter: 'blur(0px)',
    },
    scrolled: {
      height: NAVBAR_CONFIG.height.scrolled,
      backgroundColor: isWhiteTheme
        ? NAVBAR_CONFIG.bg.white.scrolled
        : NAVBAR_CONFIG.bg.dark.scrolled,
      backdropFilter: 'blur(10px)',
      boxShadow: NAVBAR_CONFIG.shadow,
    },
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={scrolled ? 'scrolled' : 'top'}
        transition={transition}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <div className="container dark:bg-black mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <motion.div
            variants={contentVariants}
            animate={scrolled ? 'scrolled' : 'top'}
            transition={transition}
            className="flex items-center justify-between w-full"
          >
            <Link href="/" passHref>
              <div className="flex items-center gap-3 cursor-pointer">
                <Image
                  src="/logo/shoks-logo.png"
                  alt="Shoks SAT Logo"
                  width={40}
                  height={20}
                  className="transition-transform duration-300 ease-out"
                  priority
                />
                <span className={`font-bold text-lg transition-colors duration-300 ease-out ${
                  isWhiteTheme ? 'text-gray-900' : 'text-white'
                }`}>
                  Shoks SAT
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) =>
                item.isPrimary ? null : (
                  <ButtonNav
                    key={item.label}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    isWhiteTheme={isWhiteTheme}
                  >
                    {item.label}
                  </ButtonNav>
                )
              )}
            </div>

            <div className="hidden md:block">
              {navItems
                .filter((item) => item.isPrimary)
                .map((item) => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="rounded-sm border border-solid border-transparent transition-all duration-300 ease-out flex items-center justify-center bg-[#FF5F23] text-white hover:bg-[#FF5F23]/90 font-medium text-sm h-9 px-6 shadow-md cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`transition-colors duration-300 ease-out ${
                  isWhiteTheme ? 'text-gray-900' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`md:hidden absolute top-full left-0 w-full backdrop-blur-lg shadow-lg ${
                isWhiteTheme
                  ? 'bg-white/95 border-t border-gray-200'
                  : 'bg-black/80 border-t border-gray-800'
                }`}
            >
              <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col items-center gap-4">
                {navItems.map((item) => (
                  <ButtonNav
                    key={item.label}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    className="block py-2 text-lg"
                    isWhiteTheme={isWhiteTheme}
                  >
                    {item.label}
                  </ButtonNav>
                ))}
                {/* Get Started button removed from mobile menu as requested */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div
        className="fixed right-4 md:right-6 z-[60] transition-all duration-300 linear"
        style={{
          top: 'calc(var(--navbar-height) / 2 - 20px)',
        }}
      >
        <ButtonThemeToggle />
      </div>
    </>
  );
}
