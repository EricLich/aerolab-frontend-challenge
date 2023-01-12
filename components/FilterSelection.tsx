"use client";

import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";

const FilterSelection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
      <FilterBy />
      <div className="hidden lg:block lg:w-[2px] lg:h-[59px] bg-neutral300"></div>
      <SortBy />
    </div>
  );
};

export default FilterSelection;
