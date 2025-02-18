import { useNavigate } from "react-router";

export default function Header() {
  
  let navigate = useNavigate();
  
  return (
    <div className="flex flex-col w-4/5 h-2/11 self-center justify-space-between">
      <div className="flex flex-row items-center justify-around h-30">
        <div className="headerButton hover:drop-shadow-[0_0_8px_white] focus:outline-none focus:border-none duration-300 text-white font-bold" onClick={() => navigate("/home")}>Home</div>
        <div className="headerButton hover:drop-shadow-[0_0_8px_white] focus:outline-none focus:border-none duration-300 text-white font-bold" onClick={() => navigate("/projects")}>Projects</div>
        <div className="headerButton hover:drop-shadow-[0_0_8px_white] focus:outline-none focus:border-none duration-300 text-white font-bold" onClick={() => navigate("/about")}>Abouts</div>
      </div>
      <line className="w-full h-0.5 bg-white"></line>
    </div>
  ) 
}