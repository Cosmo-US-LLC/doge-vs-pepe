import React from "react";
import percentage_bar from "../../assets/Mobile/percentage_bar.svg";
import stages from "../../assets/Mobile/stages.svg";

function Milestones() {
  return (
    <div className="flex flex-col items-center p-4 mt-4 bg-[black]">
      <p className="text-[24px] font-[700] leading-[31px] text-[white]">Milestones Mystery Reveals</p>
      <p className="text-[12px] font-[400] leading-[13px] text-[white] mt-2">
        The race heats up with every milestone!
      </p>
      <p className="text-center text-[12px] font-[400] leading-[13px] text-[white] mt-4">
        When one project hits a milestone, it reveals a mystery feature for the opposing project, keeping the competition alive and rewarding both sides. With four key milestones—250k, 500k, 750k, and 900k—each unlocks exciting surprises that drive both teams closer to the finish line.
      </p>
      <div className="relative">
        <img
          src={percentage_bar}
          className="mt-8"
          alt="percentage_bar"
        />
        <img
          src={stages}
          className="absolute top-[70px]"
          alt="stages"
        />
      </div>

    </div >
  )
}

export default Milestones;
