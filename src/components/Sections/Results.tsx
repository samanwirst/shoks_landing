"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import InfoModalWindow from "../ModalWindows/InfoModalWindow";

type ResultType = {
  name: string;
  ebrwScore: number;
  mathScore: number;
  improvement: string;
  certificateImgPath?: string;
  testimonial?: string;
  percentile?: string;
  grade?: string;
};

const results: ResultType[] = [
  {
    name: "Asomiddin Raimov",
    ebrwScore: 730,
    mathScore: 800,
    improvement: "+230",
    certificateImgPath: "",
    testimonial: "TESTING! I'm beyond excited to have reached my target SAT score! The lessons were clear, the practice tests were incredibly helpful, and the support from my instructors was outstanding. I couldn’t have done it without [School/Program Name].",
    percentile: "98th",
    grade: "11th"
  },
  {
    name: "Javohir Shomurodov",
    ebrwScore: 700,
    mathScore: 800,
    improvement: "+200",
    certificateImgPath: "",
    testimonial: "TESTING! Thanks to [School/Program Name], I was able to raise my SAT score by over 200 points! The personalized guidance and structured approach made studying much less stressful. I feel fully prepared for college applications now.",
    percentile: "99th",
    grade: "10th"
  },
  {
    name: "Daniel Ismagilov",
    ebrwScore: 780,
    mathScore: 780,
    improvement: "+260",
    certificateImgPath: "",
    testimonial: "I achieved the score I dreamed of, and I owe it to the amazing resources and support I received here. Every session was productive, and I learned strategies that truly worked. Highly recommend [School/Program Name]!",
    percentile: "97th",
    grade: "12th"
  },
  {
    name: "Sadula Rizaev",
    ebrwScore: 790,
    mathScore: 800,
    improvement: "+290",
    certificateImgPath: "",
    testimonial: "Getting my target SAT score seemed impossible at first, but [School/Program Name] made it achievable. The practice materials, mock exams, and dedicated instructors all contributed to my success. I'm so grateful!",
    percentile: "99th",
    grade: "12th"
  }
];

const DUPLICATES_COUNT = 4;

export default function Results() {
  const duration = Math.max(6, 20);
  const items: (ResultType & { __clone?: boolean; __cloneIndex?: number })[] = [
    ...results.map(r => ({ ...r, __clone: false })),
    ...Array.from({ length: DUPLICATES_COUNT }).flatMap((_, cloneIndex) =>
      results.map((r, i) => ({ ...r, __clone: true, __cloneIndex: i + cloneIndex * results.length }))
    ),
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ResultType | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const openModal = (r: ResultType) => {
    setSelected(r);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelected(null), 160);
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.08
      }
    }
  };

  const headerChild: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.995 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.08
      }
    })
  };

  return (
    <section className="py-20 px-6 bg-background text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={headerChild}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Real Students, Real Results
          </motion.h2>
          <motion.p
            variants={headerChild}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            See how our students transformed their SAT scores and gained admission to their dream colleges
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="w-full">
              <motion.div
                animate={mounted ? { x: ["0%", "-50%"] } : { x: "0%" }}
                transition={mounted ? { x: { repeat: Infinity, ease: "linear", duration } } : undefined}
                style={{ willChange: "transform" }}
                className="flex w-[200%] items-stretch gap-6 flex-nowrap"
              >
                {items.map((result, i) => {
                  const isClone = !!(result as any).__clone;
                  const visibleIndex = i % results.length;
                  const key = isClone ? `clone-${(result as any).__cloneIndex}` : `orig-${visibleIndex}`;
                  const canonical = results[visibleIndex];

                  return (
                    <motion.article
                      key={key + "-" + i}
                      variants={itemVariants}
                      initial="hidden"
                      animate={mounted ? "visible" : "hidden"}
                      custom={visibleIndex}
                      className={
                        `min-w-[300px] max-w-xs flex-shrink-0 p-6 rounded-2xl border bg-white border-gray-200 shadow-lg dark:bg-gray-900/50 dark:border-gray-700 transition-all duration-300 cursor-pointer`
                      }
                      role="button"
                      aria-label={`${canonical.name} — ${canonical.ebrwScore + canonical.mathScore} total`}
                      onClick={() => openModal(canonical)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openModal(canonical);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{canonical.name}</h3>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Booster Cohort Graduate
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#FF5F23]">
                            {canonical.ebrwScore + canonical.mathScore}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Total Score</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                          <div className="text-base font-semibold text-gray-900 dark:text-white">{canonical.ebrwScore}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">EBRW</div>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                          <div className="text-base font-semibold text-gray-900 dark:text-white">{canonical.mathScore}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Math</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center">
                          <TrendingUp className="w-4 h-4 inline-block mr-2" />
                          {canonical.improvement} points
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-20" aria-hidden>
            <div className="h-full w-full bg-gradient-to-r from-white to-transparent dark:from-black/80 dark:to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-20" aria-hidden>
            <div className="h-full w-full bg-gradient-to-l from-white to-transparent dark:from-black/80 dark:to-transparent" />
          </div>
        </div>

        <motion.div className="text-center mt-10">
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

      <InfoModalWindow
        isOpen={isOpen}
        onClose={closeModal}
        title={selected ? `${selected.name} — Details` : "Student details"}
        className="max-w-xs sm:max-w-md"
      >
        {selected ? (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white">{selected.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Booster Cohort Graduate</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#FF5F23]">{selected.ebrwScore + selected.mathScore}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Score</div>
              </div>
            </div>

            <hr className="my-4 border-gray-200 dark:border-gray-700" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">EBRW</div>
                <div className="text-base font-medium text-gray-900 dark:text-white">{selected.ebrwScore}</div>
              </div>

              <div>
                <div className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Math</div>
                <div className="text-base font-medium text-gray-900 dark:text-white">{selected.mathScore}</div>
              </div>

              <div className="sm:col-span-2">
                <div className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Improvement</div>
                <div className="text-base font-medium text-gray-900 dark:text-white">{selected.improvement}</div>
              </div>

              <div className="sm:col-span-2">
                <div className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Certificate image</div>
                <div className="min-h-[28px] text-sm text-gray-700 dark:text-gray-300">{selected.certificateImgPath}</div>
              </div>

              <div className="sm:col-span-2">
                <div className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Testimonial</div>
                <div className="min-h-[48px] whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300">{selected.testimonial}</div>
              </div>

              <div>
                <div className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Percentile</div>
                <div className="min-h-[28px] text-sm text-gray-700 dark:text-gray-300">{selected.percentile}</div>
              </div>

              <div>
                <div className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Grade</div>
                <div className="min-h-[28px] text-sm text-gray-700 dark:text-gray-300">{selected.grade}</div>
              </div>
            </div>

            <hr className="my-4 border-gray-200 dark:border-gray-700" />

            <div className="text-sm text-gray-600 dark:text-gray-400">
              Additional notes and context about the student's journey can be shown here.
            </div>
          </>
        ) : (
          <div className="text-sm text-gray-600 dark:text-gray-400">Loading…</div>
        )}
      </InfoModalWindow>
    </section>
  );
}
