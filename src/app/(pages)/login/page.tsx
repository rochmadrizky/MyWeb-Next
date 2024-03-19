"use client";

import React, { useState } from "react";
import LoadingPage from "../LoadingPage";
import Login from "@/app/components/log/Login";

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
                    Display the rating that I made.
                  </h1>
                  <p className="font-description text-xl">Example below.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12">
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
