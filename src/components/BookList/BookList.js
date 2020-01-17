import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="booklist"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>the way of people</li>
          <li style={{ background: theme.ui }}>pretty girl</li>
          <li style={{ background: theme.ui }}>small </li>
        </ul>
      </div>
    );
  }
}

export default BookList;
