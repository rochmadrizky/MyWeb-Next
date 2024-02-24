import React from "react";

interface SquareProps {
  nilai: string;
  klik: () => void;
}

const Square: React.FC<SquareProps> = ({ nilai, klik }) => (
  <button
    className="w-full h-full text-4xl rounded-lg font-title border-t-2 border-b-2 border-blue-500 bg-gray-100"
    onClick={klik}
  >
    {nilai}
  </button>
);

export default Square;
