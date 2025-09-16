'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeInUp = (duration = 0.4, y = 15) => ({
    hidden: { opacity: 0, y },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration },
    },
});

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.15,
        },
    },
};

const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
    hover: {
        scale: 1.00,
        transition: { duration: 0.15 },
    },
};

const baseSocialBtn =
    "p-3 rounded-full transition-all duration-300 bg-gray-100/80 hover:bg-gray-200/80 border border-gray-300 text-gray-700";

export function Hero({
    title = "Elevate Your SAT",
    children,
}: {
    title?: string;
    children?: React.ReactNode;
}) {
    const scrollToSolution = () => {
        const solutionSection = document.querySelector('[data-section="solution"]');
        if (solutionSection) {
            solutionSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div id="hero" className={cn(`relative min-h-screen w-full overflow-hidden bg-background`)}>

            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="w-full max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Title */}
                    <motion.h1
                        variants={fadeInUp(0.5, 20)}
                        className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700 dark:text-white">
                            {title}
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeInUp()}
                        className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-white mb-8"
                    >
                        Join the community of 1500+ scorers
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={buttonVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        style={{ pointerEvents: 'auto' }}
                    >
                        <motion.a
                            href="https://forms.gle/C2k3btULzK2sdcsk7"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={buttonVariants}
                            whileHover="hover"
                            className="bg-[#FF5F23] hover:bg-[#FF5F23]/90 dark:hover:bg-[#FF5F23] text-white px-8 py-4 rounded-sm text-base font-bold hover:shadow-[0_0_20px_rgba(255,95,35,0.7)] w-full sm:w-auto border border-[#FF5F23]/20 inline-block cursor-pointer"
                            style={{
                                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            }}
                        >
                            Get Started
                        </motion.a>
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            onClick={scrollToSolution}
                            className="px-8 py-4 rounded-sm text-base font-bold w-full sm:w-auto backdrop-blur-sm cursor-pointer bg-gray-100/80 hover:bg-gray-200/80 border border-gray-300 text-gray-700 hover:text-gray-900 dark:bg-white dark:hover:bg-white dark:hover:shadow-[0_0_10px_rgba(255,255,255,1)]"
                            style={{
                                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        variants={fadeInUp()}
                        className="mt-8 flex justify-center items-center gap-6"
                        style={{ pointerEvents: 'auto' }}
                    >
                        <motion.a
                            href="https://www.linkedin.com/company/shoks-sat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.0 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${baseSocialBtn} hover:text-blue-600 dark:bg-white dark:hover:bg-white dark:hover:shadow-[0_0_10px_rgba(255,255,255,1)]`}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/shoks_sat?utm_source=ig_web_button_share_sheet&igsh=MTU5dGF5Y3hwZG85cw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.0 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${baseSocialBtn} hover:text-pink-600 dark:bg-white dark:hover:bg-white dark:hover:shadow-[0_0_10px_rgba(255,255,255,1)]`}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://t.me/shoks_sat"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.0 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${baseSocialBtn} hover:text-blue-500 dark:bg-white dark:hover:bg-white dark:hover:shadow-[0_0_10px_rgba(255,255,255,1)]`}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Children Content */}
            {children && <div className="relative z-10 mt-8">{children}</div>}
        </div>
    );
}
