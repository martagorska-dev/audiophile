import useMediaQuery from "../../hooks/useMediaQuery";

function ProductFeatures({ product }) {
  const { isTablet } = useMediaQuery();
  const { features, includes } = product;

  return (
    <div className="grid grid-cols-1 gap-y-32 lg:grid-cols-3 lg:gap-y-0">
      <div className="col-span-2">
        {isTablet ? (
          <h5 className="mb-8">Features</h5>
        ) : (
          <h3 className="mb-8">Features</h3>
        )}
        <p>{features}</p>
      </div>
      <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:pl-32">
        {isTablet ? (
          <h5 className="mb-6 sm:mb-8">In box</h5>
        ) : (
          <h3 className="mb-6 sm:mb-8">In box</h3>
        )}
        <ul className="flex flex-col gap-2">
          {includes.map(({ item, quantity }) => (
            <li key={item} className="flex gap-6">
              <span className="font-bold text-primary-100">{quantity}x</span>
              <span className="text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductFeatures;
