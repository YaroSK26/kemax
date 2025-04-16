"use client";
import React from "react";
import { motion } from "framer-motion";
import Support from "../../components/Support";
import Link from "next/link";
import { useTranslations } from "../../components/useTranslations";

const Plechy = () => {
  const translations = useTranslations();

  if (!translations) {
    return (
      <div className="flex justify-center items-center text-[#d61414] font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-[90vh]">
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h2
            className="text-4xl font-bold text-white text-center pt-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations.PLECHY_TITLE}
          </motion.h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          className="text-2xl font-bold text-gray-900 text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {translations.MAIN_PROGRAM}
        </motion.h2>
        <motion.p
          className="text-center text-[#D61414] font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {translations.PRODUCTS_DESCRIPTION}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-24 mt-28  ">
          {/* Product 1 */}
          <motion.div
            className="relative bg-white shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link href="./hladke-vlnite">
              {/* <img
                src="/3.jpg"
                alt={translations.SMOOTH_SHEETS_ALT}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              /> */}
              <div className="absolute bottom-0 left-0 w-full bg-[#D61414] text-white p-4">
                <h3 className="font-bold text-lg">
                  {translations.SMOOTH_SHEETS}
                </h3>
                {/* <p>{translations.SMOOTH_SHEETS_DESC}</p> */}
              </div>
            </Link>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            className="relative bg-white shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="./hladke-vlnite">
              {/* <img
                src="/2.jpg"
                alt={translations.CORRUGATED_SHEETS_ALT}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              /> */}
              <div className="absolute bottom-0 left-0 w-full bg-[#D61414] text-white p-4">
                <h3 className="font-bold text-lg">
                  {translations.CORRUGATED_SHEETS}
                </h3>
                {/* <p>{translations.CORRUGATED_SHEETS_DESC}</p> */}
              </div>
            </Link>
          </motion.div>

          {/* Product 3 */}
          <motion.div
            className="relative bg-white shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="./trapezove">
              {/* <img
                src="/1.jpg"
                alt={translations.TRAPEZOID_PROFILES_ALT}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              /> */}
              <div className="absolute bottom-0 left-0 w-full bg-[#D61414] text-white p-4">
                <h3 className="font-bold text-lg">
                  {translations.TRAPEZOID_PROFILES}
                </h3>
                {/* <p>{translations.TRAPEZOID_PROFILES_DESC}</p> */}
              </div>
            </Link>
          </motion.div>
        </div>
        <Support />
      </div>
    </div>
  );
};

export default Plechy;
