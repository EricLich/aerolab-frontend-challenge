"use client";

import React from "react";

import ProductCard from "./ProductCard";
import { useProductsContext } from "../contexts/productsContext";

const Products = () => {
  const { productsPages } = useProductsContext();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 lg:gap-x-6 gap-y-12 lg:gap-y-20 mt-16">
      {productsPages.pages[productsPages.currentPage]?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
