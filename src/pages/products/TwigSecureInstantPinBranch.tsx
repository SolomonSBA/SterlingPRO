import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import posTeller from "../../assets/pos_20-jpg.webp";

const TwigSecureInstantPinBranch: React.FC = () => {
  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      {/* Hero – Secure PIN Selection with Teller Assistance */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/80 px-6 md:px-10 pt-10 pb-20 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(233,30,140,0.12),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(2,8,23,0.06),transparent_45%)]" />
        <div className="relative grid items-center gap-12 md:gap-16 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:text-left text-center"
          >
            <p className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 uppercase">
              In-Branch Banking · TWIG Secure Instant PIN
            </p>
            <h1 className="mt-4 mb-4 md:mb-6 font-bold text-2xl md:text-3xl lg:text-4xl text-[#020817] leading-tight">
              Secure PIN Selection with{" "}
              <span className="text-[#E91E8C]">Bank Staff Assistance</span>
            </h1>
            <p className="mx-auto md:mx-0 mb-4 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              TWIG Secure Instant PIN enables customers to securely select or change their payment card PIN within the
              branch, with assistance from bank staff when needed. Using a POS terminal at the counter, customers can
              authenticate their card and create a new PIN without waiting for traditional PIN mailers.
            </p>
            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              This approach lets banks provide immediate PIN services during card issuance or customer support interactions,
              ensuring customers leave the branch with an active and secure PIN.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#E91E8C] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E91E8C]/25 hover:bg-[#C41A78] transition-colors"
              >
                Request Demo
              </Link>
              <Link
                to="/products/twig-secure"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-800 hover:border-[#E91E8C]/30 hover:text-[#E91E8C] transition-colors"
              >
                Back to In-Branch Suite
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center w-full"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#E91E8C]/18 to-transparent blur-2xl rounded-[32px]" />
            <div className="relative shadow-2xl border-8 border-gray-100 rounded-2xl max-w-md md:max-w-full overflow-hidden bg-white">
              <img
                src={posTeller}
                alt="TWIG Secure Instant PIN in-branch POS"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Assisted PIN Services at the Branch */}
      <section className="bg-white px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">
              Branch Workflow
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-[#020817]">
              Assisted PIN Services at the <span className="text-[#E91E8C]">Branch</span>
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              When a customer requests a PIN setup or reset in the branch, the teller initiates the process using a POS
              terminal connected to the TWIG Secure platform. The customer inserts their card and follows the guided prompts
              to create or update their PIN directly on the device.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Once confirmed, the new PIN is securely transmitted to the bank’s Card Management System, allowing the
              customer to begin using the card immediately across ATM and POS channels.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-6 shadow-md">
              <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78] mb-3">
                Key Benefits
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Enables instant PIN setup during branch visits</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Eliminates reliance on traditional PIN mailers</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Provides secure PIN entry directly by the customer</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Allows assisted support from branch staff</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Ensures real-time PIN updates via the card management system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Use Cases */}
      <section className="bg-gray-50 px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-xl md:text-3xl font-bold text-[#020817]">
              Typical <span className="text-[#E91E8C]">Use Cases</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Designed for everyday branch operations where customers need immediate, secure control over their card PINs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "New Card Activation",
                body:
                  "Customers can select their preferred PIN immediately when collecting a newly issued card at the branch.",
              },
              {
                title: "PIN Reset Assistance",
                body:
                  "Customers who have forgotten their PIN can reset it securely with teller assistance at the counter.",
              },
              {
                title: "Customer Support Scenarios",
                body:
                  "Branch staff can assist customers who require help managing their card security as part of normal service.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-gray-900 text-sm md:text-base">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl border border-gray-200 bg-gradient-to-r from-[#E91E8C] to-[#C41A78] p-10 text-white">
          <h3 className="text-xl md:text-2xl font-bold">
            Ready to Simplify Card Activation in Your Branches?
          </h3>
          <p className="mt-3 text-white/90 max-w-3xl">
            Contact SterlingPRO today to learn how TWIG Secure Instant PIN with teller assistance can provide secure, instant
            PIN services at the counter.
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

export default TwigSecureInstantPinBranch;

