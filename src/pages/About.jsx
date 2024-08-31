import CallToActionSection from "../ui/CallToActionSection";
import FurtherReadingList from "../ui/FurtherReadingList";
import Headline from "../ui/Headline";
import Hero from "../ui/Hero";
import Icon from "../ui/Icon";
import Jumbotron from "../ui/Jumbotron";
import LargeCard from "../ui/LargeCard";
import Table from "../ui/Table";

function About() {
  return (
    <section id="about">
      <Hero
        headline="Welcome to my spiritual journey"
        image="/LinkedInPhoto Final.jpg"
      >
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
      <div className="md:py-9 max-w-screen-xl mx-auto">
        <Headline className="mx-3 text-center">
          What Is Ayurveda Massage?
        </Headline>
        <hr className="border-[#60A76F] w-1/3 mx-auto border-2 my-3" />
        <p className="md:max-w-screen-2xl mx-auto px-4 text-gray-600">
          Ayurveda Massage is a traditional therapy rooted in the ancient
          Ayurvedic system of healing, which originated in India over 5,000
          years ago. This holistic practice aims to restore balance and harmony
          within the body, mind, and spirit. By using a combination of rhythmic
          strokes, herbal oils, and therapeutic techniques, Ayurveda Massage
          helps to detoxify the body, improve circulation, and enhance overall
          well-being.
          <img
            src="doshas.PNG"
            alt="Doshas"
            className="md:w-[500px] md:h-[400px] mx-auto my-4"
          />
          During an Ayurveda Massage, specific oils are chosen based on an
          individual&apos;s dosha—one of the three vital energies (Vata, Pitta,
          Kapha) that govern our physical and mental processes. Each dosha
          represents a combination of the five elements (earth, water, fire,
          air, and space), and the massage techniques are tailored to balance
          these elements in the body.
          <br />
          <br />
          The therapeutic benefits of Ayurveda Massage include reduced stress,
          improved digestion, enhanced immunity, and better sleep quality. This
          ancient practice not only promotes relaxation but also supports the
          body&apos;s natural healing processes, making it a valuable tool for
          maintaining health and wellness.
        </p>
        <Table />
      </div>
      <div className="md:bg-gradient-to-r from-[#938ccf] to-[#b0a4e3] md:bg-[#938ccf] my-9">
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
