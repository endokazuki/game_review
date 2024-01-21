"use client";
import { MenuItem } from "../atoms/menu/menuList";
import MenuDataField from "../atoms/menu/MenuDataField";

interface ChildComponentProps {
  menulist: MenuItem[];
  menuFunction: () => void;
}

const HamburgerMenu: React.FC<ChildComponentProps> = ({
  menulist,
  menuFunction,
}) => {
  return (
    <div className="flex flex-row absolute z-10 top-0 right-0  min-h-fit min-w-full">
      <div className="basis-1/2"></div>

      <div className="basis-1/2 bg-white">
        <ul className="text-center text-[#6F84FF] border-l-2 ">
          <li className="p-2 border-b-2">
            <button onClick={menuFunction} className="font-bold">
              閉じる
            </button>
          </li>
          {menulist.map((value, index) => (
            <MenuDataField key={index} menuItem={value} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
