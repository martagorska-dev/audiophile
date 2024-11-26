import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="h-[25px]">
      <img src="/assets/shared/desktop/logo.svg" alt="Logo" />
    </Link>
  );
}

export default Logo;
