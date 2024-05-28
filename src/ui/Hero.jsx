function Hero({ headline, image, children }) {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center md:bg-gradient-to-r from-[#938ccf] to-[#b0a4e3] md:bg-[#938ccf] md:h-[60vh] ">
      <div className="md:w-3/4 md:flex md:justify-evenly items-center text-slate-500 font-medium bg-white md:shadow-lg md:rounded-l-full	 p-3 md:p-0 m-3  md:py-8">
        <img
          className="rounded-full size-4/5 shadow-lg mx-auto md:h-96 md:w-96 object-cover ml-12 border-[#756DAF]"
          src={image}
          alt="profile picture"
        />

        <div className="md:mx-12">
          <h2 className="text-xl md:text-4xl font-extrabold tracking-wider text-center p-2  text-[#534b89] uppercase">
            {headline}
          </h2>
          <div className="text-justify text-med font-normal md:mx-auto md:py-5 md:pl-5 md:px-3 leading-5 md:leading-7 md:text-xl text-gray-500">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
