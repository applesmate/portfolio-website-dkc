import Header from "../components/Header"
import Footer from "../components/Footer"
// import "../../public/fonts/BAUHS93.ttf"
import { useState, useEffect } from "react"

export default function About() {
  const [toLandscape, setToLandscape] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth / window.innerHeight < 1.7) {
        setToLandscape(false);
      } else {
        setToLandscape(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (   
    <div className="bg-linear-to-t from-red-500 to-red-800 w-1/1 min-h-screen fixed overflow-scroll p-0 m-0">
      <div className="flex flex-col p-0 m-0 absolute w-screen top-0 min-h-1/1 align-center text-center">
        <Header/>
        <h1 className="text-white font-[Baumans] my-20">About Me</h1>
        { toLandscape ? (
          <div className="flex flex-row justify-around">
            <div className="relative max-w-5/8 min-w-100 h-150 text-center text-white text-start self-center font-normal flex flex-col gap-6 justify-around outline-2 outline-black">
              <h2 className="underline">Undergrad Software Engineer at UNSW (2022-)</h2>
              <h3>4th year Software Engineering student at UNSW</h3>
              <h3>Lead developer at TRIPLEBARREL</h3>
              <h3>Lead developer of UNSW Esports Web Dev 2024 Team</h3>
              <h3>Casual animator and basketball player</h3>
              <h3>I am awesome as I am Damon Khor Crowley</h3>
            </div>
            <img src="https://imagedelivery.net/SYqdpHruew-sMg33y-POLQ/8a106c8d-f891-4eb9-c3ec-50d50b75b500/public" className="w-1/3 h-1/3" alt="Damon Khor Crowley"/>
          </div> 
        ) : (
          <div className="flex flex-col justify-around">
            <div className="relative max-w-5/8 min-w-100 h-150 text-center text-white text-start self-center font-normal flex flex-col gap-6 justify-around outline-2 outline-black">
              <h2 className="underline">Undergrad Software Engineer at UNSW (2022-)</h2>
              <h3>4th year Software Engineering student at UNSW</h3>
              <h3>Lead developer at TRIPLEBARREL</h3>
              <h3>Lead developer of UNSW Esports Web Dev 2024 Team</h3>
              <h3>Casual animator and basketball player</h3>
              <h3>I am awesome as I am Damon Khor Crowley</h3>
            </div>
            <img src="https://imagedelivery.net/SYqdpHruew-sMg33y-POLQ/8a106c8d-f891-4eb9-c3ec-50d50b75b500/public" className="w-1/3 h-1/3" alt="Damon Khor Crowley"/>
          </div>
        )}
        <Footer/>
      </div>
    </div>
  )
}