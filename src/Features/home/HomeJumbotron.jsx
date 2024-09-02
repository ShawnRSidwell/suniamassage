import Button from "../../ui/Button";
import Jumbotron from "../../ui/Jumbotron";
function HomeJumbotron() {
  return (
    <Jumbotron image="[url('/hand-massage.jpg')]" color="cBeige-400">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-cPurple-500 md:text-5xl lg:text-6xl">
        Revitalize Your Soul
      </h1>
      <p className="mb-8 text-sm font-normal lg:text-xl sm:px-16 lg:px-48 text-justify">
        Experience the transformative power of our unique blend of massage
        techniques, designed to melt away stress, rejuvenate your senses, and
        restore balance. From deep tissue therapy to luxurious Ayurvedic
        treatments, let us guide you to a state of deep relaxation and holistic
        wellness.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <Button
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-lg tracking-widest font-medium text-center text-white rounded-lg bg-cPurple-500"
        >
          Schedule Now
        </Button>
      </div>
    </Jumbotron>
  );
}

export default HomeJumbotron;
