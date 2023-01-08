"use client";

import React from "react";

import HeroInfo from "./HeroInfo";
import HeroIllustration from "./HeroIllustration";

const Hero = () => {
  return (
    <section className="flex w-full justify-between items-center mt-[112px] lg:gap-8 lg:px-8">
      <HeroInfo />
      <HeroIllustration />
    </section>
  );
};

export default Hero;
