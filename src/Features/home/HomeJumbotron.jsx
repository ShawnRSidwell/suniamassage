import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Headline from "../../ui/Headline";
import Jumbotron from "../../ui/Jumbotron";
function HomeJumbotron() {
  return (
    <Jumbotron image="hand" color="beige">
      <Container>
        <div className="flex flex-col gap-4 md:gap-5 bg-white p-12  rounded-lg shadow-lg ">
          <div className="text-center flex justify-center">
            <Headline
              color="text-cPurple-500"
              className="text-4xl font-thin tracking-wider leading-none md:text-5xl lg:text-6xl"
            >
              <p>Relax, Rebalance, Restore</p>
              <hr className="border-4 mt-2 md:mt-3 border-slate-200" />
            </Headline>
          </div>
          <div className="flex flex-col gap-8">
            <p className=" text-base font-light text-slate-500 mx-auto lg:text-2xl md:px-12 tracking-tight text-center font-serif">
              Experience the transformative power of our unique blend of massage
              techniques designed to melt away stress, rejuvenate your senses,
              and restore balance. From Swedish massage to luxurious Ayurvedic
              body treatments, let us guide you to a state of deep relaxation
              and holistic wellness.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Button
                to="https://app.acuityscheduling.com/schedule.php?owner=33772237"
                className="inline-flex justify-center items-center py-3  text-lg tracking-widest font-medium text-center text-white rounded-lg bg-cPurple-500"
              >
                Schedule Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default HomeJumbotron;
