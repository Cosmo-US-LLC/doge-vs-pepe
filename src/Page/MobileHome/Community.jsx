import React from "react";
import border_gradient from "../../assets/Mobile/border_gradient.svg";
import border_gradient_green from "../../assets/Mobile/border_gradient_green.svg";
import dog_1 from "../../assets/Mobile/dog_1.webp";
import frog_1 from "../../assets/Mobile/frog_1.webp";
import circle from "../../assets/Mobile/circle.png";
import circle_green from "../../assets/Mobile/circle_green.png";
import arrow_left from "../../assets/Mobile/arrow_left.svg";

const Doge = () => {
  return (
    <div className="flex flex-col items-center px-2 mt-8">
      <p className="text-[26px] font-[700] leading-[31px] text-[white] text-center">
        The Community Decides
      </p>
      <p className="text-[16px] font-[400] leading-[15px] text-[white] text-center mt-2">
        This isn’t just about picking a meme <br /> it’s about choosing a winner
        that you are proud to represent.
      </p>
      <div className="relative p-2 bg-[#050e14] rounded-[14px] w-full min-h-[236px] mt-12 flex flex-row">
        <img
          src={border_gradient}
          className="absolute right-[13px] h-full w-[93%] bottom-[0px]"
          alt="border_gradient"
        />
        <img
          src={circle}
          className="absolute h-[134px] w-[131px]"
          alt="circle"
        />
        <img
          src={dog_1}
          className="absolute h-[93px] w-[81px] left-[40px] top-[50px]"
          alt="dog_1"
        />
        <div className="flex flex-col mt-4 w-[57%] ml-auto">
          <div className="flex flex-col">
            <p className="text-[18px] font-[600] leading-[20px] text-[white]">
              TEAM DOGE
            </p>
            <div className="bg-[#F1A900] rounded-full w-[44px] h-[5px]" />
            <p className="text-[16px] font-[700] leading-[18px] text-[white] mt-2">
              $DOPE
            </p>
            <p className="text-[14px] w-[174px] font-[400] leading-[16px] text-[white] mt-2 mr-1">
              Choosing me means backing the original meme coin king. I’ll lead
              the pack and prove there’s only ever been one true leader of the
              meme coin world.
            </p>
            <div className="flex justify-start mt-2">
              <button className="flex flex-row items-center gap-2 justify-center bg-gradient-to-r from-[#FEC576] to-[#FFBF01] text-[black] text-[12px] w-[112px] h-[32.123px] font-[700]  px-2 py-1 rounded-[38.728px] shadow-[0px_1.291px_0px_0px_#FFF]">
                <img
                  src={arrow_left}
                  alt="arrow_left"
                  className="w-[12px] h-[12px] object-contain"
                />
                BUY $DOPE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pepe = () => {
  return (
    <div className="flex flex-col items-center px-2">
      <div className="relative p-2 bg-[#050e14] rounded-[14px] w-full min-h-[236px] mt-12 flex flex-row">
        <img
          src={border_gradient_green}
          className="absolute right-[13px] h-full w-[93%] bottom-[0px]"
          alt="border_gradient_green"
        />
        <img
          src={circle_green}
          className="absolute h-[134px] w-[131px]"
          alt="circle_green"
        />
        <img
          src={frog_1}
          className="absolute h-[93px] w-[81px] left-[40px] top-[50px]"
          alt="frog_1"
        />
        <div className="flex flex-col mt-4 w-[57%] ml-auto">
          <div className="flex flex-col">
            <p className="text-[18px] font-[600] leading-[20px] text-[white]">
              TEAM PEPE
            </p>
            <div className="bg-[#4EB52A] rounded-full w-[44px] h-[5px]" />
            <p className="text-[16px] font-[700] leading-[18px] text-[white] mt-2">
              $PEGE
            </p>
            <p className="text-[14px] font-[400] w-[174px] leading-[16px] text-[white] mt-2 mr-1">
              Picking me means backing the ultimate meme underdog. I’ll take
              risks, break rules, and show everyone just how high I can jump.
            </p>
            <div className="flex justify-start mt-2">
              <button className="flex flex-row items-center gap-2 justify-center bg-gradient-to-r from-[#7CEC91] to-[#01FE37] text-[black] text-[12px] w-[112.957px] h-[30.819px] font-[700] px-[6.455px] py-[6.455px] rounded-[38.728px] shadow-[0px_1.291px_0px_0px_#FFF]">
                <img
                  src={arrow_left}
                  alt="arrow_left"
                  className="w-[12px] h-[12px] object-contain"
                />
                BUY $DOPE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Community() {
  return (
    <div>
      <Doge />
      <Pepe />
    </div>
  );
}

export default Community;
