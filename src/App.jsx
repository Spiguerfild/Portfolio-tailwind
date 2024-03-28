import React from "react";
import { Avatar } from "./components/Avatar";
import { NavbarTop } from "./components/NavbarTop";
import './App.css'
import { Theme } from "react-daisyui";
function App() {

  return (
    <div>
      <NavbarTop />
      <div className="px-16">

        <div className="card flex flex-row mt-20  shadow-xl">

          <div className="w-2/3  text-left">
            <div className=" p-4 rounded-lg">
              <p className="text-2xl font-bold text-primary font-inter leading-10">Olá, me chamo Luis Henrique</p>
              <p className={`text-5xl font-bold  font-inter leading-custom ${Theme === 'forest' ? 'text-red-600' : 'text-green-500'}`}>Front-end Developer |</p>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tristique lorem, sed fringilla velit volutpat eget. Nulla nec massa velit. Fusce id erat auctor, viverra nisi vitae, vestibulum justo.</p>
            </div>
          </div>

          <div className=" w-1/3 text-right">
            <Avatar />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
