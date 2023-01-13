"use client";

import React from "react";

import { possibleSortingOptions } from "../utils/types";
import SortByOptionButton from "./SortByOptionButton";

const SortBy = () => {
  return (
    <div className="md:w-[120%] bigScreen:w-auto flex items-center overflow-x-auto scrollbar-hide md:scrollbar-default">
      <p className="hidden bigScreen:block lg:text-lgDefault lg:font-weightDefault text-neutral600 mr-4">Sort by:</p>
      <div className="flex items-center gap-1 md:gap-3 min-w-screen md:mt-6 lg:mt-0">
        {possibleSortingOptions.map((option) => (
          <SortByOptionButton key={option} option={option} />
        ))}
      </div>
    </div>
  );
};

export default SortBy;
