import CategoryCTA from "./CategoryCTA";

function Categories() {
  return (
    <section className="mx-auto w-full max-w-[1110px] pt-20">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-2.5 lg:gap-8">
        <CategoryCTA
          imgSrc={`/assets/shared/desktop/image-category-thumbnail-headphones.png`}
          category="headphones"
        />

        <CategoryCTA
          imgSrc={
            "/assets/shared/desktop/image-category-thumbnail-speakers.png"
          }
          category="speakers"
        />

        <CategoryCTA
          imgSrc={
            "/assets/shared/desktop/image-category-thumbnail-earphones.png"
          }
          category="earphones"
        />
      </div>
    </section>
  );
}

export default Categories;
