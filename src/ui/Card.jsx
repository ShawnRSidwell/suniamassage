function Card({ image, title, reverse = false, children }) {
  return (
    <a
      href="#"
      className={` flex items-center bg-white md:border md:border-gray-200 rounded-lg md:shadow md:flex-row md:max-w-xl   ${
        reverse ? "flex-row-reverse md:flex-none" : ""
      }`}
    >
      <img
        className={`w-1/2 h-72 rounded-lg  md:object-cover  md:rounded-t-lg md:h-96  md:w-48 md:rounded-none md:rounded-s-lg shadow-md ${
          reverse
            ? "rounded-r-none  mr-[.5rem] z-0 object-cover transform scale-x-[-1]  "
            : "rounded-r-none "
        }`}
        src={image}
        alt={title}
      />
      <div
        className={`px-3 w-1/2 mx-4 flex flex-col justify-between md:p-4 leading-normal ${
          reverse ? "mx-0 z-1" : ""
        }`}
      >
        <h5 className="mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-700 ">
          {title}
        </h5>
        <p className="mb-3 text-sm md:text-base text-gray-500 ">{children}</p>
      </div>
    </a>
  );
}

export default Card;
