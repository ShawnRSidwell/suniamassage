import Panel from "./Panel";

function CallToActionSection() {
  return (
    <div className="my-6 relative flex flex-col justify-center items-center md:py-24 md:my-12">
      {/* <hr className="border-[#60A76F] w-5/6 md:hidden" /> */}
      <img
        src="blue-flowers-oils-above.jpg"
        alt="blue flowers and oil"
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-50 "
      />
      <Panel
        headline="Take the next step to self-care here"
        buttonText="Schedule Appointment"
        className="mb-5 relative z-10"
      >
        <p>For Consultations, Body Therapies and Energetic Coaching</p>
      </Panel>
      <hr className="border-cGreen-400 w-5/6 md:hidden" />
    </div>
  );
}

export default CallToActionSection;
