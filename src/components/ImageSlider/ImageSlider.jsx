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
  const [indexes, setIndexes] = useState({
    mid: 0,
    left: imageArray.length - 1,
    right: 1,
  });

  const middleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [animationDirection, setAnimationDirection] = useState("next");

  useEffect(() => {
    const direction = animationDirection === "next" ? -100 : 100;

    gsap.killTweensOf([middleRef.current, leftRef.current, rightRef.current]);

    gsap.fromTo(middleRef.current, { x: direction }, { x: 0, duration: 0.3 });
    gsap.fromTo(
      leftRef.current,
      { x: direction, opacity: 0, scale: 0.5 },
      { x: 0, opacity: 1, scale: 1, duration: 0.3 }
    );
    gsap.fromTo(
      rightRef.current,
      { x: direction, opacity: 0, scale: 0.5 },
      { x: 0, opacity: 1, scale: 1, duration: 0.3 }
    );
  }, [indexes.mid, animationDirection]);

  useEffect(() => {
    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        Increment();
      }, 3000);
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    const middle = middleRef.current;
    middle.addEventListener("mouseenter", stopAutoScroll);
    middle.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      middle.removeEventListener("mouseenter", stopAutoScroll);
      middle.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  const Increment = () => {
    setAnimationDirection("next");
    setIndexes((prev) => {
      const mid = (prev.mid + 1) % imageArray.length;
      const left = (mid - 1 + imageArray.length) % imageArray.length;
      const right = (mid + 1) % imageArray.length;
      return { mid, left, right };
    });
  };

  const Decrement = () => {
    setAnimationDirection("prev");
    setIndexes((prev) => {
      const mid = (prev.mid - 1 + imageArray.length) % imageArray.length;
      const left = (mid - 1 + imageArray.length) % imageArray.length;
      const right = (mid + 1) % imageArray.length;
      return { mid, left, right };
    });
  };

  const handleDotClick = (index) => {
    if (index === indexes.mid) return;
    setAnimationDirection(index > indexes.mid ? "next" : "prev");
    setIndexes({
      mid: index,
      left: (index - 1 + imageArray.length) % imageArray.length,
      right: (index + 1) % imageArray.length,
    });
  };

  return (
    <div className="image-slider">
      <div className="image-slider__track">
        <img
          ref={leftRef}
          src={imageArray[indexes.left]}
          className="image-slider__image image-slider__image--left"
          alt=""
        />
        <img
          ref={middleRef}
          src={imageArray[indexes.mid]}
          className="image-slider__image image-slider__image--middle"
          alt=""
        />

        <img
          ref={rightRef}
          src={imageArray[indexes.right]}
          className="image-slider__image image-slider__image--right"
          alt=""
        />

        <div className="image-slider__controls">
          <button onClick={Decrement} className="image-slider__button ">
            <svg
              fill="currentColor"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.293,12.707a1,1,0,0,1-.216-.325.986.986,0,0,1,0-.764,1,1,0,0,1,.216-.325l8-8a1,1,0,1,1,1.414,1.414L4.414,11H22a1,1,0,0,1,0,2H4.414l6.293,6.293a1,1,0,0,1-1.414,1.414Z" />
            </svg>
          </button>

          <button onClick={Increment} className="image-slider__button">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M14.707,20.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L13.293,4.707a1,1,0,0,1,1.414-1.414l8,8a1,1,0,0,1,.216.325.986.986,0,0,1,0,.764,1,1,0,0,1-.216.325Z" />
            </svg>
          </button>
        </div>

        <div className="image-slider__dots">
          {imageArray.map((_, index) => (
            <button
              key={index}
              className={`image-slider__dot ${
                index === indexes.mid ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
