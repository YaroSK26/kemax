"use client";
import React from "react";
import { motion } from "framer-motion";
import Support from "../../components/Support";

const Sluzby = () => {
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
            Služby
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.p
          className="text-center font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Vykonávame prepracovanie zvitkov a tabúľ zákazníkov na vlnitý,
          trapézový a hladký plech, a ohýbanie na ručnej 3 metrovej ohýbačke.
        </motion.p>

        {/* Gallery Section */}
        <div className="flex justify-center items-center md:flex-row flex-col gap-7">
          <motion.div
            className="relative shadow-md hover:shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <img src="/sluzby/4.jpg" alt="Image 2" className="w-full h-auto " />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </motion.div>

          <motion.div
            className="relative shadow-md hover:shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src="/sluzby/6.jpg" alt="Image 4" className="w-full h-auto " />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </motion.div>

          <motion.div
            className="relative shadow-md hover:shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <img src="/sluzby/5.jpg" alt="Image 3" className="w-full h-auto " />
          </motion.div>
        </div>

        <br />

        <motion.div
          className="relative shadow-md hover:shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img src="/sluzby/3.jpg" alt="Image 1" className="w-full h-auto " />
        </motion.div>

        <Support />
      </div>
    </div>
  );
};

export default Sluzby;
