import PTLogo from "./assets/images/PenTest+ce certified Logo.png";
import CCNALogo from "./assets/images/CCNA.png";
import LinuxLogo from "./assets/images/Linux.png";
import React from "./assets/images/React.png";
import Angular from "./assets/images/Angular.png";
import Typescript from "./assets/images/Typescript.png";
import CSS from "./assets/images/CSS.png";
import JS from "./assets/images/JS.png";
import HTML from "./assets/images/HTML.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TypingEffect from "./util/TypingEffect";

function Body() {
  const [counter, setCounter] = useState(0);

  const img = (
    <div className="w-full grid place-items-end">
      <img
        className="w-80 mt-6"
        src="https://tryhackme-badges.s3.amazonaws.com/0xDuB.png"
        alt="Your Image Badge"
      />
    </div>
  );

  const cert1 = {
    date: 2024,
    title: "Junior Penetration Tester",
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

  const pages = [cert1, cert2, cert3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [counter]);

  function counterHandler() {
    setCounter((prevCounter) => (prevCounter < 2 ? prevCounter + 1 : 0));
    console.log(counter);
  }

  return (
    <div className="text-[#D1C5C0]">
      <div className="my-4 flex justify-between">
        <p className="text-2xl">{pages[counter].date}</p>
        <h1
          onClick={() => counterHandler()}
          className="cursor-pointer hover:text-[#bffe00]"
        >
          {"-->"}
        </h1>
      </div>
      <TypingEffect text={pages[counter].title} />
      <div className={counter === 2 ? `grid grid-cols-3 gap-2 mx-4` : ""}>
        {pages[counter].certs.map((cert) => (
          <Certs
            key={cert.certTitle}
            logo={cert.logo}
            title={cert.certTitle}
            text={cert.certText}
            counter={counter}
          />
        ))}
      </div>
      {pages[counter].img && pages[0].img}
    </div>
  );
}

function Certs({ logo, title, text, counter }) {
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

  return (
    <div
      className={
        counter === 2
          ? `cursor-pointer flex items-center space-x-4 my-10`
          : `cursor-pointer flex items-center space-x-4 my-16`
      }
      ref={elementRef}
    >
      <img className={counter === 2 ? `w-12` : `w-16`} src={logo} />
      <div className="hover:text-[#bffe00]">
        <h1 className="text-2xl">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Body;
