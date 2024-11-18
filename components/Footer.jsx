import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#24272D]  w-full  p-5   text-white flex lg:flex-row flex-col justify-between items-center px-4">
      <div className="flex  flex-col gap-2 ">
        <img
          src="/logo.png"
          className="lg::w-[350px] w-[250px] mb-2 lg:mt-0 mt-10"
          alt=""
        />
        <p className="lg::text-left text-center">
          &copy; 2024{" "}
          <a
            target="_blank"
            className="mx-auto  underline"
            href="https://jaroslav.website"
          >
            Jaroslav Barabáš
          </a>
        </p>
      </div>

      <div className="flex lg:flex-row flex-col lg:my-0 gap-3 my-10 ">
        <div className="flex flex-col gap-3">
          <p className="flex gap-2">
            <Phone className="text-[#d61414] " /> +421 907 931 597
          </p>
          <p className="flex gap-2">
            <Mail className="text-[#d61414] " /> kemax@kemax.sk
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="flex gap-2">
            <Clock className="text-[#d61414] " /> Pondelok - Piatok: 7:00 -
            15:00 hod.
          </p>
          <p className="flex gap-2">
            <MapPin className="text-[#d61414] " /> Veľká Ida 682, 044 55
            Košice-okolie
          </p>
          <Link
            href="/osobneUdaje"
            className="text-[#d61414] uppercase lg::mt-0 mt-2  font-bold hover:underline"
          >
            Zásady ochrany osobných údajov
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer
