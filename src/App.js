import React from "react";
import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Stats from './Stats';
import Gallery from './Gallery';
import Event from './Event';
import Bio from './Bio';
import Comments from "./Comments";

function App() {
  return (
    <div className="App">
      <div id="main">
      <Nav />
      <Hero />
      <Stats />
      <Gallery />
      <Event />
      <Bio />
        <Comments />
      </div>
    </div>
  );
}

export default App;
