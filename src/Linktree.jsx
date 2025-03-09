import THM from "./assets/logo/tryhackme-logo.png";
/*import IG from "./assets/logo/instagram-logo.png";*/
import GH from "./assets/logo/github-logo.png";
import DS from "./assets/logo/discord-logo.png";
import TypingEffect from "./util/TypingEffect";

function Linktree({ isMobile }) {
  const link1 = {
    icon: THM,
    url: "https://tryhackme.com/r/p/0xDuB",
    text: "0xDuB",
  };
  const link2 = {
    icon: GH,
    url: "https://github.com/vvvDuB",
    text: "vvvDuB",
  };
  /*const link3 = {
    icon: IG,
    url: "https://www.instagram.com/",
    text: "Instagram",
  };*/
  const link4 = {
    icon: DS,
    url: "discord",
    text: "vvvdub",
  };

  const links = [link1, link2, link4];

  return (
    <div className="w-full text-customWhite-50 md:my-16 mt-20 my-2 font-custom">
      <div className="flex flex-col items-center justify-center xl:space-y-10 lg:space-y-6 space-y-8">
        {isMobile ? (
          <h3 className="text-2xl text-customWhite-50 text-center">
            <TypingEffect text={"./0xDuB"} />
          </h3>
        ) : 
          <a href="/portfolio/">
            <div className="w-40 h-20 flex items-center justify-center bg-[url('./assets/logo/vDuB.svg')] bg-center bg-cover xl:my-4 lg:my-3 my-8"></div>
          </a>}
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

function Link({ logo, url, text }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Errore durante la copia:", err);
    }
  };

  return (
    <>
      {url === "discord" ? (
        <div
          onClick={handleCopy}
          className="cursor-pointer h-14 border-2 bg-customPrimary-50 border-customPrimary-50 flex items-center px-6 rounded-md hover:translate-x-4 text-customWhite-50 duration-300 w-56 sm:w-64"
        >
          <img src={logo} />
          <p className="mx-4">{text}</p>
        </div>
      ) : (
        <a href={url} target="_blank">
          <div className="cursor-pointer h-14 border-2 bg-customPrimary-50 border-customPrimary-50 flex items-center px-6 rounded-md hover:translate-x-4 text-customWhite-50 duration-300 w-56 sm:w-64">
            <img src={logo} />
            <p className="mx-4">{text}</p>
          </div>
        </a>
      )}
    </>
  );
}

export default Linktree;
