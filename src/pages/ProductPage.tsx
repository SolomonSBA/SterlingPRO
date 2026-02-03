import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PRODUCT_TITLES: Record<string, string> = {
  'twig-secure': 'TWIG Secure',
  'twig-secure-instant-pin': 'Twig Secure Instant PIN',
  'twig-secure-atm-vas': 'TWIG Secure ATM VAS',
  'atm-monit': 'ATM MONIT (Notif)',
  'intellicam': 'IntelliCAM',
  'twig-secure-i-card': 'Twig Secure Instant Card',
  'card-mon': 'Card MON',
  'twig-secure-pos-teller': 'Twig Secure POS Teller',
  'biotranx': 'BIOTRANX – Biometric Cardless Payment',
};

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = (slug && PRODUCT_TITLES[slug]) || slug || 'Product';

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              SterlingPRO Business Applications provides secure, innovative payment technologies for financial institutions and fintech. This product page is a placeholder for the full content from the original site.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#D80369] text-white font-medium rounded-lg hover:bg-[#b8025a] transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
