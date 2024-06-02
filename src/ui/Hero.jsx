import Headline from "./Headline";

function Hero({ headline, image, children }) {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center md:bg-gradient-to-r from-[#938ccf] to-[#b0a4e3] md:bg-[#938ccf] md:h-[60vh]">
      <div className="md:w-3/4 md:flex md:justify-evenly items-center text-slate-500 font-medium md:bg-[#C8CBDB] md:bg-opacity-90 md:shadow-lg md:rounded-l-full	 p-3 md:p-0 m-3  md:py-8">
        <Headline className="md:hidden text-center p-2">{headline}</Headline>
        <img
          className="rounded-full size-4/5 shadow-lg mx-auto md:h-96 md:w-96 object-cover ml-12 border-[#756DAF]"
          src={image}
          alt="profile picture"
        />

        <div className="md:mx-12 ">
          <Headline className="hidden md:block text-center md:ml-4">
            {headline}
          </Headline>

          <div className="py-3 text-justify text-med font-normal md:mx-auto md:py-5 md:pl-5 md:px-3 leading-5 md:leading-7 md:text-xl text-gray-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
