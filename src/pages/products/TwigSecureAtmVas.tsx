import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, FolderOpen, ArrowLeftRight, Banknote, LayoutGrid, Link2, Smartphone } from "lucide-react";
import revenue from "../../assets/revenue.png"
import experienced from "../../assets/experienced.webp"
import productivity from "../../assets/productivity.webp"
import encryption from "../../assets/encrypt.png"
import bill from "../../assets/bill.png";
import index from "../../assets/index.png";
import links from "../../assets/links.png";
import arrow from "../../assets/arrow.png";
import mobile from "../../assets/mobile.png";
import nodesImg from "../../assets/nodesImg.png";
import headphones from "../../assets/headphones-1.png";
import discount from "../../assets/discount-1.png";
import shieldDone from "../../assets/Shield-Done.png";
import technology from "../../assets/technology.png";
import atm_4 from "../../assets/atm-2-1.png";
import bank from "../../assets/bank-150x150.png";

const TwigSecureAtmVas: React.FC = () => {
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

  const banksCount = useCountUp(2, 800, statsVisible);
  const atmCount = useCountUp(10000, 1200, statsVisible);

  const features = [
    {
      image: revenue,
      title: "New sources of revenue",
      description:
        "Our products offer users a convenient way of accessing a range of value-added banking services. You can monetise these services and use your institution’s ATMs as extra sales channels.",
    },
    {
      image: experienced,
      title: "Better customer experiences",
      description:
        "Designed to monitor incidents, link each transaction to the user, facilitate dispute resolution, report on ATM status, and mitigate criminal activity. Receive real-time updates via SMS and email.",
    },
    {
      image: productivity,
      title: "Increase productivity of customer support",
      description:
        "Transactions like phone number updates, BVN linking, and instant loans would usually bring customers to the customer care desk in-branch. TWIG SECURE ATM VAS enables them to carry out transactions like these via an ATM. This frees up the customer support desk and increases productivity.",
    },
    {
      image: encryption,
      title: "ATM Encryption Keys",
      description:
        "TWIG SECURE ATM VAS enables banks to use ATM encryption keys across their ATM network. This protects sensitive information from being transferred to and from an ATM; encryption keys encrypt data, making it unusable by hackers even if they intercept data during transfer.",
    },
    
  ];

  const reasons = [
    {
      image: index,
      title: "index finger",
      description:
        "Account opening allows prospects to easily open new accounts using any of your ATMs",
    },
    {
      image: links,
      title: "chain link",
      description:
        "BVN linking enables customers to link their BVN to their bank accounts.",
    },
    {
      image: bill,
      title: "dollar bill",
      description:
        "Bill payment enables customers to purchase airtime, data, pay utility bills, etc., via ATM.",
    },
    {
      image: arrow,
      title: "right and left arrow",
      description:
        "Phone number update enables customers to easily update phone numbers linked to their accounts via ATM.",
    },
    {
      image: mobile,
      title: "mobile",
      description:
        "Fund transfer enables customers to carry out inter and infra-bank transfers using ATM channels.",
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
    { name: "GTBank", logo: "/src/assets/GTBank-logo.png" },
    { name: "Uba Bank", logo: "/src/assets/Uba-Bank-logo.webp" },
  ];

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      {/* Hero Section – tagline, headline, copy, CTAs + services grid */}
      <section className="bg-white px-6 md:px-10 pt-10 pb-20 md:pb-24 w-full">
        <div className="items-center gap-12 md:gap-16 grid grid-cols-1 lg:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:text-left text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 mb-4 md:mb-6">
              <span className="rounded-full bg-[#E91E8C] w-2 h-2" />
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                ATM Value-Added Services
              </span>
            </div>

            <h1 className="mb-4 md:mb-6 font-bold text-2xl text-[#020817] md:text-4xl lg:text-5xl leading-tight">
              Your ATM can do{" "}
              <span className="text-[#E91E8C]">far more</span> than dispense cash.
            </h1>

            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              TWIG Secure ATM VAS transforms your ATM network into a full-service banking channel enabling account opening, instant loans, BVN linking, transfers, and more, right at the machine.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/contact")}
                className="bg-[#E91E8C] hover:bg-[#C41A78] shadow-lg px-6 py-3 rounded-lg font-semibold text-white text-sm uppercase tracking-wide transition-colors"
              >
                Request a Demo
              </motion.button>
              <a
                href="#atm-vas-services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-gray-700 text-sm border-2 border-gray-300 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
              >
                See All Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Services grid – glassmorphic on pink */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#E91E8C] to-[#C41A78] p-6 md:p-8 shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,rgba(255,255,255,.03)_8px,rgba(255,255,255,.03)_16px)]" aria-hidden />
              <p className="relative text-xs font-semibold text-white/90 uppercase tracking-widest mb-5">
                ATM Services Available
              </p>
              <div className="relative grid grid-cols-2 gap-3 md:gap-4 mb-5">
                {[
                  { name: "Account Opening", icon: FolderOpen },
                  { name: "Fund Transfer", icon: ArrowLeftRight },
                  { name: "Instant Loan", icon: Banknote },
                  { name: "Airtime & Bills", icon: LayoutGrid },
                  { name: "BVN Linking", icon: Link2 },
                  { name: "Phone Update", icon: Smartphone },
                ].map((service) => (
                  <div
                    key={service.name}
                    className="rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 p-4 flex flex-col items-center justify-center text-center min-h-[100px]"
                  >
                    <service.icon className="w-8 h-8 text-white mb-2" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-white">{service.name}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="relative w-full py-3.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold text-sm uppercase tracking-wide transition-colors"
              >
                All at the ATM
              </button>
            </div>
          </motion.div>
        </div>
      </section>

       {/* Why TWIG ATMVAS / Services detail */}
      <section id="atm-vas-services" className="scroll-mt-24 bg-gray-50 px-6 md:px-8 py-20 md:py-24 w-full">
            <h2 className="mb-2 w-full md:w-[60%] font-bold text-xl md:text-3xl text-[#020817]">
              Deliver more than just cash withdrawal services to your customers with{" "}
              <span className="text-[#E91E8C]"> our product</span>
            </h2>
            <p className="mb-10 text-black text-sm">Customers can do so much more with an ATM than just withdrawing cash.</p>
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
                src="/src/assets/twig-atm-2.jpg"
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
                                 <span className="top-1/3 left-0 absolute bg-[#E91E8C] rounded-full w-1 h-8 -translate-y-1/2" />
               
                                 <div className="flex-shrink-0 justify-center items-center grid bg-[#E91E8C]/10 group-hover:bg-[#E91E8C]/20 rounded-xl w-11 h-11 transition-all">
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
          <h2 className="mb-3 font-bold text-lg md:text-4xl text-[#020817]">
            Harness the full potential of {" "}
            <span className="text-[#E91E8C]">ATMs.</span>
          </h2>
          <p className="w-full text-sm text-center">
          Reduce your customers' reliance on branches by offering self-service capabilities{' '}
          <br className="hidden md:inline" />
          via ATMs. The result? Time-savings for you and your customers.
        </p>
        </motion.div>

        <div className="gap-12 grid md:grid-cols-2 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 md:p-8 border-2 border-gray-100 hover:border-[#E91E8C]/20 rounded-2xl w-full transition-all"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-32 md:h-48 object-contain"
                />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#E91E8C] rounded-full w-1.5 h-1.5" />
                <span className="font-semibold text-[#E91E8C] text-xs uppercase tracking-wider">
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

      {/* Flexible Product Benefits Section */}
      <section className="bg-gray-100 px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="mb-3 font-bold text-xl md:text-4xl text-[#020817] leading-tight">
            Flexible product, built with your{" "}
            <span className="text-[#E91E8C]">business needs in mind</span>
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
            <span className="text-[#E91E8C]">TWIG SECURE ATM VAS  </span>
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
            <div className="flex justify-center items-center bg-[#E91E8C]/10 mx-auto mb-4 rounded-xl w-14 h-14">
              <img src={bank} alt="Banks" className="w-7 h-7" />
            </div>

            <h3 className="font-bold text-gray-900 text-4xl">{banksCount}+</h3>
            <p className="mt-2 font-medium text-gray-500">Banks</p>
          </div>

          {/* ATMs */}
          <div className="relative bg-white shadow-sm hover:shadow-lg p-8 border border-gray-200 rounded-2xl text-center transition-all">
            <div className="flex justify-center items-center bg-[#E91E8C]/10 mx-auto mb-4 rounded-xl w-14 h-14">
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
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
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
                className="bg-[#E91E8C] hover:bg-[#C41A78] shadow-lg px-8 py-3 rounded-full font-semibold text-white text-base transition-all"
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

export default TwigSecureAtmVas;