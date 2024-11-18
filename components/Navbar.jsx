"use client";

import { Menu, X, Flag, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavItem = ({ href, text, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
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
        <div className="absolute top-full left-0 mt-2 w-48 bg-[#24272D] border border-[#d61414] rounded-md shadow-lg">
          <ul className="py-2">
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm text-muted hover:bg-[#d61414] hover:text-white transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
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
        <div className="z-50">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={200} height={40} />
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-center mr-[150px]">
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
        </div>

        <div className="lg:relative absolute right-5 lg:right-0 z-50">
          <Flag className="text-muted hover:text-muted-foreground" size={24} />
        </div>
        <div className="absolute sm:w-[350px] w-[250px] right-0 z-0 h-[80px] clip bg-[#d61414]"></div>

        <button
          className="lg:hidden text-muted hover:text-muted-foreground z-50 fixed sm:right-12 right-12 top-[21.5px]"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 pt-14 bg-[#24272D] bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-40">
          <Link href="/" className="text-white text-2xl" onClick={toggleMenu}>
            DOMOV
          </Link>
          <div className="relative group">
            <div className="text-white text-2xl mb-2">PLECHY</div>
            <div className="space-y-2">
              {plechyDropdown.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-white text-lg hover:text-[#d61414] transition-colors"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/plotove-dielce"
            className="text-white text-2xl"
            onClick={toggleMenu}
          >
            PLOTOVÉ DIELCE
          </Link>
          <Link
            href="/sluzby"
            className="text-white text-2xl"
            onClick={toggleMenu}
          >
            SLUŽBY
          </Link>
          <Link
            href="/kontakt"
            className="text-white text-2xl"
            onClick={toggleMenu}
          >
            KONTAKT
          </Link>
        </div>
      )}
    </div>
  );
}
