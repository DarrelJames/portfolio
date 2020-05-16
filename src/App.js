import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

import "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
