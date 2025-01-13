import React from "react";
import dogePepeScale from "../../assets/tokenomics/imgrd.png";
import verc1 from "../../assets/RoadmapSec/Ellipse 80 (3).png";
import verc2 from "../../assets/RoadmapSec/Ellipse 81 (1).png";

function TokenSec() {
  return (
    <div className="relative w-[100%] pt-[100px] Tokenomicsbg overflow-hidden" id="tokenomics">
      <div className=" max-w-[1245px] w-[100%] mx-auto flex justify-between">
        <div className="max-w-[479.306px] relative space-y-[20px] w-[100%]">
          <h3
          style={{
            WebkitTextStrokeWidth: "2.8px",
            WebkitTextStrokeColor: "#000",
          }}
          className="text-[52.95px] font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
            $DGPE <br /> Tokenomics
          </h3>
          <div className="space-y-[8px]">
            <h5 className="text-[26.475px] leading-normal font-[700] text-[#FFF] uppercase">
            tOTAL sUPPLY $8.88 BILLION
            </h5>
            <p className="text-[22.062px] leading-normal font-[600] text-[#FFF] ">
            Coin will be launched on Ethereum Blockchain
            </p>
          </div>
          <img src={verc1} className="absolute top-[-55%] left-[-10%]" alt="" />
        </div>
        <div>
          <div className="max-w-[479.306px] relative space-y-[20px] w-[100%]">
            <h3
             style={{
              WebkitTextStrokeWidth: "2.8px",
              WebkitTextStrokeColor: "#000",
            }}
            className="text-[52.95px] font-HiJack text-right leading-[102.804%] font-[400] text-[#FFF] uppercase">
              $pepe <br /> Tokenomics
            </h3>
            <div className="space-y-[8px]">
              <h5 className="text-[26.475px] text-right leading-normal font-[700] text-[#FFF] uppercase">
              tOTAL sUPPLY $8.79 BILLION
              </h5>
              <p className="text-[22.062px] text-right leading-normal font-[600] text-[#FFF] ">
              Coin will be launched on Ethereum Blockchain
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
      <div class="w-full mt-12 ">
        <img src={dogePepeScale} alt="Your Image" class="w-full object-cover" />
      </div>
    </div>
  );
}

export default TokenSec;
