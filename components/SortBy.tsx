"use client";

import React from "react";

import { possibleSortingOptions } from "../utils/types";
import SortByOptionButton from "./SortByOptionButton";

const SortBy = () => {
  return (
    <div className="flex items-center">
      <p className="hidden lg:block lg:text-lgDefault lg:font-weightDefault text-neutral600 mr-4">Sort by:</p>
      <div className="flex items-center md:gap-3">
        {possibleSortingOptions.map((option) => (
          <SortByOptionButton key={option} option={option} />
        ))}
      </div>
    </div>
  );
};

export default SortBy;
