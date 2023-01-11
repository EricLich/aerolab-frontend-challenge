"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { useFetchUser } from "../hooks/useFetchUser";
import { useUserStore } from "../store/userStore";

import DropdownUserMenu from "./DropdownUserMenu";

const Header = () => {
  const { setFetchedUser } = useUserStore((store) => store);
  const { user, loading, error } = useFetchUser();

  useEffect(() => {
    if (!loading && user) {
      setFetchedUser(user);
    }
  }, [loading]);

  return (
    <header className="w-screen fixed top-0 z-50 bg-neutral0 border-b border-neutral100 shadow-sm">
      <nav className="relative h-[80px] md:h-[100px] lg:h-[120px] mainContainer px-4 md:px-8 flex justify-between items-center">
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
        <DropdownUserMenu loadingUser={loading} />
      </nav>
    </header>
  );
};

export default Header;
