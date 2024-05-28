import Headline from "./Headline";
import Icon from "./Icon";

function LargeCard() {
  return (
    <div className="mx-3 md:mx-auto md:grid md:grid-cols-8 max-w-screen-2xl h-[75dvh] md:py-16">
      <div className="md:col-span-5 ">
        <Headline>Benefits from using ayurveda</Headline>
        <hr className="border-[#60A76F] border-2 w-1/4 my-3 md:my-5" />
        <p className="w-11/12 py-2 md:py-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas
          delectus perspiciatis iste eius vitae aspernatur ut numquam est
          tempore dolorem, eaque, impedit distinctio laborum animi autem magnam,
          ipsa libero!
        </p>
        <p className="w-11/12 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas
          delectus perspiciatis iste eius vitae aspernatur ut numquam est
          tempore dolorem, eaque, impedit distinctio laborum animi autem magnam,
          ipsa libero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos voluptas delectus perspiciatis iste eius vitae aspernatur ut
          numquam est tempore dolorem, eaque, impedit distinctio laborum animi
          autem magnam, ipsa libero!
        </p>
        <p className="w-11/12 py-3 md:py-7 text-2xl tracking-wider font-semibold text-gray-600">
          Relief from the following:
        </p>
        <div className="flex justify-around h-full  md:gap-3 md:mx-16 text-gray-800">
          <Icon size="3em"> Stress</Icon>
          <Icon size="3em"> Aches</Icon>
          <Icon size="3em">Anxiety</Icon>
        </div>
      </div>

      <img
        className="hidden md:col-span-3 md:h-full md:block md:object-cover"
        src="/massage-jumbo.jpg"
        alt="ayurveda elements"
      />
    </div>
  );
}

export default LargeCard;
