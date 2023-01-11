import { useEffect, useRef, useState } from "react";
import { getProducts } from "../api/products.api";
import { Product } from "../utils/types";

interface useFetchProducts {
  products: Product[];
  loading: boolean;
  error: any;
}

export const useFetchProducts = (): useFetchProducts => {
  const mounted = useRef<boolean>(false);

  const [fetchReturn, setFetchReturn] = useState<useFetchProducts>({
    products: [],
    error: undefined,
    loading: true,
  });

  useEffect(() => {
    const controller = new AbortController();
    if (mounted.current) {
      getProducts()
        .then((res) => {
          setFetchReturn((prev) => (prev = { ...prev, products: res as Product[], loading: false }));
        })
        .catch((err) => setFetchReturn((prev) => (prev = { ...prev, loading: false, error: err })));
      return;
    }
    return () => {
      controller.abort();
      mounted.current = true;
    };
  }, []);

  return fetchReturn;
};
