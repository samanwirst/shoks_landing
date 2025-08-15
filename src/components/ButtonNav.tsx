"use client";

import { motion } from 'framer-motion';

interface ButtonNavProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  isWhiteTheme?: boolean;
  style?: React.CSSProperties;
}

export function ButtonNav({ children, onClick, className = "", isWhiteTheme = false, style }: ButtonNavProps) {
  return (
    <motion.button 
      onClick={onClick}
      style={style}
      className={`text-sm transition-colors duration-300 ease-out cursor-pointer ${
        isWhiteTheme 
          ? 'text-gray-600 hover:text-gray-900' 
          : 'text-gray-300 hover:text-white'
      } ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      {children}
    </motion.button>
  );
}
