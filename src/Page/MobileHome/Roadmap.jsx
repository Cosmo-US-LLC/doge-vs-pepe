import React from "react";

function Roadmap() {
  return (
    <div className="flex flex-col items-center mt-4 bg-[black] p-4 relative">
      <p className="text-[24px] font-[700] leading-[31px] text-[white]">
        Roadmap
      </p>
      <div className="flex flex-row justify-between w-full gap-2 mt-16">
        <div className="w-[45%]">
          <div className="flex justify-center items-center w-[149px] h-[30px] px-[12.238px] py-[4.079px] gap-[2.914px] flex-shrink-0 rounded-[23.602px] text-black font-[700] text-[12px] bg-gradient-to-r from-[#FFC676] to-[#FFBF00] shadow-[0px_4.662px_8.741px_0px_#615500]">
            The $DOPE Roadmap
          </div>
          <div className="bg-[#181818] flex flex-col items-left mt-4 rounded-[6px] py-4 px-1 min-h-[400px]">
            <p className="text-[10px] font-[600] leading-[8px] text-[#FEBF01]">
              Phase 1: The Battle Begins
            </p>
            <ol className="flex flex-col gap-1 pl-5 mt-4 text-base leading-relaxed text-gray-200 list-disc">
              <li className="text-[10px] text-[#FFF] font-[400]">
                Concept Development: Craft the vision for $DOPE, combining
                Doge’s charm with a competitive presale.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Website Launch: Launch the $DOPE site with presale details,
                community channels, and resources for supporters.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Community Setup: Create Telegram channels for rallying Team Doge
                fans.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Marketing Kickoff: Roll out social media campaigns, influencer
                promos, and press releases to unite Doge fans globally.{" "}
              </li>
            </ol>
          </div>
        </div>
        <div className="absolute bg-[white] h-full w-[1px] rounded-full left-1/2 top-[12%] h-[87%]"></div>
        <div className="w-[45%]">
          <div className="flex justify-center items-center w-[149px] h-[30px] px-[12.821px] py-[4.079px] gap-[2.914px] flex-shrink-0 rounded-[23.602px] text-black font-[700] text-[12px] bg-gradient-to-r from-[#79EC8F] to-[#09FC3C] shadow-[0px_4.662px_8.741px_0px_rgba(9,252,60,0.35)]">
            The $PEGE Roadmap
          </div>
          <div className="bg-[#181818] flex flex-col items-left mt-4 rounded-[6px] py-4 px-1 min-h-[400px]">
            <p className="text-[10px] font-[600] leading-[8px] text-[#4EB52A]">
              Phase 1: The Battle Begins
            </p>
            <ol className="flex flex-col gap-1 pl-5 mt-4 text-base leading-relaxed text-gray-200 list-disc">
              <li className="text-[10px] text-[#FFF] font-[400]">
                Concept Development: Craft the vision for $PEGE, combining
                Pepe’s iconic status with a thrilling presale.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Website Launch: Launch the $PEPE site with presale details and
                community tools.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Community Setup: Create Telegram channels for rallying Team Pepe
                believers.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Marketing Kickoff: Launch social media campaigns, influencer
                shoutouts, and press releases to unite the Pepe army.{" "}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
