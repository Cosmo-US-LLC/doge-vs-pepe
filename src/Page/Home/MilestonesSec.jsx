import React, { useState } from "react";
import chestImage from "../../assets/MilestonesSec/deal-box.webp";
import groupImage from "../../assets/MilestonesSec/flag-line-trophy.png";

function MilestonesSec() {
  const [dogePercentage, setDogePercentage] = useState(18);
  const [pepePercentage, setPepePercentage] = useState(24);
  return (
    <div className=" relative w-[100%] pt-[40px] overflow-hidden pb-[40px]">
      <div className="max-w-[1168px] space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[40px] flex flex-col items-center justify-center">
          <div>
            <h3 className="text-[42px] text-[#FFFCFC] text-center font-[700]">
              Mystery Milestones Reveal{" "}
            </h3>
            <p className="text-[18px] font-[400] text-center text-[#FFF]">
              The race heats up with every milestone!{" "}
            </p>
          </div>
          <div className="w-[902px] h-[103px] flex-shrink-0 rounded-[6px] border border-[#E9E9E9] flex items-center justify-center">
            <p className="text-[18px] font-[400] text-center leading-[114%] text-[#FFF]">
              When one project hits a milestone, it reveals a mystery feature
              for the opposing team, keeping <br /> the competition alive and
              rewarding both sides. With three key milestones—250k, 500k, and
              <br /> 750k —each unlocks exciting surprises that drive both teams
              closer to the finish line.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#181818] p-1 rounded-[40.835px] w-[100%] h-[66.415px] border-[0.794px] border-[#EFAB00]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
              style={{ width: `${dogePercentage}%` }}
            >
              <span className="text-[32.668px] font-extrabold text-[#0B0101] leading-none font-[Inter]">
                {dogePercentage}%
              </span>
            </div>
          </div>

          <div className="relative flex min-h-[500px] justify-center items-center flex-col ">
            <div className="absolute top-[6%] left-[23%] gap-[130px] flex ">
              <div className="flex flex-col items-center justify-center">
                <img src={chestImage} alt="Treasure Chest" className="mb-2 " />
                <span className="text-white font-inter text-[22px] font-bold leading-normal">
                  $250,000
                </span>
              </div>
              <div>
                <img src={chestImage} alt="Treasure Chest" className="mb-2 " />
                <span className="text-white font-inter text-[22px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
              </div>
              <div>
                <img src={chestImage} alt="Treasure Chest" className="mb-2 " />
                <span className="text-white font-inter text-[22px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
              </div>
            </div>
            <div className="relative z-50 flex items-center justify-center">
              <span className="text-white font-inter text-[36px] font-bold leading-normal absolute right-[3%] top-[-21%]">
                $1,000,000
              </span>

              <img src={groupImage} alt="flag" className="" />
              <span className="text-white font-inter text-[36px] font-bold leading-normal absolute right-[1%] bottom-[-20%]">
                The Winner
              </span>
            </div>
            <div className="absolute bottom-[6%] left-[23%] gap-[130px] flex ">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-inter text-[22px] font-bold leading-normal">
                  $250,000
                </span>
                <img src={chestImage} alt="Treasure Chest" className="mt-2 " />
              </div>
              <div>
                <span className="text-white font-inter text-[22px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
                <img src={chestImage} alt="Treasure Chest" className="mt-2 " />
              </div>
              <div>
                <span className="text-white font-inter text-[22px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
                <img src={chestImage} alt="Treasure Chest" className="mt-2 " />
              </div>
            </div>
          </div>
          <div className="bg-[#181818] p-1 rounded-[40.835px] w-[100%] h-[66.415px] border-[0.794px] border-[#09FC3C]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r"
              style={{
                width: `${pepePercentage}%`,
                background:
                  "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
              }}
            >
              <span className="text-[32.668px] font-extrabold text-[#0B0101] leading-none font-[Inter]">
                {pepePercentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MilestonesSec;
