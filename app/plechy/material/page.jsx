import React from "react";

const TechnologiesPage = () => {
  return (
    <div className="bg-white text-gray-800 pt-[75px]">
      {/* Header Section */}
      <div className="w-full bg-[#D61414]">
        <div className="container mx-auto px-4  py-[26px]">
          <h1 className="text-4xl font-bold text-white text-center">
            Materiál
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-12 space-y-6 text-lg">
          <p className="font-bold">
            Kvalitné materiály a špičkové technológie sú zárukou kvality našich
            výrobkov pre vás, klientov.
          </p>
          <p >
            Pri spracovaní materiálu dbáme v čo najvyššej miere na dodržiavanie
            základných postupov pre zachovanie maximálnej kvality a bezpečnosti
            práce.
          </p>
          <div className=" rounded-lg">
            <p className="">
              Naše skladové zásoby tvoria predovšetkým pozinkované zvitky. Pre
              zákazníka to znamená krátku dobu dodania od objednávky až po
              vyhotovenie. Ostatné zvitky valcované zastudena a lakoplastované
              zabezpečujeme podľa množstva objednávok.
            </p>
          </div>
          <p className="italic text-gray-600">
            Odporúčame objednať tovar v dostatočnom časovom predstihu t.j. 4 až
            5 týždňov pred žiadaným termínom dodania.
          </p>
        </section>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="ZVITKY VALCOVANÉ ZA STUDENA"
            items={["STN 10004.21", "STN 11321.21", "STN 11331.21"]}
          />
          <Card
            title="POZINKOVANÉ ZVITKY"
            items={[
              "STN 10004 - DX 51 D podľa EN",
              "STN 11331 - 10142/90 EN",
              "STN 11321 - DX 52 D podľa EN",
              "DIN 17162/77",
            ]}
          />
          <Card
            title="LAKOPLASTOVANÉ ZVITKY"
            items={[
              "STN 10004 - ST01Z",
              "STN 11321 - ST02Z",
              "STN 11331 - ST03Z",
              "DIN 17162-T2/1980",
            ]}
            extraInfo="Nominálnej hrúbky povlaku základného 5-15 µm a vrchného povlaku
            od 10 do 200 µm"
          />
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ title, items, extraInfo }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 border border-red-100">
    <h2 className="text-2xl font-bold text-red-600 mb-4">{title}</h2>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-gray-700 transition-colors font-semibold"
        >
          {item}
        </li>
      ))}
    </ul>
    {extraInfo && <p className="text-xs text-gray-500 mt-4">{extraInfo}</p>}
  </div>
);

export default TechnologiesPage;
