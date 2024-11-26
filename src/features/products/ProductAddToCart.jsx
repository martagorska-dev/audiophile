import useMediaQuery from "../../hooks/useMediaQuery";
import {
  formatPrice,
  insertLineBreakBeforeLastWord,
} from "../../utils/helpers";
import ButtonAddToCart from "./ButtonAddToCart";

function ProductAddToCart({ product }) {
  const { isLaptop } = useMediaQuery();
  const { name, image, new: isNew, price, description } = product;

  return (
    <div className="grid grid-cols-1 items-center gap-y-10 md:grid-cols-[281px,auto] md:gap-y-0 lg:grid-cols-2">
      <div>
        <picture>
          <source media="(max-width: 767px)" srcSet={image.mobile} />
          <source media="(max-width: 1023px)" srcSet={image.tablet} />
          <img
            src={image.desktop}
            alt={`${name} image`}
            className="rounded-lg"
          />
        </picture>
      </div>
      <div className="pl-0 md:pl-16 lg:pl-32">
        {isNew ? (
          <p className="custom-overline mb-6 text-primary-100 md:mb-4">
            New product
          </p>
        ) : null}

        {isLaptop ? (
          <h4
            className="mb-6 md:mb-8"
            dangerouslySetInnerHTML={{
              __html: insertLineBreakBeforeLastWord(name),
            }}
          />
        ) : (
          <h2
            className="mb-6 md:mb-8"
            dangerouslySetInnerHTML={{
              __html: insertLineBreakBeforeLastWord(name),
            }}
          />
        )}
        <p className="mb-6 md:mb-8">{description}</p>
        <h6 className="mb-8 md:mb-12">{formatPrice(price)}</h6>
        <ButtonAddToCart product={product} />
      </div>
    </div>
  );
}

export default ProductAddToCart;
