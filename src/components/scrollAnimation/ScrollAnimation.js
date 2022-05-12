import React, { useState } from "react";
import "./ScrollAnimation.css";
export default function ScrollAnimation() {
  const [active, setActive] = useState(false);
  const windows = window.addEventListener("scroll", listenScrollEvent);
  const [divs, setDivs] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);
  function listenScrollEvent(e) {
    if (window.scrollY > 1) {
      console.log(window.scrollY);
      setActive(true);
    } else {
      console.log(window.scrollY);
      setActive(false);
    }
  }
  return (
    <>
      <h1>Project Starter</h1>
      {divs.map((div, index) => {
        console.log(div, index);
        return (
          <div className="container">
            <div
              className={active ? "box show" : "box"}
              style={{ transitionDelay: `${index * 100}ms` }}
              key={index}
            >
              <h2>Content</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}
