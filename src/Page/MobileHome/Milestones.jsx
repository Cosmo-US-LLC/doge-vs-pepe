import React, { useState } from "react";
import chestImage from "../../assets/MilestonesSec/deal-box.webp";
import groupImage from "../../assets/MilestonesSec/flag-line-trophy.png";

function Milestones() {
  const [dogePercentage, setDogePercentage] = useState(18);
  const [pepePercentage, setPepePercentage] = useState(24);
  return (
    <div className=" relative w-[100%] pt-[40px] overflow-hidden pb-[40px]">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <h3 className="w-[360px] text-[#FFFCFC] text-center font-k2d text-[24px] font-[700] leading-normal uppercase">
            Mystery <br /> Milestones Reveal
          </h3>

          <p className="text-[#FFF] text-center font-k2d text-[12px] font-[400] leading-[114%]">
            The race heats up with every milestone!
          </p>

          <p className="w-[331px] text-[#FFF] text-center font-k2d text-[12px] font-[400] leading-[114%]">
            When one project hits a milestone, it reveals a mystery feature for
            the opposing project, keeping the competition <br/> alive and rewarding
            both sides. With four key milestones<br/> —250k, 500k, 750k, and 900k—each
            unlocks exciting surprises that drive both teams closer to the
            finish line.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#181818] w-[355px]  p-[2px] rounded-[40.835px] h-[40.415px] border-[0.794px] border-[#EFAB00]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
              style={{ width: `${dogePercentage}%` }}
            >
              <span className="text-[12px] font-extrabold text-[#0B0101] leading-none font-[Inter]">
                {dogePercentage}%
              </span>
            </div>
          </div>

          <div className="relative flex min-h-[200px] justify-center items-center flex-col ">
            <div className="absolute top-[9%] left-[22%] flex gap-[20px]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className="w-[32px] h-[28px] "
                />
                <span className="text-white font-inter text-[10px] font-[700] leading-normal">
                  $250,000
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className=" w-[32px] h-[28px] "
                />
                <span className="text-white font-inter text-[10px] font-[700] leading-normal opacity-30">
                  $250,000
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className=" w-[32px] h-[28px]"
                />
                <span className="text-white font-inter text-[10px] font-[700] leading-normal opacity-30">
                  $250,000
                </span>
              </div>
            </div>
            <div className="relative z-50 flex items-center justify-center px-4">
              <span className="text-white font-inter text-[12px] font-bold leading-normal absolute right-[5%] top-[-25%]">
                $1,000,000
              </span>

              <img src={groupImage} alt="flag" className="" />
              <span className="text-white font-inter text-[12px] font-bold leading-normal absolute right-[5%] bottom-[-23%]">
                The Winner
              </span>
            </div>
            <div className="absolute bottom-[9%] left-[22%] flex gap-[20px]">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-inter text-[10px] font-bold leading-normal">
                  $250,000
                </span>
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className=" w-[28px] h-[28px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-inter text-[10px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className=" w-[28px] h-[28px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-inter text-[10px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className=" w-[28px] h-[28px]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#181818] w-[355px]  p-[2px] rounded-[40.835px] h-[40.415px] border-[0.794px] border-[#09FC3C]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r"
              style={{
                width: `${pepePercentage}%`,
                background:
                  "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
              }}
            >
              <span className="text-[12px] font-extrabold text-[#0B0101] leading-none font-[Inter]">
                {pepePercentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milestones;
