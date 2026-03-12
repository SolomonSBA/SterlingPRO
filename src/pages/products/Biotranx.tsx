import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bioImg from "../../assets/bio-jpg.webp";
import moneyTransfer from "../../assets/money-transfer.png";
import idCard from "../../assets/id-card.png";
import nodesImg from "../../assets/nodesImg.png";
import headphones from "../../assets/headphones-1.png";
import discount from "../../assets/discount-1.png";
import shieldDone from "../../assets/Shield-Done.png";
import technology from "../../assets/technology.png";

const Biotranx: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      image: moneyTransfer,
      title: "Platform Infrastructure",
      description:
        "The Biomonie scheme operates on a robust ecosystem consisting of two key components: Biopurse and Biowallet.",
    },
    {
      image: moneyTransfer,
      title: "Biopurse",
      description:
        "A secure, centralized repository that links a customer's biometric templates to their bank accounts or mobile wallets.",
    },
    {
      image: idCard,
      title: "Biowallet",
      description:
        "A digital wallet interface for agents and merchants to initiate and process biometric transactions seamlessly.",
    },
    {
      image: moneyTransfer,
      title: "Expanding Financial Access",
      description:
        "Biomonie plays a crucial role in advancing financial inclusion by extending banking services to populations without cards or smartphones.",
    },
  ];

  const useCases = [
    { title: "Cash Withdrawals", description: "At Agent Locations without cards." },
    { title: "Merchant Payments", description: "Securely pay for goods and services." },
    { title: "Financial Access", description: "Through Agent Networks." },
    { title: "Cardless Banking", description: "Banking Services for the underbanked." },
  ];

  const howItWorks = [
    { step: 1, text: "Customer walks into an agent or merchant location." },
    { step: 2, text: "Agent initiates the transaction on the Biomonie application." },
    { step: 3, text: "Customer provides their account details and places their finger on the biometric scanner." },
    { step: 4, text: "Transaction is authenticated, processed, and a receipt is generated." },
  ];

  const selfEnrollment = [
    {
      title: "Bank Agnostic Identity",
      description:
        "Customers can enroll once and use their biometrics across any participating bank or agent network.",
    },
    {
      title: "Advanced Fraud Prevention",
      description:
        "Eliminates card skimming, PIN theft, and lost cards, significantly reducing transaction disputes.",
    },
    {
      title: "Enhanced Agent Revenue",
      description:
        "Agents and merchants benefit from increased foot traffic and additional transaction volume.",
    },
    {
      title: "Rapid Deployment",
      description:
        "Banks can easily integrate the Biomonie API into their existing agency banking and merchant acquiring applications.",
    },
  ];

  const benefits = [
    {
      image: nodesImg,
      title: "Attract More Customers",
      description:
        "Offer a convenient payment option to cardless individuals.",
    },
    {
      image: discount,
      title: "Faster Transactions",
      description:
        "Eliminate PIN errors and card reading issues with swift biometric authentication.",
    },
    {
      image: shieldDone,
      title: "Reduce Cash Handling",
      description:
        "Minimize the risks and costs associated with managing physical cash.",
    },
    {
      image: headphones,
      title: "Earn Extra Income",
      description:
        "Generate revenue by providing essential financial access to your community.",
    },
    {
      image: technology,
      title: "Secure Payments",
      description:
        "Ensure payment finality with non-repudiable transaction authorization.",
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-white px-6 md:px-10 pt-10 pb-20 md:pb-24 w-full">
        <div className="items-center gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:text-left text-center"
          >
            <div className="flex justify-center md:justify-start gap-2 mb-4 md:mb-6">
              <div className="bg-[#E91E8C] mt-1 rounded-full w-2 h-2" />
              <span className="font-medium text-[#E91E8C] text-xs md:text-sm uppercase tracking-wide">
                Biometric Payments
              </span>
            </div>

            <h1 className="mb-4 md:mb-6 font-bold text-2xl md:text-5xl leading-tight">
              <span className="text-[#E91E8C]">Biomonie</span>
            </h1>

            <h2 className="mb-4 md:mb-6 font-semibold text-gray-800 text-xl md:text-3xl">
              Cardless Payments Powered by Biometrics
            </h2>

            <p className="mx-auto md:mx-0 mb-6 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              Biomonie is a biometric payment scheme that enables customers to perform financial transactions without using payment cards or PINs. By authenticating customers through fingerprint verification, the platform allows secure access to bank accounts at registered merchant and agent locations.
            </p>
            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              Designed for agency banking environments, Biomonie connects banks, merchants, and agents on a shared transaction infrastructure that enables customers to access funds conveniently using biometric authentication.
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
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative shadow-2xl border-8 border-gray-100 rounded-2xl md:max-w-full max-w-md overflow-hidden"
            >
              <img
                src={bioImg}
                alt="Biometric Payments"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Biometric Payments + Features */}
      <section className="bg-gray-50 px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="items-center gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="shadow-2xl mx-auto border-8 border-gray-100 rounded-2xl w-full md:max-w-none max-w-xl overflow-hidden"
          >
            <img
              src={bioImg}
              alt="Biometric Payments device"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:text-left text-center"
          >
            <h2 className="mb-4 md:mb-6 font-bold text-2xl text-[#020817] md:text-4xl leading-tight">
              Where Biomonie{" "}
              <span className="text-[#E91E8C]">Fits</span>
            </h2>

            <p className="mx-auto md:mx-0 mb-6 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              From agency banking and merchant payment to toll collection, tax collection, direct benefit transfer, and health insurance Biomonie powers cardless, biometric-authorised transactions wherever you need them.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["Agency Banking", "Merchant Payment", "BioWallets · BioPurse"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#E91E8C]/10 text-[#E91E8C] font-medium text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative bg-pink-50 px-8 lg:px-16 xl:px-24 py-24 w-full overflow-hidden">
        <div className="top-0 left-0 absolute bg-white rounded-b-[100%] w-full h-32" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mb-16 text-center"
        >
                  <h2 className="mb-3 font-bold text-lg md:text-3xl text-[#020817]">
              Platform {" "}
              <span className="text-[#E91E8C]">Infrastructure</span>
            </h2>
            <p className="text-gray-600 text-sm">
              The Biomonie scheme operates on a robust ecosystem.
            </p>
        </motion.div>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white p-4 md:p-6 border-2 border-gray-100 hover:border-[#E91E8C]/20 rounded-2xl w-full transition-all"
            >
              <div className="rounded-xl overflow-hidden mb-4 bg-[#E91E8C]/5 p-4 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#E91E8C] rounded-full w-1.5 h-1.5" />
                <span className="font-semibold text-[#E91E8C] text-xs uppercase tracking-wider">
                  Feature
                </span>
              </div>
              <h3 className="mb-2 font-bold text-gray-900 text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-bold text-xl md:text-4xl text-[#020817] leading-tight">
            Use cases {" "}
            <span className="text-[#E91E8C]">where Biomonie fits</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 hover:bg-[#E91E8C]/5 p-4 md:p-5 rounded-xl border border-gray-100 transition-colors"
            >
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How Biometric Payments Works */}
      <section className="bg-gray-50 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-bold text-xl text-[#020817] md:text-4xl leading-tight">
            How <span className="text-[#E91E8C]">Biomonie</span> works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From customer walk-in to cash handover six simple steps.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {howItWorks.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 items-start bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E91E8C] text-white font-bold flex items-center justify-center">
                {item.step}
              </div>
              <p className="text-gray-700 font-medium pt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How Biometric Payments Self-Enrollment Works */}
      <section className="bg-white px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="items-start gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:text-left text-center"
          >
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="bg-[#E91E8C] rounded-full w-2 h-2" />
              <span className="font-semibold text-[#E91E8C] text-xs uppercase tracking-wide">
                Security & technology
              </span>
            </div>

            <h2 className="mb-4 font-bold text-2xl md:text-4xl text-[#020817] leading-tight">
              Why Banks and Partners Choose Biomonie
            </h2>

            <p className="mx-auto md:mx-0 mb-8 max-w-xl text-gray-600 text-sm md:text-base leading-relaxed">
              Biomonie provides a robust infrastructure for biometrics-driven financial growth.
            </p>

            <div className="space-y-4">
              {selfEnrollment.map((item, index) => (
                <div key={item.title} className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center w-full"
          >
            <div className="relative shadow-2xl border-8 border-gray-100 rounded-2xl max-w-md overflow-hidden">
              <img
                src={bioImg}
                alt="Biometric device for self-enrollment"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="mb-3 font-bold text-xl md:text-4xl text-[#020817] leading-tight">
            Why <span className="text-[#E91E8C]">Agents and Merchants</span> Join Biomonie
          </h2>
        </motion.div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 w-full">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 transition-colors hover:border-[#E91E8C]/30"
            >
              <div className="mb-5">
                <div className="flex justify-center items-center bg-[#E91E8C]/10 rounded-lg w-12 h-12">
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
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-8 py-16 md:py-20 w-full">
        <div className="flex justify-center">
          <div className="p-8 md:p-10 w-full max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 font-bold text-gray-900 text-lg md:text-4xl">
                Ready to go cardless?
              </h2>
              <p className="mb-6 text-gray-600 text-sm">
                Start delivering biometric payment experiences with Biomonie.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="bg-[#E91E8C] hover:bg-[#C41A78] shadow-lg px-8 py-3 rounded-full font-semibold text-white text-base transition-all"
              >
                Get in touch
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biotranx;
