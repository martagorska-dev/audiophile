import useMediaQuery from "../../hooks/useMediaQuery";
import ButtonLinkBlack from "../../ui/ButtonLinkBlack";

function BannerFirst({ to }) {
  const { isMobile } = useMediaQuery();

  return (
    <div className="relative overflow-hidden rounded-lg bg-primary-100 lg:grid lg:grid-cols-2">
      <div className="absolute -top-20 left-1/2 w-[558px] -translate-x-1/2 md:-top-80 md:w-[944px] lg:-left-40 lg:-top-14 lg:translate-x-0">
        <img src="/assets/home/desktop/pattern-circles.svg" />
      </div>
      <div className="z-10 lg:self-end lg:pl-32">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/home/mobile/image-speaker-zx9.png"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/home/tablet/image-speaker-zx9.png"
          />
          <img
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="Speaker ZX9 image"
            className="relative left-1/2 top-20 w-44 -translate-x-1/2 md:top-10 md:w-48 lg:-bottom-2 lg:w-80"
          />
        </picture>
      </div>
      <div className="z-10 flex flex-col items-center px-6 pb-12 pt-32 text-center md:px-40 md:pb-16 md:pt-24 lg:col-start-2 lg:items-start lg:self-center lg:px-24 lg:py-32 lg:text-left">
        {isMobile ? (
          <h3 className="mb-6 text-white">
            ZX9
            <br />
            speaker
          </h3>
        ) : (
          <h1 className="mb-6 text-white">
            ZX9
            <br />
            speaker
          </h1>
        )}
        <p className="mb-10 text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <ButtonLinkBlack to={to}>See product</ButtonLinkBlack>
      </div>
    </div>
  );
}

export default BannerFirst;
