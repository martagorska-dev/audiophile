import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/apiShop";

export function useProduct() {
  const { slug } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug),
  });

  return { product, isLoading, error };
}
