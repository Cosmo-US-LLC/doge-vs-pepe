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
            onClick={(e) => handleScroll(e, "how-it-all-began", 90)}
          >
            What is DogevsPepe?
          </a>
          <a
            href="#rules"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "rules", 90)}
          >
            The 7 Rules
          </a>
          {/* <a
            href="#how-to-buy"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "how-to-buy", 90)}
          >
            How To Buy
          </a> */}
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
                className="block py-[8px] px-[12px] text-[#FFF] font-[Anton] font-[400] text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "whitepaper", 90)}
              >
               What is DogevsPepe?
              </a>
              <a
                href="#rules"
                className="block py-[8px] px-[12px] text-[#FFF] font-[Anton] font-[400] text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "rules", 90)}
              >
                The 7 Rules
              </a>
              {/* <a
                href="#how-to-buy"
                className="block py-[8px] px-[12px] text-[#FFF] font-[Anton] font-[400] text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "how-to-buy", 90)}
              >
                How To Buy
              </a> */}
              <a
                href="#whitepaper"
                className="block py-[8px] px-[12px] text-[#FFF] font-[Anton] font-[400] text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "whitepaper", 90)}
              >
                Whitepaper
              </a>
              <a
                href="#tokenomics"
                className="block py-[8px] px-[12px] text-[#FFF] font-[Anton] font-[400] text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "tokenomics", 90)}
              >
                Tokenomics
              </a>
              <a
                href="#roadmap"
                className="block py-[8px] px-[12px] text-[#FFF] font-[Anton] font-[400] text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "roadmap", 90)}
              >
                Roadmap
              </a>
              <a
                href="#faq"
                className="block py-[8px] px-[12px] text-[#FFF] font-[Anton] font-[400] text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "faq", 90)}
              >
                FAQ
              </a>
            </div>
          </div>
        )}
        <div
          className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block mr-[12px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.50001 17.2704C4.35801 17.2704 4.23934 17.2221 4.14401 17.1254C4.04867 17.0288 4.00067 16.9098 4.00001 16.7684C3.99934 16.6271 4.04734 16.5084 4.14401 16.4124C4.24067 16.3164 4.35934 16.2688 4.50001 16.2694H19.5C19.642 16.2694 19.7607 16.3174 19.856 16.4134C19.952 16.5094 20 16.6284 20 16.7704C20 16.9124 19.952 17.0311 19.856 17.1264C19.76 17.2218 19.6413 17.2694 19.5 17.2694L4.50001 17.2704ZM4.50001 12.5004C4.35801 12.5004 4.23934 12.4524 4.14401 12.3564C4.04867 12.2604 4.00067 12.1414 4.00001 11.9994C3.99934 11.8574 4.04734 11.7388 4.14401 11.6434C4.24067 11.5481 4.35934 11.5004 4.50001 11.5004H19.5C19.642 11.5004 19.7607 11.5484 19.856 11.6444C19.9513 11.7404 19.9993 11.8594 20 12.0014C20.0007 12.1434 19.9527 12.2621 19.856 12.3574C19.7593 12.4528 19.6407 12.5004 19.5 12.5004H4.50001ZM4.50001 7.73045C4.35801 7.73045 4.23934 7.68278 4.14401 7.58745C4.04801 7.49145 4.00001 7.37245 4.00001 7.23045C4.00001 7.08845 4.04801 6.96978 4.14401 6.87445C4.24001 6.77911 4.35867 6.73145 4.50001 6.73145H19.5C19.642 6.73145 19.7607 6.77945 19.856 6.87545C19.9513 6.97145 19.9993 7.08978 20 7.23045C20.0007 7.37111 19.9527 7.48978 19.856 7.58645C19.7593 7.68311 19.6407 7.73111 19.5 7.73045H4.50001Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
