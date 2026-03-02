import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 max-w-5xl mx-auto leading-tight">
            We build and run the payment infrastructure that Nigerian banks and fintechs rely on  so you can focus on growth, not plumbing.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center px-6 py-3 bg-[#E91E8C] text-white font-medium rounded-lg hover:bg-[#C41A78] transition-colors shadow-lg shadow-[#E91E8C]/25"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Build Future Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's build your future, together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proven tech, clear processes, and the expertise to keep you compliant and ahead of the curve.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#E91E8C] to-pink-500 rounded-3xl p-8 sm:p-12 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Boost your proposition with SBA
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Talk to us about your next rollout.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+2348077394817"
              className="px-8 py-3 bg-white text-[#E91E8C] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              +234 807 739 4817
            </a>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Request a Call Back
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
