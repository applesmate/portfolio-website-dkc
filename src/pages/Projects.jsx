import Header from "../components/Header"
import Footer from "../components/Footer"
// import "../../public/fonts/BAUHS93.ttf"
import { useState, useEffect } from "react"

export default function Projects() {
  return (   
    <div className="bg-linear-to-t from-red-500 to-red-800 w-1/1 min-h-screen fixed overflow-scroll p-0 m-0">
      <div className="flex flex-col p-0 m-0 absolute w-screen top-0 min-h-1/1 align-center text-center">
        <Header/>
        <h1 className="text-white font-[Baumans] my-20">Projects</h1>
        <div className="flex flex-col align-center">
          <div className="bg-linear-to-t from-blue-500 to-blue-700 w-4/8 min-h-50 outline-4 rounded-full outline-white outline- m-auto text-white justify-center flex flex-col">
            <h2>Penfriends</h2>
            <h3>Cooked project I didn't finish</h3>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}