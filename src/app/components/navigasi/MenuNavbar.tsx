import Link from "next/link";
import React from "react";
import MenuModal from "./MenuModal";

interface MenuNavProps {
  pilihMenu: () => void;
}

const MenuNavbar = ({ pilihMenu }: MenuNavProps) => {
  const mengaturMenuKlik = () => {
    pilihMenu();
  };
  return (
    <>
      <ul className="flex items-center flex-col md:flex-row md:gap-[18px]">
        <li className="mb-4 md:mb-0 font-prefix text-lg">
          <Link href="/blogs" onClick={mengaturMenuKlik}>
            BLOGS
          </Link>
        </li>
        <li className="mb-4 md:mb-0 hidden md:block">
          <div className="flex flex-col items-center justify-center">
            <Link
              href="/"
              onClick={mengaturMenuKlik}
              className="font-opsi text-4xl"
            >
              Rizky Putra
            </Link>

            <div>
              <MenuModal />
            </div>
          </div>
        </li>
        <li className="mb-4 md:mb-0 font-prefix text-lg">
          <Link href="/abouts" onClick={mengaturMenuKlik}>
            ABOUTS
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuNavbar;
