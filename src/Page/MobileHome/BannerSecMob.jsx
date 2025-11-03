import React from "react";
import bnicon1 from "../../assets/banner/bnicns1.svg";
import bnicon2 from "../../assets/banner/bnicns2.svg";
import bnicon3 from "../../assets/banner/bnicns3.svg";
import bnicon4 from "../../assets/banner/bnicns4.svg";
import bnicon5 from "../../assets/banner/bnicns (5).svg";

function BannerSecMob() {
  return (
    <div className="w-[100%] h-full overflow-hidden flex items-end justify-center">
      <div className="flex justify-center items-center w-full px-0 md:px-8 relative">
        <div className="flex flex-wrap justify-center md:gap-2 w-full py-4">
          <div className="bg-[rgba(255,255,255,0.09)] flex items-center justify-center  py-[12px] px-[20px] md:px-0 md:p-5 max-w-[125px]  md:max-w-[100px] rounded-[75px]">
            <img alt="" className=" " src={bnicon1} />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)] flex items-center justify-center  py-[12px] px-[20px] md:px-0 md:p-5 max-w-[125px] md:max-w-[100px] rounded-[75px]">
            <img alt="" className="" src={bnicon2} />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)] flex items-center justify-center  py-[12px] px-[20px] md:px-0 md:p-5 max-w-[125px] md:max-w-[100px] rounded-[75px]">
            <img alt="" className="" src={bnicon3} />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)]  flex items-center justify-center py-[12px] px-[20px] md:px-5 md:py-3 max-w-[150px] md:max-w-[150px] rounded-[75px]">
            <img alt="" className="  " src={bnicon4} />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)] flex items-center justify-center py-[12px] px-[20px] md:px-5 md:py-3 max-w-[150px] md:max-w-[150px]  rounded-[75px]">
            <img alt="" className=" " src={bnicon5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSecMob;
