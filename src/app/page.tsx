import React from "react";
import HomeContent from "./components/home/HomeContent";

const Page = () => {
  return (
    <div>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
        {/* Konten di dalamnya */}
      </div>
      <HomeContent />
    </div>
  );
};

export default Page;
