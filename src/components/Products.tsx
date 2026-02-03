import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Building2, Fingerprint } from 'lucide-react';

interface ProductItem {
  name: string;
  items: string[];
}

interface ProductCategory {
  title: string;
  icon: React.ReactNode;
  products: ProductItem[];
}

const Products: React.FC = () => {
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({});

  const toggleProduct = (key: string) => {
    setExpandedProducts(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories: ProductCategory[] = [
    {
      title: 'Self-Service Banking Solution',
      icon: <Shield className="w-6 h-6" />,
      products: [
        { name: 'TWIG Secure', items: ['Instant PIN', 'ATM', 'IVR', 'Mobile', 'USSD', 'POS'] },
        { name: 'TWIG Secure ATM VAS', items: ['ATM Transfer', 'ATM Instant Loan', 'ATM Instant Acct Opening'] },
        { name: 'ATM MONIT (Notif)', items: ['IntelliCAM', 'Journal & Footage Archiver', 'ATM Monitoring'] },
      ],
    },
    {
      title: 'In Branch Banking Solution',
      icon: <Building2 className="w-6 h-6" />,
      products: [
        { name: 'Twig Secure Instant PIN', items: ['POS'] },
        { name: 'Twig Secure POS Teller', items: [] },
        { name: 'Twig Secure Instant Card', items: [] },
        { name: 'Card MON', items: [] },
      ],
    },
    {
      title: 'BIOTRANX',
      icon: <Fingerprint className="w-6 h-6" />,
      products: [
        { name: 'Biometric Cardless Payment', items: ['ATM', 'POS', 'Mobile', 'Online'] },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#D80369] uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            With our payment products, we support financial institutions and fintech with innovative payment solutions that improve service delivery and provide great customer experience.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D80369] to-pink-400 flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.products.map((product) => {
                  const productKey = `${category.title}-${product.name}`;
                  const isExpanded = expandedProducts[productKey];
                  const hasItems = product.items.length > 0;

                  return (
                    <div key={product.name} className="border-b border-gray-200 pb-3 last:border-0">
                      <button
                        onClick={() => hasItems && toggleProduct(productKey)}
                        className={`w-full flex items-center justify-between text-left ${
                          hasItems ? 'cursor-pointer hover:text-[#D80369]' : 'cursor-default'
                        } transition-colors`}
                      >
                        <span className="text-sm font-medium text-gray-700 hover:text-[#D80369]">
                          {product.name}
                        </span>
                        {hasItems && (
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>

                      <AnimatePresence>
                        {isExpanded && hasItems && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 ml-4 space-y-1 overflow-hidden"
                          >
                            {product.items.map((item) => (
                              <li key={item}>
                                <button className="text-xs text-gray-500 hover:text-[#D80369] transition-colors">
                                  {item}
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
