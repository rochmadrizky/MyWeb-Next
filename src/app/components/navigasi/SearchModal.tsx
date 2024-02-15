import { IconSearch, IconX } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
import SearchDropdown from "./SearchDropdown";

const SearchModal: React.FC<{ membuka: boolean; menutup: () => void }> = ({
  membuka,
  menutup,
}) => {
  const [search, mengaturSearch] = useState("");
  const [opsiLengkap, mengaturOpsiLengkap] = useState<string[]>([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);
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
        mengulangSearch(); // Reset pencarian saat menutup modal dari luar
      }
    };

    const klikEscape = (klik: KeyboardEvent) => {
      if (klik.key === "Escape") {
        menutup();
        mengulangSearch(); // Reset pencarian saat menutup modal dengan tombol Escape
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
        mengaturOpsiLengkap(["results not found"]);
      }
    }

    // Reset selected option index when the input length decreases
    if (inputPencarian.length < search.length) {
      setSelectedOptionIndex(-1);
    }
  };

  const pilihAutoComplete = (option: string) => {
    if (option !== "results not found") {
      const halamanYangDipilih = searchHalaman[option];
      if (halamanYangDipilih) {
        window.location.href = halamanYangDipilih;
      }
      mengaturSearch(""); // Kosongkan input setelah memilih
    }
    mengaturOpsiLengkap([]); // Sembunyikan dropdown setelah pengguna memilih opsi
  };

  const menanganiTombol = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (opsiLengkap.length > 0 && opsiLengkap[0] !== "results not found") {
        const indexSaatIni = opsiLengkap.indexOf(search);
        let indexBerikutnya =
          e.key === "ArrowDown"
            ? (indexSaatIni + 1) % opsiLengkap.length
            : (indexSaatIni - 1 + opsiLengkap.length) % opsiLengkap.length;
        if (indexBerikutnya === -1) indexBerikutnya = opsiLengkap.length - 1;
        mengaturSearch(opsiLengkap[indexBerikutnya]);
        setSelectedOptionIndex(indexBerikutnya);
      }
    } else if (e.key === "Enter") {
      pilihAutoComplete(search);
    } else if (e.key === "Escape") {
      menutup();
      mengulangSearch(); // Reset pencarian saat menekan tombol Escape
    }
  };

  const menutupModal = () => {
    mengulangSearch();
    menutup(); // Panggil fungsi menutup yang diterima dari props
  };

  const mengulangSearch = () => {
    mengaturSearch(""); // Reset nilai pencarian
    setSelectedOptionIndex(-1); // Reset indeks opsi terpilih
    mengaturOpsiLengkap([]); // Menghapus opsi dropdown
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
              onClick={() => pilihAutoComplete(search)}
              className="bg-gray-300 px-3 py-2 rounded-r-lg"
            >
              <IconSearch />
            </button>
          </div>
          {opsiLengkap.length > 0 && (
            <SearchDropdown
              options={opsiLengkap}
              selectedOptionIndex={selectedOptionIndex}
              handleOptionSelect={pilihAutoComplete}
              setSelectedOptionIndex={setSelectedOptionIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
