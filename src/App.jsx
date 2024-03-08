import React from "react"
import { ThemeChanger } from "./components/ThemeChanger"
import { Avatar } from "./components/Avatar"

function App() {

  return (
    <>
      <section className="flex justify-center items-center gap-4 flex-col mt-4">
        <Avatar />
        <div className="text-2x1">@Spiguerfild</div>
        <ThemeChanger />
      </section>


    </>

  )
}

export default App
