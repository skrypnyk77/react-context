import React, { Component } from "react";
import navslist from "./constants";

class NavLinks extends Component {
  render() {
    return (
      <ul
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column"
        }}
      >
        {navslist.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  }
}

export default NavLinks;
