import React from "react";

const FotBar = () => {
  const Tahun = new Date().getFullYear();
  return (
    <div className="border-t border-black max-w-7xl mx-auto p-6 text-base bottom-0">
      Copyright &copy;{Tahun} All rights reserved.
    </div>
  );
};

export default FotBar;
