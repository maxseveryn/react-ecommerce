import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ data }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteCount, setFavouriteCount] = useState(0);

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev);
    setFavouriteCount((prev) => (isFavourite ? prev - 1 : prev + 1));
  };
  return (
    <article className="product-card" aria-label={data.title}>
      <div className="product-card__img-container">
        {/* <Link to={`/product/${data.id}`} className="product-card__link"> */}
        <img className="product-card__img" src={data.image} alt={data.title} />
        {data.status === "vip" && <label className="card__img__vip">VIP</label>}
        {data.brand && <p className="product-card__brand">{data.brand}</p>}
        {/* </Link> */}
      </div>
      <div className="product-card__header">
        <p className="product-card__current-price">{data.price} $</p>
        <button
          className={`product-card__favourite ${isFavourite ? "active" : ""}`}
          onClick={toggleFavourite}
          aria-pressed={isFavourite}
          aria-label={
            isFavourite ? "Remove from favourites" : "Add to favourites"
          }
        >
          <p className="favourite__count">{favouriteCount}</p>
          <svg
            className="favourite__icon"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.55284 3.00012C7.93598 3.00012 7.23841 3.06514 6.57209 3.29224C2.55494 4.60387 1.26341 8.894 2.39877 12.43L2.40354 12.4448L2.40877 12.4595C3.03435 14.2174 4.04226 15.8127 5.35336 17.1249L5.36091 17.1324L5.36862 17.1398C7.23782 18.9323 9.27254 20.4953 11.4756 21.8515L11.9934 22.1703L12.5147 21.8573C14.7226 20.5315 16.7964 18.9254 18.6432 17.1474L18.649 17.1419L18.6547 17.1362C19.9771 15.8215 20.9851 14.2144 21.6015 12.4549L21.6066 12.4402L21.6113 12.4253C22.7251 8.89703 21.4401 4.60176 17.4507 3.30948C16.7976 3.09221 16.1236 3.00012 15.4648 3.00012C13.9828 3.00011 12.8858 3.62064 12.0004 4.25309C11.1219 3.62545 10.0176 3.00012 8.55284 3.00012Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="product-card__old-price">
        {data.oldPrice && <p className="old-price__value">${data.oldPrice}</p>}
        <div className="old-price__discount">-50%</div>
      </div>
      <p className="product-card__title">{data.title}</p>
      <div className="product-card__size">
        <p className="product-card__size--value">One Size</p>
        <p className="product-card__size--count">and 6 more</p>
      </div>
      <div className="product-card__rating">
        Rating:<p className="product-card__rating--value">{data.rating.rate}</p>
      </div>
    </article>
  );
}
