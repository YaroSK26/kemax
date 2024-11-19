"use client";
import React from "react";
import { motion } from "framer-motion";
import Support from "../../components/Support";
import Link from "next/link";

const Plechy = () => {
  return (
    <div>
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h2
            className="text-4xl font-bold text-white text-center pt-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Plechy
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
          Náš hlavný výrobný program
        </motion.h2>
        <motion.p
          className="text-center text-[#D61414] font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hladké plechy, vlnité plechy a trapézové profily v rôznych úpravách
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <motion.div
            className="relative bg-white shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link href="./plechy/hladke-vlnite">
              <img
                src="/3.jpg"
                alt="Hladké plechy"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#D61414] text-white p-4">
                <h3 className="font-bold text-lg">HLADKÉ PLECHY</h3>
                <p>valcované za studena a pozinkované</p>
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
            <Link href="./plechy/hladke-vlnite">
              <img
                src="/2.jpg"
                alt="Vlnité plechy"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#D61414] text-white p-4">
                <h3 className="font-bold text-lg">VLNITÉ PLECHY</h3>
                <p>valcované za studena a pozinkované</p>
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
            <Link href="./plechy/trapezove">
              <img
                src="/1.jpg"
                alt="Trapézové profily"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#D61414] text-white p-4">
                <h3 className="font-bold text-lg">TRAPÉZOVÉ PROFILY</h3>
                <p>T18, T29 a T50, aj lakoplastované</p>
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
