"use client";

import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "DEL") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      calculateResult();
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const calculateResult = () => {
    try {
      const evaluatedExpression = expression.replace(/×/g, "*");
      const finalExpression = evaluatedExpression.replace(/÷/g, "/");
      const result = eval(finalExpression);
      setResult(`${result}`);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col max-w-xs mx-auto my-8">
      <div className="bg-gray-200 text-xl text-right">{expression}</div>
      <div className="bg-gray-200 text-xl text-right p-2">{result}</div>
      <div className="grid grid-cols-3 gap-2">
        {["7", "8", "9", "÷"].map((value, index) => (
          <button
            key={index}
            className="bg-gray-300 text-xl p-4 hover:bg-gray-400"
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}

        {["4", "5", "6", "×"].map((value, index) => (
          <button
            key={index}
            className="bg-gray-300 text-xl p-4 hover:bg-gray-400"
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}

        {["1", "2", "3", "+"].map((value, index) => (
          <button
            key={index}
            className="bg-gray-300 text-xl p-4 hover:bg-gray-400"
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}

        <button
          className="bg-gray-300 text-xl p-4 hover:bg-gray-400"
          onClick={() => handleClick("DEL")}
        >
          DEL
        </button>

        {["C", "0", "=", "-"].map((value, index) => (
          <button
            key={index}
            className={`bg-${
              value === "=" ? "green" : "gray"
            }-300 text-xl p-4 hover:bg-${value === "=" ? "green" : "gray"}-400`}
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
