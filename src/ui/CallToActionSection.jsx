import Panel from "./Panel";

function CallToActionSection() {
  return (
    <section
      id="callToAction"
      className="my-6 relative flex flex-col justify-center items-center md:py-24 md:my-12"
    >
      {/* <hr className="border-[#60A76F] w-5/6 md:hidden" /> */}
      <img
        src="blue-flowers-oils-above.jpg"
        alt="blue flowers and oil"
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-50 "
      />
      <Panel
        headline="Take Your next step toward Wellness"
        buttonText="Schedule Appointment"
        className="mb-5 relative z-10"
      ></Panel>
      <hr className="border-cGreen-400 w-5/6 md:hidden" />
    </section>
  );
}

export default CallToActionSection;
