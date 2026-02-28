import Header from "../components/Header"
import Footer from "../components/Footer"
// import "../../public/fonts/BAUHS93.ttf"
import { useState, useEffect } from "react"
import "@fontsource/biorhyme";
import './../index.css';

export default function Projects() {
  return (
    <div className="bg-linear-to-t from-orange-700 to-orange-900 w-1/1 min-h-screen fixed overflow-scroll p-0 m-0">
      <div className="flex flex-col p-0 m-0 absolute w-1/1 top-0 min-h-1/1 align-center text-center">
        <Header />
        <h1 className="text-white font-[Baumans] my-20">Projects</h1>
        <div className="flex flex-col align-center gap-10">
          <button onClick={() => window.open("https://github.com/TRIPLEBARREL/penfriends")} className="bg-linear-to-t from-amber-200 to-amber-300 hover:bg-linear-to-t hover:from-yellow-100 hover:to-yellow-200 w-4/8 min-h-30 outline-4 rounded-full outline-white outline- m-auto text-black justify-center flex flex-col">
            <h2 className="font-[BioRhyme]">PENFRIENDS</h2>
            <h3>Unfinished discreet messaging project</h3>
          </button>
          <button onClick={() => window.open("https://github.com/TRACSLab-UNSW/Project_Flying_Car")} className="bg-linear-to-t from-green-900 to-green-700 hover:bg-linear-to-t hover:from-lime-700 hover:to-lime-600 w-4/8 min-h-30 outline-4 rounded-full outline-white outline- m-auto text-white justify-center flex flex-col">
            <h2>Flying Car Simulator</h2>
            <h3>Vertically Integrated Project (VIP) I contributed to in 2025 for university</h3>
          </button>
          <button onClick={() => window.open("https://github.com/DamonKongCountry/verifiable-credentials-zk-application")} className="bg-linear-to-t from-blue-900 to-blue-700 hover:bg-linear-to-t hover:from-teal-700 hover:to-teal-600 w-4/8 min-h-30 outline-4 rounded-full outline-white outline- m-auto text-white justify-center flex flex-col">
            <h2>BBS+ Verifier App</h2>
            <h3>Thesis Project with AWS architecture demonstrating verification outside of crypto-trading</h3>
          </button>
        </div>
        <h1 className="text-white font-[Bauhaus] my-20">Animations</h1>
        <div className="flex flex-col align-center gap-10">
          <button onClick={() => window.open("https://www.youtube.com/watch?v=-SgSTHJe1x4")} className="bg-linear-to-t from-red-700 to-red-900 hover:bg-linear-to-t hover:from-rose-500 hover:to-rose-700 w-4/8 min-h-30 outline-4 rounded-full outline-white outline- m-auto text-black justify-center flex flex-col">
            <h2 className="font-[Charred]">CORPORATE MERCENARY</h2>
            <h3 className="font-[Baumans]">My focus for now</h3>
          </button>
          <button onClick={() => window.open("https://www.youtube.com/watch?v=lEdq6kuMieY")} className="bg-linear-to-t from-yellow-600 to-yellow-700 hover:bg-linear-to-t hover:from-yellow-400 hover:to-yellow-500 w-4/8 min-h-30 outline-4 rounded-full outline-white outline- m-auto text-white justify-center flex flex-col">
            <h2 className="font-[ChineseRocks]">Golden Light</h2>
            <h3 className="font-[Baumans]">My Magnum Opus (for the moment)</h3>
          </button>
          <button onClick={() => alert("This isn't a reality, yet!")} className="bg-linear-to-t from-emerald-900 to-emerald-700 hover:bg-linear-to-t hover:from-emerald-700 hover:to-emerald-600 w-4/8 min-h-30 outline-4 rounded-full outline-white outline- m-auto text-white justify-center flex flex-col">
            <h2 className="font-[Stretch]">Rage Valley</h2>
            <h3 className="font-[Baumans]">Compilation of shorts I do, with musicals</h3>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}