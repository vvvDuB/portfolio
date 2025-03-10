import Header from "./Header";
import Body from "./Body";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Linktree from "./Linktree";

function App() {  
  const [progress, setProgress] = useState(0);
  const [isMobile, setMobile] = useState(false);
  const [currentLabel, setCurrentLabel] = useState("whoami")

  const handleCurrentLabel = (label) => {
    setCurrentLabel(label)
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const max = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= max) {
          clearInterval(interval);
          return max;
        }
        return prevProgress + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black font-custom">
      <video
        style={{ display: progress < 50 ? "none" : "block" }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://github.com/vvvDuB/portfolio/raw/refs/heads/main/src/assets/video/4990317-hd_1920_1080_30fps.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      {progress < max ? (
        <div className="w-screen h-screen bg-black flex justify-center items-center">
          <div className="z-10">
            <div
              style={{ visibility: progress % 15 == 0 ? "hidden" : "visible" }}
              className="w-44 h-24 my-12 flex items-center justify-center bg-[url('./assets/logo/vDuB.svg')] bg-center bg-cover"
            ></div>
            <div
              style={{ width: `${progress}%` }}
              className="h-[2px] my-4 bg-customPrimary-50"
            ></div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-full h-full font-custom xl:px-96 xl:py-12 lg:px-24 lg:py-12">
          <Header isMobile={isMobile} currentLabel={currentLabel} handleCurrentLabel={handleCurrentLabel}/>
          <div className={`${isMobile ? "h-3/5" : "h-3/5"}`}>
            {currentLabel === "whoami" ? (
              <Body isMobile={isMobile}/>
            ) : (
              <Linktree isMobile={isMobile}/>
            )}
          </div>
          <Footer isMobile={isMobile} currentLabel={currentLabel}/>
        </div>
      )}8 Marzo - Posizione: 64/772
    </div>
  );
}

export default App;
