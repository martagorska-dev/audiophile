import NavigationLinks from "./NavigationLinks";

function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <NavigationLinks />
      </ul>
    </nav>
  );
}

export default Navigation;
