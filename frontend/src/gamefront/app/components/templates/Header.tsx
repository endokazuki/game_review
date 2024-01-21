"use client";
import React, { useEffect, useState } from "react";
import HamburgerMenu from "../molecules/HamburgerMenu";
import { menulist } from "../atoms/menu/menuList";
import MenuDataField from "../atoms/menu/MenuDataField";
import HamburgerMenuIcon from "../atoms/icon/HamburgerMenuIcon";
import Logo from "../atoms/icon/Logo";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="mx-auto flex items-center justify-between bg-gray-800 text-white text-center">
      <Logo />
      {openMenu ? (
        <HamburgerMenu menulist={menulist} menuFunction={menuFunction} />
      ) : undefined}
      <div className="flex-auto text-[#6F84FF] font-bold m-5 ">
        <ul className="md:flex  hidden flex-initial text-left">
          {menulist.map((value, index) => (
            <MenuDataField key={index} menuItem={value} />
          ))}
        </ul>
      </div>
      <button
        onClick={menuFunction}
        className="flex-initial absolute top-0 right-0 md:hidden"
      >
        <HamburgerMenuIcon />
      </button>
    </header>
  );
};
export default Header;
