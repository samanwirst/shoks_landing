"use client";

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = "",
  target,
  rel
}: ButtonProps) {
  const baseClasses = "px-8 py-4 rounded-sm text-base font-bold transition-all duration-300 ease-out cursor-pointer inline-block";
  
  const variantClasses = {
    primary: "bg-[#FF5F23] hover:bg-[#FF5F23]/90 text-white shadow-md",
    secondary: "bg-white/5 hover:bg-white/10 border border-white/20 text-white/80 hover:text-white backdrop-blur-sm"
  };

  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      {children}
    </Component>
  );
}
