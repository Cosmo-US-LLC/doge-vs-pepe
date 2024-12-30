import React from "react";
import belt from "../../assets/Mobile/belt.png";
import prize_money_background from "../../assets/Mobile/prize-money-mobile.svg";

function PrizeMoney() {
    return (
        <div
            className="flex flex-col items-center px-4 mt-8 relative h-[511px] bg-cover bg-center"
            style={{
                backgroundImage: `url(${prize_money_background})`,
            }}
        >
            <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <p className=" relative text-[24px] font-[700] text-[#FFFCFC] text-center font-k2d uppercase leading-normal mt-2 z-20">
  Prize Money For<br />
  The <span className="font-[700] text-[24px] filter blur-[0.5px]">
    Winning Team
  </span>
</p>

<p className="text-[34px] font-[700] text-[#EFAB00] font-k2d leading-normal text-center mt-2 z-20">
  100’000 USD*
</p>
            <img src={belt} className="z-20 mt-4" alt="belt" />
            <p className="text-[16px] font-[700] leading-[20px] text-[white] mt-4 text-center z-20">For every $100k raised another $10’000 will be added to the Prize Pool</p>
            <p className="text-[10px] font-[600] leading-[15px] text-[white] mt-4 text-center z-20">*The prize money will be airdropped to all token holders of the winning coin, distributed proportionally based on the number of tokens they hold.</p>
        </div>
    );
}
      
export default PrizeMoney;
