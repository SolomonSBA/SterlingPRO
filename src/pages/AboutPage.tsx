import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, TrendingUp, Users, Lightbulb, Award } from 'lucide-react';
import whoWeAres from "../assets/HomePage.jpg";


const AboutPage: React.FC = () => {
  const teamImage = "https://d64gsuwffb70l.cloudfront.net/697f7ac71d12f67dac85b673_1769962384368_2c3170ef.png";
  const teamMembers = [
    { name: 'John Doe', role: 'Chief Executive Officer', image: 'https://d64gsuwffb70l.cloudfront.net/697f7ac71d12f67dac85b673_1769962402937_0a994ecb.png' },
    { name: 'Jane Smith', role: 'Chief Technology Officer', image: 'https://d64gsuwffb70l.cloudfront.net/697f7ac71d12f67dac85b673_1769962408805_0fcc1a40.png' },
    { name: 'Michael Johnson', role: 'Chief Operations Officer', image: 'https://d64gsuwffb70l.cloudfront.net/697f7ac71d12f67dac85b673_1769962401061_b7e9c925.jpg' },
    { name: 'Sarah Williams', role: 'Chief Financial Officer', image: 'https://d64gsuwffb70l.cloudfront.net/697f7ac71d12f67dac85b673_1769962404623_8e949876.png' },
  ];

  const coreValues = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Continuous Improvement',
      description: 'As a company, we continuously improve products, processes, and the services we provide.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Rolling Up our Sleeves',
      description: 'We dive in head first to get work done and solve problems no matter what it takes.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparency',
      description: 'We value real-time, open and honest communication with every stakeholder at all times.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Creativity',
      description: 'We foster innovative thinking and creative solutions to complex challenges.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Our work is our art, and we stick to that with meticulous attention to detail and the highest quality.',
    },
  ];

  const timeline = [
    { year: '2009', title: 'Launched TWIG Decentralised Statement Print Solution' },
    { year: '2010-2012', title: 'Developed TWIG SECURE Pin Issuance Solution' },
    { year: '2013-2014', title: 'Developed Instant PIN solution via POS, ATM and Self serve channels' },
    { year: '2014-2015', title: 'Launched ATM Monit Solution' },
    { year: '2016-2019', title: 'Introduced ATM Biometric Card-less Payment Solution' },
    { year: '2020-2021', title: 'Expanded ATM Biometric Card-less Solution' },
    { year: '2022', title: 'Launch B2C Products (BIOTRANX)' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white via-white to-pink-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building world-class financial experiences
                </h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  We are passionate about building and pushing novel solutions that enhance the payment ecosystem across the globe. We provide seamless value-added services to our customers.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={teamImage}
                  alt="Our team"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-[#D80369]/10 to-transparent rounded-3xl"></div>
                <img
                  src={whoWeAres}
                  alt="Who we are"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Who we are</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    At SterlingPRO, we exude excellence and pursue global best standard in our products and have been doing so since 2009.
                  </p>
                  <p>
                    We thrive on innovation, pushing boundaries and pioneered the first ever payment card InstantPIN self-serve PIN selection solution in the world to run on ATMs.
                  </p>
                  <p>
                    Our ATM INTELLICAM, an intelligent camera solution that monitors customers interaction on the ATM across every transaction and declines when the camera is either blocked or a face is not detected during the transaction with on-screen notification.
                  </p>
                  <p>
                    And now BIOTRANX, the first end-to-end Biometric Cardless Payment Technology that runs on the payment card framework / infrastructure in the world.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#D80369] to-pink-500 rounded-2xl p-8 text-white"
              >
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed">
                  Our mission is to build and empower financial institutions across the globe with solutions that deliver premium customer experience and guarantee safety on every transaction.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900 rounded-2xl p-8 text-white"
              >
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed">
                  To build and provide payment and financial technologies that build trust and confidence in payment systems and processes for both the end user and financial institutions across the globe.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Core Values</h2>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D80369]/10 to-pink-100 flex items-center justify-center text-[#D80369] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-[#D80369] uppercase tracking-wider">
                Prototype
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                Product Evolution
              </h2>
              <p className="mt-4 text-gray-600">
                Explore the growth of SterlingPRO over the years.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#D80369] to-pink-200"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                        <span className="text-sm font-bold text-[#D80369]">{item.year}</span>
                        <p className="mt-2 text-gray-700 font-medium">{item.title}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-[#D80369] border-4 border-white shadow"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Team</h2>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#D80369] to-pink-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to collaborate?
              </h2>
              <p className="text-white/90 mb-8">
                Start delivering exceptional customer experiences.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#D80369] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start now
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
