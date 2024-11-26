import { useQuery } from "@tanstack/react-query";
import { getProductsFromCategory } from "../services/apiShop";

export function useProductsFromCategory(category) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsFromCategory(category),
  });

  return { products, isLoading, error };
}
