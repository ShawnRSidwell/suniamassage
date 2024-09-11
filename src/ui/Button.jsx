import { HashLink } from "react-router-hash-link";

function Button({ to, className, children }) {
  return (
    <HashLink
      smooth
      to={to}
      className={`px-4 py-2 bg-cPurple-600 text-white rounded-md focus:outline-none hover:bg-cPurple-300 ${className}`}
    >
      {children}
    </HashLink>
  );
}

export default Button;
