import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import journalImg from '../../assets/Journal.png';

const JournalFootageArchival: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/80 px-6 md:px-10 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(233,30,140,0.10),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(2,8,23,0.06),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700">
              ATM MONIT · Journal Footage &amp; Archival
            </p>
            <h1 className="mt-4 text-2xl md:text-4xl font-bold text-[#020817] leading-tight">
              Centralized ATM Journal and <span className="text-[#E91E8C]">Footage Management</span>
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-lg leading-relaxed">
              Maintain a secure, searchable repository of ATM transaction journals and related footage for easy retrieval and
              audit purposes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#E91E8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#C41A78] transition-colors shadow-lg shadow-[#E91E8C]/20"
              >
                Request Demo
              </Link>
              <Link
                to="/products/atm-monit"
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
              <img src={journalImg} alt="Journal and archival" className="w-full h-56 object-contain" />
              <div className="mt-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-4 shadow-sm">
                <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">
                  Reliable Transaction Records and Evidence
                </p>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  Securely archive ATM activity records so transaction data remains accessible for operational review, regulatory
                  reporting, and internal audits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">
              Evidence & Audit Intelligence
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-[#020817]">Reliable Transaction Records and Evidence</h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Journal Footage &amp; Archival provides banks with a centralized platform to store, manage, and retrieve ATM
              electronic journals alongside associated camera footage. This enables operations and dispute resolution teams to
              quickly review transaction history and supporting evidence when investigating customer complaints or
              reconciliation issues.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              By securely archiving ATM activity records, the system ensures important transaction data remains accessible for
              operational review, regulatory reporting, and internal audits.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-6 shadow-md">
              <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">
                Why Journal Footage &amp; Archival Matters
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Centralized storage of ATM electronic journals</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Easy retrieval of transaction history and related footage</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Supports dispute resolution and transaction verification</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Enables secure long-term archival of ATM records</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Improves efficiency for operations and audit teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-gradient-to-r from-[#E91E8C] to-[#C41A78] p-10 text-white">
          <h3 className="text-xl md:text-2xl font-bold">Need Reliable Access to Transaction Records?</h3>
          <p className="mt-3 text-white/90 max-w-3xl">
            Contact SterlingPRO today to learn how Journal Footage &amp; Archival can help securely store and retrieve ATM
            transaction logs for operational review and dispute resolution.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#C41A78] hover:bg-white/95 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalFootageArchival;

