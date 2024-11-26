import useMediaQuery from "../../hooks/useMediaQuery";
import ButtonLinkOrange from "../../ui/ButtonLinkOrange";

function Hero() {
  const { isMobile } = useMediaQuery();

  return (
    <section className="bg-background-200 bg-[url('/assets/home/mobile/image-header.jpg')] bg-contain bg-center bg-no-repeat px-6 sm:bg-[url('/assets/home/tablet/image-header.jpg')] sm:px-10 lg:bg-[url('/assets/home/desktop/image-hero.jpg')] lg:bg-auto">
      <div className="mx-auto max-w-[1110px] border-t border-gray-200 py-28 md:pb-40 md:pt-32 lg:grid lg:grid-cols-2 lg:pb-52 lg:pt-48">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="custom-overline mb-6 text-gray-100">New product</p>
          {isMobile ? (
            <h3 className="mb-6 text-white">
              XX99 Mark II
              <br />
              Headphones
            </h3>
          ) : (
            <h1 className="mb-6 text-white">
              XX99 Mark II
              <br />
              Headphones
            </h1>
          )}

          <p className="mb-10 max-w-md text-gray-50">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ButtonLinkOrange to="/headphones/xx99-mark-two-headphones">
            See product
          </ButtonLinkOrange>
        </div>
      </div>
    </section>
  );
}

export default Hero;
