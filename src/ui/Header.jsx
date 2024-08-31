import { Link } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";

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
          <div className="flex items-center justify-between py-2 bg-white md:h-[10dvh] mx-5">
            <Logo size="med" />
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <AiFillCloseCircle color="grey" size="1.8em" />
              ) : (
                <AiOutlineMenu color="grey" size="1.8em" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <nav>
              <ul className="flex flex-col items-center basis-full py-3 gap-3 ">
                <li>
                  <Link to="/" className=" hover:text-gray-300 font-semibold ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/offerings"
                    className=" hover:text-gray-300 font-semibold"
                  >
                    Offerings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reviews"
                    className=" hover:text-gray-300 font-semibold"
                  >
                    Reviews
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
                    to="/contact"
                    className=" hover:text-gray-300 font-semibold"
                  >
                    Book A Massage
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>
      ) : (
        <header className="py-2 px-7 flex justify-between bg-white text-cBlue-400">
          <nav className="flex items-center justify-start">
            <ul className="flex gap-5">
              <li>
                <Link
                  to="/"
                  className=" hover:text-gray-300 font-semibold text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/offerings"
                  className=" hover:text-gray-300 font-semibold text-lg"
                >
                  Offerings
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className=" hover:text-gray-300 font-semibold text-lg"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className=" hover:text-gray-300 font-semibold text-lg"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <img
            className="h-[100px] w-[300px]"
            src="/sunia-massage-logo-new.png"
          />
          <div className="flex items-center">
            <Button className={"text-lg"}>
              <Link to="/contact">Boow Now</Link>
            </Button>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
