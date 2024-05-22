import Button from "./Button";

function Jumbotron() {
  return (
    <section className=" bg-cover bg-no-repeat bg-[url('/hand-massage.jpg')] bg-top flex flex-col">
      <div className=" text-center w-full h-[75dvh] flex justify-center items-center">
        <div className="bg-[#DFD4B9] w-3/4 rounded-3xl p-6 bg-opacity-90 shadow-lg">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#60A76F] md:text-5xl lg:text-6xl">
            Lorem ipsum dolor
          </h1>
          <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            delectus vel, ipsa id nihil sapiente nostrum vitae aliquam sit
            tempora, beatae numquam excepturi dolorum, neque autem natus
            voluptas tempore ex.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#60A76F] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Book a massage
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  // stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium   bg-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
