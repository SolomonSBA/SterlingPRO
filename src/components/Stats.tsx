import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Stats: React.FC = () => {
  const stats = [
    { value: '17+', label: "Serving Nigeria's top banks" },
    { value: '312,000,000+', label: 'Enabling millions of banking transactions monthly' },
    { value: '10,000+', label: 'Powering over a 10k ATMs' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 max-w-5xl mx-auto leading-tight">
            As an exceptional payment scheme, we disrupt and lead innovations to build world class payment technologies for financial institutions and fintech, in line with business and evolving customer needs.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center px-6 py-3 bg-[#D80369] text-white font-medium rounded-lg hover:bg-[#b8025a] transition-colors shadow-lg shadow-[#D80369]/25"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#D80369] mb-3">
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

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
            We build our products with top technologies and using tested processes, regulations and expertise to ensure a supercharged customer experience.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D80369] to-pink-500 rounded-3xl p-8 sm:p-12 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Boost your proposition with SBA
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Start delivering exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+2348077394817"
              className="px-8 py-3 bg-white text-[#D80369] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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
