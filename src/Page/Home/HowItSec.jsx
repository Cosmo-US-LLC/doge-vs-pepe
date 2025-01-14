import React from "react";
import howitimg from "../../assets/HowItSec/how-it-img2.png";
import telicon1 from "../../assets/HowItSec/logos_telegram.svg";
import telicon2 from "../../assets/HowItSec/logos_telegram (1).svg";
import vecleft from "../../assets/HowItSec/P (43).png";
import vecright from "../../assets/HowItSec/P (43) (1).png";
function HowItSec() {
  return (
    <div className="w-[100%] howitbg relative overflow-hidden py-[120px]">
      <div
        className="max-w-[992px] relative px-[22px] py-[40px] rounded-[26.9px] space-y-[23px] w-[100%] mx-auto relative min-h-[500px] howitborder bg-[#01010182]"
        style={{ backdropFilter: "blur(9.899999618530273px)" }}
      >
        <div className="space-y-[20px]">
          <p className="text-[#fff] leading-[114%] font-[400] text-[20px] text-center">
            Chapter I
          </p>
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[50px] leading-[104.377%] font-[400]">
            How It All Began
          </h3>
          <p className="max-w-[650px] w-[100%] font-[400] mx-auto text-[#fff] leading-[114%] text-[20px] text-center">
            The heated rivalry began when Pepe, the rising star, reached #3
            among all meme heavyweights and started calling out Doge, the
            undefeated champ. Doge couldn’t let this slide, and after months of
            back-and-forth insults on social media, the two meme icons bumped
            into each other at MOON, one of the hottest nightclubs in the city.
            Things escalated quickly, turning into a massive brawl with serious
            consequences.{" "}
          </p>
          <div className="flex justify-center">
            <img src={howitimg} alt="" />
          </div>
          <div className="space-y-[23px]">
            <h4 className="text-[#fff] leading-[114%] font-[400] text-[20px] text-center">
              Follow us on social media to keep up with the story!
            </h4>
            <div className="flex justify-center space-x-[4rem]">
              <div className="flex justify-center items-center space-x-2">
                <p className="text-[18px] font-[600] text-[#fff] uppercase">
                  {" "}
                  Join X
                </p>
                <img className="cursor-pointer" src={telicon1} alt="" />
              </div>
              <div className="flex justify-center items-center space-x-2">
                <p className="text-[18px] font-[600] text-[#fff] uppercase">
                  {" "}
                  Join Telegram
                </p>
                <img className="cursor-pointer" src={telicon2} alt="" />
              </div>
            </div>
          </div>
        </div>
        
        <img
          src={vecleft}
          className="absolute bottom-[-120px] left-[-32%]"
          alt=""
        />
        <img
          src={vecright}
          className="absolute bottom-[-120px] right-[-35%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default HowItSec;
