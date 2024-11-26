import { useProducts } from "../../hooks/useProducts";
import useMediaQuery from "../../hooks/useMediaQuery";
import ButtonLinkOrange from "../../ui/ButtonLinkOrange";
import Spinner from "../../ui/Spinner";

function ProductOthers({ product }) {
  const { products, isLoading } = useProducts();
  const { others } = product;
  const { isTablet } = useMediaQuery();

  if (isLoading) return <Spinner />;

  function category(slug) {
    const [otherProduct] = products.filter((product) => product.slug === slug);
    return otherProduct.category;
  }

  return (
    <div>
      {isTablet ? (
        <h5 className="mb-10 text-center">You may also like</h5>
      ) : (
        <h3 className="mb-14 text-center lg:mb-16">You may also like</h3>
      )}
      <ul className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-2.5 lg:gap-8">
        {others.map(({ slug, name, image }) => (
          <li key={slug} className="flex flex-col items-center">
            <picture>
              <source media="(max-width: 767px)" srcSet={image.mobile} />
              <source media="(max-width: 1023px)" srcSet={image.tablet} />
              <img
                src={image.desktop}
                alt={`${name} image`}
                className="mb-8 rounded-lg md:mb-10"
              />
            </picture>
            <h5 className="mb-8">{name}</h5>
            <ButtonLinkOrange to={`/${category(slug)}/${slug}`}>
              See product
            </ButtonLinkOrange>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductOthers;
