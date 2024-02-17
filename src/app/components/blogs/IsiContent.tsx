"use client";

import React, { useState } from "react";
import {
  IconActivity,
  IconCode,
  IconCoffee,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
  IconQuotes,
} from "@tabler/icons-react";

const IsiContent = () => {
  const konten = [
    {
      icon: <IconCode />,
      judul: "Coding.",
      deskripsi:
        "Every day I always practice coding to increase my skills and knowledge, my field is Front-End Developers.",
    },
    {
      icon: <IconCoffee />,
      judul: "Inspiration.",
      deskripsi:
        "By the way, coffee and cigarettes are one of the driving forces of inspiration for me.",
    },
    {
      icon: <IconActivity />,
      judul: "Activity.",
      deskripsi:
        "Sometimes during my busy schedule, I always make time for sport, namely boxing.",
    },
    {
      icon: <IconQuotes />,
      judul: "Quotes.",
      deskripsi:
        '"All days are beautiful, if they are with You." just kidding, relax, friend. hehe',
    },
  ];

  const [indexSaatIni, mengaturIndexSaatIni] = useState(0);

  const kontenSelanjutnya = () => {
    mengaturIndexSaatIni((isiIndex) =>
      isiIndex === konten.length - 1 ? 0 : isiIndex + 1
    );
  };

  const kontenSebelumnya = () => {
    mengaturIndexSaatIni((isiIndex) =>
      isiIndex === 0 ? konten.length - 1 : isiIndex - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
      <div className="flex items-center gap-4">
        <button onClick={kontenSebelumnya}>
          <IconPlayerTrackPrevFilled />
        </button>

        <div
          key={indexSaatIni}
          className="bg-gray-100 w-full md:w-96 h-52 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-center">
            <div className="p-8">
              <div className=" flex flex-col items-center justify-center">
                <div className="p-4">{konten[indexSaatIni].icon}</div>
                <div className="text-center">
                  <h1 className="font-prefix text-xl">
                    {konten[indexSaatIni].judul}
                  </h1>
                  <p className="font-description py-2">
                    {konten[indexSaatIni].deskripsi}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={kontenSelanjutnya}>
          <IconPlayerTrackNextFilled />
        </button>
      </div>
    </div>
  );
};

export default IsiContent;
