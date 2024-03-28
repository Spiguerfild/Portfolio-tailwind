import React from "react";
import { Avatar } from "./components/Avatar";
import { NavbarTop } from "./components/NavbarTop";

function App() {
  return (
    <>
      <NavbarTop />

      <div className="card flex flex-row  shadow-xl">

        <div className="w-1/2 mt-96 text-left">
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-lg font-semibold text-blue-700">Olá, eu sou o Seu Nome</p>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tristique lorem, sed fringilla velit volutpat eget. Nulla nec massa velit. Fusce id erat auctor, viverra nisi vitae, vestibulum justo.</p>
          </div>
        </div>

        <div className="w-1/2 text-center">
          <Avatar />
        </div>

      </div>

    </>
  );
}

export default App;
