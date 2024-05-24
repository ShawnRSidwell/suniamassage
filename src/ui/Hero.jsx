function Hero({ headline, image, children }) {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center gradientbackground h-[60vh] bg-[#938ccf] md:h-[80vh] ">
      <div className="md:flex md:justify-evenly items-center text-slate-500 font-medium bg-white rounded-3xl p-3 m-3 md:p-24 md:m-6">
        <img
          className="rounded-full shadow-lg mx-auto size-1/2 md:h-96 md:w-96 object-cover md:ml-24 border-[#756DAF]"
          src={image}
          alt="profile picture"
        />

        <div className="md:mx-12">
          <h2 className="text-xl md:text-4xl font-extrabold tracking-wider text-center p-2 md:p-5 text-[#534b89] uppercase">
            {headline}
          </h2>
          <div className="text-justify text-lg font-normal md:max-w-[800] md:mx-auto md:py-5 md:px-9 md:size-3/4 md:text-xl text-slate-500">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
