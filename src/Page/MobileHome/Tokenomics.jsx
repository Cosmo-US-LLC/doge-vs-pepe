import React from "react";
import one_to_one from "../../assets/Mobile/one-to-one.svg";

function Tokenomics() {
  return (
    <div className="flex flex-col items-center mt-4 bg-[black] mt-8">
      <div className="flex flex-row items-center justify-between w-full px-4">
        <div className="">
          <p className="font-[700] text-[24px] text-[white] leading-[24px]">$DOPE</p>
          <p className="font-[700] text-[24px] text-[white] leading-[24px] mb-2">TOKENOMICS</p>
          <p className="font-[700] text-[10px] text-[white] leading-[13px]">TOTAL SUPPLY $888 MILLION</p>
          <p className="font-[700] text-[10px] text-[white] leading-[13px]">Coin will be launched on <br /> Solana Blockchain</p>
        </div>
        <div className="">
          <p className="font-[700] text-[24px] text-[white] leading-[24px] text-right">$PEGE</p>
          <p className="font-[700] text-[24px] text-[white] leading-[24px] mb-2">TOKENOMICS</p>
          <p className="font-[700] text-[10px] text-[white] leading-[13px]">TOTAL SUPPLY $879 MILLION</p>
          <p className="font-[700] text-[10px] text-[white] leading-[13px]">Coin will be launched on <br /> Solana Blockchain</p>
        </div>
      </div>
      <img
        src={one_to_one}
        className="mt-8"
        alt="one_to_one"
      />
    </div >
  )
}

export default Tokenomics;


