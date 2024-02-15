import React from "react";

interface SearchDropdownProps {
  options: string[];
  selectedOptionIndex: number;
  handleOptionSelect: (option: string) => void;
  setSelectedOptionIndex: (index: number) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  options,
  selectedOptionIndex,
  handleOptionSelect,
  setSelectedOptionIndex,
}) => {
  return (
    <ul className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
      {options.map((option, index) => (
        <li
          key={index}
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
            selectedOptionIndex === index ? "bg-blue-200" : ""
          }`}
          onClick={() => handleOptionSelect(option)}
          onMouseEnter={() => setSelectedOptionIndex(index)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default SearchDropdown;
