import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="my-2 px-7 flex justify-between">
      <nav className="flex items-center justify-start">
        <ul className="flex gap-5">
          <li>
            <Link to="/" className=" hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className=" hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className=" hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className=" hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3 items-center justify-center">
        <img className="w-[100px] h-[80px]" src="/sunia-massage-icon.JPG" />
        <img className="w-[200px] h-[60px]" src="/sunia-massage-title.JPG" />
      </div>
      <div className="flex items-center">
        <Button className={"h-1/2"}> Book Appointment</Button>
      </div>
    </header>
  );
}

export default Header;
