import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import posTeller from "../../assets/pos_20-jpg.webp";
import security from "../../assets/security.png";
import management from "../../assets/management.png";
import protection from "../../assets/protection.png";
import routeIcon from "../../assets/route.png";
import idCard from "../../assets/id-card.png";
import customerReview from "../../assets/customer-review.png";
import bank from "../../assets/bank-150x150.png";

const TwigSecurePosTeller: React.FC = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      image: posTeller,
      title: "Teller Transaction Processing",
      description: "Perform core banking transactions (withdrawals, deposits, balance inquiries, fund transfers) directly from POS terminals.",
    },
    {
      image: security,
      title: "Secure Authorization Workflow",
      description: "Teller login credentials and transaction validation ensure proper controls.",
    },
    {
      image: management,
      title: "Centralized Terminal Management",
      description: "Comprehensive management of all POS terminals—active, inactive, pending, unattached, and deleted.",
    },
    {
      image: routeIcon,
      title: "Business Unit Organization",
      description: "Group terminals by branch, region, or agency location for simplified oversight.",
    },
    {
      image: idCard,
      title: "Transaction Audit Trail",
      description: "Full visibility into all transactions performed on each terminal.",
    },
  ];

  const benefits = [
    {
      image: customerReview,
      title: "Branch Tellers",
      description: "Perform transactions efficiently without leaving the counter.",
    },
    {
      image: management,
      title: "Agency Banking Operators",
      description: "Extend banking services to remote locations.",
    },
    {
      image: protection,
      title: "Operations Teams",
      description: "Centralized visibility and control over all terminals.",
    },
    {
      image: security,
      title: "IT Administrators",
      description: "Comprehensive terminal lifecycle management.",
    },
    {
      image: idCard,
      title: "Compliance & Audit",
      description: "Full transaction audit trails and exportable reports.",
    },
  ];

  const whyChoose = [
    {
      title: "Extend Branch Reach",
      description: "Deliver teller services beyond traditional counters.",
    },
    {
      title: "Lower Infrastructure Cost",
      description: "Leverage existing POS terminals instead of dedicated teller stations.",
    },
    {
      title: "Centralized Management",
      description: "Single dashboard for all terminals across all locations.",
    },
    {
      title: "Operational Control",
      description: "Full visibility into terminal status, usage, and transaction history.",
    },
    {
      title: "Audit Ready",
      description: "Comprehensive logs and exportable reports for compliance.",
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      {/* Hero Section*/}
      <section className="bg-white px-6 md:px-10 pt-10 pb-20 md:pb-24 w-full">
        <div className="items-center gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:text-left text-center"
          >
            <h1 className="mb-4 md:mb-6 font-bold text-2xl md:text-4xl lg:text-5xl text-[#020817] leading-tight">
              Extend Branch Services Securely Through <span className="text-[#E91E8C]">POS Terminals</span>
            </h1>

            <p className="mx-auto md:mx-0 mb-6 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              TWIG Secure POSTeller is a secure POS-based teller solution that enables financial institutions to extend branch transaction services through standard Point-of-Sale (POS) terminals. It empowers authorized tellers and agents to perform banking transactions securely, efficiently, and in full compliance with operational controls.
            </p>
            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              The solution acts as an intelligent intermediary between POS devices and the bank's backend systems, ensuring every transaction is validated, authorized, and posted correctly. Whether deployed in traditional branches, agency banking locations, or controlled service points, POSTeller integrates seamlessly with existing transaction processing and core banking infrastructure.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-[#E91E8C] hover:bg-[#C41A78] shadow-lg px-7 md:px-8 py-3 rounded-lg font-semibold text-white md:text-sm text-base transition-all"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative shadow-2xl border-8 border-gray-100 rounded-2xl md:max-w-full max-w-md overflow-hidden"
            >
              <img
                src="/src/assets/pos_20-jpg.webp"
                alt="TWIG Secure POSTeller"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-gray-50 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 md:mb-16 text-center"
         >
           <h2 className="mb-3 font-bold text-xl md:text-4xl text-[#020817] leading-tight">
             Key <span className="text-[#E91E8C]">Capabilities</span>
           </h2>
        </motion.div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
           {capabilities.map((feature, index) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 24 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{
                 delay: index * 0.1,
                 duration: 0.5,
                 ease: "easeOut",
               }}
               className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 transition-colors hover:border-[#E91E8C]/30"
             >
               <h3 className="mb-2 font-semibold text-gray-900 text-lg uppercase tracking-wide">
                 {feature.title}
               </h3>
               <p className="text-gray-600 text-sm leading-relaxed">
                 {feature.description}
               </p>
             </motion.div>
           ))}
         </div>
      </section>

      {/* Centralized Terminal Management */}
      <section className="bg-white px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="items-center gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:text-left text-center"
          >
            <h2 className="mb-4 md:mb-6 font-bold text-2xl text-[#020817] md:text-4xl leading-tight">
              Centralized Terminal & <span className="text-[#E91E8C]">Business Unit Management</span>
            </h2>

            <p className="mx-auto md:mx-0 mb-6 max-w-xl text-gray-600 text-sm md:text-base leading-relaxed">
              Gain complete command of your entire POS terminal estate from a single, intuitive dashboard. TWIG Secure POSTeller provides financial institutions with real-time visibility and control over every terminal across every location—whether in a bustling branch, a remote agency banking outpost, or a specialized service point.
            </p>
            <p className="mx-auto md:mx-0 mb-6 max-w-xl text-gray-600 text-sm md:text-base leading-relaxed">
              For terminals deployed across a distributed network, our Business Unit hierarchy organizes devices by branch, region, or agency location. Create and activate new business units on the fly, assign terminals to their appropriate locations, and instantly identify unattached devices awaiting assignment.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="w-full"
           >
             <div className="relative shadow-2xl border border-gray-100 rounded-2xl overflow-hidden p-8 bg-pink-50">
               <h3 className="text-xl font-bold text-[#020817] mb-4">Why Choose TWIG Secure POSTeller?</h3>
               <ul className="space-y-4">
                 {whyChoose.map((item, i) => (
                   <li key={i} className="flex gap-3">
                     <span className="text-[#E91E8C] font-semibold">•</span>
                     <div>
                       <span className="font-semibold text-gray-900 block">{item.title}</span>
                       <span className="text-gray-600 text-sm block">{item.description}</span>
                     </div>
                   </li>
                 ))}
               </ul>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Beneficiaries Section */}
      <section className="bg-pink-50 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
         >
           <h2 className="mb-3 font-bold text-xl md:text-4xl text-[#020817] leading-tight">
             Who Benefits from <span className="text-[#E91E8C]">POSTeller</span>
           </h2>
        </motion.div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center hover:shadow-lg transition-all"
            >
              <h3 className="mb-3 font-semibold text-gray-900 text-sm">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 py-16 md:py-20 w-full bg-white">
        <div className="flex justify-center">
          <div className="p-8 md:p-10 w-full max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 font-bold text-gray-900 text-lg md:text-4xl">
                Ready to Extend Your Branch Services?
              </h2>

              <p className="mb-6 text-gray-600 text-sm">
                Contact SterlingPRO today to learn how TWIG Secure POSTeller can transform your branch and agency banking operations.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="bg-[#E91E8C] hover:bg-[#C41A78] shadow-lg px-8 py-3 rounded-full font-semibold text-white text-base transition-all"
              >
                Request Demo
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwigSecurePosTeller;
