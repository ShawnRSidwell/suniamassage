import { HashLink as Link } from "react-router-dom";

function Button({ to, className, children }) {
  return (
    <Link
      smooth
      to={to}
      className={`px-4 py-2 bg-cPurple-600 text-white rounded-md focus:outline-none hover:bg-cPurple-300 ${className}`}
    >
      {children}
    </Link>
  );
}

export default Button;
