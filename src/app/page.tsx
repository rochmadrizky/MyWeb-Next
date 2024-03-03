import React from "react";
import HomeContent from "./components/home/HomeContent";
import Content from "./components/home/Content";

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
        <Content />
      </div>
    </div>
  );
};

export default Page;
