import { Link } from "react-router-dom";

function ButtonLinkWhite({ to, children }) {
  return (
    <Link
      to={to}
      className="custom-subtitle relative flex h-[48px] w-[160px] cursor-pointer items-center justify-center border border-solid border-black bg-transparent text-black transition-colors hover:bg-black hover:text-white"
    >
      {children}
    </Link>
  );
}

export default ButtonLinkWhite;
