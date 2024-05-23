function Card({ image, title, reverse, children }) {
  return (
    <a
      href="#"
      className={`flex items-center bg-white md:border md:border-gray-200 rounded-lg md:shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${
        reverse ? "flex-row-reverse md:flex-none" : ""
      }`}
    >
      <img
        className="w-1/2 rounded-lg rounded-r-none md:object-cover  md:rounded-t-lg md:h-96  md:w-48 md:rounded-none md:rounded-s-lg"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {children}
        </p>
      </div>
    </a>
  );
}

export default Card;
