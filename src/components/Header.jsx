export default function Header() {
    return (
        <div className="flex flex-col w-4/5 h-2/11 self-center justify-space-between">
            <div className="flex flex-row items-center justify-around h-30">
              <button className="hover:shadow-[0px_0px_45px_10px_rgba(255,46,88,1)] text-white font-bold py-2 px-4 rounded">Home</button>
              <button className="hover:bg-gray-100/30 text-white font-bold py-2 px-4 rounded">Projects</button>
              <button className="hover:bg-gray-100/30 text-white font-bold py-2 px-4 rounded">About</button>
            </div>
            <line className="w-full h-0.5 bg-white"></line>
        </div>
    )
}