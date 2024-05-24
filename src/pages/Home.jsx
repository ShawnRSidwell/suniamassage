import Card from "../ui/Card";
import ElementCard from "../ui/ElementCard";
import Jumbotron from "../ui/Jumbotron";
import Panel from "../ui/Panel";

function Home() {
  return (
    <section id="home">
      <Jumbotron />
      <div className="py-8 flex flex-col items-center">
        <h1 className="text-3xl mx-3 md:text-4xl font-extrabold tracking-tight uppercase text-gray-700 md:p-4 text-center">
          Harmonize the body and soul with the Elements
        </h1>
        <div className="py-6 flex justify-around md:justify-center md:gap-5 w-11/12 md:w-4/6  md:py-3 ">
          <ElementCard headline="Air" image="/air-element.png">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            eligendi. Architecto ad quis aut optio. Non, quod enim! Earum maxime
            fugiat ratione nisi.
          </ElementCard>
          <ElementCard headline="Earth" image="/earth-element.png">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            eligendi. Architecto ad quis aut optio. Non, quod enim! Earum maxime
            fugiat ratione nisi.
          </ElementCard>
          <ElementCard headline="Water" image="/water-element.png">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            eligendi. Architecto ad quis aut optio. Non, quod enim! Earum maxime
            fugiat ratione nisi.
          </ElementCard>
        </div>
        <div className="flex  justify-around md:justify-center  w-2/3  md:gap-5 md:w-4/6  py-3">
          <ElementCard headline="Fire" image="/fire-element.png">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            eligendi. Architecto ad quis aut optio. Non, quod enim! Earum maxime
            fugiat ratione nisi.
          </ElementCard>
          <ElementCard headline="Space" image="/space-element.png">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            eligendi. Architecto ad quis aut optio. Non, quod enim! Earum maxime
            fugiat ratione nisi.
          </ElementCard>
        </div>
      </div>
      <div className="mx-3 md:flex md:gap-5 md:my-3 md:items-center md:justify-center">
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
      <div className="my-6 relative flex flex-col justify-center items-center md:py-24 md:my-12">
        <hr className="border-[#60A76F] w-5/6 md:hidden" />
        <img
          src="blue-flowers-oils-above.jpg"
          alt="blue flowers and oil"
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-50 "
        />
        <Panel
          headline="Find The New You"
          buttonText="Schedule Appointment"
          className="mb-5 relative z-10"
        >
          <p>For Consultations, Body Therapies and Energetic Coaching</p>
        </Panel>
        <hr className="border-[#60A76F] w-5/6 md:hidden" />
      </div>
    </section>
  );
}

export default Home;
