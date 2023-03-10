"use client";

import { Listbox } from "@headlessui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { useProductsContext } from "../contexts/productsContext";

const FilterBy = () => {
  const { categories, currentFilter, setCurrentFilter, filterByCategory, productsPages } = useProductsContext();
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const handleFilterChange = (category: string): void => {
    setShowCategories(!showCategories);
    setCurrentFilter(category);
    filterByCategory(category);
  };
  return (
    <div className="flex items-center lg:gap-4 h-[59px] cursor-pointer">
      <p className="hidden bigScreen:block lg:text-lgDefault lg:font-weightDefault text-neutral600">Filter by:</p>
      {/* old method */}
      {/* <div
        className={`relative w-[256px] border border-neutral300 rounded-2xl h-full flex items-center justify-between pl-6 pr-3 hover:bg-neutral200 ${
          showCategories ? "bg-neutral200" : ""
        } duration-75`}
        onClick={() => setShowCategories(!showCategories)}
      >
        <span className="text-smDefault md:text-lgDefault font-weightDefault text-neutral600">{currentFilter}</span>
        <span
          className={`rotate-180 text-[10px] text-neutral600 duration-200 ${showCategories ? "rotate-[360deg]" : ""}`}
        >
          ▲
        </span>
        {showCategories && (
          <div className="absolute w-full left-0 top-[110%] h-auto max-h-[240px] overflow-y-scroll bg-neutral0 z-40 border border-neutral300 rounded-lg">
            <ul className="py-2 flex flex-col items-start">
              {categories.map((category) => (
                <li className="w-full hover:bg-neutral200 duration-75" key={category}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-left text-smDefault md:text-lgDefault font-weightDefault text-neutral600 px-6 py-3"
                    onClick={() => handleFilterChange(category)}
                  >
                    {category}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div> */}
      <Listbox
        value={currentFilter}
        onChange={handleFilterChange}
        as="div"
        className={({ open }) =>
          `relative w-[256px] border border-neutral300 rounded-2xl h-full flex items-center justify-between  hover:bg-neutral200 ${
            open ? "bg-neutral200" : ""
          } duration-75`
        }
      >
        {({ open }) => (
          <>
            <Listbox.Button className={`relative w-full h-full flex justify-between items-center pl-6 pr-3`}>
              <p className="text-smDefault md:text-lgDefault font-weightDefault text-neutral600">{currentFilter}</p>
              <span className={`rotate-180 text-[10px] text-neutral600 duration-200 ${open ? "rotate-[360deg]" : ""}`}>
                ▲
              </span>
            </Listbox.Button>
            <Listbox.Options
              as="ul"
              className="absolute w-full left-0 top-[110%] h-auto max-h-[240px] overflow-y-scroll bg-neutral0 z-40 border border-neutral300 rounded-lg"
            >
              {categories.map((category) => (
                <Listbox.Option
                  as={motion.button}
                  whileTap={{ scale: 0.95 }}
                  key={category}
                  value={category}
                  className={({ active }) =>
                    `w-full  text-left text-smDefault md:text-lgDefault font-weightDefault text-neutral600 px-6 py-3 hover:bg-neutral200 ${
                      active && "bg-neutral200"
                    } duration-75`
                  }
                >
                  {category}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default FilterBy;
