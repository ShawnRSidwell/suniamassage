import Card from "../ui/Card";
import Jumbotron from "../ui/Jumbotron";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center gap-3"
    >
      <Jumbotron />
      <div className="md:flex md:gap-5 md:my-3">
        <Card image="/green-massage-oil.jpg" title="Explore Our Treatments">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis
          dolores quis inventore nostrum repellat eligendi a, nesciunt cum sunt
          nisi ipsum quia ipsam, maxime distinctio animi corporis aliquid
          labore.
        </Card>
        <Card image="/massage-ingredients.jpg" title="Learn Our Methods">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis
          dolores quis inventore nostrum repellat eligendi a, nesciunt cum sunt
          nisi ipsum quia ipsam, maxime distinctio animi corporis aliquid
          labore.
        </Card>
        <Card image="/oil-flowers.jpg" title="Explore Our Treatments">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis
          dolores quis inventore nostrum repellat eligendi a, nesciunt cum sunt
          nisi ipsum quia ipsam, maxime distinctio animi corporis aliquid
          labore.
        </Card>
      </div>
    </section>
  );
}

export default Home;
