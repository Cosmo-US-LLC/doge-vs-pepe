import React from "react";
import one_to_one from "../../assets/Mobile/one-to-one.webp";

function Tokenomics() {
  return (
    <div className="flex flex-col items-center bg-[black] mt-8" id="tokenomics">
      <div className="flex flex-row items-center justify-between w-full px-4">
        <div className="">
          <p className="font-[700] text-[26px] text-[white] leading-[24px]">$DOPE</p>
          <p className="font-[700] text-[26px] text-[white] leading-[24px] mb-2">TOKENOMICS</p>
          <p className="font-[700] text-[18px] text-[white] leading-[20px]">TOTAL SUPPLY <br /> $888 MILLION</p>
          <p className="font-[600] text-[16px] text-[white] leading-[20px]">Coin will be launched<br /> on  Solana Blockchain</p>
        </div>
        <div className="">
          <p className="font-[700] text-[26px] text-[white] leading-[24px] text-right">$PEGE</p>
          <p className="font-[700] text-[26px] text-[white] leading-[24px] mb-2 text-right">TOKENOMICS</p>
          <p className="font-[700] text-[18px] text-[white] leading-[20px] text-right">TOTAL SUPPLY <br /> $879 MILLION</p>
          <p className="font-[600] text-[16px] text-[white] leading-[20px] text-right">Coin will be launched<br /> on  Solana Blockchain</p>
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


