import React from "react";
import bit from "../../assets/DogeVSPepeSec/bit.svg";
import coin from "../../assets/DogeVSPepeSec/bit-coin.svg";
import tioicn from "../../assets/DogeVSPepeSec/crypto.svg";
import arw from "../../assets/DogeVSPepeSec/arw.svg";
import dogeFight from "../../assets/mobile_assets/card_dvp_3.png";
import pepeFight from "../../assets/mobile_assets/card_dvp_2.png";
import cryShadow from "../../assets/DogeVSPepeSec/cry-shadow.png";

function DogeVSPepeMobSec() {
  return (
    <div className="relative w-[100%] pt-[40px] pb-[40px] dogeVsPepeBG overflow-hidden">
      <div className=" w-[90%] space-y-[43px] mx-auto ">
        <div className=" w-[100%]">
          <h3 className="text-[32px] text-center font-[Anton] leading-[125%] font-[400] text-[#FFF] uppercase">
            DOGE VS PEPE IS <br /> MAKING HEADLINES
          </h3>
        </div>
        <div className=" space-y-[15px]">
          <div className="crypbgmob  rounded-[15.016px] border  min-h-[370.73px] w-[100%] border-[#fff]">
            <div className="py-[14px] px-[20px] bg-[#fff] rounded-t-[15.016px]">
              <img className=" max-w-[100px]" src={tioicn} alt="" />
            </div>
           <div className="flex flex-col justify-end h-[100%]">
             <div className="px-[20px] space-y-[10px] pt-[200px] pb-[20px]  relative">
              <div className="space-y-[10px] relative z-10">
                <h3 className="text-[22.529px] font-[400] text-[#fff] uppercase font-HiJack pt-2">
                  <span className="text-[#FFBF01]">Doge</span> vs{" "}
                  <span className="text-[#00FF2F]">Pepe ?</span>
                </h3>

                <p className="text-[14px] font-[400] font-[Helvetica] leading-[130%] text-[#fff]">
                  Doge or Pepe? Fans are rallying to decide who has the
                  strongest community. Will Doge stay on top, or is Pepe set to
                  dethrone him? The battle is on!
                </p>
              </div>
              <div className="relative z-10 flex space-x-2">
                <h4 className="text-[14px] font-[Helvetica] font-[700] text-[#fff]">
                  Find out more
                </h4>
                <img src={arw} alt="" />
              </div>
              <div className="absolute bottom-[0px] left-0 right-0">
                <img className="rounded-b-[15.016px]" src={cryShadow} alt="" />
              </div>
            </div>
           </div>
          </div>
          <div className="space-y-[15px]">
            <div className="relative crypbg2mob min-h-[380.73px] overflow-hidden rounded-[15.016px] border border-[#fff] ">
              <div className="py-[13px] px-[20px] bg-[#fff] rounded-t-[15.016px]">
                <img src={coin} alt="" className="w-[100px]" />
              </div>
              <div className="relative flex flex-col justify-center w-full  h-full px-2 pt-[100px] overflow-hidden">
                {/* <div className="absolute inset-0 -top-8">
                  <img alt="doge" src={pepeFight} className="w-full min-h-[314.73px] h-full" />
                </div> */}
                <div className="relative z-10 flex px-[20px] flex-col w-full">
                  <h3 className="text-[24px] font-[400] leading-[133.333%] text-[#fff] uppercase font-[Anton]">
                    <span className="text-[#FFBF01]">legendary </span>
                    <span className="text-[#00FF2F]">memes face off
                    </span>
                  </h3>

                  <p className="pt-[6px] text-[Helvetica] font-[400] font-[Helvetica]  text-[#fff]">
                    Two legendary memes face off in an exciting presale, with
                    rumors of well-known crypto developers behind the project.
                    This could be the next big thing!
                  </p>
                </div>
                <div className="relative px-[20px] pb-[20px] z-10 flex items-center justify-start gap-2">
                  <h4 className="text-[14px] font-[Helvetica] font-[700] text-[#fff]">
                    Find out more
                  </h4>
                  <img src={arw} alt="" />
                </div>
                <div className="absolute bottom-[0px] left-0 right-0">
                  <img
                    className="rounded-b-[15.016px]"
                    src={cryShadow}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden crypbg2mob min-h-[380.73px] rounded-[15.016px] border border-[#fff] ">
              <div className="py-[13px] px-[20px] bg-[#fff] rounded-t-[15.016px]">
                <img src={bit} alt="" className="w-[100px]" />
              </div>
              <div className="relative flex flex-col justify-center w-full  h-full px-2 pt-[100px] overflow-hidden">
                <div className="absolute inset-0 -top-8">
                  <img alt="doge" src={dogeFight} className="w-full min-h-[314.73px] h-full" />
                </div>
                <div className="relative px-[20px] z-10 flex flex-col w-full">
                  <h3 className="text-[24px] font-[400] text-[#fff] uppercase font-[Anton]">
                    <span className="text-[#FFBF01]">Who will </span>
                    <span className="text-[#00FF2F]">be the Winner</span>
                  </h3>

                  <p className="pt-[6px] text-[14px] font-[400] font-[Helvetica] text-[#fff]">
                    Finding the next winning narrative is the key to hitting big
                    with memes. Two presales, but only one will win and launch!
                    Backed by two of the most iconic meme coins, this might just
                    be it.
                  </p>
                </div>
                <div className="relative px-[20px] pb-[20px] z-10 flex items-center justify-start gap-2 pt-1">
                  <h4 className="text-[14px] font-[Helvetica] font-[700] text-[#fff]">
                    Find out more
                  </h4>
                  <img src={arw} alt="" />
                </div>
                <div className="absolute bottom-[0px] left-0 right-0">
                  <img
                    className="rounded-b-[15.016px]"
                    src={cryShadow}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogeVSPepeMobSec;
