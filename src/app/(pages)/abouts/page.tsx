import React from "react";
import AboutContent from "../../components/abouts/AboutContent";

const Page = () => {
  return (
    <div>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
        {/* Konten di dalamnya */}
      </div>
      <AboutContent />
    </div>
  );
};

export default Page;
