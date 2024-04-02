import React from "react";
import { NavbarTop } from "./components/NavbarTop";
import { Presentation } from "./components/sections/Presentation";
import './App.css'
import { Experiences } from "./components/sections/Experiences";


function App() {

  return (
    <div>
      <NavbarTop />
      <Presentation />
      <Experiences />
    </div >
  );
}

export default App;
