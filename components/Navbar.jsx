"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "./useTranslations";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("language") || "sk"
      : "sk";
  });
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "sk";
    setLanguage(storedLanguage);
    loadTranslations(storedLanguage);
  }, []);

  const loadTranslations = async (lang) => {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
      window.dispatchEvent(
        new CustomEvent("languageChange", { detail: { translations: data } })
      );
    } catch (error) {
      console.error("Error loading translations:", error);
    }
  };

  const handleLanguageChange = async (e) => {
    const lang = e.target.value;
    localStorage.setItem("language", lang);
    setLanguage(lang);
    await loadTranslations(lang);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="hidden xl:block bg-[#24272D] text-white border border-[#d61414] rounded p-1"
    >
      <option value="sk">Slovenčina</option>
      <option value="en">English</option>
    </select>
  );
};

const NavItem = ({ href, text, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const translations = useTranslations();

  const translatedText = translations ? translations[text] || text : text;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.span
      className="relative group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-center gap-1 cursor-pointer">
        <Link
          href={href}
          className="text-muted hover:text-white transition-colors relative"
        >
          {translatedText}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D61414] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        {dropdownItems && (
          <motion.div
            onClick={toggleDropdown}
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-muted" />
          </motion.div>
        )}
      </div>

      {dropdownItems && isDropdownOpen && (
        <motion.div
          className="absolute top-full left-0 mt-2 w-48 bg-[#24272D] border border-[#d61414] rounded-md shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          <ul className="py-2">
            {dropdownItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm text-muted hover:bg-[#d61414] hover:text-white transition-colors"
                >
                  {translations
                    ? translations[item.text] || item.text
                    : item.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.span>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("language") || "sk"
      : "sk";
  });
  const [isPlechyOpen, setIsPlechyOpen] = useState(true); // Default open on mobile
  const translations = useTranslations();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "sk";
    setLanguage(storedLanguage);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePlechyDropdown = () => {
    setIsPlechyOpen(!isPlechyOpen);
  };

  const handleLanguageChange = async (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
    try {
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      window.dispatchEvent(
        new CustomEvent("languageChange", { detail: { translations: data } })
      );
    } catch (error) {
      console.error("Error loading translations:", error);
    }
  };

  const plechyDropdown = [
    { href: "/plechy/prislusenstvo", text: "PRISLUSENSTVO" },
    { href: "/plechy/montaz", text: "ODPORUCANIA_MONTAZE" },
    { href: "/plechy/farby", text: "FARBY" },
    { href: "/plechy/material", text: "MATERIAL" },
  ];

  const menuItems = [
    { href: "/", text: "DOMOV" },
    { href: "/plotove-dielce", text: "PLOTOVE_DIELCE" },
    { href: "/sluzby", text: "SLUZBY" },
    { href: "/kontakt", text: "KONTAKT" },
  ];

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 border-b-2 border-b-[#d61414] right-0 flex justify-between bg-[#24272D] text-white font-bold z-50 items-center p-6 sm:px-12 px-6">
        <motion.div
          className="z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-40 h-7 sm:w-52 sm:h-8"
            />
          </Link>
        </motion.div>

        <motion.div
          className="hidden xl:flex flex-1 justify-center mr-[150px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <nav>
            <ul className="flex space-x-8">
              <NavItem href="/" text="DOMOV" />
              <NavItem
                href="/plechy"
                text="PLECHY"
                dropdownItems={plechyDropdown}
              />
              {menuItems.slice(1).map((item) => (
                <NavItem key={item.href} href={item.href} text={item.text} />
              ))}
            </ul>
          </nav>
        </motion.div>

        <motion.div
          className="lg:relative absolute right-5 lg:right-0 z-50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <LanguageSwitcher />
        </motion.div>

        <motion.div
          className="absolute sm:w-[350px] w-[250px] right-0 z-0 h-[80px] clip bg-[#d61414]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        <motion.button
          className="xl:hidden text-muted z-50 fixed right-8 top-[21.5px]"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0  bg-[#24272D] pt-32 h-screen flex flex-col items-center justify-start space-y-8 z-40 overflow-y-auto "
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.2 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.15 }}
              >
                <Link
                  href={item.href}
                  className="text-white text-2xl"
                  onClick={toggleMenu}
                >
                  {translations
                    ? translations[item.text] || item.text
                    : item.text}
                </Link>
              </motion.div>
            ))}

            <motion.div
              className="relative group w-full px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <div
                className="text-white text-2xl mb-2 text-center flex justify-center items-center cursor-pointer"
                onClick={togglePlechyDropdown}
              >
                {translations ? translations["PLECHY"] || "PLECHY" : "PLECHY"}
                <ChevronDown
                  className={`ml-2 w-6 h-6 transform transition-transform ${
                    isPlechyOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isPlechyOpen && (
                <div className="space-y-2 mt-2">
                  {plechyDropdown.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-white text-lg text-center hover:text-[#d61414] transition-colors"
                        onClick={toggleMenu}
                      >
                        {translations
                          ? translations[item.text] || item.text
                          : item.text}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <select
                value={language}
                onChange={(e) => {
                  handleLanguageChange(e.target.value);
                  toggleMenu();
                }}
                className="bg-[#24272D] text-white border border-[#d61414] rounded p-2 text-xl"
              >
                <option value="sk">Slovenčina</option>
                <option value="en">English</option>
              </select>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
