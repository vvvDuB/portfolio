import PTLogo from "../assets/images/PenTest+ce certified Logo.png";
import CCNALogo from "../assets/images/CCNA.png";
import LinuxLogo from "../assets/images/Linux.png";
import ReactLogo from "../assets/images/React.png";
import Angular from "../assets/images/Angular.png";
import Typescript from "../assets/images/Typescript.png";
import CSS from "../assets/images/CSS.png";
import JS from "../assets/images/JS.png";
import HTML from "../assets/images/HTML.png";
import Olicyber from "../assets/logo/Olicyber.png";

export const certifications = [
  {
    id: "olicyber",
    date: 2025,
    title: "Olicyber - Olimpiadi Italiane di Cybersicurezza",
    hasImage: false,
    layout: "default",
    certs: [
      {
        logo: Olicyber,
        certTitle: "Ammesso alla selezione territoriale",
        certText: "18 Gennario - Posizione: 720/3600",
        url: "https://olicyber.it",
      },
      {
        logo: Olicyber,
        certTitle: "Graduatoria selezione territoriale",
        certText: "8 Marzo - Posizione: 55/466",
        url: "https://olicyber.it",
      },
      {
        logo: Olicyber,
        certTitle: "Finale",
        certText: "",
        url: "https://olicyber.it",
      },
    ],
  },
  {
    id: "pentest",
    date: 2024,
    title: "Junior Penetration Tester",
    hasImage: true,
    layout: "default",
    certs: [
      {
        logo: PTLogo,
        certTitle: "CompTIA PenTest+ ce Certification",
        certText: "Expires on September 25, 2027",
        url: "https://www.credly.com/badges/6d4b6743-ae55-4b42-b7c4-4599ab1cb328",
      },
    ],
  },
  {
    id: "sysadmin",
    date: 2024,
    title: "System Administrator",
    hasImage: false,
    layout: "default",
    certs: [
      {
        logo: CCNALogo,
        certTitle: "Cisco CCNAv7: Switching, Routing, and Wireless Essentials",
        certText: "24/07/2024",
        url: "#",
      },
      {
        logo: LinuxLogo,
        certTitle: "NDG Linux Essentials",
        certText: "16/05/2024",
        url: "#",
      },
    ],
  },
  {
    id: "webdev",
    date: 2023,
    title: "Web Developer",
    hasImage: false,
    layout: "grid",
    certs: [
      {
        logo: ReactLogo,
        certTitle: "React",
        certText: "",
        url: "#",
      },
      {
        logo: Angular,
        certTitle: "Angular",
        certText: "",
        url: "#",
      },
      {
        logo: Typescript,
        certTitle: "Typescript",
        certText: "",
        url: "#",
      },
      {
        logo: CSS,
        certTitle: "CSS",
        certText: "",
        url: "#",
      },
      {
        logo: JS,
        certTitle: "JS",
        certText: "",
        url: "#",
      },
      {
        logo: HTML,
        certTitle: "HTML",
        certText: "",
        url: "#",
      },
    ],
  },
];

export const tryhackmeProfile = {
  url: "https://tryhackme.com/r/p/0xDuB",
  badgeSrc: "https://tryhackme-badges.s3.amazonaws.com/0xDuB.png",
  alt: "TryHackMe Badge",
};
