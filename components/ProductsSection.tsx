"use client";

import React from "react";
import BottomPagination from "./BottomPagination";
import FiltersSection from "./FiltersSection";
import Products from "./Products";

const ProductsSection = () => {
  return (
    <section className="mainContainer flex flex-col items-start px-5 md:px-8 mt-20 md:mt-40 lg:mt-0" id="products">
      <h2 className="mb-10 text-lgTitleSmall lg:text-lgTitleMid font-weightTitleMid lg:leading-titleMid uppercase text-neutral900">
        <span className="gradientDefault bg-clip-text text-transparent">tech</span> products
      </h2>
      <FiltersSection />
      <Products />
      <BottomPagination />
    </section>
  );
};

export default ProductsSection;
