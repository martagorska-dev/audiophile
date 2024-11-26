import { useProductsFromCategory } from "../../hooks/useProductsFromCategory";
import { insertLineBreakBeforeLastWord } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";
import ButtonLinkOrange from "../../ui/ButtonLinkOrange";
import useMediaQuery from "../../hooks/useMediaQuery";

function ProductsList({ category }) {
  const { products, isLoading } = useProductsFromCategory(category);
  const { isMobile } = useMediaQuery();

  if (isLoading) return <Spinner />;

  const productsReverse = products.slice().reverse();

  return (
    <section className="mx-auto max-w-[1110px]">
      <ul className="flex flex-col gap-32 lg:gap-40">
        {productsReverse.map(
          (
            { id, categoryImage, new: isNew, name, description, slug },
            index,
          ) => (
            <li
              key={id}
              className="grid grid-cols-1 grid-rows-[auto,auto] items-center gap-8 sm:gap-14 lg:grid-cols-2 lg:gap-0"
            >
              <div
                className={`${(index + 1) % 2 === 0 ? "lg:order-2 lg:justify-self-end" : ""}`}
              >
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={categoryImage.mobile}
                  />
                  <source
                    media="(max-width: 1023px)"
                    srcSet={categoryImage.tablet}
                  />
                  <img
                    src={categoryImage.desktop}
                    alt={`${name} image`}
                    className="rounded-lg"
                  />
                </picture>
              </div>
              <div
                className={`${(index + 1) % 2 === 0 ? "lg:order-1 lg:pr-32" : "lg:pl-32"} flex flex-col items-center text-center lg:items-start lg:text-left`}
              >
                {isNew ? (
                  <p className="custom-overline mb-6 text-primary-100 sm:mb-4">
                    New product
                  </p>
                ) : null}
                {isMobile ? (
                  <h4
                    className="mb-6 sm:mb-8"
                    dangerouslySetInnerHTML={{
                      __html: insertLineBreakBeforeLastWord(name),
                    }}
                  />
                ) : (
                  <h2
                    className="mb-6 sm:mb-8"
                    dangerouslySetInnerHTML={{
                      __html: insertLineBreakBeforeLastWord(name),
                    }}
                  />
                )}
                <p className="mb-6 px-0 sm:px-14 lg:mb-10 lg:px-0">
                  {description}
                </p>
                <ButtonLinkOrange to={`/${category}/${slug}`}>
                  See product
                </ButtonLinkOrange>
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

export default ProductsList;
