"use client";

import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { useTranslations } from "../../components/useTranslations";



export default function ContactPage() {
  const translations = useTranslations();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);

  emailjs
    .send(
      "service_qoulvpw",
      "template_34yqe7r",
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "8n0xwsQIYrNrL3lLn"
    )
    .then(
      () => {
        toast.success(translations.MESSAGE_SENT_SUCCESS);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsLoading(false);
      },
      () => {
        toast.error(translations.MESSAGE_SENT_ERROR);
        setIsLoading(false);
      }
    );
};

  if (!translations) {
    return (
      <div className="flex justify-center items-center h-screen text-[#D61414] font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white text-center pt-16"
          >
            {translations.CONTACT_TITLE}
          </motion.h2>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {[
                {
                  icon: Phone,
                  title: translations.PHONE,
                  content: translations.PHONE_NUMBER,
                },
                {
                  icon: Mail,
                  title: translations.EMAIL,
                  content: translations.EMAIL_ADDRESS,
                },
                {
                  icon: MapPin,
                  title: translations.ADDRESS,
                  content: translations.ADDRESS_VALUE,
                },
                {
                  icon: Clock,
                  title: translations.OPENING_HOURS,
                  content: translations.OPENING_HOURS_VALUE,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <item.icon className="h-6 w-6 text-red-600" />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="lg:col-span-2 transition-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          {translations.NAME}
                        </label>
                        <Input
                          name="name"
                          placeholder={translations.NAME_PLACEHOLDER}
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          {translations.EMAIL}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          placeholder={translations.EMAIL_PLACEHOLDER}
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {translations.SUBJECT}
                      </label>
                      <Input
                        name="subject"
                        placeholder={translations.SUBJECT_PLACEHOLDER}
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {translations.MESSAGE}
                      </label>
                      <Textarea
                        name="message"
                        placeholder={translations.MESSAGE_PLACEHOLDER}
                        rows={4}
                        className="resize-none"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading
                        ? translations.SENDING
                        : translations.SEND_MESSAGE}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.295921353843!2d21.169436575946094!3d48.6041786185633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f207f06e1fe29%3A0x6adddf1a91834121!2sKEMAX!5e0!3m2!1ssk!2spl!4v1731917942112!5m2!1ssk!2spl"
                  className="w-full h-[400px] border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={translations.MAP_TITLE}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
