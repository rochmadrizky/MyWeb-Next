import { useEffect, useRef, useState } from "react";

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
      perbaruiTanggalWaktu();

      const waktuMenutup = setTimeout(() => {
        tutup();
      }, 1500);

      return () => {
        document.removeEventListener("mousedown", klikDiluar);
        document.removeEventListener("keydown", klikEscape);
        clearTimeout(waktuMenutup);
      };
    } else {
      document.removeEventListener("mousedown", klikDiluar);
      document.removeEventListener("keydown", klikEscape);
    }
  }, [buka, tutup]);

  const perbaruiTanggalWaktu = () => {
    const tanggal = new Date();
    const jam = tanggal.getHours();
    const menit = tanggal.getMinutes();
    const hari = tanggal.getDate();
    const bulan = tanggal.getMonth() + 1;
    const tahun = tanggal.getFullYear();
    const hariDalamSeminggu = tanggal.getDay();
    const listHari = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const listBulan = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const aturHariBulan = `${listHari[hariDalamSeminggu]}, ${hari} ${
      listBulan[bulan - 1]
    } ${tahun}`;
    const aturJamMenit = `${jam.toString().padStart(2, "0")}:${menit
      .toString()
      .padStart(2, "0")}`;

    mengaturHariBulan(aturHariBulan);
    mengaturJamMenit(aturJamMenit);
  };

  return (
    <div
      className={`fixed top-2 left-0 w-full h-full flex items-center justify-center transition-opacity ${
        buka ? "opacity-100 duration-500" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={dropdown}
        className={`p-8 absolute top-10 left-1/2 transform -translate-x-1/2 ${
          buka
            ? "translate-y-0 transition-transform duration-500"
            : "-translate-y-full duration-500"
        }`}
      >
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
