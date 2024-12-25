import React from "react";
import Logo from "../assets/navbar/navLogo.svg";
import menu from "../assets/navbar/Group 1410124892.svg";


function Navbar() {
  

  return (
    <div className="fixed w-[100%] z-[99] bg-[#000000]">
      <div className="max-w-[1296px] relative 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[100%]  mx-auto  2xl:h-[112px] xl:h-[112px] lg:h-[112px] md:h-[112px] sm:h-[62px] h-[62px]  flex justify-between items-center px-[17px]">
        <div className="flex items-center">
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block mr-[12px]">
          <img src={menu} alt="" />
        </div>
          <img
            className="2xl:max-w-[100%] xl:max-w-[100%] lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100px] max-w-[130px]"
            src={Logo}
            alt=""
          />
        </div>
        <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden justify-center items-center space-x-[30px]">
          <a
            href="#what-is"
            className="text-[#fff] text-[16px] font-[700]"
          >
           What is DOGEVSPEPE
          </a>
          <a
            href="#rules"
            className="text-[#fff] text-[16px] font-[700]"
          >
            Rules
          </a>
          <a
            href="#how-to-buy"
            className="text-[#fff] text-[16px] font-[700]"
          >
            How To Buy
          </a>
          <a
            href="#whitepaper"
            className="text-[#fff] text-[16px] font-[700]"
          >
            Whitepaper
          </a>
          <a
            href="#tokenomics"
            className="text-[#fff] text-[16px] font-[700]"
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="text-[#fff] text-[16px] font-[700]"
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className="text-[#fff] text-[16px] font-[700]"
          >
            FAQ
          </a>

        </div>
        <div className="flex justify-between space-x-[24px]">
          <button className="2xl:w-[173px] xl:w-[173px] lg:w-[173px] md:w-[173px] sm:w-[173px] w-[109px] 2xl:h-[40px] xl:h-[40px] lg:h-[40px] md:h-[40px] sm:h-[27px]  h-[27px] rounded-[60px] bg-[#0184E2]  text-[#fff]  2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[12px]  text-[11.341px] font-[700]">
          Connect Wallet
          </button>
         
        </div>
      
      </div>
    </div>
  );
}

export default Navbar;
