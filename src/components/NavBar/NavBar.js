import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import NavLinks from "./NavLinks";

class NavBar extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {context => {
              const { isAuth, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = context;
              const theme = isLightTheme ? light : dark;

              return (
                <nav
                  style={{
                    background: theme.ui,
                    color: theme.syntax,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <h1 style={{ marginRight: "20px" }}>NavBar</h1>
                  <div
                    onClick={toggleAuth}
                    style={{
                      marginRight: "20px",
                      border: "1px solid #000",
                      cursor: "pointer"
                    }}
                  >
                    {isAuth ? "Logged in" : "Logged out"}
                  </div>
                  <NavLinks />
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default NavBar;
