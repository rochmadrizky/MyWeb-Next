import { IconSearch, IconX } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";

const SearchModal: React.FC<{ membuka: boolean; menutup: () => void }> = ({
  membuka,
  menutup,
}) => {
  const [search, mengaturSearch] = useState("");
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
    console.log("Mencari...", search);
    mengaturSearch("");
    menutup();
  };

  const klikEnter = (klik: React.KeyboardEvent<HTMLInputElement>) => {
    if (klik.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${
        membuka ? "visible" : "hidden"
      }`}
    >
      <div
        ref={modal}
        className="bg-gray-200  p-6 rounded-lg shadow-md max-w-md relative"
      >
        <button onClick={menutup} className="absolute top-0 right-0 p-2">
          <IconX />
        </button>

        <div className="p-4 flex items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => mengaturSearch(e.target.value)}
            onKeyPress={klikEnter} // Menangani ketika tombol ditekan
            placeholder="Enter your search query"
            className="w-full px-3 py-2"
          />

          <button onClick={handleSearch} className="bg-gray-300 px-3 py-2">
            <IconSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
