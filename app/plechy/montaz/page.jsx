"use client";
import React, { useState } from "react";
import * as Icons from "lucide-react";
import Support from "../../../components/Support";
import { motion } from "framer-motion"; 


// Helper function to safely access icons
const getIcon = (name) => {
  return Icons[name]
    ? React.createElement(Icons[name], { className: "h-5 w-5" })
    : null;
};

// Tab interface component
const Tab = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
      active ? "bg-red-50 border-b-2 border-[#D61414]" : "hover:bg-gray-100"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Alert component with fixed color classes
const Alert = ({ variant = "warning", icon, title, children }) => {
  const alertStyles = {
    warning: "bg-yellow-50 border-yellow-400",
    danger: "bg-red-50 border-red-400",
    info: "bg-yellow-50 border-yellow-400",
  };

  return (
    <div className={`border-l-4 p-4 ${alertStyles[variant]}`}>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center h-5 w-5">{icon}</div>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="mt-2">{children}</p>
    </div>
  );
};

export default function InstallationGuide() {
  const [activeTab, setActiveTab] = useState("manipulation");

  const tabs = [
    { id: "manipulation", label: "Manipulácia" },
    { id: "storage", label: "Skladovanie" },
    { id: "tools", label: "Náradie" },
    { id: "preparation", label: "Príprava" },
    { id: "installation", label: "Montáž" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "manipulation":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {getIcon("Package")}
              <motion.h2  className="text-xl font-semibold">
                Manipulácia s materiálom
              </motion.h2>
            </div><br />

            <ul className="list-disc pl-6 space-y-2">
              <li>Tabule manipulujte vždy vo zvislej polohe</li>
              <li>Nestavajte tabule na bočnú stranu</li>
              <li>Držte ich za spevnenú zámkovú časť</li>
            </ul>

            <Alert
              variant="warning"
              icon={getIcon("AlertTriangle")}
              title="Dôležité upozornenie"
            >
              Z dôvodu bezpečnej manipulácie a tepelnej dilatácie sú doporučené
              tabule maximálne do dĺžky 6000 mm. Na rozmery dlhšie ako 6000 mm
              sa nevzťahuje záruka týkajúca sa dilatačných porúch a vád
              spôsobených nesprávnou manipuláciou.
            </Alert>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Rezanie</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Šikmé hrany režeme na zemi a na tvrdom podklade</li>
                <li>Po rezaní na streche odstráňte piliny mäkkou metličkou</li>
                <li>Všetky strižné a rezné hrany je nutné ošetriť</li>
              </ul>
            </div>
          </div>
        );

      case "storage":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {getIcon("Package")}
              <h2 className="text-xl font-semibold">Skladovanie</h2>
            </div><br />

            <div className="space-y-2">
              <h3 className="font-semibold">Základné požiadavky:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Skladujte v uzavretých, suchých a dobre vetraných priestoroch
                </li>
                <li>Zabezpečte priestory bez veľkých teplotných výkyvov</li>
                <li>
                  Pri vonkajšom skladovaní použite vzduch prepúšťajúcu plachtu
                </li>
                <li>
                  Podložte palety spádovými podložkami v dostatočnej výške nad
                  zemou
                </li>
              </ul>
            </div>

            <Alert
              variant="danger"
              icon={getIcon("AlertTriangle")}
              title="Záručné podmienky"
            >
              Pri skladovaní dlhšom ako dva týždne použite drevené dilatačné
              lišty. Skladovanie dlhšie ako dva mesiace sa považuje za porušenie
              záručných podmienok.
            </Alert>
          </div>
        );

      case "tools":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {getIcon("Tool")}
              <h2 className="text-xl font-semibold">Potrebné náradie</h2>
            </div><br />

            <div className="space-y-2">
              <h3 className="font-semibold">Odporúčané náradie:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bežné klampiarske náradie</li>
                <li>Ručné nožnice na plech</li>
                <li>Elektrické perforovacie nožnice</li>
                <li>Priamočiara píla s listom na rezanie ocele</li>
              </ul>
            </div>

            <Alert
              variant="danger"
              icon={getIcon("AlertTriangle")}
              title="ZÁKAZ!"
            >
              Nepoužívajte uhlovú brúsku! Spôsobuje prehriatie oceľového jadra a
              poškodenie ochrannej povrchovej úpravy. Na takto vzniknuté škody
              sa nevzťahuje záruka.
            </Alert>
          </div>
        );

      case "preparation":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {getIcon("Construction")}
              <h2 className="text-xl font-semibold">Príprava pred montážou</h2><br />
            </div><br />

            <ol className="list-decimal pl-6 space-y-2">
              <li>Overte sklon strechy (minimálne 5°)</li>
              <li>
                Skontrolujte pravé uhly medzi štítovou a odkvapovou hranou
              </li>
              <li>V prípade potreby vyrovnajte strechu štítovým lemovaním</li>
              <li>Vytýčte pravé uhly na ploche strechy</li>
              <li>Natiahnite šnúrku po odkvapovej hrane do roviny</li>
            </ol>

            <Alert
              variant="info"
              icon={getIcon("AlertTriangle")}
              title="Dôležité"
            >
              Tabule trapézu musia byť vždy uložené kolmo na líniu odkvapu.
            </Alert>
          </div>
        );

      case "installation":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Icons.Construction className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Postup montáže</h2>
            </div><br />

            <section>
              <h3 className="font-semibold mb-2">1. Podstrešná fólia</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Použite kvalitné vysoko difúzne fólie</li>
                <li>
                  Montujte priamo na krokvy od odkvapu horizontálne po hrebeň
                </li>
                <li>Minimálna medzera medzi fóliou a krytinou: 5 cm</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold mb-2">2. Montáž trapézov</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Možnosť montáže zľava doprava alebo opačne</li>
                <li>Držte sa roviny odkvapu vyznačenej šnúrkou</li>
                <li>
                  Používajte skrutky: 4,8 x 35 (do laty) a 4,8 x 19 (plech s
                  plechom)
                </li>
                <li>Štandard: 6 skrutiek na 1 m²</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold mb-2">3. Klampiarske prvky</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Štandardné alebo individuálne rozmery</li>
                <li>Kotvenie skrutkou alebo klampiarskym klincom</li>
                <li>
                  Pre montáž špecifických prvkov (komíny, strešné okná)
                  odporúčame prizvať odborníka
                </li>
              </ul>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto  space-y-6">
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white text-center pt-16"
          >
            Odporúčania montáže
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold mb-8"
        >
          Návod na montáž trapézových plechov
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="flex flex-wrap gap-2 border-b">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Tab>
            ))}
          </div>

          <div className="mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              {renderContent()}
            </div>
          </div>
        </motion.div>
        <Support></Support>
      </div>
    </div>
  );
}
