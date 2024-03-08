"use client";

import React, { useState } from "react";
import Calculator from "@/app/components/calculator/Calculator";
import LoadingPage from "../LoadingPage";

const Page = () => {
  const [loading, mengaturLoading] = useState(true);
  return (
    <div>
      <LoadingPage memuat={loading} pemuatan={mengaturLoading} />
      {!loading && (
        <div>
          <div
            className="h-[484px] flex items-center justify-center"
            style={{ backgroundImage: `url('/background/topography.svg')` }}
          >
            <div className="max-w-4xl mx-auto flex items-center justify-center">
              <div className="p-4">
                <div className="text-center">
                  <h1 className="font-prefix text-2xl">
                    Simple calculator that I made.
                  </h1>
                  <p className="font-description text-xl">
                    Below is an example.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12">
            <Calculator />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
