import Header from "./Header";
import Body from "./Body";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [currentLabel, setCurrentLabel] = useState("whoami");

  function currentLabelHandler(label) {
    setCurrentLabel(label);
  }

  return (
    <div className="w-screen h-screen bg-[#272932] px-96 py-16 font-custom">
      <Header
        currentLabel={currentLabel}
        currentLabelHandler={currentLabelHandler}
      />
      <Body currentLabel={currentLabel} />
      <Footer />
    </div>
  );
}

export default App;
