function About() {
  return (
    <section className="mx-auto flex max-w-[1110px] flex-col-reverse justify-center gap-10 text-center sm:gap-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-0 lg:text-left">
      <div className="sm:px-20 lg:px-0 lg:pr-32">
        <h2 className="mb-8">
          Bringing you the <span className="text-primary-100">best</span> audio
          gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="order-1 justify-self-end lg:order-2">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/shared/mobile/image-best-gear.jpg"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
          />
          <img
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="About section image"
            className="rounded-lg"
          />
        </picture>
      </div>
    </section>
  );
}

export default About;
