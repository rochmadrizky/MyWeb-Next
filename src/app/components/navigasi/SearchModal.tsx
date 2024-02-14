import { IconSearch, IconX } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";

const SearchModal: React.FC<{ membuka: boolean; menutup: () => void }> = ({
  membuka,
  menutup,
}) => {
  const [search, mengaturSearch] = useState("");
  const [pesanError, mengaturPesanError] = useState("");

  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const klikLuar = (klik: MouseEvent) => {
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

  const handleSearch = () => {
    if (search.trim() === "") {
      mengaturPesanError("Search query cannot be empty");
    } else {
      console.log("Mencari...", search);
      mengaturSearch("");
      mengaturPesanError("");
      menutup();
    }
  };

  const klikEnter = (klik: React.KeyboardEvent<HTMLInputElement>) => {
    if (klik.key === "Enter") {
      handleSearch();
    }
  };

  const mengubahKolomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    mengaturSearch(e.target.value);
    // Hapus pesan kesalahan setiap kali pengguna mulai mengetik
    mengaturPesanError("");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${
        membuka ? "visible" : "hidden"
      }`}
    >
      <div
        ref={modal}
        className="bg-gray-200 p-6 rounded-lg shadow-md max-w-md relative"
      >
        <button onClick={menutup} className="absolute top-0 right-0 p-2">
          <IconX />
        </button>

        <div className="p-4">
          <div className="flex items-center">
            <input
              type="text"
              value={search}
              onChange={mengubahKolomInput} // Menangani perubahan pada input
              onKeyPress={klikEnter} // Menangani ketika tombol ditekan
              placeholder="mau cari?"
              className="w-full px-3 py-2 rounded-l-lg"
            />

            <button
              onClick={handleSearch}
              className="bg-gray-300 px-3 py-2 rounded-r-lg"
            >
              <IconSearch />
            </button>
          </div>
        </div>
        {pesanError && <p className="text-red-500 text-sm">{pesanError}</p>}
      </div>
    </div>
  );
};

export default SearchModal;
