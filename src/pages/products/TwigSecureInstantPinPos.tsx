import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import posImg from '../../assets/Group-36-1.png';

const TwigSecureInstantPinPos: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/80 px-6 md:px-10 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(233,30,140,0.10),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(2,8,23,0.06),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700">
              TWIG Secure Instant PIN · POS
            </p>
            <h1 className="mt-4 text-2xl md:text-4xl font-bold text-[#020817] leading-tight">
              PIN Selection on <span className="text-[#E91E8C]">POS</span>
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-lg leading-relaxed">
              Enable customers to securely select or reset their payment card PIN at a POS terminal within the branch, with
              assistance from bank staff where required, or offsite, with a merchant POS.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#E91E8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#C41A78] transition-colors shadow-lg shadow-[#E91E8C]/20"
              >
                Request Demo
              </Link>
              <Link
                to="/products/twig-secure-instant-pin"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-800 hover:border-[#E91E8C]/30 hover:text-[#E91E8C] transition-colors"
              >
                Back to Suite
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#E91E8C]/15 to-transparent blur-2xl rounded-full" />
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
              <img src={posImg} alt="POS terminal" className="w-full h-56 object-contain" />
              <div className="mt-4 rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Secure PIN Services Within the Branch</p>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  Provide assisted PIN selection using POS terminals deployed within the branch environment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-xl md:text-3xl font-bold text-[#020817]">Secure PIN Services Within the Branch</h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              TWIG Secure Instant PIN allows banks to provide assisted PIN selection using POS terminals deployed within
              the branch environment.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Customers insert their payment card into the terminal, complete the required verification process, and securely
              enter and confirm their new PIN. The PIN update is then transmitted to the card management system for
              immediate activation.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              This provides a secure and controlled environment for customers who prefer in-branch assistance.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                How POS PIN Selection Supports Card Management
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Supports assisted PIN services within the branch</li>
                <li>Provides a secure environment for sensitive transactions</li>
                <li>Reduces reliance on manual PIN issuance processes</li>
                <li>Ensures instant PIN update through the card management system</li>
                <li>Improves customer support for PIN-related services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwigSecureInstantPinPos;

