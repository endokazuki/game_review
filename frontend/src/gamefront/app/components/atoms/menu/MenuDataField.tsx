"use client";
import Link from "next/link";
import { MenuItem } from "./menuList";

interface ChildComponentProps {
  key: number;
  menuItem: MenuItem;
}

const MenuDataField: React.FC<ChildComponentProps> = ({ key, menuItem }) => {
  return (
    <li key={key} className="p-4 font-bold">
      <Link href={menuItem.url}>{menuItem.name}</Link>
    </li>
  );
};
export default MenuDataField;
