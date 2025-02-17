

export default function Footer() { 
  return (
    <div className="my-30 flex flex-col w-2/5 h-2/11 self-center justify-space-between m-0 p-0">
      <div className="flex flex-row items-center justify-around h-30">
        <div className="hover:drop-shadow-[0_0_35px_rgba(255,255,255,1)] duration-300 w-15">
          <img src="src/assets/linkedin-logo.png"/>
        </div>
        <div className="hover:drop-shadow-[0_0_35px_rgba(255,255,255,1)] duration-300 w-15">
          <img src="src/assets/github-logo.png"/>
        </div>
      </div>
    </div>
  )
}