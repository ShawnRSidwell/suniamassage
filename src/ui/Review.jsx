function Review() {
  return (
    <div className="group bg-white  rounded-xl p-6 transition-all duration-500 w-full mx-auto ">
      <section className="bg-white ">
        <div className="max-w-screen-xl px-4 mx-auto text-center lg:py-8 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-4 mx-auto mb-3 text-gray-400 "
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-base font-medium text-gray-500 ">
                I was welcomed into Zen as I arrived at Megan’s treatment space.
                Peaceful music, light scents and mystical art set the tone for a
                transformative two hour massage. More than a massage, it was a
                spiritual experience and felt like my soul was healing along
                with my body. The luxurious treatment gently but firmly
                addressed tension in every part of my body. She used quality
                oils and warm towels and exfoliated and hydrated my skin while
                relaxing my muscles. I get massages regularly, and this was by
                far one of my favorite treatments. Thank you Megan! Ill be back!
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 ">
                <div className="pr-3 font-medium text-gray-900 ">
                  Deanne Bankhead
                </div>
                {/* <div className="pl-3 text-sm font-light text-gray-500 ">
                  Person
                </div> */}
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Review;
