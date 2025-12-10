import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TypingEffect from "./util/TypingEffect";
import { certifications, tryhackmeProfile } from "./data/certifications";

import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import PauseSharpIcon from "@mui/icons-material/PauseSharp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Body({ isMobile }) {
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentPage = certifications[counter];

  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % certifications.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  function counterHandler(step) {
    if (step < 0 && counter === 0) {
      setCounter(certifications.length - 1);
    } else if (step > 0 && counter === certifications.length - 1) {
      setCounter(0);
    } else {
      setCounter((prev) => prev + step);
    }
  }

  function getLayoutClasses() {
    if (currentPage.layout === "grid") {
      return {
        container: `cursor-pointer flex items-center space-x-4 xl:my-16 ${isMobile ? "my-6" : "my-10"}`,
        logo: "w-12",
        wrapper: `grid ${isMobile ? "grid-cols-2 gap-2" : "grid-cols-3 gap-2"} mx-4`,
      };
    }
    return {
      container: `cursor-pointer flex items-center space-x-4 xl:my-24 ${isMobile ? "my-12" : "my-16"}`,
      logo: "w-16",
      wrapper: "",
    };
  }

  const layoutClasses = getLayoutClasses();

  return (
    <div className={`text-customWhite-50 ${isMobile && "p-4"}`}>
      <div className="flex justify-between xl:my-2 lg:my-4">
        <p className="xl:text-2xl lg:text-xl hover:text-customPrimary-50">
          {currentPage.date}
        </p>
        <div className="flex justify-between items-center">
          <ArrowBackIosNewSharpIcon
            onClick={() => counterHandler(-1)}
            className="cursor-pointer hover:text-customPrimary-50"
          />
          {isPaused ? (
            <PlayArrowIcon
              onClick={() => setIsPaused(false)}
              fontSize="large"
              className="cursor-pointer hover:text-customPrimary-50"
            />
          ) : (
            <PauseSharpIcon
              onClick={() => setIsPaused(true)}
              fontSize="large"
              className="cursor-pointer hover:text-customPrimary-50"
            />
          )}
          <ArrowForwardIosSharpIcon
            onClick={() => counterHandler(1)}
            className="cursor-pointer hover:text-customPrimary-50"
          />
        </div>
      </div>
      <div className={isMobile ? "py-3" : ""}>
        <TypingEffect
          text={currentPage.title}
          fontSize={isMobile ? "16px" : "24px"}
        />
      </div>
      <div className={layoutClasses.wrapper}>
        {currentPage.certs.map((cert) => (
          <Cert
            key={cert.certTitle}
            logo={cert.logo}
            title={cert.certTitle}
            url={cert.url}
            text={cert.certText}
            logoClass={layoutClasses.logo}
            containerClass={layoutClasses.container}
            counter={counter}
            isMobile={isMobile}
          />
        ))}
      </div>
      {currentPage.hasImage && (
        <div
          className={`w-full grid place-items-end ${isMobile && "scale-75"} hover:scale-105 duration-300 xl:mt-44 lg:mt-24`}
        >
          <a
            href={tryhackmeProfile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-80"
              src={tryhackmeProfile.badgeSrc}
              alt={tryhackmeProfile.alt}
            />
          </a>
        </div>
      )}
    </div>
  );
}

function Cert({
  logo,
  title,
  url,
  text,
  logoClass,
  containerClass,
  counter,
  isMobile,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    );
  }, []);

  useEffect(() => {
    gsap.to(elementRef.current, { opacity: 0, duration: 1 }).then(() => {
      gsap.to(elementRef.current, { opacity: 1, duration: 1 });
    });
  }, [counter]);

  const content = (
    <div className={containerClass} ref={elementRef}>
      <img className={logoClass} src={logo} alt={title} />
      <div className="hover:text-customPrimary-50">
        <h1 className={`xl:text-2xl lg:text-xl ${isMobile && "text-sm"}`}>
          {title}
        </h1>
        {text && <p className={isMobile ? "text-xs" : ""}>{text}</p>}
      </div>
    </div>
  );

  if (url === "#") {
    return content;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}

export default Body;
