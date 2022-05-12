import React, { useState } from "react";
import "./Xbox.css";
export default function Xbox() {
  const [hoverlef, setHoverLeft] = useState("");
  const [hoverright, setHoverRight] = useState("");

  return (
    <div className="container">
      <div className="split left">
        <h1>Playstation 5</h1>
        <a href="#" className="btn1">
          Buy Now
        </a>
      </div>
      <div className="split right">
        <h1>XBox Series X</h1>
        <a href="#" className="btn1">
          Buy Now
        </a>
      </div>
    </div>
  );
}
