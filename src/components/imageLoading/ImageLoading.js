import React, { useState, useEffect } from "react";
import "./ImageLoading.css";

export default function ImageLoading() {
  const [percentual, setPercentual] = useState(0);
  const [blur, setBlur] = useState("blur");

  let load = 0;
  //   const percentual = loading;
  useEffect(() => {
    let int = setInterval(blurring, 30);

    function blurring() {
      load++;
      setPercentual(load);
      if (load > 99) {
        clearInterval(int);
      }

      console.log(load);
    }
  }, []);

  console.log("2", percentual);
  return (
    <>
      <div className="loading-text">
        <p>{percentual}%</p>
      </div>
      <section className={percentual > 1 ? "bg-blur" : "bg"}></section>
    </>
  );
}
