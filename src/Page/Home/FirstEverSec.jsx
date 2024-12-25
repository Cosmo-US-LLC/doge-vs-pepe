import React from "react";
import imgl from "../../assets/FirstEver/59.svg";
import imgr from "../../assets/FirstEver/img (1).png";
import shodow from "../../assets/shodow.svg"
function FirstEverSec() {
  return (
    <div className="relative w-[100%] bgeversec overflow-hidden w-[100%] pt-[60px] pb-[80px]">
      <img src={shodow} alt="shodow" className="absolute top-0 left-0 right-0"/>
      <div className="max-w-[1291.63px] space-y-[45px] w-[100%] mx-auto relative min-h-[500px]">
       <div>
        <h3 className="text-[#fff] text-center text-[42px] leading-[104.377%] font-[700]">The First Ever Crypto Meme Fight</h3>
       </div>
       <div className="relative">
            <img src={imgl} className="w-[560px] h-[363px] absolute top-[16%] left-[-5%]" alt="" />
        <div className="max-w-[641px] mx-auto w-[100%]">
            <p className="text-[#fff] text-[18px] text-center leading-[114%] font-[400]">Welcome to <span className="font-[700]">Team Doge</span> vs. <span className="font-[700]">Team Pepe</span>, where you get to decide who <br /> wins! This isn’t just another crypto presale—it’s a fast, fun competition that <br /> lets the community decide. <br /> <br /> 
            Your mission is simple:<br /> <br />  1. Pick your favorite meme by buying the coin you prefer. <br /> <br /> 2. The first to hit $1M raised wins<br /> <br /> 3. Launch Date will be announced immediately after<br /> <br /> 4. Winner Launches on DEX and CEX  <br /> <br />

            So, who will it be? Will you back Doge, the iconic Shiba?  <br />Or will you choose Pepe, the internet’s rebellious frog?

            </p>
        </div>
            <img src={imgr} className="absolute top-8 -right-10" alt="" />
       </div>
      </div>
    </div>
  );
}

export default FirstEverSec;
