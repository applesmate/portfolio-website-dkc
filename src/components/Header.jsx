import { useNavigate } from "react-router";

export default function Header() {
  
  let navigate = useNavigate();
  
  return (
    <div className="flex flex-col w-4/5 h-2/11 self-center justify-space-between">
      <div className="flex flex-row items-center justify-around h-30">
        <button className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)] duration-300 text-white font-bold rounded" onClick={() => navigate("/home")}>Home</button>
        <button className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)] duration-300 text-white font-bold rounded" onClick={() => navigate("/projects")}>Projects</button>
        <button className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)] duration-300 text-white font-bold rounded" onClick={() => navigate("/about")}>About</button>
      </div>
      <line className="w-full h-0.5 bg-white"></line>
    </div>
  ) 
}