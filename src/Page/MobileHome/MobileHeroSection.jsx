import React from "react";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";
import vsimg from "../../assets/herosec/vs.png";
import vsimgr from "../../assets/herosec/vects (2).png";
import vsimgl from "../../assets/herosec/vects (1).png";
import downArrow from "../../assets/herosec/down-arrow.svg";

import coinMarketCop from "../../assets/Mobile/coin-market-cop.webp";
import ambCrypto from "../../assets/Mobile/amb-crypto.webp";
import cryptoNews from "../../assets/Mobile/cryptonews.webp";
import bitCoinist from "../../assets/Mobile/bitcoinist.webp";
import newsBit from "../../assets/Mobile/newsbit.webp";

function MobileHeroSection() {
  const handleScroll = (event, targetId, offset = 0) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const elementPosition =
        targetElement.getBoundingClientRect().top + scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="w-[100%] bgheromobsec min-h-[100vh] pt-[5rem] pb-[2rem] flex flex-col justify-between relative"
      id="what-is"
    >
      <div className=" relative mx-auto px-3">
        <div className="w-full flex flex-col min-h-[70vh] justify-between items-center">
          <div className="flex justify-center">
            <h1 className="text-[#fff] !text-[50px] font-[400] leading-[110%]">
              THE MEME FIGHT <br /> OF THE CENTURY
            </h1>
          </div>
          <button
            style={{
              background:
                "linear-gradient(90deg, #FFBF01 36%, #01FE37 134.57%)",
            }}
            className="px-[38px] py-[18px] font-anton leading-normal mx-auto h-[65px] text-[16px] font-[400] rounded-[60px] cursor-pointer relative z-10"
            onClick={() => {
              const el = document.getElementById("wallet");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            JOIN THE PRESALE
          </button>
        </div>
      </div>

      <div className="w-full py-4 flex items-center">
        <div className="min-w-[120px]">
          <h2 className="text-[#FFFCFC] font-[Anton] text-center text-[22px] font-[400] uppercase ">
            As Seen On
          </h2>
        </div>
        <div className="flex items-center justify-start overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            <img
              src={coinMarketCop}
              alt="Coin market cop"
              className="h-[20px] mx-4"
            />
            <img src={ambCrypto} alt="AMB Crypto" className="h-[20px] mx-4" />
            <img src={cryptoNews} alt="Crypto News" className="h-[20px] mx-4" />
            <img src={bitCoinist} alt="Bitcoinist" className="h-[20px] mx-4" />
            <img src={newsBit} alt="NewsBit" className="h-[20px] mx-4" />
            <img src={ambCrypto} alt="AMB Crypto" className="h-[20px] mx-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeroSection;
