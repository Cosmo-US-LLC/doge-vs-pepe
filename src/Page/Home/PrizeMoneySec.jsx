import React from "react";

function PrizeMoneySec() {
  return (
    <div
      className="w-[100%] h-[700px] flex justify-center items-center overflow-hidden relative "
      id="prize_money"
    >
      <div className="gradient-bg max-w-[1280px] h-[580px] p-[1px] overflow-hidden rounded-[40px] w-[100%]">
        <div className="prize_money_bg h-full w-full relative ">
          <div className="flex items-end justify-center h-full relative">
            <div className="absolute top-[40%] right-[2%] px-4 py-4 border border-[rgba(255, 255, 255, 0.20)] bg-[rgba(255, 255, 255, 0.10)]">
              <p className="text-center subtext max-w-[340px]">
                The prize money will be airdropped and shared by all token
                holders of the winning coin.
              </p>
            </div>
            <h4 className="absolute top-[58%] left-[2%] text-center max-w-[220px] rotate-[-6.796deg]">
              PRIZE MONEY FOR THE{" "}
              <span className="gradient-text"> WINNING </span> TEAM
            </h4>

            <p className="text-center subtext pb-8">
              *The prize money will be distributed in the winning token based on
              your holdings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeMoneySec;
