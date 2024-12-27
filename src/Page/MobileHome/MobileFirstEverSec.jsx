import React from "react";
import firstDoge from "../../assets/Mobile/first-doge.webp";
import firstPepe from "../../assets/Mobile/first-pepe.webp";
import greenShodow from "../../assets/Mobile/green-shodow.svg";
import yellowShodow from "../../assets/Mobile/yellow-shodow.svg";
function MobileFirstEverSec() {
  return (
    <div className="w-[100%] bgeversecmob overflow-hidden relative pt-[60px] pb-[17px]" id="whitepaper">
       <div class="absolute inset-0 bg-black bg-opacity-10 z-10"></div>
      <div className=" space-y-[45px] w-[90%] mx-auto  ">
        <h3 className="text-[#fff] text-center text-[24px] leading-[24px] uppercase font-[700]">
          The First Ever <br /> Crypto Meme Fight
        </h3>

        <div className="relative z-10">
          <div className="max-w-[264.314px] mx-auto w-[100%]">
            <p className="text-[#fff] text-[16px] text-center leading-[114%] font-[400]">
              Welcome to <span className="font-[700]">Team Doge</span> vs.{" "}
              <span className="font-[700]">Team Pepe</span>, where you get to
              decide who wins! This isn’t just another crypto presale—it’s a
              fast, fun competition that lets the community decide. <br />{" "}
              <br />
              Your mission is simple:
              <br /> <br /> 1. Pick your favorite meme by buying the coin you
              prefer. 
              <br /> <br /> 2. The first to hit $1M raised wins
              <br /> <br /> 3. Launch Date will be announced immediately after
              <br /> <br /> 4. Winner Launches on DEX and CEX <br /> <br />
              So, who will it be? Will you back Doge, the iconic Shiba?
              Or will you choose Pepe, the internet’s rebellious frog?
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[250px] flex justify-between z-10">
        <img
          src={firstDoge}
          alt="firstDoge"
          className="w-[302px] h-[196px] absolute left-[-17%] bottom-[6px]"
        />
        <img
          src={yellowShodow}
          alt="firstDoge"
          className="w-[202px] h-[156px] absolute left-[0%] bottom-[-3%]"
        />
        <img
          src={firstPepe}
          alt="firstPepe"
          className="w-[175px] h-[250px] absolute right-[-8%] bottom-[6px]"
        />
        <img
          src={greenShodow}
          alt="firstPepe"
          className="w-[175px] h-[250px] absolute right-[-8%] bottom-[-8%]"
        />
      </div>
    </div>
  );
}

export default MobileFirstEverSec;
