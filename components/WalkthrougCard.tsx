"use client";

import Image from "next/image";
import React from "react";
import { WalkthroughCardData } from "../utils/types";

type WalkthroughCardProps = {
  cardData: WalkthroughCardData;
};
const WalkthroughCard: React.FC<WalkthroughCardProps> = ({ cardData }) => {
  const rotateDegs = (): string => {
    if (cardData.number === 1) return "lg:-rotate-3 lg:-mr-24";
    if (cardData.number === 3) return "lg:rotate-3 lg:-ml-24";

    return "lg:mb-16";
  };

  return (
    <article
      className={`relative p-3 rounded-3xl bg-neutral0 border border-neutral300 lg:w-[532px] lg:h-auto ${rotateDegs()}`}
    >
      <div className="rounded-2xl overflow-hidden border border-neutral300">
        <Image
          src={cardData.imgPath.desktopPath}
          alt={`${cardData.title} card`}
          width={510}
          height={500}
          className="gradientHeroIllustration lg:h-[498px]"
        />
        <div className="flex flex-1 flex-col lg:px-6 lg:pt-4 lg:pb-6 lg:gap-3">
          <div className="flex items-center lg:gap-4">
            <div className="bg-brandLight p-1 rounded-md">
              <Image src={cardData.iconPath} alt={`${cardData.title} icon`} width={32} height={32} />
            </div>
            <h3 className="uppercase lg:text-lgTitleSmall lg:font-weightTitleSmall gradientDefault bg-clip-text text-transparent">
              {cardData.number}—{cardData.title}
            </h3>
          </div>
          <p className="lg:text-lgDefault lg:font-weightDefault text-neutral600 leading-default lg:max-w-[372px]">
            {cardData.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default WalkthroughCard;
