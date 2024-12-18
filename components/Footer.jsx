"use client";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "./useTranslations";

const Footer = () => {
  const translations = useTranslations();

  if (!translations) {
    return (
      <div className="flex justify-center items-center text-[#d61414] font-bold">
        Loading...
      </div>
    );
  }

  // Check the current language from localStorage
  const currentLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "sk"
      : "sk";

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
          <a href="https://www.jaroslav.website/" target="_blank" className="underline">
            {translations.COPYRIGHT_TEXT}
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
            <Phone className="text-[#d61414]" /> {translations.PHONE_NUMBER}
          </motion.p>
          <motion.p
            className="flex gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Mail className="text-[#d61414]" /> {translations.EMAIL_FOOTER}
          </motion.p>
        </motion.div>

        <motion.div className="flex flex-col gap-3">
          <motion.p
            className="flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Clock className="text-[#d61414]" /> {translations.BUSINESS_HOURS}
          </motion.p>
          <motion.p
            className="flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MapPin className="text-[#d61414]" /> {translations.ADDRESS_FOOTER}
          </motion.p>
          {currentLanguage === "sk" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link
                href="/osobneUdaje"
                className="text-[#d61414] uppercase mt-2 font-bold hover:underline"
              >
                {translations.PRIVACY_POLICY}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
