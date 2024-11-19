"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { Alert, AlertDescription } from "../../../components/ui/alert";
import { Info } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "../../../components/useTranslations";
import Support from "../../../components/Support";

export default function RalColorsComponent() {
  const translations = useTranslations();

  if (!translations) {
    return (
      <div className="flex justify-center items-center text-[#d61414] font-bold">
        Loading...
      </div>
    );
  }

  const colorProducts = [
    { id: 1, name: "RAL 9010", image: "/farby/ral-9010.jpg" },
    { id: 2, name: "RAL 9002", image: "/farby/ral-9002.jpg" },
    { id: 3, name: "RAL 9006", image: "/farby/ral-9006.jpg" },
    { id: 4, name: "RAL 9011", image: "/farby/ral-9011.jpg" },
    { id: 5, name: "RAL 8004", image: "/farby/ral-8004.jpg" },
    { id: 6, name: "RAL 80011", image: "/farby/ral-8011.jpg" },
    { id: 7, name: "RAL 8017", image: "/farby/ral-8017.jpg" },
    { id: 8, name: "RAL 8019", image: "/farby/ral-8019.jpg" },
    { id: 9, name: "RAL 3004", image: "/farby/ral-3004.jpg" },
    { id: 10, name: "RAL 3011", image: "/farby/ral-3011.jpg" },
    { id: 11, name: "RAL 5010", image: "/farby/ral-5010.jpg" },
    { id: 12, name: "RAL 6028", image: "/farby/ral-6028.jpg" },
  ];

  const popularProducts = colorProducts.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="w-full bg-[#D61414] pt-10">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white text-center pt-5"
          >
            {translations.PAINTS}
          </motion.h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold">
            {translations.RAL_PAINTS_DESCRIPTION_TITLE}
          </h2>
          <p className="text-gray-600">{translations.RAL_PAINTS_DESCRIPTION}</p>
          <br />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className=" mt-[5px]">
              {translations.COLOR_RECOMMENDATION}
            </AlertDescription>
          </Alert>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="popular" className="space-y-4">
            <TabsList>
              <TabsTrigger value="popular">
                {translations.POPULAR_COLORS}
              </TabsTrigger>
              <TabsTrigger value="all">{translations.ALL_COLORS}</TabsTrigger>
            </TabsList>

            <TabsContent value="popular" className="space-y-4">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {popularProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className="card-container"
                  >
                    <Card className="shadow-md hover:shadow-lg">
                      <CardContent className="p-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full rounded-lg"
                        />
                        <h3 className="mt-2 font-medium">{product.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {colorProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className="card-container"
                  >
                    <Card className="shadow-md hover:shadow-lg">
                      <CardContent className="p-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full rounded-lg"
                        />
                        <h3 className="mt-2 font-medium">{product.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold">{translations.TECHNICAL_INFO}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {translations.TECHNICAL_INFO_POINTS.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </motion.div>

        <Support />
      </div>
    </div>
  );
}
