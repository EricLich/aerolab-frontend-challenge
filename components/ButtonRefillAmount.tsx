"use client";

import React, { useMemo } from "react";

import { PossiblePointRefillAmounts } from "../utils/types";

type ButtonRefillAmountProps = {
  selectedRefillValue: PossiblePointRefillAmounts;
  setSelectedRefillValue: React.Dispatch<React.SetStateAction<PossiblePointRefillAmounts>>;
  value: PossiblePointRefillAmounts;
};

const ButtonNumberSelector: React.FC<ButtonRefillAmountProps> = ({
  selectedRefillValue,
  setSelectedRefillValue,
  value,
}) => {
  const dynamicStyling = useMemo((): [string, string] => {
    if (selectedRefillValue === value) {
      return ["gradientDefault", "text-neutral100"];
    } else {
      return ["bg-brandLight hover:bg-brandLight2 duration-100", "bg-clip-text text-transparent gradientDefault"];
    }
  }, [selectedRefillValue]);

  return (
    <button
      onClick={() => setSelectedRefillValue(value)}
      className={`w-[32%] text-center ${dynamicStyling[0]} rounded-xl md:px-4 py-1 text-smDefaultSmall md:text-mdDefault lg:text-lgDefault font-weightDefault`}
    >
      <span className={dynamicStyling[1]}>{value}</span>
    </button>
  );
};

export default ButtonNumberSelector;
