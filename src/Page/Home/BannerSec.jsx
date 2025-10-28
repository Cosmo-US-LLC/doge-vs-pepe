import React from "react";
import bnicon1 from "../../assets/banner/bnicns1.svg";
import bnicon2 from "../../assets/banner/bnicns2.svg";
import bnicon3 from "../../assets/banner/bnicns3.svg";
import bnicon4 from "../../assets/banner/bnicns4.svg";
import bnicon5 from "../../assets/banner/bnicns (5).svg";

function BannerSec() {
  return (
    <div className="w-[100%] h-[109px] overflow-hidden flex items-end justify-center">
      <div className="flex justify-center items-center space-x-[40px] max-w-[1280px] px-8 md:px-4 w-[100%] mx-auto relative">
        <div className="flex justify-center space-x-[30px] items-center">
          <div className="bg-[rgba(255,255,255,0.09)] px-[30px] py-[18px] rounded-[75px]">
            <img alt="" className="w-[188px] h-[32px]" src={bnicon1} />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)] px-[30px] py-[18px] rounded-[75px]">
            <img alt="" className="w-[188px] h-[32px]" src={bnicon2} />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)] px-[30px] py-[18px] rounded-[75px]">
            <img alt="" className="w-[188px] h-[32px]" src={bnicon3} />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)] px-[30px] py-[18px] rounded-[75px]">
            <img alt="" className="w-[188px] h-[32px]" src={bnicon4} />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)] px-[30px] py-[18px] rounded-[75px]">
            <img alt="" className="w-[188px] h-[32px]" src={bnicon5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSec;
