import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import deliverImage from "../assets/HomePage.jpg";
import teamImage from "../assets/teamImage.webp";
import sampleImage from "../assets/sampleImage.png";

const WhatWeDo: React.FC = () => {
  

  return (
    <section className="py-20 bg-gray-50" id="learnmore">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What We Do Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E91E8C]/10 to-transparent rounded-3xl"></div>
              <img
                src={sampleImage}
                alt="Payment technology"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-[#E91E8C] uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Tailored payment technologies that boost your business.
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We design and run the infrastructure behind your channels secure, PCI-aligned, and built to drive performance and profitability without the usual cost and complexity.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center px-6 py-3 bg-[#E91E8C] text-white font-medium rounded-lg hover:bg-[#C41A78] transition-colors shadow-lg shadow-[#E91E8C]/25"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        {/* Deliver Better Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Deliver better financial experiences
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We deep dive into the future of payments and build payment technologies that resonate with customers' current needs as well as improve and innovate on new ideas for improved experience for emerging payment trends.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img
              src={deliverImage}
              alt="Better financial experiences"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </div>

        {/* Our How Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our How</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              With unlimited industry knowledge we study and understand gaps that exist within the payment eco system and emerging future needs of financial institutions, and fintech, and in turn we build novel payment technologies that enable seamless and safe transactions for their customers across the globe.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#E91E8C] text-white font-medium rounded-lg hover:bg-[#C41A78] transition-colors shadow-lg shadow-[#E91E8C]/25"
            >
              Get in touch
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={teamImage}
              alt="Our team at work"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
