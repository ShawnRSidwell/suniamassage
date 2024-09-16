import Headline from "../../ui/Headline";
import PricingCard from "./PricingCard";
import pricing from "../../data/Pricing";

function PricingCardGroup() {
  return (
    <div className="p-5 md:mb-5 max-w-screen-lg md:mx-auto border-2 mx-3 md:border-0">
      <Headline className="text-center">
        Explore Our Additional Offerings
      </Headline>
      <p className="text-justify md:text-center md:my-5 text-gray-500 my-3">
        Our Standard Massage options offer a range of relaxation and therapeutic
        benefits tailored to your needs. Each session is designed to provide
        deep relaxation and relieve tension, with varying durations to suit your
        schedule. Choose from our 60, 75 or 90 minute sessions to experience our
        unique blend of Swedish massage, myofascial release, trigger point
        therapy and deep tissue massage to bring targeted relief. Each session
        will address your body as a whole. Choosing longer massages will create
        more space to address specific areas of focus. My approach is customized
        to meet the unique needs of each client.
      </p>
      <div className="flex flex-col gap-3 md:gap-8 md:flex-row justify-center items-center">
        {pricing.map((pricing) => (
          <PricingCard
            key={pricing.price}
            title={pricing.title}
            price={pricing.price}
            time={pricing.time}
          />
        ))}
      </div>
    </div>
  );
}

export default PricingCardGroup;
