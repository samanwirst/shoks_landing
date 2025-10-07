"use client";

import { motion } from 'framer-motion';
import { Award, BarChart3, BookOpen, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';

import Link from 'next/link';

const features = [
  {
    icon: BookOpen,
    title: "Exclusive Practice Tests",
    description: "Access carefully designed practice tests available nowhere else, created by SAT experts."
  },
  {
    icon: BarChart3,
    title: "Personalized Analytics",
    description: "Track your improvement with detailed performance analytics tailored to your learning style."
  },
  {
    icon: Award,
    title: "Proven Strategies",
    description: "Master time-tested techniques that have helped hundreds boost their scores significantly."
  }
];

const credibilityStats = [
  { number: "100+", label: "Students Helped" },
  { number: "150", label: "Average Score Increase" },
  { number: "10+", label: "Years Experience" }
];

export default function SolutionPresentation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-gray-50 text-gray-900 dark:bg-background/98 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-[#FF5F23] mr-2" />
            <span className="text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
              The Shoks SAT Method
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Transform Your SAT Performance
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Our exclusive methodology combines personalized preparation with proven strategies,
            designed by SAT experts who&apos;ve helped hundreds gain admission to top colleges.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl border transition-all duration-300 bg-white border-gray-200 hover:border-[#FF5F23]/50 hover:shadow-xl dark:bg-gray-900/50 dark:border-2 dark:border-gray-800 dark:hover:border-[#FF5F23] dark:hover:shadow-[0_0_20px_rgba(255,95,35,0.7)]"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#FF5F23]/10 dark:bg-[#FF5F23]/20">
                <feature.icon className="w-8 h-8 text-[#FF5F23]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Authority Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="p-8 md:p-12 rounded-3xl border mb-16 from-white to-gray-50 border-gray-200 dark:from-gray-900/80 dark:to-gray-800/80 dark:border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-[#FF5F23] mr-2" />
                <span className="text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Expert-Led Program
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Designed by SAT Experts
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
                Don&apos;t let another year pass by wondering &quot;what if?&quot; Your dream college is waiting.
              </p>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Trusted by students at Colby, Stanford, Brown, and more
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {credibilityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FF5F23] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Enrollment Button - Centered outside the box */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center"
        >
          <Link
            href="https://forms.gle/C2k3btULzK2sdcsk7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-out inline-flex items-center gap-2 bg-[#FF5F23] hover:shadow-[0_0_20px_rgba(255,95,35,0.7)] text-white font-semibold py-3 px-6 rounded-lg"
          >
            Enroll in the Course
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}