import React from "react";
import Image from "../airbnb.png";

function Navbar() {
  return (
    <nav>
      <img className="navbar--icon" src={Image} alt="AirBnB icon" />
    </nav>
  );
}

export default Navbar;
