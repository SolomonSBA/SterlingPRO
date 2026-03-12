import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import TwigSecure from './products/TwigSecure';
import TwigSecureInstantPin from './products/TwigSecureInstantPin';
import TwigSecureInstantPinAtm from './products/TwigSecureInstantPinAtm';
import TwigSecureInstantPinPos from './products/TwigSecureInstantPinPos';
import TwigSecureInstantPinMobileInternet from './products/TwigSecureInstantPinMobileInternet';
import TwigSecureInstantPinUssd from './products/TwigSecureInstantPinUssd';
import TwigSecureInstantPinIvr from './products/TwigSecureInstantPinIvr';
import TwigSecureInstantPinBranch from './products/TwigSecureInstantPinBranch';
import TwigSecureAtmVas from './products/TwigSecureAtmVas';
import TwigSecureIcard from './products/TwigSecureIcard';
import TwigSecurePosTeller from './products/TwigSecurePosTeller';
import AtmMonit from './products/AtmMonit';
import Biotranx from './products/Biotranx';
import Biomonie from './products/Biomonie';
import CardMon from './products/CardMon';
import IntelliCam from './products/IntelliCam';
import JournalFootageArchival from './products/JournalFootageArchival';
import AtmMonitoring from './products/AtmMonitoring';
import NotFound from './NotFound';

const PRODUCT_COMPONENTS: Record<string, React.ComponentType> = {
  'twig-secure': TwigSecure,
  'twig-secure-instant-pin': TwigSecureInstantPin,
  'twig-secure-instant-pin-atm': TwigSecureInstantPinAtm,
  'twig-secure-instant-pin-pos': TwigSecureInstantPinPos,
  'twig-secure-instant-pin-mobile-internet': TwigSecureInstantPinMobileInternet,
  'twig-secure-instant-pin-ussd': TwigSecureInstantPinUssd,
  'twig-secure-instant-pin-ivr': TwigSecureInstantPinIvr,
  'twig-secure-instant-pin-branch': TwigSecureInstantPinBranch,
  'twig-secure-atm-vas': TwigSecureAtmVas,
  'atm-monit': AtmMonit,
  'intellicam': IntelliCam,
  'journal-footage-archival': JournalFootageArchival,
  'atm-monitoring': AtmMonitoring,
  'twig-secure-i-card': TwigSecureIcard,
  'card-mon': CardMon,
  'twig-secure-pos-teller': TwigSecurePosTeller,
  'biotranx': Biotranx,
  'biomonie': Biomonie,
};

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const ProductComponent = slug ? PRODUCT_COMPONENTS[slug] : null;

  if(!ProductComponent) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-24 pb-20">
          <NotFound/>
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
          <ProductComponent/>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
