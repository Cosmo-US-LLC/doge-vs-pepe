import React from "react";
import prizeimg from "../../assets/PrizeMoneySec/prize-belt.png";

function PrizeMoney() {
  return (
    <div className="w-[100%] overflow-hidden pb-[80px] px-4" id="prize-money">
      <div className="py-2 px-4 bgmobprizsec2 rounded-[30px] space-y-2 w-[100%] flex flex-col justify-end items-center mx-auto min-h-[650px] border boredr-[#fff]"
      // style={{
      //   backdropFilter:"blur(2px)"
      // }}
      >
        <div className="font-helvetica relative border border-white/20 bg-white/10 text-white text-center leading-[130%] p-3 rounded-[20px] w-full">
          The prize money will be airdropped and shared by all token holders of the winning coin.
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-1 bottom-1" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <circle cx="12.5" cy="12.5" r="9.375" stroke="#E67500" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="12.5" y="8.33398" width="0.0109687" height="0.0109687" stroke="#E67500" stroke-width="1.875" stroke-linejoin="round"/>
            <path d="M12.5 12.5V16.6667" stroke="#E67500" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <p className="font-helvetica text-center text-sm leading-[130%] text-white px-8">
          *The prize money will be distributed in the winning token based on your holdings
        </p>
      </div>
    </div>
  );
}

export default PrizeMoney;
