import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import inBranch from "../../assets/Group-36-1.png";
import selfServe from "../../assets/Group-36.png";
import offSite from "../../assets/Group-36-2.png";
import selfServeChannels from "../../assets/Group-36-3.png";
import atm_2 from "../../assets/atmmm-2.png";
import atm from "../../assets/atm.png";
import atm_3 from "../../assets/atm-2-2.png";
import cyberSecurity from "../../assets/cyber-security.png";
import nodesImg from "../../assets/nodesImg.png";
import headphones from "../../assets/headphones-1.png";
import discount from "../../assets/discount-1.png";
import shieldDone from "../../assets/Shield-Done.png";
import technology from "../../assets/technology.png";
import atm_4 from "../../assets/atm-2-1.png";
import bank from "../../assets/bank-150x150.png";

const TwigSecureInstantPin: React.FC = () => {
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

  const banksCount = useCountUp(14, 800, statsVisible);
  const atmCount = useCountUp(10000, 1200, statsVisible);

  const features = [
    {
      image: selfServe,
      title: "TWIG Secure POS In-branch Self-Serve",
      description:
        "Allow your customers to select and update their PIN via self-service using a POS device inside your branch.",
    },
    {
      image: inBranch,
      title: "TWIG Secure POS In-branch",
      description:
        "Allow your customers to select and update their PIN using a POS device inside your branch with the help of a PIN officer.",
    },
    {
      image: offSite,
      title: "TWIG Secure POS Off-site",
      description:
        "Allow your customers to select and update their PIN using a POS device from an authorised agent outside the bank branch.",
    },
    {
      image: selfServeChannels,
      title: "TWIG Secure Self-Serve Channels",
      description:
        "Allow your customers to use self-service channels like ATM, mobile, USSD, web, etc, to select and update their PIN instantly.",
    },
  ];

  const reasons = [
    {
      image: atm,
      title: "Customer Experience",
      description:
        "Delights your customers with an immediate activation and PIN issuance for their newly generated cards.",
    },
    {
      image: atm_3,
      title: "Speed",
      description:
        "Supports all card providers, including VISA, Mastercard, Verve and EMP.",
    },
    {
      image: atm_2,
      title: "Pos Terminal",
      description:
        "Multi-channel PIN issuance allows your customers to select their PIN how they want conveniently.",
    },
    {
      image: cyberSecurity,
      title: "CyberSecurity",
      description:
        "Delivers PIN securely and integrates with other software like BCSS, Active directory, Host Security Module (HSM), Front End Processor (FEP), and more.",
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

  const partners = [
  { name: "Access Bank", logo: "/src/assets/access-bank-logo.png" },
  { name: "GTBank", logo: "/src/assets/GTBank-logo.png" },
  { name: "Wema Bank", logo: "/src/assets/wema-logo.jpg" },
  { name: "FCMB", logo: "/src/assets/FCMB-logo.png" },
  { name: "Zenith Bank", logo: "/src/assets/Zenith-Bank-logo.png" },
  { name: "Polaris Bank", logo: "/src/assets/Polaris-Bank-logo.png" },
  { name: "Taj Bank", logo: "/src/assets/Taj-Bank-logo.png", size: "2xl" },
  { name: "Heritage Bank", logo: "/src/assets/heritage-bank-logo.png" },
  { name: "Jaiz Bank", logo: "/src/assets/jaiz-logo.jpg" },
  { name: "Stanbic IBTC", logo: "/src/assets/Stanbic-logo.webp" },
  { name: "Sterling Bank", logo: "/src/assets/Sterling-Bank-logo.png" },
  { name: "Skye Bank", logo: "/src/assets/skye-bank-logo.webp", size: "2xl" },
  { name: "Uba Bank", logo: "/src/assets/Uba-Bank-logo.webp" },
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
              TWIG SECURE <span className="text-[#D80369]">INSTANT PIN</span>
            </h1>

            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              Multi-channel PIN issuance solution that allows customers to set
              PINs for their cards on mobile, in-branch, USSD, POS devices, and
              more.
            </p>

            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-[#D80369] hover:bg-[#b8025a] shadow-lg px-7 md:px-8 py-3 rounded-lg font-semibold text-white md:text-sm text-base transition-all"
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
                src="/src/assets/twig-instantpin-4.jpg"
                alt="TWIG Secure Payment"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Convenient & Secure Section */}
      <section className="bg-gray-50 px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="items-center gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="shadow-2xl mx-auto border-8 border-gray-100 rounded-2xl w-full md:max-w-none max-w-xl"
          >
            <div className="relative shadow-xl rounded-2xl overflow-hidden">
              <img
                src="/src/assets/twig-instantpin-3.jpg"
                alt="Customer using POS"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:text-left text-center"
          >
            <h2 className="mb-4 md:mb-6 font-bold text-xl md:text-4xl leading-relaxed">
              Instant
              <span className="text-[#D80369]"> PIN solution</span> for newly
              generated bank cards
            </h2>

            <p className="mx-auto md:mx-0 mb-6 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              TWIG SECURE Instant PIN is a software solution that powers PIN
              management for financial institutions. Instant PIN ensures that
              your customers can conveniently and securely setup and update PIN
              for their cards in and outside your branch.
            </p>
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
            <span className="text-[#D80369]">Secure Issuance</span> of Debit and
            Credit Card PINs with our Sub-products{" "}
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

      {/* In-Branch Experiences Section*/}
      <section className="bg-white px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="items-center gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 w-full"
          >
            <h2 className="mb-5 font-bold text-gray-900 text-lg md:text-4xl leading-tight">
              Convenient and secure PIN selection through{" "}
              <span className="text-[#D80369]">POS, ATM & mobile channels</span>
            </h2>

            <p className="max-w-xl text-gray-600 text-sm md:text-base leading-relaxed">
              Instant PIN solution that enables your customers to create PINs on
              newly generated bank cards via POS in and outside your bank
              branch, via ATM and self-service using web, mobile app or USSD.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 md:order-2 w-full"
          >
            <div className="relative shadow-2xl border border-gray-100 rounded-2xl overflow-hidden">
              <img
                src="/src/assets/twig-instantpin-1.jpg"
                alt="In-branch customer experience"
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
            </div>
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
                src="/src/assets/twig-instantpin-2.jpg"
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
              Why TWIG SECURE{" "}
              <span className="text-[#D80369]"> INSTANT PIN ?</span>
            </h2>

            <div className="space-y-3 md:space-y-0">
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
                  <span className="top-1/4 md:top-1/2 left-0 absolute bg-[#D80369] rounded-full w-1 h-8 -translate-y-1/2" />

                  <div className="flex flex-shrink-0 justify-center items-center bg-[#D80369]/10 group-hover:bg-[#D80369]/20 rounded-xl w-11 h-11 transition-all">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-5 h-5"
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
          <h2 className="font-bold text-gray-900 text-xl md:text-4xl">
            <span className="text-[#D80369]">TWIG SECURE Instant PIN </span>
            <br className="hidden md:block" />
            is trusted by leading institutions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500 text-sm md:text-base">
            Securely powering instant PIN issuance across banks and ATM
            networks.
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          onViewportEnter={() => setStatsVisible(true)}
          viewport={{ once: true }}
          className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto mb-16 max-w-4xl"
        >
          {/* Banks */}
          <div className="relative bg-white shadow-sm hover:shadow-lg p-8 border border-gray-200 rounded-2xl text-center transition-all">
            <div className="flex justify-center items-center bg-[#D80369]/10 mx-auto mb-4 rounded-xl w-14 h-14">
              <img src={bank} alt="Banks" className="w-7 h-7" />
            </div>

            <h3 className="font-bold text-gray-900 text-4xl">{banksCount}+</h3>
            <p className="mt-2 font-medium text-gray-500">Banks</p>
          </div>

          {/* ATMs */}
          <div className="relative bg-white shadow-sm hover:shadow-lg p-8 border border-gray-200 rounded-2xl text-center transition-all">
            <div className="flex justify-center items-center bg-[#D80369]/10 mx-auto mb-4 rounded-xl w-14 h-14">
              <img src={atm_4} alt="ATMs" className="w-7 h-7" />
            </div>

            <h3 className="font-bold text-gray-900 text-4xl">
              {atmCount.toLocaleString()}+
            </h3>
            <p className="mt-2 font-medium text-gray-500">
              ATMs using TWIG Secure
            </p>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="justify-center items-center gap-x-10 gap-y-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-center md:grayscale md:hover:grayscale-0 transition-all"
              >
               <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`object-contain ${
                    partner.size === "2xl" 
                      ? "h-12 md:h-16" 
                      : "h-8 md:h-10"
                  }`}
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

export default TwigSecureInstantPin;
