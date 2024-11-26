import Categories from "./Categories";
import Overlay from "./Overlay";

function MobileNavigation({ onIsMenuOpen }) {
  return (
    <>
      <div className="absolute z-40 w-full bg-background-50 px-6 py-8 sm:px-10 md:py-16">
        <Categories />
      </div>
      <Overlay onClick={onIsMenuOpen} />
    </>
  );
}

export default MobileNavigation;
