import { Link } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(() => !isMenuOpen);
  }

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <>
      {isMobile ? (
        <header>
          <div className="flex items-center justify-between w-full py-2">
            <div className="flex items-center gap-1 mx-4">
              <img className="w-10 h-10" src="/sunia-massage-icon.JPG" />
              <img className="w-28 h-12 py-2" src="/sunia-massage-title.JPG" />
            </div>
            <button className="px-3" onClick={toggleMenu}>
              {isMenuOpen ? (
                <AiFillCloseCircle color="grey" size="1.8em" />
              ) : (
                <AiOutlineMenu color="grey" size="1.8em" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <nav>
              <ul className="flex flex-col items-center basis-full">
                <li>
                  <Link to="/" className=" hover:text-gray-300 font-semibold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className=" hover:text-gray-300 font-semibold"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className=" hover:text-gray-300 font-semibold"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className=" hover:text-gray-300 font-semibold"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>
      ) : (
        <header className="my-2 px-7 flex justify-between">
          <nav className="flex items-center justify-start">
            <ul className="flex gap-5">
              <li>
                <Link to="/" className=" hover:text-gray-300 font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className=" hover:text-gray-300 font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className=" hover:text-gray-300 font-semibold"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className=" hover:text-gray-300 font-semibold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-3 items-center justify-center">
            <img className="w-[100px] h-[80px]" src="/sunia-massage-icon.JPG" />
            <img
              className="w-[200px] h-[60px]"
              src="/sunia-massage-title.JPG"
            />
          </div>
          <div className="flex items-center">
            <Button className={"h-1/2"}> Book Appointment</Button>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
