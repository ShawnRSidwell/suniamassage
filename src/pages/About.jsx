import FurtherReadingList from "../Features/about/FurtherReadingList";
import CallToActionSection from "../ui/CallToActionSection";

import Hero from "../ui/Hero";
import Icon from "../ui/Icon";

import LargeCard from "../ui/LargeCard";

function About() {
  return (
    <section id="about">
      <Hero
        headline="Welcome to my spiritual journey"
        image="/LinkedInPhoto Final.jpg"
      >
        <p className="leading-5 md:leading-8">
          I graduated from East West College of the Healing Arts in 2023 with
          800 hours of in depth learning of Anatomy, Physiology and Pathology,
          Kinesiology, Western and Eastern massage modalities. I learned
          Ayurvedic bodywork from Debbie Anne Taylor. I enjoy offering my
          clients a reprieve from daily stressors and being a key component of
          their wellness management routine. I especially love offering the
          Ayurvedic body treatment because of its unique ability to transform
          and heal the body mind and spirit.
        </p>
        <p className="leading-5 md:leading-8">
          The first time I experienced the healing quality of the herb-infused
          oil penetrating my skin, I felt instantly grounded in a way I had
          “forgotten” was possible. It was a soul recognition and realization of
          a deep sense of calm I had been longing for. I began to offer myself
          self massage (Abhyanga) nearly daily and it made a noticeable shift in
          the way I showed up in the world. Not only did I feel connected, I
          felt the oil also offered me a protective layer from external toxins
          (both physical and emotional) as I participated in my daily
          activities. It also brought a suppleness and softness to my skin
          through its hydrating effects. I simply cannot say enough about the
          incredible ways Abhyanga has illuminated and transformed my being.
        </p>
      </Hero>
      <div className="">
        <LargeCard
          headline="My Approach to Ayurvedic Body Treatment"
          image="/massage-jumbo.jpg"
          alt="Large massage picture"
        >
          <p className="w-11/12 py-2 md:py-5 text-gray-700">
            More about the Ayurvedic body treatment (Garshana/Abhyanga/Vishesh).
            This flow is an ancient practice that originated in India. It is a
            full-body treatment which includes the face, scalp and belly. The
            intention is not to focus on specific areas of tension in the body,
            rather it is a wholistic approach. The benefits include improved
            circulation, detoxification, nourishment and overall feeling of
            well-being. The treatment begins with Garshana - using silk gloves
            to exfoliate and prepare the skin for the oil while stimulating the
            lymphatic system. Next is Abhyanga. I apply a generous amount of
            warm, herbal-infused oil onto the skin then rhythmically massage
            with gentle friction to encourage absorption. The long strokes along
            the bones and circular attention to joints also invite unbalanced
            wind (Vata) to exit the body. The final part is Vishesh which begins
            with placing hot towels on the skin, to encourage deeper penetration
            of the oil. Then, I implement massage techniques to invite deep
            absorption of the oil into the tissues, facilitating healing at a
            cellular level. s
          </p>
        </LargeCard>
        <LargeCard
          headline="Benefits from Ayurveda Massage"
          image="/massage-jumbo.jpg"
          alt="Large massage picture"
        >
          <p className="w-11/12 py-2 md:py-5 text-gray-700">
            Ayurveda Massage offers a multitude of benefits by balancing the
            body&apos;s energy systems and promoting overall well-being. This
            ancient therapy helps alleviate stress and tension by incorporating
            rhythmic strokes and therapeutic techniques that induce deep
            relaxation. Regular sessions can enhance circulation, improve
            flexibility, and boost immune function. Additionally, Ayurveda
            Massage supports mental clarity and emotional balance, making it a
            holistic approach to managing modern life&apos;s demands. Experience
            a revitalizing effect that touches every aspect of your health and
            wellness.
          </p>
          <p className="w-11/12 py-3 md:py-7 text-2xl tracking-wider font-semibold text-gray-600">
            Relief from the following:
          </p>
          <div className="flex justify-around h-full md:gap-3 md:mx-16 text-gray-800">
            <Icon size="3em">Stress</Icon>
            <Icon size="3em">Aches</Icon>
            <Icon size="3em">Anxiety</Icon>
          </div>
        </LargeCard>
      </div>
      <FurtherReadingList />
      <CallToActionSection />
      <hr className="border-[#60A76F] w-5/6 md:hidden mx-auto" />
    </section>
  );
}

export default About;
