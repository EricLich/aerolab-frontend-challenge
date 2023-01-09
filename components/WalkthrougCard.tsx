"use client";

import Image from "next/image";
import React from "react";
import { WalkthrougCardData } from "../utils/types";

type WalkthrougCardProps = {
  cardData: WalkthrougCardData;
};
/* TODO: change name of component to be correctly spelled as well as the image file names */
const WalkthrougCard: React.FC<WalkthrougCardProps> = ({ cardData }) => {
  console.log(cardData);
  return (
    <article className="p-3 rounded-sm">
      <div className="rounded-sm overflow-hidden">
        <Image src={cardData.imgPath.desktopPath} alt={`${cardData.title} card`} width={510} height={500} />
      </div>
    </article>
  );
};

export default WalkthrougCard;
