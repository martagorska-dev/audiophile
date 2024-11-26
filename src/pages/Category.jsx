import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ALLOWED_CATEGORIES } from "../utils/constants";
import Categories from "../ui/Categories";
import About from "../ui/About";
import Error from "../ui/Error";
import HeaderCategory from "../features/categories/HeaderCategory";
import ProductsList from "../features/categories/ProductsList";

function Category() {
  const { category } = useParams();

  const [isValidCategory, setIsValidCategory] = useState(false);

  useEffect(() => {
    if (ALLOWED_CATEGORIES.includes(category)) {
      setIsValidCategory(true);
    } else {
      setIsValidCategory(false);
    }
  }, [category]);

  if (!isValidCategory)
    return <Error customErrorMessage="Category doesn't exist" />;

  return (
    <>
      <HeaderCategory category={category} />
      <div className="flex flex-col gap-32 bg-background-50 px-6 pb-32 pt-16 sm:px-10 md:py-32 lg:gap-40 lg:py-40">
        <ProductsList category={category} />
        <Categories />
        <About />
      </div>
    </>
  );
}

export default Category;
