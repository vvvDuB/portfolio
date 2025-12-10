import THM from "./assets/logo/tryhackme-logo.png";
/*import IG from "./assets/logo/instagram-logo.png";*/
import GH from "./assets/logo/github-logo.png";
import DS from "./assets/logo/discord-logo.png";
import CW from "./assets/logo/codewars.svg"
import Clipboard from "./assets/logo/clipboard.png"
import TypingEffect from "./util/TypingEffect";
import ClipFirstFrame from "./assets/logo/clipanimation.png"
import ClipAnimation from "./assets/video/ClipAnimation2.gif"
import { useEffect, useState } from "react";

function Linktree({ isMobile }) {
  const link1 = {
    icon: THM,
    url: "https://tryhackme.com/r/p/0xDuB",
    text: "0xDuB",
    textImg: "",
    cta: false
  };
  const link2 = {
    icon: GH,
    url: "https://github.com/vvvDuB",
    text: "vvvDuB",
    textImg: "",
    cta: false
  };
  const link3 = {
    icon: DS,
    url: "discord",
    text: "vvvdub",
    textImg: Clipboard,
    cta: true
  };
  const link4 = {
    icon: CW,
    url: "https://www.codewars.com/users/vDuB",
    text: "Codewars",
    cta: false
  };

  const links = [link1, link2, link3, link4];

  return (
    <div className={`w-full text-customWhite-50 md:my-16 font-custom ${isMobile ? "mt-6" : "mt-20"}`}>
      <div className="flex flex-col items-center justify-center xl:space-y-10 lg:space-y-6 space-y-8">
        <h3 className="text-2xl text-customWhite-50 text-center">
          <TypingEffect text={"./0xDuB"} />
        </h3>
        {links.map((el) => (
          <Link
            key={el.text}
            logo={el.icon}
            url={el.url}
            text={el.text}
            textImg={el.textImg}
            cta={el.cta}
          />
        ))}
      </div>
    </div>
  );
}

function Link({ logo, url, text, textImg, cta }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Errore durante la copia:", err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const customClass = `cursor-pointer h-14 border-2 bg-customPrimary-50 border-customPrimary-50 flex items-center px-6 rounded-md ${!cta && "hover:translate-x-4"} text-customWhite-50 duration-300 w-56 sm:w-64`

  return (
    <>
      {cta ? (
        <div
          onClick={handleCopy}
          className={customClass}
        >
          <img className="w-8" src={logo} />
          <div className="flex items-center">
            <p className="mx-4">{text}</p>
            <img src={copied ? ClipAnimation : ClipFirstFrame} alt="Clip Gif" className="w-7"/>
          </div>
        </div>
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className={customClass}>
            <img className="w-8" src={logo} />
            <div>
              <p className="mx-4">{text}</p>
            </div>
          </div>
        </a>
      )}
    </>
  );
}

export default Linktree;
