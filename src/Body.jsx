import PTLogo from "./assets/images/PenTest+ce certified Logo.png";
import CCNALogo from "./assets/images/CCNA.png"
import LinuxLogo from "./assets/images/Linux.png"
import { useEffect } from "react";
import { useState } from "react";

function Body() {

  const [counter, setCounter] = useState(0)

  const img = <div className="w-full grid place-items-end"><img className="w-80 mt-12" src="https://tryhackme-badges.s3.amazonaws.com/0xDuB.png" alt="Your Image Badge" /></div>
  
  const first = {
    date : 2024,
    title : "Junior Penetration Tester",
    certs : [
      {
        logo : PTLogo, 
        certTitle : "CompTIA PenTest+ ce Certification", 
        certText : "Expires on September 25, 2027"
      } 
    ],
    img: img
  }

  const second = {
    date : 2024,
    title : "System Administrator",
    certs : [
      {
        logo : CCNALogo, 
        certTitle : "Cisco CCNAv7: Switching, Routing, and Wireless Essentials", 
        certText : "24/07/2024"
      },
      {
        logo : LinuxLogo, 
        certTitle : "NDG Linux Essentials", 
        certText : "16/05/2024"
      }
    ],
  }

  const pages = [first, second]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => (prevCounter === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <content>
      <div className="text-[#D1C5C0]">
        <div>
          <p className="my-4 text-2xl">{pages[counter].date}</p>
        </div>
        <h1 className="my-8 text-4xl">{pages[counter].title}</h1>
        {pages[counter].certs.map((cert) => <Certs key={cert.certTitle} logo={cert.logo} title={cert.certTitle} text={cert.certText} counter={counter}/> )}
        {pages[counter].img && pages[0].img}
      </div>
    </content>
  );
}

function Certs({logo, title, text, counter}) {
  return <div className={counter ? `flex items-center space-x-4 my-16` : `flex items-center space-x-4`}>
  <img className={counter ? `w-16` : `w-32`} src={logo} />
  <div>
    <h1 className="text-2xl">{title}</h1>
    <p>{text}</p>
  </div>
</div>
}

export default Body;
