import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Basket from "./Basket";

function Header() {
  const { isLaptop } = useMediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(
    function () {
      setIsMenuOpen(false);
    },
    [location],
  );

  function handleIsMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="relative z-30 bg-background-200 px-6 pb-9 pt-8 sm:px-10">
        <div className="relative mx-auto flex max-w-[1110px] justify-between">
          <div className="flex gap-10">
            {isLaptop && <BurgerMenu onIsMenuOpen={handleIsMenuOpen} />}
            <Logo />
          </div>
          {!isLaptop && <Navigation />}
          <Basket />
        </div>
      </header>
      {isLaptop && isMenuOpen && (
        <MobileNavigation onIsMenuOpen={handleIsMenuOpen} />
      )}
    </>
  );
}

export default Header;
