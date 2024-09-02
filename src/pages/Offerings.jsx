import PricingCardGroup from "../Features/offerings/PricingCardGroup";
import PricingHeadline from "../Features/offerings/PricingHeadline";
import PricingHero from "../Features/offerings/PricingHero";
import CallToActionSection from "../ui/CallToActionSection";

function Offerings() {
  return (
    <section id="Offerings">
      <PricingHeadline />
      <PricingHero />
      <PricingCardGroup />
      <CallToActionSection />
      <hr className="border-cGreen-500 w-5/6 my-5 mx-auto " />
    </section>
  );
}

export default Offerings;
