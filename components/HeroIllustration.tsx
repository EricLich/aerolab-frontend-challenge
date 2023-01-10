"use client";

import Image from "next/image";
import React from "react";

const HeroIllustration = () => {
  return (
    <div className="relative hidden lg:flex lg:w-full lg:h-full lg:max-w-[722px] h-[600px] aspect-square justify-center items-center">
      <div className="h-full w-full gradientHeroIllustration50Opacity rounded-[104px] shadow-md overflow-visible">
        <Image
          src="/assets/illustrations/hero-desktop.png"
          width={3000}
          height={3000}
          alt="hero illustration"
          className="absolute bottom-0 h-[135%] lg:max-w-[722px] w-full left-0 right-0 ml-auto mr-auto"
        />
      </div>
    </div>
  );
};

export default HeroIllustration;
