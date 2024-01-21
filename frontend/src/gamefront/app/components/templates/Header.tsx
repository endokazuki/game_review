"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HamburgerMenu from "../molecules/HamburgerMenu";
import { menulist } from "../atoms/menu/menuList";
import MenuDataField from "../atoms/menu/MenuDataField";
import HamburgerMenuIcon from "../atoms/icon/HamburgerMenuIcon";
import Logo from "../atoms/icon/logo";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="container mx-auto flex items-center justify-between">
      <Logo />
      {openMenu ? (
        <HamburgerMenu menulist={menulist} menuFunction={menuFunction} />
      ) : undefined}
      <div className="flex-initial text-[#6F84FF] font-bold m-5 ">
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
    </nav>
  );
};
export default Header;
