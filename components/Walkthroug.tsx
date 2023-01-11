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
    <section className=" relative w-screen max-w-screen h-[1748px] md:h-[1025px] lg:min-h-[720px] overflow-x-hidden flex items-center justify-center mt-20 md:mt-0 px-4 lg:px-0 pb-8 lg:pb-0">
      <div className="absolute -z-10 lg:top-0 bottom-0 lg:mt-auto lg:mb-auto w-full h-[1716px] md:h-[656px] lg:h-[528px] gradientHeroIllustration50Opacity"></div>
      <div className="absolute min-w-[160%] md:min-w-[580px] md:w-auto -md:top-10 w-auto min-h-[35%] lg:hidden  -top-[21vw] md:top-0 ">
        <Image
          src="/assets/illustrations/hero-desktop.png"
          width={1200}
          height={1200}
          alt="illustration"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center lg:items-center mt-auto gap-6 md:gap-2 lg:gap-0 lg:mt-0">
        {walktroughCardsData.map((card) => (
          <WalktroughCard cardData={card} key={card.number} />
        ))}
      </div>
    </section>
  );
};

export default Walkthrough;
