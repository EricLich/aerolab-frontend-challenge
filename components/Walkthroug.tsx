"use client";

import React from "react";

import WalktroughCard from "./WalkthrougCard";
import { WalkthrougCardData } from "../utils/types";

const walktroughCardsData: WalkthrougCardData[] = [
  {
    imgPath: {
      desktopPath: "/assets/illustrations/walkthroug-1-desktop.png",
      responsivePath: "/assets/illustrations/walkthroug-1-responsive.png",
    },
    number: 1,
    title: "browse",
    description: "Browse our tech catalog with more than 20 top tech products",
  },
  {
    imgPath: {
      desktopPath: "/assets/illustrations/walkthroug-2-desktop.png",
      responsivePath: "/assets/illustrations/walkthroug-2-responsive.png",
    },
    number: 2,
    title: "choose",
    description: "Exchange your hard earned AeroPoints for the item you want",
  },
  {
    imgPath: {
      desktopPath: "/assets/illustrations/walkthroug-3-desktop.png",
      responsivePath: "/assets/illustrations/walkthroug-3-responsive.png",
    },
    number: 3,
    title: "enjoy!",
    description: "All done, you can relax! We&apos;ll take care of delivery of your tech item!",
  },
];

const Walkthroug = () => {
  return (
    <section className="lg:mt-[112px] relative w-screen max-w-screen lg:h-[720px] overflow-x-hidden flex items-center justify-center">
      <div className="absolute -z-10 top-0 bottom-0 mt-auto mb-auto w-full lg:h-[528px] gradientHeroIllustration"></div>
      <div className="flex items-center">
        {walktroughCardsData.map((card) => (
          <WalktroughCard cardData={card} key={card.number} />
        ))}
      </div>
    </section>
  );
};

export default Walkthroug;
