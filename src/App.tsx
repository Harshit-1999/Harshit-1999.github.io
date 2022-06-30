import React from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Resume from "./Components/Resume/Resume";
import tsParticles from "./data/tsParticles.json";
import "./App.css";
import Particles, { IParticlesParams, RecursivePartial } from "react-tsparticles";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Particles
        className="particles"
        options={tsParticles as  RecursivePartial<IParticlesParams>}/>
      <Nav />
      <Home />
      <Resume />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
