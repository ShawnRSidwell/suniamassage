import Icon from "../../ui/Icon";
import LargeCard from "../../ui/FeatureCard";
import FeatureCard from "../../ui/FeatureCard";
import { FaHeadSideVirus } from "react-icons/fa";
import { TbMoodSick } from "react-icons/tb";
import { MdSick } from "react-icons/md";
import { IoBody } from "react-icons/io5";

function BenefitsCard() {
  return (
    <FeatureCard
      headline="Benefits from Ayurveda Massage"
      image="/chest-massage.png"
      alt="Large massage picture"
    >
      <p className="w-11/12 py-2 md:py-5 text-gray-700">
        Ayurveda Massage offers a multitude of benefits by balancing the
        body&apos;s energy systems and promoting overall well-being. This
        ancient therapy helps alleviate stress and tension by incorporating
        rhythmic strokes and therapeutic techniques that induce deep relaxation.
        Regular sessions can enhance circulation, improve flexibility, and boost
        immune function. Additionally, Ayurveda Massage supports mental clarity
        and emotional balance, making it a holistic approach to managing modern
        life&apos;s demands. Experience a revitalizing effect that touches every
        aspect of your health and wellness.
      </p>
      <p className="w-11/12 py-3 md:py-7 text-2xl tracking-wider font-semibold text-gray-600">
        Relief from the following:
      </p>
      <div className="flex justify-around md:gap-3 md:mx-16 text-gray-800 md:mb-0 mb-8">
        <Icon icon={FaHeadSideVirus} size="3em">
          Stress
        </Icon>
        <Icon icon={TbMoodSick} size="3em">
          Anxiety
        </Icon>
        <Icon icon={IoBody} size="3em">
          Aches
        </Icon>
      </div>
    </FeatureCard>
  );
}

export default BenefitsCard;
