"use client";

import React from "react";

import ProductCard from "./ProductCard";
import { useProductsContext } from "../contexts/productsContext";

const Products = () => {
  const { productsPages } = useProductsContext();

  return (
    <div className="w-full grid grid-cols-autofitSm md:grid-cols-autofitMd lg:grid-cols-4 lg:gap-x-6 lg:gap-y-20 lg:mt-16">
      {productsPages.pages[productsPages.currentPage]?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
