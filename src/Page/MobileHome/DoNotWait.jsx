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
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

      <div className="relative flex flex-col items-center justify-center">
        <p className="text-[26px] font-[700] leading-[17px] text-[white] mt-6 text-center z-10">
          Don’t Wait, The Fight Is On!
        </p>
        <p className="text-[15px] font-[600] leading-[15px] text-[white] mt-4 text-center w-[58%] z-10">
          DogevsPepe is fast-paced and competitive. Once the $1 million goal is
          reached, the winner is decided. Will your meme champion rise and win
          this ultimate fight.
        </p>
        <p className="mt-[100px] w-[55%] text-[16px] font-[700] leading-[16px] text-[white] text-center z-10">
          Make your choice and support your favorite meme before it is too late!
        </p>
      </div>
   
    </div>
  );
}

export default DoNotWait;
