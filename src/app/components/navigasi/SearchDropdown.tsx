import React from "react";

interface SearchDropdownProps {
  opsional: string[];
  deskripsi: string[];
  opsiYangDipilih: number;
  menanganiPilihan: (option: string) => void;
  mengaturOpsiYangDipilih: (index: number) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  opsional,
  deskripsi,
  opsiYangDipilih,
  menanganiPilihan,
  mengaturOpsiYangDipilih,
}) => {
  return (
    <ul className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
      {opsional.map((opsi, isi) => (
        <li
          key={isi}
          className={`px-4 py-2 ${
            opsi === "results not found"
              ? "text-gray-500 cursor-default"
              : "cursor-pointer hover:bg-gray-200"
          } ${opsiYangDipilih === isi ? "bg-gray-300" : ""}`}
          onClick={() => {
            if (opsi !== "results not found") {
              menanganiPilihan(opsi);
            }
          }}
          onMouseEnter={() => {
            if (opsi !== "results not found") {
              mengaturOpsiYangDipilih(isi);
            }
          }}
        >
          {opsi}
          {deskripsi[isi] && (
            <p className="text-sm text-gray-500">{deskripsi[isi]}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SearchDropdown;
