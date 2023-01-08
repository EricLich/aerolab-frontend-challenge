"use client";

import React, { useState } from "react";

import CreditCard from "./CreditCard";
import PointRefillSelector from "./PointRefillSelector";
import { PossiblePointRefillAmounts } from "../utils/types";
import CommonButton from "./CommonButton";
import Image from "next/image";

const UserMenu = () => {
  const [selectedRefillValue, setSelectedRefillValue] = useState<PossiblePointRefillAmounts>(5000);

  const leftButtonIcon = (
    <Image src="/assets/icons/aeropay-3.svg" width={24} height={24} alt="aeropay icon" quality={80} />
  );

  return (
    <div className="absolute z-50 bg-neutral0 top-[120%] w-[220px] md:w-[250px] lg:w-[321px] h-[300px] md:h-[320px] lg:h-[430px] right-0 border border-neutral300 shadow-sm rounded-2xl">
      <div className="w-full p-3 md:p-4 lg:p-6 border-b border-neutral200">
        <p className="text-smDefault md:text-mdDefault lg:text-lgDefault font-weightDefault leading-default">
          Add Balance
        </p>
      </div>
      <div className="flex flex-col items-center p-3 md:p-4 lg:p-6">
        <CreditCard />
        <PointRefillSelector
          selectedRefillValue={selectedRefillValue}
          setSelectedRefillValue={setSelectedRefillValue}
        />
        <CommonButton firstText="Add Points" leftIcon={leftButtonIcon} />
      </div>
    </div>
  );
};

export default UserMenu;
