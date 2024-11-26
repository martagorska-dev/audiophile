import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiShop";

export function useProducts() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  return { products, isLoading, error };
}
