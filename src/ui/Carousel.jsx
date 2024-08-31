import Review from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Headline from "./Headline";
import testimonialData from "../data/testimonialData";

function Carousel() {
  return (
    <section className="py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Headline>Listen to our happy clients!</Headline>
        </div>
        <Swiper
          className=""
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          //   breakpoints={{
          //     640: { slidesPerView: 1, spaceBetween: 32 },
          //     768: { slidesPerView: 2, spaceBetween: 32 },
          //     1024: { slidesPerView: 3, spaceBetween: 32 },
          //   }}
        >
          {testimonialData.map((review, i) => (
            <SwiperSlide key={i}>
              <Review
                key={review.name}
                name={review.name}
                testimonial={review.testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Carousel;
