"use client";

import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

import FilterSelection from "./FilterSelection";
import Pagination from "./Pagination";

const FiltersSection = () => {
  const { width } = useWindowSize();
  const [widthExists, stWidthExists] = useState<boolean>(false); //deals with next error

  useEffect(() => {
    if (width) {
      stWidthExists(true);
    }
  }, [width]);

  return (
    <div className="w-full flex justify-between items-start bigScreen:items-center">
      <FilterSelection />
      {widthExists && width && width > 768 && <Pagination />}
    </div>
  );
};

export default FiltersSection;
