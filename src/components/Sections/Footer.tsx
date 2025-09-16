"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:items-start items-center text-center md:text-left">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FF5F23]">Shoks SAT</h3>
              <p className="text-lg mb-6 max-w-md text-gray-600 dark:text-gray-300">
                Elevating SAT scores through personalized coaching and proven strategies.
                Join 1500+ successful students.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/company/shoks-sat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all duration-300 bg-gray-100/80 hover:bg-gray-200/80 border border-gray-300 text-gray-700 hover:text-blue-600 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/20 dark:text-white/80 dark:hover:text-blue-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/shoks_sat?utm_source=ig_web_button_share_sheet&igsh=MTU5dGF5Y3hwZG85cw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all duration-300 bg-gray-100/80 hover:bg-gray-200/80 border border-gray-300 text-gray-700 hover:text-pink-600 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/20 dark:text-white/80 dark:hover:text-pink-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://t.me/shoks_sat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all duration-300 bg-gray-100/80 hover:bg-gray-200/80 border border-gray-300 text-gray-700 hover:text-blue-500 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/20 dark:text-white/80 dark:hover:text-blue-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#solution" className="transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Our Solution
                  </a>
                </li>
                <li>
                  <a href="#unique-selling-points" className="transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Get Started</h4>
              <motion.a
                href="https://forms.gle/C2k3btULzK2sdcsk7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF5F23] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(255,95,35,0.7)] transition-all duration-150 ease-out shadow-lg inline-block"
              >
                Join Now
              </motion.a>
              <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
                Start your SAT success journey today
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t text-center border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400"
        >
          <p>© {currentYear} Shoks SAT. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
