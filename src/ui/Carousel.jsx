import Review from "./Review";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Headline from "./Headline";

function Carousel() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Headline>What our happy users say!</Headline>
        </div>
        <Swiper
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
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination mt-8"></div>
      </div>
    </section>
  );
}

export default Carousel;
