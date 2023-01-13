"use client";
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

import { PossibleSortingOptions, Product, ProductPages } from "../utils/types";
import { useFetchProducts } from "../hooks/useFetchProducts";
import useWindowSize from "../hooks/useWindowSize";

type ProductContextValues = {
  products: Product[];
  categories: string[];
  currentFilter: string | undefined;
  sortingOption: PossibleSortingOptions;
  productsPages: ProductPages;
  loadingProducts: boolean;
  errorFetchingProcuts: any;
  setCurrentFilter: (filter: string) => void;
  setSortingOption: (sortOption: PossibleSortingOptions) => void;
  setProductsPages: (updateValue: any) => void;
  filterByCategory: (filterCategory: string) => void;
  sortByOption: (option: PossibleSortingOptions) => void;
};

const initialState: ProductContextValues = {
  products: [],
  categories: [],
  currentFilter: undefined,
  sortingOption: "Most Recent",
  productsPages: {
    pages: [],
    totalPages: 0,
    currentFormat: undefined,
    currentPage: 1,
  },
  loadingProducts: false,
  errorFetchingProcuts: undefined,
  setCurrentFilter: () => {},
  setSortingOption: () => {},
  setProductsPages: () => {},
  filterByCategory: () => {},
  sortByOption: () => {},
};

const ProductsContext = createContext<ProductContextValues>(initialState);

type ProductsProviderProps = {
  children: ReactNode;
};

export const MAX_PRODS_PER_PAGE_DESKTOP: number = 16;
export const MAX_PRODS_PER_PAGE_TABLET: number = 12;
export const MAX_PRODS_PER_PAGE_MOBILE: number = 8;

const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState<string>("");
  const [sortingOption, setSortingOption] = useState<PossibleSortingOptions>("Most Recent");
  const { products, loading: loadingProducts, error: errorFetchingProcuts } = useFetchProducts();
  const [productsPages, setProductsPages] = useState<ProductPages>({
    pages: [],
    totalPages: 0,
    currentFormat: undefined,
    currentPage: 0,
  });
  const { width } = useWindowSize();

  const categories = useMemo(() => {
    const mappedCategories = products.map((product) => product.category);
    setCurrentFilter("All Products");
    return ["All Products", ...new Set(mappedCategories)];
  }, [products]);

  function checkWidthForPagesBuild(bypassFormatCheck: boolean) {
    if (width) {
      if (width < 768 && (bypassFormatCheck || productsPages.currentFormat !== "sm"))
        formatProductPages(MAX_PRODS_PER_PAGE_MOBILE);
      if (width >= 768 && (bypassFormatCheck || (width < 1024 && productsPages.currentFormat !== "md")))
        formatProductPages(MAX_PRODS_PER_PAGE_TABLET);
      if (width >= 1024 && (bypassFormatCheck || productsPages.currentFormat !== "lg"))
        formatProductPages(MAX_PRODS_PER_PAGE_DESKTOP);
    }
  }

  function formatProductPages(maxProdsPerPage: number): void {
    const { pages, totalPages } = buildPagesMatrixForSizes(maxProdsPerPage);
    if (maxProdsPerPage === MAX_PRODS_PER_PAGE_DESKTOP)
      setProductsPages({ ...productsPages, currentPage: 0, currentFormat: "lg", pages, totalPages });
    if (maxProdsPerPage === MAX_PRODS_PER_PAGE_TABLET)
      setProductsPages({ ...productsPages, currentPage: 0, currentFormat: "md", pages, totalPages });
    if (maxProdsPerPage === MAX_PRODS_PER_PAGE_MOBILE)
      setProductsPages({ ...productsPages, currentPage: 0, currentFormat: "sm", pages, totalPages });
  }

  function buildPagesMatrixForSizes(
    maxProdsPerPage: number,
    filteredProducts?: Product[]
  ): { pages: Product[][]; totalPages: number } {
    const productsCopy = filteredProducts ? [...filteredProducts] : [...products];
    const pages: Product[][] = [];

    while (productsCopy.length > 0) {
      const page = productsCopy.splice(0, maxProdsPerPage);
      pages.push(page);
    }
    return { pages, totalPages: pages.length };
  }

  function filterByCategory(filterCategory: string): void {
    setSortingOption("Most Recent");
    let filteredProducts: Product[] = [];
    if (filterCategory === "All Products") {
      filteredProducts = [...products];
    } else {
      filteredProducts = [...products].filter((product) => product.category === filterCategory);
    }
    const { pages, totalPages } = buildPagesMatrixForSizes(
      getAmountPerPage(productsPages.currentFormat),
      filteredProducts
    );
    setProductsPages({ ...productsPages, currentPage: 0, pages, totalPages });
  }

  function sortByOption(option: PossibleSortingOptions): void {
    if (option === "Most Recent") {
      if (currentFilter !== "All Products") {
        filterByCategory(currentFilter);
      } else {
        const { pages, totalPages } = buildPagesMatrixForSizes(getAmountPerPage(productsPages.currentFormat));
        setProductsPages({ ...productsPages, currentPage: 0, pages, totalPages });
      }
    }

    if (option === "Highest Price") {
      const sortedByHighestPrice = [...productsPages.pages.flat()].sort((a: Product, b: Product) => b.cost - a.cost);
      const { pages, totalPages } = buildPagesMatrixForSizes(
        getAmountPerPage(productsPages.currentFormat),
        sortedByHighestPrice
      );
      setProductsPages({ ...productsPages, currentPage: 0, pages, totalPages });
    }

    if (option === "Lowest Price") {
      const sortedByHighestPrice = [...productsPages.pages.flat()].sort((a: Product, b: Product) => a.cost - b.cost);
      const { pages, totalPages } = buildPagesMatrixForSizes(
        getAmountPerPage(productsPages.currentFormat),
        sortedByHighestPrice
      );
      setProductsPages({ ...productsPages, currentPage: 0, pages, totalPages });
    }
  }

  function getAmountPerPage(format: ProductPages["currentFormat"]): number {
    if (format === "sm") return MAX_PRODS_PER_PAGE_MOBILE;
    if (format === "md") return MAX_PRODS_PER_PAGE_TABLET;
    if (format === "lg") return MAX_PRODS_PER_PAGE_DESKTOP;

    return 0;
  }

  useEffect(() => {
    if (products.length > 0) {
      checkWidthForPagesBuild(true);
    }
  }, [products]);

  useEffect(() => {
    checkWidthForPagesBuild(false);
  }, [width]);

  return (
    <ProductsContext.Provider
      value={{
        currentFilter,
        sortingOption,
        productsPages,
        products,
        loadingProducts,
        errorFetchingProcuts,
        setCurrentFilter,
        setProductsPages,
        setSortingOption,
        categories,
        filterByCategory,
        sortByOption,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const {
    currentFilter,
    sortingOption,
    productsPages,
    products,
    loadingProducts,
    errorFetchingProcuts,
    setCurrentFilter,
    setProductsPages,
    setSortingOption,
    categories,
    filterByCategory,
    sortByOption,
  } = useContext(ProductsContext);
  return {
    currentFilter,
    sortingOption,
    productsPages,
    products,
    loadingProducts,
    errorFetchingProcuts,
    setCurrentFilter,
    setProductsPages,
    setSortingOption,
    categories,
    filterByCategory,
    sortByOption,
  };
};

export default ProductsProvider;
