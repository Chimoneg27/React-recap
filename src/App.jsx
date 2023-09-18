import React from "react";
import "./index.css";
import Header from "./components/Header";
import Todocontainer from "./components/Todocontainer";

const App = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header></Header>
        <Todocontainer></Todocontainer>
      </div>
    </div>
  );
};

export default App;
