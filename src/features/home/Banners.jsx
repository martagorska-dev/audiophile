import BannerFirst from "./BannerFirst";
import BannerSecond from "./BannerSecond";
import BannerThird from "./BannerThird";

function Banners() {
  return (
    <section className="mx-auto flex max-w-[1110px] flex-col gap-6 sm:gap-8 md:gap-12">
      <BannerFirst to="/speakers/zx9-speaker" />
      <BannerSecond to="/speakers/zx7-speaker" />
      <BannerThird to="/earpphones/yx1-earphones" />
    </section>
  );
}

export default Banners;
