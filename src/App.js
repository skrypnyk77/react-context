import React from "react";
import NavBar from "./components/NavBar/NavBar";
import BookList from "./components/BookList/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App" style={{ width: "640px", margin: "0 auto" }}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <ThemeToggle />
          <NavBar />
          <BookList />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
