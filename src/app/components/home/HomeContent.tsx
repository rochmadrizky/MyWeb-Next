"use client";

import { useEffect, useRef, useState } from "react";

const HomeContent = () => {
  const [zoomGambar, mengaturZoomGambar] = useState(false);
  const foto = useRef<HTMLImageElement>(null);

  const tombolKlikZoom = () => {
    mengaturZoomGambar(!zoomGambar);
  };

  const klikDiluar = (klik: MouseEvent) => {
    if (foto.current && !foto.current.contains(klik.target as Node)) {
      mengaturZoomGambar(false);
    }
  };

  const klikEscape = (klik: KeyboardEvent) => {
    if (klik.key === "Escape") {
      mengaturZoomGambar(false);
    }
  };

  useEffect(() => {
    if (zoomGambar) {
      window.addEventListener("click", klikDiluar);
      window.addEventListener("keydown", klikEscape);
    } else {
      window.removeEventListener("click", klikDiluar);
      window.removeEventListener("keydown", klikEscape);
    }

    return () => {
      window.removeEventListener("click", klikDiluar);
      window.removeEventListener("keydown", klikEscape);
    };
  }, [zoomGambar]);

  return (
    <div className="max-w-4xl mx-auto flex items-center justify-center">
      <div className="p-4">
        <div className="relative">
          <img
            ref={foto}
            src="/me/thisIsMe.png"
            alt="saya"
            className={`rounded-full mx-auto w-36 h-36 mb-3 ring-2 p-0.5 ring-blue-500 bg-gray-300 cursor-pointer ${
              zoomGambar ? "w-72 h-72" : ""
            }`}
            onClick={tombolKlikZoom}
            style={{ transition: "width 0.5s, height 0.5s" }}
          />

          {zoomGambar && (
            <div className="absolute -top-2 right-0 left-0 bg-gray-100 p-2 rounded-xl mx-16 border-t-2 border-blue-500">
              <h1 className="text-lg text-center font-prefix">
                Am I handsome?
              </h1>
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="text-3xl font-description">
            Hi, what&apos;s up everyone, I&apos;m
          </p>
          <h1 className="text-5xl font-title">Rizky Putra</h1>
          <p className="text-xl font-prefix">Front-End Developer</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
