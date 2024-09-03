import FeatureCard from "../../ui/FeatureCard";
import LargeCard from "../../ui/FeatureCard";

function ApproachCard() {
  return (
    <FeatureCard
      headline="My Approach to Ayurvedic Body Treatment"
      image="/massage-jumbo.jpg"
      alt="Large massage picture"
      reverse={true}
    >
      <p className="w-11/12 py-2 md:py-5 text-gray-700">
        More about the Ayurvedic body treatment (Garshana/Abhyanga/Vishesh).
        This flow is an ancient practice that originated in India. It is a
        full-body treatment which includes the face, scalp and belly. The
        intention is not to focus on specific areas of tension in the body,
        rather it is a wholistic approach. The benefits include improved
        circulation, detoxification, nourishment and overall feeling of
        well-being. The treatment begins with Garshana - using silk gloves to
        exfoliate and prepare the skin for the oil while stimulating the
        lymphatic system. Next is Abhyanga. I apply a generous amount of warm,
        herbal-infused oil onto the skin then rhythmically massage with gentle
        friction to encourage absorption. The long strokes along the bones and
        circular attention to joints also invite unbalanced wind (Vata) to exit
        the body. The final part is Vishesh which begins with placing hot towels
        on the skin, to encourage deeper penetration of the oil. Then, I
        implement massage techniques to invite deep absorption of the oil into
        the tissues, facilitating healing at a cellular level. s
      </p>
    </FeatureCard>
  );
}

export default ApproachCard;
