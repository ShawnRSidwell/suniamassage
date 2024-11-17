import PricingCardGroup from "../Features/offerings/PricingCardGroup";
import PricingHeadline from "../Features/offerings/PricingHeadline";
import PricingHero from "../Features/offerings/PricingHero";
import CallToActionSection from "../ui/CallToActionSection";

function Offerings() {
  return (
    <section id="Offerings">
      {/* <PricingHeadline /> */}
      <div className="md:bg-cPurple-400 md:py-12 md:px-6">
        <div className="bg-white pt-4 md:w-11/12 rounded-md mx-auto md:py-6">
          <PricingHero />
          <PricingCardGroup />
        </div>
      </div>
      <div className="md:-mt-12">
        <CallToActionSection />
      </div>
      {/* <hr className="border-cGreen-500 w-5/6 my-5 mx-auto " /> */}
    </section>
  );
}

export default Offerings;
