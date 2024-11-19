"use client"
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import {
  Clock4,
  Factory,
  Heart,
  Phone,
  Shield,
  Timer,
  Award,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Component() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg overflow-hidden">
        <motion.div
          className="relative h-screen max-w-6xl mx-auto flex justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-2xl h-screen bg-content flex justify-center items-center flex-col">
            <motion.h1
              className="text-4xl text-center font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Vítajte v Kemax!
            </motion.h1>
            <motion.p
              className="text-center mt-6 text-xl text-zinc-100"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              výrobky z plechu najvyššej kvality
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Who We Are Section */}
      <div className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Kto sme
            </h2>
            <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
              KEMAX, s.r.o. je spoločnosť s viac ako 20-ročnou tradíciou v
              oblasti výroby plechových výrobkov. Naša firma sa špecializuje na
              výrobu vysoko kvalitných plechových komponentov pre rôzne
              priemyselné odvetvia.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover="hover"
            >
              <Card className="border-2 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Award className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="font-semibold text-xl">
                      Certifikovaná výroba
                    </h3>
                  </div>
                  <p className="mt-4 text-zinc-600">
                    Naša výroba je certifikovaná Výskumným ústavom zváračským
                    SR, čo potvrdzuje vysokú kvalitu našich tvarovaných plechov
                    a výrobných procesov.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover="hover"
            >
              <Card className="border-2 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="font-semibold text-xl">
                      Systém riadenia kvality
                    </h3>
                  </div>
                  <p className="mt-4 text-zinc-600">
                    Implementovali sme komplexný systém riadenia kvality, ktorý
                    zabezpečuje konzistentnú vysokú úroveň našich produktov a
                    služieb.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              {
                icon: <Shield className="w-6 h-6 text-red-500" />,
                title: "Kvalita a spoľahlivosť",
                description:
                  "Kvalita výrobkov je preverená spokojnosťou zákazníkov a certifikátmi od Výskumného ústavu zváračského SR.",
              },
              {
                icon: <Timer className="w-6 h-6 text-red-500" />,
                title: "Flexibilita",
                description:
                  "Všetky objednávky vieme vyrobiť a vyexpedovať do 24 hodín od ich prijatia.",
              },
              {
                icon: <Heart className="w-6 h-6 text-red-500" />,
                title: "Spokojnosť",
                description:
                  "Riadenie a budovanie dobrých vzťahov je pre nás záväzné a preto neustále zvyšujeme spokojnosť všetkých našich klientov.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-red-100 rounded-lg">
                        {benefit.icon}
                      </div>
                      <h3 className="font-semibold text-xl">{benefit.title}</h3>
                    </div>
                    <p className="mt-4 text-zinc-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ponúkame
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Náš výrobný sortiment zahŕňa plechy hladké, vlnité a trapézové
                profily, klampiarské výrobky. Trapézové plechy vyrábame na linke
                v tvare, ktorý bol vyvinutý podľa požiadaviek zákazníkov.
              </p>
              <div className="mt-8">
                <motion.div
                  className="inline-flex items-center gap-2"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Factory className="w-5 h-5 text-red-500" />
                  <span className="font-medium">
                    Špecializovaná výroba na mieru
                  </span>
                </motion.div>
                <br />
                <motion.div
                  className="mt-4 inline-flex items-center gap-2"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Clock4 className="w-5 h-5 text-red-500" />
                  <span className="font-medium">Výroba aj na počkanie</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                alt="Manufacturing process"
                className="md:w-[500px] md:h-[300px] sm:h-[200px] h-[150px] rounded-lg shadow-md"
                src="/produkty/plechy.jpg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
