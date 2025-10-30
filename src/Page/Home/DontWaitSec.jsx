import React from "react";
import topShadow from "../../assets/DontWaitSec/rectangle_285.webp";
import bottomShadow from "../../assets/DontWaitSec/rectangle_297.webp";
import doge from "../../assets/DontWaitSec/doge-d.webp";
import pepe from "../../assets/DontWaitSec/pepe-d.webp";
function DontWaitSec() {
  return (
    <div className="w-[100%] h-[800px] relative DontWaitSec flex justify-center items-end pb-[160px] overflow-hidden">
      <div className="space-y-[35px]">
        <div
          className="max-w-[987px] px-[22px] py-[60px] rounded-[26.9px] space-y-[23px] w-[100%] mx-auto relative border border-neutral-400 bg-[#0101019f]"
          style={{ backdropFilter: "blur(0px)" }}
        >
          <div className="space-y-[27px] flex flex-col items-center justify-center">
            <h3 className="text-center section_heading">
              Don’t Wait, The Fight Is On!
            </h3>
            <p className="max-w-[855px] w-[100%] font-[400] mx-auto text-[#fff] font-helvetica leading-[32px] text-[24px] text-center">
              DogevsPepe is fast-paced and competitive. Once the $1 million goal
              is reached, the winner is decided. Will your meme champion rise
              and win this epic fight.
            </p>
            <h4 className="text-[#fff] max-w-[855px] leading-[32px] font-[700] font-helvetica text-[24px] text-center">
              Make your choice and support your favorite meme before it is too
              late!
            </h4>
          </div>
        </div>
        <div className="flex justify-center absolute bottom-[130px] left-0 right-0">
          <button
            className="w-[457px] btn-primary gradient-bg mx-auto h-[65px]   relative z-10"
            onClick={() => {
              document.getElementById("wallet")?.scrollIntoView({
                behavior: "smooth",
              });
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
