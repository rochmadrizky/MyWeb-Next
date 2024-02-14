import React from "react";

interface SearchDropdownProps {
  opsi: string[];
  opsiIndexYangDipilih: number;
  menanganiPilihan: (option: string) => void;
  mengaturIndexYangDipilih: (index: number) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  opsi,
  opsiIndexYangDipilih,
  menanganiPilihan,
  mengaturIndexYangDipilih,
}) => {
  return (
    <ul className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
      {opsi.map((opsi, index) => (
        <li
          key={index}
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
            opsiIndexYangDipilih === index ? "bg-blue-200" : ""
          }`}
          onClick={() => menanganiPilihan(opsi)}
          onMouseEnter={() => mengaturIndexYangDipilih(index)}
        >
          {opsi}
        </li>
      ))}
    </ul>
  );
};

export default SearchDropdown;
