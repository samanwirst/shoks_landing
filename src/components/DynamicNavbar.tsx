"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { ButtonNav } from './ButtonNav';

interface DynamicNavbarProps {
  isWhiteTheme?: boolean;
}

export function DynamicNavbar({ isWhiteTheme = false }: DynamicNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const handleGetStarted = () => {
    // Scroll to hero section or contact form
    const element = document.getElementById('hero') || document.querySelector('main');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navbarVariants: Variants = {
    top: {
      height: '80px',
      backgroundColor: isWhiteTheme ? 'rgba(255, 255, 255, 0)' : 'rgba(10, 10, 10, 0)',
      backdropFilter: 'blur(0px)',
    },
    scrolled: {
      height: '60px',
      backgroundColor: isWhiteTheme ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    }
  };

  const contentVariants: Variants = {
    top: { scale: 1, y: 0 },
    scrolled: { scale: 0.95, y: 0 },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        ease: 'easeOut' 
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { 
        duration: 0.3, 
        ease: 'easeOut' 
      } 
    },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      animate={scrolled ? 'scrolled' : 'top'}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <motion.div
          variants={contentVariants}
          animate={scrolled ? 'scrolled' : 'top'}
          transition={{ duration: 0.3, ease: 'easeOut' }}
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
            <ButtonNav 
              onClick={() => scrollToSection('services')}
              isWhiteTheme={isWhiteTheme}
            >
              Services
            </ButtonNav>
            <ButtonNav 
              onClick={() => scrollToSection('unique-selling-points')}
              isWhiteTheme={isWhiteTheme}
            >
              Why Us
            </ButtonNav>
            <ButtonNav 
              onClick={() => scrollToSection('results')}
              isWhiteTheme={isWhiteTheme}
            >
              Results
            </ButtonNav>
            <ButtonNav 
              onClick={() => scrollToSection('testimonials')}
              isWhiteTheme={isWhiteTheme}
            >
              Reviews
            </ButtonNav>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={handleGetStarted}
              className="rounded-sm border border-solid border-transparent transition-all duration-300 ease-out flex items-center justify-center bg-[#FF5F23] text-white hover:bg-[#FF5F23]/90 font-medium text-sm h-9 px-6 shadow-md cursor-pointer"
            >
              Get Started
            </button>
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
              <ButtonNav 
                onClick={() => scrollToSection('services')}
                className="block py-2 text-lg"
                isWhiteTheme={isWhiteTheme}
              >
                Services
              </ButtonNav>
              <ButtonNav 
                onClick={() => scrollToSection('unique-selling-points')}
                className="text-lg"
                isWhiteTheme={isWhiteTheme}
              >
                Why Us
              </ButtonNav>
              <ButtonNav 
                onClick={() => scrollToSection('results')}
                className="text-lg"
                isWhiteTheme={isWhiteTheme}
              >
                Results
              </ButtonNav>
              <ButtonNav 
                onClick={() => scrollToSection('testimonials')}
                className="text-lg"
                isWhiteTheme={isWhiteTheme}
              >
                Reviews
              </ButtonNav>
              {/* Get Started button removed from mobile menu as requested */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
