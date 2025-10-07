import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Award,
  BarChart3,
  BookOpen,
  Users,
  Star,
  ArrowRight,
  Layers
} from "lucide-react";

import { useTheme } from "@/hooks/useTheme";

import ImageViewModalWindow from "../ModalWindows/ImageViewModalWindow";

import Link from "next/link";

const features = [
  {
    icon: BookOpen,
    title: "Practice Tests Library",
    description: "Full-length SAT mocks with realistic timing and question distribution — updated regularly."
  },
  {
    icon: BarChart3,
    title: "Deep Mock Analytics",
    description: "Per-question breakdowns, skill heatmaps, time-on-task and predictive score estimates."
  },
  {
    icon: Award,
    title: "Adaptive Recommendations",
    description: "AI-driven study plans that adapt to your strengths and weak spots after each mock."
  },
  {
    icon: Layers,
    title: "Module-Based Practice",
    description: "Pick topic modules (Math/EBRW/Essay) and build focused practice sessions."
  }
];

const platformStats = [
  { number: "+1200", label: "Mocks Taken" },
  { number: "+85", label: "Avg Score Increase (pts)" },
  { number: "98%", label: "Satisfied Students" }
];

const screenshotsLight = [
  "/platform/1.png",
  "/platform/2.png",
  "/platform/3.png",
  "/platform/4.png"
];

const screenshotsDark = screenshotsLight.map(path =>
  path.replace(/(\.\w+)$/, "-dark$1")
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Platform() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";
  const shots = isDark ? screenshotsDark : screenshotsLight;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openImage = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <section id="platform" className="py-20 px-6 bg-gray-50 text-gray-900 dark:bg-background/95 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-[#FF5F23] mr-2" />
            <span className="text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
              Shoks Platform
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            The SAT platform that actually moves the needle
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Practice smarter — full mocks, granular analytics, adaptive study plans and peer benchmarks all in one place.
            Upload screenshots, export reports, and watch your average score climb.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-6 rounded-2xl border-2 bg-white border-gray-200 dark:bg-gray-900/50 dark:border-gray-800 hover:shadow-lg transition-all duration-250 dark:hover:shadow-[0_0_20px_rgba(255,95,35,0.7)] dark:hover:border-[#FF5F23]"
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-[#FF5F23]/10 dark:bg-[#FF5F23]/20">
                <f.icon className="w-6 h-6 text-[#FF5F23]" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats + CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="p-8 md:p-12 rounded-3xl border mb-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/80 dark:to-gray-800/80 border-gray-200 dark:border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-[#FF5F23] mr-2" />
                <span className="text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">Trusted & Tested</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3">Practice. Analyze. Improve.</h3>

              <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                Every mock you take adds to your profile: we track time distribution, common mistakes, weak topics and provide
                focused practice to remove those weak spots.
              </p>

              <Link
                href="https://t.me/shoksl_support"
                className="inline-flex items-center gap-2 bg-[#FF5F23] hover:shadow-[0_0_20px_rgba(255,95,35,0.7)] text-white font-semibold py-3 px-5 rounded-lg transition-all duration-300 ease-out"
              >
                Start a Mock
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
              {platformStats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#FF5F23]">{s.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Screenshots gallery (compact 2x2 block) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-6">Inside the platform</motion.h3>

          {/* Compact grid: 2x2 on small+ screens, 1 column on very small screens */}
          <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shots.slice(0, 4).map((shot, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`rounded-lg overflow-hidden border bg-white border-gray-200 dark:bg-gray-900/60 dark:border-gray-800 transition-shadow cursor-pointer`}
                  onClick={() => openImage(i)}
                >
                  <div className="relative w-full aspect-[16/9]">
                    <img
                      src={shot}
                      className="object-cover w-full h-full block"
                      loading="lazy"
                      alt={`platform-${i}`}
                      draggable={false}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div variants={itemVariants} className="mt-6 flex justify-center">
          <Link href="https://t.me/shoksl_support" className="inline-flex items-center gap-3 bg-[#FF5F23] border border-[#FF5F23] text-white hover:shadow-[0_0_20px_rgba(255,95,35,0.7)] font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-out" >
            Get started <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Image modal (gallery enabled: pass images & current index) */}
      <ImageViewModalWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        images={shots}
        currentIndex={modalIndex}
        onIndexChange={(idx) => setModalIndex(idx)}
        title="Platform screenshot"
      />
    </section>
  );
}