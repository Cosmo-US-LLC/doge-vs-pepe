import React from "react";
import imgrod from "../../assets/tokenomics/doge-pepe-scale.webp";

function RoadmapSec() {
  return (
    <div className="flex justify-center overflow-hidden w-[100%] pt-[60px] pb-[80px]">
      <div className=" max-w-[1245px] w-[100%]  flex ">
        <div className="max-w-[479.306px] relative space-y-[20px] w-[100%]">
        <h3 className="w-[479.306px] text-white font-k2d text-[52.95px] leading-[54.434px] font-bold uppercase">
  $DOPE <br /> Tokenomics
</h3>

          <div className="space-y-[11px]">
            <h5 className="text-[26.475px] leading-normal font-[700] text-[#FFF] uppercase">
              tOTAL sUPPLY $888 mILLION
            </h5>
            <p className="text-[22.062px] leading-normal font-[600] text-[#FFF] ">
              Coin will be launched on Solana Blockchain
            </p>
          </div>
          <img src={verc1} className="absolute top-[-55%] left-[-10%]" alt="" />
        </div>
        <div>
          <div className="max-w-[479.306px] relative space-y-[20px] w-[100%]">
            <h3 className="text-[52.95px] text-right leading-[102.804%] font-[700] text-[#FFF] uppercase">
              $peGe <br /> Tokenomics
            </h3>
            <div className="space-y-[11px]">
              <h5 className="text-[26.475px] text-right leading-normal font-[700] text-[#FFF] uppercase">
                tOTAL sUPPLY $879 mILLION
              </h5>
              <p className="text-[22.062px] text-right leading-normal font-[600] text-[#FFF] ">
                Coin will be launched on Solana Blockchain
              </p>
            </div>
            <img
              src={verc2}
              className="absolute top-[-55%] right-[-10%]"
              alt=""
            />
          </div>
        </div>
      </div>
      <img src={imgrod} className="w-[100%] max-w-[1440px] mx-auto" alt="tokenomics" />
    </div>
  );
}

export default RoadmapSec;
