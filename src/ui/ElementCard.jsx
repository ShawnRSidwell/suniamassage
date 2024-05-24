function ElementCard({ headline, image, children }) {
  return (
    <div className=" flex flex-col items-center justify-center md:w-80 md:px-6 md:py-7">
      <img className="w-10 h-10 md:w-14 md:h-12" src={image} alt={headline} />
      <p className="text-gray-500 font-semibold tracking-wider text-2xl  py-2 text-center">
        {headline}
      </p>

      <p className="hidden md:block text-center text-gray-700">{children}</p>
    </div>
  );
}

export default ElementCard;
