import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/employerAVATAR.png";
import AVT2 from "../../assets/employee-business-icon.jpg";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Hauftman Itay",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil",
  },
  {
    avatar: AVT2,
    name: "Matrix",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil",
  },
  {
    avatar: AVT1,
    name: "Qelos",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Employers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        /* install Swiper modules  */
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="employer__avatar">
                <img src={avatar} />
              </div>
              <h5 className="employee__name">{name}</h5>
              <small className="employee__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
