import useMediaQuery from "../hooks/useMediaQuery";
import ButtonLinkTransparent from "./ButtonLinkTransparent";

function CategoryCTA({ imgSrc, category }) {
  const { isLaptop } = useMediaQuery();
  console.log(isLaptop);

  return (
    <div className="relative flex flex-col items-center">
      <img
        src={imgSrc}
        alt={`${category.charAt(0).toUpperCase() + category.slice(1)} image`}
        className="absolute bottom-24 w-36 lg:bottom-20 lg:w-56"
      />
      <div className="flex flex-col items-center gap-4 self-stretch rounded-lg bg-background-100 pb-6 pt-20 lg:pb-8 lg:pt-28">
        {isLaptop ? (
          <h6 className="text-[15px] tracking-[1.07px]">{category}</h6>
        ) : (
          <h6>{category}</h6>
        )}
        <ButtonLinkTransparent to={`/${category}`}>Shop</ButtonLinkTransparent>
      </div>
    </div>
  );
}

export default CategoryCTA;
