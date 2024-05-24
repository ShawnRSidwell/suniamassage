import Button from "./Button";

function Panel({ headline, buttonText, className, children }) {
  return (
    <section
      className={`flex flex-col items-center p-3 md:bg-white md:bg-opacity-90 md:py-9 md:px-24 rounded-sm md:shadow-lg ${className}`}
    >
      <div className="text-xl md:text-4xl uppercase font-bold tracking-wide text-[#60A76F] text-center py-2">
        {headline}
      </div>
      <div className="text-center md:font-medium  md:text-lg text-gray-600 my-3 md:my-5">
        {children}
      </div>
      <Button className="font-semibold ">{buttonText}</Button>
    </section>
  );
}

export default Panel;
