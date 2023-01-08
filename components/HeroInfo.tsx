"use client";

import Image from "next/image";
import React, { ReactNode } from "react";

import CommonButton from "./CommonButton";

const HeroInfo = () => {
  const arrowDownIcon: ReactNode = (
    <Image src="assets/icons/arrow-down.svg" width={24} height={24} alt="view all products" />
  );

  return (
    <div className="flex flex-col items-start">
      <p className="lg:text-lgDefaultCaps uppercase lg:font-weightDefault leading-defaultCaps text-neutral600 mb-2">
        explore the
      </p>
      <h1 className="flex flex-col items-start lg:text-[min(15vw,200px,200px)] uppercase font-weightHero leading-hero mb-6">
        <span className="gradientDefault bg-clip-text text-transparent">tech</span>
        <span className="text-neutral900">zone</span>
      </h1>
      <h3 className="w-full max-w-[523px] text-left text-lgDefault font-weightDefault leading-default text-neutral600 mb-16">
        Here you&apos;ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
      </h3>
      <CommonButton firstText="VIEW ALL PRODUCTS" rightIcon={arrowDownIcon} extraClasses="max-w-[318px]" extraHeight />
    </div>
  );
};

export default HeroInfo;
