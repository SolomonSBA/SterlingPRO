import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Variants } from "framer-motion";
import { Target, Eye, TrendingUp, Users, Lightbulb, Award, ArrowRight } from 'lucide-react';
import whoWeAres from "../assets/HomePage.jpg";
import teamImage from "../assets/teamImage.webp";

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const AboutPage: React.FC = () => {
  const coreValues = [
    { icon: TrendingUp, title: 'Continuous Improvement', description: 'We continuously improve products, processes, and the services we provide.' },
    { icon: Users, title: 'Rolling Up our Sleeves', description: 'We dive in head first to get work done and solve problems no matter what it takes.' },
    { icon: Eye, title: 'Transparency', description: 'Real-time, open and honest communication with every stakeholder at all times.' },
    { icon: Lightbulb, title: 'Creativity', description: 'Innovative thinking and creative solutions to complex challenges.' },
    { icon: Award, title: 'Excellence', description: 'Our work is our art meticulous attention to detail and the highest quality.' },
  ];

  const timeline = [
    { year: '2009', title: 'Launched TWIG Decentralised Statement Print Solution' },
    { year: '2010–2012', title: 'Developed TWIG SECURE Pin Issuance Solution' },
    { year: '2013–2014', title: 'Developed Instant PIN via POS, ATM and self-serve channels' },
    { year: '2014–2015', title: 'Launched ATM Monit Solution' },
    { year: '2016–2019', title: 'Introduced ATM Biometric Card-less Payment Solution' },
    { year: '2020–2021', title: 'Expanded ATM Biometric Card-less Solution' },
    { year: '2022', title: 'Launch B2C Products (Biometric Payments)' },
  ];

  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(233,30,140,0.06),transparent)]" aria-hidden />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="rounded-full bg-[#E91E8C] w-2 h-2" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">About us</span>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-xl"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Building world class financial experiences
                </h1>
                <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed">
                  We are passionate about building and pushing novel solutions that enhance the payment ecosystem across the globe and we provide seamless value-added services to our customers.
                </p>
                <div className="mt-10 flex items-center gap-8 text-sm">
                  <span className="font-semibold text-gray-900">Since 2009</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-600">Payment infrastructure you can trust</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-[#E91E8C]/20 to-transparent rounded-3xl blur-xl" />
                <img
                  src={teamImage}
                  alt="SterlingPRO team"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 lg:py-32 bg-gray-50/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="relative order-2 lg:order-1"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-[#E91E8C]/5 to-transparent rounded-3xl" />
                <img
                  src={whoWeAres}
                  alt="Who we are"
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="order-1 lg:order-2"
              >
                <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-[0.2em] mb-4">Who we are</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                  Excellence in every transaction
                </h2>
                <div className="mt-8 space-y-6 text-gray-600 leading-relaxed max-w-xl">
                  <p>
                    At SterlingPRO we pursue global best practice in our products and have done so since 2009.
                  </p>
                  <p>
                    We pioneered the first payment card InstantPIN self-serve PIN selection solution in the world to run on ATMs, and we keep pushing: INTELLICAM monitors every transaction and declines when the camera is blocked or a face isn’t detected, with on screen notification.
                  </p>
                  <p>
                    Today, Biometric Payments delivers the first end-to-end biometric cardless payment technology that runs on the payment card framework and infrastructure worldwide.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-[0.2em] mb-3">What drives us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Mission & Vision</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#E91E8C] to-[#C41A78] p-8 lg:p-10 text-white shadow-xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                  <p className="text-white/90 leading-relaxed text-base">
                    To build and empower financial institutions across the globe with solutions that deliver premium customer experience and guarantee safety on every transaction.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="group relative rounded-2xl overflow-hidden bg-gray-900 p-8 lg:p-10 text-white shadow-xl"
              >
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                  <p className="text-white/90 leading-relaxed text-base">
                    To build and provide payment and financial technologies that build trust and confidence in payment systems and processes for both the end user and financial institutions across the globe.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 lg:py-32 bg-gray-50/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-[0.2em] mb-3">What we stand for</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Core Values</h2>
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#E91E8C]/10 transition-all duration-300"
                >
                  <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-[#E91E8C]/0 group-hover:bg-[#E91E8C] transition-colors duration-300" />
                  <div className="w-12 h-12 rounded-xl bg-[#E91E8C]/10 flex items-center justify-center text-[#E91E8C] mb-5">
                    <value.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-[0.2em] mb-3">Our journey</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Product Evolution</h2>
              <p className="mt-3 text-gray-600">The growth of SterlingPRO over the years.</p>
            </motion.div>
            <div className="relative">
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#E91E8C] via-[#E91E8C]/50 to-transparent sm:-translate-x-px" />
              <ul className="space-y-10">
                {timeline.map((item, index) => (
                  <motion.li
                    key={item.year}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 pl-12 sm:pl-0 sm:odd:flex-row-reverse sm:odd:text-right py-4 sm:py-6"
                  >
                    <div className="sm:w-1/2 sm:odd:order-2">
                      <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:border-[#E91E8C]/20 transition-colors">
                        <span className="inline-block text-xs font-bold text-[#E91E8C] uppercase tracking-wider">{item.year}</span>
                        <p className="mt-2 text-gray-800 font-medium">{item.title}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 sm:left-1/2 top-2 w-3 h-3 rounded-full bg-[#E91E8C] border-4 border-white shadow sm:-translate-x-1/2 z-10" />
                    <div className="hidden sm:block sm:w-1/2" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Team */}
        {/* <section className="py-24 lg:py-32 bg-gray-50/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-[0.2em] mb-3">The people behind SterlingPRO</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Team</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E91E8C] to-[#C41A78]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" aria-hidden />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to collaborate?
              </h2>
              <p className="text-white/90 text-lg mb-10">
                Start delivering exceptional customer experiences.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E91E8C] font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-xl"
              >
                Start now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
