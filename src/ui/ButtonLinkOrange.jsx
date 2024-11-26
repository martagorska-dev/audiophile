import { Link } from "react-router-dom";

function ButtonLinkOrange({ to, widthFull, children }) {
  return (
    <Link
      to={to}
      className={`${widthFull ? "w-full" : "w-[160px]"} custom-subtitle flex h-[48px] cursor-pointer items-center justify-center bg-primary-100 text-white transition-colors hover:bg-primary-50`}
    >
      {children}
    </Link>
  );
}

export default ButtonLinkOrange;
