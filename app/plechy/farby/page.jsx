"use client";

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
import Support from "../../../components/Support";

export default function RalColorsComponent() {
  const colorProducts = [
    {
      id: 1,
      name: "RAL 9010",
      image: "/farby/ral-9010.jpg",
    },
    {
      id: 2,
      name: "RAL 9002",
      image: "/farby/ral-9002.jpg",
    },
    {
      id: 3,
      name: "RAL 9006",
      image: "/farby/ral-9006.jpg",
    },
    {
      id: 4,
      name: "RAL 9011",
      image: "/farby/ral-9011.jpg",
    },
    {
      id: 5,
      name: "RAL 8004",
      image: "/farby/ral-8004.jpg",
    },
    {
      id: 6,
      name: "RAL 80011",
      image: "/farby/ral-8011.jpg",
    },
    {
      id: 7,
      name: "RAL 8017",
      image: "/farby/ral-8017.jpg",
    },
    {
      id: 8,
      name: "RAL 8019",
      image: "/farby/ral-8019.jpg",
    },
    {
      id: 9,
      name: "RAL 3004",
      image: "/farby/ral-3004.jpg",
    },
    {
      id: 10,
      name: "RAL 3011",
      image: "/farby/ral-3011.jpg",
    },
    {
      id: 11,
      name: "RAL 5010",
      image: "/farby/ral-5010.jpg",
    },
    {
      id: 12,
      name: "RAL 6028",
      image: "/farby/ral-6028.jpg",
    },
  ];

  const popularProducts = colorProducts.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="w-full bg-[#D61414] pt-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white text-center pt-5">
            Farby
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            Farby RAL pre lakoplastované plechy a výrobky
          </h2>
          <p className="text-gray-600">
            Ponúkame vám škálu farebných odtieňov. Nájdite si tú svoju farbu,
            alebo vám namiešame práve takú aká sa vám páči.
          </p>
          <br />
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription className=" mt-[5px]">
            Doporučujeme vám farebnosť preveriť v našej prevádzke alebo fyzicky
            vo vzorkovníku RAL. Zobrazené farby sa môžu od skutočnosti mierne
            odlišovať.
          </AlertDescription>
        </Alert>
        <br />
        <Tabs defaultValue="popular" className="space-y-4">
          <TabsList>
            <TabsTrigger value="popular">Populárne farby</TabsTrigger>
            <TabsTrigger value="all">Všetky farby</TabsTrigger>
          </TabsList>

          <TabsContent value="popular" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
              {popularProducts.map((product) => (
                <Card key={product.id} className="shadow-md hover:shadow-lg">
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
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {colorProducts.map((product) => (
                <Card key={product.id} className="shadow-md hover:shadow-lg">
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
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <br />
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Technické informácie</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Štandardná hrúbka povrchovej úpravy: 25-35 μm</li>
            <li>Vynikajúca odolnosť voči poveternostným vplyvom</li>
            <li>Vysoká farebná stálosť</li>
            <li>Možnosť výberu z celej škály RAL odtieňov</li>
          </ul>
        </div>

        <Support></Support>
      </div>
    </div>
  );
}
