import { Link } from "react-router-dom";

function ButtonLinkTransparent({ to, children }) {
  return (
    <Link
      to={to}
      className="custom-subtitle flex cursor-pointer items-center gap-3.5 py-1 text-gray-100 transition-colors hover:text-primary-100"
    >
      <span>{children}</span>
      <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.322 1l5 5-5 5"
          stroke="#D87D4A"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </Link>
  );
}

export default ButtonLinkTransparent;
