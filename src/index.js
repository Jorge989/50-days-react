import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import ProgressBar from "./Progressbar";
import HiddenSearchbar from "./components/HiddenSearchbar";
import ImaLoading from "./components/imageLoading/ImageLoading";
import UseReducer from "./UseReducer";
import TodosReducer from "./todosReducer";
import ScrollAnimation from "./components/scrollAnimation/ScrollAnimation";
import FormWave from "./components/FormWave/FormWave";
import Xboxplay from "./components/xboxplay/Xbox";
ReactDOM.render(
  <React.StrictMode>
    <Xboxplay />
  </React.StrictMode>,
  document.getElementById("root")
);
