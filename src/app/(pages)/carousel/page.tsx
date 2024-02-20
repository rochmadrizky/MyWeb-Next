import IsiCarousel from "@/app/components/carousel/IsiCarousel";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div className="p-4">
            <div className="text-center">
              <h1 className="font-prefix text-2xl">
                The carousel slide I made.
              </h1>
              <p className="font-description text-xl">Example below.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <IsiCarousel />
      </div>
    </div>
  );
};

export default page;
