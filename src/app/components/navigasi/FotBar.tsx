import {
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";
import React from "react";

const FotBar = () => {
  const Tahun = new Date().getFullYear();

  const icons = [
    {
      icon: <IconBrandInstagram className="stroke-1" />,
      link: "https://www.instagram.com/rizkyever/",
    },
    {
      icon: <IconMail className="stroke-1" />,
      link: "mailto:rochmadrizkyputra@gmail.com",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 text-base bottom-0">
      <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between gap-y-1 px-4">
        <div className="flex items-center gap-2">
          {icons.map((barang, urutan) => (
            <a key={urutan} href={barang.link} target="_blank">
              {barang.icon}
            </a>
          ))}
        </div>

        <h1 className="text-center md:text-right font-prefix text-sm md:text-lg">
          Copyright &copy; {Tahun} All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default FotBar;
