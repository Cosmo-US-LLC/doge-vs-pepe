import React from "react";
import circle from "../../assets/twoLegends/v2_circle.webp";
import white_bg from "../../assets/twoLegends/v2_white_bg.webp";
import dogeDP from "../../assets/twoLegends/v2_doge.webp";
import pepeDP from "../../assets/twoLegends/v2_pepe.webp";

function TwoLegends() {
  return (
    <div
      className="w-[100%] h-[800px] py-14 relative flex flex-col justify-center items-center"
      id="what_is"
    >
      <div className="two_legends_bg w-full h-full max-w-[1440px] mx-auto">
        <div className="flex w-[100%] max-w-[1280px] mx-auto px-8 flex-row ">
          <div className="w-[36%] h-full "></div>
          <div className=" w-[66%]  relative z-[99] flex flex-col gap-4 pt-6 pl-3">
            <h3>Two Legends. One Crown.</h3>
            <h4 className="max-w-[700px]">
              {" "}
              <span className="h-[16px] w-[16px] rounded-full bg-[#C90F0F] inline-block mr-2 mb-1"></span>
              <span className=" !text-[32px] !leading-[135%] !tracking-[1.4px]">
                Only one will win this epic fight and launch!
              </span>{" "}
              <span className="!text-[#B0B0B0] !text-[31px]">
                This is the first crypto meme battle where you back your
                favorite legendary meme by buying tokens during the presale and
                joining their team.
              </span>
            </h4>
            <div className="flex flex-row justify-between gap-4">
              <div className="flex flex-col gap-2 border-2 border-[#DD5B01] p-4 rounded-2xl">
                <div className="flex flex-row gap-2 items-center">
                  <img src={dogeDP} alt="" className="w-[60px] h-[80px]" />
                  <h4>TEAM DOGE</h4>
                </div>
                <p className="subtext !text-[#FFFFFF99]">
                  <span className="text-[#E67500]">Doge </span>, the undefeated
                  OG Meme Heavyweight Champion, dominating for years with his
                  wild, unpredictable style.
                </p>
              </div>
              <div className="flex flex-col gap-2 border-2 border-[#00FF2F] p-4 rounded-2xl">
                <div className="flex flex-row gap-2 items-center">
                  <img src={pepeDP} alt="" className="w-[60px] h-[80px]" />
                  <h4>TEAM DOGE</h4>
                </div>
                <p className="subtext !text-[#FFFFFF99]">
                  <span className="text-[#00FF2F]">Pepe </span>, the fearless
                  rising star, already in the top 3 meme heavyweights, known for
                  his brutal knockouts.
                </p>
              </div>
            </div>
            <div className="absolute bottom-[-100px] right-[160px] w-[440px] h-[70px] z-[99]">
              <img src={white_bg} alt="" className="w-full h-full" />
              <h4 className="absolute top-[27px] left-[-77px] w-full h-full !text-[14px] !text-[#000] subtext text-center">
                The first to hit $1M wins
              </h4>
              <h4 className="absolute top-[27px] left-[77px] w-full h-full !text-[14px] !text-[#000] rotate-[8deg] subtext text-center">
                the presale
              </h4>
              <h4 className="absolute top-[27px] left-[167px] w-full h-full !text-[14px] !text-[#000] rotate-[-8deg] subtext text-center">
                round
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoLegends;
