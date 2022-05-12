import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./HiddenSearchbar.css";
export default function HiddenSearchbar() {
  const [active, setActive] = useState("");
  const handleActive = () => {
    if (active == "") {
      setActive("active");
    } else {
      setActive("");
    }
  };
  return (
    <div className="container-search">
      <div className={`search ${active}`}>
        <input className="input" type="text" placeholder="Search"></input>
        <button onClick={handleActive} className="btn-search">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
