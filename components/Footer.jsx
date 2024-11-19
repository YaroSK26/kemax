"use client"
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; 

const Footer = () => {
  return (
    <motion.div
      className="bg-[#24272D] w-full p-5 text-white flex lg:flex-row flex-col justify-between items-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-2">
        <motion.img
          src="/logo.png"
          className="lg:w-[350px] w-[250px] mb-2 lg:mt-0 mt-10"
          alt=""
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.p
          className="lg:text-left text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          &copy; 2024{" "}
          <a
            target="_blank"
            className="mx-auto underline"
            href="https://jaroslav.website"
          >
            Jaroslav Barabáš
          </a>
        </motion.p>
      </div>

      <motion.div
        className="flex lg:flex-row flex-col lg:my-0 gap-3 my-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div className="flex flex-col gap-3">
          <motion.p
            className="flex gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Phone className="text-[#d61414]" /> +421 907 931 597
          </motion.p>
          <motion.p
            className="flex gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Mail className="text-[#d61414]" /> kemax@kemax.sk
          </motion.p>
        </motion.div>

        <motion.div className="flex flex-col gap-3">
          <motion.p
            className="flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Clock className="text-[#d61414]" /> Pondelok - Piatok: 7:00 - 15:00
            hod.
          </motion.p>
          <motion.p
            className="flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MapPin className="text-[#d61414]" /> Veľká Ida 682, 044 55
            Košice-okolie
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/osobneUdaje"
              className="text-[#d61414] uppercase mt-2 font-bold hover:underline"
            >
              Zásady ochrany osobných údajov
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
