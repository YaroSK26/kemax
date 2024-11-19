"use client"
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; 

const notFound = () => {
  return (
    <div className="relative bg overflow-hidden">
      <div className="relative h-screen max-w-6xl mx-auto flex justify-center items-center">
        <motion.div
          className="max-w-2xl h-screen bg-content flex justify-center items-center flex-col"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl text-center font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            404 - stránka sa nenašla
          </motion.h1>

          <motion.p
            className="text-center mt-6 text-xl text-zinc-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/">
              <button
                className="bg-[#D61414] rounded-md p-3 font-bold transition-all shadow-custom"

              >
                Domov
              </button>
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default notFound;
