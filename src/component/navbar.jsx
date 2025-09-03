import Logo from "../assets/navbar/navLogo.svg";

function Navbar() {
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -50; // offset = stop 50px before
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full z-[9999] top-6">
      <div className="max-w-[1280px] rounded-[18px] bg-black/10 backdrop-blur-[16px] relative w-full mx-auto h-[86px] flex justify-center items-center px-8">
        <div className="flex gap-12 justify-center items-center">
          <button
            onClick={() => handleScroll("what_is")}
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[19px] bg-transparent border-0 cursor-pointer"
          >
            What is DogevsPepe?
          </button>
          <button
            onClick={() => handleScroll("fight_rules")}
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px] bg-transparent border-0 cursor-pointer"
          >
            Fight Rules
          </button>
          <button
            onClick={() => handleScroll("prize_money")}
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px] bg-transparent border-0 cursor-pointer"
          >
            Prize Money
          </button>

          <div className="flex items-center">
            <img className="max-w-full" src={Logo} alt="DOGEVSPEPE Logo" />
          </div>

          <button
            onClick={() => handleScroll("how_to_buy")}
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px] bg-transparent border-0 cursor-pointer"
          >
            How to Buy
          </button>
          <button
            onClick={() => handleScroll("tokenomics")}
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px] bg-transparent border-0 cursor-pointer"
          >
            Tokenomics
          </button>
          <button
            onClick={() => handleScroll("roadmap")}
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px] bg-transparent border-0 cursor-pointer"
          >
            Roadmap
          </button>
          <button
            onClick={() => handleScroll("faq")}
            className="text-[#fff] text-[16px] font-bold font-helvetica leading-[18.72px] bg-transparent border-0 cursor-pointer"
          >
            FAQ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
