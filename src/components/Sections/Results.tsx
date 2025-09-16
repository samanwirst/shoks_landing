"use client";

import { motion, Variants } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const results = [
  {
    name: "Asomiddin Raimov",
    totalScore: 1530,
    ebrwScore: 730,
    mathScore: 800,
    improvement: "+230"
  },
  {
    name: "Javohir Shomurodov",
    totalScore: 1500,
    ebrwScore: 700,
    mathScore: 800,
    improvement: "+200"
  },
  {
    name: "Daniel Ismagilov",
    totalScore: 1560,
    ebrwScore: 780,
    mathScore: 780,
    improvement: "+260"
  },
  {
    name: "Sadula Rizaev",
    totalScore: 1590,
    ebrwScore: 790,
    mathScore: 800,
    improvement: "+290"
  }
];

export default function Results() {
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-background text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
            Real Students, Real Results
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            See how our students transformed their SAT scores and gained admission to their dream colleges
          </motion.p>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl border bg-white border-gray-200 hover:bg-gray-50 shadow-lg hover:shadow-xl dark:bg-gray-900/50 dark:border-gray-700 dark:hover:bg-gray-900/70 dark:border-2 dark:hover:border-white dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-300"
            >
              {/* Student Name */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{result.name}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Booster Cohort Graduate
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#FF5F23]">
                    {result.totalScore}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total Score
                  </div>
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{result.ebrwScore}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">EBRW</div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{result.mathScore}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Math</div>
                </div>
              </div>

              {/* Improvement Badge */}
              <div className="flex items-center justify-center">
                <div className="bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center">
                  <TrendingUp className="w-4 h-4 inline-block mr-2" />
                  {result.improvement} points
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="text-center"
        >
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Ready to achieve your target SAT score? Join our next cohort and get personalized coaching.
          </p>
          <motion.a
            href="https://forms.gle/C2k3btULzK2sdcsk7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF5F23] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FF5F23] hover:shadow-[0_0_20px_rgba(255,95,35,0.7)] transition-all duration-150 ease-out shadow-lg inline-block"
          >
            Start Your Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
