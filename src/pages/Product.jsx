import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import Error from "../ui/Error";
import ProductDetails from "../features/products/ProductDetails";
import Categories from "../ui/Categories";
import About from "../ui/About";
import Spinner from "../ui/Spinner";

function Product() {
  const { slug } = useParams();
  const { products, isLoading } = useProducts();

  const [isValidProduct, setIsValidProduct] = useState(false);

  useEffect(() => {
    if (!isLoading && products.length > 0) {
      setIsValidProduct(products.some((product) => product.slug === slug));
    }
  }, [slug, products, isLoading]);

  if (isLoading) return <Spinner />;

  if (!isValidProduct)
    return <Error customErrorMessage="Product doesn't exist" />;

  return (
    <div className="flex flex-col gap-32 bg-background-50 px-6 pb-32 pt-16 sm:px-10 md:pb-32 md:pt-20 lg:gap-40 lg:py-40">
      <ProductDetails />
      <Categories />
      <About />
    </div>
  );
}

export default Product;
