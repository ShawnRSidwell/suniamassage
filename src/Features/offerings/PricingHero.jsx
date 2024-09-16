import Box from "../../ui/Box";
import Button from "../../ui/Button";

function PricingHero() {
  return (
    <section id="pricing">
      <Box headline="Ayurvedic Massage" className="">
        <hr className="border-cGreen-500 border-2 w-1/4 my-1 mb-3" />
        <p className="text-gray-700">
          The clear intention to create balance and harmony in the body, mind
          and spirit will guide each session. This full body treatment will
          elicit a deep relaxation while invigorating and nourishing each cell
          in your body. The organic herbal-infused oil will be chosen to
          optimize the experience of each client individually.
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
            the oil and stimulate lymph
          </li>
          <li>
            Pouring warm oil onto the body and creating friction to encourage
            unbalanced energy to exit the body
          </li>
          <li>
            Driving the oil deep into the tissue using massage techniques to
            encourage deep absorption of oil into the tissues, facilitating
            healing at a cellular level
          </li>
        </ul>
        <div className="py-3">
          <Button className="py-2 font-semibold bg-cGreen-600">
            Click to Schedule
          </Button>
        </div>
      </Box>
    </section>
  );
}

export default PricingHero;
