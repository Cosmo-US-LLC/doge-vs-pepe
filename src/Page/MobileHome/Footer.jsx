import React from "react";
import socialicn1 from "../../assets/footer/soclicn (3).svg";
import socialicn2 from "../../assets/footer/soclicn (2).svg";
import socialicn3 from "../../assets/footer/soclicn (1).svg";
import dogevspepe from "../../assets/Mobile/dogevspepe.png";

function Footer() {
  return (
    <div className="w-full z-[99] bg-[black] pt-[40px] pb-[20px]">
      <div className="max-w-[1296px] w-[90%] mx-auto space-y-[32px]">
        {/* Logo and Title */}
        <div className="flex flex-col space-y-4">
          <img src={dogevspepe} alt="dogevspepe" className="w-[173px]" />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            DOGEvsPEPE
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            The First Ever Crypto Meme Fight
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            The Rules
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            Milestones Mystery Reveals
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            The Community Decides
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            Roadmap
          </a>
          <a href="https://example.com" className="mt-4 text-[16px] text-[#fff] font-[400] block">
            $DOPE Tokenomics
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            $PEPE Tokenomics
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            Join And Support Your Team On Telegram
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            Don’t Wait – The Race is On!
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            FAQ
          </a>
          <a href="https://example.com" className="text-[16px] text-[#fff] font-[400] block">
            Need Help?
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-[16px] text-[#fff] font-[400]">Join us now</h4>
          <div className="flex space-x-3">
            <img src={socialicn1} alt="social 1" className="w-[24px]" />
            <img src={socialicn2} alt="social 2" className="w-[24px]" />
            <img src={socialicn3} alt="social 3" className="w-[24px]" />
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16">
          <p className="text-[14px] font-[400] text-[#B4A5A5] leading-[18px] text-center">
            Cryptocurrency may be unregulated in your jurisdiction. The value
            of cryptocurrencies may go up as well as down. Profits may be
            subject to capital gains or other taxes applicable in your
            jurisdiction.
          </p>
          <p className="mt-4 text-[14px] font-[400] text-[#fff] leading-[18px] text-center">
            Copyright 2024 DOGEVSPEPE | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
