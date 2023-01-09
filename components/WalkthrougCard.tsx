"use client";

import Image from "next/image";
import React from "react";
import { WalkthroughCardData } from "../utils/types";

type WalkthroughCardProps = {
  cardData: WalkthroughCardData;
};

const WalkthroughCard: React.FC<WalkthroughCardProps> = ({ cardData }) => {
  console.log(cardData);
  return (
    <article className="p-3 rounded-sm">
      <div className="rounded-sm overflow-hidden">
        <Image src={cardData.imgPath.desktopPath} alt={`${cardData.title} card`} width={510} height={500} />
      </div>
    </article>
  );
};

export default WalkthroughCard;
