function Footer({ isMobile }) {
  return (
      <div className={`text-customWhite-50 text-xs flex border-t-2 border-customPrimary-50 py-4 ${isMobile ? "mt-36 justify-center" : "mt-16 justify-between"}`}>
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
