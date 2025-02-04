"use client";
import { useState } from "react";

const buildsData = {
  "Full Push": {
    "DPS": {
      bag: null,
      helmet: "T8_HEAD_PLATE_SET1",
      cape: null,
      weapon: "T8_2H_HALBERD",
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
    ? `https://render.albiononline.com/v1/item/${itemName}@0.png?quality=0&size=217&locale=en`
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