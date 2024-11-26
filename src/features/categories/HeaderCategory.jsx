function HeaderCategory({ category }) {
  return (
    <section className="bg-background-200 px-10">
      <div className="mx-auto max-w-[1110px] border-t border-gray-200 py-24">
        <h2 className="mb-6 text-center text-white">{category}</h2>
      </div>
    </section>
  );
}

export default HeaderCategory;
