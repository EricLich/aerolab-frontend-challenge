"use client";

import React from "react";

import HeroInfo from "./HeroInfo";
import HeroIllustration from "./HeroIllustration";

const Hero = () => {
  return (
    <section className="flex w-full justify-center lg:justify-between items-center md:mt-10 lg:mt-[112px] lg:gap-8 px-4 md:px-8  lg:mb-0">
      <HeroInfo />
      <HeroIllustration />
    </section>
  );
};

export default Hero;
