import React from "react";

const HomeContent = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
      <div className="p-4">
        <img
          src="/me/thisIsMe.png"
          alt="saya"
          className="rounded-full mx-auto w-36 h-36 mb-3 ring-2 p-0.5 ring-blue-500 bg-gray-300"
        />
      </div>

      <div className="text-center">
        <p className="text-3xl font-description">
          Hi, what&apos;s up everyone, I&apos;m
        </p>
        <h1 className="text-5xl font-title">Rizky Putra</h1>
        <p className="text-xl font-prefix">Front-End Developer</p>
      </div>
    </div>
  );
};

export default HomeContent;
