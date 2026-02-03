import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo & Global HQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://sterlingprong.com/wp-content/uploads/2022/12/Sterling-pro-logo-1-01-1-300x50.png"
                alt="SterlingPRO Business Applications"
                className="h-8 w-auto"
              />
            </Link>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Global HQ</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D80369] flex-shrink-0 mt-0.5" />
                <p>Suite G04, 1 Quality Court, Chancery Lane, London WC2A 1HR United Kingdom.</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D80369] flex-shrink-0" />
                <a href="mailto:info@sterlingprobiotranx.co.uk" className="hover:text-[#D80369] transition-colors">
                  info@sterlingprobiotranx.co.uk
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a
                href="https://ng.linkedin.com/company/sterlingpro-business-applications"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#D80369] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/Sterlingpro_ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#D80369] hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sterlingprong/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#D80369] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Decorative Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D80369]/10 to-transparent rounded-full blur-3xl"></div>
              <p className="text-4xl md:text-5xl font-light italic text-gray-300 relative z-10">
                Just Transact...
              </p>
            </div>
          </motion.div>

          {/* Nigeria Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Nigeria Office</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D80369] flex-shrink-0 mt-0.5" />
                <p>15/17c Bush Street, Anthony-Maryland, Lagos, Nigeria.</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D80369] flex-shrink-0" />
                <a href="tel:+2348077394817" className="hover:text-[#D80369] transition-colors">
                  +234 (0) 807 739 4817
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D80369] flex-shrink-0" />
                <a href="mailto:info@sterlingprong.com" className="hover:text-[#D80369] transition-colors">
                  info@sterlingprong.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © 2026 SterlingPRO Business Applications. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
