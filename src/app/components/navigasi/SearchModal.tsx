import { IconSearch, IconX } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
import SearchDropdown from "./SearchDropdown";

const SearchModal: React.FC<{ membuka: boolean; menutup: () => void }> = ({
  membuka,
  menutup,
}) => {
  const [search, mengaturSearch] = useState("");
  const [opsiLengkap, mengaturOpsiLengkap] = useState<string[]>([]);
  const [opsiIndex, mengaturOpsiIndex] = useState<number>(-1);

  const searchHalaman: Record<string, string> = {
    abouts: "/abouts",
    blogs: "/blogs",
    home: "/",
  };

  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const klikLuar = (klik: MouseEvent) => {
      if (modal.current && !modal.current.contains(klik.target as Node)) {
        menutup();
        mengulangSearch();
      }
    };

    const klikEscape = (klik: KeyboardEvent) => {
      if (klik.key === "Escape") {
        menutup();
        mengulangSearch();
      }
    };

    if (membuka) {
      document.addEventListener("mousedown", klikLuar);
      document.addEventListener("keydown", klikEscape);
    } else {
      document.removeEventListener("mousedown", klikLuar);
      document.removeEventListener("keydown", klikEscape);
    }

    return () => {
      document.removeEventListener("mousedown", klikLuar);
      document.removeEventListener("keydown", klikEscape);
    };
  }, [membuka, menutup]);

  const mengubahKolomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPencarian = e.target.value.toLowerCase().trim();
    mengaturSearch(inputPencarian);

    if (inputPencarian === "") {
      mengaturOpsiLengkap([]);
    } else {
      const halamanYangCocok = Object.keys(searchHalaman).filter((halaman) =>
        halaman.includes(inputPencarian)
      );

      if (halamanYangCocok.length > 0) {
        mengaturOpsiLengkap(halamanYangCocok);
      } else {
        mengaturOpsiLengkap(["not found"]);
      }
    }
  };

  const pilihOpsiLengkap = (option: string) => {
    if (option !== "not found") {
      const halamanYangDipilih = searchHalaman[option];
      if (halamanYangDipilih) {
        window.location.href = halamanYangDipilih;
      }
      mengaturSearch("");
    }
    mengaturOpsiLengkap([]);
  };

  const menanganiTombol = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (opsiLengkap.length > 0 && opsiLengkap[0] !== "not found") {
        const indexSaatIni = opsiLengkap.indexOf(search);
        let indexBerikutnya =
          e.key === "ArrowDown"
            ? (indexSaatIni + 1) % opsiLengkap.length
            : (indexSaatIni - 1 + opsiLengkap.length) % opsiLengkap.length;
        if (indexBerikutnya === -1) indexBerikutnya = opsiLengkap.length - 1;
        mengaturSearch(opsiLengkap[indexBerikutnya]);
        mengaturOpsiIndex(indexBerikutnya);
      }
    } else if (e.key === "Enter") {
      pilihOpsiLengkap(search);
    } else if (e.key === "Escape") {
      menutup();
      mengulangSearch();
    }
  };

  const menutupModal = () => {
    mengaturSearch("");
    mengaturOpsiIndex(-1);
    menutup();
  };

  const mengulangSearch = () => {
    mengaturSearch("");
    mengaturOpsiIndex(-1);
    mengaturOpsiLengkap([]);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${
        membuka ? "tampil" : "tutup"
      }`}
    >
      <div
        ref={modal}
        className="bg-gray-200 p-6 rounded-lg shadow-md max-w-md relative"
      >
        <button onClick={menutupModal} className="absolute top-0 right-0 p-2">
          <IconX />
        </button>

        <div className="p-4">
          <div className="flex items-center relative">
            <input
              type="text"
              value={search}
              onChange={mengubahKolomInput}
              onKeyDown={menanganiTombol}
              placeholder="mau cari?"
              className="w-full px-3 py-2 rounded-l-lg"
            />

            <button
              onClick={() => pilihOpsiLengkap(search)}
              className="bg-gray-300 px-3 py-2 rounded-r-lg"
            >
              <IconSearch />
            </button>
          </div>
          {opsiLengkap.length > 0 && (
            <SearchDropdown
              opsi={opsiLengkap}
              opsiIndexYangDipilih={opsiIndex}
              menanganiPilihan={pilihOpsiLengkap}
              mengaturIndexYangDipilih={mengaturOpsiIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
