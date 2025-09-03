import React from "react";
import dogePepeScale from "../../assets/tokenomics/token-doge-pepe-frame.webp";
import verc1 from "../../assets/RoadmapSec/Ellipse 80 (3).png";
import verc2 from "../../assets/RoadmapSec/Ellipse 81 (1).png";
import topShadow from "../../assets/tokenomics/rectangle_307.webp";
import bottomShadow from "../../assets/tokenomics/rectangle_306.webp";

function TokenSec() {
  return (
    <div
      className="relative w-[100%] h-[1068px]  TokenBG   overflow-hidden"
      id="tokenomics"
    >
      <div className="absolute top-0 left-0 right-0">
        <img className="" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <img className="" src={bottomShadow} alt="" />
      </div>
      <div className=" max-w-[1245px] relative w-[100%] mx-auto flex justify-between pt-[20px] ">
          <h3 className="section_heading max-w-[300px] mx-auto absolute left-[40%] top-[50px]">Tokenomics</h3>
        <div className="max-w-[479.306px] relative space-y-[20px] w-[100%] ">
          <h3
            style={{
              WebkitTextStrokeWidth: "2.8px",
              WebkitTextStrokeColor: "#000",
            }}
            className="relative section_heading"
          >
            TEAM DOGE
          </h3>
          <div className="space-y-[8px]">
            <h5 className="text-[24px] leading-normal font-[700] font-helvetica text-[#FFF] uppercase">
              tOTAL sUPPLY: 8.88 billion
            </h5>
            <p className="text-[20px] leading-normal font-[400] font-helvetica text-[#FFF] ">
              Coin will be launched on Ethereum Blockchain
            </p>
          </div>
          {/* <img src={verc1} className="absolute top-[-55%] left-[-10%]" alt="" /> */}
        </div>
        <div>
          <div className="max-w-[479.306px] relative space-y-[20px] w-[100%]">
            <h3
              style={{
                WebkitTextStrokeWidth: "2.8px",
                WebkitTextStrokeColor: "#000",
              }}
              className="text-right section_heading"
            >
              TEAM pePe
            </h3>
            <div className="space-y-[8px]">
              <h5 className="text-[24px] font-helvetica text-right leading-normal font-[700] text-[#FFF] uppercase">
                tOTAL sUPPLY: 7.89 Billion
              </h5>
              <p className="text-[20px] font-helvetica text-right leading-normal font-[400] text-[#FFF] ">
                Coin will be launched on Ethereum Blockchain
              </p>
            </div>
            {/* <img
              src={verc2}
              className="absolute top-[-55%] right-[-10%]"
              alt=""
            /> */}
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src={dogePepeScale}
          alt="Your Image"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}

export default TokenSec;
