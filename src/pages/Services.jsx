import Box from "../ui/Box";
import Button from "../ui/Button";
import PricingCard from "../ui/PricingCard";

function Services() {
  return (
    <section id="services">
      <h1 className="text-[5em] font-extrabold tracking-tight text-center leading-none p-2 uppercase">
        Services
      </h1>
      <hr className="border-[#e2dac5] w-1/4 mx-auto  border-4 mb-9" />
      <Box headline="Ayurveda Massage" className="">
        <hr className="border-[#60A76F] border-2 w-1/4 my-1 mb-3" />
        This is a full body treatment including scalp and belly. It is not going
        to treat specific areas of tension in the body, but is rather a
        wholistic approach. There will be ALOT of warm oil poured on your body.
        You will be appropriately draped (breasts and gluteal cleft covered) at
        all times but it may feel minimal. It is recommended to not wear any
        undergarments for the ideal treatment. Of course all of this can be
        modified to suit your comfort level.
        <h1 className="font-bold tracking-wider my-2">Session Consists of:</h1>
        <ul className="text-left list-disc ml-5 my-2">
          <li>
            Exfoliating the skin with silk gloves to prepare the body to receive
            the oil and stimulate lymph
          </li>
          <li>
            Pouring warm oil onto the body and creating friction to remove
            unbalanced “vata”
          </li>
          <li>
            Driving the oil deep into the tissue using massage techniques to
            encourage deep absorption of oil into the tissues, facilitating
            healing at a cellular level.
          </li>
        </ul>
        <Button className="py-2 font-semibold my-3 ">Click to Schedule</Button>
      </Box>

      <PricingCard />
    </section>
  );
}

export default Services;
