import React from "react";
import howitimg from "../../assets/HowItSec/how-it-img4.png";
import telicon1 from "../../assets/HowItSec/logos_telegram.svg";
import telicon2 from "../../assets/HowItSec/logos_telegram (1).svg";
import vecleft from "../../assets/HowItSec/P (43).png"
import vecright from "../../assets/HowItSec/P (43) (1).png"
function HowItmobSec() {
  return (
    <div className="w-[100%] howitbg overflow-hidden pt-[60px] pb-[50px]" id="how-it-all-began">
      <div className="relative  rounded-[20.9px] w-[90%] mx-auto relative min-h-[480px]  bg-[#01010182]" 
      style={{backdropFilter:"blur(9.899999618530273px)"}}
      >
        <div className="howitborder px-[22px] pt-[20px] pb-[10px]">
        <div className="space-y-[20px]">
            <p className="text-[#fff] leading-[114%] font-[400] text-[12px] text-center">Chapter I</p>
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[22px] leading-[104.377%] font-[400]">
          How It All Began
          </h3>
          <p className="max-w-[535px] w-[100%] font-[400] mx-auto text-[#fff] leading-[114%] text-[15px] text-center">The heated rivalry began when Pepe, the rising star, reached #3 among all meme heavyweights and started calling out Doge, the undefeated champ. Doge couldn’t let this slide, and after months of back-and-forth insults on social media, the two bumped into each other at MOON, one of the hottest nightclubs in the city. Things escalated quickly, turning into a massive brawl with serious consequences. </p>
          <div className="flex justify-center">
            <img src={howitimg} alt="" className="max-w-[240px]" />
          </div>
          <div className="space-y-[10px]">
            <h4 className="text-[#fff] leading-[114%] font-[400] text-[12px] text-center">
            Follow us on social media to keep up with the story!
            </h4>
          <div className="flex justify-center space-x-[1rem]">
            <div className="flex items-center justify-center gap-1 space-x-1">
                <p className="text-[12px] font-[600] text-[#fff] leading-3 uppercase"> Join X</p>
                <img className="cursor-pointer w-[18px] h-[18px]" src={telicon1} alt="" />
            </div>
            <div className="flex items-center justify-center gap-1 space-x-1">
                <p className="text-[12px] font-[600] text-[#fff] leading-3 uppercase"> Join Telegram</p>
                <img className="cursor-pointer w-[18px] h-[18px]" src={telicon2} alt="" />
            </div>
          </div>
          </div>
        </div>
        </div>
        <img src={vecleft} className="absolute z-10 bottom-[-10%] max-h-[200px] left-[-20%]" alt="" />
        <img src={vecright} className="absolute z-10 bottom-[-10%] max-h-[200px] right-[-23%]" alt="" />
      </div>
    </div>
  );
}

export default HowItmobSec;
