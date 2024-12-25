import React from "react";
import prizeimg from "../../assets/PrizeMoneySec/prize-belt.svg";

function PrizeMoneySec() {
  return (
    <div className="w-[100%] bgprizsec overflow-hidden pt-[60px] pb-[80px]">
      <div className="max-w-[1291.63px] space-y-[45px] w-[100%] mx-auto relative min-h-[500px]">
        <div className="space-y-[20px]">
          <h3 className="text-[#fff] text-center text-[42px] leading-[104.377%] font-[700]">
            Prize Money For The Winning Team{" "}
          </h3>
          <h4
            className="text-center text-[#EFAB00] text-[64px] font-[800]"
            style={{ textShadow: "6.534px -0.817px 24.583px #F1AD03" }}
          >
            100’000 USD*{" "}
          </h4>
          <div className="flex justify-center">
            <img src={prizeimg} alt="" />
          </div>
          <div className="space-y-[10px]">
            <h4 className="text-center leading-normal text-[32px] text-[#fff] font-[700] max">
              For every $100k raised another $15’000 <br /> will be added to the
              Prize Pool
            </h4>
            <p className="text-center text-[16px] text-[#FFFCFC] font-[700]">
              *The prize money will be airdropped to all token holders of the
              winning coin, distributed proportionally based on the number of
              tokens they hold.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeMoneySec;
