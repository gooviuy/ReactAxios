import React from "react";
import Films from "./components/Films";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Films showFilm="spider man" />
      <Films showFilm="batman" />
      <Films showFilm="titanic" />
    </div>
  );
}

export default App;
