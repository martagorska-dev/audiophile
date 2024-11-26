import { useState, useEffect } from "react";

function useMediaQuery() {
  const [mediaQueries, setMediaQueries] = useState({
    isMobile: false, // <= 640px
    isTablet: false, // <= 768px
    isLaptop: false, // <= 1023px
    isDesktop: false, // <= 1279px
    isLargeDesktop: false, // <= 1535px
    isXLDesktop: false, // > 1536px
  });

  useEffect(() => {
    const checkMediaQuery = () => {
      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      const isTablet = window.matchMedia("(max-width: 767px)").matches;
      const isLaptop = window.matchMedia("(max-width: 1023px)").matches;
      const isDesktop = window.matchMedia("(max-width: 1279px)").matches;
      const isLargeDesktop = window.matchMedia("(max-width: 1535px)").matches;
      const isXLDesktop = window.matchMedia("(min-width: 1536px)").matches;

      setMediaQueries({
        isMobile,
        isTablet,
        isLaptop,
        isDesktop,
        isLargeDesktop,
        isXLDesktop,
      });
    };

    checkMediaQuery();

    window.addEventListener("resize", checkMediaQuery);

    return () => {
      window.removeEventListener("resize", checkMediaQuery);
    };
  }, []);

  return mediaQueries;
}

export default useMediaQuery;
