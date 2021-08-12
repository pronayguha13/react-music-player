import React from "react";

import TrackList from "./components/Tracklist";
import Controller from "./components/Controller";
import Navbar from "./components/Header/index.jsx";

import "./global.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <TrackList />
      <Controller />
    </div>
  );
};

export default App;
