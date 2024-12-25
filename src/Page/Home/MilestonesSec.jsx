import React from "react";
import mileimg from "../../assets/MilestonesSec/mileimg.png";

function MilestonesSec() {
  return (
    <div className="w-[100%] relative w-[100%] pt-[40px] overflow-hidden pb-[40px]">
      <div className="max-w-[1168px] space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[50px]">
          <div>
            <h3 className="text-[42px] text-[#FFFCFC] text-center font-[700]">
              Milestones Mystery Reveals{" "}
            </h3>
            <p className="text-[18px] font-[400] text-center text-[#FFF]">
              The race heats up with every milestone!{" "}
            </p>
          </div>
          <p className="text-[18px] font-[400] text-center leading-[114%] text-[#FFF]">
            When one project hits a milestone, it reveals a mystery feature for
            the opposing project, keeping the <br /> competition alive and
            rewarding both sides. With four key milestones—250k, 500k, 750k, and
            900k—
            <br />
            each unlocks exciting surprises that drive both teams closer to the
            finish line.
          </p>
        </div>
        <div>
            <div className="bg-[#181818] rounded-[40.835px] w-[100%] h-[66.415px] border-[0.794px] border-[#EFAB00]">
            <div className="m-1 w-[18%] h-[90%] rounded-[81px] flex items-center justify-center" 
            style={{
                background: "linear-gradient(66deg, #FFC676 25.98%, #FFBF00 65.48%)",
                boxShadow: "0px 16px 30px 0px #615500",
              }}>
                <h4 className="text-[32.668px]  text-[#0B0101] font-[800]  leading-[80%]">18%</h4>
            </div>
            </div>
            <div className="min-h-[500px] flex items-center">
                <img className="absolute" src={mileimg} alt="" />
            </div>
            <div className="bg-[#181818] rounded-[40.835px] w-[100%] h-[66.415px] border-[0.794px] border-[#EFAB00]">
            <div className="m-1 w-[24%] h-[90%] rounded-[81px] flex items-center justify-center" 
            style={{
                background: "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
                boxShadow: "0px 16px 30px 0px rgba(9, 252, 60, 0.35)",
              }}>
                <h4 className="text-[32.668px]  text-[#0B0101] font-[800]  leading-[80%]">24%</h4>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MilestonesSec;
