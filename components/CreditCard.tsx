"use client";
import Image from "next/image";
import React from "react";
import { useUserStore } from "../store/userStore";

const CreditCard = () => {
  const { user } = useUserStore((store) => store);

  const userCardExpDate = () => {
    const formattedMonth = new Date(user.createDate).getMonth() + 1;

    return `${formattedMonth < 10 ? "0" + formattedMonth : formattedMonth} / ${
      new Date(user.createDate).getFullYear() + 5 - 2000
    }`;
  };

  return (
    <div className="relative w-full h-[120px] lg:h-[148px] p-2 lg:p-4 bg-neutral900 rounded-xl flex flex-col justify-between mb-4 lg:mb-10">
      <div className="flex items-center justify-between">
        <p className="text-smDefaultSmall lg:text-lgDefault md:text-lgDefault font-weightDefault leading-default text-neutral100">
          Aerocard
        </p>
        <Image src="/assets/icons/aeropay-2.svg" width={24} height={24} alt="aerocard logo" />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-smDefaultSmall md:text-mdDefaultSmall lg:text-lgDefaultSmall font-weightDefaultSmall text-neutral100">
          {user.name}
        </p>
        <p className="text-smDefaultSmall md:text-mdDefaultSmall lg:text-lgDefaultSmall font-weightDefaultSmall text-neutral100">
          {userCardExpDate()}
        </p>
      </div>
      <div className="absolute w-[110%] left-0 bottom-0 h-[60%] opacity-20 -rotate-3 bg-repeat-y bg-[url(/assets/illustrations/single-wave-pattern.svg)] subpixel-antialiased"></div>
    </div>
  );
};

export default CreditCard;
