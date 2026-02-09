import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TwigSecure = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/01/customer-review.png',
      title: 'Delightful customer experiences'
    },
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/01/money-transfer.png',
      title: 'Faster in-branch transactions'
    },
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/02/route.png',
      title: 'Transaction tracking, monitoring and history'
    },
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/02/id-card.png',
      title: 'Real-time customer identification and authentication'
    },
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/01/atmmm-2.png',
      title: 'POS Terminal or PIN management'
    },
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/01/cyber-security.png',
      title: 'Payment Card Industry Data Security Standard (PCI DSS) compliant'
    }
  ];

  const benefits = [
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/01/nodes.png',
      title: 'FLEXIBLE',
      description: 'Allows for seamless integration to support your existing system and infrastructure and can be customised to meet your organisation\'s needs.'
    },
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/01/discount-1.png',
      title: 'EFFICIENT',
      description: 'Our product reduces the cost and complexity involved in building high-quality products and delivering delightful user experiences.'
    },
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/01/Shield-Done.png',
      title: 'SECURE & RELIABLE',
      description: 'We deliver security where you need it and reliable infrastructure that enables innovation within the banking and payments ecosystem.'
    },
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/01/headphones-1.png',
      title: 'AVAILABLE CUSTOMER SUPPORT',
      description: 'Our people are always available to talk to you to ensure that you integrate smoothly and build your products with minimal roadblocks.'
    },
    {
      icon: 'https://sterlingprong.com/wp-content/uploads/2023/01/technology.png',
      title: 'STATE-OF-THE-ART TECHNOLOGY',
      description: 'We are constantly innovating and improving our product as well as releasing new features, ensuring that your company is equipped with the tools needed to build for the future.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Background mesh pattern */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://sterlingprong.com/wp-content/uploads/2023/01/bg-mesh.svg" 
            alt="Background"
            className="absolute w-full h-full object-cover"
          />
        </div>

        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 max-w-7xl">
          <div className="items-center gap-12 grid lg:grid-cols-2">
            {/* Left Content */}
            <motion.div 
              className="space-y-6"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="font-extrabold text-gray-900 text-5xl lg:text-6xl xl:text-7xl leading-tight"
                variants={fadeInUp}
              >
                TWIG SECURE
              </motion.h1>
              
              <motion.h2 
                className="font-bold text-gray-700 text-3xl lg:text-4xl"
                variants={fadeInUp}
              >
                Seamless In-branch transactions
              </motion.h2>
              
              <motion.p 
                className="max-w-xl text-gray-600 text-lg lg:text-xl leading-relaxed"
                variants={fadeInUp}
              >
                Enable your customers to perform in-branch transactions using payment cards or biometric verification.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#D80369] hover:bg-[#b00258] shadow-lg hover:shadow-xl px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="relative"
              initial="initial"
              animate="animate"
              variants={fadeInRight}
            >
              <motion.img
                src="https://sterlingprong.com/wp-content/uploads/2023/02/Rectangle-3-_1_-Edited.webp"
                alt="Twig Secure Dashboard"
                className="shadow-2xl rounded-2xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating images */}
              <motion.img
                src="https://sterlingprong.com/wp-content/uploads/2023/02/Group-22-2-Edited-1.png"
                alt="Feature 1"
                className="-bottom-8 -left-8 absolute shadow-xl rounded-xl w-32 lg:w-48"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.img
                src="https://sterlingprong.com/wp-content/uploads/2023/02/Group-21-1-Edited.png"
                alt="Feature 2"
                className="-top-8 -right-8 absolute shadow-xl rounded-xl w-32 lg:w-48"
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Convenient & Secure Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-16 grid lg:grid-cols-2">
            {/* Image Side */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <img
                src="https://sterlingprong.com/wp-content/uploads/2023/02/Group-49-1-e1676245917851.png"
                alt="Convenient Banking"
                className="mx-auto w-full max-w-md"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h2 className="font-bold text-gray-900 text-4xl lg:text-5xl leading-tight">
                Convenient & Secure Customer Experience
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                TWIG SECURE offers a convenient and secure way to carry out transactions in-branch. Your customers can perform transactions like withdrawals, cash deposits, transfers and more using their cards and PIN on a POS device or via biometric verification, over-the-counter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flexible Products Section */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            className="mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 font-bold text-gray-900 text-4xl lg:text-5xl">
              Flexible - Pick what works best for your business
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-xl">
              Get the entire package or pick from our sub-products based on your needs.
            </p>
          </motion.div>

          <div className="gap-8 grid md:grid-cols-2">
            {/* POS Teller Card */}
            <motion.div
              className="bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-shadow"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-pink-50 to-purple-50 aspect-video">
                <img
                  src="https://sterlingprong.com/wp-content/uploads/2023/02/pos_20-jpg.webp"
                  alt="POS Teller"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4 font-bold text-gray-900 text-2xl">
                  POS Teller In-Branch
                </h3>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  POS Teller solution enables banks to provide fast and secure cash deposits, withdrawals, transfers, as well as other teller and customer service transactions at the branch to its customers, using payment cards and PINs.
                </p>
              </div>
            </motion.div>

            {/* FASTRANX Card */}
            <motion.div
              className="bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-shadow"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50 aspect-video">
                <img
                  src="https://sterlingprong.com/wp-content/uploads/2023/02/bio-jpg.webp"
                  alt="FASTRANX"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4 font-bold text-gray-900 text-2xl">
                  FASTRANX
                </h3>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  Enable your customers to use biometric verification to make secure and fast cash deposits, withdrawals, and other over-the-counter transaction at the branch without the need for slips and lengthy forms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delight Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-16 grid lg:grid-cols-2">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <img
                src="https://sterlingprong.com/wp-content/uploads/2023/01/img-1-1-1.png"
                alt="Customer Delight"
                className="mx-auto w-full max-w-lg"
              />
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <h2 className="font-bold text-gray-900 text-4xl lg:text-5xl leading-tight">
                Delight your customers with convenient and secure in-branch experiences
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                The solution is designed with your customer in mind and ensures effective, quick, and secure service when customers carry out transactions in your branch.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why TWIG SECURE Section */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            className="mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-6 font-bold text-gray-900 text-4xl lg:text-5xl">
              Why TWIG SECURE?
            </h2>
            <p className="mx-auto max-w-4xl text-gray-600 text-xl leading-relaxed">
              In-branch transactions are usually not so convenient for customers, with long wait times and various slips/forms. TWIG Secure helps financial institutions provide better customer experiences in-branch.
            </p>
            <p className="mt-8 font-bold text-gray-900 text-2xl">
              TWIG SECURE offers:
            </p>
          </motion.div>

          <motion.div 
            className="gap-8 grid md:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md hover:shadow-xl p-8 rounded-xl transition-all"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://sterlingprong.com/wp-content/uploads/2023/01/Union.svg" 
                      alt="Check"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <img 
                        src={feature.icon} 
                        alt={feature.title}
                        className="w-12 h-12"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-base leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flexible Product Built Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="items-center gap-16 grid lg:grid-cols-2 mb-20">
              <div>
                <h2 className="mb-6 font-bold text-gray-900 text-4xl lg:text-5xl leading-tight">
                  Flexible product, built with your business needs in mind
                </h2>
              </div>
              <div>
                <img
                  src="https://sterlingprong.com/wp-content/uploads/2023/01/img-1-3-1.png"
                  alt="Flexible Product"
                  className="ml-auto w-full max-w-md"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="gap-6 grid md:grid-cols-2 lg:grid-cols-5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 hover:bg-white hover:shadow-lg p-6 rounded-xl transition-all"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="mb-4">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="mb-3 font-bold text-[#D80369] text-sm uppercase tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.h3 
            className="mb-12 font-bold text-gray-900 text-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            TWIG SECURE is trusted by
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-12 lg:gap-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.img
              src="https://sterlingprong.com/wp-content/uploads/2023/01/jaiz-bank-logo-05B7DAAFDD-seeklogo-1.png"
              alt="Jaiz Bank"
              className="opacity-70 hover:opacity-100 grayscale hover:grayscale-0 h-12 transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://sterlingprong.com/wp-content/uploads/2023/01/STATIC-IBCT-165.svg"
              alt="Heritage Bank"
              className="opacity-70 hover:opacity-100 grayscale hover:grayscale-0 h-12 transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://sterlingprong.com/wp-content/uploads/2023/02/Screenshot_7-jpg.webp"
              alt="Providus Bank"
              className="opacity-70 hover:opacity-100 grayscale hover:grayscale-0 h-12 transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#D80369] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://sterlingprong.com/wp-content/uploads/2023/01/bg-mesh.svg" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-6 font-bold text-white text-4xl lg:text-5xl">
              Ready to collaborate?
            </h2>
            <p className="mb-10 text-pink-100 text-xl lg:text-2xl">
              Start delivering exceptional customer experiences.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 shadow-xl px-10 py-4 rounded-lg font-bold text-[#D80369] text-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TwigSecure;