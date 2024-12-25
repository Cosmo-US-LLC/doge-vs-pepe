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
            <p className="text-[24px] font-[700] leading-[31px] text-[white] mt-4 text-center">
                Prize Money For The<br /> <span className="text-[#EFAB00] font-k2d text-[25.954px] font-bold filter blur-[0.156px]">
  Winning Team
</span>
            </p>
            <p className="text-[36px] font-[800] leading-[46px] text-[#EFAB00] mt-4 text-center">
                100’000 USD*
            </p>
            <img src={belt} className="mt-4" alt="belt" />
            <p className="text-[16px] font-[700] leading-[20px] text-[white] mt-4 text-center">For every $100k raised another $10’000 will be added to the Prize Pool</p>
            <p className="text-[12px] font-[700] leading-[15px] text-[white] mt-4 text-center">*The prize money will be airdropped to all token holders of the winning coin, distributed proportionally based on the number of tokens they hold.</p>
        </div>
    );
}
      
export default PrizeMoney;
