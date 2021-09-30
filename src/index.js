import React from "react";
import ReactDOM from "react-dom";
import { add, subtract, multiply, divide } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{subtract(5, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{divide(8, 2)}</li>
  </ul>,
  document.getElementById("root")
);
