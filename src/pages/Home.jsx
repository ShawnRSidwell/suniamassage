import Card from "../ui/Card";
import ElementCard from "../ui/ElementCard";
import Jumbotron from "../ui/Jumbotron";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center gap-3"
    >
      <Jumbotron />
      <div className="py-4 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold tracking-tight uppercase text-gray-700 p-4">
          Harmonize the body and the soul with the Elements
        </h1>
        <div className="flex justify-center w-4/6 flex-wrap">
          <ElementCard />
          <ElementCard />
          <ElementCard />
          <ElementCard />
          <ElementCard />
        </div>
      </div>
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
      <hr className="border-[#60A76F] w-11/12 md:hidden" />
      {/* <Panel headline="book an appointment" buttonText="Schedule Appointment">
        For Consultations, Body Therapies and Energetic Coaching
      </Panel> */}
    </section>
  );
}

export default Home;
