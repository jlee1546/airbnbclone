import React from "react";
import Katie from "../katie.png";
import Star from "../Star1.png";

function Card() {
  return (
    <div className="card">
      <div className="card--image-container">
        <img src={Katie} alt="Katie" className="card--image" />
        <div className="card--availability">SOLD OUT</div>
      </div>
      <div className="card--data">
        <p>
          <img className="card--data-star" src={Star} alt="star" />
          5.0 <span id="number_country"> (6) · USA</span>
        </p>
        <p className="card--data-course">Life Lessons With Katie Zaferes</p>
        <p>
          <span id="from_price">From $136</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
