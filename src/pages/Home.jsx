import CallToActionSection from "../ui/CallToActionSection";
import CardGroup from "../ui/CardGroup";
import Carousel from "../ui/Carousel";

import Jumbotron from "../ui/Jumbotron";

function Home() {
  return (
    <section id="home">
      <Jumbotron />
      <CardGroup />
      <Carousel />
      <CallToActionSection />
    </section>
  );
}

export default Home;
