import React from "react";
import Activities from "./componets/Activities";
import Hero from "./componets/Hero";
import NavBar from "./componets/NavBar";
import TopBar from "./componets/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
    </div>
  );
}

export default App;
