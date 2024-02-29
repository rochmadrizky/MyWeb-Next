import React, { useRef, useEffect } from "react";

interface FotoModalProps {
  membuka: boolean;
  menutup: () => void;
}

const FotoModal: React.FC<FotoModalProps> = ({ membuka, menutup }) => {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const klikDiluar = (klik: MouseEvent) => {
      if (modal.current && !modal.current.contains(klik.target as Node)) {
        menutup();
      }
    };

    const klikEscape = (klik: KeyboardEvent) => {
      if (klik.key === "Escape") {
        menutup();
      }
    };

    if (membuka) {
      document.addEventListener("mousedown", klikDiluar);
      document.addEventListener("keydown", klikEscape);
    } else {
      document.removeEventListener("mousedown", klikDiluar);
      document.removeEventListener("keydown", klikEscape);
    }

    return () => {
      document.removeEventListener("mousedown", klikDiluar);
      document.removeEventListener("keydown", klikEscape);
    };
  }, [membuka, menutup]);

  return (
    <div
      className={`fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center transition-opacity ${
        membuka ? "opacity-100 duration-500" : "opacity-0 pointer-events-none"
      }`}
    >
      <div ref={modal} className="p-4">
        <img
          src="/me/thisIsMe.png"
          alt="saya"
          className=" md:w-96 md:h-96 w-72 h-72 rounded-b-3xl"
        />
      </div>
    </div>
  );
};

export default FotoModal;
