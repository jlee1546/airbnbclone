import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`images/${props.coverImg}`}
        className="card--image"
        alt="Instructor"
      />

      <div className="card--data">
        <img className="card--data-star" src="images/Star1.png" alt="star" />
        {props.stats.rating}{" "}
        <span id="number_country">
          ({props.stats.reviewCount}) · {props.location}
        </span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span id="from_price">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
