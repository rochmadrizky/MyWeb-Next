"use client";

import React, { useState, useEffect } from "react";

const ProgressBars: React.FC = () => {
  const [progress0, setProgress0] = useState<number>(0);
  const [progress1, setProgress1] = useState<number>(0);
  const [progress2, setProgress2] = useState<number>(0);
  const [progress3, setProgress3] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Bar pertama mencapai 30%
      if (progress0 < 30) {
        setProgress0((prevProgress) => prevProgress + 10);
      }
      // Bar kedua mencapai 60%
      if (progress1 < 60) {
        setProgress1((prevProgress) => prevProgress + 10);
      }
      // Bar ketiga mencapai 80%
      if (progress2 < 80) {
        setProgress2((prevProgress) => prevProgress + 10);
      }

      if (progress3 < 90) {
        setProgress3((prevProgress) => prevProgress + 10);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [progress0, progress1, progress2, progress3]);

  return (
    <div className="flex flex-col gap-4">
      {/* Progress bar pertama (30%) */}
      <div className="relative h-4 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
          style={{
            width: `${progress0}%`,
            transition: "width 1s ease-in-out",
          }}
        ></div>
      </div>

      {/* Progress bar kedua (60%) */}
      <div className="relative h-4 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
          style={{
            width: `${progress1}%`,
            transition: "width 1s ease-in-out",
          }}
        ></div>
      </div>

      {/* Progress bar ketiga (80%) */}
      <div className="relative h-4 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full"
          style={{
            width: `${progress2}%`,
            transition: "width 1s ease-in-out",
          }}
        ></div>
      </div>

      {/* Progress bar ketiga (80%) */}
      <div className="relative h-4 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
          style={{
            width: `${progress3}%`,
            transition: "width 1s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBars;
