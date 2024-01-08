//Create a react app from scratch.

import ReactDOM from "react-dom";
import React from "react";

let name = "sakshi";
const cr = new Date().getFullYear();
const new2 = new Date().toString(); // Convert the Date object to a string

console.log(new2);

ReactDOM.render(
  <div>
    <h1>welcome</h1>
    <footer>
      <ol>
        <p>website created by {name}</p>
        <p>copyright {cr}</p>
        {/* <p>current time: {new2}</p> Render the string representation of the Date */}
      </ol>
    </footer>
  </div>,
  document.getElementById("root")
);
