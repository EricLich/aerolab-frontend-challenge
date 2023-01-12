"use client";

import React, { useState } from "react";
import { useProductsContext } from "../contexts/productsContext";

const FilterBy = () => {
  const { categories, currentFilter, setCurrentFilter } = useProductsContext();
  const [showCategories, setShowCategories] = useState<boolean>(false);

  return (
    <button className="flex items-center lg:gap-4 lg:h-[59px]" onClick={() => setShowCategories(!showCategories)}>
      <p className="hidden lg:block lg:text-lgDefault lg:font-weightDefault text-neutral600">Filter by:</p>
      <div
        className={`relative lg:w-[256px] border border-neutral300 rounded-2xl h-full flex items-center justify-between lg:pl-6 lg:pr-3 hover:bg-neutral200 ${
          showCategories ? "bg-neutral200" : ""
        } duration-75`}
      >
        <span className="lg:text-lgDefault font-weightDefault text-neutral600">{currentFilter}</span>
        <span
          className={`rotate-180 text-[10px] text-neutral600 duration-200 ${showCategories ? "rotate-[360deg]" : ""}`}
        >
          ▲
        </span>
        {showCategories && (
          <div className="absolute w-full left-0 top-[110%] h-auto bg-neutral100 z-40 border border-neutral300 rounded-lg">
            <ul className="lg:py-2 flex flex-col items-start">
              {categories.map((category) => (
                <li className="w-full hover:bg-neutral200 duration-75" key={category}>
                  <button
                    className="w-full text-left lg:text-lgDefault lg:font-weightDefault text-neutral600 lg:px-6 lg:py-3"
                    onClick={() => setCurrentFilter(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </button>
  );
};

export default FilterBy;
