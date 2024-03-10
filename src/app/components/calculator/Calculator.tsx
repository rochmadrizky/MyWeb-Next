"use client";

import { IconBackspace } from "@tabler/icons-react";
import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [ekspresi, mengaturEkspresi] = useState("0");
  const [hasil, mengaturHasil] = useState("");

  const menanganiKlik = (nilai: string) => {
    if (ekspresi === "0" && /[0-9]/.test(nilai)) {
      mengaturEkspresi(nilai);
    } else if (nilai === "C") {
      mengaturEkspresi("0");
      mengaturHasil("");
    } else if (nilai === "DEL") {
      mengaturEkspresi((sebelum) => sebelum.slice(0, -1) || "0");
    } else if (nilai === "=") {
      menghitungHasil();
    } else {
      if (ekspresi === "0" && nilai === "0") return;

      if (ekspresi !== "0") {
        if (ekspresi.charAt(ekspresi.length - 1) === "0" && nilai === "0")
          return;
        mengaturEkspresi((sebelum) => sebelum + nilai);
      } else mengaturEkspresi(nilai);
    }
  };

  const menghitungHasil = () => {
    try {
      const evaluasiHasil = ekspresi.replace(/×/g, "*");
      const ekspresiAkhir = evaluasiHasil.replace(/÷/g, "/");
      const hasil = eval(ekspresiAkhir);
      mengaturHasil(hasil === Infinity ? "sorry no results found" : `${hasil}`);
    } catch (error) {
      mengaturHasil("sorry no results found");
    }
  };

  return (
    <div>
      <div className="flex flex-col max-w-xs mx-auto">
        <div className="max-w-md border-b-2 border-t-2 border-blue-500 rounded-xl mb-2">
          <div className="text-right p-4">
            <p className="font-prefix text-lg">{ekspresi}</p>
            <p className="font-prefix text-xl">{hasil}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          {["C"].map((nilai, index) => (
            <button
              key={index}
              className="bg-gray-100 text-xl p-4 hover:bg-gray-300 w-full border-l-2 border-r-2 border-blue-500 rounded-xl font-prefix"
              onClick={() => menanganiKlik(nilai)}
            >
              {nilai}
            </button>
          ))}

          <button
            className="bg-gray-100 p-4 hover:bg-gray-300 w-full flex items-center justify-center border-l-2 border-r-2 border-blue-500 rounded-xl"
            onClick={() => menanganiKlik("DEL")}
          >
            <IconBackspace />
          </button>

          {["="].map((nilai, index) => (
            <button
              key={index}
              className="bg-gray-100 text-xl p-4 hover:bg-gray-300 w-full border-l-2 border-r-2 border-blue-500 rounded-xl font-prefix"
              onClick={() => menanganiKlik(nilai)}
            >
              {nilai}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "÷"].map((nilai, index) => (
            <button
              key={index}
              className="bg-gray-100 text-xl p-4 hover:bg-gray-300 border-l-2 border-r-2 border-blue-500 rounded-xl font-prefix"
              onClick={() => menanganiKlik(nilai)}
            >
              {nilai}
            </button>
          ))}

          {["4", "5", "6", "×"].map((nilai, index) => (
            <button
              key={index}
              className="bg-gray-100 text-xl p-4 hover:bg-gray-300 border-l-2 border-r-2 border-blue-500 rounded-xl font-prefix"
              onClick={() => menanganiKlik(nilai)}
            >
              {nilai}
            </button>
          ))}

          {["1", "2", "3", "+"].map((nilai, index) => (
            <button
              key={index}
              className="bg-gray-100 text-xl p-4 hover:bg-gray-300 border-l-2 border-r-2 border-blue-500 rounded-xl font-prefix"
              onClick={() => menanganiKlik(nilai)}
            >
              {nilai}
            </button>
          ))}

          {["0", "-"].map((nilai, index) => (
            <button
              key={index}
              className="bg-gray-100 text-xl p-4 hover:bg-gray-300 border-l-2 border-r-2 border-blue-500 rounded-xl font-prefix"
              onClick={() => menanganiKlik(nilai)}
            >
              {nilai}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-8">
          <h1 className="font-prefix text-2xl">Notes:</h1>
          <p className="font-description">
            I designed and made it with a simple appearance.
          </p>
          <p className="font-description">You can also try it.</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
