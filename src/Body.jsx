import PTLogo from "./assets/images/PenTest+ce certified Logo.png";

function Body() {
  return (
    <content>
      <div className="text-[#D1C5C0]">
        <div>
          <p className="my-4 text-2xl">2024</p>
        </div>
        <h1 className="my-8 text-4xl">Junior Penetration Tester</h1>
        <div className="flex items-center space-x-4">
          <img className="w-32" src={PTLogo} />
          <div>
            <h1 className="text-2xl">CompTIA PenTest+ ce Certification</h1>
            <p>Expires on September 25, 2027</p>
          </div>
        </div>
        <div className="w-full grid place-items-end">
          <img
            className="w-80 mt-12"
            src="https://tryhackme-badges.s3.amazonaws.com/0xDuB.png"
            alt="Your Image Badge"
          />
        </div>
      </div>
    </content>
  );
}

export default Body;
