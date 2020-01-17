import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <button className="toggleBnt" onClick={toggleTheme}>
        Change theme color
      </button>
    );
  }
}

export default ThemeToggle;
