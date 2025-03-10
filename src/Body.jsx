import PTLogo from "./assets/images/PenTest+ce certified Logo.png";
import CCNALogo from "./assets/images/CCNA.png";
import LinuxLogo from "./assets/images/Linux.png";
import React from "./assets/images/React.png";
import Angular from "./assets/images/Angular.png";
import Typescript from "./assets/images/Typescript.png";
import CSS from "./assets/images/CSS.png";
import JS from "./assets/images/JS.png";
import HTML from "./assets/images/HTML.png";
import Olicyber from "./assets/logo/Olicyber.png"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TypingEffect from "./util/TypingEffect";

function Body({ isMobile }) {
  const [counter, setCounter] = useState(0);

  /*
  useEffect(() => {
    document.title = `0xDuB - ${currentLabel}`;
  }, [currentLabel]);
  */

  const img = (
    <div className={`w-full grid place-items-end ${isMobile && "scale-75"} hover:scale-105 duration-300 xl:mt-44 lg:mt-24`}>
      <a href="https://tryhackme.com/r/p/0xDuB" target="_blank">
        <img
          className="w-80"
          src="https://tryhackme-badges.s3.amazonaws.com/0xDuB.png"
          alt="Your Image Badge"
        />
      </a>
    </div>
  );

  const cert1 = {
    date: 2024,
    title: "Junior Penetration Tester",
    classNames: ["cursor-pointer flex items-center space-x-4 xl:my-24 my-16", "w-16", ""],
    certs: [
      {
        logo: PTLogo,
        certTitle: "CompTIA PenTest+ ce Certification",
        certText: "Expires on September 25, 2027",
      },
    ],
    img: img,
  };

  const cert2 = {
    date: 2024,
    title: "System Administrator",
    classNames: ["cursor-pointer flex items-center space-x-4 xl:my-24 my-16", "w-16" , ""],
    certs: [
      {
        logo: CCNALogo,
        certTitle: "Cisco CCNAv7: Switching, Routing, and Wireless Essentials",
        certText: "24/07/2024",
      },
      {
        logo: LinuxLogo,
        certTitle: "NDG Linux Essentials",
        certText: "16/05/2024",
      },
    ],
  };

  const cert3 = {
    date: 2023,
    title: "Web Developer",
    classNames: [`cursor-pointer flex items-center space-x-4 xl:my-16 ${!isMobile && "my-10"} my-1`, "w-12", `grid ${isMobile ? "grid-cols-2 gap-2" : "grid-cols-3 gap-2"} mx-4`],
    certs: [
      {
        logo: React,
        certTitle: "React",
        certText: "",
      },
      {
        logo: Angular,
        certTitle: "Angular",
        certText: "",
      },
      {
        logo: Typescript,
        certTitle: "Typescript",
        certText: "",
      },
      {
        logo: CSS,
        certTitle: "CSS",
        certText: "",
      },
      {
        logo: JS,
        certTitle: "JS",
        certText: "",
      },
      {
        logo: HTML,
        certTitle: "HTML",
        certText: "",
      },
    ],
  };

  const cert4 = {
    date: 2025,
    title: "Olicyber - Olimpiadi Italiane di Cybersicurezza",
    classNames: ["cursor-pointer flex items-center space-x-4 xl:my-24 my-16", "w-16", ""],
    certs: [
      {
        logo: Olicyber,
        certTitle: "Ammesso alla selezione territoriale",
        certText: "18 Gennario - Posizione: 720/2600",
      },
      {
        logo: Olicyber,
        certTitle: "Graduatoria selezione territoriale",
        certText: "8 Marzo - Posizione: 64/772",
      },
    ],
  };

  const pages = [cert4, cert1, cert2, cert3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % pages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [counter]);

  function counterHandler() {
    setCounter((prevCounter) => (prevCounter < pages.length ? prevCounter + 1 : 0));
  }

  return (
    <div className={`text-customWhite-50 ${isMobile && "p-4"}`}>
      <div className={`flex justify-between xl:my-2 lg:my-4`}>
        <p className="xl:text-2xl lg:text-xl hover:text-customPrimary-50">
          {pages[counter].date}
        </p>
        <h1
          onClick={() => counterHandler()}
          className={`cursor-pointer hover:text-customPrimary-50`}
        >
          {"-->"}
        </h1>
      </div>
      <div className={`${isMobile && "py-3"}`}>
        <TypingEffect text={pages[counter].title} fontSize={isMobile ? "16px" : "24px"}/>
      </div>
      <div className={pages[counter].classNames[2]}>
        {pages[counter].certs.map((cert) => (
          <Certs
            key={cert.certTitle}
            logo={cert.logo}
            title={cert.certTitle}
            classNames={pages[counter].classNames}
            text={cert.certText}
            counter={counter}
            isMobile={isMobile}
          />
        ))}
      </div>
      {pages[counter].img && pages[1].img}
    </div>
  );
}

function Certs({ logo, title, classNames, text, counter, isMobile }) {
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

  console.log(classNames);
  
  return (
    <div
      className={classNames[0]}
      ref={elementRef}
    >
      <img className={classNames[1]} src={logo} />
      <div className="hover:text-customPrimary-50">
        <h1 className={`xl:text-2xl lg:text-xl ${isMobile && "text-sm"}`}>{title}</h1>
        <p className={`${isMobile && "text-xs"}`}>{text}</p>
      </div>
    </div>
  );
}

export default Body;
