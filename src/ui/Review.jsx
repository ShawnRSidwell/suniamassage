function Review({ name, testimonial }) {
  return (
    <div className="group bg-white  rounded-xl transition-all duration-500 w-full mx-auto ">
      <section className="bg-white ">
        <div className="max-w-screen-xl px-4 py-4 mx-auto text-center  lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <div className="flex">
              <div className="flex items-start">
                <svg
                  className="h-4 md:h-6 md:mr-5 mr-2  text-gray-400"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <blockquote>
                <p className="text-sm tracking-tighter text-gray-500 md:text-base ">
                  {testimonial}
                </p>
              </blockquote>
              <div className="flex items-start">
                <svg
                  className="h-4 md:h-6 md:ml-5 ml-2  text-gray-400"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <figcaption className="flex items-center justify-center mt-2 md:mt-3 space-x-3">
              <div className="flex items-center  divide-gray-500 mb-2 md:mb-5">
                <div className="pr-3 font-medium text-gray-900 ">{name}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Review;
