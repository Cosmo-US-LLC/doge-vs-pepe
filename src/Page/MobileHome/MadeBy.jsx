import React from "react";
import made_by_bg from "../../assets/Mobile/made_by_bg.png";
import baby_dodge_pepe from "../../assets/Mobile/baby_doge_pepe.svg";
import market_cap from "../../assets/Mobile/market_cap.webp";

function MadeBy() {
  return (
    <div
      style={{
        backgroundImage: `url(${made_by_bg})`,
      }}
      className="flex flex-col items-center mt-4 bg-[black] min-h-[339px] bg-cover bg-center"
    >
      <p className="text-[24px] font-[700] leading-[22px] text-[white] mt-6 text-center">
        Made by Ex Team Members Of
      </p>
      <img
        src={baby_dodge_pepe}
        className="mt-2"
        alt="baby_dodge_pepe"
      />
      <img
        src={market_cap}
        className=""
        alt="market_cap"
      />
    </div >
  )
}

export default MadeBy;


