import Card from "../ui/Card";
import Carousel from "../ui/Carousel";
import ElementCard from "../ui/ElementCard";
import Elements from "../ui/Elements";
import Headline from "../ui/Headline";
import Jumbotron from "../ui/Jumbotron";
import Panel from "../ui/Panel";

function Home() {
  return (
    <section id="home">
      <Jumbotron />

      <div className="mx-3 md:my-9 md:flex md:gap-5 md:items-center md:justify-center">
        <Card image="/green-massage-oil.jpg" title="Meet Your Practictioner">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis
          dolores quis inventore nostrum repellat eligendi.
        </Card>

        <Card
          image="/oil-flowers.jpg"
          title="Explore Our Treatments"
          reverse={true}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis
          dolores quis inventore nostrum repellat eligendi.
        </Card>
        <Card image="/massage-ingredients.jpg" title="Learn Our Methods">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis
          dolores quis inventore nostrum repellat eligendi.
        </Card>
      </div>
      <Carousel />
      <div className="my-6 relative flex flex-col justify-center items-center md:py-24 md:my-12">
        {/* <hr className="border-[#60A76F] w-5/6 md:hidden" /> */}
        <img
          src="blue-flowers-oils-above.jpg"
          alt="blue flowers and oil"
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-50 "
        />
        <Panel
          headline="Take the next step to self-care here"
          buttonText="Schedule Appointment"
          className="mb-5 relative z-10"
        >
          <p>For Consultations, Body Therapies and Energetic Coaching</p>
        </Panel>
        <hr className="border-cGreen-400 w-5/6 md:hidden" />
      </div>
    </section>
  );
}

export default Home;
