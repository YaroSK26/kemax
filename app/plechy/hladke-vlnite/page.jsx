"use client";
import { motion } from "framer-motion";
import Support from "../../../components/Support";

const PlechSection = ({ title, description }) => (
  <motion.div
    className="mb-8 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
    {description.map((text, index) => (
      <p key={index} className="text-gray-700 mb-2 last:mb-0">
        {text}
      </p>
    ))}
  </motion.div>
);

export default function PlechyPage() {
  const smoothSheetDetails = [
    "Vyrábame v dĺžkach od 300 do 3000 mm alebo podľa požiadavky zákazníka.",
    "v hrúbkach 0,5 – 1,5 mm, v šírkach 500 – 1250 mm podľa požiadavky zákazníka",
  ];

  const corrugatedSheetDetails = [
    "Vyrábané s priečnym vlnením z hladkých pozinkovaných plechov.",
    "v hrúbkach 0,50 – 0,55 mm, v štandardnej dĺžke 2000 mm, podľa dohody aj v kratších dĺžkach",
    "VSTUPNÁ ŠÍRKA 1000 mm",
    "výsledná skutočná šírka: 750 – 800 mm, užitočná šírka: 730 – 740 mm",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h2
            className="text-4xl font-bold text-white text-center pt-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hladké a vlnité plechy
          </motion.h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="flex flex-col md:flex-row items-center mb-12 bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src="/hladke.jpg"
            alt="Plechy"
            width={600}
            height={400}
            className="md:w-1/2 object-cover w-full h-full"
          />
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              O našich plechoch
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Delené zo zvitkov, valcovaných za studena, bez povrchovej úpravy
              alebo pozinkované. Naše plechy sú známe svojou vysokou kvalitou a
              všestrannosťou, vhodné pre rôzne priemyselné a stavebné aplikácie.
            </p>
          </div>
        </motion.div>

        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-semibold text-gray-800 mb-6 text-center"
          >
            Naša ponuka
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <PlechSection
              title="HLADKÉ PLECHY"
              description={smoothSheetDetails}
            />
            <PlechSection
              title="VLNITÉ PLECHY"
              description={corrugatedSheetDetails}
            />
          </div>
        </section>

        <div>
          <Support />
        </div>
      </div>
    </div>
  );
}
