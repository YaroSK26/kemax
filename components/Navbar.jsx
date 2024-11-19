"use client";

import { Menu, X, Flag, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NavItem = ({ href, text, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <motion.span
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-1 cursor-pointer">
        <Link
          href={href}
          className="text-muted hover:text-white transition-colors"
        >
          {text}
        </Link>
        {dropdownItems && <ChevronDown className="w-4 h-4 text-muted" />}
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
                  {item.text}
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const plechyDropdown = [
    { href: "/plechy/prislusenstvo", text: "PRISLUŠENSTVO" },
    { href: "/plechy/montaz", text: "ODPORUČANIA MONTÁŽE" },
    { href: "/plechy/farby", text: "FARBY" },
    { href: "/plechy/material", text: "MATERIÁL" },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 border-b-2 border-b-[#d61414] right-0 flex justify-between bg-[#24272D] text-white font-bold z-50 items-center p-6 sm:px-12 px-6">
        <motion.div
          className="z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={200} height={40} />
          </Link>
        </motion.div>

        <motion.div
          className="hidden lg:flex flex-1 justify-center mr-[150px]"
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
              <NavItem href="/plotove-dielce" text="PLOTOVÉ DIELCE" />
              <NavItem href="/sluzby" text="SLUŽBY" />
              <NavItem href="/kontakt" text="KONTAKT" />
            </ul>
          </nav>
        </motion.div>

        <motion.div
          className="lg:relative absolute right-5 lg:right-0 z-50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Flag className="text-muted hover:text-muted-foreground" size={24} />
        </motion.div>
        <motion.div
          className="absolute sm:w-[350px] w-[250px] right-0 z-0 h-[80px] clip bg-[#d61414]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        <motion.button
          className="lg:hidden text-muted hover:text-muted-foreground z-50 fixed sm:right-12 right-12 top-[21.5px]"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          className="fixed inset-0 pt-14 bg-[#24272D] flex flex-col items-center justify-center space-y-8 z-40"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.2 }}
        >
          {[
            { href: "/", text: "DOMOV" },
            { href: "/plotove-dielce", text: "PLOTOVÉ DIELCE" },
            { href: "/sluzby", text: "SLUŽBY" },
            { href: "/kontakt", text: "KONTAKT" },
          ].map((item, index) => (
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
                {item.text}
              </Link>
            </motion.div>
          ))}

          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="text-white text-2xl mb-2 text-center">PLECHY</div>
            <div className="space-y-2">
              {plechyDropdown.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="block text-white text-lg hover:text-[#d61414] transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
