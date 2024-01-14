"use client";
import { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      <button onClick={() => setIsOpen(!isOpen)} className="block lg:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:space-x-20`}
      >
        <a href="/" className="text-gray-800 hover:text-indigo-600">
          ホーム
        </a>
        <a href="/game" className="text-gray-800 hover:text-indigo-600">
          ゲーム一覧
        </a>
        <a href="#" className="text-gray-800 hover:text-indigo-600">
          記事
        </a>
        <a href="#" className="text-gray-800 hover:text-indigo-600">
          プライバシーポリシー
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
