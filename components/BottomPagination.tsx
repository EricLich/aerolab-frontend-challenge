"use client";

import React from "react";
import { useProductsContext } from "../contexts/productsContext";
import Pagination from "./Pagination";

const BottomPagination = () => {
  const { products, productsPages, loadingProducts } = useProductsContext();

  return (
    <div className="h-auto w-full mt-16 flex flex-col-reverse md:flex-col lg:flex-row items-center md:justify-center lg:justify-between gap-6 mb-20 md:mb-[180px]">
      <div className="w-[33%]"></div>
      <p className="w-full text-lgDefault text-neutral600 font-weightDefault lg:w-[33%] flex justify-center">
        {loadingProducts ? (
          <span className="gradientDefaultNoHover bg-clip-text text-transparent mr-1">Loading...</span>
        ) : (
          <span className="gradientDefaultNoHover bg-clip-text text-transparent mr-1">
            {(productsPages.currentPage + 1) * productsPages.pages[productsPages.currentPage]?.length} of{" "}
            {productsPages.pages.flat().length}
          </span>
        )}
      </p>
      <div className="lg:w-[33%] flex lg:justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default BottomPagination;
