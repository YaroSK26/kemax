"use client";
import React from "react";
import { Check } from "lucide-react";
import Support from "../../components/Support";
import { motion } from "framer-motion";

const PlotoveDielce = () => {
  const benefity = [
    "Dlhšia životnosť ako u drevených plotových dielcov",
    "Minimálne nároky na údržbu",
    "Farebná stálosť",
    "Široký výber farebných odtieňov RAL",
  ];

  const specifikacie = [
    { nazov: "Dĺžka", hodnota: "500 mm – 2800 mm" },
    { nazov: "Šírka", hodnota: "125 mm" },
    { nazov: "Hrúbka", hodnota: "0,50 mm" },
    { nazov: "Odporúčaný počet", hodnota: "7-8 ks na bežný meter" },
  ];

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
            Plotové dielce
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
                V našej ponuke je aj výroba plotových dielcov - plotoviek.
                Vyrábame ich z pozinkovaného a lakoplastovaného plechu v rôznych
                farebných odtieňoch – RAL, pre široké využitie na akýkoľvek
                plot.
              </motion.p>

              <div className="grid gap-8">
                {/* Benefity */}
                <div>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl font-semibold text-gray-900 mb-4"
                  >
                    Výhody našich plotových dielcov
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

                {/* Špecifikácie */}
                <div>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-2xl font-semibold text-gray-900 mb-4"
                  >
                    Technické špecifikácie
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
                alt="Plotové dielce"
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
