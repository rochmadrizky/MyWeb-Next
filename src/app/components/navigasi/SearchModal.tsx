import { IconSearch, IconX } from "@tabler/icons-react";
import { useState, useEffect, useRef, SetStateAction } from "react";
import SearchDropdown from "./SearchDropdown";

const SearchModal: React.FC<{ membuka: boolean; menutup: () => void }> = ({
  membuka,
  menutup,
}) => {
  const [search, mengaturSearch] = useState("");
  const [opsiLengkap, mengaturOpsiLengkap] = useState<
    { opsi: string; deskripsi: string }[]
  >([]);
  const [pilihOpsiIndex, mengaturPilihOpsiIndex] = useState<number>(-1);
  const mencariHalaman: Record<string, string> = {
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
      const opsiYangCocok: SetStateAction<
        { opsi: string; deskripsi: string }[]
      > = [];
      Object.keys(mencariHalaman).forEach((halaman) => {
        const deskripsi = dapatkanDeskripsi(halaman);
        if (
          halaman.includes(inputPencarian) ||
          deskripsi.includes(inputPencarian)
        ) {
          opsiYangCocok.push({ opsi: halaman, deskripsi });
        }
      });

      if (opsiYangCocok.length > 0) {
        mengaturOpsiLengkap(opsiYangCocok);
      } else {
        mengaturOpsiLengkap([{ opsi: "results not found", deskripsi: "" }]);
      }
    }

    if (inputPencarian.length < search.length) {
      mengaturPilihOpsiIndex(-1);
    }
  };

  const dapatkanDeskripsi = (halaman: string) => {
    switch (halaman) {
      case "abouts":
        return "quick count";
      case "blogs":
        return "zero on";
      case "home":
        return "Hi, what's up everyone, I'm Rizky Putra";
      default:
        return "";
    }
  };

  const pilihanLengkap = (opsi: string) => {
    if (opsi !== "results not found") {
      const halamanYangDipilih = mencariHalaman[opsi];
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
      if (
        opsiLengkap.length > 0 &&
        opsiLengkap[0].opsi !== "results not found"
      ) {
        const indexSaatIni = opsiLengkap.findIndex(
          (ops) => ops.opsi === search
        );
        let indexBerikutnya =
          e.key === "ArrowDown"
            ? (indexSaatIni + 1) % opsiLengkap.length
            : (indexSaatIni - 1 + opsiLengkap.length) % opsiLengkap.length;
        if (indexBerikutnya === -1) indexBerikutnya = opsiLengkap.length - 1;
        mengaturSearch(opsiLengkap[indexBerikutnya].opsi);
        mengaturPilihOpsiIndex(indexBerikutnya);
      }
    } else if (e.key === "Enter") {
      pilihanLengkap(search);
    } else if (e.key === "Escape") {
      menutup();
      mengulangSearch();
    }
  };

  const menutupModal = () => {
    mengulangSearch();
    menutup();
  };

  const mengulangSearch = () => {
    mengaturSearch("");
    mengaturPilihOpsiIndex(-1);
    mengaturOpsiLengkap([]);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${
        membuka ? "visible" : "hidden"
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
              onClick={() => pilihanLengkap(search)}
              className="bg-gray-300 px-3 py-2 rounded-r-lg"
            >
              <IconSearch />
            </button>
          </div>

          {opsiLengkap.length > 0 && (
            <SearchDropdown
              opsional={opsiLengkap.map((option) => option.opsi)}
              deskripsi={opsiLengkap.map((option) => option.deskripsi)}
              opsiYangDipilih={pilihOpsiIndex}
              menanganiPilihan={pilihanLengkap}
              mengaturOpsiYangDipilih={mengaturPilihOpsiIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
