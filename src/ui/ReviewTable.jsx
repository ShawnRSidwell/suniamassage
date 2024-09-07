import testimonialData from "../data/testimonialData";
import Container from "./Container";

// Review component
const ReviewCard = ({ review }) => (
  <div className="w-full md:w-[33dvh] mx-auto rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-800 font-light mb-6 shadow-lg hover:bg-white">
    <div className="w-full flex mb-4 items-center">
      {/* <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
        <img src={review.avatar} alt={review.name} />
      </div> */}
      <div className="flex-grow ">
        <h6 className="font-bold text-sm uppercase text-gray-600 tracking-wide">
          {review.name}
        </h6>
      </div>
    </div>
    <div className="w-full">
      <p className="text-sm leading-tight tracking-wider font-semibold italic text-gray-400 ml-1">
        &quot;{review.testimonial}&quot;
      </p>
    </div>
  </div>
);

// Main component
const ReviewTable = () => {
  return (
    <div className="flex items-center justify-center bg-cPurple-600 py-5 md:py-12">
      <Container className="p-4 md:p-8">
        <div className=" flex items-center justify-center py-7 bg-white rounded-2xl shadow-lg px-4 ">
          <div className="w-full text-gray-800">
            <div className="w-full max-w-6xl mx-auto">
              <div className="text-center max-w-xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-5 text-gray-600 md:mt-5">
                  What Clients <br />
                  Are Saying.
                </h2>
                <hr className="border-[#60A76F] border-2 my-5" />
                <h3 className="text-xl mb-5 font-light">
                  Hear from our clients about the unique experience and healing
                  treatments we&apos;ve provided.
                </h3>
              </div>
              <div className="-mx-3 md:grid md:grid-cols-3 items-start md:mt-12">
                {testimonialData.map((review, index) => (
                  <div className="px-3 md:w-1/3" key={index}>
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewTable;
