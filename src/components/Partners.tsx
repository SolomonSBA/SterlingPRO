import React from 'react';
import { motion } from 'framer-motion';

import HeritageBank from '../assets/heritage-bank-logo.png';
import WemaBank from '../assets/wema-logo.jpg';
import ZenithBank from '../assets/Zenith-Bank-logo.png';
import FCMB from '../assets/FCMB-logo.png';
import UBA from '../assets/Uba-bank-logo.webp';
import SkyeBank from '../assets/skye-bank-logo.webp';
import UnionBank from '../assets/union-bank.png';
import FirstBank from '../assets/first-bank-logo.png';
import SterlingBank from '../assets/Sterling-Bank-logo.png';
import TajBank from '../assets/Taj-bank-logo.png';
import JaizBank from '../assets/jaiz-logo.jpg';
import GTBank from '../assets/GTBank-logo.png';
import IBTC from '../assets/Stanbic-logo.webp';
import PolarisBank from '../assets/Polaris-bank-logo.png';

const PARTNERS: { name: string; logoUrl: string }[] = [
  { name: 'Heritage Bank', logoUrl: HeritageBank },
  { name: 'Wema Bank', logoUrl: WemaBank },
  { name: 'Zenith Bank', logoUrl: ZenithBank },
  { name: 'FCMB', logoUrl: FCMB },
  { name: 'UBA', logoUrl: UBA },
  { name: 'Skye Bank', logoUrl: SkyeBank },
  { name: 'Union Bank', logoUrl: UnionBank },
  { name: 'First Bank', logoUrl: FirstBank },
  { name: 'Sterling Bank', logoUrl: SterlingBank },
  { name: 'Taj Bank', logoUrl: TajBank },
  { name: 'Jaiz Bank', logoUrl: JaizBank },
  { name: 'GTBank', logoUrl: GTBank },
  { name: 'UBA', logoUrl: UBA },
  { name: 'IBTC', logoUrl: IBTC },
  { name: 'Polaris Bank', logoUrl: PolarisBank },
];

const Partners: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-16 lg:py-20 w-full overflow-hidden">
      <h2 className="mb-8 md:mb-12 px-4 font-bold text-gray-800 text-2xl sm:text-3xl md:text-4xl text-center">
        Our Partners
      </h2>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 lg:gap-16"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 justify-center items-center bg-white shadow-sm hover:shadow-md p-3 sm:p-4 rounded-lg w-24 sm:w-32 md:w-40 lg:w-48 h-16 sm:h-20 md:h-24 lg:h-28 transition-shadow"
            >
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;