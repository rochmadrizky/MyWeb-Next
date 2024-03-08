import React from "react";
import BLogContent from "@/app/components/blogs/BlogContent";

const Page = () => {
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
                A collection of my blog notes.
              </h1>
              <p className="font-description text-xl">
                This is where all my experiments are recorded.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <BLogContent />
      </div>
    </div>
  );
};

export default Page;
