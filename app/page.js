"use client";
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
import { useTranslations } from "../components/useTranslations";

export default function Component() {
  const translations = useTranslations();

  if (!translations) {
    return (
      <div className="flex justify-center items-center text-[#d61414] font-bold">
        Loading...
      </div>
    );
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg overflow-hidden">
        <motion.div
          className="relative h-[65vh] max-w-6xl mx-auto flex justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-2xl h-screen bg-content flex justify-center items-center flex-col">
            <motion.h1
              className="text-4xl text-center font-bold flex sm:flex-row flex-col gap-4 justify-center items-center tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {translations.WELCOME}
              <img src="./logo.png" alt="logo kemax" className="w-52 h-8 mt-2 " />
            </motion.h1>
            {/* <motion.p
              className="text-center mt-6 text-xl text-zinc-100"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {translations.SUBTITLE}
            </motion.p> */}
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
              {translations.WHO_WE_ARE}
            </h2>
            <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
              {translations.WHO_WE_ARE_DESC}
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
                      {translations.CERTIFIED_PRODUCTION}
                    </h3>
                  </div>
                  <p className="mt-4 text-zinc-600">
                    {translations.CERTIFIED_PRODUCTION_DESC}
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
                      {translations.QUALITY_MANAGEMENT}
                    </h3>
                  </div>
                  <p className="mt-4 text-zinc-600">
                    {translations.QUALITY_MANAGEMENT_DESC}
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
                title: translations.QUALITY_RELIABILITY,
                description: translations.QUALITY_RELIABILITY_DESC,
              },
              {
                icon: <Timer className="w-6 h-6 text-red-500" />,
                title: translations.FLEXIBILITY,
                description: translations.FLEXIBILITY_DESC,
              },
              {
                icon: <Heart className="w-6 h-6 text-red-500" />,
                title: translations.SATISFACTION,
                description: translations.SATISFACTION_DESC,
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
                {translations.WE_OFFER}
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                {translations.PRODUCT_RANGE}
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
                    {translations.SPECIALIZED_PRODUCTION}
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
                  <span className="font-medium">
                    {translations.PRODUCTION_ON_DEMAND}
                  </span>
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
