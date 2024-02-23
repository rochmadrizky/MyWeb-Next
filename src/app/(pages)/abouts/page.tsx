import React from "react";

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
              <h1 className="font-prefix text-2xl">Snippet of introduction</h1>
              <h1 className="font-prefix text-2xl">about Me.</h1>
              <p className="font-description text-xl">
                Let&apos;s get to know each other and be friends.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12"></div>
    </div>
  );
};

export default Page;
