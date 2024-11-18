import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Mail, Wrench, Shield, PenToolIcon as Tool } from "lucide-react";
import Link from "next/link";
import Support from "../../../components/Support";

export default function Component() {
  return (
    <div className="w-full mx-auto py-12">
      {/* Hero Section */}
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white text-center pt-5">
            Príslušenstvo
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-12">
          {/* Price Notice */}
          <Card className="bg-red-50 border-red-100">
            <CardContent className="flex items-center gap-4 p-6">
              <Mail className="w-6 h-6 text-red-500" />
              <p className="text-red-700 font-semibold text-lg">
                Aktuálne ceny sú na vyžiadanie!
              </p>
            </CardContent>
          </Card>

          {/* Sealing Profiles Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                  <Shield className="w-6 h-6 text-red-500" />
                  Tesniace profily pre trapézové profily
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-zinc-600 mb-6 text-lg">
                      Slúžia na lepšiu odolnosť voči vetru a vlhku pri pokrytí
                      striech. Vyrobené sú z certifikovanej PE peny.
                    </p>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-lg">Profil T18</div>
                        <div className="text-gray-600">Dĺžka: 927mm</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-lg">Profil T29</div>
                        <div className="text-gray-600">Dĺžka: 956mm</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-lg">Profil T50</div>
                        <div className="text-gray-600">Dĺžka: 780mm</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <img
                      src="/produkty/profil-A-B.png"
                      alt="Tesniace profily"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Screws Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                  <Wrench className="w-6 h-6 text-red-500" />
                  Skrutky
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-6 text-lg">
                  V ponuke skrutky s podložkou a s tesnením.
                </p>

                <div className="grid gap-8">
                  {/* Do kovu */}
                  <div>
                    <h3 className="font-semibold mb-4 text-xl">Do kovu</h3>
                    <div className="grid gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-lg">GT 5</div>
                        <div className="text-gray-600 mt-2 space-y-1">
                          <div>• 5,5 x 19mm</div>
                          <div>• 5,5 x 32mm</div>
                          <div>• 5,5 x 35mm</div>
                          <div>• 5,5 x 50mm</div>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-lg">GT 8</div>
                        <div className="text-gray-600 mt-2">5,5 x 19mm</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-lg">GT 12</div>
                        <div className="text-gray-600 mt-2">5,5 x 19mm</div>
                      </div>
                    </div>
                  </div>

                  {/* Do dreva */}
                  <div>
                    <h3 className="font-semibold mb-4 text-xl">
                      Do dreva – farmárske
                    </h3>
                    <div className="grid gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-lg">Pozinkované</div>
                        <div className="text-gray-600 mt-2 space-y-1">
                          <div>• 4,8 x 20mm</div>
                          <div>• 4,8 x 35mm</div>
                          <div>• 4,8 x 60mm</div>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-lg">
                          Lakoplastované
                        </div>
                        <div className="text-gray-600 mt-2 space-y-1">
                          <div>• 4,8 x 20mm</div>
                          <div>• 4,8 x 35mm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tinsmith Products Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                  <Tool className="w-6 h-6 text-red-500" />
                  Klampiarské výrobky
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-6 text-lg">
                  Rozšírili sme náš sortiment aj o tento druh výrobkov, aby sme
                  boli čo najkomplexnejší.
                </p>
                <Link href={"/produkty/klampiarske-vyrobky.jpg"}>
                  <img
                    className="md:w-[750px] w-[300px] h-[200px] md:h-[500px]"
                    src="/produkty/klampiarske-vyrobky.jpg"
                    alt=""
                  />
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>
        <Support></Support>
      </div>
    </div>
  );
}
