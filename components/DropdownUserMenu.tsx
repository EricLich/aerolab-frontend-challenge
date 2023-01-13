"use client";
import Image from "next/image";
import React, { useState } from "react";

import UserMenu from "./UserMenu";
import { useUserStore } from "../store/userStore";

type DropdownUserMenuProps = {
  loadingUser: boolean;
};

const DropdownUserMenu: React.FC<DropdownUserMenuProps> = ({ loadingUser }) => {
  const { user } = useUserStore((store) => store);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const openUserMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`relative z-50 flex justify-between items-center w-[143px] h-[40px] lg:w-[172px] lg:h-[48px] border border-neutral300 shadow-sm rounded-2xl px-4 lg:hover:bg-neutral200 duration-100 cursor-pointer ${
        menuOpen ? "bg-neutral200" : ""
      } `}
      onClick={openUserMenu}
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
          {loadingUser ? "Loading..." : user.points > 100000 ? "100K+" : user.points.toLocaleString("de-DE")}
        </p>
      </div>
      {!loadingUser && (
        <button className="w-6 h-6 cursor-pointer" aria-label="open user menu">
          <Image
            src="/assets/icons/chevron-default.svg"
            height={24}
            width={24}
            className={`${!menuOpen ? "rotate-90" : "rotate-270"} duration-300`}
            alt="open user dropdown menu"
          />
        </button>
      )}
      {menuOpen && <UserMenu />}
    </div>
  );
};

export default DropdownUserMenu;
