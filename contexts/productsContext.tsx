"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { PossibleSortingOptions, Product } from "../utils/types";

type ProductContextValues = {
  products: Product[];
  currentFilter: string | undefined;
  sortingOption: PossibleSortingOptions;
  currentPage: number;
  loadingProducts: boolean;
  errorFetchingProcuts: any;
};

const ProductsContext = createContext<ProductContextValues>({
  products: [],
  currentFilter: undefined,
  sortingOption: "Most Recent",
  currentPage: 1,
  loadingProducts: false,
  errorFetchingProcuts: undefined,
});

type ProductsProviderProps = {
  children: ReactNode;
};

const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState<string>("");
  const [sortingOption, setSortingOption] = useState<PossibleSortingOptions>("Most Recent");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { products, loading: loadingProducts, error: errorFetchingProcuts } = useFetchProducts();
  console.log(products);
  return (
    <ProductsContext.Provider
      value={{ currentFilter, sortingOption, currentPage, products, loadingProducts, errorFetchingProcuts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const { currentFilter, currentPage, sortingOption, errorFetchingProcuts, loadingProducts, products } =
    useContext(ProductsContext);
  return { currentFilter, currentPage, sortingOption, errorFetchingProcuts, loadingProducts, products };
};

export default ProductsProvider;
