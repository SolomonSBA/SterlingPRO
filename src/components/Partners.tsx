import React from 'react';
import { motion } from 'framer-motion';

// Partner logos: use placeholder until you add real logo URLs (e.g. from sterlingprong.com or bank CDNs).
const PARTNERS: { name: string; logoUrl?: string }[] = [
  { name: 'Heritage Bank' },
  { name: 'Wema Bank' },
  { name: 'Zenith Bank' },
  { name: 'FCMB' },
  { name: 'UBA' },
  { name: 'Skye Bank' },
  { name: 'Union Bank' },
  { name: 'First Bank' },
  { name: 'Sterling Bank' },
  { name: 'Taj Bank' },
  { name: 'Jaiz Bank' },
  { name: 'GTBank' },
  { name: 'UBA' },
  { name: 'IBTC' },
  { name: 'Polaris Bank' },
].map((p) => ({ ...p, logoUrl: p.logoUrl ?? '/placeholder.svg' }));

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden" aria-label="Our Partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-gray-500 uppercase tracking-wider text-center mb-10"
        >
          Our Partners
        </motion.h3>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex items-center gap-12 pr-12"
            >
              {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 h-12 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-10 w-auto max-w-[120px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
