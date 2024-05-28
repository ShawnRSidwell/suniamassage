import Headline from "./Headline";
import Icon from "./Icon";

function LargeCard({ headline, image, alt, children }) {
  return (
    <div className="mx-3 md:mx-auto md:grid md:grid-cols-8 max-w-screen-2xl h-[75dvh] md:py-12 md:px-8 bg-white rounded">
      <div className="md:col-span-5 ">
        <Headline>{headline}</Headline>
        <hr className="border-[#60A76F] border-2 w-1/4 my-3 md:my-5" />
        {children}
      </div>

      <img
        className="hidden md:col-span-3 md:h-full md:block md:object-cover rounded-r"
        src={image}
        alt={alt}
      />
    </div>
  );
}

export default LargeCard;
