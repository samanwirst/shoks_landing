"use client";

import { motion, Variants } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarvinoz",
    role: "Booster Cohort - Advanced Track",
    content: "Shoks helped me increase my score by 200 points!",
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



interface TestimonialsProps {
  isDarkTheme?: boolean;
}

export default function Testimonials({ isDarkTheme = true }: TestimonialsProps) {
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
    <section className={`py-20 px-6 ${isDarkTheme ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
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
            <span className={`ml-3 text-sm font-medium ${
              isDarkTheme ? 'text-gray-400' : 'text-gray-600'
            }`}>
              4.9/5 from 500+ students
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What Our Students Say
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
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
              className={`p-8 rounded-2xl border ${
                isDarkTheme 
                  ? 'bg-gray-900/50 border-gray-700 hover:bg-gray-900/70' 
                  : 'bg-white border-gray-200 hover:bg-gray-50 shadow-lg hover:shadow-xl'
              } transition-all duration-300`}
            >
              {/* Quote */}
              <div className="mb-6">
                <Star className={`w-8 h-8 mb-4 ${
                  isDarkTheme ? 'text-gray-600' : 'text-gray-300'
                }`} />
                <p className={`text-lg leading-relaxed ${
                  isDarkTheme ? 'text-gray-200' : 'text-gray-700'
                }`}>
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
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <span className="text-lg font-semibold text-[#FF5F23]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>






      </div>
    </section>
  );
}
