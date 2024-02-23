import React from "react";

interface SquareProps {
  nilai: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ nilai, onClick }) => (
  <button
    className="w-full h-full text-4xl rounded-lg font-title border-t-2 border-b-2 border-blue-500 bg-gray-100"
    onClick={onClick}
  >
    {nilai}
  </button>
);

export default Square;
