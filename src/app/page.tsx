import React from "react";
import HomeContent from "./components/home/HomeContent";
import IsiContent from "./components/home/IsiContent";

const Page = () => {
  return (
    <div>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
        <HomeContent />
      </div>

      <div className="py-12">
        <IsiContent />
      </div>
    </div>
  );
};

export default Page;
