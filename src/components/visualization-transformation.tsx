"use client";

import { motion, Variants } from 'framer-motion';
import { GraduationCap, Mail, Trophy, Heart, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const transformationScenarios = [
  {
    icon: Mail,
    title: "The Acceptance Letter",
    scenario: "Imagine opening acceptance letters from your dream colleges",
    description: "Your hands shake slightly as you open the email. 'Congratulations!' The word jumps off the screen. All those hours of preparation, all that growth - it led to this moment.",
    emotion: "Pure Joy"
  },
  {
    icon: Trophy,
    title: "Test Day Confidence",
    scenario: "Picture yourself confidently walking into the SAT exam, knowing you're ready",
    description: "You sit down at your desk, take a deep breath, and smile. This isn't the terrifying unknown anymore - you've prepared for this. You know exactly what to expect.",
    emotion: "Unshakeable Confidence"
  },
  {
    icon: GraduationCap,
    title: "College Success",
    scenario: "Envision thriving in your dream college environment",
    description: "Walking across campus, backpack full of possibilities. The skills you learned preparing for the SAT - discipline, strategy, confidence - serve you every single day.",
    emotion: "Limitless Potential"
  }
];

const beforeAfter = {
  before: {
    title: "Before Shoks SAT",
    points: [
      "Overwhelmed by test prep materials",
      "Anxious about test day",
      "Unsure about college prospects",
      "Lacking confidence in abilities"
    ]
  },
  after: {
    title: "After Shoks SAT",
    points: [
      "Clear, strategic study plan",
      "Excited and prepared for test day",
      "Confident about college applications",
      "Empowered with proven strategies"
    ]
  }
};

interface VisualizationTransformationProps {
  isDarkTheme?: boolean;
}

export default function VisualizationTransformation({ isDarkTheme = true }: VisualizationTransformationProps) {
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
    <section className={`py-20 px-6 ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
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
            <Sparkles className="w-8 h-8 text-[#FF5F23] mr-2" />
            <span className={`text-sm font-medium uppercase tracking-wide ${
              isDarkTheme ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Your Future Awaits
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Imagine Your Success
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Close your eyes and picture the moment when all your hard work pays off
          </motion.p>
        </motion.div>

        {/* Transformation Scenarios */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-12 mb-20"
        >
          {transformationScenarios.map((scenario, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    isDarkTheme ? 'bg-[#FF5F23]/20' : 'bg-[#FF5F23]/10'
                  }`}>
                    <scenario.icon className="w-6 h-6 text-[#FF5F23]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{scenario.title}</h3>
                    <span className={`text-sm font-medium ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Emotion: {scenario.emotion}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-4 text-[#FF5F23]">
                  {scenario.scenario}
                </h4>
                
                <p className={`text-lg leading-relaxed ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {scenario.description}
                </p>
              </div>

              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div className={`aspect-square rounded-3xl overflow-hidden relative ${
                  isDarkTheme 
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
                }`}>
                  {/* Dynamic images based on scenario */}
                  {index === 0 && (
                    <div className="relative w-full h-full">
                      <Image
                        src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Elegant letter on dark surface"
                        className="w-full h-full object-cover"
                        width={800}
                        height={600}
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <Mail className="w-8 h-8 text-[#FF5F23] mb-2" />
                        <p className="text-white font-semibold">Your acceptance awaits</p>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="relative w-full h-full">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Focused student in dark study environment"
                        className="w-full h-full object-cover"
                        width={800}
                        height={600}
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <Trophy className="w-8 h-8 text-[#FF5F23] mb-2" />
                        <p className="text-white font-semibold">Confidence in action</p>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="relative w-full h-full">
                      <Image
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Modern university architecture at dusk"
                        className="w-full h-full object-cover"
                        width={800}
                        height={600}
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <GraduationCap className="w-8 h-8 text-[#FF5F23] mb-2" />
                        <p className="text-white font-semibold">Your campus journey</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Before & After Transformation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Your Transformation Journey
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Before */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkTheme 
                  ? 'bg-red-950/20 border-red-900/30' 
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <h4 className="text-xl font-bold mb-6 text-red-500">{beforeAfter.before.title}</h4>
              <ul className="space-y-3">
                {beforeAfter.before.points.map((point, index) => (
                  <li key={index} className={`flex items-start ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <span className="text-red-500 mr-2">×</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Arrow */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                isDarkTheme ? 'bg-[#FF5F23]/20' : 'bg-[#FF5F23]/10'
              }`}>
                <ArrowRight className="w-8 h-8 text-[#FF5F23]" />
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkTheme 
                  ? 'bg-green-950/20 border-green-900/30' 
                  : 'bg-green-50 border-green-200'
              }`}
            >
              <h4 className="text-xl font-bold mb-6 text-green-500">{beforeAfter.after.title}</h4>
              <ul className="space-y-3">
                {beforeAfter.after.points.map((point, index) => (
                  <li key={index} className={`flex items-start ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <span className="text-green-500 mr-2">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Emotional Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className={`text-center p-12 rounded-3xl ${
            isDarkTheme 
              ? 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700' 
              : 'bg-gradient-to-r from-gray-50 to-white border border-gray-200'
          }`}
        >
          <Heart className="w-12 h-12 text-[#FF5F23] mx-auto mb-6" />
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Your Future Self Is Waiting
          </h3>
          
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto mb-8 ${
            isDarkTheme ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Every day you wait is another day your dreams remain just dreams. 
            The student who achieves their goals isn&apos;t the smartest - they&apos;re the one who takes action.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF5F23] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#FF5F23]/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Begin Your Transformation Today
          </motion.button>
          
          <p className={`text-sm mt-6 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
            Join the hundreds of students who&apos;ve already transformed their futures
          </p>
        </motion.div>
      </div>
    </section>
  );
}
