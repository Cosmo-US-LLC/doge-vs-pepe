import React from "react";

function TwoLegends() {
  return (
    <div className="w-[100%] h-[725px] relative flex flex-col justify-center items-center">
      <div className="flex w-[100%] max-w-[1280px] mx-auto px-8 flex-row">
        <div className=" w-[50%] relative z-[99]">
          <div className="border-2  border-[#fff] px-[22px] py-[29px] m-4 rounded-[24px] bg-black/20 flex flex-col gap-4">
            <p className="font-[Helvetica] text-[22px] font-[700] leading-[145%] text-center text-[#fff]">
              Only one will win this epic fight and launch! <br />
              <br /> This is the first crypto meme battle where you back your
              favorite legendary meme by buying tokens during the presale and
              joining their team. <br />
              <br /> In one corner: Doge, the undefeated OG Meme Heavyweight
              Champion, dominating for years with his wild, unpredictable style.
              <br />
              <br /> In the other: Pepe, the fearless rising star, already in
              the top 3 meme heavyweights, known for his brutal knockouts.
              <br />
              <br /> The first to hit $1M wins the presale round.
              <br />
              <br /> The choice is yours!
            </p>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-end pb-10">
          <div className="two_legends absolute -z-1 w-[100%] max-w-[905px] top-4 h-[708px]"></div>
          <p className="text-center relative z-9 section_heading">
            Two Legends.
            <br /> One Crown.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwoLegends;
