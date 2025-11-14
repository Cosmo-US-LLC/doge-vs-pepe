import React from "react";

function PrizeMoneySec() {
  return (
    <div
      className="w-[100%] h-[720px] flex justify-center items-center mt-[-110px]  relative "
      id="prize_money"
    >
      <div className="gradient-bg max-w-[1220px] h-[580px] p-[2px] overflow-hidden rounded-[43px] w-[100%]">
        <div className="prize_money_bg overflow-hidden h-full w-full relative rounded-[43px]">
          <div className="flex items-end justify-center h-full relative">
            <div className="absolute rounded-[18px] top-[40%] right-[2%] px-4 py-4 border border-[rgba(255, 255, 255, 0.20)] bg-[rgba(255, 255, 255, 0.10)]">
              <p className="text-center subtext max-w-[360px]">
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
