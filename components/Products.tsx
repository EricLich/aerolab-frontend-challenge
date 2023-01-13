"use client";

import React from "react";

import ProductCard from "./ProductCard";
import { MAX_PRODS_PER_PAGE_DESKTOP, useProductsContext } from "../contexts/productsContext";
import SkeletonProductCard from "./SkeletonProductCard";

const Products = () => {
  const { productsPages, loadingProducts } = useProductsContext();
  return (
    <div className="min-h-[200px] h-auto w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 lg:gap-x-6 gap-y-12 lg:gap-y-20 mt-16">
      {loadingProducts
        ? new Array(MAX_PRODS_PER_PAGE_DESKTOP).fill(0).map((_, index) => <SkeletonProductCard key={index} />)
        : productsPages.pages[productsPages.currentPage]?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
    </div>
  );
};

export default Products;
