import Header from "../components/Header"
import Footer from "../components/Footer"
// import "../../public/fonts/BAUHS93.ttf"
import { useState, useEffect } from "react"

export default function Projects() {
  return (   
    <div className="bg-linear-to-t from-orange-500 to-orange-800 w-1/1 min-h-screen fixed overflow-scroll p-0 m-0">
      <div className="flex flex-col p-0 m-0 absolute w-1/1 top-0 min-h-1/1 align-center text-center">
        <Header/>
        <h1 className="text-white font-[Baumans] my-20">Projects</h1>
        <div className="flex flex-col align-center gap-10">
          <button onClick={() => window.open("https://github.com/TRIPLEBARREL/penfriends")} className="bg-linear-to-t from-amber-200 to-amber-300 hover:bg-linear-to-t hover:from-yellow-100 hover:to-yellow-200 w-4/8 min-h-30 outline-4 rounded-full outline-white outline- m-auto text-black justify-center flex flex-col">
            <h2>Penfriends</h2>
            <h3>Unfinished discreet messaging project</h3>
          </button>
          <button onClick={() => window.open("https://github.com/TRIPLEBARREL/penfriends")} className="bg-linear-to-t from-green-900 to-green-700 hover:bg-linear-to-t hover:from-lime-700 hover:to-lime-600 w-4/8 min-h-30 outline-4 rounded-full outline-white outline- m-auto text-white justify-center flex flex-col">
            <h2>Fork</h2>
            <h3>WIP of Team Fortress 2 fan-game similar to Zork</h3>
          </button>
        </div>
        <Footer/>
      </div>
    </div>
  )
}