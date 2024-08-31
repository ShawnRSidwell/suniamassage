import Headline from "./Headline";
import PricingCard from "./PricingCard";

function PricingCardGroup() {
  return (
    <div className="p-5 md:mb-5 max-w-screen-lg md:mx-auto border-2 mx-3 md:border-0">
      <Headline className="text-center">Standard Massage Pricing</Headline>
      <p className="text-center md:my-5 text-gray-500 my-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
        repudiandae doloremque reprehenderit a nostrum necessitatibus sapiente
        voluptatem quibusdam commodi sed neque magnam possimus quas iste quidem,
        soluta sunt voluptate at.
      </p>
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-center items-center">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}

export default PricingCardGroup;
