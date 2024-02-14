import { IconSearch, IconX } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";

const SearchModal: React.FC<{ membuka: boolean; menutup: () => void }> = ({
  membuka,
  menutup,
}) => {
  const [search, mengaturSearch] = useState("");
  const [pesanError, mengaturPesanError] = useState("");
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<string[]>([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);
  const searchPages: Record<string, string> = {
    abouts: "/abouts",
    blogs: "/blogs",
    home: "/",
  };

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

  const mengubahKolomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase().trim();
    mengaturSearch(inputValue);
    mengaturPesanError(""); // Hapus pesan kesalahan setiap kali pengguna mengetik

    if (inputValue === "") {
      setAutoCompleteOptions([]);
    } else {
      const matchedPages = Object.keys(searchPages).filter((page) =>
        page.includes(inputValue)
      );

      if (matchedPages.length > 0) {
        setAutoCompleteOptions(matchedPages);
      } else {
        setAutoCompleteOptions(["not found"]);
      }
    }
  };

  const pilihAutoComplete = (option: string) => {
    if (option !== "not found") {
      const selectedPage = searchPages[option];
      if (selectedPage) {
        window.location.href = selectedPage;
      }
      mengaturSearch(""); // Kosongkan input setelah memilih
    }
    setAutoCompleteOptions([]); // Sembunyikan dropdown setelah pengguna memilih opsi
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const currentIndex = autoCompleteOptions.indexOf(search);
      let nextIndex =
        e.key === "ArrowDown"
          ? (currentIndex + 1) % autoCompleteOptions.length
          : (currentIndex - 1 + autoCompleteOptions.length) %
            autoCompleteOptions.length;
      if (nextIndex === -1) nextIndex = autoCompleteOptions.length - 1;
      mengaturSearch(autoCompleteOptions[nextIndex]);
      setSelectedOptionIndex(nextIndex);
    } else if (e.key === "Enter") {
      pilihAutoComplete(search);
    }
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
        <button onClick={menutup} className="absolute top-0 right-0 p-2">
          <IconX />
        </button>

        <div className="p-4">
          <div className="flex items-center relative">
            <input
              type="text"
              value={search}
              onChange={mengubahKolomInput}
              onKeyDown={handleKeyDown}
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
          {autoCompleteOptions.length > 0 && (
            <ul className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
              {autoCompleteOptions.map((option, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    selectedOptionIndex === index ? "bg-blue-200" : ""
                  }`}
                  onClick={() => pilihAutoComplete(option)}
                  onMouseEnter={() => setSelectedOptionIndex(index)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        {pesanError && <p className="text-red-500 text-sm">{pesanError}</p>}
      </div>
    </div>
  );
};

export default SearchModal;
