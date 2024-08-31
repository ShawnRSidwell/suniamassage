import CallToActionSection from "../ui/CallToActionSection";
import PricingCardGroup from "../ui/PricingCardGroup";
import PricingHeadline from "../ui/PricingHeadline";
import PricingHero from "../ui/PricingHero";

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