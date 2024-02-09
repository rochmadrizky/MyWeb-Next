import { IconBrandInstagram, IconMail } from "@tabler/icons-react";
import React from "react";

const FotBar = () => {
  const Tahun = new Date().getFullYear();
  return (
    <div className="border-t border-black max-w-7xl mx-auto p-6 text-base bottom-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="https://www.instagram.com/rizkyever/" target="_blank">
            <IconBrandInstagram />
          </a>

          <a href="mailto:rochmadrizkyputra@gmail.com" target="_blank">
            <IconMail />
          </a>
        </div>
        <h1 className="text-right">
          Copyright &copy;{Tahun} All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default FotBar;
