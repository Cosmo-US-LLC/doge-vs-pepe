import React from "react";
import firstDoge from "../../assets/Mobile/first-doge.svg";
import firstPepe from "../../assets/Mobile/first-pepe.svg";
function MobileFirstEverSec() {
  return (
    <div className="w-[100%] bgeversecmob overflow-hidden w-[100%] relative pt-[60px] pb-[17px]">
      <div className="max-w-[1291.63px] space-y-[45px] w-[90%] mx-auto  ">
       <div>
        <h3 className="text-[#fff] text-center text-[24px] leading-[100%] uppercase font-[700]">The First Ever <br /> Crypto Meme Fight</h3>
       </div>
       <div className="relative">
        <div className="max-w-[254.314px] mx-auto w-[100%]">
            <p className="text-[#fff] text-[12px] text-center leading-[114%] font-[400]">Welcome to <span className="font-[700]">Team Doge</span> vs. <span className="font-[700]">Team Pepe</span>, where you get to decide who  wins! This isn’t just another crypto presale—it’s a fast, fun competition that  lets the community decide. <br /> <br /> 
            Your mission is simple:<br /> <br />  1. Pick your favorite meme by buying the coin you prefer. <br /> <br /> 2. The first to hit $1M raised wins<br /> <br /> 3. Launch Date will be announced immediately after<br /> <br /> 4. Winner Launches on DEX and CEX  <br /> <br />

            So, who will it be? Will you back Doge, the iconic Shiba?  <br />Or will you choose Pepe, the internet’s rebellious frog?
            </p>
        </div>
       </div>
      </div>
    <div className="min-h-[250px] flex justify-between">
    <img src={firstDoge} alt="firstDoge" className="absolute left-0 bottom-[6px]"/>
    <img src={firstPepe} alt="firstPepe" className="absolute right-0 bottom-[6px]"/>
    </div>

    </div>
  );
}

export default MobileFirstEverSec;
