import "./App.css";
import React, { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [id, setId] = useState(0);

  function handleClasses(id) {
    setId(id);
    setActive(true);
  }
  console.log(active);
  return (
    <div className="container">
      <div
        value="1"
        className={id === 1 ? "panel active" : "panel"}
        onClick={(e) => handleClasses(1)}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1643749591761-dc017f2c1766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")`,
        }}
      >
        <h3>Explora The Wolrd</h3>
      </div>
      <div
        value="2"
        className={id === 2 ? "panel active" : "panel"}
        onClick={(e) => handleClasses(2)}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1617355425615-091d9983d381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80")`,
        }}
      >
        <h3>Istanbul Turkey</h3>
      </div>
      <div
        value="3"
        className={id === 3 ? "panel active" : "panel"}
        onClick={(e) => handleClasses(3)}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1643149949871-e20f4673dc76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")`,
        }}
      >
        <h3>Poipu Beach</h3>
      </div>
      <div
        value="4"
        className={id === 4 ? "panel active" : "panel"}
        onClick={(e) => handleClasses(4)}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1641264380241-67b01dc70afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        }}
      >
        <h3>Canyon</h3>
      </div>
      <div
        value="5"
        className={id === 5 ? "panel active" : "panel"}
        onClick={(e) => handleClasses(5)}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1642849250394-6b4613e7a22d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")`,
        }}
      >
        <h3>Atrani, SA Italia</h3>
      </div>
      <div
        value="6"
        className={id === 6 ? "panel active" : "panel"}
        onClick={(e) => handleClasses(6)}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1642018726866-2a8e04bd2a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=483&q=80")`,
        }}
      >
        <h3>Kazbegi,Georgia</h3>
      </div>
      <div
        value="7"
        className={id === 7 ? "panel active" : "panel"}
        onClick={(e) => handleClasses(7)}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1641900833936-02cdb77d7068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        }}
      >
        <h3>Fort St. Angelo</h3>
      </div>
    </div>
  );
}

export default App;
