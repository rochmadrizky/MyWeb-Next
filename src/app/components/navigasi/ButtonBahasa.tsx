import React, { useState, useEffect, useRef } from "react";

const ButtonBahasa = () => {
  const [dropdownTampil, setDropdownTampil] = useState(false);
  const [pilihBahasa, setPilihBahasa] = useState("EN");
  const dropdown = useRef<HTMLDivElement>(null);

  const bahasaList = [
    { code: "EN", imageSrc: "/country/EN.png", alt: "EN" },
    { code: "ID", imageSrc: "/country/ID.png", alt: "ID" },
  ];

  const ubahBahasa = (bahasaCode: string) => {
    setPilihBahasa(bahasaCode);
    setDropdownTampil(false);
  };

  const menutupDariLuar = (klik: MouseEvent) => {
    if (dropdown.current && !dropdown.current.contains(klik.target as Node)) {
      setDropdownTampil(false);
    }
  };

  const handleKeyPress = (klik: KeyboardEvent) => {
    if (klik.key === "Escape") {
      setDropdownTampil(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", menutupDariLuar);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", menutupDariLuar);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="relative px-[5px] py-[5px]" ref={dropdown}>
      <button onClick={() => setDropdownTampil(!dropdownTampil)}>
        {bahasaList.map((bahasa) =>
          pilihBahasa === bahasa.code ? (
            <img
              key={bahasa.code}
              src={bahasa.imageSrc}
              alt={bahasa.alt}
              className="w-6 h-6"
            />
          ) : null
        )}
      </button>

      {dropdownTampil && (
        <div className="flex flex-col items-center justify-center w-14 h-20 absolute right-0 bg-gray-200 border-b border-black shadow-md rounded-md">
          {bahasaList.map((bahasa) => (
            <button
              key={bahasa.code}
              className="py-2 flex items-center justify-center"
              onClick={() => ubahBahasa(bahasa.code)}
            >
              <img src={bahasa.imageSrc} alt={bahasa.alt} className="w-6 h-6" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonBahasa;
