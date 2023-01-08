"use client";
import React from "react";

const Header = () => {
  return (
    <header className="w-screen">
      <nav className="h-[128px] mainContainer flex justify-between items-center">
        <img src="/assets/icons/aerolab-logo-1.svg" alt="Aerolab logo" className="lg:h-[48px] lg:w-[126px]" />
      </nav>
    </header>
  );
};

export default Header;
