"use client";

import { IconCalendarTime } from "@tabler/icons-react";
import React, { useState } from "react";
import DropdownVisit from "./DropdownVisit";

const Today = () => {
  const [bukaDropdown, mengaturBukaDropdown] = useState(false);

  const klikDropdown = () => {
    mengaturBukaDropdown(!bukaDropdown);
  };

  return (
    <div className="relative">
      <button
        className="py-1 px-2 border border-black rounded-lg"
        onClick={klikDropdown}
      >
        <div className="flex items-center justify-center gap-1">
          <IconCalendarTime className="w-5 h-5 stroke-1" />
          <h1 className="font-prefix text-xs">Today</h1>
        </div>
      </button>

      <DropdownVisit buka={bukaDropdown} tutup={klikDropdown} />
    </div>
  );
};

export default Today;
