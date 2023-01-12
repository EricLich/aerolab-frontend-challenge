"use client";
import React, { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { PossibleSortingOptions, Product } from "../utils/types";

type ProductContextValues = {
  products: Product[];
  categories: string[];
  currentFilter: string | undefined;
  sortingOption: PossibleSortingOptions;
  currentPage: number;
  loadingProducts: boolean;
  errorFetchingProcuts: any;
  setCurrentFilter: (filter: string) => void;
  setSortingOption: (sortOption: PossibleSortingOptions) => void;
  setCurrentPage: (currentPage: number) => void;
};

const ProductsContext = createContext<ProductContextValues>({
  products: [],
  categories: [],
  currentFilter: undefined,
  sortingOption: "Most Recent",
  currentPage: 1,
  loadingProducts: false,
  errorFetchingProcuts: undefined,
  setCurrentFilter: (initial) => {},
  setSortingOption: (initial) => {},
  setCurrentPage: (initial) => {},
});

type ProductsProviderProps = {
  children: ReactNode;
};

const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState<string>("");
  const [sortingOption, setSortingOption] = useState<PossibleSortingOptions>("Most Recent");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { products, loading: loadingProducts, error: errorFetchingProcuts } = useFetchProducts();

  const categories = useMemo(() => {
    const mappedCategories = products.map((product) => product.category);
    setCurrentFilter("All Products");
    return ["All Products", ...new Set(mappedCategories)];
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        currentFilter,
        sortingOption,
        currentPage,
        products,
        loadingProducts,
        errorFetchingProcuts,
        setCurrentFilter,
        setCurrentPage,
        setSortingOption,
        categories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const {
    currentFilter,
    currentPage,
    sortingOption,
    errorFetchingProcuts,
    loadingProducts,
    products,
    setCurrentFilter,
    setCurrentPage,
    setSortingOption,
    categories,
  } = useContext(ProductsContext);
  return {
    currentFilter,
    currentPage,
    sortingOption,
    errorFetchingProcuts,
    loadingProducts,
    products,
    setCurrentFilter,
    setCurrentPage,
    setSortingOption,
    categories,
  };
};

export default ProductsProvider;
