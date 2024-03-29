import React from "react";
import { Avatar } from "./components/Avatar";
import { NavbarTop } from "./components/NavbarTop";
import { motion } from 'framer-motion'
import './App.css'
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
function App() {

  return (
    <div>
      <NavbarTop />
      <div className="px-16">
        <motion.div
          className="p-4 rounded-lg"
          initial={{ opacity: 0 }} // Define a opacidade inicial da div como 0
          animate={{ opacity: 1 }} // Define a opacidade final da div como 1
          transition={{ duration: 2 }} // Define a duração da animação em segundos
        >
          <div className="card flex flex-row mt-20 ">
            <div className="w-2/3 text-left">
              <p className="text-3xl font-bold text-primary font-inter leading-10">Hello, i'm Luis Henrique</p>
              <p className={`text-7xl font-bold text-accent font-inter leading-snug`}>Front-end Developer |</p>
              <p className="text-neutral w-6/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tristique lorem,br sed fringilla velit volutpat eget. Nulla nec massa velit. Fusce id erat auctor, viverra nisi vitae, vestibulum justo.</p>
            </div>
          </div>
        </motion.div>
        <div className="flex gap-6">

          <button className=" px-4   btn btn-active btn-ghost "><LinkedinLogo size={36} /></button>
          <button className=" px-4  btn btn-active btn-ghost"><GithubLogo size={36} /></button>
          <button className=" px-4  btn btn-active btn-primary">Download CV</button>

        </div>

      </div>
    </div>
  );
}

export default App;
