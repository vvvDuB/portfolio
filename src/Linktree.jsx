function Linktree() {
  const link1 = {
    url: "https://tryhackme.com/r/p/0xDuB",
    text: "Try Hack Me",
  };
  const link2 = {
    url: "http://localhost:5173",
    text: "Suca 2",
  };
  const link3 = {
    url: "http://localhost:5173",
    text: "Suca 3",
  };

  const links = [link1, link2, link3];

  return (
    <div className="w-full my-12 text-[#D1C5C0]">
      <div className="flex flex-col items-center justify-center space-y-8">
        <a href="/">
          <div className="w-16 h-16 rounded-full border-2 border-[#bffe00] flex items-center justify-center bg-[url('./assets/images/Propic.png')] bg-center bg-cover"></div>
        </a>
        {links.map((el) => (
          <Link key={el.text} url={el.url} text={el.text} />
        ))}
      </div>
    </div>
  );
}

function Link({ url, text }) {
  return (
    <a href={url} target="_blank">
      <div className="cursor-pointer w-64 h-16 border-2 border-[#bffe00] flex items-center justify-center rounded-md  hover:-translate-y-1 hover:scale-110 hover:bg-[#bffe00] hover:text-[#272932] duration-300">
        {text}
      </div>
    </a>
  );
}

export default Linktree;
