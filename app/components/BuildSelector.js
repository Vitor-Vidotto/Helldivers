"use client";
import { useState } from "react";

const buildsData = {
  "Full Push": {
    "Tank": {
      bag: null,
      helmet: "T8_HEAD_PLATE_AVALON",
      cape: "T8_CAPE_MARTLOCK",
      weapon: "T8_2H_HAMMER",
      armor: "T8_ARMOR_PLATE_KEEPER",
      offhand: "T8_SHIELD",
      potion: "T8_POTION_RESISTANCE",
      boots: "T8_SHOES_LEATHER_MORGANA",
      food: "T8_FOOD_ROAST",
    },
    "Healer": {
      bag: null,
      helmet: "T8_HEAD_CLOTH_SET1",
      cape: "T8_CAPE_LYMHURST",
      weapon: "T8_2H_NATURESTAFF_HELL",
      armor: "T8_ARMOR_LEATHER_FEY",
      offhand: null,
      potion: "T8_POTION_ENERGY",
      boots: "T8_SHOES_LEATHER_MORGANA",
      food: "T8_FOOD_SOUP",
    },
    "DPS (Alabarda)": {
      bag: null,
      helmet: "T8_HEAD_PLATE_SET3",
      cape: "T8_CAPE_THETFORD",
      weapon: "T8_2H_HALBERD",
      armor: "T8_ARMOR_PLATE_SET1",
      offhand: null,
      potion: "T7_POTION_COOLDOWN",
      boots: "T8_SHOES_LEATHER_MORGANA",
      food: "T8_FOOD_PIE",
    },
    "DPS (Segadeira)": {
      bag: null,
      helmet: "T8_HEAD_LEATHER_MORGANA",
      cape: "T8_CAPE_BRIDGEWATCH",
      weapon: "T8_2H_SCYTHE_HELL",
      armor: "T8_ARMOR_LEATHER_HELL",
      offhand: null,
      potion: "T8_POTION_COOLDOWN",
      boots: "T8_SHOES_LEATHER_MORGANA",
      food: "T8_FOOD_PIE",
    },
    "DPS (Luvas Avalonianas)": {
      bag: null,
      helmet: "T8_HEAD_LEATHER_SET2",
      cape: "T8_CAPE_FORTSTERLING",
      weapon: "T8_2H_GLOVES_AVALON",
      armor: "T8_ARMOR_LEATHER_SET2",
      offhand: null,
      potion: "T8_POTION_COOLDOWN",
      boots: "T8_SHOES_LEATHER_MORGANA",
      food: "T8_FOOD_PIE",
    },
  },
  "Clap": {
    "DPS": {
      bag: null,
      helmet: "T8_HEAD_PLATE_SET1",
      cape: null,
      weapon: "T8_MAIN_AXE",
      armor: "T8_ARMOR_PLATE_SET1",
      offhand: null,
      potion: null,
      boots: "T8_SHOES_PLATE_SET1",
      food: null,
    },
    "Healer": {
      bag: null,
      helmet: "T8_HEAD_PLATE_SET1",
      cape: null,
      weapon: "T8_MAIN_AXE",
      armor: "T8_ARMOR_PLATE_SET1",
      offhand: null,
      potion: null,
      boots: "T8_SHOES_PLATE_SET1",
      food: null,
    },
  },
};

const getItemImage = (itemName) =>
  itemName
    ? `https://render.albiononline.com/v1/item/${itemName}@1?quality=4`
    : null;

const BuildSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBuild, setSelectedBuild] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Seleção de Categorias */}
      <div className="flex gap-4 mb-4">
        {Object.keys(buildsData).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedBuild(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Seleção de Builds */}
      {selectedCategory && (
        <div className="flex gap-4 mb-4">
          {Object.keys(buildsData[selectedCategory]).map((build) => (
            <button
              key={build}
              className={`px-4 py-2 rounded-lg ${
                selectedBuild === build ? "bg-green-500" : "bg-gray-700"
              }`}
              onClick={() => setSelectedBuild(build)}
            >
              {build}
            </button>
          ))}
        </div>
      )}

      {/* Exibição da Build */}
      {selectedBuild && (
        <div className="grid grid-cols-3 gap-4 items-center max-w-3xl mx-auto border p-6 rounded-lg bg-gray-800">
          {Object.entries(buildsData[selectedCategory][selectedBuild]).map(
            ([slot, item]) => (
              <div key={slot} className="p-4 text-center">
                {item ? (
                  <img
                    src={getItemImage(item)}
                    alt={slot}
                    className={`w-24 h-24 mx-auto ${
                      slot === "offhand" && item.includes("2H") ? "opacity-30" : ""
                    }`}
                  />
                ) : (
                  <p>{slot}</p>
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
export default BuildSelector;