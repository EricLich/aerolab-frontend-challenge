"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

import { useProductsContext } from "../contexts/productsContext";
import { ProductPages } from "../utils/types";

type PaginationProps = {
  extraClasses?: string;
};

const Pagination: React.FC<PaginationProps> = ({ extraClasses }) => {
  const { productsPages, setProductsPages } = useProductsContext();

  const handlePageChange = (whereTo: number): void => {
    setProductsPages((prev: ProductPages) => ({ ...prev, currentPage: prev.currentPage + whereTo }));
  };

  return (
    <div
      className={`flex items-center justify-between h-[60px] md:h-16 lg:h-[59px] w-[258px] border border-neutral300 rounded-2xl px-[15.5px] md:px-4 lg:px-3 ${
        extraClasses ? extraClasses : ""
      }`}
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`w-10 h-10 bg-brandLight rounded-lg flex items-center justify-center disabled:bg-neutral200 ${
          productsPages.currentPage === 0 ? "cursor-not-allowed" : "lg:hover:bg-slate-300 duration-100"
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
      </motion.button>

      <p className="text-lgDefault text-neutral600 font-weightDefault">
        Page{" "}
        <span className="gradientDefaultNoHover bg-clip-text text-transparent">
          {productsPages.currentPage + 1} of {productsPages.totalPages}
        </span>
      </p>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`w-10 h-10 bg-brandLight rounded-lg flex items-center justify-center disabled:bg-neutral200 ${
          productsPages.currentPage + 1 === productsPages.totalPages
            ? "cursor-not-allowed"
            : "lg:hover:bg-slate-300 duration-100"
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
      </motion.button>
    </div>
  );
};

export default Pagination;
