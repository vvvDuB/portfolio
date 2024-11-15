import Header from "./Header";
import Body from "./Body";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Linktree from "./Linktree";

function App() {
  const [currentLabel, setCurrentLabel] = useState("whoami");
  const [isMobile, setMobile] = useState(false);

  function currentLabelHandler(label) {
    setCurrentLabel(label);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        currentLabelHandler("socials");
        setMobile(true);
      } else {
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

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://github.com/vvvDuB/portfolio/raw/refs/heads/main/src/assets/video/4990317-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 w-full h-full bg-[#272932] px-4 lg:px-96 py-8 lg:py-16 font-custom bg-opacity-70">
        {!isMobile && (
          <Header
            isMobile={isMobile}
            currentLabel={currentLabel}
            currentLabelHandler={currentLabelHandler}
          />
        )}
        {currentLabel === "whoami" ? (
          <Body currentLabel={currentLabel} />
        ) : (
          <Linktree />
        )}
        {!isMobile && <Footer />}
      </div>
    </div>
  );
}

export default App;
