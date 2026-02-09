import React, { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem: React.FC<{
  title: string;
  description: string;
  index: number;
}> = ({ title, description, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl overflow-hidden transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center gap-4 px-6 py-4 w-full text-left"
      >
        <h3 className="font-semibold text-gray-900 text-base md:text-lg">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-shrink-0 justify-center items-center bg-[#D80369] rounded-full w-8 h-8"
        >
          <span className="font-bold text-white text-xl">+</span>
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AccordionItem;