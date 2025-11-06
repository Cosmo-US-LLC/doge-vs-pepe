import React from "react";
import dogePepeScale from "../../assets/tokenomics/doge-pepe-scale.png";
import vsCard from "../../assets/tokenomics/vs-card.png";
import ticket from "../../assets/tokenomics/ticket2.png";
import mobBg from "../../assets/tokenomics/mob-bg.png";
import testmo_img_1 from "../../assets/mobile_assets/testmo_img_1.png";
import testmo_img_2 from "../../assets/mobile_assets/testmo_img_2.png";

function TokenmobSec() {
  return (
    <div
      className="relative w-[100%] TokenBGMob overflow-hidden h-fit"
      id="tokenomics"
    >
      <h3 className="text-[32px] pb-[30px] font-[Anton] text-center leading-[125%] uppercase font-[400] text-[#FFF]">
        Tokenomics
      </h3>
      <div className="">
        <img src={vsCard} alt="" className="w-[321px] h-[431px] mx-auto" />
        <div className="h-[348px]" />
        <div className="h-[334px] w-[361px] mx-auto TokenTicketBg">
          <h4 className="text-center text-[48px] text-[#E67500] py-6">
            TEAM DOGE
          </h4>
          <br />
          <div className="space-y-[30px] px-5 pt-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-white/10 rounded-full h-[60px] w-[60px] aspect-square flex items-center justify-center text-2xl">
                💰
              </div>
              <div className="text-white/60 text-base font-normal">
                TOTAL SUPPLY: <br />
                <span className="text-[#E67500]">8.88 BILLION</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="bg-white/10 rounded-full h-[60px] w-[60px] aspect-square flex items-center justify-center text-2xl">
                ⚡️
              </div>
              <div className="text-white/60 text-base font-normal">
                Coin will be launched on <br />
                Ethereum Blockchain
              </div>
            </div>
          </div>
        </div>
        <div className="h-[348px]" />
        <div className="h-[334px] w-[361px] mx-auto TokenTicket2Bg">
          <h4 className="text-center text-[48px] text-[#4CF72C] py-6">
            TEAM PEPE
          </h4>
          <br />
          <div className="space-y-[30px] px-5 pt-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-white/10 rounded-full h-[60px] w-[60px] aspect-square flex items-center justify-center text-2xl">
                💰
              </div>
              <div className="text-white/60 text-base font-normal">
                TOTAL SUPPLY: <br />
                <span className="text-[#00FF2F]">7.89 BILLION</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="bg-white/10 rounded-full h-[60px] w-[60px] aspect-square flex items-center justify-center text-2xl">
                ⚡️
              </div>
              <div className="text-white/60 text-base font-normal">
                Coin will be launched on <br />
                Ethereum Blockchain
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenmobSec;
