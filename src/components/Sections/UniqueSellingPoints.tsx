"use client";

import { motion, Variants } from 'framer-motion';
import { Lock, TrendingUp, Users, Zap, Clock, Shield } from 'lucide-react';

const exclusiveFeatures = [
  {
    icon: Lock,
    title: "Exclusive Practice Tests",
    description: "Access practice tests available nowhere else - carefully crafted by our expert team",
    badge: "Exclusive"
  },
  {
    icon: TrendingUp,
    title: "Personalized Analytics",
    description: "Advanced performance tracking that adapts to your learning patterns and identifies improvement areas",
    badge: "AI-Powered"
  },
  {
    icon: Users,
    title: "Limited Cohort Size",
    description: "Maximum 20 students per cohort for focused, personalized attention from expert instructors",
    badge: "Limited Seats"
  }
];

const scarcityIndicators = [
  {
    icon: Clock,
    text: "Only 12 spots remaining this quarter"
  },
  {
    icon: Shield,
    text: "Exclusive access - not available to the general public"
  },
  {
    icon: Zap,
    text: "Early bird pricing ends in 5 days"
  }
];

export default function UniqueSellingPoints() {
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
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF5F23]/10 border border-[#FF5F23]/20 mb-6">
            <Lock className="w-4 h-4 text-[#FF5F23] mr-2" />
            <span className="text-[#FF5F23] font-medium text-sm">Exclusive Access</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            What Makes Us Different
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Access benefits and resources that simply aren&apos;t available anywhere else
          </motion.p>
        </motion.div>

        {/* Exclusive Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {exclusiveFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 rounded-2xl border transition-all duration-300 bg-gray-50 border-gray-200 hover:border-[#FF5F23] hover:shadow-xl dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-[#FF5F23] dark:border-2 dark:hover:shadow-[0_0_20px_rgba(255,95,35,0.7)]"
            >
              {/* Badge */}
              <div className="absolute -top-3 left-6">
                <span className="bg-[#FF5F23] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {feature.badge}
                </span>
              </div>

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

        {/* Scarcity Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="p-8 md:p-12 rounded-3xl border mb-16 bg-gradient-to-r from-red-50 to-orange-50 border-red-200 dark:from-red-950/20 dark:to-orange-950/20 dark:border-red-900/30"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Limited Availability
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We don&apos;t just teach test-taking tricks—we build genuine understanding that receives personalized attention
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {scarcityIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center p-4 rounded-xl bg-white/80 dark:bg-gray-900/50"
              >
                <indicator.icon className="w-5 h-5 text-[#FF5F23] mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {indicator.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Students Choose Shoks SAT
          </h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
            While other programs offer generic preparation, we provide exclusive access to
            personalized strategies and resources that adapt to your unique learning style.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
