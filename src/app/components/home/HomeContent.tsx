"use client";

import { useState, useEffect } from "react";
import FotoModal from "./FotoModal";

const HomeContent = () => {
  const [tampilkanModal, mengaturTampilkanModal] = useState(false);
  const [lingkaran, mengaturLingkaran] = useState("ring-blue-500 ring-2");

  const fotoMe = "/me/thisIsMe.png";

  const klikModal = () => {
    mengaturTampilkanModal(true);
    mengaturLingkaran("ring-4 ring-blue-500 animate-pulse");
  };

  const tutupModal = () => {
    mengaturTampilkanModal(false);
    mengaturLingkaran("ring-blue-500 ring-2");
  };

  useEffect(() => {
    const shortcutMembukaFoto = (klik: KeyboardEvent) => {
      if ((klik.metaKey || klik.ctrlKey) && klik.key === "i") {
        if (tampilkanModal) {
          tutupModal();
        } else {
          klikModal();
        }
      }
    };

    document.addEventListener("keydown", shortcutMembukaFoto);

    return () => {
      document.removeEventListener("keydown", shortcutMembukaFoto);
    };
  }, [tampilkanModal]);

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
      <div className="p-4 relative" onClick={klikModal}>
        <div
          className={`absolute rounded-full mx-auto w-36 h-36 cursor-pointer ${lingkaran}`}
        ></div>
        <img
          src={fotoMe}
          alt="saya"
          className="rounded-full mx-auto w-36 h-36 bg-gray-300 p-0.5"
        />
      </div>

      <div className="text-center">
        <p className="text-3xl font-description">
          Hi, what&apos;s up everyone, I&apos;m
        </p>
        <h1 className="text-5xl font-title">Rizky Putra</h1>
        <p className="text-xl font-prefix">Front-End Developer</p>
      </div>

      <FotoModal membuka={tampilkanModal} menutup={tutupModal} foto={fotoMe} />
    </div>
  );
};

export default HomeContent;
