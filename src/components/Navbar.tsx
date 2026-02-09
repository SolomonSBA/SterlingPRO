import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);
  const [desktopExpandedCategory, setDesktopExpandedCategory] = useState<string | null>(null);
  const [desktopExpandedSubMenu, setDesktopExpandedSubMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setExpandedCategory(null);
    setExpandedSubMenu(null);
    setDesktopExpandedCategory(null);
    setDesktopExpandedSubMenu(null);
    // Scroll to top of page on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

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

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedSubMenu(null); // Close any open sub-menu when switching categories
  };

  const toggleSubMenu = (itemName: string) => {
    setExpandedSubMenu(expandedSubMenu === itemName ? null : itemName);
  };

  const toggleDesktopCategory = (category: string) => {
    setDesktopExpandedCategory(desktopExpandedCategory === category ? null : category);
    setDesktopExpandedSubMenu(null);
  };

  const toggleDesktopSubMenu = (itemName: string) => {
    setDesktopExpandedSubMenu(desktopExpandedSubMenu === itemName ? null : itemName);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-shrink-0 items-center">
            <img
              src="https://sterlingprong.com/wp-content/uploads/2022/12/Sterling-pro-logo-1-01-1-768x129.png"
              alt="SterlingPRO Business Applications"
              className="w-auto h-8 sm:h-9 md:h-10 lg:h-11"
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
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
              <button className="flex items-center font-medium text-gray-700 hover:text-[#D80369] text-sm whitespace-nowrap transition-colors">
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
                    className="top-full left-1/2 absolute bg-white shadow-2xl mt-2 p-4 border border-gray-100 rounded-xl w-[400px] 2xl:w-[450px] max-h-[80vh] overflow-y-auto -translate-x-1/2"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="space-y-2">
                      {Object.entries(servicesMenu).map(([category, categoryItems]) => (
                        <div key={category}>
                          {/* Category Dropdown Button */}
                          <button
                            className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-3 py-2.5 rounded-lg w-full text-left transition-colors"
                            onClick={() => toggleDesktopCategory(category)}
                          >
                            <span className="font-semibold text-[#D80369] text-sm">{category}</span>
                            <ChevronRight className={`w-4 h-4 text-[#D80369] transition-transform ${desktopExpandedCategory === category ? 'rotate-90' : ''}`} />
                          </button>

                          {/* Category Items */}
                          <AnimatePresence>
                            {desktopExpandedCategory === category && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <ul className="space-y-1 mt-1 ml-3">
                                  {categoryItems.map((item) => (
                                    <li key={item.name}>
                                      {/* Main Item */}
                                      {item.items.length > 0 ? (
                                        <>
                                          <button
                                            className="flex justify-between items-center hover:bg-gray-50 px-3 py-2 rounded-lg w-full text-left transition-colors"
                                            onClick={() => toggleDesktopSubMenu(item.name)}
                                          >
                                            <span className="text-gray-700 text-sm">{item.name}</span>
                                            <ChevronRight className={`w-3 h-3 text-gray-500 transition-transform ${desktopExpandedSubMenu === item.name ? 'rotate-90' : ''}`} />
                                          </button>
                                          
                                          {/* Sub Items */}
                                          <AnimatePresence>
                                            {desktopExpandedSubMenu === item.name && (
                                              <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="space-y-1 mt-1 ml-4 overflow-hidden"
                                              >
                                                {item.items.map((subItem) => (
                                                  <li key={subItem.name}>
                                                    <Link
                                                      to={productSlug(subItem.slug)}
                                                      className="block hover:bg-pink-50 px-3 py-2 rounded-lg text-gray-600 hover:text-[#D80369] text-xs transition-colors"
                                                      onClick={() => {
                                                        setServicesDropdownOpen(false);
                                                        setDesktopExpandedCategory(null);
                                                        setDesktopExpandedSubMenu(null);
                                                      }}
                                                    >
                                                      • {subItem.name}
                                                    </Link>
                                                  </li>
                                                ))}
                                              </motion.ul>
                                            )}
                                          </AnimatePresence>
                                        </>
                                      ) : (
                                        <Link
                                          to={productSlug(item.slug)}
                                          className="block hover:bg-gray-50 px-3 py-2 rounded-lg text-gray-700 hover:text-[#D80369] text-sm transition-colors"
                                          onClick={() => {
                                            setServicesDropdownOpen(false);
                                            setDesktopExpandedCategory(null);
                                          }}
                                        >
                                          {item.name}
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Tablet Navigation (lg screens only) - Simplified menu */}
          <div className="hidden xl:hidden lg:flex items-center space-x-4">
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
              About
            </Link>
          </div>

          {/* Contact Button - Desktop & Tablet */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center bg-[#D80369] hover:bg-[#b8025a] shadow-[#D80369]/25 shadow-lg px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-medium text-white text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden -mr-2 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-gray-100 border-t overflow-hidden"
          >
            <div className="space-y-1 px-4 sm:px-6 py-4 sm:py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {/* Home Link */}
              <Link
                to="/"
                className={`block py-3 px-3 rounded-lg font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-[#D80369] bg-pink-50' 
                    : 'text-gray-700 hover:text-[#D80369] hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* About Link */}
              <Link
                to="/about"
                className={`block py-3 px-3 rounded-lg font-medium transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-[#D80369] bg-pink-50' 
                    : 'text-gray-700 hover:text-[#D80369] hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Applications & Services Dropdown */}
              <div className="mt-2 pt-2 border-gray-100 border-t">
                <button
                  className="flex justify-between items-center hover:bg-gray-50 px-3 py-3 rounded-lg w-full font-medium text-gray-700 transition-colors"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  <span>Applications & Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 mt-2">
                        {Object.entries(servicesMenu).map(([category, categoryItems]) => (
                          <div key={category}>
                            {/* Category Dropdown */}
                            <button
                              className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-3 py-2.5 rounded-lg w-full text-left transition-colors"
                              onClick={() => toggleCategory(category)}
                            >
                              <span className="font-semibold text-[#D80369] text-sm">{category}</span>
                              <ChevronRight className={`w-4 h-4 text-[#D80369] transition-transform ${expandedCategory === category ? 'rotate-90' : ''}`} />
                            </button>

                            {/* Category Items */}
                            <AnimatePresence>
                              {expandedCategory === category && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <ul className="space-y-1 mt-1 ml-3">
                                    {categoryItems.map((item) => (
                                      <li key={item.name}>
                                        {/* Main Item */}
                                        {item.items.length > 0 ? (
                                          <>
                                            <button
                                              className="flex justify-between items-center hover:bg-gray-50 px-3 py-2 rounded-lg w-full text-left transition-colors"
                                              onClick={() => toggleSubMenu(item.name)}
                                            >
                                              <span className="text-gray-700 text-sm">{item.name}</span>
                                              <ChevronRight className={`w-3 h-3 text-gray-500 transition-transform ${expandedSubMenu === item.name ? 'rotate-90' : ''}`} />
                                            </button>
                                            
                                            {/* Sub Items */}
                                            <AnimatePresence>
                                              {expandedSubMenu === item.name && (
                                                <motion.ul
                                                  initial={{ opacity: 0, height: 0 }}
                                                  animate={{ opacity: 1, height: 'auto' }}
                                                  exit={{ opacity: 0, height: 0 }}
                                                  className="space-y-1 mt-1 ml-4 overflow-hidden"
                                                >
                                                  {item.items.map((subItem) => (
                                                    <li key={subItem.name}>
                                                      <Link
                                                        to={productSlug(subItem.slug)}
                                                        className="block hover:bg-pink-50 px-3 py-2 rounded-lg text-gray-600 hover:text-[#D80369] text-xs transition-colors"
                                                        onClick={() => {
                                                          setMobileMenuOpen(false);
                                                          setServicesDropdownOpen(false);
                                                          setExpandedCategory(null);
                                                          setExpandedSubMenu(null);
                                                        }}
                                                      >
                                                        • {subItem.name}
                                                      </Link>
                                                    </li>
                                                  ))}
                                                </motion.ul>
                                              )}
                                            </AnimatePresence>
                                          </>
                                        ) : (
                                          <Link
                                            to={productSlug(item.slug)}
                                            className="block hover:bg-gray-50 px-3 py-2 rounded-lg text-gray-700 hover:text-[#D80369] text-sm transition-colors"
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setServicesDropdownOpen(false);
                                              setExpandedCategory(null);
                                            }}
                                          >
                                            {item.name}
                                          </Link>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Contact Button */}
              <Link
                to="/contact"
                className="block bg-[#D80369] hover:bg-[#b8025a] shadow-[#D80369]/25 shadow-lg mt-4 px-6 py-3 rounded-lg w-full font-medium text-white text-center transition-colors"
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