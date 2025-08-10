"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function DynamicNavbarWhite() {
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-black/90 backdrop-blur-lg shadow-sm">
            <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
                {/* Left Side - Logo */}
                <div className="flex items-center">
                    <Link href="/" passHref>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <Image
                                src="/logo/shoks-logo.png"
                                alt="Shoks SAT Logo"
                                width={32}
                                height={16}
                            />
                            <span className="font-bold text-lg text-white">Shoks SAT</span>
                        </div>
                    </Link>
                </div>
                
                {/* Center - Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
                    <button 
                        onClick={() => scrollToSection('services')}
                        className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        Services
                    </button>
                    <button 
                        onClick={() => scrollToSection('unique-selling-points')}
                        className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        Why Us
                    </button>
                    <button 
                        onClick={() => scrollToSection('results')}
                        className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        Results
                    </button>
                    <button 
                        onClick={() => scrollToSection('testimonials')}
                        className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        Reviews
                    </button>
                </div>

                {/* Right Side - Get Started Button */}
                <div className="hidden md:block">
                    <button 
                        onClick={handleGetStarted}
                        className="rounded-full bg-[#FF5F23] text-white hover:bg-[#FF5F23]/90 font-medium text-sm h-9 px-6 shadow-md transition-colors"
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden ml-auto">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg shadow-lg border-t border-gray-800">
                    <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col items-center gap-6">
                        <button 
                            onClick={() => scrollToSection('services')}
                            className="text-lg text-slate-300 hover:text-white transition-colors"
                        >
                            Services
                        </button>
                        <button 
                            onClick={() => scrollToSection('unique-selling-points')}
                            className="text-lg text-slate-300 hover:text-white transition-colors"
                        >
                            Why Us
                        </button>
                        <button 
                            onClick={() => scrollToSection('results')}
                            className="text-lg text-slate-300 hover:text-white transition-colors"
                        >
                            Results
                        </button>
                        <button 
                            onClick={() => scrollToSection('testimonials')}
                            className="text-lg text-slate-300 hover:text-white transition-colors"
                        >
                            Reviews
                        </button>
                        <button 
                            onClick={handleGetStarted}
                            className="w-full mt-4 rounded-full bg-[#FF5F23] text-white hover:bg-[#FF5F23]/90 font-medium text-sm h-12 px-6 shadow-md transition-colors"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
