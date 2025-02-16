import Header from "../components/Header"
// import "../../public/fonts/BAUHS93.ttf"
import { useState, useEffect } from "react";

export default function Landing() {
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 868) {
        setShowImages(false);
      } else {
        setShowImages(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div id="aa">
    //   <svg xmlns="http://www.w3.org/2000/svg" style="position:absolute">
    //     <defs>
    //       <clipPath id="mask">
    //         <path
    //           d="M0,370.6c-0.5,35,29.5,68,60,82.8c40.8,19.7,82.2,6.8,99.3,1.4c76-23.8,83.3-81.4,130.3-79.9c43.9,1.4,53.2,52.1,102.2,52.5
    //             c38.6,0.3,67.2-30.9,79.9-44.6c44.4-48.3,49.5-116.9,33.1-165.5c-6-17.7-11.5-34.1-27.4-45.3c-30.9-22-62.5,2.7-96.2-16.2
    //             c-27.9-15.7-17.7-39-44.8-68c-44.9-47.9-125.5-40.2-155.5-37.3C145.6,53.7,101.3,58,66.5,92c-43.9,42.9-46.3,107.1-46.8,120.2
    //             c-1.7,45.2,14.1,62.2,1.4,103.6C12.1,345.6,0.3,348.8,0,370.6z"
    //         />
    //         <path
    //           d="M373.8,89.9c2.7-4.9,14.3-24.5,37.4-30.2c5.6-1.4,18.5-4.6,30.9,2.2c18.8,10.2,20,33.9,20.2,38.1c0.1,3.2,0.6,21.6-8.6,25.9
    //             c-6.9,3.3-13-4.5-24.5-1.4c-7.4,1.9-7.1,5.7-13.7,7.9c-12.5,4.2-32-3.2-39.6-18.7C371.2,103.7,372.8,94,373.8,89.9z"
    //         />
    //         <path
    //           d="M432.1,133.8c-4.2,1.6-9.3,6-8.6,10.8c0.7,5.5,8.7,9.2,15.1,7.9c6.7-1.4,12.4-8.5,10.8-13.7
    //             C447.7,133.4,438.5,131.3,432.1,133.8z"
    //         />
    //       </clipPath>
    //     </defs>
    //   </svg>
    //   <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 506" >
    //     <image id="image" class="image__svg-image" width="100%" height="100%" clip-path="url(#mask)" x="-100px" xlink:href="https://res.cloudinary.com/alvarosaburido/image/upload/v1589435086/blog/The%20Magic%20of%20SVG%20Clip-path/pic_yo5eyq.png" />
    //   </svg>
    // </div>
    
    <div className="bg-linear-to-t from-red-400 to-red-700 w-1/1 outline-black outline-2 absolute">
    {/* <div class="w-1/1 h-1/1 outline-black outline-2 absolute"> */}
      <div className="flex flex-col padding-0 margin-0 position-absolute top-0 align-center text-center">
        <Header/>
        <h1 className="text-white font-[Baumans] my-20">Damon Khor Crowley</h1>
        <div className="relative w-2/8 min-w-100 h-150 text-center text-white self-center font-normal flex flex-col gap-6 justify-around">
          <h2 className="underline">Who am I?</h2>
          <h3>4th year Software Engineering student at UNSW</h3>
          <h3>Lead developer at TRIPLEBARREL</h3>
          <h3>Lead developer of UNSW Esports Web Dev 2024 Team</h3>
          <h3>Casual animator and basketball player</h3>
          <h3>I am awesome as I am Damon Khor Crowley</h3>
        </div>
      </div>
      { showImages && 
      <>
        <div className="absolute right-0 top-40">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350" width="30vw" height={1000}>
            <defs>
              <clipPath id="mask1">
                <polygon points="250,10 120,20 25,80 10,270 40,330 250,340"/>
              </clipPath>
            </defs>     
        
            <image id="image1" className="image__svg-image" width="100%" height="100%" clipPath="url(#mask1)" href="https://imagedelivery.net/SYqdpHruew-sMg33y-POLQ/8a106c8d-f891-4eb9-c3ec-50d50b75b500/public"/>
            {/* <image id="image1" className="image__svg-image" width="100%" height="100%" clipPath="url(#mask1)" href="src/assets/linkedin.jpg"/> */}
          </svg>
        </div>
        <div className="absolute left-0 top-40">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350" width="30vw" height={1000}>
            <defs>
              <clipPath id="mask2">
                <polygon points="0,10 250,120 200,340 0,310"/>
              </clipPath>
            </defs>     
        
            <image id="image2" className="image__svg-image" height="100%" x="-75%" clipPath="url(#mask2)" href="https://imagedelivery.net/SYqdpHruew-sMg33y-POLQ/1c07cb97-b077-4a27-280a-d8c777e96600/public"/>
          </svg>
        </div>
      </>
      }
    </div>
      
  )
}