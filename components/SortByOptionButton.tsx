"use client";

import React, { useMemo } from "react";
import { useProductsContext } from "../contexts/productsContext";
import { PossibleSortingOptions } from "../utils/types";

type SortByOptionButtonProps = {
  option: PossibleSortingOptions;
};

const SortByOptionButton: React.FC<SortByOptionButtonProps> = ({ option }) => {
  const { sortingOption, setSortingOption, sortByOption } = useProductsContext();

  const dynamicStyling = useMemo((): [string, string] => {
    if (sortingOption === option) {
      return ["gradientDefault", "text-neutral100"];
    } else {
      return ["bg-brandLight hover:bg-brandLight2 duration-100", "bg-clip-text text-transparent gradientDefault"];
    }
  }, [sortingOption]);

  const handleSortingOptionSelect = (): void => {
    setSortingOption(option);
    sortByOption(option);
  };

  return (
    <button
      onClick={handleSortingOptionSelect}
      className={`min-w-[136px] text-center ${dynamicStyling[0]} rounded-xl md:px-4 h-[40px] md:h-[43px] py-1 text-smDefaultSmall md:text-[18px] lg:text-lgDefault font-weightDefault`}
    >
      <span className={dynamicStyling[1]}>{option}</span>
    </button>
  );
};

export default SortByOptionButton;
