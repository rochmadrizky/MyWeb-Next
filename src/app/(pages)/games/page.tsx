import GameContent from "@/app/components/games/GameContent";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      ></div>
      <GameContent />
    </div>
  );
};

export default page;
