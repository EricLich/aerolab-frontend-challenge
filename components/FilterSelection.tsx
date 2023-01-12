"use client";

import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";

const FilterSelection = () => {
  return (
    <div className="flex lg:flex-row items-center lg:gap-10">
      <FilterBy />
      <div className="lg:w-[2px] lg:h-[59px] bg-neutral300"></div>
      <SortBy />
    </div>
  );
};

export default FilterSelection;
