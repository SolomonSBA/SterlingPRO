import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import monitorImg from '../../assets/security.png';

const AtmMonitoring: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/80 px-6 md:px-10 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(233,30,140,0.10),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(2,8,23,0.06),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700">
              ATM MONIT · ATM Monitoring
            </p>
            <h1 className="mt-4 text-2xl md:text-4xl font-bold text-[#020817] leading-tight">
              Real-Time ATM Network <span className="text-[#E91E8C]">Monitoring</span>
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-lg leading-relaxed">
              Monitor ATM availability, performance, and operational status across your entire ATM network from a single
              interface.
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
              <img src={monitorImg} alt="ATM monitoring" className="w-full h-56 object-contain" />
              <div className="mt-4 rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Proactive ATM Operations Management</p>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  Track status, raise alerts, and support proactive management of ATM uptime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-xl md:text-3xl font-bold text-[#020817]">Proactive ATM Operations Management</h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              ATM Monitoring provides banks with real-time insight into the operational health of their ATM infrastructure.
              The solution tracks ATM status, alerts operations teams to potential issues, and supports proactive management of
              ATM uptime.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              With clear visibility into ATM activity and system performance, banks can quickly respond to faults, minimize
              service disruptions, and maintain reliable ATM services for customers.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Why ATM Monitoring Matters</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Provides real-time visibility into ATM network status</li>
                <li>Enables early detection of ATM faults and service issues</li>
                <li>Supports improved ATM uptime and service availability</li>
                <li>Helps operations teams respond to issues faster</li>
                <li>Improves overall ATM network performance management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-gradient-to-r from-[#E91E8C] to-[#C41A78] p-10 text-white">
          <h3 className="text-xl md:text-2xl font-bold">Looking to Strengthen ATM Network Oversight?</h3>
          <p className="mt-3 text-white/90 max-w-3xl">
            Contact SterlingPRO today to learn how ATM Monitoring can provide real-time visibility into ATM activity and help
            your team respond quickly to operational issues.
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

export default AtmMonitoring;

