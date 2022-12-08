import React from "react";
import Activities from "./componets/Activities";
import Booking from "./componets/Booking";
import Contact from "./componets/Contact";
import Gallery from "./componets/Gallery";
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
      <Booking />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
