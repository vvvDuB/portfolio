import THM from "./assets/logo/tryhackme-logo.png";
import IG from "./assets/logo/instagram-logo.png";
import GH from "./assets/logo/github-logo.png";
import DS from "./assets/logo/discord-logo.png";

function Linktree() {
  const link1 = {
    icon: THM,
    url: "https://tryhackme.com/r/p/0xDuB",
    text: "Tryhackme",
  };
  const link2 = {
    icon: GH,
    url: "https://github.com/vvvDuB",
    text: "vvvDuB",
  };
  const link3 = {
    icon: IG,
    url: "https://www.instagram.com/",
    text: "Instagram",
  };
  const link4 = {
    icon: DS,
    url: "#",
    text: "Discord",
  };

  const links = [link1, link2, link3, link4];

  return (
    <div className="w-full my-12 text-[#D1C5C0]">
      <div className="flex flex-col items-center justify-center space-y-8">
        <a href="/">
          <div className="w-16 h-16 rounded-full border-2 border-[#bffe00] flex items-center justify-center bg-[url('./assets/images/Propic.png')] bg-center bg-cover"></div>
        </a>
        {links.map((el) => (
          <Link key={el.text} logo={el.icon} url={el.url} text={el.text} />
        ))}
      </div>
    </div>
  );
}

function Link({ logo, url, text }) {
  return (
    <a href={url} target="_blank">
      <div className="cursor-pointer w-64 h-16 border-2 bg-[#bffe00] border-[#bffe00] flex items-center px-4 rounded-md hover:translate-x-4 text-[#272932] duration-300">
        <img src={logo} />
        <p className="mx-4">{text}</p>
      </div>
    </a>
  );
}

export default Linktree;
