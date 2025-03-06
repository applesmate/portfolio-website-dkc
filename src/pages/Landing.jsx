import Header from "../components/Header"
import Footer from "../components/Footer"
// import "../../public/fonts/BAUHS93.ttf"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Landing() {
  let navigate = useNavigate();

  const [timer, setTimer] = useState(3);

  useEffect(() => {
    let countdown = null

    countdown = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      console.log("timer is 0");
      navigate('/home');
    }
  }, [timer]);

  return (   
    <div className="bg-linear-to-t from-orange-500 to-orange-800 w-1/1 min-h-screen fixed overflow-scroll p-0 m-0 text-center flex flex-col justify-center">
      <h1 className="font-[Baumans] text-white">You will enter damon's domain in</h1>
      <h1 className="font-[Baumans] text-xl text-white">{timer > 0 ? timer : 1} </h1>
    </div>
      
  )
}