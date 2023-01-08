"use client";
import Image from "next/image";
import React, { useState } from "react";
import UserMenu from "./UserMenu";

const DropdownUserMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const formattedNumber = 10000;

  return (
    <div
      className={`relative flex justify-between items-center w-[143px] h-[40px] lg:w-[172px] lg:h-[48px] border border-neutral300 shadow-sm rounded-2xl px-4 hover:bg-neutral200 duration-100 ${
        menuOpen ? "bg-neutral200" : ""
      } `}
    >
      <div className="h-full flex items-center gap-1 md:gap-2 ">
        <Image
          src="/assets/icons/aeropay-1.svg"
          height={32}
          width={32}
          className="w-6 h-6 lg:w-8 lg:h-32"
          alt="open user dropdown menu"
        />
        <p className="text-smDefault md:text-mdDefault lg:text-lgDefault font-weightDefault bg-clip-text text-transparent gradientDefault">
          {formattedNumber.toLocaleString("de-DE")}
        </p>
      </div>
      <button
        className="w-6 h-6 cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="open user menu"
      >
        <Image
          src="/assets/icons/chevron-default.svg"
          height={24}
          width={24}
          className={`${!menuOpen ? "rotate-90" : "rotate-270"} duration-300`}
          alt="open user dropdown menu"
        />
      </button>
      {menuOpen && <UserMenu />}
    </div>
  );
};

export default DropdownUserMenu;
