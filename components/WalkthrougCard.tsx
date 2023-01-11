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
      className={`relative p-2 lg:p-3 rounded-3xl bg-neutral0/60 lg:bg-neutral0/100 border border-neutral300 lg:w-[532px] md:min-w-[240px] md:max-w-[33%] lg:max-w-[36%] h-[408px] md:h-[477px] lg:h-auto ${rotateDegs()}`}
    >
      <div className="bg-neutral0 rounded-2xl overflow-hidden border border-neutral300 h-full">
        <Image
          src={cardData.imgPath.desktopPath}
          alt={`${cardData.title} card`}
          width={800}
          height={800}
          quality={80}
          className="gradientHeroIllustration h-[60%] md:h-[65%] lg:h-[498px] object-cover md:object-scale-down lg:object-none"
        />
        <div className="flex flex-1 flex-col px-6 pt-4 pb-6 gap-2 lg:gap-3">
          <div className="flex items-center gap-4">
            <div className="bg-brandLight p-1 rounded-md">
              <Image
                src={cardData.iconPath}
                alt={`${cardData.title} icon`}
                width={32}
                height={32}
                className="md:w-[26px] md:h-[26px] lg:w-8 lg:h-8"
              />
            </div>
            <h3 className="uppercase text-smTitleSmall md:text-[2vw] lg:text-lgTitleSmall font-weightTitleSmall gradientDefault bg-clip-text text-transparent">
              {cardData.number}—{cardData.title}
            </h3>
          </div>
          <p
            className="min-w-[220px] md:min-w-0 text-smDefault md:text-mdDefault lg:text-lgDefault font-weightDefault text-neutral600 leading-default lg:max-w-[372px]"
            title={cardData.description}
          >
            {cardData.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default WalkthroughCard;
