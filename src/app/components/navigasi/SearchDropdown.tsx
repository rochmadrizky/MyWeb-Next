// SearchDropdown.tsx
import React from "react";

interface SearchDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  options,
  onSelect,
}) => {
  return (
    <ul className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
      {options.map((option, index) => (
        <li
          key={index}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelect(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default SearchDropdown;
