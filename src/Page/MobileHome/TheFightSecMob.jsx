import React from "react";
import fightimg from "../../assets/FightSec/fight.png";
import mobimg from "../../assets/FightSec/mob-img.png";
import mobicons from "../../assets/FightSec/d-p-suppoter.webp";

import vsimgr from "../../assets/FightSec/Arrowrght.svg";
import vsimgl from "../../assets/FightSec/Arrowlf.svg";

function TheFightSecMob() {

  return (
    <div className="relative w-[100%]  pt-[90px] pb-[60px] overflow-hidden">
      <div className=" w-[90%] mx-auto space-y-[20px] ">
        <div className="space-y-[12px]">
          <h3 className="text-[32px] text-center font-[Anton] leading-[102.804%] font-[400] text-[#FFF] uppercase">
            The Fight is  Made <br  /> Possible By
          </h3>
          <p className="text-[14px] max-w-[869px] font-[Helvetica] w-[100%] mx-auto text-center font-[400] text-[#999A99] leading-[171.429%]">
           A huge thank you to the incredible technology partners and service providers who have made the  Doge vs. Pepe boxing event a reality! This groundbreaking showdown wouldn’t be possible without the support of the innovative platforms, software, and database solutions that power every aspect of this event.
          </p>
           
        </div>
        <div className="space-y-[20px] relative">
        {/* <div className="absolute inset-0 bg-black opacity-10 rounded-[10px] pointer-events-none"></div> */}
          <img className="" src={mobimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TheFightSecMob;
