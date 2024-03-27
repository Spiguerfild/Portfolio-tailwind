import React from "react";
import { Avatar } from "./components/Avatar";
import { NavbarTop } from "./components/NavbarTop";
import img from './assets/splash.png'
function App() {
  return (
    <>
      <NavbarTop />
      <div className=" shadow-xl image-full">
        <img src={img} className="w-1/4" />
      </div>
      <Avatar />
    </>
  );
}

export default App;
