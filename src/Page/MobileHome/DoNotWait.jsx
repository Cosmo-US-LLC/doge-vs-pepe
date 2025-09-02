import React from "react";
import topShadow from "../../assets/DontWaitSec/rectangle_285.webp";
import bottomShadow from "../../assets/DontWaitSec/rectangle_297.webp";
import doge from "../../assets/DontWaitSec/doge-d.webp";
import pepe from "../../assets/DontWaitSec/pepe-d.webp";
function DontWaitSec() {
  return (
    <div className="w-[100%] relative DontWaitSecmob min-h-[850px] flex justify-center items-end pb-[40px] overflow-hidden">
      {/* <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-full">
        <img className="w-full h-full" src={bottomShadow} alt="" />
      </div> */}
      {/* <div className="w-[562px] h-[545px] absolute bottom-0 left-[-23px]">
                    <img src={doge} alt="doge-image" className="w-full h-full"/>
                  </div>
                  <div className="w-[507px] h-[545px] absolute bottom-0 right-[-10px]">
                    <img src={pepe} alt="pepe-image" className="w-full h-full"/>
                  </div> */}
      <div className="space-y-[35px] px-4">
        <div
          className="py-[20px] rounded-[26.9px] space-y-[10px] relative border border-neutral-400 bg-[#0101019f]"
          style={{ 
            background:"rgba(0, 0, 0, 0.68)",
            backdropFilter: "blur(0px)" }}
        >
          <div className="space-y-[10px] p-[20px] flex flex-col items-center justify-center">
            <h3 className="text-center text-[#fff] text-[32px] font-[400] uppercase font-[Anton]">
              Don’t Wait, <br /> The Fight Is On!
            </h3>
            <p className="font-[400] mx-auto text-[#fff] font-helvetica leading-[32px] text-[14px] text-center">
              DogevsPepe is fast-paced and competitive. Once the $1 million goal
              is reached, the winner is decided. Will your meme champion rise
              and win this epic fight.
            </p>
            <h4 className="text-[#fff]  leading-[144.444%] font-[700] font-helvetica text-[18px] text-center">
              Make your choice and support your favorite meme before it is too
              late!
            </h4>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            style={{
              background:
                "linear-gradient(90deg, #FFBF01 36%, #01FE37 134.57%)",
            }}
            className="w-[100%] leading-normal font-[Anton] mx-auto py-[18px] text-anton text-[16px] font-[400] rounded-[60px] cursor-pointer relative z-10"
            onClick={() =>
              (window.location.href = "https://forms.gle/J11hnTDHwJVfhY348")
            }
          >
            JOIN THE PRESALE
          </button>
        </div>
      </div>
    </div>
  );
}

export default DontWaitSec;
