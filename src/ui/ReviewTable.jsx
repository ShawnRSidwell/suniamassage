import React from "react";
import Headline from "./Headline";

// Review component
const ReviewCard = ({ review }) => (
  <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
    <div className="w-full flex mb-4 items-center">
      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
        <img src={review.avatar} alt={review.name} />
      </div>
      <div className="flex-grow pl-3">
        <h6 className="font-bold text-sm uppercase text-gray-600">
          {review.name}
        </h6>
      </div>
    </div>
    <div className="w-full">
      <p className="text-sm leading-tight">
        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
        {review.text}
        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
      </p>
    </div>
  </div>
);

// Main component
const ReviewTable = () => {
  const reviews = [
    {
      name: "Kenzie Edgar",
      avatar: "https://i.pravatar.cc/100?img=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
    },
    {
      name: "Stevie Tifft",
      avatar: "https://i.pravatar.cc/100?img=2",
      text: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
    },
    {
      name: "Tommie Ewart",
      avatar: "https://i.pravatar.cc/100?img=3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.",
    },
    {
      name: "Charlie Howse",
      avatar: "https://i.pravatar.cc/100?img=4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.",
    },
    {
      name: "Nevada Herbertson",
      avatar: "https://i.pravatar.cc/100?img=5",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!",
    },
    {
      name: "Kris Stanton",
      avatar: "https://i.pravatar.cc/100?img=6",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css');
      `}</style>
      <div className=" flex items-center justify-center py-5">
        <div className="w-full text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                What people <br />
                are saying.
              </h2>
              <hr className="border-[#60A76F] border-2 my-5 w" />
              <h3 className="text-xl mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>

            <div className="-mx-3 md:flex items-start">
              {reviews.map((review, index) => (
                <div className="px-3 md:w-1/3" key={index}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Buy Me a Beer Section */}
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              alt="Buy me a beer"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ReviewTable;
