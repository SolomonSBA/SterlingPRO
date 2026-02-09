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
      title: "FLEXIBLE",
      description:
        "Allows for seamless integration to support your existing system and infrastructure and can be customised to meet your organisation's needs.",
    },
    {
      image: discount,
      title: "EFFICIENT",
      description:
        "Our product reduces the cost and complexity involved in building high-quality products and delivering delightful user experiences.",
    },
    {
      image: shieldDone,
      title: "SECURE & RELIABLE",
      description:
        "We deliver security where you need it and reliable infrastructure that enables innovation within the banking and payments ecosystem.",
    },
    {
      image: headphones,
      title: "AVAILABLE CUSTOMER SUPPORT",
      description:
        "Our people are always available to talk to you to ensure that you integrate smoothly and build your products with minimal roadblocks.",
    },
    {
      image: technology,
      title: "STATE-OF-THE-ART TECHNOLOGY",
      description:
        "We are constantly innovating and improving our product as well as releasing new features, ensuring that your company is equipped with the tools needed to build for the future.",
    },
  ];

  const options = [
    {
      image: card_1,
      title: "Card Authorization",
      description:
        "Maintain complete control over card transactions. Make custom transaction approval decisions in real-time, and approve or deny each transaction based on a set of rules.",
    },
    {
      image: spending,
      title: "Static and Dynamic Spend Controls",
      description:
        "Control the spending limits of customers and prevent fraud by setting spending limits or creating advanced combinations of rules. Apply spend controls based on rules like transaction type, account level and more. Update your spending controls at any time.",
    },
    {
      image: block,
      title: "Efficient Card Management",
      description:
        "Centrally manage your entire card operations. Use CARD MON to effectively manage your car operations to deliver better customer experiences. Manage and maintain cardholder data from a single system. Pin management Block/unblock cards Manage disputes and chargebacksRisk & fraud management Link/unlink cards to accounts and more",
    },
    {
      image: encrypt,
      title: "PCI Ready",
      description:
        "We’re a certified PCI Service Provider Level 1 and use the best-in-class security tools and practices to maintain a high level of security that protects both your and your customers. Protect customers’ data & information when you use our PCI-compliant solution.",
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
            <h1 className="mb-4 md:mb-6 font-bold text-2xl md:text-4xl leading-tight">
              CARD <span className="text-[#D80369]">MON</span>
            </h1>

          

            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm leading-relaxed">
             Control every detail of your card operation, from authorising transactions in real-time to managing card limits and velocity with CARD MON.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-[#D80369] hover:bg-[#b8025a] shadow-lg px-7 md:px-8 py-3 rounded-lg font-semibold text-white text-sm transition-all"
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

      <section className="bg-gray-100 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 w-[75%] text-left"
        >
          <h2 className="mb-4 font-bold text-xl md:text-4xl leading-tight">
             <span className="text-[#D80369]">
              Build and scale{" "}
            </span>
           flexible card operations that benefit you and your customers
          </h2>
          <p className="text-grey text-sm">
           CARD MON enable financial institutions to easily manage and scale payment card operations effectively and centrally.
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
              className="bg-white p-6 md:p-8 border border-gray-200 hover:border-[#D80369]/30 rounded-2xl transition-colors"
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

      {/* With Twig Secure I-card Section */}
      <section className="bg-gray-100 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 w-[75%] text-left"
        >
          <h2 className="mb-4 font-bold text-xl md:text-4xl leading-tight">
           <span className="text-[#D80369]">Simple</span> to integrate into your system, feature-rich, and smooth to use.
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
              className="bg-white p-6 md:p-8 border border-gray-200 hover:border-[#D80369]/30 rounded-2xl transition-colors"
            >
              <div className="mb-5">
                <div className="flex justify-center items-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-30 h-30 object-cover"
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
          <h2 className="mb-3 font-bold text-xl md:text-4xl leading-tight">
            Flexible product, built with your{" "}
            <span className="text-[#D80369]">business needs in mind</span>
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
          p-6 md:p-8 transition-colors hover:border-[#D80369]/30
          ${index === benefits.length - 1 ? "md:col-span-2" : ""}
        `}
            >
              <div className="mb-5">
                <div className="flex justify-center items-center bg-[#D80369]/10 rounded-lg w-12 h-12">
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
              <span className="text-[#D80369] text-left">Card Mon</span> Is 
               <br className="hidden md:block" /> Used by
            </h2>
          </div>

          {/* Right Side*/}
          <div className="flex-1 gap-4 grid grid-cols-2 w-full">
            {/* Banks */}
            <div className="relative bg-white shadow-sm hover:shadow-lg p-6 border border-gray-200 rounded-2xl text-center transition-all">
              <div className="flex justify-center items-center bg-[#D80369]/10 mx-auto mb-3 rounded-xl w-12 h-12">
                <img src={bank} alt="Banks" className="w-12 h-12" />
              </div>
              <h3 className="font-bold text-gray-900 text-3xl">
                {banksCount}
              </h3>
              <p className="mt-1 font-medium text-gray-500 text-sm">Banks</p>
            </div>
            <div className="relative bg-white shadow-sm hover:shadow-lg p-6 border border-gray-200 rounded-2xl text-center transition-all">
              <div className="flex justify-center items-center bg-[#D80369]/10 mx-auto mb-3 rounded-xl w-12 h-12">
                <img src={atm_4} alt="Atms" className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 text-3xl">
                {atmCount.toLocaleString()}
              </h3>
              <p className="mt-1 font-medium text-gray-500 text-sm">
                <span className="text-[#D80369] text-left">financial companies</span> <br />
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
               Ready to Get Started?
              </h2>

              <p className="mb-6 text-gray-600 text-sm">
              Stay on top of all card operations.

              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="bg-[#D80369] hover:bg-[#b8025a] shadow-lg px-8 py-3 rounded-full font-semibold text-white text-base transition-all"
              >
                Start Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardMon;
