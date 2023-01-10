"use client";

import React from "react";

import WalktroughCard from "./WalkthrougCard";
import { WalkthroughCardData } from "../utils/types";
import Image from "next/image";

const walktroughCardsData: WalkthroughCardData[] = [
  {
    imgPath: {
      desktopPath: "/assets/illustrations/walkthrough-1-desktop.png",
      responsivePath: "/assets/illustrations/walkthrough-1-responsive.png",
    },
    iconPath: "assets/icons/walkthrough-1.svg",
    number: 1,
    title: "browse",
    description: "Browse our tech catalog with more than 20 top tech products",
  },
  {
    imgPath: {
      desktopPath: "/assets/illustrations/walkthrough-2-desktop.png",
      responsivePath: "/assets/illustrations/walkthrough-2-responsive.png",
    },
    iconPath: "assets/icons/walkthrough-3.svg",
    number: 2,
    title: "choose",
    description: "Exchange your hard earned AeroPoints for the item you want",
  },
  {
    imgPath: {
      desktopPath: "/assets/illustrations/walkthrough-3-desktop.png",
      responsivePath: "/assets/illustrations/walkthrough-3-responsive.png",
    },
    iconPath: "assets/icons/walkthrough-2.svg",
    number: 3,
    title: "enjoy!",
    description: "All done, you can relax! We'll take care of delivery of your tech item!",
  },
];

const Walkthrough = () => {
  return (
    <section className="lg:mt-[112px] relative w-screen max-w-screen md:h-[1025px] lg:min-h-[720px] overflow-x-hidden flex items-center justify-center md:px-4 lg:px-0 md:pb-8 lg:pb-0">
      <div className="absolute -z-10 lg:top-0 bottom-0 lg:mt-auto lg:mb-auto w-full md:h-[656px] lg:h-[528px] gradientHeroIllustration50Opacity"></div>
      <Image
        src="/assets/illustrations/hero-desktop.png"
        width={580}
        height={518}
        alt="illustration"
        className="lg:hidden absolute -top-10 left-0 right-0 ml-auto mr-auto"
      />
      <div className="flex w-full justify-center lg:items-center md:mt-auto md:gap-2 lg:gap-0 lg:mt-0">
        {walktroughCardsData.map((card) => (
          <WalktroughCard cardData={card} key={card.number} />
        ))}
      </div>
    </section>
  );
};

export default Walkthrough;
