import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide1 from "../../assets/slider-images/clothes_1.webp";
import Slide2 from "../../assets/slider-images/clothes_2.webp";
import Slide3 from "../../assets/slider-images/clothes_3.webp";
import Slide4 from "../../assets/slider-images/clothes_4.webp";
import Slide5 from "../../assets/slider-images/clothes_5.webp";
import Slide6 from "../../assets/slider-images/clothes_6.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

import "./ImageSlider.css";

const slidesData = [
  {
    imgSrc: Slide1,
    title: "Slide 1 Title",
    description: "Slide 1 Description",
    categories: ["Tag1", "Tag2"],
  },
  {
    imgSrc: Slide2,
    title: "Slide 2 Title",
    description: "Slide 2 Description",
    categories: ["Tag1", "Tag2"],
  },
  {
    imgSrc: Slide3,
    title: "Slide 3 Title",
    description: "Slide 3 Description",
    categories: ["Tag1", "Tag2", "Tag3"],
  },
  {
    imgSrc: Slide4,
    title: "Slide 4 Title",
    description: "Slide 4 Description",
    categories: ["Tag1", "Tag2"],
  },
  {
    imgSrc: Slide5,
    title: "Slide 5 Title",
    description: "Slide 5 Description",
    categories: ["Tag1", "Tag2"],
  },
  {
    imgSrc: Slide6,
    title: "Slide 6 Title",
    description: "Slide 6 Description",
    categories: ["Tag1", "Tag2"],
  },
];

export default function ImageSlider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        spaceBetween={20}
        autoplay
        grabCursor
        initialSlide={2}
        centeredSlides
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              className="slider__image"
              src={slide.imgSrc}
              alt={slide.title}
              loading="lazy"
            />
            <div className="slider__content">
              <div className="slider__header">
                <div className="slider__title">
                  <h1>{slide.title}</h1>
                </div>
                <div className="slider__text-box">
                  <p>{slide.description}</p>
                </div>
              </div>

              <div className="slider__footer">
                <div className="slider__category">
                  {slide.categories.map((category, idx) => (
                    <span key={idx} style={{ "--i": idx + 1 }}>
                      {category}
                    </span>
                  ))}
                </div>
                <button className="slider__button">
                  <span className="slider__label">More...</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
