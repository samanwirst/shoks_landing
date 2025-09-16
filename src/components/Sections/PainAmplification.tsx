"use client";

import { motion, Variants } from 'framer-motion';
import { AlertCircle, Clock, Target, TrendingDown } from 'lucide-react';

const anxieties = [
  {
    icon: AlertCircle,
    title: "Fear of Rejection",
    description: "Worried your dream college will slip away because of one test score?"
  },
  {
    icon: Clock,
    title: "Test Day Anxiety",
    description: "Terrified of underperforming when it matters most?"
  },
  {
    icon: Target,
    title: "Study Confusion",
    description: "Overwhelmed by countless prep materials with no clear direction?"
  },
  {
    icon: TrendingDown,
    title: "Score Plateau",
    description: "Stuck at the same score despite months of studying?"
  }
];

export default function PainAmplification() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            You&apos;re Not Alone in This
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Is the SAT standing between you and your future? Thousands of talented students feel exactly the same way.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {anxieties.map((anxiety, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl border transition-all duration-300 ease-out bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-lg dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:shadow-[0_0_10px_rgba(255,255,255,1)]"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-red-100 dark:bg-red-500/20">
                <anxiety.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{anxiety.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {anxiety.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-lg md:text-xl italic max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            &quot;Every high-achieving student faces these exact same fears. The difference? 
            Some find the right guidance to overcome them.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
