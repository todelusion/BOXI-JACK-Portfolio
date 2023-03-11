import React from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20">
        <Hero />
      </div>
      <div className="min-h-screen" />
      <div className="min-h-screen" />
      <div className="min-h-screen" />
    </BrowserRouter>
  );
}

export default App;
