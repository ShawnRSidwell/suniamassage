import Box from "../ui/Box";
import Button from "../ui/Button";
import Headline from "../ui/Headline";
import PricingCard from "../ui/PricingCard";

function Offerings() {
  return (
    <section id="Offerings">
      <h1 className=" text-[3em] md:text-[5em] font-thin tracking-tight text-center uppercase w-full font-serif -ml-3 ">
        <span className="font-normal tracking-[-15px] mx-5">---------</span>
        Offerings
        <span className="font-normal tracking-[-15px] mx-5">---------</span>
      </h1>

      <Box headline="Ayurvedic Massage" className="">
        <hr className="border-cGreen-400 border-2 w-1/4 my-1 mb-3" />
        <p className="text-gray-700">
          This is a full body treatment including scalp and belly. It is not
          going to treat specific areas of tension in the body, but is rather a
          wholistic approach. There will be ALOT of warm oil poured on your
          body. You will be appropriately draped (breasts and gluteal cleft
          covered) at all times but it may feel minimal. It is recommended to
          not wear any undergarments for the ideal treatment. Of course all of
          this can be modified to suit your comfort level.
        </p>
        <div className="flex items-baseline text-gray-900 my-3 mt-5 ">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">150</span>
          <span className="ms-1 text-xl font-normal text-gray-500 ">
            /2 hour session
          </span>
        </div>
        <h1 className="font-bold tracking-wider my-2">Session Consists of:</h1>
        <ul className="text-left list-disc ml-5 my-2 text-gray-700 text-sm md:text-base tracking-tight">
          <li>
            Exfoliating the skin with silk gloves to prepare the body to receive
            the oil and stimulate lymph.
          </li>
          <li>
            Pouring warm oil onto the body and creating friction to remove
            unbalanced “vata”.
          </li>
          <li>
            Driving the oil deep into the tissue using massage techniques to
            encourage deep absorption of oil into the tissues, facilitating
            healing at a cellular level.
          </li>
        </ul>
        <Button className="py-2 font-semibold my-3 ">Click to Schedule</Button>
      </Box>
      <div className="p-5 md:mb-5 max-w-screen-lg md:mx-auto border-2 mx-3 md:border-0">
        <Headline className="text-center">Standard Massage Pricing</Headline>
        <p className="text-center md:my-5 text-gray-500 my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          repudiandae doloremque reprehenderit a nostrum necessitatibus sapiente
          voluptatem quibusdam commodi sed neque magnam possimus quas iste
          quidem, soluta sunt voluptate at.
        </p>
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-center items-center">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
      <hr className="border-cGreen-500 w-5/6 my-5 mx-auto " />
    </section>
  );
}

export default Offerings;
