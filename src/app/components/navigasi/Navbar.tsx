"use client";

import Link from "next/link";
import React, { useState } from "react";
import MenuNavbar from "../navigasi/MenuNavbar";
import { IconMenu2, IconX } from "@tabler/icons-react";
import ButtonBahasa from "./ButtonBahasa";

const Navbar = () => {
  const [bukaMenu, mengaturMenuTerbuka] = useState(false);

  const klikMenuIcon = () => {
    mengaturMenuTerbuka(!bukaMenu);
  };

  const pilihMenu = () => {
    mengaturMenuTerbuka(false);
  };

  const sidebarClasses = `fixed flex flex-col top-0 left-0 h-full w-56 bg-gray-100 px-4 transform transition-transform duration-300 ease-in-out z-50${
    bukaMenu ? " translate-x-0" : " -translate-x-full"
  }`;

  return (
    <header className="border-b border-black bg-gray-200 p-5 sticky top-0 left-0 right-0 z-10">
      <div className="lg:px-16 mx-auto flex justify-center items-center">
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-[18px]">
            <ButtonBahasa />
            <MenuNavbar pilihMenu={pilihMenu} />
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex items-center justify-center gap-6">
            <div>
              <ButtonBahasa />
            </div>
            <div>
              <Link href="/" className="font-opsi text-4xl">
                Rizky Putra
              </Link>
            </div>
            <button onClick={klikMenuIcon}>
              {bukaMenu ? <IconX /> : <IconMenu2 />}
            </button>
          </div>
        </div>

        {bukaMenu && (
          <div
            className="fixed inset-0 bg-black opacity-10 z-40"
            onClick={klikMenuIcon}
          />
        )}

        <div className={sidebarClasses}>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <MenuNavbar pilihMenu={pilihMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
