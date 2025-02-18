import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 mt-3 md:mt-0">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-center gap-8 md:gap-0 md:justify-between md:text-md text-sm">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col gap-1 ml-3 text-gray-500 ">
              <Logo className="mb-1" size="large" includeIcon={false} />
              <p> Tigard, Oregon 97223</p>
              <p className="flex">
                <img
                  className="h-5 mt-[2px]"
                  src="/phone-icon.png"
                  alt="phone icon"
                />
                <a href="tel:+1234567890" className="pl-1">
                  (503) 502-3943
                </a>
              </p>
              <p className="flex">
                <MdEmail className="my-1 ml-[2px]" />
                <a href="mailto:someone@example.com" className="pl-1">
                  megan@suniamassage.com
                </a>
              </p>
              <SocialIcons className={"md:flex hidden "} />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-3 mt-8 font-bold text-gray-900 uppercase tracking-wider">
              Hours
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 md:text-base">
              <li className="md:hidden block">Mon - Thurs</li>
              <li className="md:block hidden">Monday - Thursday</li>
              <li> 9am - 1pm</li>
              <li>Special Hours:</li>
              <li>Nights and Weekends</li>
            </ul>
          </div>
        </div>
        <hr className="hidden md:block my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <SocialIcons className={"flex justify-center md:hidden mt-4"} />
        <div className="my-3 flex justify-around sm:items-center md:justify-between md:my-0">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2024{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Sunia Massage
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
