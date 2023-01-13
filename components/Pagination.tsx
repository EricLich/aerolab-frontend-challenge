"use client";

import Image from "next/image";
import React from "react";

import { useProductsContext } from "../contexts/productsContext";
import { ProductPages } from "../utils/types";

const Pagination = () => {
  const { productsPages, setProductsPages } = useProductsContext();

  const handlePageChange = (whereTo: number): void => {
    setProductsPages((prev: ProductPages) => ({ ...prev, currentPage: prev.currentPage + whereTo }));
  };

  return (
    <div className="flex items-center justify-between h-[59px] w-[258px] border border-neutral300 rounded-2xl px-3">
      <button
        className={`w-10 h-10 bg-brandLight rounded-lg flex items-center justify-center disabled:bg-neutral200 ${
          productsPages.currentPage === 0 ? "cursor-not-allowed" : "hover:bg-slate-300 duration-100"
        }`}
        disabled={productsPages.currentPage === 0}
        onClick={() => productsPages.currentPage > 0 && handlePageChange(-1)}
      >
        <Image
          src={
            productsPages.currentPage === 0 ? "/assets/icons/chevron-default.svg" : "/assets/icons/chevron-active.svg"
          }
          height={24}
          width={24}
          alt="previous page"
          className="rotate-180"
        />
      </button>

      <p className="text-lgDefault text-neutral600 font-weightDefault">
        Page{" "}
        <span className="gradientDefaultNoHover bg-clip-text text-transparent">
          {productsPages.currentPage + 1} of {productsPages.totalPages}
        </span>
      </p>

      <button
        className={`w-10 h-10 bg-brandLight rounded-lg flex items-center justify-center disabled:bg-neutral200 ${
          productsPages.currentPage + 1 === productsPages.totalPages
            ? "cursor-not-allowed"
            : "hover:bg-slate-300 duration-100"
        }`}
        disabled={productsPages.currentPage + 1 === productsPages.totalPages}
        onClick={() => productsPages.currentPage + 1 < productsPages.totalPages && handlePageChange(1)}
      >
        <Image
          src={
            productsPages.currentPage + 1 === productsPages.totalPages
              ? "/assets/icons/chevron-default.svg"
              : "/assets/icons/chevron-active.svg"
          }
          height={24}
          width={24}
          alt="next page"
        />
      </button>
    </div>
  );
};

export default Pagination;
