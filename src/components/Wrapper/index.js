import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
//this code is from the pupster app