import "./App.css";
import React, { useState, useEffect } from "react";
import "./progressbar.css";
function App() {
  const [id, setId] = useState(0);
  const [active, setActive] = useState(0);
  const [classe, setClasse] = useState("active");
  const [step1, setStep1] = useState(0);
  function handleNextStep() {
    if (active == 3 && step1 == 3) {
      setActive((active = 3));
      setStep1((step1 = 3));
    } else {
      setActive(active + 1);
      setStep1(step1 + 1);
    }
  }
  function handlePrevStep() {
    if (active == 0 && step1 == 0) {
      setActive((active = 0));
      setStep1((step1 = 0));
    } else {
      setActive(active - 1);
      setStep1(step1 - 1);
    }
  }

  console.log(step1);
  return (
    <div className="container">
      <div className="progress-container">
        <div
          className={
            step1 == 1
              ? "progress-active"
              : step1 == 2
              ? "progress-active2"
              : step1 == 3
              ? "progress-active3"
              : "progress"
          }
          id="progress"
        ></div>

        <div className="circle active">1</div>
        <div className={active >= 1 ? "circle active" : "circle"}>2</div>
        <div className={active >= 2 ? "circle active" : "circle"}>3</div>
        <div className={active >= 3 ? "circle active" : "circle"}>4</div>
      </div>

      <button
        className="btn"
        id="prev"
        disabled={active == 0}
        onClick={() => handlePrevStep()}
      >
        Prev
      </button>
      <button
        className="btn"
        id="next"
        onClick={() => handleNextStep()}
        disabled={active == 3}
      >
        Next
      </button>
    </div>
  );
}

export default App;
