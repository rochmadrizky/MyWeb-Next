import Link from "next/link";
import React from "react";

interface MenuNavProps {
  pilihMenu: () => void;
}

const MenuNavbar = ({ pilihMenu }: MenuNavProps) => {
  const mengaturMenuKlik = () => {
    pilihMenu();
  };
  return (
    <>
      <ul className="flex flex-col md:flex-row md:gap-2">
        <li className="mb-4 md:mb-0">
          <Link href="/blogs" onClick={mengaturMenuKlik}>
            BLOGS
          </Link>
        </li>
        <li className="mb-4 md:mb-0 hidden md:block">
          <Link href="/" onClick={mengaturMenuKlik}>
            LOGO IMG
          </Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link href="/abouts" onClick={mengaturMenuKlik}>
            ABOUTS
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuNavbar;
