import Card from "../ui/Card";
import Jumbotron from "../ui/Jumbotron";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center gap-3"
    >
      <Jumbotron />
      <div className="mx-3 md:flex md:gap-5 md:my-3">
        <Card image="/green-massage-oil.jpg" title="Meet Your Practictioner">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis
          dolores quis inventore nostrum repellat eligendi a, nesciunt cum sunt
          nisi ipsum quia ipsam, maxime distinctio animi corporis aliquid
          labore.
        </Card>

        <Card
          image="/oil-flowers.jpg"
          title="Explore Our Treatments"
          reverse={true}
        >
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
      </div>
      <hr className="border-[#60A76F] w-11/12 " />
    </section>
  );
}

export default Home;
