import { useState, useEffect, useRef } from "react";
import React from "react";
import "./Marquee.css";

export default function Marquee({ items, direction = "left" }) {
  const [slides, setSlides] = useState([]);
  const trackRef = useRef(null);

  useEffect(() => {
    setSlides([...items, ...items, ...items]);
  }, [items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstHalfWidth = track.scrollWidth / 2;
    track.style.setProperty("--marquee-width", `${firstHalfWidth}px`);
  }, [slides]);

  return (
    <div className="marquee">
      <div
        ref={trackRef}
        className={`marquee__track ${
          direction === "right" ? "scrollRight" : "scrollLeft"
        }`}
      >
        {slides.map((src, index) => (
          <div className="marquee-track__item" key={index}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
