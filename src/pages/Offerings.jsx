import { Helmet } from "react-helmet";
import PricingCardGroup from "../Features/offerings/PricingCardGroup";
import PricingHeadline from "../Features/offerings/PricingHeadline";
import PricingHero from "../Features/offerings/PricingHero";
import CallToActionSection from "../ui/CallToActionSection";

function Offerings() {
  return (
    <section id="Offerings">
      <Helmet>
        <title>Offerings | Ayurveda Services</title>
        <meta
          name="description"
          content="Explore our pricing plans for Ayurvedic massage services."
        />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Ayurveda, Ayurvedic massage, wellness, healing, natural therapy, holistic health, massage therapy, Ayurvedic treatments, stress relief, relaxation, detox, body massage, Ayurvedic oils, aromatherapy, rejuvenation, healing touch, ancient healing, Ayurvedic healing, holistic wellness, Ayurvedic bodywork, herbal treatments, energy healing, Ayurvedic spa, Ayurvedic therapy, Ayurvedic wellness, Ayurveda for pain relief, Ayurveda for stress, relaxation techniques, Ayurvedic practitioners, deep tissue massage, lymphatic drainage, Ayurvedic medicine, Panchakarma, Vata, Pitta, Kapha, Ayurveda for digestion, Ayurvedic detox, Ayurveda for immunity, rejuvenation massage, therapeutic massage, pain management, Ayurvedic beauty treatments, Ayurvedic skincare, personalized wellness plans, Ayurvedic herbs, Ayurveda for anxiety, Ayurvedic therapies for sleep, Ayurvedic massage for headaches, Ayurvedic remedies, healing massage, holistic therapy, Ayurveda consultation, Ayurvedic lifestyle, Ayurveda consultation online"
        />
      </Helmet>
      <div className="md:bg-cPurple-400 md:py-12 md:px-6">
        <div className="bg-white pt-4 md:w-11/12 rounded-md mx-auto md:py-12 shadow-lg">
          <PricingHero />
          <PricingCardGroup />
        </div>
      </div>
      {/* <div className="md:-mt-12">
        <CallToActionSection />
      </div> */}
      {/* <hr className="border-cGreen-500 w-5/6 my-5 mx-auto " /> */}
    </section>
  );
}

export default Offerings;
