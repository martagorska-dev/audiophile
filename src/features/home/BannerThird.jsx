import ButtonlinkWhite from "../../ui/ButtonLinkWhite";

function BannerThird() {
  return (
    <div className="grid grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1 md:gap-3 lg:gap-8">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/assets/home/mobile/image-earphones-yx1.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
        />
        <img
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          alt="Earphones YX1 image"
          className="self-stretch rounded-lg"
        />
      </picture>
      <div className="flex items-center rounded-lg bg-background-100">
        <div className="pl-6 sm:pl-10 lg:pl-24">
          <h4 className="mb-4">YX1 earphones</h4>
          <ButtonlinkWhite to="/earphones/yx1-earphones">
            See product
          </ButtonlinkWhite>
        </div>
      </div>
    </div>
  );
}

export default BannerThird;
