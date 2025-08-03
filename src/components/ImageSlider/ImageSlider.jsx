import React, { useEffect, useState, useRef } from "react";
import "./ImageSlider.css";

import gsap from "gsap";

import image1 from "../../assets/slider-images/clothes_1.jpg";
import image2 from "../../assets/slider-images/clothes_2.jpg";
import image3 from "../../assets/slider-images/clothes_3.jpg";
import image4 from "../../assets/slider-images/clothes_4.jpg";
import image5 from "../../assets/slider-images/clothes_5.jpg";
import image6 from "../../assets/slider-images/clothes_6.jpg";

const imageArray = [image1, image2, image3, image4, image5, image6];

export default function ImageSlider() {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageArray.length - 1);

  const middleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [animationDirection, setAnimationDirection] = useState("next");

  useEffect(() => {
    const direction = animationDirection === "next" ? -100 : 100;

    gsap.fromTo(
      middleRef.current,
      { x: direction },
      { x: 0, duration: 0.4, ease: "power2.out" }
    );
    gsap.fromTo(
      leftRef.current,
      { x: direction, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.3 }
    );
    gsap.fromTo(
      rightRef.current,
      { x: direction, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.3 }
    );
  }, [midImage, animationDirection]);

  useEffect(() => {
    if (midImage === 0) {
      setLeftImage(imageArray.length - 1);
      setRightImage(1);
    } else if (midImage === imageArray.length - 1) {
      setRightImage(0);
      setLeftImage(midImage - 1);
    } else {
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
    }
  }, [midImage]);

  const Increment = () => {
    setAnimationDirection("next");
    setMidImage((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
  };

  const Decrement = () => {
    setAnimationDirection("prev");
    setMidImage((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
  };

  return (
    <div className="image-slider">
      <div className="image-slider__track">
        <img
          ref={leftRef}
          src={imageArray[leftImage]}
          className="image-slider__image image-slider__image--left"
          alt=""
        />
        <img
          ref={middleRef}
          src={imageArray[midImage]}
          className="image-slider__image image-slider__image--middle"
          alt=""
        />

        <img
          ref={rightRef}
          src={imageArray[rightImage]}
          className="image-slider__image image-slider__image--right"
          alt=""
        />
      </div>
      <div className="image-slider__controls">
        <button onClick={Decrement} className="image-slider__button ">
          <svg
            fill="#000000"
            width="50px"
            height="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.293,12.707a1,1,0,0,1-.216-.325.986.986,0,0,1,0-.764,1,1,0,0,1,.216-.325l8-8a1,1,0,1,1,1.414,1.414L4.414,11H22a1,1,0,0,1,0,2H4.414l6.293,6.293a1,1,0,0,1-1.414,1.414Z" />
          </svg>
        </button>

        <button onClick={Increment} className="image-slider__button">
          <svg
            fill="#000000ff"
            width="50px"
            height="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.707,20.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L13.293,4.707a1,1,0,0,1,1.414-1.414l8,8a1,1,0,0,1,.216.325.986.986,0,0,1,0,.764,1,1,0,0,1-.216.325Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
