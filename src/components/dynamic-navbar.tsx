"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function DynamicNavbar() {
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

    const navbarVariants = {
        top: {
            height: '80px',
            backgroundColor: 'rgba(10, 10, 10, 0)',
            backdropFilter: 'blur(0px)',
        },
        scrolled: {
            height: '60px',
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        }
    };

    const contentVariants = {
        top: { scale: 1, y: 0 },
        scrolled: { scale: 0.95, y: 0 },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    return (
        <motion.nav
            variants={navbarVariants}
            animate={scrolled ? 'scrolled' : 'top'}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-50 w-full"
        >
            <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
                <motion.div
                    variants={contentVariants}
                    animate={scrolled ? 'scrolled' : 'top'}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex items-center justify-between w-full"
                >
                    <Link href="/" passHref>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <Image
                                src="/logo/shoks-logo.png"
                                alt="Shoks SAT Logo"
                                width={32}
                                height={16}
                                className="transition-transform duration-300 ease-in-out"
                            />
                            <span className="font-bold text-lg text-white">Shoks SAT</span>
                        </div>
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center">
                        <Link href="#services" className="text-sm text-gray-300 hover:text-white transition-colors mr-8">Services</Link>
                        <Link href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors" style={{
                            marginRight: 'calc(2rem + var(--navbar-orb-active, 0) * 3rem)',
                            transition: 'margin-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}>Testimonials</Link>
                        <Link href="#why-us" className="text-sm text-gray-300 hover:text-white transition-colors" style={{
                            marginLeft: 'calc(0rem + var(--navbar-orb-active, 0) * 1rem)',
                            marginRight: '2rem',
                            transition: 'margin-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}>Why Us</Link>
                        <Link href="#your-future" className="text-sm text-gray-300 hover:text-white transition-colors">Your Future</Link>
                    </div>

                    <div className="hidden md:block">
                        <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#FF5F23] text-white hover:bg-[#FF5F23]/90 font-medium text-sm h-9 px-6 shadow-md">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
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
                        className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg shadow-lg"
                    >
                        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col items-center gap-4">
                            <Link href="#services" className="text-lg text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link href="#testimonials" className="text-lg text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Testimonials</Link>
                            <Link href="#why-us" className="text-lg text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Why Us</Link>
                            <Link href="#your-future" className="text-lg text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Your Future</Link>
                            <button className="w-full mt-2 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#FF5F23] text-white hover:bg-[#FF5F23]/90 font-medium text-sm h-10 px-6 shadow-md">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
