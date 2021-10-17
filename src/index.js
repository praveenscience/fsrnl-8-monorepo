import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App Mudassar="Big Person" />
  </React.StrictMode>,
  document.getElementById("root")
);
