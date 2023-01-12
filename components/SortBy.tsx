"use client";

import React from "react";

import { possibleSortingOptions } from "../utils/types";
import SortByOptionButton from "./SortByOptionButton";

const SortBy = () => {
  return (
    <div className="w-full md:w-auto flex items-center overflow-x-auto scrollbar-hide md:scrollbar-default">
      <p className="hidden lg:block lg:text-lgDefault lg:font-weightDefault text-neutral600 mr-4">Sort by:</p>
      <div className="flex items-center gap-1 md:gap-3 min-w-screen ">
        {possibleSortingOptions.map((option) => (
          <SortByOptionButton key={option} option={option} />
        ))}
      </div>
    </div>
  );
};

export default SortBy;
