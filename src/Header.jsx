import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header({ isMobile, currentLabel, handleCurrentLabel, isDarkMode, toggleTheme }) {
  const labels = ["whoami", "socials"];
  return (
    <header className="flex flex-col -space-y-6">
      <div className={`flex ${isMobile ? "justify-center" : "justify-between"} items-center`}>
        <a className={`flex ${isMobile && "justify-center"}`} href="/portfolio/">
          <div className={`w-40 h-20 flex items-center ${isMobile && "scale-50"} justify-center bg-[url('./assets/logo/vDuB.svg')] bg-center bg-cover xl:my-4 lg:my-3`}></div>
        </a>
        {!isMobile && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <LightModeIcon className="text-customWhite-50 hover:text-customPrimary-50" />
            ) : (
              <DarkModeIcon className="text-gray-800 hover:text-customPrimary-50" />
            )}
          </button>
        )}
      </div>
      <div className={`flex border-b-2 space-x-16 border-customPrimary-50 ${isMobile && "justify-center text-xl"}`}>
        {labels.map((label) => (
          <Labels
            key={label}
            label={label}
            currentLabel={currentLabel}
            handleCurrentLabel={handleCurrentLabel}
            isMobile={isMobile}
          />
        ))}
        {isMobile && (
          <button
            onClick={toggleTheme}
            className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <LightModeIcon className="text-customWhite-50 hover:text-customPrimary-50 text-xl" />
            ) : (
              <DarkModeIcon className="text-gray-800 hover:text-customPrimary-50 text-xl" />
            )}
          </button>
        )}
      </div>
    </header>
  );
}

function Labels({ label, currentLabel, handleCurrentLabel, isMobile }) {
  return (
    <h1 
      onClick={() => handleCurrentLabel(label)}
      className={`cursor-pointer hover:text-customPrimary-50 hover:translate-y-2 duration-300 xl:text-3xl lg:text-2xl ${isMobile ? "my-4" : "my-8"} ${currentLabel === label ? "text-customPrimary-50" : "text-customWhite-50 dark:text-customWhite-50 text-gray-800"}`}
      >
      {label}
    </h1>
  );
}

export default Header;
