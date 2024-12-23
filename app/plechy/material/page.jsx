"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "../../../components/useTranslations";

const TechnologiesPage = () => {
  const translations = useTranslations();

  if (!translations) {
    return (
      <div className="flex justify-center items-center text-[#d61414] font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 pt-[75px] min-h-screen ">
      {/* Header Section */}
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-[26px]">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white text-center"
          >
            {translations.MATERIAL_TITLE}
          </motion.h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-12 space-y-6 text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold"
          >
            {translations.MATERIAL_QUALITY_STATEMENT}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {translations.MATERIAL_PROCESSING_DESCRIPTION}
          </motion.p>
          <div className="rounded-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {translations.WAREHOUSE_STOCKS_DESCRIPTION}
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="italic text-gray-600"
          >
            {translations.ORDER_RECOMMENDATION}
          </motion.p>
        </section>

        {/* Cards Section */}
        
        {/* <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              title={translations.COLD_ROLLED_COILS_TITLE}
              items={translations.COLD_ROLLED_COILS_ITEMS}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card
              title={translations.GALVANIZED_COILS_TITLE}
              items={translations.GALVANIZED_COILS_ITEMS}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card
              title={translations.PLASTIC_COATED_COILS_TITLE}
              items={translations.PLASTIC_COATED_COILS_ITEMS}
              extraInfo={translations.PLASTIC_COATED_COILS_EXTRA_INFO}
            />
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

// Card Component
const Card = ({ title, items, extraInfo }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 border border-red-100">
    <h2 className="text-2xl font-bold text-red-600 mb-4">{title}</h2>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-gray-700 transition-colors font-semibold"
        >
          {item}
        </li>
      ))}
    </ul>
    {extraInfo && <p className="text-xs text-gray-500 mt-4">{extraInfo}</p>}
  </div>
);

export default TechnologiesPage;
