"use client";

import React from "react";

import FilterSelection from "./FilterSelection";
import Pagination from "./Pagination";

const FiltersSection = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <FilterSelection />
      {/* <Pagination /> */}
    </div>
  );
};

export default FiltersSection;
