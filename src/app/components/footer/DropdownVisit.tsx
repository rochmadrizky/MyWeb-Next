import React, { useEffect, useRef, useState } from "react";

interface DropdownVisitProps {
  buka: boolean;
  tutup: () => void;
}

const DropdownVisit: React.FC<DropdownVisitProps> = ({ buka, tutup }) => {
  const dropdown = useRef<HTMLDivElement>(null);
  const [hariBulan, setHariBulan] = useState<string>("");
  const [jamMenit, setJamMenit] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdown.current &&
        !dropdown.current.contains(event.target as Node)
      ) {
        tutup();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        tutup();
      }
    };

    if (buka) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      updateDateTime();
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [buka, tutup]);

  const updateDateTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dayOfWeek = date.getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayMonthString = `${days[dayOfWeek]}, ${day} ${
      months[month - 1]
    } ${year}`;
    const hourMinuteString = `${hours}:${minutes.toString().padStart(2, "0")}`;

    setHariBulan(dayMonthString);
    setJamMenit(hourMinuteString);
  };

  return (
    <div
      className={`fixed top-2 left-0 w-full h-full flex items-center justify-center transition-opacity ${
        buka ? "opacity-100 duration-500" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={dropdown}
        className={`p-8 absolute top-10 left-1/2 transform -translate-x-1/2 ${
          buka
            ? "translate-y-0 transition-transform duration-500"
            : "-translate-y-full duration-500"
        }`}
      >
        <div className="p-2 border-2 border-blue-500 rounded-lg bg-gray-100 w-56 h-auto mx-auto">
          <div className="text-center">
            <p className="font-title text-md">{hariBulan}</p>
            <p className="font-prefix text-sm">{jamMenit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownVisit;
