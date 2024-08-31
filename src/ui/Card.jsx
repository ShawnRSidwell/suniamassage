import Button from "./Button";

function Card({
  image,
  title,
  description,
  action,
  reverse = false,
  children,
}) {
  return (
    <a
      href="#"
      className={` flex items-center bg-white md:border md:border-gray-200 rounded-lg md:shadow md:flex-row md:max-w-xl my-9 md:my-0  shadow  ${
        reverse ? "flex-row-reverse md:flex-none mr-[.5rem]" : ""
      }`}
    >
      <img
        className={`w-1/2 h-72 rounded-lg  md:object-cover  md:rounded-t-lg md:h-96  md:w-48 md:rounded-none md:rounded-s-lg shadow-md ${
          reverse
            ? "rounded-r-none   z-0 object-cover transform scale-x-[-1]  md:scale-x-[1]"
            : "rounded-r-none "
        }`}
        src={image}
        alt={title}
      />
      <div
        className={`px-3 w-1/2 mx-4 flex flex-col justify-between md:p-4 leading-normal ${
          reverse ? "mx-0 z-1 pb-4" : ""
        }`}
      >
        <h5 className="mb-2 mt-4 text-2xl font-extrabold tracking-wider  md:font-bold text-gray-700 ">
          {title}
        </h5>
        <p className="mb-3 text-sm md:text-base text-gray-500 tracking-tight md:tracking-normal">
          {description}
        </p>
        <Button className="bg-[#756DAF]">{action}</Button>
      </div>
    </a>
  );
}

export default Card;
