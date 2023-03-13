import React from "react";
import { BrowserRouter } from "react-router-dom";
import Work from "./components/Work";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mx-auto max-w-5xl md:pt-20">
        <Hero />
        <Work />
      </div>
    </BrowserRouter>
  );
}

export default App;
