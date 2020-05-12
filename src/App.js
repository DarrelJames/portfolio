import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <About />
      <Contact />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
