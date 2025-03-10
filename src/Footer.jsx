function Footer({ isMobile, currentLabel }) {
  return (
      <div className={`text-customWhite-50 text-xs flex border-t-2 border-customPrimary-50 py-4 ${isMobile ? "justify-center" : "mt-12 justify-between"} ${currentLabel === "socials" ? "mt-20" : "mt-20"}`}>
        <p className={`${isMobile && "text-center"}`}>
          Designed and developed by{" "}
          <a
            className="text-customPrimary-50"
            target="_blank"
            href="https://github.com/vvvDuB"
          >
            vvvDuB
          </a>
        </p>
        {!isMobile && <p>Discord: vvvdub</p>}
      </div>
  );
}

export default Footer;
