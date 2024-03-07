"use client";

import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [ekspresi, mengaturEkspresi] = useState("");
  const [hasil, mengaturHasil] = useState("");

  const menanganiKlik = (nilai: string) => {
    if (nilai === "C") {
      mengaturEkspresi("");
      mengaturHasil("");
    } else if (nilai === "DEL") {
      mengaturEkspresi((sebelum) => sebelum.slice(0, -1));
    } else if (nilai === "=") {
      menghitungHasil();
    } else {
      mengaturEkspresi((sebelum) => sebelum + nilai);
    }
  };

  const menghitungHasil = () => {
    try {
      const evaluasiHasil = ekspresi.replace(/×/g, "*");
      const ekspresiAkhir = evaluasiHasil.replace(/÷/g, "/");
      const hasil = eval(ekspresiAkhir);
      mengaturHasil(`${hasil}`);
    } catch (error) {
      mengaturHasil("Error");
    }
  };

  return (
    <div className="flex flex-col max-w-xs mx-auto">
      <div className="w-full h-20 border border-black mb-2">
        <div className=" text-right p-4">
          <p>{ekspresi}</p>
          <p>{hasil}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "÷"].map((nilai, index) => (
          <button
            key={index}
            className="bg-gray-300 text-xl p-4 hover:bg-gray-400"
            onClick={() => menanganiKlik(nilai)}
          >
            {nilai}
          </button>
        ))}

        {["4", "5", "6", "×"].map((nilai, index) => (
          <button
            key={index}
            className="bg-gray-300 text-xl p-4 hover:bg-gray-400"
            onClick={() => menanganiKlik(nilai)}
          >
            {nilai}
          </button>
        ))}

        {["1", "2", "3", "+"].map((nilai, index) => (
          <button
            key={index}
            className="bg-gray-300 text-xl p-4 hover:bg-gray-400"
            onClick={() => menanganiKlik(nilai)}
          >
            {nilai}
          </button>
        ))}

        <button
          className="bg-gray-300 text-xl p-4 hover:bg-gray-400"
          onClick={() => menanganiKlik("DEL")}
        >
          DEL
        </button>

        {["C", "0", "=", "-"].map((nilai, index) => (
          <button
            key={index}
            className={`bg-${
              nilai === "=" ? "green" : "gray"
            }-300 text-xl p-4 hover:bg-${nilai === "=" ? "green" : "gray"}-400`}
            onClick={() => menanganiKlik(nilai)}
          >
            {nilai}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
