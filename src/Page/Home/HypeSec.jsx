import React from "react";
import hypeimg1 from "../../assets/Hype/hypeimg (6).png";
import hypeimg2 from "../../assets/Hype/hypeimg (5).png";
import hypeimg3 from "../../assets/Hype/hypeimg (4).png";
import hypeimg4 from "../../assets/Hype/hypeimg (3).png";
import hypeimg5 from "../../assets/Hype/hypeimg (2).png";
import hypeimg6 from "../../assets/Hype/hypeimg (1).png";


function HypeSec() {
  return (
    <div className="relative w-[100%] pt-[80px] pb-[100px] Hypebg overflow-hidden">
      <div className="max-w-[1139px] w-[100%] space-y-[50px] mx-auto ">
        <div className=" w-[100%]">
          <h3
          style={{
            textShadow:"0px 9px 33.4px rgba(0, 0, 0, 0.63)"
          }}
          className="text-[50px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
           The Hype is Real
          </h3>
        </div>
        <div className="flex gap-[3rem] justify-between">
            <div className="w-[68%] space-y-[3rem]">
               <div className="flex justify-between gap-[3rem]">
               <div>
                    <img className="rounded-[13px]" src={hypeimg1} alt="" />
                </div>
                <div className="gap-[2rem] flex flex-col justify-between">
                    <img src={hypeimg2} alt="" />
                    <img src={hypeimg3} alt="" />
                </div>
               </div>
               <div>
                <img src={hypeimg4} alt="" />
               </div>
            </div>
            <div className="w-[30%] ">
            <div className="space-y-[3rem]">
                    <img src={hypeimg5} alt="" />
                    <img src={hypeimg6} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HypeSec;
