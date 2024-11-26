import { Link } from "react-router-dom";

function ButtonLinkBlack({ to, children }) {
  return (
    <Link
      to={to}
      className="custom-subtitle flex h-[48px] w-[160px] cursor-pointer items-center justify-center border border-solid border-black bg-black text-white transition-colors hover:bg-white hover:text-black"
    >
      {children}
    </Link>
  );
}

export default ButtonLinkBlack;
