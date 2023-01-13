"use client";

import Image from "next/image";
import React from "react";

const HeroIllustration = () => {
  return (
    <div className="relative hidden lg:flex lg:w-full lg:h-full lg:max-w-[722px] h-[600px] aspect-square justify-center items-center">
      <div className="absolute h-full w-full gradientHeroIllustration50Opacity rounded-[104px] shadow-md overflow-visible"></div>
      <Image
        src="/assets/illustrations/hero-desktop.png"
        width={3000}
        height={3000}
        alt="hero illustration"
        className="absolute bottom-0 object-cover h-[125%]"
        priority
      />
    </div>
  );
};

export default HeroIllustration;
