function ProductGallery({ product }) {
  const { name, gallery } = product;

  return (
    <div className="grid-rows-[auto, auto, auto] grid grid-cols-1 gap-6 md:grid-cols-[0.411fr,0.589fr] md:grid-rows-2 lg:gap-8">
      <div className="m:row-start-1 md:col-start-1">
        <picture>
          <source media="(max-width: 767px)" srcSet={gallery.first.mobile} />
          <source media="(max-width: 1023px)" srcSet={gallery.first.tablet} />
          <img
            src={gallery.first.desktop}
            alt={`${name} others image`}
            className="rounded-lg"
          />
        </picture>
      </div>
      <div className="md:col-start-1 md:row-start-2 md:self-end">
        <picture>
          <source media="(max-width: 767px)" srcSet={gallery.second.mobile} />
          <source media="(max-width: 1023px)" srcSet={gallery.second.tablet} />
          <img
            src={gallery.second.desktop}
            alt={`${name} others image`}
            className="rounded-lg"
          />
        </picture>
      </div>
      <div className="md:row-span-2 md:row-start-1 md:justify-self-end">
        <picture>
          <source media="(max-width: 767px)" srcSet={gallery.third.mobile} />
          <source media="(max-width: 1023px)" srcSet={gallery.third.tablet} />
          <img
            src={gallery.third.desktop}
            alt={`${name} others image`}
            className="rounded-lg"
          />
        </picture>
      </div>
    </div>
  );
}

export default ProductGallery;
