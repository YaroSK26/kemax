"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Mail, Wrench, Shield, PenToolIcon as Tool } from "lucide-react";
import Link from "next/link";
import Support from "../../../components/Support";
import { motion } from "framer-motion";
import { useTranslations } from "../../../components/useTranslations";

export default function Component() {
  const translations = useTranslations();

  if (!translations) {
    return (
      <div className="flex justify-center items-center text-[#d61414] font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full mx-auto py-12">
      {/* Hero Section */}
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            className="text-4xl font-bold text-white text-center pt-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations.ACCESSORIES_TITLE}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-12">
          {/* Price Notice */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-red-50 border-red-100">
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="w-6 h-6 text-red-500" />
                <p className="text-red-700 font-semibold text-lg">
                  {translations.PRICE_NOTICE}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sealing Profiles Section */}
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                  <Shield className="w-6 h-6 text-red-500" />
                  {translations.SEALING_PROFILES_TITLE}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-zinc-600 mb-6 text-lg">
                      {translations.SEALING_PROFILES_DESC}
                    </p>
                    <div className="space-y-4">
                      {translations.PROFILES.map((profile, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-semibold text-lg">
                            {profile.name}
                          </div>
                          <div className="text-gray-600">
                            {translations.LENGTH}: {profile.length}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <img
                      src="/produkty/profil-A-B.png"
                      alt={translations.SEALING_PROFILES_IMG_ALT}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Screws Section */}
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                  <Wrench className="w-6 h-6 text-red-500" />
                  {translations.SCREWS_TITLE}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-6 text-lg">
                  {translations.SCREWS_DESC}
                </p>

                <div className="grid gap-8">
                  {/* For Metal */}
                  <div>
                    <h3 className="font-semibold mb-4 text-xl">
                      {translations.FOR_METAL}
                    </h3>
                    <div className="grid gap-4">
                      {translations.METAL_SCREWS.map((screw, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-semibold text-lg">
                            {screw.type}
                          </div>
                          <div className="text-gray-600 mt-2 space-y-1">
                            {screw.sizes.map((size, idx) => (
                              <div key={idx}>• {size}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* For Wood */}
                  <div>
                    <h3 className="font-semibold mb-4 text-xl">
                      {translations.FOR_WOOD}
                    </h3>
                    <div className="grid gap-4">
                      {translations.WOOD_SCREWS.map((screw, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-semibold text-lg">
                            {screw.type}
                          </div>
                          <div className="text-gray-600 mt-2 space-y-1">
                            {screw.sizes.map((size, idx) => (
                              <div key={idx}>• {size}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Tinsmith Products Section */}
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                  <Tool className="w-6 h-6 text-red-500" />
                  {translations.TINSMITH_TITLE}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-6 text-lg">
                  {translations.TINSMITH_DESC}
                </p>
                <Link href={"/produkty/klampiarske-vyrobky.jpg"}>
                  <img
                    className="md:w-[750px] w-[300px] h-[200px] md:h-[500px]"
                    src="/produkty/klampiarske-vyrobky.jpg"
                    alt={translations.TINSMITH_IMG_ALT}
                  />
                </Link>
              </CardContent>
            </Card>
          </motion.section>
        </div>
        <Support />
      </div>
    </div>
  );
}
