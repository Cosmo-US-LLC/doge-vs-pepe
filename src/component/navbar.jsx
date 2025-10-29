import Logo from "../assets/navbar/navLogo.svg";
import { Link } from "react-router-dom";

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
    <div className="fixed w-full z-[9999] bg-black/10 backdrop-blur-[16px]">
      <div className="max-w-[1280px] md:px-8 px-4 relative w-full mx-auto h-[86px] flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <a href="/">
            <img className="max-w-full" src={Logo} alt="doge_vs_pepe Logo" />
          </a>
        </div>

        {/* Navigation buttons in the center */}
        <div className="flex items-center gap-12">
          <Link
            to="/"
            onClick={() => handleScroll("what_is")}
            className="navbar_link"
          >
            What is DogevsPepe?
          </Link>
          <Link
            to="/"
            onClick={() => handleScroll("fight_rules")}
            className="navbar_link"
          >
            Fight Rules
          </Link>
          <Link
            to="/"
            onClick={() => handleScroll("prize_money")}
            className="navbar_link"
          >
            Prize Money
          </Link>
          <Link
            to="/"
            onClick={() => handleScroll("how_to_buy")}
            className="navbar_link"
          >
            How to Buy
          </Link>
          <Link
            to="/"
            onClick={() => handleScroll("tokenomics")}
            className="navbar_link"
          >
            Tokenomics
          </Link>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              const el = document.getElementById("wallet");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="btn-primary gradient-bg !text-[16px] max-w-[170px] "
          >
            Join the Presale
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
