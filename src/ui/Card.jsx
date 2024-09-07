import Button from "./Button";

function Card({ image, title, description, action, reverse = false }) {
  return (
    <div
      className={` items-center bg-white md:border md:border-gray-200 rounded-lg md:shadow md:flex-row md:max-w-xl md:my-0  shadow  ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex justify-around ">
        <img
          className={`w-1/2  sm:h-[300px] rounded-lg  md:object-cover  md:h-96  shadow-md  shadow-r-none object-cover ${
            reverse
              ? "rounded-l-none z-0 transform scale-x-[-1] md:scale-x-[1] md:rounded-r-none md:rounded-l-lg"
              : "rounded-r-none"
          }`}
          src={image}
          alt={title}
        />
        <div
          className={`mx-3 w-1/2 flex flex-col gap-3 items-start md:p-4 leading-normal ml-4 ${
            reverse ? "mx-0 z-1 " : ""
          }`}
        >
          <div className="h-[70%] md:h-[80%]">
            <h5 className=" text-2xl font-extrabold tracking-wider  md:font-bold text-gray-700 mb-2 mt-2 md:mt-4">
              {title}
            </h5>
            <p className="mb-6 text-sm md:text-base text-gray-500 tracking-tight md:tracking-normal">
              {description}
            </p>
          </div>
          <Button className="">{action}</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
