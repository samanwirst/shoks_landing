"use client";

import { motion } from 'framer-motion';

interface ButtonNavProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export function ButtonNav({ children, onClick, className = "", style }: ButtonNavProps) {
  return (
    <motion.button
      onClick={onClick}
      style={style}
      className={`text-sm transition-colors duration-300 ease-out cursor-pointer text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white ${className}`}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      {children}
    </motion.button>
  );
}
