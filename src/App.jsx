import React from "react";
import Header from "./sections/Header";
import Header1 from "./sections/Header1";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Features1 from "./sections/Features1";
import Pricing from "./sections/Pricing";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header1 />
      <Hero />
      <Features1 />
      <Pricing />
    </main>
  );
};

export default App;
