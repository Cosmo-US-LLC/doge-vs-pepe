import React from "react";
import dogeImage from "../../assets/FirstEver/57 1.png";
import pepeImage from "../../assets/FirstEver/59119 3.png";
import yellowShadow from "../../assets/FirstEver/ellipse-yellow.svg";
import greenShadow   from "../../assets/FirstEver/ellipse-green.svg";
import shodow from "../../assets/FirstEver/shodow.svg"
function FirstEverSec() {
  return (
    <div className="relative w-[100%] bgeversec overflow-hidden  flex justify-center items-center" id="firstever">
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      <img src={shodow} alt="shodow" className="absolute top-0 left-0 right-0 w-full"/>
      <div className="max-w-[1291.63px] space-y-[45px] w-[100%] mx-auto relative min-h-[500px]">
       <div className="relative z-20">
        <h3 className="text-[#fff] text-center text-[50px] uppercase leading-[87.677%] font-HiJack font-[400]">The FIGHT OF THE CENTURY</h3>
       </div>
       <div className="relative">
            <img src={dogeImage} className="w-[560px] h-[363px] absolute top-[30%] left-[-16%] z-10" alt="" />
            <img src={yellowShadow} className="w-[560px] h-[300px] absolute top-[65%] left-[-8%] z-10" alt="" />
        <div className="max-w-[820px] mx-auto w-[100%] rounded-[26.9px] p-4 border border-[#fff]"
        style={{
          boxShadow: "0px 8px 13.3px 0px rgba(0, 0, 0, 0.49",
          backgroundColor: "#00000082",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        >
            <p className="text-[#FFF] relative z-20 max-w-[778px] mx-auto text-[20px] text-center leading-[114%] font-[400]">Welcome to Team Doge vs. Team Pepe, where the community decides who wins! This isn’t just another crypto pre-sale, it’s the ultimate showdown between two meme heavyweights as only one token will launch in the end! <br /> <br /> 
            Your mission is simple:<br /> <br />  1. Pick your favorite meme by buying the coin you prefer. <br /> <br /> 2. The first to hit $1M raised wins<br /> <br /> 3. Launch Date will be announced<br /> <br /> 4. Winner Launches on DEX and CEX  <br /> <br />

            So, who will it be? Will you back Doge, the iconic Shiba?  <br />Or will you choose Pepe, the rebellious frog?

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
