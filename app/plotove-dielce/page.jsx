"use client";
import React from "react";
import { Check } from "lucide-react";
import Support from "../../components/Support";
import { motion } from "framer-motion";
import { useTranslations } from "../../components/useTranslations";

const PlotoveDielce = () => {
  const translations = useTranslations();

  if (!translations) {
    return (
      <div className="flex justify-center items-center text-[#d61414] font-bold">
        Loading...
      </div>
    );
  }

  const benefity = translations.FENCE_BENEFITS;
  const specifikacie = translations.FENCE_SPECIFICATIONS;

  return (
    <div>
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white text-center pt-16"
          >
            {translations.FENCE_TITLE}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-lg text-gray-700 mb-8"
              >
                {translations.FENCE_DESCRIPTION}
              </motion.p>

              <div className="grid gap-8">
                {/* Benefits */}
                <div>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl font-semibold text-gray-900 mb-4"
                  >
                    {translations.FENCE_BENEFITS_TITLE}
                  </motion.h2>
                  <ul className="space-y-3">
                    {benefity.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      >
                        <Check className="h-5 w-5 text-[#D61414] mr-2" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-2xl font-semibold text-gray-900 mb-4"
                  >
                    {translations.FENCE_SPECS_TITLE}
                  </motion.h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    {specifikacie.map((spec, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between py-2 border-b border-gray-200 last:border-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      >
                        <span className="font-medium text-gray-600">
                          {spec.nazov}:
                        </span>
                        <span className="text-gray-800">{spec.hodnota}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Single image on the right */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/produkty/plotove-dielce.jpg"
                alt={translations.FENCE_IMAGE_ALT}
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg"
              />
            </motion.div>
          </div>
        </div>
        <Support />
      </div>
    </div>
  );
};

export default PlotoveDielce;
