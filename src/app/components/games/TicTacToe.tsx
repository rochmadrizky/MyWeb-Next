"use client";

import React, { useState, useEffect } from "react";
import Square from "./Square";

const kotakKosong = "";
const kotakX = "X";
const kotakO = "O";

const hitungPemenang = (kotak: string[]): string | null => {
  const garisKemenangan: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < garisKemenangan.length; i++) {
    const [a, b, c] = garisKemenangan[i];
    if (kotak[a] && kotak[a] === kotak[b] && kotak[a] === kotak[c]) {
      return kotak[a];
    }
  }

  if (!kotak.includes(kotakKosong)) {
    return "Draw";
  }

  return null;
};

const TicTacToe: React.FC = () => {
  const [papanPermainan, mengaturPapanPermainan] = useState(
    Array(9).fill(kotakKosong)
  );
  const [penggunaX, mengaturPenggunaX] = useState(true);
  const [permainanDimulai, mengaturPermainanDimulai] = useState(false);

  const menanganiKlik = (i: number) => {
    if (
      !permainanDimulai ||
      hitungPemenang(papanPermainan) ||
      papanPermainan[i]
    ) {
      return;
    }
    const kotakBaru = [...papanPermainan];
    kotakBaru[i] = kotakX;
    mengaturPapanPermainan(kotakBaru);
    mengaturPenggunaX(false);
  };

  const tombolMulai = () => {
    mengaturPermainanDimulai(true);
  };

  const tombolMengulang = () => {
    mengaturPapanPermainan(Array(9).fill(kotakKosong));
    mengaturPenggunaX(true);
    mengaturPermainanDimulai(false);
  };

  useEffect(() => {
    if (!penggunaX && permainanDimulai) {
      const pengaturWaktu = setTimeout(() => {
        const papanKosong = papanPermainan.reduce<number[]>(
          (menerima, isi, index) => {
            if (isi === kotakKosong) {
              menerima.push(index);
            }
            return menerima;
          },
          []
        );

        const indeksAcak = Math.floor(Math.random() * papanKosong.length);
        const papanBaru = [...papanPermainan];
        papanBaru[papanKosong[indeksAcak]] = kotakO;
        mengaturPapanPermainan(papanBaru);
        mengaturPenggunaX(true);
      }, 500);

      return () => clearTimeout(pengaturWaktu);
    }
  }, [penggunaX, papanPermainan, permainanDimulai]);

  const membuatKotak = (i: number) => (
    <Square nilai={papanPermainan[i]} klik={() => menanganiKlik(i)} />
  );

  const pemenang = hitungPemenang(papanPermainan);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="col-span-3">
        {permainanDimulai ? (
          <div className="pb-4">
            <span className="font-prefix">
              {pemenang
                ? `Won by player : ${pemenang}`
                : `Player: ${penggunaX ? "X" : "O"}`}
            </span>
          </div>
        ) : (
          <div className="pb-4">
            <span className="font-prefix">
              Click &apos;Start Game&apos; to get started!
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-24 h-24">
            {membuatKotak(i)}
          </div>
        ))}
      </div>

      {!permainanDimulai && (
        <div className="pt-4">
          <button
            onClick={tombolMulai}
            className="py-1 px-4 rounded-lg border-l-2 border-r-2 border-blue-500"
          >
            Start Game
          </button>
        </div>
      )}

      {(pemenang || pemenang === "Draw") && (
        <div className="pt-4">
          <button
            onClick={tombolMengulang}
            className="py-1 px-4 border-l-2 border-r-2 border-blue-500 rounded-lg"
          >
            Reset Game
          </button>
        </div>
      )}

      <div className="flex items-center justify-center">
        <div className="p-8 max-w-lg">
          <h1 className="font-prefix text-2xl">Notes:</h1>
          <p className="font-description">
            You will play with machines or robots, because it&apos;s impossible
            for you to switch cellphones with your friends to play this game,
            right? haha..
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
