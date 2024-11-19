"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import Support from "../../../components/Support";

const profiles = {
  T18: {
    description: "Trapézový plech s profilom T18",
    lengths: "0,1m–12m",
    usableWidth: {
      "1250mm input": "1072mm",
      "1000mm input": "804mm",
    },
    weights: [
      { thickness: 0.5, width1110: 4.66, width890: 4.98 },
      { thickness: 0.55, width1110: 5.13, width890: 5.47 },
      { thickness: 0.6, width1110: 5.59, width890: 5.97 },
      { thickness: 0.7, width1110: 6.52, width890: 6.97 },
      { thickness: 0.8, width1110: 7.46, width890: 7.96 },
    ],
    image: "/T18.jpg",
  },
  T29: {
    description: "Trapézový plech s profilom T29",
    lengths: "0,1m–12m",
    usableWidth: {
      "1250mm input": "1029mm",
      "1000mm input": "735mm",
    },
    weights: [
      { thickness: 0.5, width1110: 4.86, width890: 5.44 },
      { thickness: 0.55, width1110: 5.37, width890: 5.99 },
      { thickness: 0.6, width1110: 5.83, width890: 6.53 },
      { thickness: 0.7, width1110: 6.8, width890: 7.62 },
      { thickness: 0.8, width1110: 7.78, width890: 8.71 },
      { thickness: 1.0, width1110: 9.72, width890: 10.88 },
    ],
    image: "/T29.jpg",
  },
  T50: {
    description: "Trapézový plech s profilom T50",
    lengths: "0,1m–12m",
    usableWidth: {
      "1250mm input": "1040mm",
      "1000mm input": "780mm",
    },
    weights: [
      { thickness: 0.5, width1110: 4.81, width890: 5.13 },
      { thickness: 0.55, width1110: 5.29, width890: 5.64 },
      { thickness: 0.6, width1110: 5.77, width890: 6.15 },
      { thickness: 0.7, width1110: 6.73, width890: 7.18 },
      { thickness: 0.8, width1110: 7.7, width890: 8.2 },
      { thickness: 1.0, width1110: 9.62, width890: 10.26 },
    ],
    image: "/T50.jpg",
  },
};

const ProductCharacteristics = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mt-8 mb-4 p-4 rounded-lg"
  >
    <h3 className="text-xl font-semibold mb-2">Výrobné charakteristiky</h3>
    <ul className="list-disc pl-5">
      <li>Vyrobené zo zvitkov, valcované za studena</li>
      <li>Pozinkované aj lakoplastované</li>
    </ul>
  </motion.div>
);

export default function TrapezeSheetMetalCatalog() {
  const [selectedProfile, setSelectedProfile] = useState("T18");

  return (
    <div className="container mx-auto ">
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white text-center pt-16"
          >
            Trapezové plechy
          </motion.h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trapézové plechy s profilmi T18, T29 a T50 sú vďaka svojim úžitkovým
          vlastnostiam ideálnym stavebným materiálom na vonkajšie a vnútorné
          opláštenie striech a fasád, priemyselných objektov, ale aj rodinných
          domov, garáží a rôznych hospodárskych budov.
        </motion.p>

        <ProductCharacteristics />

        <Tabs
          defaultValue="T18"
          className="w-full mt-8"
          onValueChange={setSelectedProfile}
        >
          <TabsList className="grid w-full grid-cols-3">
            {Object.keys(profiles).map((profile) => (
              <TabsTrigger key={profile} value={profile}>
                {profile}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(profiles).map(([profile, details]) => (
            <TabsContent key={profile} value={profile}>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.img
                  src={details.image}
                  alt={`Trapézový plech ${profile}`}
                  width={600}
                  height={400}
                  className="rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{details.description}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold mb-2">Výrobné dĺžky</h3>
                          <p>{details.lengths}</p>

                          <h3 className="font-semibold mt-4 mb-2">
                            Užitočná šírka profilu
                          </h3>
                          {Object.entries(details.usableWidth).map(
                            ([input, width]) => (
                              <p key={input}>
                                <strong>{input}:</strong> {width}
                              </p>
                            )
                          )}
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">
                            Orientačná hmotnosť (kg/m2)
                          </h3>
                          <table className="w-full border-collapse">
                            <thead>
                              <tr>
                                <th className="border p-2">Hrúbka</th>
                                <th className="border p-2">š. 1110 mm</th>
                                <th className="border p-2">š. 890 mm</th>
                              </tr>
                            </thead>
                            <tbody>
                              {details.weights.map((weight, index) => (
                                <tr key={index}>
                                  <td className="border p-2">
                                    {weight.thickness}
                                  </td>
                                  <td className="border p-2">
                                    {weight.width1110}
                                  </td>
                                  <td className="border p-2">
                                    {weight.width890}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <Support />
      </div>
    </div>
  );
}
