import React, { useState } from "react";
import chestImage from "../../assets/MilestonesSec/deal-box.webp";
import groupImage from "../../assets/MilestonesSec/flag-line-trophy.png";
import pepeicon from "../../assets/MilestonesSec/Mask group (5).png";
import dogeicon from "../../assets/MilestonesSec/Mask group (4).png";
import { useStore } from "@nanostores/react";
import { $dogeApiState, $pepeApiState } from "../../presale-gg/stores";
import { formatNumber, parseNum } from "../../presale-gg/util";


function MilestonesSec() {
  const dogeApiData = useStore($dogeApiState)
  const pepeApiData = useStore($pepeApiState)

  const MAX = 1000000
  const dogeFraction = parseNum(dogeApiData.stage?.cumulative_usd_raised) / MAX
  const pepeFraction = parseNum(pepeApiData.stage?.cumulative_usd_raised) / MAX
  
  return (
    <div className="Mysterybg relative w-[100%] pt-[90px] overflow-hidden pb-[90px]">
      <div className="max-w-[1168px] space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[40px] flex flex-col items-center justify-center">
          <div className="Mysteryborder p-[15px]">
            <h3 className="text-[50px] text-[#FFFCFC] font-HiJack uppercase text-center font-[400]">
            Mystery Milestones Reveal
            </h3>
            <p className="text-[20px] font-[400] pt-[8px] pb-[22px] leading-[114%] text-center text-[#FFF]">
            The fight heats up with every milestone! 
            </p>
            <p className="max-w-[707px] mx-auto leading-[114%] text-[20px] font-[400] text-center text-[#FFF]">
            When one side hits a milestone, it reveals a mystery feature for the opposing team, keeping the competition alive and rewarding both sides. With three key milestones: 250k, 500k, and 750k, each unlocks exciting surprises that drive both teams closer to the finish line.
            </p>
          </div>
        </div>
        <div className="pt-[80px] pb-[30px]">
         <div className="relative">
         <img className="absolute top-[-150%] left-[0%]" src={dogeicon} alt="" />
          <div className="bg-[#181818] p-1 rounded-[40.835px] w-[100%] h-[66.415px] border-[0.794px] border-[#EFAB00]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
              style={{
                width: `${dogeFraction * 100}%`,
                minWidth: "3.5rem"
              }}
            >
              <span className="text-[32.668px] font-[400] font-HiJack text-[#0B0101] leading-none font-[Inter]">
                {formatNumber(dogeFraction * 100, 0, 0)}%
              </span>
            </div>
          </div>
         </div>

          <div className="relative flex min-h-[480px] justify-center items-center flex-col ">
            <div className="absolute top-[4%] left-[21%] gap-[115px] flex ">
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
              <span className="text-white font-HiJack  text-[36px] font-[400] leading-normal absolute right-[3%] top-[-21%]">
              The Winner
              </span>

              <img src={groupImage} alt="flag" className="" />
              
            </div>
            <div className="absolute bottom-[4%] left-[21%] gap-[115px] flex ">
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
          <div className="relative">
          <img src={pepeicon} className="absolute top-[-150%] left-[0%]" alt="" />
          <div className="bg-[#181818] p-1 rounded-[40.835px] w-[100%] h-[66.415px] border-[0.794px] border-[#09FC3C]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r"
              style={{
                width: `${pepeFraction * 100}%`,
                minWidth: "3.5rem",
                background:
                  "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
              }}
            >
              <span className="text-[32.668px] font-HiJack font-[400] text-[#0B0101] leading-none font-[Inter]">
                {formatNumber(pepeFraction * 100, 0, 0)}%
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MilestonesSec;
