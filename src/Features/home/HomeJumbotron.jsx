import Button from "../../ui/Button";
import Headline from "../../ui/Headline";
import Jumbotron from "../../ui/Jumbotron";
function HomeJumbotron() {
  return (
    <Jumbotron image="hand" color="beige">
      <div className="flex flex-col gap-10 ">
        <Headline
          color="text-cPurple-500"
          className="text-4xl font-extrabold tracking-wide leading-none md:text-5xl lg:text-6xl"
        >
          Revitalize Your Soul
        </Headline>
        <p className="text-sm text-white-700 font-light mx-auto lg:text-xl text-justify px-12 tracking-tightest">
          Experience the transformative power of our unique blend of massage
          techniques, designed to melt away stress, rejuvenate your senses, and
          restore balance. From deep tissue therapy to luxurious Ayurvedic
          treatments, let us guide you to a state of deep relaxation and
          holistic wellness.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Button
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-lg tracking-widest font-medium text-center text-white rounded-lg bg-cPurple-500"
          >
            Schedule Now
          </Button>
        </div>
      </div>
    </Jumbotron>
  );
}

export default HomeJumbotron;
