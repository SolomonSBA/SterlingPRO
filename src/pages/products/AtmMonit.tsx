import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AccordionItem from "@/components/AccordionItem";
import security from "../../assets/security.png"
import management from "../../assets/management.png"
import protection from "../../assets/protection.png"
import Intelligent_Camera from "../../assets/Intelligent-Camera.png"
import journal from "../../assets/Journal.png"
import encryption from "../../assets/encrypt.png"
import banknotes from "../../assets/banknotes.png";
import honesty from "../../assets/honesty.png";
import api from "../../assets/api.png";
import nodesImg from "../../assets/nodesImg.png";
import headphones from "../../assets/headphones-1.png";
import discount from "../../assets/discount-1.png";
import shieldDone from "../../assets/Shield-Done.png";
import technology from "../../assets/technology.png";
import atm_4 from "../../assets/atm-2-1.png";
import bank from "../../assets/bank-150x150.png";
import atm_2 from "../../assets/atmmm-2.png";

const AtmMonit: React.FC = () => {
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

  const banksCount = useCountUp(100, 800, statsVisible);
  const fintechCount = useCountUp(5, 800, statsVisible);
  const atmCount = useCountUp(10000, 1200, statsVisible);

  const features = [
    {
      image: security,
      title: "Monitor your entire ATM network",
      description:
        "Designed to monitor incidents, link each transaction to the user, facilitate dispute resolution, report on ATM status, and mitigate criminal activity. Receive real-time updates via SMS and email.",
    },
    {
      image: management,
      title: "Incident Management",
      description:
        "Monitors certain behaviours on the ATM like cash low, cash out, card reader status, journal printer status, etc. and subsequently sends an escalation message to the ATM custodian responsible.",
    },
    {
      image: protection,
      title: "Total Protection against skimming",
      description:
        "It monitors ATMs and allows or prevents the customer from performing a transaction based on the status received. Suspicious actions are escalated instantly with incident reports provided.",
    },
     {
      image: Intelligent_Camera,
      title: "Intelligent Camera",
      description:
        "ATM Monit provides the ability to view real-time video and photos and to pre-and post-incident scene footage. It provides 24/7 ATM surveillance and can detect and block suspicious activities.",
    },
     {
      image: journal,
      title: "Total Protection against skimming",
      description:
        "It monitors ATMs and allows or prevents the customer from performing a transaction based on the status received. Suspicious actions are escalated instantly with incident reports provided.",
    },
    {
      image: encryption,
      title: "PCI-Compliant",
      description:
        "ATM Monit is PCI-DSS Level 1 Certified. We take pride in being compliant with the recommended safety standards to reduce the risk of your customers' data being attacked or compromised.",
    },
    
  ];

  const reasons = [
    {
      image: atm_2,
      title: "index finger",
      description:
        "Simplifies security and client service",
    },
    {
      image: atm_4,
      title: "chain link",
      description:
        "Supports all brands of ATMs",
    },
    {
      image: banknotes,
      title: "dollar bill",
      description:
        "Saves cost and time",
    },
    {
      image: honesty,
      title: "right and left arrow",
      description:
        "Protects customers from criminal and poor experience",
    },
    {
      image: api,
      title: "mobile",
      description:
        "An API that can be integrated into your current infrastructure",
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
  const helpItems = [
  {
    title: "Increase customer satisfaction",
    description:
      "ATM MONIT allows you to monitor ATMs to ensure constant uptime so that your customers can perform transactions when they want to. You can get comprehensive information about transactions to enable you settle disputes faster. Your customers will appreciate the speed of support.",
  },
  {
    title: "Better Security for you and your customers",
    description:
      "ATM Monit can detect, prevent and report suspicious activities like theft, vandalism and skimming and also provide you with accurate & real-time incident reports.",
  },
   {
    title: "Increase employee productivty",
    description:
      "ATM Monit automates tasks that would usually be handled by an employee, like security, journaling, etc., giving your employees time to focus on other core business aspects.",
  },
  {
    title: "Obtain detailed transaction information",
    description:
      "Often disputes arise due to a lack of transaction information. ATM Monit allows you to receive detailed status reports of all transactions, so you always know if money has been paid to a customer, has been left at an ATM, or has been transferred to the next user.",
  },
];

  const partners = [
    { name: "Access Bank", logo: "/src/assets/access-bank-logo.png" },
    { name: "FCMB", logo: "/src/assets/FCMB-logo.png" },
    { name: "Fidelity", logo: "/src/assets/fidelity-logo.png" },{ name: "GTBank", logo: "/src/assets/GTBank-logo.png" },
    { name: "Polaris Bank", logo: "/src/assets/Polaris-Bank-logo.png" },
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
             ATM <span className="text-[#D80369]">MONIT</span>
            </h1>

            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              Seamlessly monitor your entire ATM network, ensure constant uptime, secure your ATM against fraud, and deliver a better customer experience.
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
                src="/src/assets/atm-monit-1.jpg"
                alt="TWIG Secure Payment"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

       {/* Why TWIG Secure Section*/}
      <section className="bg-gray-50 px-6 md:px-8 py-20 md:py-24 w-full">
             <div className="items-start gap-12 md:gap-20 grid grid-cols-1 md:grid-cols-2 w-full">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="md:top-32 md:sticky shadow-2xl mx-auto border-8 border-gray-100 rounded-2xl w-full md:max-w-none max-w-xl"
               >
                 <div className="relative shadow-xl rounded-2xl overflow-hidden">
                   <img
                     src="/src/assets/atm-monit-2.jpg"
                     alt="TWIG Secure benefits"
                     className="w-full h-auto object-contain"
                   />
                 </div>
               </motion.div>
     
               {/* Content */}
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="w-full"
               >
                 <h2 className="mb-4 font-bold text-xl md:text-3xl">
                  An{" "}
                   <span className="text-[#D80369]"> all-in-one </span>
                  ATM monitoring solution. 
                 </h2>
                 <p className="text-grey">A powerful ATM network monitoring and management system that seamlessly integrates with your existing infrastructure.</p>
     
               <div className="space-y-3 md:space-y-0 grid grid-cols-1 md:grid-cols-2">
                                  {reasons.map((reason, index) => (
                                    <motion.div
                                      key={reason.title}
                                      initial={{ opacity: 0, x: -30 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      viewport={{ once: true }}
                                      transition={{
                                        delay: index * 0.1,
                                        duration: 0.6,
                                        ease: "easeOut",
                                      }}
                                      className="group relative flex gap-4 bg-white/70 hover:shadow-lg p-4 md:p-5 rounded-2xl transition-all hover:-translate-y-1"
                                    >
                                      <span className="top-1/3 left-0 absolute bg-[#D80369] rounded-full w-1 h-8 -translate-y-1/2" />
                    
                                      <div className="flex-shrink-0 justify-center items-center grid bg-[#D80369]/10 group-hover:bg-[#D80369]/20 rounded-xl w-11 h-11 transition-all">
                                        <img
                                          src={reason.image}
                                          alt={reason.title}
                                          className="w-7 h-7"
                                        />
                                      </div>
                    
                                      <div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                          {reason.description}
                                        </p>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
               </motion.div>
             </div>
           </section>


      {/* Flexible Features Section */}
      <section className="relative bg-pink-50 px-8 lg:px-16 xl:px-24 py-24 w-full overflow-hidden">
        <div className="top-0 left-0 absolute bg-white rounded-b-[100%] w-full h-32" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mb-16 text-center"
        >
          <h2 className="mb-3 font-bold text-lg md:text-4xl">
            An ATM monitoring solution with a  {" "}
            <span className="text-[#D80369]">wide range </span> of capabilities.
          </h2>
          
        </motion.div>

        <div className="gap-12 grid md:grid-cols-2 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 md:p-8 border-2 border-gray-100 hover:border-[#D80369]/20 rounded-2xl w-full transition-all"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-32 md:h-48 object-contain"
                />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#D80369] rounded-full w-1.5 h-1.5" />
                <span className="font-semibold text-[#D80369] text-xs uppercase tracking-wider">
                  Feature
                </span>
              </div>

              <h3 className="mb-3 font-bold text-gray-900 text-lg">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
                 {/* How ATM Monit Can Help You Section */}
        <section className="bg-white px-6 md:px-8 py-20 md:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 font-bold text-xl md:text-4xl leading-tight">
              How <span className="text-[#D80369]">ATM MONIT</span> can help you
            </h2>
          </motion.div>

          <div className="items-center gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 w-full">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center w-full"
            >
              <div className="relative shadow-2xl border-8 border-gray-100 rounded-2xl md:max-w-full max-w-md overflow-hidden">
                <img
                  src="/src/assets/atm-monit-2.jpg"
                  alt="ATM Monit Help"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 w-full"
            >
              {helpItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </motion.div>
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
            Flexible API, built with your{" "}
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
                    className="w-6 h-6 object-contain"
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
        >
        </motion.div>

        {/* Trust Stats */}
      <motion.div
        onViewportEnter={() => setStatsVisible(true)}
        viewport={{ once: true }}
        className="flex md:flex-row flex-col items-center gap-8 md:gap-12 mx-auto mb-16 max-w-6xl"
      >
  {/* Left Side - Text */}
    <div className="flex-1 text-center md:text-center">
          <h2 className="font-bold text-gray-900 text-xl md:text-6xl">
            <span className="text-[#D80369] text-left">ATM Monit  </span> is 
            <br className="hidden md:block" />
           trusted by
          </h2>
    </div>

  {/* Right Side - Stats Grid */}
  <div className="flex-1 gap-4 grid grid-cols-2 grid-rows-2 w-full">
    {/* Banks */}
    <div className="relative bg-white shadow-sm hover:shadow-lg p-6 border border-gray-200 rounded-2xl text-center transition-all">
      <div className="flex justify-center items-center bg-[#D80369]/10 mx-auto mb-3 rounded-xl w-12 h-12">
        <img src={bank} alt="Banks" className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-gray-900 text-3xl">{banksCount}+</h3>
      <p className="mt-1 font-medium text-gray-500 text-sm">Banks</p>
    </div>

    {/* Fintech */}
    <div className="relative bg-white shadow-sm hover:shadow-lg p-6 border border-gray-200 rounded-2xl text-center transition-all">
      <div className="flex justify-center items-center bg-[#D80369]/10 mx-auto mb-3 rounded-xl w-12 h-12">
        <img src={bank} alt="Fintech" className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-gray-900 text-3xl">{fintechCount}+</h3>
      <p className="mt-1 font-medium text-gray-500 text-sm">Fintech companies</p>
    </div>

    {/* ATMs - Spans 2 columns */}
    <div className="relative col-span-2 bg-white shadow-sm hover:shadow-lg p-6 border border-gray-200 rounded-2xl text-center transition-all">
      <div className="flex justify-center items-center bg-[#D80369]/10 mx-auto mb-3 rounded-xl w-12 h-12">
        <img src={atm_4} alt="ATMs" className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-gray-900 text-3xl">
        {atmCount.toLocaleString()}+
      </h3>
      <p className="mt-1 font-medium text-gray-500 text-sm">
        ATMs using TWIG Secure
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
                Ready to collaborate?
              </h2>

              <p className="mb-6 text-gray-600 text-sm">
                Start delivering exceptional customer experiences.
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

export default AtmMonit;