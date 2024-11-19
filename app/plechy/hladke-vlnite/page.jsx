"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "../../../components/useTranslations";
import Support from "../../../components/Support";

const PlechSection = ({ title, description }) => (
  <motion.div
    className="mb-8 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
    {description.map((text, index) => (
      <p key={index} className="text-gray-700 mb-2 last:mb-0">
        {text}
      </p>
    ))}
  </motion.div>
);

export default function PlechyPage() {
  const translations = useTranslations();

  if (!translations) {
    return (
      <div className="flex justify-center items-center text-[#d61414] font-bold">
        Loading...
      </div>
    );
  }

  const smoothSheetDetails = translations.SMOOTH_SHEET_DETAILS;
  const corrugatedSheetDetails = translations.CORRUGATED_SHEET_DETAILS;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h2
            className="text-4xl font-bold text-white text-center pt-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations.PAGE_TITLE}
          </motion.h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="flex flex-col md:flex-row items-center mb-12 bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src="/hladke.jpg"
            alt={translations.IMAGE_ALT}
            width={600}
            height={400}
            className="md:w-1/2 object-cover w-full h-full"
          />
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {translations.ABOUT_SHEETS_TITLE}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {translations.ABOUT_SHEETS_DESCRIPTION}
            </p>
          </div>
        </motion.div>

        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-semibold text-gray-800 mb-6 text-center"
          >
            {translations.OUR_OFFER_TITLE}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <PlechSection
              title={translations.SMOOTH_SHEETS_TITLE}
              description={smoothSheetDetails}
            />
            <PlechSection
              title={translations.CORRUGATED_SHEETS_TITLE}
              description={corrugatedSheetDetails}
            />
          </div>
        </section>

        <div>
          <Support />
        </div>
      </div>
    </div>
  );
}
