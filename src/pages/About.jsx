import AboutHero from "../Features/about/AboutHero";
import ApproachCard from "../Features/about/ApproachCard";
import BenefitsCard from "../Features/about/BenefitsCard";
import FurtherReadingList from "../Features/about/FurtherReadingList";
import CallToActionSection from "../ui/CallToActionSection";

function About() {
  return (
    <section id="about" className="flex flex-col gap-6 md:gap-12">
      <AboutHero />
      <ApproachCard />
      <BenefitsCard />
      <FurtherReadingList />
      <CallToActionSection />
    </section>
  );
}

export default About;
