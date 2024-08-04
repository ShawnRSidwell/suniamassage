import ElementCard from "./ElementCard";
import Headline from "./Headline";

function Elements() {
  return (
    <div>
      <div className="py-8 flex flex-col items-center my-7">
        <Headline className="mx-3 md:p-4 text-center ">
          Harmonize the body and soul with the five Elements
        </Headline>
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
            eligendi.
          </ElementCard>
          <ElementCard headline="Space" image="/space-element.png">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            eligendi.
          </ElementCard>
        </div>
      </div>
    </div>
  );
}

export default Elements;
