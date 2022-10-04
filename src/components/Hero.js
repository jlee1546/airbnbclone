import React from "react";
import Image from "../group77.png";

function Hero() {
  return (
    <section className="hero">
      <img src={Image} alt="Grid of photos" className="hero--image" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactie activities led by one-of-a-kind hosts--all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
