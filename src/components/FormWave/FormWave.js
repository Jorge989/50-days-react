import React, { useState } from "react";
import "./FormWave.css";
export default function FormWave() {
  const email = ["E", "m", "a", "i", "l"];
  const passowrd = ["P", "a", "s", "s", "w", "o", "d"];
  return (
    <div className="container-waves">
      <h1>Please Login</h1>
      <form>
        <div className="form-control">
          <span>
            {" "}
            {email.map((label, index) => {
              return (
                <label>
                  <span style={{ transitionDelay: index * 50 }}>{label}</span>
                </label>
              );
            })}
          </span>
          <input type="text" required />
          {/* <label>Email</label> */}
        </div>
        <div className="form-control">
          <span>
            {" "}
            {passowrd.map((label, index) => {
              return (
                <label>
                  <span style={{ transitionDelay: index * 50 }}>{label}</span>
                </label>
              );
            })}
          </span>
          <input type="password" required />
          {/* <label>Password</label> */}
        </div>
        <button className="btn-wave">Login</button>
        <div className="buttons">
          <p className="text-account">Don't have as an account?</p>
          <a href="#">Register</a>
        </div>
      </form>
    </div>
  );
}
