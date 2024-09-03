import AboutHero from "../Features/about/AboutHero";
import ApproachCard from "../Features/about/ApproachCard";
import BenefitsCard from "../Features/about/BenefitsCard";
import FurtherReadingList from "../Features/about/FurtherReadingList";
import CallToActionSection from "../ui/CallToActionSection";

function About() {
  return (
    <section id="about" className="flex flex-col gap-6">
      <AboutHero />
      <ApproachCard />
      <BenefitsCard />
      <FurtherReadingList />
      <CallToActionSection />
      <hr className="border-[#60A76F] w-5/6 md:hidden mx-auto" />
    </section>
  );
}

export default About;
