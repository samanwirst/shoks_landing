"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Dark Theme: Elegant floating shapes
interface ElegantShapeProps {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  className?: string;
}

function ElegantShape({
  delay = 0,
  width = 200,
  height = 60,
  rotate = 0,
  gradient = "from-indigo-500/[0.08]",
  className = "",
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotate - 10 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: rotate,
      }}
      transition={{
        duration: 2,
        delay,
        ease: "easeOut",
      }}
      style={{
        width,
        height,
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          rotate: [rotate, rotate + 5, rotate - 5, rotate],
          scale: [1, 1.02, 0.98, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

// White Theme: Gradient mesh pattern with decorative elements
function LightThemeBackground({ density = "medium" }: { density?: "low" | "medium" | "high" }) {
  const getPatternDensity = () => {
    switch (density) {
      case "low": return { gridSize: 120, dotCount: 15 };
      case "high": return { gridSize: 60, dotCount: 35 };
      default: return { gridSize: 80, dotCount: 25 };
    }
  };

  const { gridSize, dotCount } = getPatternDensity();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Mesh Background */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #FF5F2350 0%, transparent 70%),
            radial-gradient(circle at 80% 20%, #3b82f650 0%, transparent 70%),
            radial-gradient(circle at 40% 80%, #6b728050 0%, transparent 70%),
            radial-gradient(circle at 90% 70%, #f9731650 0%, transparent 70%),
            radial-gradient(circle at 10% 90%, #6366f150 0%, transparent 70%)
          `
        }}
      />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(107, 114, 128, 0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(107, 114, 128, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`
        }}
      />

      {/* Animated Decorative Dots */}
      {Array.from({ length: dotCount }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 23) % 100}%`,
            backgroundColor: [
              '#FF5F23',
              '#3b82f6', 
              '#6b7280',
              '#f97316',
              '#6366f1',
              '#a855f7'
            ][i % 6],
            opacity: 0.8
          }}
        />
      ))}

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 1000 1000">
        <motion.path
          d="M0,300 Q250,200 500,300 T1000,300"
          stroke="#FF5F23"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
        <motion.path
          d="M0,700 Q250,600 500,700 T1000,700"
          stroke="#3b82f6"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.path
          d="M200,0 Q300,250 200,500 T200,1000"
          stroke="#6b7280"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 4, delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

// Dark Theme: Original elegant shapes
function DarkThemeBackground({ density = "medium" }: { density?: "low" | "medium" | "high" }) {
  const getShapes = () => {
    const baseShapes = [
      {
        delay: 0.2,
        width: 300,
        height: 80,
        rotate: 15,
        gradient: "from-indigo-500/[0.08]",
        className: "left-[-5%] top-[10%]",
      },
      {
        delay: 0.4,
        width: 250,
        height: 70,
        rotate: -20,
        gradient: "from-rose-500/[0.08]",
        className: "right-[-3%] top-[60%]",
      },
      {
        delay: 0.6,
        width: 200,
        height: 50,
        rotate: 8,
        gradient: "from-violet-500/[0.08]",
        className: "left-[10%] bottom-[15%]",
      },
    ];

    if (density === "high") {
      return [
        ...baseShapes,
        {
          delay: 0.8,
          width: 180,
          height: 45,
          rotate: -12,
          gradient: "from-amber-500/[0.06]",
          className: "right-[15%] top-[20%]",
        },
        {
          delay: 1.0,
          width: 150,
          height: 40,
          rotate: 25,
          gradient: "from-cyan-500/[0.06]",
          className: "left-[20%] top-[30%]",
        },
        {
          delay: 1.2,
          width: 120,
          height: 35,
          rotate: -18,
          gradient: "from-emerald-500/[0.06]",
          className: "right-[8%] bottom-[25%]",
        },
      ];
    }

    return baseShapes;
  };

  const shapes = getShapes();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <ElegantShape
          key={index}
          delay={shape.delay}
          width={shape.width}
          height={shape.height}
          rotate={shape.rotate}
          gradient={shape.gradient}
          className={shape.className}
        />
      ))}
    </div>
  );
}

interface BackgroundShapesProps {
  variant?: "light" | "dark";
  density?: "low" | "medium" | "high";
}

export function BackgroundShapes({ variant = "dark", density = "medium" }: BackgroundShapesProps) {
  if (variant === "light") {
    return <LightThemeBackground density={density} />;
  }
  
  return <DarkThemeBackground density={density} />;
}
