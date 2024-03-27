import React from "react";
import { Avatar } from "./components/Avatar";
import { NavbarTop } from "./components/NavbarTop";

function App() {
  return (
    <>
      <NavbarTop />

      <div className="card flex flex-row  shadow-xl">
        <div className="w-1/2">
          <Avatar />
        </div>

        <div className="w-1/2">
          <Avatar />
        </div>

      </div>

    </>
  );
}

export default App;
