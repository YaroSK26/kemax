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

export default function Component() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg overflow-hidden">
        <div className="relative h-screen max-w-6xl mx-auto flex justify-center items-center ">
          <div className="max-w-2xl h-screen bg-content flex justify-center items-center flex-col">
            <h1 className="text-4xl text-center font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Vítajte v Kemax!
            </h1>
            <p className="text-center mt-6 text-xl text-zinc-100">
              výrobky z plechu najvyššej kvality
            </p>
            <br />
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Kto sme
            </h2>
            <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
              KEMAX, s.r.o. je spoločnosť s viac ako 20-ročnou tradíciou v
              oblasti výroby plechových výrobkov. Naša firma sa špecializuje na
              výrobu vysoko kvalitných plechových komponentov pre rôzne
              priemyselné odvetvia.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-2 shadow-md hover:shadow-lg">
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
                  Naša výroba je certifikovaná Výskumným ústavom zváračským SR,
                  čo potvrdzuje vysokú kvalitu našich tvarovaných plechov a
                  výrobných procesov.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 shadow-md hover:shadow-lg">
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
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className=" ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2 shadow-md hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Shield className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-xl">
                    Kvalita a spoľahlivosť
                  </h3>
                </div>
                <p className="mt-4 text-zinc-600">
                  Kvalita výrobkov je preverená spokojnosťou zákazníkov a
                  certifikátmi od Výskumného ústavu zváračského SR.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 shadow-md hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Timer className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-xl">Flexibilita</h3>
                </div>
                <p className="mt-4 text-zinc-600">
                  Všetky objednávky vieme vyrobiť a vyexpedovať do 24 hodín od
                  ich prijatia.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 shadow-md hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-xl">Spokojnosť</h3>
                </div>
                <p className="mt-4 text-zinc-600">
                  Riadenie a budovanie dobrých vzťahov je pre nás záväzné a
                  preto neustále zvyšujeme spokojnosť všetkých našich klientov.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ponúkame
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Náš výrobný sortiment zahŕňa plechy hladké, vlnité a trapézové
                profily, klampiarské výrobky. Trapézové plechy vyrábame na linke
                v tvare, ktorý bol vyvinutý podľa požiadaviek zákazníkov.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center gap-2">
                  <Factory className="w-5 h-5 text-red-500" />
                  <span className="font-medium">
                    Špecializovaná výroba na mieru
                  </span>
                </div>
                <br />
                <div className="mt-4 inline-flex items-center gap-2">
                  <Clock4 className="w-5 h-5 text-red-500" />
                  <span className="font-medium">Výroba aj na počkanie</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Manufacturing process"
                className=" md:w-[500px] md:h-[300px] sm:h-[200px] h-[150px] rounded-lg shadow-md hover:shadow-lg"
                src="/produkty/plechy.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
