import React from "react";
import dogeImage from "../../assets/FirstEver/59.svg";
import pepeImage from "../../assets/FirstEver/60.svg";
import yellowShadow from "../../assets/FirstEver/ellipse-yellow.svg";
import greenShadow   from "../../assets/FirstEver/ellipse-green.svg";
import shodow from "../../assets/FirstEver/shodow.svg"
function FirstEverSec() {
  return (
    <div className="relative w-[100%] bgeversec overflow-hidden  flex justify-center items-center" id="firstever">
      <div class="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      <img src={shodow} alt="shodow" className="absolute top-0 left-0 right-0 w-full"/>
      <div className="max-w-[1291.63px] space-y-[45px] w-[100%] mx-auto relative min-h-[500px]">
       <div className="relative z-20">
        <h3 className="text-[#fff] text-center text-[50px] leading-[104.377%] font-[700]">The First Ever Crypto Meme Fight</h3>
       </div>
       <div className="relative">
            <img src={dogeImage} className="w-[560px] h-[363px] absolute top-[30%] left-[-8%] z-10" alt="" />
            <img src={yellowShadow} className="w-[560px] h-[300px] absolute top-[65%] left-[-8%] z-10" alt="" />
        <div className="max-w-[641px] mx-auto w-[100%]">
            <p className="text-[#fff] text-[20px] text-center leading-[114%] font-[400]">Welcome to <span className="font-[700] relative z-20">Team Doge</span> vs. <span className="font-[700] relative z-20">Team Pepe</span>, where you get to decide<br /> who  wins! This isn’t just another crypto presale—it’s a never-seen <br /> competition that lets the community decide. <br /> <br /> 
            Your mission is simple:<br /> <br />  1. Pick your favorite meme by buying the coin you prefer. <br /> <br /> 2. The first to hit $1M raised wins<br /> <br /> 3. Launch Date will be announced<br /> <br /> 4. Winner Launches on DEX and CEX  <br /> <br />

            So, who will it be? Will you back Doge, the iconic Shiba?  <br />Or will you choose Pepe, the internet’s rebellious frog?

            </p>
        </div>
            <img src={pepeImage} className="absolute z-10 top-[-4%] -right-6 w-[348px] h-[496px]" alt="" />
            <img src={greenShadow} className="absolute z-10 top-[80%] -right-8" alt="" />
       </div>
      </div>
    </div>
  );
}

export default FirstEverSec;
