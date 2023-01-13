"use client";

import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";

const FilterSelection = () => {
  return (
    <div className="bigScreen:w-full lg:flex flex-col bigScreen:flex-row items-start bigScreen:items-center gap-6 lg:gap-10">
      <FilterBy />
      <div className="hidden bigScreen:block lg:w-[2px] lg:h-[59px] bg-neutral300"></div>
      <SortBy />
    </div>
  );
};

export default FilterSelection;
