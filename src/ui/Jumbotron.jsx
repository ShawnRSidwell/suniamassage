import Button from "./Button";

function Jumbotron() {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('/hand-massage.jpg')] bg-top flex flex-col">
      <div className=" text-center w-full h-[75dvh] flex justify-center items-center">
        <div className="bg-cBeige-400 w-3/4 rounded-3xl p-6 bg-opacity-85 shadow-lg">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-cPurple-400 md:text-5xl lg:text-6xl">
            Sunia Massage
          </h1>
          <p className="mb-8 text-sm font-normal  lg:text-xl sm:px-16 lg:px-48 text-justify">
            My goal is to create harmony and balance in your body and mind using
            a blend of Swedish massage, myofascial release, trigger point
            therapy, and deep tissue massage. In addition to my unique massage,
            I specialize in Ayurvedic body treatments - a specific blend of
            exfoliation (lymph stimulation), applying a generous amount of warm
            herbal-infused oil to the skin, using hot towels to penetrate the
            oil deep into the tissue and finally massaging the oil even deeper
            bringing multi-layered healing. I also do mobile massage by request.
          </p>
          <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48 hidden lg:block text-justify">
            Massage has been proven to increase oxytocin, dopamine, and
            serotonin - hormones that encourage serenity. It activates the
            parasympathetic nervous system and brings about deep relaxation,
            which leads to an increase in physical, emotional, energetic, and
            spiritual well-being.{" "}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Button
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-cPurple-400"
            >
              Book a massage
            </Button>
            {/* <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium   bg-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
