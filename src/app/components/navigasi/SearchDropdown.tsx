import React from "react";

interface SearchDropdownProps {
  options: string[];
  descriptions: string[]; // Tambahkan deskripsi untuk setiap opsi
  selectedOptionIndex: number;
  handleOptionSelect: (option: string) => void;
  setSelectedOptionIndex: (index: number) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  options,
  descriptions,
  selectedOptionIndex,
  handleOptionSelect,
  setSelectedOptionIndex,
}) => {
  return (
    <ul className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
      {options.map((option, index) => (
        <li
          key={index}
          className={`px-4 py-2 ${
            option === "results not found"
              ? "text-gray-500 cursor-default"
              : "cursor-pointer hover:bg-gray-200"
          } ${selectedOptionIndex === index ? "bg-gray-300" : ""}`}
          onClick={() => {
            if (option !== "results not found") {
              handleOptionSelect(option);
            }
          }}
          onMouseEnter={() => {
            if (option !== "results not found") {
              setSelectedOptionIndex(index);
            }
          }}
        >
          {option}
          {descriptions[index] && ( // Tampilkan deskripsi jika ada
            <p className="text-sm text-gray-500">{descriptions[index]}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SearchDropdown;
