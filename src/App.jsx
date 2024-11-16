import Header from "./Header";
import Body from "./Body";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Linktree from "./Linktree";

function App() {
  const [currentLabel, setCurrentLabel] = useState("whoami");
  const [isMobile, setMobile] = useState(false);
  const [isIpad, setIpad] = useState(false);
  const [progress, setProgress] = useState(0);

  function currentLabelHandler(label) {
    setCurrentLabel(label);
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setMobile(true);
        setIpad(false);
        currentLabelHandler("socials");
      } else if (width >= 768 && width <= 1200) {
        setMobile(false);
        setIpad(true);
        currentLabelHandler("whoami");
      } else {
        setMobile(false);
        setIpad(false);
        currentLabelHandler("whoami");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.title = `0xDuB - ${currentLabel}`;
  }, [currentLabel]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
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
      {progress < 100 ? (
        <div className="w-screen h-screen bg-black flex justify-center items-center">
          <div className="z-10">
            <div
              style={{ visibility: progress % 15 == 0 ? "hidden" : "visible" }}
              className="w-28 h-24 my-12 flex items-center justify-center bg-[url('./assets/logo/output-onlinetools-removebg-preview2.png')] bg-center bg-cover"
            ></div>
            <div
              style={{ width: `${progress}%` }}
              className="h-[2px] my-4 bg-customPrimary-50"
            ></div>
          </div>
        </div>
      ) : (
        <div
          className={
            isIpad
              ? `relative z-10 w-full h-full px-24 py-6 font-custom`
              : `relative z-10 w-full h-full px-4 lg:px-96 py-8 lg:py-16 font-custom`
          }
        >
          {!isMobile && (
            <Header
              isMobile={isMobile}
              currentLabel={currentLabel}
              currentLabelHandler={currentLabelHandler}
            />
          )}
          {currentLabel === "whoami" ? (
            <Body currentLabel={currentLabel} isIpad={isIpad} />
          ) : (
            <Linktree isIpad={isIpad} />
          )}
          <Footer isMobile={isMobile} />
        </div>
      )}
    </div>
  );
}

export default App;
