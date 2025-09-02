import React from "react";
import prizeimg from "../../assets/PrizeMoneySec/prize-belt.png";

function PrizeMoney() {
  return (
    <div className="w-[100%] bgmobprizsec overflow-hidden pt-[60px] pb-[80px] px-4">
      <div className="py-6 rounded-[26.9px] space-y-[45px] w-[100%] mx-auto relative min-h-[500px] border boredr-[#fff] bg-[#01010182] px-2" 
      style={{
        backdropFilter:"blur(2px)"
      }}
      >
        <div className="space-y-[20px]">
          <h3 className="text-[#FFFCFC] font-[Anton] text-center text-[23px] leading-[104.377%] font-[400]">
            PRIZE MONEY FOR THE WINNING TEAM
          </h3>
          <h4 className="text-center w-full font-[Anton] text-[#fff] text-[50px] font-[400]  ">
            250’000 USD*
          </h4>
          <div className="flex justify-center">
            <img src={prizeimg} alt="" />
          </div>
          <div className="space-y-[20px]">
            <h4 className="text-center font-[Helvetica] leading-normal text-[18px] text-[#fff] font-[700] max">
              The prize money will be airdropped and shared among everyone who
              bought the winning coin.
            </h4>
            <p className="text-center font-[Helvetica] text-[14px] text-[#FFFCFC] font-[700]">
              *Distributed in the winning token <br /> based on your holdings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeMoney;
