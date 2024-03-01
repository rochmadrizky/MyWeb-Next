import React, { useEffect, useRef, useState } from "react";

interface DropdownVisitProps {
  buka: boolean;
  tutup: () => void;
}

const DropdownVisit: React.FC<DropdownVisitProps> = ({ buka, tutup }) => {
  const dropdown = useRef<HTMLDivElement>(null);
  const [hariBulan, mengaturHariBulan] = useState<string>("");
  const [jamMenit, mengaturJamMenit] = useState<string>("");

  useEffect(() => {
    const klikDiluar = (klik: MouseEvent) => {
      if (dropdown.current && !dropdown.current.contains(klik.target as Node)) {
        tutup();
      }
    };

    const klikEscape = (klik: KeyboardEvent) => {
      if (klik.key === "Escape") {
        tutup();
      }
    };

    if (buka) {
      document.addEventListener("mousedown", klikDiluar);
      document.addEventListener("keydown", klikEscape);
      updateDateTime();
    } else {
      document.removeEventListener("mousedown", klikDiluar);
      document.removeEventListener("keydown", klikEscape);
    }

    return () => {
      document.removeEventListener("mousedown", klikDiluar);
      document.removeEventListener("keydown", klikEscape);
    };
  }, [buka, tutup]);

  const updateDateTime = () => {
    const date = new Date();
    const jam = date.getHours();
    const menit = date.getMinutes();
    const tanggal = date.getDate();
    const bulan = date.getMonth() + 1;
    const tahun = date.getFullYear();
    const hari = date.getDay();
    const namaHari = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][hari];

    const namaBulan = [
      "January",
      "February",
      "March",
      "April",
      "Mey",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][bulan - 1];

    const hariBulanString = `${namaHari}, ${tanggal} ${namaBulan} ${tahun}`;
    const jamMenitString = `${jam}:${menit.toString().padStart(2, "0")}`;

    mengaturHariBulan(hariBulanString);
    mengaturJamMenit(jamMenitString);
  };

  return (
    <div
      className={`fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center transition-opacity ${
        buka ? "opacity-100 duration-500" : "opacity-0 pointer-events-none"
      }`}
    >
      <div ref={dropdown} className="p-8">
        <div className="p-2 border-2 border-blue-500 rounded-lg bg-gray-100 w-56 h-auto mx-auto">
          <div className="text-center">
            <p className="font-title text-md">{hariBulan}</p>
            <p className="font-prefix text-sm">{jamMenit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownVisit;
