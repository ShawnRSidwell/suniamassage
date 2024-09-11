import FeatureCard from "../../ui/FeatureCard";

function ApproachCard() {
  return (
    <section id="approach">
      <FeatureCard
        headline="My Approach to Ayurvedic Body Treatment"
        image="/3-oils.png"
        alt="Large massage picture"
        reverse={true}
      >
        <p className="w-11/12 py-2 md:py-5 text-gray-700">
          The Ayurvedic body treatment (Garshana/Abhyanga/Vishesh) is an ancient
          practice that originated in India as a purification process. The flow
          consists of a head to toe body “polishing” which includes the scalp,
          face and stomach. The intention is not to focus on specific areas of
          tension in the body, rather it is a holistic approach. The benefits
          include stress reduction, improved circulation, sleep, detoxification,
          and creating an overall feeling of serenity. Each personally
          customized session begins with Garshana, where I use silk gloves to
          exfoliate and prepare the skin for the oil while stimulating the
          lymphatic system. Next, Abhyanga includes applying a generous amount
          of warm, herbal-infused oil onto the skin then rhythmically massaging
          with gentle friction to encourage absorption. The long strokes along
          the bones and circular attention to joints invite unbalanced energy to
          exit the body. The third part begins with placing hot towels on the
          skin, to encourage deeper penetration of the oil. Lastly, I implement
          deeper massage techniques, Vishesh, to invite further absorption of
          the oil into the tissues, facilitating healing at a cellular level.
        </p>
        <p className="w-11/12 py-2 md:py-5 text-gray-700">
          Each personally customized session begins with Garshana, where I use
          silk gloves to exfoliate and prepare the skin for the oil while
          stimulating the lymphatic system. Next, Abhyanga includes applying a
          generous amount of warm, herbal-infused oil onto the skin then
          rhythmically massaging with gentle friction to encourage absorption.
          The long strokes along the bones and circular attention to joints
          invite unbalanced energy to exit the body. The third part begins with
          placing hot towels on the skin, to encourage deeper penetration of the
          oil. Lastly, I implement deeper massage techniques, Vishesh, to invite
          further absorption of the oil into the tissues, facilitating healing
          at a cellular level.
        </p>
      </FeatureCard>
    </section>
  );
}

export default ApproachCard;
