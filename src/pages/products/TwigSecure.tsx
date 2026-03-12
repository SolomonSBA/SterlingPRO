import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import posTeller from "../../assets/pos_20-jpg.webp";
import bioImg from "../../assets/bio-jpg.webp";
import atm from "../../assets/atmmm-2.png";
import cyberSecurity from "../../assets/cyber-security.png";
import idCard from "../../assets/id-card.png";
import moneyTransfer from "../../assets/money-transfer.png";
import routeIcon from "../../assets/route.png";
import customerReview from "../../assets/customer-review.png";
import nodesImg from "../../assets/nodesImg.png";
import headphones from "../../assets/headphones-1.png";
import discount from "../../assets/discount-1.png";
import shieldDone from "../../assets/Shield-Done.png";
import technology from "../../assets/technology.png";

const TwigSecure: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      image: cyberSecurity,
      title: "TWIG Secure Instant PIN",
      description:
        "Enable customers to securely select or change their payment card PIN in-branch, assisted by staff using a POS terminal at the counter.",
      slug: "/products/twig-secure-instant-pin-branch",
    },
    {
      image: bioImg,
      title: "TWIG Secure POSTeller",
      description:
        "Extend teller and branch transaction services securely through Point-of-Sale (POS) terminals. Ideal for branch, agency banking, and controlled service locations.",
      slug: "/products/twig-secure-pos-teller",
    },
    {
      image: moneyTransfer,
      title: "CardMon",
      description:
        "Automate the end-to-end settlement lifecycle across ATM (NOU/ROU), IMTO, PayDirect, and VTU channels with straight-through processing, dual-control workflows, and comprehensive audit trails.",
      slug: "/products/card-mon",
    },
  ];

  const reasons = [
    {
      image: customerReview,
      title: "Customer Experience",
      description: "Delightful customer experiences",
    },
    {
      image: moneyTransfer,
      title: "Speed",
      description: "Faster in-branch transactions",
    },
    {
      image: routeIcon,
      title: "Tracking",
      description: "Transaction tracking, monitoring and history",
    },
    {
      image: idCard,
      title: "Identification",
      description: "Real-time customer identification and authentication",
    },
    {
      image: atm,
      title: "Pos Terminal",
      description: "POS Terminal or PIN management",
    },
    {
      image: cyberSecurity,
      title: "CyberSecurity",
      description:
        "Payment Card Industry Data Security Standard (PCI DSS) compliant",
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
    { name: "Jaiz Bank", logo: "/src/assets/jaiz-logo.jpg" },
    {
      name: "Stanbic IBTC",
      logo: "/src/assets/Stanbic-logo.webp",
    },
    { name: "GTBank", logo: "/src/assets/GTBank-logo.png" },
  ];

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      {/* Hero Section*/}
       <section className="bg-white px-6 md:px-10 pt-10 pb-20 md:pb-24 w-full 0">
        <div className="items-center gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:text-left text-center"
          >
            <div className="flex justify-center md:justify-start gap-2 mb-4 md:mb-6">
              <div className="bg-[#E91E8C] mt-1 rounded-full w-2 h-2"></div>
              <span className="font-medium text-[#E91E8C] text-xs md:text-sm uppercase tracking-wide">
                In-Branch Banking Solutions
              </span>
            </div>

            <h1 className="mb-4 md:mb-6 font-bold text-2xl text-[#020817] md:text-4xl leading-tight">
              Secure and Efficient Banking at the <span className="text-[#E91E8C]">Counter</span>
            </h1>

            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              Modern banking customers expect fast, secure service even when they visit a branch. SterlingPRO’s In-Branch
              Banking Solutions provide banks with the tools needed to streamline counter transactions, improve customer
              experience, and strengthen operational control within the branch environment.
            </p>
            <p className="mx-auto md:mx-0 mb-6 md:mb-8 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              By combining secure authentication, transaction processing, and monitoring capabilities, these solutions help
              banks modernize the branch experience while maintaining compliance with operational and security requirements.
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
                src="/src/assets/twig-secure2.jpg"
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
                src="/src/assets/twig-secure1.jpg"
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
            <h2 className="mb-4 md:mb-6 font-bold text-2xl text-[#020817] md:text-4xl leading-tight">
              Built for Modern <span className="text-[#E91E8C]">Branch Operations</span>
            </h2>

            <p className="mx-auto md:mx-0 mb-6 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              Branches remain an important customer touchpoint for many banking services. SterlingPRO’s in-branch solutions
              support bank staff with secure systems that simplify customer transactions, reduce manual processes, and improve
              service efficiency.
            </p>
            <p className="mx-auto md:mx-0 mb-6 max-w-xl text-gray-600 text-sm md:text-lg leading-relaxed">
              From instant PIN selection to POS-based teller services and settlement automation, the platform helps banks
              deliver reliable services while maintaining full visibility into in-branch activities.
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
          <h2 className="mb-3 font-bold text-lg text-[#020817] md:text-3xl">
            Solutions within the{" "}
            <span className="text-[#E91E8C]">In-Branch Banking</span> Suite
          </h2>
          <p className="text-gray-600 text-sm">
            Secure, operationally controlled tooling that helps branch teams deliver efficient service—without compromising
            compliance.
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
                  className="w-full h-32 md:h-64 object-contain"
                />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#E91E8C] rounded-full w-1.5 h-1.5" />
                <span className="font-semibold text-[#E91E8C] text-xs uppercase tracking-wider">
                  Solution
                </span>
              </div>

              <h3 className="mb-3 font-bold text-gray-900 text-lg">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => navigate(feature.slug)}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:border-[#E91E8C]/30 hover:text-[#E91E8C] transition-colors"
                >
                  Learn more
                </button>
              </div>
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
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#E91E8C] rounded-full w-2 h-2" />
              <span className="font-semibold text-[#E91E8C] text-xs uppercase tracking-wide">
                Customer Experience
              </span>
            </div>

            <h2 className="mb-5 font-bold text-gray-900 text-lg md:text-3xl leading-tight">
              Delight your customers with{" "}
              <span className="text-[#E91E8C]">
                convenient and secure in-branch experiences
              </span>
            </h2>

            <p className="max-w-xl text-gray-600 text-sm md:text-base leading-relaxed">
              The solution is designed with your customer in mind and ensures
              effective, quick, and secure service when customers carry out
              transactions in your branch.
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
                src="/src/assets/twig-secure-4.jpg"
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
                src="/src/assets/twig-secure-3.jpg"
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
            <h2 className="mb-4 font-bold text-lg text-[#020817] md:text-3xl">
              Why <span className="text-[#E91E8C]">TWIG SECURE?</span>
            </h2>

            <p className="mb-8 max-w-xl text-gray-600 text-sm md:text-base leading-relaxed">
              In-branch transactions are usually not so convenient for
              customers, with long wait times and various slips/forms. TWIG
              Secure helps financial institutions provide better customer
              experiences in branch.
            </p>

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
      <section className="bg-white px-6 md:px-8 py-20 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="font-bold text-lg md:text-4xl text-[#020817]">
            <span className="text-[#E91E8C]">TWIG SECURE</span> is trusted by
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="md:grayscale md:hover:grayscale-0 transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-auto h-8 md:h-10 object-contain"
              />
            </motion.div>
          ))}
        </div>
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

export default TwigSecure;
