import React from "react";
import dogePepeScale from "../../assets/tokenomics/imgrd.png";
import verc1 from "../../assets/RoadmapSec/Ellipse 80 (3).png";
import verc2 from "../../assets/RoadmapSec/Ellipse 81 (1).png";

function TokenSec() {
  return (
    <div className="relative w-[100%] pt-[40px] overflow-hidden pb-[40px]" id="tokenomics">
      <div className=" max-w-[1245px] w-[100%] mx-auto flex justify-between">
        <div className="max-w-[479.306px] relative space-y-[20px] w-[100%]">
          <h3 className="text-[52.95px] leading-[102.804%] font-[700] text-[#FFF] uppercase">
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
      <div className="w-full mt-12 ">
        <img src={dogePepeScale} alt="Your Image" className="w-full object-cover" />
      </div>
    </div>
  );
}

export default TokenSec;
