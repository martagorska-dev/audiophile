import { useProduct } from "../../hooks/useProduct";
import Spinner from "../../ui/Spinner";
import ButtonGoBack from "../../ui/ButtonGoBack";
import ProductAddToCart from "./ProductAddToCart";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallery";
import ProductOthers from "./ProductOthers";

function ProductDetails() {
  const { product, isLoading } = useProduct();

  if (isLoading) return <Spinner />;

  return (
    <section className="mx-auto flex max-w-[1110px] flex-col gap-20 sm:gap-32 lg:gap-40">
      <ButtonGoBack style="absolute top-28 md:top-32 lg:top-40 text-gray-200" />
      <ProductAddToCart product={product} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
      <ProductOthers product={product} />
    </section>
  );
}

export default ProductDetails;
