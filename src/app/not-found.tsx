import React from "react";

const NotFound = () => {
  return (
    <div className="relative">
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      ></div>

      <div className="relative -top-10">
        <div className="flex flex-col items-center justify-center bg-gray-100">
          <div className="p-4 text-center">
            <h1 className="font-prefix text-4xl">
              The page doesn&apos;t exist, ya guys ya.
            </h1>
            <p className="py-1 font-description text-2xl">
              please return to the homepage, ya guys ya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
