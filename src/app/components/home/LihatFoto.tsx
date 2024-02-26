import React from "react";

const LihatFoto = () => {
  return (
    <div className="fixed z-10 top-0 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
      <div className="max-w-lg">
        <img src="/me/thisIsMe.png" alt="saya" className=" w-full h-full" />
      </div>
    </div>
  );
};

export default LihatFoto;
