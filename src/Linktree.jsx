import THM from "./assets/logo/tryhackme-logo.png";
import IG from "./assets/logo/instagram-logo.png";
import GH from "./assets/logo/github-logo.png";
import DS from "./assets/logo/discord-logo.png";
import TypingEffect from "./util/TypingEffect";

function Linktree({ isMobile }) {
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
    <div
      className={
        !isMobile ? `w-full my-4 text-[#D1C5C0]` : `w-full my-12 text-[#D1C5C0]`
      }
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        <a href="/">
          <div className="w-16 h-16 mt-2 flex items-center justify-center bg-[url('./assets/logo/output-onlinetools-removebg-preview2.png')] bg-center bg-cover"></div>
        </a>
        {!isMobile && (
          <h3 className="text-2xl text-[#bffe00] text-center">
            <TypingEffect text={"./ 0xDuB"} />
          </h3>
        )}
        {links.map((el) => (
          <Link
            key={el.text}
            logo={el.icon}
            url={el.url}
            text={el.text}
            mobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}

function Link({ logo, url, text, mobile }) {
  return (
    <a href={url} target="_blank">
      <div
        className={
          !mobile
            ? `cursor-pointer w-56 h-14 border-2 bg-[#bffe00] border-[#bffe00] flex items-center px-4 rounded-md hover:translate-x-4 text-[#272932] duration-300`
            : `cursor-pointer w-64 h-16 border-2 bg-[#bffe00] border-[#bffe00] flex items-center px-4 rounded-md hover:translate-x-4 text-[#272932] duration-300`
        }
      >
        <img src={logo} />
        <p className="mx-4">{text}</p>
      </div>
    </a>
  );
}

export default Linktree;
