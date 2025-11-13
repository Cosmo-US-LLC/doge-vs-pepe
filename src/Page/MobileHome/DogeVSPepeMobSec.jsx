import React from "react";
import bit from "../../assets/DogeVSPepeSec/card3-mob-src.png";
import coin from "../../assets/DogeVSPepeSec/bit-coin.svg";
import tioicn from "../../assets/DogeVSPepeSec/crypto.svg";
import coinsp from "../../assets/DogeVSPepeSec/coinsp.png";
import heading from "../../assets/DogeVSPepeSec/heading.png";
import arw from "../../assets/DogeVSPepeSec/arw.svg";
import dogeBox from "../../assets/DogeVSPepeSec/card1-mob.png";
import dogePepe from "../../assets/DogeVSPepeSec/card2-mob.png";
import dogeFight from "../../assets/DogeVSPepeSec/card3-mob.png";
import pepeFight from "../../assets/mobile_assets/card_dvp_2.png";
import cryShadow from "../../assets/DogeVSPepeSec/cry-shadow.png";
import { ChevronRight } from "lucide-react";
import bottom_shadow from "../../assets/fightRule/bottom_shadow.webp";

function DogeVSPepeMobSec() {
  return (
    <div className="relative w-[100%] pt-[40px] pb-[40px] dogeVsPepeBG overflow-hidden">
      <img
        src={bottom_shadow}
        alt="bottom_shadow"
        className="absolute bottom-0 left-0 right-0 w-full h-[40px]"
      />
      <div className=" w-[90%] space-y-[43px] mx-auto ">
        <div className=" w-[100%]">
          <h3 className="text-[32px] text-center font-[Anton] flex flex-col items-center leading-[125%] font-[400] text-[#FFF] uppercase">
            <img src={heading} alt="Heading" className="w-[308px] h-[42px]" />
            IS MAKING HEADLINES
          </h3>
        </div>
        <div className=" space-y-[15px]">
          <div className="relative flex flex-col min-h-[492px] rounded-[25px] border border-[#fff] bg-white p-3">
            <div className="grow relative flex flex-col justify-end w-full bg-black h-full px-2 pt-[100px] rounded-[20px] overflow-hidden">
              <div className="absolute inset-0 top-0 h-full">
                <img
                  alt="doge"
                  src={dogeBox}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative p-[20px] z-10 flex flex-col w-full space-y-2">
                <h3 className="text-[24px] font-[400] text-[#fff] uppercase font-[Anton]">
                  The OG Meme Is Back!
                </h3>

                <p className="py-[6px] text-[14px] font-[400] font-[Helvetica] text-[#fff]">
                  Doge or Pepe? Fans are rallying to decide who has the
                  strongest community. Will Doge stay on top, or is Pepe set to
                  dethrone him? The battle is on!
                </p>
              </div>
            </div>
            <div className="py-[13px] h-[56px] bg-[#fff] flex justify-between items-center">
              <img src={tioicn} alt="" className="w-[165px] h-[30px]" />
              <div className="text-sm flex items-center text-[#000]">
                <span className="font-[400]">Find out more</span>
                <ChevronRight />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col min-h-[492px] rounded-[25px] border border-[#fff] bg-white p-3">
            <div className="grow relative flex flex-col justify-end w-full bg-black h-full px-2 pt-[100px] rounded-[20px] overflow-hidden">
              <div className="absolute inset-0 top-0 h-full">
                <img
                  alt="doge"
                  src={dogePepe}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative p-[20px] z-10 flex flex-col w-full space-y-2">
                <h3 className="text-[24px] font-[400] text-[#fff] uppercase font-[Anton]">
                  Two Legends Face Off
                </h3>

                <p className="py-[6px] text-[14px] font-[400] font-[Helvetica] text-[#fff]">
                  Finding the next winning narrative is the key to hitting big
                  with memes. Two presales, but only one will win and launch!
                  Backed by two of the most iconic meme coins, this might just
                  be it.
                </p>
              </div>
            </div>
            <div className="py-[13px] h-[56px] bg-[#fff] flex justify-between items-center">
              <img src={coinsp} alt="" className="w-[165px] h-[30px]" />
              <div className="text-sm flex items-center text-[#000]">
                <span className="font-[400]">Find out more</span>
                <ChevronRight />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col min-h-[492px] rounded-[25px] border border-[#fff] bg-white p-3">
            <div className="grow relative flex flex-col justify-end w-full bg-black h-full px-2 pt-[100px] rounded-[20px] overflow-hidden">
              <div className="absolute inset-0 top-0 h-full">
                <img
                  alt="doge"
                  src={dogeFight}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative p-[20px] z-10 flex flex-col w-full space-y-2">
                <h3 className="text-[24px] font-[400] text-[#fff] uppercase font-[Anton]">
                  The New Meme King?
                </h3>

                <p className="py-[6px] text-[14px] font-[400] font-[Helvetica] text-[#fff]">
                  Two legendary memes face off in an exciting presale, with
                  rumors of well-known crypto developers behind the project.
                  This could be the next big thing!
                </p>
              </div>
            </div>
            <div className="py-[13px] h-[56px] bg-[#fff] flex justify-between items-center">
              <img src={bit} alt="" className="w-[165px] h-[30px]" />
              <div className="text-sm flex items-center text-[#000]">
                <span className="font-[400]">Find out more</span>
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogeVSPepeMobSec;
