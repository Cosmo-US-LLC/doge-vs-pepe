import React from "react";
import topShadow from "../../assets/DontWaitSec/rectangle_285.webp";
import bottomShadow from "../../assets/DontWaitSec/rectangle_297.webp";
import doge from "../../assets/DontWaitSec/doge-d.webp";
import pepe from "../../assets/DontWaitSec/pepe-d.webp";
function DontWaitSec() {
  return (
    <div className="w-[100%] relative DontWaitSecmob min-h-[600px] flex justify-center items-end pb-[40px] overflow-hidden">
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
            background: "rgba(0, 0, 0, 0.68)",
            backdropFilter: "blur(0px)",
          }}
        >
          <div className="space-y-[10px] p-[20px] flex flex-col items-center justify-center">
            <h3 className="text-center text-[#fff] text-[42px] leading-[120%] font-[400] uppercase font-[Anton]">
              Don’t Wait, <br /> The Fight Is On!
            </h3>
            <p className="font-[400] mx-auto text-[#A8A799] font-helvetica leading-[140%] text-[14px] text-center">
              DogevsPepe is fast-paced and competitive. Once the $1 million goal
              is reached, the winner is decided. Will your meme champion rise
              and win this epic fight.
            </p>
            <h4 className="text-[#fff] leading-[144.444%] font-helvetica text-[16px] tracking-[-4%] text-center normal-case">
              Make your choice and support your <br />
              favorite meme before it is too
              late!
            </h4>
          </div>
        </div>
        <div className="flex justify-center absolute bottom-[4px] left-12 right-12">
          <button
            className="w-[100%] mx-auto btn-primary gradient-bg relative !text-[22px] z-10"
            onClick={() => {
              const el = document.getElementById("wallet");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            JOIN THE PRESALE
          </button>
        </div>
      </div>
    </div>
  );
}

export default DontWaitSec;
