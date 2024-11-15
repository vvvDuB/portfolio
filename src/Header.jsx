function Header({ currentLabel, currentLabelHandler }) {
  const labels = ["whoami", "socials"];
  return (
    <header className="flex flex-col space-y-8 border-0 border-red-600">
      <h1 className="text-customPrimary-50 text-5xl">./0xDuB</h1>
      <div className="flex space-x-16 border-b-2 border-customPrimary-50">
        {labels.map((label) => (
          <Labels
            key={label}
            label={label}
            currentLabel={currentLabel}
            currentLabelHandler={currentLabelHandler}
          />
        ))}
      </div>
    </header>
  );
}

function Labels({ label, currentLabel, currentLabelHandler }) {
  return (
    <h1
      onClick={() => currentLabelHandler(label)}
      className={
        currentLabel === label
          ? "text-customPrimary-50 cursor-pointer hover:text-customPrimary-50 text-3xl my-8"
          : "text-customWhite-50 cursor-pointer hover:text-customPrimary-50 text-3xl my-8"
      }
    >
      {label}
    </h1>
  );
}

export default Header;
