"use client";

import { useState } from "react";

const QuizGame = () => {
  const [jawabanDipilih, mengaturJawabanDipilih] = useState<string | null>(
    null
  );
  const [jawabanYangBenar, mengaturJawabanYangBenar] = useState<boolean>(false);
  const [indexPertanyaan, mengaturIndexPertanyaan] = useState<number>(0);

  const bahasaIndonesia = [
    {
      pertanyaan: "Ada sebuah rumah di dekat kali, pertanyaannya:",
      pilihan: ["A. 18", "B. 19", "C. 24", "D. Tidak tahu"],
      jawabanBenar: "C",
    },
  ];

  const pemilihanJawaban = (answer: string) => {
    mengaturJawabanDipilih(answer);
    mengaturJawabanYangBenar(true);
  };

  const pertanyaanSelanjutnya = () => {
    mengaturJawabanDipilih(null);
    mengaturJawabanYangBenar(false);
    mengaturIndexPertanyaan((prevIndex) => prevIndex + 1);
  };

  const ulangGame = () => {
    mengaturJawabanDipilih(null);
    mengaturJawabanYangBenar(false);
    mengaturIndexPertanyaan(0);
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      {indexPertanyaan < bahasaIndonesia.length ? (
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <p>{bahasaIndonesia[indexPertanyaan].pertanyaan}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            {bahasaIndonesia[indexPertanyaan].pilihan.map((option, index) => (
              <button
                key={index}
                className={`bg-gray-300 py-2 px-4 rounded ${
                  jawabanDipilih === option[0] ? "bg-blue-200" : ""
                }`}
                onClick={() => pemilihanJawaban(option[0])}
                disabled={jawabanYangBenar}
              >
                {option}
              </button>
            ))}
          </div>

          {jawabanYangBenar && (
            <div className="mt-4">
              {jawabanDipilih ===
              bahasaIndonesia[indexPertanyaan].jawabanBenar ? (
                <p className="text-green-500">Anda benar!</p>
              ) : (
                <p className="text-red-500">Jawaban Anda salah.</p>
              )}
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={pertanyaanSelanjutnya}
              >
                Lanjut
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>Game selesai!</p>
          <button
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={ulangGame}
          >
            Main lagi
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
