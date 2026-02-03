import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Source: sterlingprong.com home hero
  const heroImage = "https://sterlingprong.com/wp-content/uploads/2023/02/home-page-image.png";

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-white via-white to-pink-50/30">
      {/* Background Decorations */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-bl from-[#D80369]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-to-tr from-pink-100/50 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Disrupting the{' '}
              <span className="relative">
                payment eco
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#D80369" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>{' '}
              system across the globe
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              With our products, we support banks and fintechs to build products that improve service delivery for payments and provide other value added services to their customers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="#learnmore"
                className="inline-flex items-center text-gray-900 font-semibold hover:text-[#D80369] transition-colors group"
              >
                Learn more &gt;&gt;
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Decorative curved line */}
            <svg
              className="absolute -top-8 right-0 w-32 h-32 text-[#D80369]"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M90 10C90 50 50 90 10 90"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 6"
              />
            </svg>
            
            {/* Image Container with gradient border */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D80369]/20 via-pink-200/30 to-transparent rounded-3xl blur-sm"></div>
              <div className="relative bg-gradient-to-br from-pink-100 to-pink-50 p-2 rounded-3xl shadow-2xl">
                <img
                  src={heroImage}
                  alt="Payment terminal in use"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
            
            {/* Floating decoration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#D80369] to-pink-400 rounded-2xl opacity-20 blur-xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
