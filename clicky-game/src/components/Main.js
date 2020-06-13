import React from "react";
import images from "../images.json";

function Main() {
  return (
    <div className="main">
      <img src={images[0].image} alt="" />;
    </div>
  )
}

export default Main;