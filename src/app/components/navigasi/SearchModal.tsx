import { IconSearch, IconX } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
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

  const halamanInfo: Record<string, { deskripsi: string; link: string }> = {
    Abouts: { deskripsi: "Related things about me.", link: "/abouts" },
    Blogs: { deskripsi: "My blog notes are all here.", link: "/blogs" },
    Home: { deskripsi: "My introduction section or main page", link: "/" },
    Game: { deskripsi: "I made a simple TicTacToe game", link: "/games" },
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
    const inputPencarian = e.target.value;
    mengaturSearch(inputPencarian);

    if (inputPencarian === "") {
      mengaturOpsiLengkap([]);
    } else {
      const opsiYangCocok: { opsi: string; deskripsi: string }[] = [];
      Object.keys(halamanInfo).forEach((halaman) => {
        const deskripsi = dapatkanDeskripsi(halaman);
        if (
          halaman.toLowerCase().includes(inputPencarian.toLowerCase()) ||
          deskripsi.toLowerCase().includes(inputPencarian.toLowerCase())
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
    return halamanInfo[halaman]?.deskripsi || "";
  };

  const pilihanLengkap = (opsi: string) => {
    if (opsi !== "results not found") {
      const halaman = halamanInfo[opsi];
      if (halaman) {
        window.location.href = halaman.link;
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

  const mengulangSearch = () => {
    mengaturSearch("");
    mengaturPilihOpsiIndex(-1);
    mengaturOpsiLengkap([]);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center backdrop-blur-sm ${
        membuka ? "visible" : "hidden"
      }`}
    >
      <div ref={modal} className=" w-96 top-20 rounded-lg absolute">
        <div className="p-2">
          <div className="flex items-center relative">
            <input
              name="pencarian"
              type="text"
              value={search}
              onChange={mengubahKolomInput}
              onKeyDown={menanganiTombol}
              placeholder="Please search here"
              className="w-full px-3 py-2 rounded-lg focus:outline-blue-500 focus:right-2"
            />

            <button
              onClick={() => pilihanLengkap(search)}
              className="px-3 py-2 absolute top-0 right-0"
            >
              <IconSearch />
            </button>

            {opsiLengkap.length > 0 && (
              <SearchDropdown
                opsional={opsiLengkap.map((option) => option.opsi)}
                deskripsi={opsiLengkap.map((option) => option.deskripsi)}
                opsiYangDipilih={pilihOpsiIndex}
                menanganiPilihan={pilihanLengkap}
                mengaturOpsiYangDipilih={mengaturPilihOpsiIndex}
                pencarianDalamModal={search}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
