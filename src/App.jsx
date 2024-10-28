import Header from "./Header";
import Body from "./Body";
import { useState } from "react";
import Footer from "./Footer";
import Linktree from "./Linktree";

function App() {
  const [currentLabel, setCurrentLabel] = useState("whoami");

  function currentLabelHandler(label) {
    setCurrentLabel(label);
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/src/assets/video/4990317-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 w-full h-full bg-[#272932] px-96 py-16 font-custom bg-opacity-70">
        <Header
          currentLabel={currentLabel}
          currentLabelHandler={currentLabelHandler}
        />
        {currentLabel === "whoami" ? (
          <Body currentLabel={currentLabel} />
        ) : (
          <Linktree />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
