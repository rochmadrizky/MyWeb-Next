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
          <Link href="/todos" onClick={mengaturMenuKlik}>
            Todo
          </Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link href="/login" onClick={mengaturMenuKlik}>
            Login
          </Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link href="/todolist" onClick={mengaturMenuKlik}>
            TodoList
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuNavbar;
