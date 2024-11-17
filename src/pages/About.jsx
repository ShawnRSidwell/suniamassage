import { Helmet } from "react-helmet";
import AboutHero from "../Features/about/AboutHero";
import ApproachCard from "../Features/about/ApproachCard";
import BenefitsCard from "../Features/about/BenefitsCard";
import FurtherReadingList from "../Features/about/FurtherReadingList";
import CallToActionSection from "../ui/CallToActionSection";

function About() {
  return (
    <section id="about" className="flex flex-col gap-6 md:gap-12">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>About | Ayurveda Services</title>
        <meta
          name="description"
          content="Meet the owner and learn her treatment methods"
        />
        <meta
          name="keywords"
          content="Ayurveda, Ayurvedic massage, wellness, healing, natural therapy, holistic health, massage therapy, Ayurvedic treatments, stress relief, relaxation, detox, body massage, Ayurvedic oils, aromatherapy, rejuvenation, healing touch, ancient healing, Ayurvedic healing, holistic wellness, Ayurvedic bodywork, herbal treatments, energy healing, Ayurvedic spa, Ayurvedic therapy, Ayurvedic wellness, Ayurveda for pain relief, Ayurveda for stress, relaxation techniques, Ayurvedic practitioners, deep tissue massage, lymphatic drainage, Ayurvedic medicine, Panchakarma, Vata, Pitta, Kapha, Ayurveda for digestion, Ayurvedic detox, Ayurveda for immunity, rejuvenation massage, therapeutic massage, pain management, Ayurvedic beauty treatments, Ayurvedic skincare, personalized wellness plans, Ayurvedic herbs, Ayurveda for anxiety, Ayurvedic therapies for sleep, Ayurvedic massage for headaches, Ayurvedic remedies, healing massage, holistic therapy, Ayurveda consultation, Ayurvedic lifestyle, Ayurveda consultation online"
        />
      </Helmet>
      <AboutHero />
      <ApproachCard />
      <BenefitsCard />
      <FurtherReadingList />
      <CallToActionSection />
    </section>
  );
}

export default About;
