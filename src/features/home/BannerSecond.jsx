import ButtonLinkWhite from "../../ui/ButtonLinkWhite";

function BannerSecond() {
  return (
    <div className="flex h-[320px] items-center rounded-lg bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-right bg-no-repeat sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] sm:bg-center md:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]">
      <div className="pl-6 sm:pl-16 lg:pl-24">
        <h4 className="mb-8">ZX7 speaker</h4>
        <ButtonLinkWhite to="/speakers/zx7-speaker">
          See product
        </ButtonLinkWhite>
      </div>
    </div>
  );
}

export default BannerSecond;
