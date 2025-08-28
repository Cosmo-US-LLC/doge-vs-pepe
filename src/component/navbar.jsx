import Logo from "../assets/navbar/navLogo.svg";

function Navbar() {
  return (
    <div className="fixed w-full z-[99] top-6">
      <div className="max-w-[1280px] rounded-[18px] bg-black/10 backdrop-blur-[16px] relative w-full mx-auto h-[86px] flex justify-center items-center px-8">
        <div className="flex gap-12 justify-center items-center">
          <a
            href="#what-is"
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[19px]"
          >
            What is DogevsPepe?
          </a>
          <a
            href="#rules"
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px]"
          >
            Rules
          </a>
          <a
            href="#how-to-buy"
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px]"
          >
            How To Buy
          </a>
          <div className="flex items-center">
            <img className="max-w-full" src={Logo} alt="DOGEVSPEPE Logo" />
          </div>
          <a
            href="#whitepaper"
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px]"
          >
            Whitepaper
          </a>
          <a
            href="#tokenomics"
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px]"
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px]"
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px]"
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
