import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productSlug = (path: string) => `/products/${path}`;
  const servicesMenu = {
    'Self Service Banking Solutions': [
      { name: 'TWIG Secure', slug: 'twig-secure', items: [
        { name: 'Instant PIN', slug: 'twig-secure-instant-pin' },
        { name: 'ATM', slug: 'twig-secure' },
        { name: 'IVR', slug: 'twig-secure' },
        { name: 'Mobile', slug: 'twig-secure' },
        { name: 'USSD', slug: 'twig-secure' },
        { name: 'POS', slug: 'twig-secure' },
      ]},
      { name: 'TWIG Secure ATM VAS', slug: 'twig-secure-atm-vas', items: [
        { name: 'ATM Transfer', slug: 'twig-secure-atm-vas' },
        { name: 'ATM Instant Loan', slug: 'twig-secure-atm-vas' },
        { name: 'ATM Instant Acct Opening', slug: 'twig-secure-atm-vas' },
      ]},
      { name: 'ATM MONIT (Notif)', slug: 'atm-monit', items: [
        { name: 'IntelliCAM', slug: 'intellicam' },
        { name: 'Journal & Footage Archiver', slug: 'atm-monit' },
        { name: 'ATM Monitoring', slug: 'atm-monit' },
      ]},
    ],
    'In Branch Banking Solutions': [
      { name: 'Twig Secure Instant PIN', slug: 'twig-secure-instant-pin', items: [{ name: 'POS', slug: 'twig-secure-instant-pin' }] },
      { name: 'Twig Secure POS Teller', slug: 'twig-secure-pos-teller', items: [] },
      { name: 'Twig Secure Instant Card', slug: 'twig-secure-i-card', items: [] },
      { name: 'Card MON', slug: 'card-mon', items: [] },
    ],
    'BIOTRANX': [
      { name: 'Biometric Cardless Payment', slug: 'biotranx', items: [
        { name: 'ATM', slug: 'biotranx' },
        { name: 'POS', slug: 'biotranx' },
        { name: 'Mobile', slug: 'biotranx' },
        { name: 'Online', slug: 'biotranx' },
      ]},
    ],
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - source: sterlingprong.com */}
          <Link to="/" className="flex items-center">
            <img
              src="https://sterlingprong.com/wp-content/uploads/2022/12/Sterling-pro-logo-1-01-1-768x129.png"
              alt="SterlingPRO Business Applications"
              className="h-10 w-auto lg:h-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#D80369] ${
                location.pathname === '/' ? 'text-[#D80369]' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[#D80369] ${
                location.pathname === '/about' ? 'text-[#D80369]' : 'text-gray-700'
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-[#D80369] transition-colors">
                Applications & Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(servicesMenu).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="text-sm font-semibold text-[#D80369] mb-3 pb-2 border-b border-gray-100">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={productSlug(item.slug)}
                                  className="block text-sm text-gray-700 hover:text-[#D80369] transition-colors"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  {item.name}
                                </Link>
                                {item.items.length > 0 && (
                                  <ul className="ml-3 mt-1 space-y-1">
                                    {item.items.map((subItem) => (
                                      <li key={subItem.name}>
                                        <Link
                                          to={productSlug(subItem.slug)}
                                          className="block text-xs text-gray-500 hover:text-[#D80369] transition-colors"
                                          onClick={() => setServicesDropdownOpen(false)}
                                        >
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-[#D80369] text-white text-sm font-medium rounded-lg hover:bg-[#b8025a] transition-colors shadow-lg shadow-[#D80369]/25"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-[#D80369] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-[#D80369] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 font-medium"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Applications & Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesDropdownOpen && (
                  <div className="mt-3 ml-4 space-y-3">
                    {Object.entries(servicesMenu).map(([category, categoryItems]) => (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-[#D80369] mb-2">{category}</h4>
                        <ul className="space-y-1 ml-2">
                          {categoryItems.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={productSlug(item.slug)}
                                className="block text-sm text-gray-600 hover:text-[#D80369]"
                                onClick={() => { setMobileMenuOpen(false); setServicesDropdownOpen(false); }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 bg-[#D80369] text-white font-medium rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
