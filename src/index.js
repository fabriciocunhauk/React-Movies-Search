import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/global.css";
import { TrailersProvider } from "./context/trailersContext";

ReactDOM.render(
  <React.StrictMode>
    <TrailersProvider>
      <App />
    </TrailersProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
