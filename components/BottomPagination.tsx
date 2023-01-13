"use client";

import React from "react";
import { useProductsContext } from "../contexts/productsContext";
import Pagination from "./Pagination";

const BottomPagination = () => {
  const { products, productsPages } = useProductsContext();

  return (
    <div className=" w-full mt-16 flex items-center justify-between">
      <div className="w-[33%]"></div>
      <p className="text-lgDefault text-neutral600 font-weightDefault w-[33%] flex justify-center">
        <span className="gradientDefaultNoHover bg-clip-text text-transparent mr-1">
          {(productsPages.currentPage + 1) * productsPages.pages[productsPages.currentPage]?.length} of{" "}
          {products.length}
        </span>
        products
      </p>
      <div className="w-[33%] flex  justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default BottomPagination;
