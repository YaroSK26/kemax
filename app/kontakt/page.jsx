import React from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Title section with full-width red background */}
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold  text-white text-center pt-16">
            Kontakt
          </h2>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Telefón</h3>
                      <p className="text-gray-600">+421 123 456 789</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@kemax.sk</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Adresa</h3>
                      <p className="text-gray-600">Košice, Slovensko</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Otváracie hodiny</h3>
                      <p className="text-gray-600">Po-Pia: 8:00 - 16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meno</label>
                      <Input placeholder="Vaše meno" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="Váš email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Predmet</label>
                    <Input placeholder="Predmet správy" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Správa</label>
                    <Textarea
                      placeholder="Vaša správa"
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    Odoslať správu
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.295921353843!2d21.169436575946094!3d48.6041786185633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f207f06e1fe29%3A0x6adddf1a91834121!2sKEMAX!5e0!3m2!1ssk!2spl!4v1731917942112!5m2!1ssk!2spl"
                  className="w-full h-[400px] border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
