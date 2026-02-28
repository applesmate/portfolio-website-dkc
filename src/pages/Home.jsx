import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"

export default function Home() {
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth / window.innerHeight < 1) {
        setShowImages(false);
      } else {
        setShowImages(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-linear-to-t from-orange-700 to-orange-900 w-1/1 min-h-screen fixed overflow-scroll p-0 m-0">
      <div className="flex flex-col p-0 m-0 absolute w-1/1 top-0 min-h-1/1 align-center text-center">
        <Header />
        <h1 className="text-white font-[Baumans] my-20">Damon Khor Crowley</h1>
        <div className="relative w-2/8 min-w-100 h-150 text-center text-white self-center font-normal flex flex-col gap-6 justify-around">
          <h2 className="underline">Who am I?</h2>
          <h3>5th year Software Engineering student at UNSW</h3>
          <h3>Former lead backend developer at TRIPLEBARREL</h3>
          <h3>Lead database developer of UNSW Esports Web Dev 2024 Team</h3>
          <h3>Casual animator and basketball player</h3>
          <h3>I am awesome as I am Damon Khor Crowley</h3>
        </div>
        <Footer />
      </div>
      <button className="absolute top-0 right-0 bg-white text-black p-2 m-2 rounded-full">Toggle Images</button>
      {showImages &&
        <>
          <div className="absolute right-0 top-40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350" width="30vw" height={1000}>
              <defs>
                <clipPath id="mask1">
                  <polygon points="250,10 120,20 25,80 10,270 40,330 250,340" />
                </clipPath>
              </defs>

              <image id="image1" className="image__svg-image" width="100%" height="100%" clipPath="url(#mask1)" href="https://imagedelivery.net/SYqdpHruew-sMg33y-POLQ/8a106c8d-f891-4eb9-c3ec-50d50b75b500/public" />
            </svg>
          </div>
          <div className="absolute left-0 top-40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350" width="30vw" height={1000}>
              <defs>
                <clipPath id="mask2">
                  <polygon points="0,10 250,120 200,340 0,310" />
                </clipPath>
              </defs>

              <image id="image2" className="image__svg-image" height="100%" x="-75%" clipPath="url(#mask2)" href="https://imagedelivery.net/SYqdpHruew-sMg33y-POLQ/1c07cb97-b077-4a27-280a-d8c777e96600/public" />
            </svg>
          </div>
        </>
      }
    </div>

  )
}