import { Helmet } from "react-helmet";
import CallToActionSection from "../ui/CallToActionSection";

import ReviewTable from "../ui/ReviewTable";

function Reviews() {
  <Helmet>
    <title>Reviews | Ayurveda Services</title>
    <meta name="description" content="Read reviews from our happy clients" />
    <meta charSet="UTF-8" />
    <meta
      name="keywords"
      content="Reviews, Massage reviews, Ayurveda, Ayurvedic massage, wellness, healing, natural therapy, holistic health, massage therapy, Ayurvedic treatments, stress relief, relaxation, detox, body massage, Ayurvedic oils, aromatherapy, rejuvenation, healing touch, ancient healing, Ayurvedic healing, holistic wellness, Ayurvedic bodywork, herbal treatments, energy healing, Ayurvedic spa, Ayurvedic therapy, Ayurvedic wellness, Ayurveda for pain relief, Ayurveda for stress, relaxation techniques, Ayurvedic practitioners, deep tissue massage, lymphatic drainage, Ayurvedic medicine, Panchakarma, Vata, Pitta, Kapha, Ayurveda for digestion, Ayurvedic detox, Ayurveda for immunity, rejuvenation massage, therapeutic massage, pain management, Ayurvedic beauty treatments, Ayurvedic skincare, personalized wellness plans, Ayurvedic herbs, Ayurveda for anxiety, Ayurvedic therapies for sleep, Ayurvedic massage for headaches, Ayurvedic remedies, healing massage, holistic therapy, Ayurveda consultation, Ayurvedic lifestyle, Ayurveda consultation online"
    />
  </Helmet>;
  return (
    <div>
      <ReviewTable />
      <CallToActionSection />
    </div>
  );
}

export default Reviews;
