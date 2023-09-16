import React from "react";
import TestimonialCard from "./TestimonialCard";
import { reviews } from "../../Data/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <div className="container">
      <div className="testimonial py-[50px] px-[5px]s">
        <h1 className="heading text-center mb-[2rem]">TESTIMONIALS</h1>
        <div className="">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <TestimonialCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
