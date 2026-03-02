import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const SAMPLE_TRANSACTIONS = [
  { amount: '₦485,000', channel: 'TWIG Secure ATM' },
  { amount: '₦1.2M', channel: 'TWIG Secure POS' },
  { amount: '₦250,000', channel: 'Biometric Payments' },
  { amount: '₦780,000', channel: 'TWIG Secure ATM' },
  { amount: '₦95,000', channel: 'Instant PIN' },
];

const TransactAtScale: React.FC = () => {
  const [txIndex, setTxIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTxIndex((i) => (i + 1) % SAMPLE_TRANSACTIONS.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { value: '₦1B+', label: 'In Transactions Processed' },
    { value: '17+', label: 'Bank Partners' },
    { value: '312M+', label: 'Monthly Txns' },
    { value: '10K+', label: 'ATMs Powered' },
  ];

  const currentTx = SAMPLE_TRANSACTIONS[txIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/80 pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="absolute inset-0 bg-[url('https://sterlingprong.com/wp-content/uploads/2023/01/bg-mesh.svg')] opacity-[0.07] bg-cover" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Headline + copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Where Africa{' '}
              <span className="text-[#E91E8C]">Transacts</span>
              <br />
              at Scale.
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
              SterlingPRO Business Applications delivers battle-tested EFT and payment technologies to Nigeria's leading financial institutions now marking over a billion Naira in processed transactions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E91E8C] text-white font-semibold rounded-lg hover:bg-[#C41A78] transition-colors shadow-lg shadow-[#E91E8C]/25"
              >
                Book a Demo
              </Link>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Latest Transaction + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Latest Transaction card – cycles so the same figure isn’t always shown */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-5 md:p-6 min-h-[120px]">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Latest Transaction
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={txIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{currentTx.amount}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Approved · {currentTx.channel}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl border border-gray-200 p-4 md:p-5 text-center shadow-sm"
                >
                  <p className="text-xl md:text-2xl font-bold text-[#E91E8C]">{stat.value}</p>
                  <p className="mt-0.5 text-xs md:text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransactAtScale;
