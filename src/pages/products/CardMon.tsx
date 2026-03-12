import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import customizable from "../../assets/customizable.png";
import centralized from "../../assets/centralized.png";
import scalable from "../../assets/scalable.png";
import nodesImg from "../../assets/nodesImg.png";
import headphones from "../../assets/headphones-1.png";
import discount from "../../assets/discount-1.png";
import shieldDone from "../../assets/Shield-Done.png";
import technology from "../../assets/technology.png";
import atm_4 from "../../assets/atm-2-1.png";
import bank from "../../assets/bank-150x150.png";
import card_1 from "../../assets/card-1.png";
import block from "../../assets/block.png";
import spending from "../../assets/spending.png";
import atm from "../../assets/atm.png";
import atm_2 from "../../assets/atmmm-2.png";
import encrypt from "../../assets/encrypt.png";
import atm_1 from "../../assets/atm-1.png";
import atm_3 from "../../assets/atm-2-2.png";

const CardMon: React.FC = () => {
  const useCountUp = (end: number, duration: number, start: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let current = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [start, end, duration]);

    return count;
  };
  const navigate = useNavigate();

  const [statsVisible, setStatsVisible] = useState(false);

  const banksCount = useCountUp(1, 1000, statsVisible);
  const atmCount = useCountUp(5, 1200, statsVisible);

  const features = [
    {
      image: centralized,
      title: "Centralised",
      description:
        "Manage your cards from a centralised system, streamlining the management and authorisation of your cards.",
    },
    {
      image: customizable,
      title: "Customisable",
      description:
        "Choose features and design Verve, Mastercard and Visa Cards that meet your customers’ needs.",
    },
    {
      image: scalable,
      title: "Scalable",
      description:
        "Card MON is highly scalable and designed to support your business’s growth without interruption or performance issues.",
    },
  ];

  const reasons = [
    {
      image: atm,
      title: "index finger",
      description:
        "Choose from our full suite of services, including instant card issuance, print management, and more",
    },
    {
      image: atm_2,
      title: "chain link",
      description: "Rest easy with a secure card printing system",
    },
    {
      image: atm_1,
      title: "right and left arrow",
      description:
        "Provide a seamless user experience by providing cards quickly",
    },
    {
      image: atm_3,
      title: "miscellaneous",
      description:
        "Decide where the card can be used and what it can be used for.",
    },
  ];

  const benefits = [
    {
      image: nodesImg,
      title: "Straight-Through Processing",
      description:
        "Automates the entire settlement workflow—from file retrieval to TTUM generation—eliminating manual intervention.",
    },
    {
      image: discount,
      title: "Dual-Control Workflow",
      description:
        "No single user can complete a sensitive operation without approval. Every action is logged, meeting PCI-DSS standards.",
    },
    {
      image: shieldDone,
      title: "Comprehensive Audit Trail",
      description:
        "Immutable logs capture who did what, when, and from where. Version-controlled archives ensure regulatory readiness.",
    },
    {
      image: technology,
      title: "Seamless Integration",
      description:
        "Connects effortlessly with NIBSS / UP Portal, Interswitch, IMTO Portals, Internal Spool Systems, and Core Banking.",
    },
  ];

  const options = [
    {
      image: card_1,
      title: "UP ATM Settlement",
      description:
        "NOU (Not On Us), ROU (Remote On Us). Automated file retrieval, duplicate cleansing, SOLID extraction, GL mapping.",
    },
    {
      image: spending,
      title: "IMTO Settlement",
      description:
        "MoneyGram, RIA, Western. Rate computation, principal/commission separation.",
    },
    {
      image: block,
      title: "PayDirect Settlement",
      description:
        "Interswitch, ExtraSwitch. Cleared collections, lead/collecting bank earnings, split report processing.",
    },
    {
      image: encrypt,
      title: "VTU Settlement",
      description:
        "Virtual Top-Up recharges. Account mapping, exception management.",
    },
  ];

  const partners = [
    { name: "Fidelity", logo: "/src/assets/fidelity-logo.png" },
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
            <h1 className="mb-4 md:mb-6 font-bold text-2xl text-[#020817] md:text-5xl leading-tight">
              Enterprise Settlement <span className="text-[#E91E8C]">Automation</span>
            </h1>

            <p className="mx-auto md:mx-0 mb-4 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
             Financial institutions face mounting pressure to process high-volume interbank settlements across ATM (NOU/ROU), IMTO, PayDirect, and VTU channels accurately, on time, and fully compliant.
            </p>
            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
             CardMon automates the entire settlement lifecycle. It replaces manual reconciliation with straight-through processing, dual-control workflows, and comprehensive audit trails.
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
                src="/src/assets/card-mon.jpg"
                alt="TWIG Secure Payment"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core capabilities from PDF */}
      <section className="bg-gray-100 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 w-[75%] text-left"
        >
          <h2 className="mb-4 font-bold text-xl md:text-4xl text-[#020817] leading-tight">
             <span className="text-[#E91E8C]">
              Core Capabilities{" "}
            </span>
            for Interbank Settlement
          </h2>
          <p className="text-gray-600 text-sm md:text-lg">
           CardMon is a comprehensive application that consolidates data, applies complex rules, and generates validated posting files.
          </p>
        </motion.div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 w-full">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-white p-6 md:p-8 border border-gray-200 hover:border-[#E91E8C]/30 rounded-2xl transition-colors"
            >
              <div className="mb-5">
                <div className="flex justify-center items-center">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-30 h-30 object-cover"
                  />
                </div>
              </div>

              <h3 className="mb-2 font-semibold text-gray-900 text-sm uppercase tracking-wide">
                {option.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Challenge & Solution */}
      <section className="bg-white px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="mb-3 font-bold text-xl md:text-3xl text-[#020817]">The Challenge</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              As transaction volumes surge across ATM networks, instant payments, and international remittances, financial
              institutions struggle with fragmented, manual settlement processes. Officers juggle multiple portals, download
              files, cleanse data in spreadsheets, and manually prepare posting files—leading to delayed customer funding,
              reconciliation errors, compliance risks, and strained operations.
            </p>
          </div>
          <div>
            <h2 className="mb-3 font-bold text-xl md:text-3xl text-[#020817]">The Solution: CardMon</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              CardMon is a comprehensive interbank settlement automation application that consolidates data from disparate
              sources, applies complex business rules, enforces dual-control approvals, and generates validated posting files
              ready for core banking systems.
            </p>
          </div>
        </div>
      </section>

      {/* Why Financial Institutions Choose CardMon & Business Impact */}
      <section className="bg-gray-50 px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="mb-4 font-bold text-xl md:text-3xl text-[#020817]">
              Why Financial Institutions <span className="text-[#E91E8C]">Choose CardMon</span>
            </h2>
            <ul className="space-y-3 text-sm md:text-base text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">Straight-through processing:</span> CardMon automates the
                entire settlement workflow—from file retrieval to TTUM generation—eliminating manual intervention and the errors
                it invites.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Dual-control (maker-checker) workflow:</span> No single user can
                complete a sensitive operation without approval. Every action is logged to meet PCI-DSS and internal controls.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Comprehensive audit trail:</span> Immutable logs capture who did
                what, when, and from where, with version-controlled archives for regulators and auditors.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Seamless integration:</span> Connects effortlessly with NIBSS/UP
                Portal, Interswitch/ExtraSwitch, IMTO portals, internal spool systems, TTUM applications and core banking.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-md">
              <p className="inline-flex items-center rounded-full bg-[#E91E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C41A78] mb-3">
                Business Impact
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">NOU/ROU Processing Time:</span> 80% reduction (3 hours → 30
                  minutes)
                </li>
                <li>
                  <span className="font-semibold text-gray-900">IMTO Processing Time:</span> 83% reduction per provider
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Error Rate:</span> Near-zero through automated validation
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Audit Readiness:</span> Full traceability with timestamped
                  archives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why CardMon Section */}
      <section className="bg-white px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-4 font-bold text-xl md:text-3xl text-[#020817]">
            Why <span className="text-[#E91E8C]">CardMon?</span>
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-gray-900 text-sm md:text-base">Purpose-built for Africa</p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Understands Nigerian payment nuances such as SOLID extraction, PayDirect formulas, and cybersecurity fees.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-gray-900 text-sm md:text-base">Future-ready</p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Aligns with NIBSS National Payment Stack and ISO 20022 standards, ensuring long-term compatibility.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-gray-900 text-sm md:text-base">Enterprise-grade security</p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Role-based access control, dual authorization, and one-time key visibility help protect sensitive settlement
                operations.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-gray-900 text-sm md:text-base">Proven in production</p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Processes settlement for millions of daily transactions across leading Nigerian banks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* With Twig Secure I-card Section */}
      <section className="bg-gray-100 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 w-[75%] text-left"
        >
          <h2 className="mb-4 font-bold text-xl md:text-4xl text-[#020817] leading-tight">
           <span className="text-[#E91E8C]">Enterprise-grade</span> features replacing manual efforts.
          </h2>
        </motion.div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 w-full">
          {features.map((feature, index) => (
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
              className="bg-white p-6 md:p-8 border border-gray-200 hover:border-[#E91E8C]/30 rounded-2xl transition-colors"
            >
              <div className="mb-5">
                <div className="flex justify-center items-center h-12 w-12 rounded-lg bg-[#E91E8C]/10">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>

              <h3 className="mb-2 font-semibold text-gray-900 text-sm uppercase tracking-wide">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flexible Product Benefits Section */}
      <section className="bg-gray-100 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="mb-3 font-bold text-xl md:text-4xl text-[#020817] leading-tight">
              Why Financial Institutions{" "}
            <span className="text-[#E91E8C]">Choose CardMon</span>
          </h2>
        </motion.div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 w-full">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`
          rounded-2xl border border-gray-200 bg-white
          p-6 md:p-8 transition-colors hover:border-[#E91E8C]/30
          ${index === benefits.length - 1 ? "md:col-span-2" : ""}
        `}
            >
              <div className="mb-5">
                <div className="flex justify-center items-center bg-[#E91E8C]/10 rounded-lg w-12 h-12">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              <h3 className="mb-2 font-semibold text-gray-900 text-sm uppercase tracking-wide">
                {benefit.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Trusted By Section */}
      <section className="bg-white px-6 md:px-8 py-20 md:py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        ></motion.div>

        {/* Trust Stats */}
        <motion.div
          onViewportEnter={() => setStatsVisible(true)}
          viewport={{ once: true }}
          className="flex md:flex-row flex-col items-center gap-8 md:gap-12 mx-auto mb-16 max-w-6xl"
        >
          {/* Left Side */}
          <div className="flex-1 text-center md:text-center">
            <h2 className="font-bold text-gray-900 text-xl md:text-6xl">
              <span className="text-[#E91E8C] text-left">Card Mon</span> Is 
               <br className="hidden md:block" /> Used by
            </h2>
          </div>

          {/* Right Side*/}
          <div className="flex-1 gap-4 grid grid-cols-2 w-full">
            {/* Banks */}
            <div className="relative bg-white shadow-sm hover:shadow-lg p-6 border border-gray-200 rounded-2xl text-center transition-all">
              <div className="flex justify-center items-center bg-[#E91E8C]/10 mx-auto mb-3 rounded-xl w-12 h-12">
                <img src={bank} alt="Banks" className="w-12 h-12" />
              </div>
              <h3 className="font-bold text-gray-900 text-3xl">
                {banksCount}
              </h3>
              <p className="mt-1 font-medium text-gray-500 text-sm">Banks</p>
            </div>
            <div className="relative bg-white shadow-sm hover:shadow-lg p-6 border border-gray-200 rounded-2xl text-center transition-all">
              <div className="flex justify-center items-center bg-[#E91E8C]/10 mx-auto mb-3 rounded-xl w-12 h-12">
                <img src={atm_4} alt="Atms" className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 text-3xl">
                {atmCount.toLocaleString()}
              </h3>
              <p className="mt-1 font-medium text-gray-500 text-sm">
                <span className="text-[#E91E8C] text-left">financial companies</span> <br />
               to manage 28,000+ Cards nationwide
              </p>
            </div>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="md:grayscale md:hover:grayscale-0 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 py-16 md:py-20 w-full">
        <div className="flex justify-center">
          <div className="p-8 md:p-10 w-full max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 font-bold text-gray-900 text-lg md:text-4xl">
               Ready to Automate Your Interbank Settlements?
              </h2>

              <p className="mb-6 text-gray-600 text-sm">
              Contact SterlingPRO today to learn how CARDMON can streamline your ATM, IMTO, PayDirect, and VTU settlement operations.
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

export default CardMon;
