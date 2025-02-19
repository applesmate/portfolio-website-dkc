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
      <div className="flex flex-col p-0 m-0 absolute w-screen top-0 min-h-1/1 align-center text-center gap-2">
        <Header/>
        <h1 className="text-white font-[Baumans] my-20">About Me</h1>
        <h4 className="underline text-white font-[Roboto]">Email: damon.k.crowley@gmail.com</h4>
        <h4 className="underline text-white font-[Roboto]">Phone: +61 481 207 607</h4>
        { toLandscape ? (
          <div className="flex flex-row justify-around">
            <div className="relative max-w-5/8 min-w-100 h-150 text-center text-white text-start self-center font-normal flex flex-col gap-6 justify-around">
              
              <h2>Welcome to my website!</h2>
              <h3>My name is Damon Khor Crowley and I am a 4th year Software Engineering student at UNSW, with an interest in databases and algorithms. I have been doing full stack projects comfortably for around a year now and have started a couple of passion projects with my friends (see Projects tab for more info)</h3>
              <h3>In my spare time, I play basketball, animate, practice my trumpet and work on my fighting game, Fortress Smash</h3>
              <h3>My favourite quote is:</h3>
              <h2 className="text-end italic text-orange-200">"There's only been one Damon Khor Crowley. There's only ever gonna be one Damon Khor Crowley" - Blade</h2>
            </div>
            <img src="https://imagedelivery.net/SYqdpHruew-sMg33y-POLQ/8a106c8d-f891-4eb9-c3ec-50d50b75b500/public" className="w-1/3 h-1/3" alt="Damon Khor Crowley"/>
          </div> 
        ) : (
          <div className="flex flex-col justify-around align-center gap-6 overflow-hidden align-center">
            <img src="https://imagedelivery.net/SYqdpHruew-sMg33y-POLQ/8a106c8d-f891-4eb9-c3ec-50d50b75b500/public" className="w-1/3 h-1/3 self-center" alt="Damon Khor Crowley"/>
            <div className="relative max-w-5/8 min-w-100 h-150 text-center text-white text-start self-center font-normal flex flex-col gap-6 justify-around">
              <h2>Welcome to my website!</h2>
              <h3>My name is Damon Khor Crowley and I am a 4th year Software Engineering student at UNSW, with an interest in databases and algorithms. I have been doing full stack projects comfortably for around a year now and have started a couple of passion projects with my friends (see Projects tab for more info)</h3>
              <h3>In my spare time, I play basketball, animate, practice my trumpet and work on my fighting game, Fortress Smash</h3>
              <h3>My favourite quote is:</h3>
            </div>
            <h2 className="text-end italic text-orange-200 w-5/8 self-center">"There's only been one Damon Khor Crowley. There's only ever gonna be one Damon Khor Crowley" - Blade</h2>
            <div className="clear-both"></div>
          </div>
        )}
        <Footer/>
      </div>
    </div>
  )
}