"use client";

import { motion, Variants } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarvinoz",
    role: "Booster Cohort - Advanced Track",
    content: "As it is my first time taking an online course, I can bravely say that it was more than I expected! Even better than offline. The course itself is amazing - lots of hw, good community and funny and at same time very strict teacher. Punishments for not doin the hw is also creative - I sent video of me tellin a poem. What I liked most is that Said explains everything in detail, if even only one student doesnt get it, he'll explain again and again until we understand the whole thing, he doesn't just skip. I dont feel shy asking questions in his classes and that helped me to progress a lott!!!!!!!! Community is also supportive - even if i send questions at 3 a.m, at least 3 people help me to understand it. Thank uuuu!!!!!!!",
    rating: 5,
    image: "/testimonials/sarvinoz.jpg"
  },
  {
    name: "Ulugbek",
    role: "Booster Cohort - Advanced Track",
    content: "I usually struggle with motivation, but this course gave me the feeling that someone was always present watching me. It is as if the course was designed by people who know how to impose that presence just enough to make sure that you actually do the work. I usually lack this motivation, so it helps me a lot.",
    rating: 5,
    image: "/testimonials/ulugbek.jpg"
  },
  {
    name: "Olzhas",
    role: "Booster Cohort - Advanced Track",
    content: "Alright so, this cohort is exceptional in terms of support I believe. To the extent where your instructor might quite literally call your parents and ask why you're not doing your homework. It's mentally appealing to know that someone stands up for your best interest not just in a 'regular' narrative manner, but rather in an actionable and effective way.",
    rating: 5,
    image: "/testimonials/olzhas.jpg"
  },
  {
    name: "Azamat",
    role: "Booster Cohort - Advanced Track",
    content: "So, I like Said, he is full of humor, energy and never minds to answer all those weird questions. Homework are quite a lot which is reasonable since input is also important from students. All in all I really hope to get 1500+ with him as I am fully dedicated for it.",
    rating: 5,
    image: "/testimonials/azamat.jpg"
  }
];

export default function Testimonials() {
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
    <section className="py-20 px-6 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
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
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              4.9/5 from 500+ students
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            What Our Students Say
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Hear directly from our Booster Cohort students about their learning experience
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl border bg-white border-gray-200 hover:bg-gray-50 shadow-lg hover:shadow-xl dark:bg-gray-900/50 dark:border-gray-700 dark:hover:bg-gray-900/70 dark:border-2 dark:hover:border-white dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <Star className="w-8 h-8 mb-4 text-gray-300 dark:text-gray-600" />
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Student Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gray-200 dark:bg-gray-700">
                  <span className="text-lg font-semibold text-[#FF5F23]">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
