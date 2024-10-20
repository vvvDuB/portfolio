import { useState } from "react";

function Header() {
  const labels = ["whoami", "socials"];
  const [currentLabel, setCurrentLabel] = useState("");

  function currentLabelHandler(label) {
    setCurrentLabel(label);
  }

  return (
    <header className="flex flex-col space-y-8 border-0 border-red-600">
      <h1 className="text-[#FDF500] text-5xl">./ 0xDuB</h1>
      <div className="flex space-x-16 border-b-2 border-[#FDF500]">
        {labels.map((label) => (
          <Labels
            key={label}
            label={label}
            currentLabel={currentLabel}
            currentLabelHandler={currentLabelHandler}
          />
        ))}
      </div>
      <h1>{currentLabel}</h1>
    </header>
  );
}

function Labels({ label, currentLabel, currentLabelHandler }) {
  return (
    <h1
      onClick={() => currentLabelHandler(label)}
      className={
        currentLabel === label
          ? "text-[#FDF500] cursor-pointer hover:text-[#FDF500] text-3xl my-8"
          : "text-[#D1C5C0] cursor-pointer hover:text-[#FDF500] text-3xl my-8"
      }
    >
      {label}
    </h1>
  );
}

export default Header;
