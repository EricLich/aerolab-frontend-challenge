"use client";

import React from "react";

import WalktroughCard from "./WalkthrougCard";
import { WalkthroughCardData } from "../utils/types";

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
    <section className="lg:mt-[112px] relative w-screen max-w-screen lg:min-h-[720px] overflow-x-hidden flex items-center justify-center">
      <div className="absolute -z-10 top-0 bottom-0 mt-auto mb-auto w-full lg:h-[528px] gradientHeroIllustration50Opacity"></div>
      <div className="flex items-center">
        {walktroughCardsData.map((card) => (
          <WalktroughCard cardData={card} key={card.number} />
        ))}
      </div>
    </section>
  );
};

export default Walkthrough;
