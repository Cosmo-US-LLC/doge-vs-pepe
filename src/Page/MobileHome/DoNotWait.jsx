import React from "react";
import do_not_wait_bg from "../../assets/Mobile/do_not_wait_bg.webp";

function DoNotWait() {
  return (
    <div
      className="relative flex flex-col items-center min-h-[339px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${do_not_wait_bg})`,
      }}
    >
      {/* <div className="absolute inset-0 z-0 bg-black opacity-50"></div> */}

      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="text-[24px] font-[700] leading-[17px] text-[white] mt-6 text-center">
          Don’t Wait, The Fight Is On!
        </p>
        <p className="text-[10px] font-[600] leading-[13px] text-[white] mt-4 text-center w-[55%]">
          DogevsPepe is fast-paced and competitive. Once the $1 million goal is
          reached, the winner is decided. Will your meme champion rise and win
          this ultimate fight.
        </p>
        <p className="mt-[120px] w-[55%] text-[14px] font-[700] leading-[16px] text-[white] text-center">
          Make your choice and support your favorite meme before it is too late!
        </p>
      </div>
   
    </div>
  );
}

export default DoNotWait;
