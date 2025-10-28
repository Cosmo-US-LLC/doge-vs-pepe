import React from "react";
import circle from "../../assets/twoLegends/v2_circle.webp";
import white_bg from "../../assets/twoLegends/v2_white_bg.webp";

function TwoLegends() {
  return (
    <div
      className="w-[100%] h-[725px] relative flex flex-col justify-center items-center"
      id="what_is"
    >
      <div className="flex w-[100%] max-w-[1280px] mx-auto px-8 flex-row">
        <div className="w-[36%] h-[525px] two_legends">
          <img
            src={circle}
            alt=""
            className="absolute left-[-300px] top-[100px] "
          />
        </div>
        <div className=" w-[66%]  relative z-[99] flex flex-col gap-4 pt-6 pl-6">
          <h3>Two Legends. One Crown.</h3>
          <h4 className="max-w-[700px]">
            {" "}
            <span className="h-[16px] w-[16px] rounded-full bg-[#C90F0F] inline-block mr-2 mb-1"></span>
            <span className=" !text-[32px] !leading-[135%] !tracking-[1.4px]">
              Only one will win this epic fight and launch!
            </span>{" "}
            <span className="!text-[#B0B0B0] !text-[31px]">
              This is the first crypto meme battle where you back your favorite
              legendary meme by buying tokens during the presale and joining
              their team.
            </span>
          </h4>
          <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-col gap-2 border-2 border-[#DD5B01] p-4 rounded-2xl">
              <div>
                {/* <img src={doge} alt="" /> */}
                <h4>TEAM DOGE</h4>
              </div>
              <p className="subtext">
                Doge, the undefeated OG Meme Heavyweight Champion, dominating
                for years with his wild, unpredictable style.
              </p>
            </div>
            <div className="flex flex-col gap-2 border-2 border-[#00FF2F] p-4 rounded-2xl">
              <div>
                {/* <img src={doge} alt="" /> */}
                <h4>TEAM DOGE</h4>
              </div>
              <p className="subtext">
                Doge, the undefeated OG Meme Heavyweight Champion, dominating
                for years with his wild, unpredictable style.
              </p>
            </div>
          </div>
          <div className="absolute bottom-[-40px] right-[160px] w-[440px] h-[70px] z-[99]">
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
  );
}

export default TwoLegends;
