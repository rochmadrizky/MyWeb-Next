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
  const [mouse, mengaturMouse] = useState<number | null>(null);
  const [animasi, mengaturAnimasi] = useState(false);
  const [animasiBergeser, mengaturAnimasiBergeser] = useState(false);

  const kontenSelanjutnya = () => {
    if (!animasi) {
      mengaturAnimasi(true);
      mengaturAnimasiBergeser(true);
      mengaturIndexSaatIni((isiIndex) =>
        isiIndex === konten.length - 1 ? 0 : isiIndex + 1
      );
      setTimeout(() => {
        mengaturAnimasi(false);
      }, 500);
    }
  };

  const kontenSebelumnya = () => {
    if (!animasi) {
      mengaturAnimasi(true);
      mengaturAnimasiBergeser(false);
      mengaturIndexSaatIni((isiIndex) =>
        isiIndex === 0 ? konten.length - 1 : isiIndex - 1
      );
      setTimeout(() => {
        mengaturAnimasi(false);
      }, 500);
    }
  };

  const mouseSaatDiklik = (
    klik: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    mengaturMouse(klik.clientX);
  };

  const mouseSaatDigeser = (
    geser: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (mouse !== null) {
      const geserHorizontal = geser.clientX;
      const arahGerakan = geserHorizontal - mouse;
      if (arahGerakan > 0 && indexSaatIni !== konten.length - 1) {
        kontenSelanjutnya();
      } else if (arahGerakan < 0 && indexSaatIni !== 0) {
        kontenSebelumnya();
      }
      mengaturMouse(null);
    }
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 flex items-center justify-center"
      onMouseDown={mouseSaatDiklik}
      onMouseUp={mouseSaatDigeser}
    >
      <div className="flex items-center gap-4">
        <button onClick={kontenSebelumnya} disabled={indexSaatIni === 0}>
          <IconPlayerTrackPrevFilled />
        </button>

        <div
          key={indexSaatIni}
          className={`flex items-center justify-center bg-gray-100 w-full md:w-96 h-52 rounded-lg shadow-md transition-transform ${
            animasi
              ? animasiBergeser
                ? "transform translate-x-3"
                : "transform -translate-x-3"
              : ""
          }`}
        >
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

        <button
          onClick={kontenSelanjutnya}
          disabled={indexSaatIni === konten.length - 1}
        >
          <IconPlayerTrackNextFilled />
        </button>
      </div>
    </div>
  );
};

export default IsiContent;
