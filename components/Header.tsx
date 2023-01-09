"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import DropdownUserMenu from "./DropdownUserMenu";

const Header = () => {
  return (
    <header className="w-screen fixed top-0 z-50">
      <nav className="relative h-[128px] mainContainer px-4 md:px-8 flex justify-between items-center">
        <Link href={"/"} className="w-9 h-9 md:w-12 md:h-12 lg:h-[48px] lg:w-[126px]">
          <Image
            src="/assets/icons/aerolab-logo-1.svg"
            alt="Aerolab logo"
            className="hidden w-full lg:block "
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/aerolab-logo-2.svg"
            alt="Aerolab logo"
            width={36}
            height={36}
            className="w-full lg:hidden"
          />
        </Link>
        <DropdownUserMenu />
      </nav>
    </header>
  );
};

export default Header;
