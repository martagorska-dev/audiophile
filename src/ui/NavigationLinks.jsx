import { NavLink } from "react-router-dom";

function NavigationLinks() {
  return (
    <>
      <li>
        <NavLink to="/" className="custom-navlink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/headphones" className="custom-navlink">
          Headphones
        </NavLink>
      </li>
      <li>
        <NavLink to="/speakers" className="custom-navlink">
          Speakers
        </NavLink>
      </li>
      <li>
        <NavLink to="/earphones" className="custom-navlink">
          Earphones
        </NavLink>
      </li>
    </>
  );
}

export default NavigationLinks;
