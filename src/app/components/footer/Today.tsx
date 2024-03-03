"use client";

import { IconCalendarTime } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import DropdownVisit from "./DropdownVisit";

const Today = () => {
  const [bukaDropdown, mengaturBukaDropdown] = useState(false);

  const toggleDropdown = () => {
    mengaturBukaDropdown(!bukaDropdown);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "e" && event.metaKey) {
        // Tombol "e" ditekan bersama dengan tombol "command" (meta key)
        toggleDropdown();
      } else if (event.key === "e" && event.metaKey && bukaDropdown) {
        // Tombol "e" ditekan bersama dengan tombol "command" (meta key) dan dropdown terbuka
        toggleDropdown();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [bukaDropdown]); // Efek akan berjalan ketika bukaDropdown berubah

  return (
    <div className="relative">
      <button
        className="py-1 px-2 border border-black rounded-lg"
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-center gap-1">
          <IconCalendarTime className="w-5 h-5 stroke-1" />
          <h1 className="font-prefix text-xs">Today</h1>
        </div>
      </button>

      <DropdownVisit buka={bukaDropdown} tutup={toggleDropdown} />
    </div>
  );
};

export default Today;
