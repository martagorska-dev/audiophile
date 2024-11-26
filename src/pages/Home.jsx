import Hero from "../features/home/Hero";
import Categories from "../ui/Categories";
import Banners from "../features/home/Banners";
import About from "../ui/About";

function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-32 bg-background-50 px-6 pb-32 pt-10 sm:px-10 md:gap-24 md:pb-24 md:pt-24 lg:gap-40 lg:pb-48">
        <Categories />
        <Banners />
        <About />
      </div>
    </>
  );
}

export default Home;
