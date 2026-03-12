import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import fingerprintImg from '../../assets/cyber-security.png';

const Biomonie: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/80 px-6 md:px-10 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(233,30,140,0.10),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(2,8,23,0.06),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700">
              Biometric Payments · Biomonie
            </p>
            <h1 className="mt-4 text-2xl md:text-4xl font-bold text-[#020817] leading-tight">
              Cardless Payments Powered by <span className="text-[#E91E8C]">Biometrics</span>
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-lg leading-relaxed">
              Biomonie is a biometric payment scheme that enables customers to perform financial transactions without using
              payment cards or PINs. By authenticating customers through fingerprint verification, the platform allows secure
              access to bank accounts at registered merchant and agent locations.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-lg leading-relaxed">
              Designed for agency banking environments, Biomonie connects banks, merchants, and agents on a shared
              transaction infrastructure that enables customers to access funds conveniently using biometric authentication.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#E91E8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#C41A78] transition-colors shadow-lg shadow-[#E91E8C]/20"
              >
                Request Demo
              </Link>
              <Link
                to="/products/biotranx"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-800 hover:border-[#E91E8C]/30 hover:text-[#E91E8C] transition-colors"
              >
                Biometric Payments Overview
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
              <img src={fingerprintImg} alt="Biometric authentication" className="w-full h-56 object-contain" />
              <div className="mt-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-4 shadow-sm">
                <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">
                  Where Biomonie Fits in the Payment Ecosystem
                </p>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  Biomonie introduces biometric authentication as the primary method of accessing funds in agency banking
                  networks—without cards or PINs.
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
              Ecosystem Fit
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-[#020817]">Where Biomonie Fits in the Payment Ecosystem</h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Financial services today are delivered through multiple channels including bank branches, ATMs, mobile
              banking, and agency banking networks.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Agency banking platforms such as agent networks allow customers to perform everyday financial transactions
              through neighborhood merchants and agents using specialized terminals or mobile devices.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Biomonie builds on this model by introducing biometric authentication as the primary method of accessing
              funds, allowing customers to perform transactions securely without using payment cards or entering PINs.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-6 shadow-md">
              <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">Traditional Agency Banking</p>
              <p className="mt-3 text-sm text-gray-700">
                In most agency banking platforms today, customers perform transactions using one of the following:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Payment cards</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Mobile banking transfers</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />USSD transactions</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Wallet-based authentication</li>
              </ul>
              <p className="mt-3 text-sm text-gray-700">
                While these systems provide access to financial services, they still rely on cards, PINs, or mobile devices for
                authentication.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-6 shadow-md">
              <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">How Biomonie Works</p>
              <p className="mt-4 text-sm text-gray-700">
                Biomonie enables customers to perform secure transactions through biometric authentication at participating
                merchant and agent locations.
              </p>
              <ol className="mt-4 space-y-3 text-sm text-gray-700 list-decimal list-inside">
                <li>
                  <span className="font-semibold text-gray-900">Customer Authentication</span>: A customer visits a
                  Biomonie-enabled merchant or agent and scans their fingerprint on the terminal.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Account Selection</span>: The platform identifies the bank
                  accounts linked to the customer’s biometric identity and displays available options.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Transaction Authorization</span>: The customer selects the
                  account from which the transaction will be processed.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Transaction Completion</span>: The transaction is processed
                  through the Biomonie payment scheme and completed instantly.
                </li>
              </ol>
              <p className="mt-4 text-sm text-gray-700">
                Instead of presenting a card or entering a PIN, the customer simply scans their fingerprint at a registered
                Biomonie merchant or agent terminal. The platform identifies the customer’s linked bank account (Biopurse)
                and allows the transaction to proceed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">
              Transaction Scenarios
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-[#020817]">Use Cases</h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Biomonie supports multiple transaction scenarios within agency banking environments.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                {
                  title: 'Cash Withdrawals at Agent Locations',
                  body: 'Customers can withdraw funds from their bank accounts at registered agents without needing a debit card. Fingerprint authentication provides a secure way to authorize the transaction.',
                },
                {
                  title: 'Merchant Payments',
                  body: 'Customers can complete payments at participating merchants using biometric authentication instead of cards.',
                },
                {
                  title: 'Financial Access Through Agent Networks',
                  body: 'Banks can extend financial services to areas without ATM or branch infrastructure by enabling transactions through authorized agents.',
                },
                {
                  title: 'Cardless Banking Services',
                  body: 'Customers who may not have access to payment cards can still perform transactions securely using their biometric identity.',
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <p className="font-semibold text-gray-900">{c.title}</p>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-6 shadow-md">
              <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">Platform Infrastructure</p>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                Biomonie operates through a structured ecosystem designed to support agency banking operations.
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
                  <p className="font-semibold text-gray-900 text-sm">Biopurse (Bank Account)</p>
                  <p className="mt-1 text-sm text-gray-700">
                    Biopurse is a user’s bank account, which is selected for transaction following authentication through
                    Biometrics.
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
                  <p className="font-semibold text-gray-900 text-sm">Biowallet (Merchant and Agent Wallet)</p>
                  <p className="mt-1 text-sm text-gray-700">
                    Merchants and agents operate using Biowallet accounts linked to their terminals, enabling them to process
                    customer transactions and manage operational balances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">
              Partner Value
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-[#020817]">Why Banks and Partners Choose Biomonie</h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Biomonie enables payments beyond traditional banking infrastructure while maintaining operational oversight.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Expanded Service Reach</span>: Banks can deliver financial
                services through agent and merchant networks without relying solely on branches or ATMs.
              </p>
              <p>
                <span className="font-semibold text-gray-900">Cardless Customer Experience</span>: Customers can perform
                transactions without carrying payment cards or remembering PINs.
              </p>
              <p>
                <span className="font-semibold text-gray-900">Secure Biometric Authentication</span>: Fingerprint
                verification provides a strong identity authentication method for customer transactions.
              </p>
              <p>
                <span className="font-semibold text-gray-900">Structured Agency Banking Platform</span>: Biomonie provides
                the operational framework required to manage agents, merchants, and transaction activities within the
                ecosystem.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-6 shadow-md">
              <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78]">The Biomonie Network</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Customers authenticate transactions using fingerprint verification linked to their bank account.</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Agents provide cash-based financial services such as withdrawals and other transactions.</li>
                <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#E91E8C] flex-shrink-0" />Merchants enable customers to perform payments and other transactions using biometric authentication.</li>
                <li>
                  The platform connects all participants, manages biometric authentication, and routes transactions securely.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-gradient-to-r from-[#E91E8C] to-[#C41A78] p-10 text-white">
          <h3 className="text-xl md:text-2xl font-bold">Ready to Join the Biomonie Network?</h3>
          <p className="mt-3 text-white/90 max-w-3xl">
            Contact SterlingPRO today to learn how your business can offer biometric-powered financial services as a Biomonie
            agent or merchant.
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

export default Biomonie;

