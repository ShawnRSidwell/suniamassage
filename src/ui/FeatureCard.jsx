import Headline from "./Headline";

function FeatureCard({ headline, image, alt, reverse = false, children }) {
  return (
    <div
      className={`mx-3 md:mx-auto md:grid md:grid-cols-8 max-w-screen-2xl md:py-12 md:px-14 bg-white rounded ${
        reverse ? "md:grid-cols-8 md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`md:col-span-5 ${reverse ? "order-2 md:ml-8" : "order-1"} `}
      >
        <Headline>{headline}</Headline>
        <hr className="border-[#60A76F] border-2 w-1/4 my-3 md:my-5" />
        {children}
      </div>

      <img
        className={`hidden md:col-span-3 md:h-full md:block md:object-cover ${
          reverse ? "rounded-l" : "rounded-r"
        } ${reverse ? "order-1" : "order-2"}`}
        src={image}
        alt={alt}
      />
    </div>
  );
}

export default FeatureCard;
