import Email from "../ui/Email";
import Headline from "../ui/Headline";

function Contact() {
  return (
    <div
      id="contact"
      className="bg-gradient-to-r from-[#938ccf] to-[#b0a4e3] md:bg-[#938ccf] py-2 pb-8"
    >
      <section className="gradientbackground p-3 md:pt-10 flex flex-col justify-center items-center">
        <div
          id="contact"
          className="py-8 lg:py-12 px-4 mx-auto max-w-screen-md bg-white rounded-md md:border-[1px]  shadow-xl"
        >
          <Headline className="text-center my-5">
            Schedule a Massage with Me!
          </Headline>

          <p className="mb-8 font-light text-center text-gray-500  sm:text-xl md:size-3/4 md:mx-auto">
            An Ayurvedic massage can offer deep relaxation and rejuvenation,
            which can help to relieve stress and anxiety. Schedule a massage now
            and start living healthier and happier.
          </p>
          <div>
            <Email />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
