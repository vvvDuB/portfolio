function Header({ isMobile, currentLabel, handleCurrentLabel }) {
  const labels = ["whoami", "socials"];
  return (
    <header className="flex flex-col -space-y-6">
      <a className={`flex ${isMobile && "justify-center"}`} href="/portfolio/">
        <div className="w-40 h-20 flex items-center scale-50 justify-center bg-[url('./assets/logo/vDuB.svg')] bg-center bg-cover xl:my-4 lg:my-3"></div>
      </a> 
      <div className={`flex border-b-2 space-x-16 border-customPrimary-50 ${isMobile && "justify-center text-xl"}`}>
        {labels.map((label) => (
          <Labels
            key={label}
            label={label}
            currentLabel={currentLabel}
            handleCurrentLabel={handleCurrentLabel}
          />
        ))}
      </div>
    </header>
  );
}

function Labels({ label, currentLabel, handleCurrentLabel }) {
  return (
    <h1 
      onClick={() => handleCurrentLabel(label)}
      className={`cursor-pointer hover:text-customPrimary-50 hover:translate-y-2 duration-300 xl:text-3xl lg:text-2xl my-8 ${currentLabel === label ? "text-customPrimary-50" : "text-customWhite-50"}`}
      >
      {label}
    </h1>
  );
}

export default Header;
