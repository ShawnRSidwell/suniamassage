import { Helmet } from "react-helmet";
import HomeJumbotron from "../Features/home/HomeJumbotron";
import CallToActionSection from "../ui/CallToActionSection";
import CardGroup from "../ui/CardGroup";
import Carousel from "../ui/Carousel";

function Home() {
  return (
    <section id="home">
      <Helmet>
        <title>Home | Ayurveda Services</title>
        <meta
          name="description"
          content="Explore our methods for Ayurvedic massage services."
        />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Ayurveda, Ayurvedic massage, wellness, healing, natural therapy, holistic health, massage therapy, Ayurvedic treatments, stress relief, relaxation, detox, body massage, Ayurvedic oils, aromatherapy, rejuvenation, healing touch, ancient healing, Ayurvedic healing, holistic wellness, Ayurvedic bodywork, herbal treatments, energy healing, Ayurvedic spa, Ayurvedic therapy, Ayurvedic wellness, Ayurveda for pain relief, Ayurveda for stress, relaxation techniques, Ayurvedic practitioners, deep tissue massage, lymphatic drainage, Ayurvedic medicine, Panchakarma, Vata, Pitta, Kapha, Ayurveda for digestion, Ayurvedic detox, Ayurveda for immunity, rejuvenation massage, therapeutic massage, pain management, Ayurvedic beauty treatments, Ayurvedic skincare, personalized wellness plans, Ayurvedic herbs, Ayurveda for anxiety, Ayurvedic therapies for sleep, Ayurvedic massage for headaches, Ayurvedic remedies, healing massage, holistic therapy, Ayurveda consultation, Ayurvedic lifestyle, Ayurveda consultation online"
        />
      </Helmet>
      <HomeJumbotron />
      <CardGroup />
      <Carousel />
      <CallToActionSection />
    </section>
  );
}

export default Home;
