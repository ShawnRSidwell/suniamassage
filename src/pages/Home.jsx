import HomeJumbotron from "../Features/home/HomeJumbotron";
import CallToActionSection from "../ui/CallToActionSection";
import CardGroup from "../ui/CardGroup";
import Carousel from "../ui/Carousel";

function Home() {
  return (
    <section id="home">
      <HomeJumbotron />
      <CardGroup />
      <Carousel />
      <CallToActionSection />
    </section>
  );
}

export default Home;
