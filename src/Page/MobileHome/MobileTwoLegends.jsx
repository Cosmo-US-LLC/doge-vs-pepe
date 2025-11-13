import React from "react";
import bottom_shadow from "../../assets/twoLegends/bottom_shadow.webp";
import white_bg from "../../assets/twoLegends/v2_white_bg.webp";
import dogeDP from "../../assets/twoLegends/v2_doge.webp";
import pepeDP from "../../assets/twoLegends/v2_pepe.webp";

function MobileTwoLegends() {
  return (
    <div className="flex relative flex-col pt-4 pb-14" id="what_is">
      <div className="relative two_legends_bg">
        <img
          src={bottom_shadow}
          alt=""
          className="absolute right-0 bottom-0 left-0 w-full"
        />
        <div className="flex w-[100%] pt-[300px]  px-2 flex-col ">
          <div className="w-[100%] relative"></div>
          <div className=" w-[100%]  relative z-[99] flex flex-col gap-[20px] pl-2">
            <h3 className="text-[30px]">Two Legends. One Crown.</h3>
            <h4 className="w-full">
              {" "}
              <span className="h-[12px] w-[12px] rounded-full bg-[#C90F0F] inline-block mr-2 mb-1"></span>
              <span className=" !text-[24px] !leading-[135%] !tracking-[1.4px] uppercase">
                Only one will win this epic fight and launch!
              </span>{" "}
              <span className="!text-[#B0B0B0] !text-[24px]">
                This is the first crypto meme battle where you back your
                favorite legendary meme by buying tokens during the presale and
                joining their team.
              </span>
            </h4>
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-2 border-2 border-[#DD5B01] p-[30px] rounded-[30px]">
                <div className="flex flex-row gap-2 items-center">
                  <img src={dogeDP} alt="" className="w-[36px] h-[54px]" />
                  <h4>TEAM DOGE</h4>
                </div>
                <p className="subtext !text-[#FFFFFF99]">
                  <span className="text-[#E67500] font-bold">Doge </span>, the
                  undefeated OG Meme Heavyweight Champion, dominating for years
                  with his wild, unpredictable style.
                </p>
              </div>
              <div className="flex flex-col gap-2 border-2 border-[#00FF2F] p-[30px] rounded-[30px]">
                <div className="flex flex-row gap-2 items-center">
                  <img src={pepeDP} alt="" className="w-[36px] h-[54px]" />
                  <h4>TEAM PEPE</h4>
                </div>
                <p className="subtext !text-[#FFFFFF99]">
                  <span className="text-[#00FF2F] font-bold">Pepe </span>, the
                  fearless rising star, already in the top 3 meme heavyweights,
                  known for his brutal knockouts.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-[100%] h-[70px] z-[99] overflow-hidden">
              <img src={white_bg} alt="" className="w-full h-full" />
              <h4 className="absolute top-[27px] left-[-60px] w-full h-full !text-[15px] !text-[#000] !font-bold subtext text-center">
                The first to hit{" "}
                <span className="text-[#C90F0F] font-bold">$1M</span> wins
              </h4>
              <h4 className="absolute top-[27px] left-[63px] w-full h-full !text-[15px] !text-[#000] !font-bold rotate-[8deg] subtext text-center">
                the presale
              </h4>
              <h4 className="absolute top-[27px] left-[140px] w-full h-full !text-[15px] !text-[#000] !font-bold rotate-[-8deg] subtext text-center">
                round
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTwoLegends;
