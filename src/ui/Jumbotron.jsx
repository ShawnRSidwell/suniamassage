import Button from "./Button";

function Jumbotron() {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('/hand-massage.jpg')] bg-top flex flex-col">
      <div className="text-center w-full h-[75dvh] flex justify-center items-center">
        <div className="bg-cBeige-400 w-3/4 rounded-3xl p-6 bg-opacity-85 shadow-lg">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-cPurple-400 md:text-5xl lg:text-6xl">
            Revitalize Your Body and Mind
          </h1>
          <p className="mb-8 text-sm font-normal lg:text-xl sm:px-16 lg:px-48 text-justify">
            Experience the transformative power of our unique blend of massage
            techniques, designed to melt away stress, rejuvenate your senses,
            and restore balance. From deep tissue therapy to luxurious Ayurvedic
            treatments, let us guide you to a state of deep relaxation and
            holistic wellness.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Button
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-cPurple-400"
            >
              Schedule Your Next Treatment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
// import Button from "./Button";

// function Jumbotron() {
//   return (
//     <section className="bg-cover bg-no-repeat bg-[url('/hand-massage.jpg')] bg-center flex flex-col relative">
//       <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
//       <div className="text-center w-full h-[75dvh] flex justify-center items-center relative">
//         <div className="bg-cBeige-400 w-3/4 max-w-2xl rounded-3xl p-8 bg-opacity-90 shadow-2xl">
//           <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-cPurple-400 md:text-5xl lg:text-6xl">
//             Revitalize Your Body and Mind
//           </h1>
//           <p className="mb-8 text-sm font-medium text-gray-700 lg:text-lg sm:px-8 lg:px-16 text-center">
//             Experience the transformative power of our unique blend of massage techniques, designed to melt away stress, rejuvenate your senses, and restore balance. From deep tissue therapy to luxurious Ayurvedic treatments, let us guide you to a state of deep relaxation and holistic wellness.
//           </p>
//           <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
//             <Button
//               href="#"
//               className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold text-white rounded-full bg-cPurple-400 hover:bg-cPurple-500 transition duration-300 shadow-lg"
//             >
//               Book a Massage
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Jumbotron;
