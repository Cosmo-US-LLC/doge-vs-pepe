import React from "react";
import dogePepeScale from "../../assets/tokenomics/doge-pepe-scale.png";
import testmo_img_1 from "../../assets/mobile_assets/testmo_img_1.png";
import testmo_img_2 from "../../assets/mobile_assets/testmo_img_2.png";

function TokenmobSec() {
  return (
    <div className="relative w-[100%] Tokenomicsbgmob overflow-hidden" id="tokenomics">

      <h3 className="text-[32px] font-[Anton] text-right leading-[125%] uppercase font-[400] text-[#FFF] uppercase">Tokenomics</h3>
      <div className="">
       <div>
         <div className="relative space-y-[5px] w-[100%] px-4">
          <h3
          style={{
            WebkitTextStrokeWidth: "0.8px",
            WebkitTextStrokeColor: "#000",
          }}
          className="text-[20px] font-[Anton] text-right leading-[102.804%] font-[400] text-[#FFF] uppercase">
           TEAM Pepe
          </h3>
          <div className="space-y-[5px]">
            <h5 className="text-[14px] font-[Helvetica] leading-normal text-right font-[700] text-[#FFF] uppercase">
            tOTAL sUPPLY: 7.89 Billion
            </h5>
            <p className="text-[14px] font-[Helvetica] leading-normal text-right font-[400] text-[#FFF] ">
           Coin will be launched on <br /> Ethereum Blockchain
            </p>
          </div>
        </div>
         <div className="flex justify-end mt-[-35px]"> <img src={testmo_img_1} alt="" /></div>
       </div>
        <div>
          <div className="relative space-y-[5px] w-[100%] mt-[-190px] px-4">
          <h3
          style={{
            WebkitTextStrokeWidth: "0.8px",
            WebkitTextStrokeColor: "#000",
          }}
          className="text-[20px] font-[Anton] text-start leading-[102.804%] font-[400] text-[#FFF] uppercase">
           TEAM DOge
          </h3>
          <div className="space-y-[5px]">
            <h5 className="text-[14px] font-[Helvetica] leading-normal text-start font-[700] text-[#FFF] uppercase">
           tOTAL sUPPLY: 8.88 Billion
            </h5>
            <p className="text-[14px] font-[Helvetica] leading-normal text-start font-[400] text-[#FFF] ">
           Coin will be launched on <br /> Ethereum Blockchain
            </p>
          </div>
        </div>
            <img className="mt-[-35px]" src={testmo_img_2} alt="" />
        </div>
      </div>
     
    </div>
  );
}

export default TokenmobSec;
