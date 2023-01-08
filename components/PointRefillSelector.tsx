"use client";

import React from "react";
import { possiblePointRefillAmounts, PossiblePointRefillAmounts } from "../utils/types";
import ButtonRefillAmount from "./ButtonRefillAmount";

type PointRefillSelectorProps = {
  selectedRefillValue: PossiblePointRefillAmounts;
  setSelectedRefillValue: React.Dispatch<React.SetStateAction<PossiblePointRefillAmounts>>;
};

const REFILL_VALUES = Object.values(possiblePointRefillAmounts);

const PointRefillSelector: React.FC<PointRefillSelectorProps> = ({ selectedRefillValue, setSelectedRefillValue }) => {
  return (
    <div className="w-full flex justify-between mb-4 lg:mb-6">
      {REFILL_VALUES.map((value) => (
        <ButtonRefillAmount
          key={value}
          value={value}
          selectedRefillValue={selectedRefillValue}
          setSelectedRefillValue={setSelectedRefillValue}
        />
      ))}
    </div>
  );
};

export default PointRefillSelector;
