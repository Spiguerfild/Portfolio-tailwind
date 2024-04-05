import React from "react";
import { NavbarTop } from "./components/NavbarTop";
import { Presentation } from "./components/sections/Presentation";
import './App.css'
import { Experiences } from "./components/sections/Experiences";
import { Projects } from "./components/sections/Projects";


function App() {

  return (
    <div>
      <NavbarTop />
      <Presentation />
      <Experiences />
      <Projects />
    </div >
  );
}

export default App;
