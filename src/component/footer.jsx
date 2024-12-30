import React from "react";
import Logo from "../assets/footer/logo.svg";
import socialicn1 from "../assets/footer/soclicn (3).svg";
import socialicn2 from "../assets/footer/soclicn (2).svg";
import socialicn3 from "../assets/footer/soclicn (1).svg";

function Footer() {
  return (
    <div className="w-[100%] z-[99] bg-[#181818] pt-[56px] pb-[36px] ">
      <div className="max-w-[1296px]  2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[100%]  mx-auto space-y-[64px]">
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src={Logo}
              alt="footer logo"
              className="w-[120.996px] h-[117.093px]"
            />
            <h3 className="w-[266px] h-[34px] text-[42px] font-[800] leading-[92.019%] tracking-[-2.453px] text-[#FFF]">
              <span className="text-[#ECB214]">DOGE</span>VS
              <span className="text-[#00FF2F]">PEPE</span>{" "}
            </h3>
          </div>
          <div className="space-y-[10px]">
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              DOGEvsPEPE
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              The First Ever Crypto Meme Fight
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              The Rules
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              Milestones Mystery Reveals
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              The Community Decides{" "}
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              Roadmap
            </a>
          </div>
          <div className="space-y-[10px]">
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              $DOPE Tokenomics
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              $PEPE Tokenomics
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              Join And Support Your Team On Telegram
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              Don’t Wait – The Race is On!
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              FAQ
            </a>
            <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              Need Help?
            </a>
          </div>
          <div className="max-w-[110px] w-[100%] space-y-[10px] flex flex-col  items-center">
            <h4 className="text-[18px] text-[#fff] font-[400] leading-[119.856%]">
              Join us now{" "}
            </h4>
            <div className="flex space-x-2">
              <img
                src={socialicn1}
                alt="socialicn1"
                className="transition-all duration-300 cursor-pointer hover:scale-110 hover:opacity-80"
              />
              <img
                src={socialicn2}
                alt="socialicn2"
                className="transition-all duration-300 cursor-pointer hover:scale-110 hover:opacity-80"
              />
              <img
                src={socialicn3}
                alt="socialicn3"
                className="transition-all duration-300 cursor-pointer hover:scale-110 hover:opacity-80 "
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1031px] w-[100%] mx-auto space-y-[27px]">
          <p className="text-[18px] font-[400] text-center leading-[119.856%] text-[#fff]">
            Cryptocurrency may be unregulated in your jurisdiction. The value of
            cryptocurrencies may go up as well as down. Profits may be subject
            to capital gains or other taxes applicable in your jurisdiction.
          </p>
          <p className="text-[18px] font-[400] text-center leading-[119.856%] text-[#fff]">
            Copyright 2024 DOGEVSPEPE | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
