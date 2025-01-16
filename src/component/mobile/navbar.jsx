import React, { useState } from "react";
// import Logo from "../../assets/navbar/navLogo.svg";
import Logo from "../../assets/Mobile/nav-logo.webp";
import menuIcon from "../../assets/navbar/Group 1410124892.svg";
import { getConfig, useAccount } from "../../presale-gg/web3";
// import { getConfig, useAccount } from "../presale-gg/web3";
// import { getConfig, useAccount } from "../../component/"
import { disconnect } from "@wagmi/core";
import { showConnectionModal } from "../../presale-gg/stores/modal.store";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    const accountData = useAccount();

  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <div className="fixed w-[100%]  z-[99] bg-[#000000]">
      <div className="max-w-[1296px] relative 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[100%] mx-auto 2xl:h-[112px] xl:h-[112px] lg:h-[112px] md:h-[112px] sm:h-[62px] h-[72px] flex justify-between items-center px-[17px]">
        <div className="flex items-center">
          <div
            className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block mr-[12px] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={menuIcon} alt="Menu " className=" w-[19px] h-[19px]"/>
          </div>

          <img
            className="2xl:max-w-[100%] xl:max-w-[100%] lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100px] max-w-[140px] cursor-pointer"
            src={Logo}
            alt="Logo"
            onClick={(e) => handleScroll(e, "what-is", 90)}
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden justify-center items-center space-x-[30px]">
          <a
            href="#what-is"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "what-is", 90)}
          >
            What is DOGEVSPEPE
          </a>
          <a
            href="#rules"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "rules", 90)}
          >
            Rules
          </a>
          <a
            href="#how-to-buy"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "how-to-buy", 90)}
          >
            How To Buy
          </a>
          <a
            href="#whitepaper"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "whitepaper", 90)}
          >
            Whitepaper
          </a>
          <a
            href="#tokenomics"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "tokenomics", 90)}
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "roadmap", 90)}
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "faq", 90)}
          >
            FAQ
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="absolute top-[73px] left-[20px] w-[230px] bg-[#000000] text-[#FFFFFF] z-[100]">
            <div className="border-[2px] border-white rounded-[4px] px-2 py-4">
              <a
                href="#what-is"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "what-is", 90)}
              >
                What is DOGEVSPEPE
              </a>
              <a
                href="#rules"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "rules", 90)}
              >
                Rules
              </a>
              <a
                href="#how-to-buy"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "how-to-buy", 90)}
              >
                How To Buy
              </a>
              <a
                href="#whitepaper"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "whitepaper", 90)}
              >
                Whitepaper
              </a>
              <a
                href="#tokenomics"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "tokenomics", 90)}
              >
                Tokenomics
              </a>
              <a
                href="#roadmap"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "roadmap", 90)}
              >
                Roadmap
              </a>
              <a
                href="#faq"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "faq", 90)}
              >
                FAQ
              </a>
            </div>
          </div>
        )}

        <div className="flex justify-between space-x-[24px]">
          <button
            className="w-[93px] h-[21px] bg-gradient-to-r
                   rounded-[32px] bg-[#0184E2] text-black text-[10px]
                   from-[#FFBF01] to-[#01FE37] 
                   font-[700] transition-all duration-300 hover:bg-[#F2B60F] hover:scale-105"
              onClick={async () => {
                            if (accountData.isConnected) {
                              const { config } = await getConfig();
                              disconnect(config);
                            } else {
                              showConnectionModal();
                            }
                          }}
          >
            {/* Connect Wallet */}
            {!accountData.isConnected ? "Get Early Access" : "Disconnect Wallet"}
          </button>
          {/* <button
            className="2xl:w-[173px] xl:w-[173px] lg:w-[173px] md:w-[173px] sm:w-[173px] w-[109px] 
                   2xl:h-[40px] xl:h-[40px] lg:h-[40px] md:h-[40px] sm:h-[27px] h-[36px] 
                   rounded-[60px] bg-[#0184E2] text-[#fff] 
                   2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[12px] text-[12px] 
                   font-[700] transition-all duration-300 hover:bg-[#F2B60F] hover:scale-105"
          >
            Connect Wallet
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
