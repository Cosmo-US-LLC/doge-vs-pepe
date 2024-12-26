import React from "react";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";
import vsimg from "../../assets/herosec/vs.png";
import vsimgr from "../../assets/herosec/vects (2).png";
import vsimgl from "../../assets/herosec/vects (1).png";
import downShodow from "../../assets/herosec/down-shodwo.svg"

function HeroSection() {
  return (
    <div className="relative w-[100%] bgherosec pt-[9rem] pb-[30px]" id="what-is">
      <img src={downShodow} className="absolute bottom-0 left-0 right-0 w-full" alt="" />
      <div className="max-w-[1245px] w-[100%] mx-auto relative min-h-[700px]">
        <div className="max-w-[575px] w-[100%] mx-auto text-center">
          <div className="flex items-center justify-center space-x-4">
            <h1
              className="text-[#F2B60F] text-[83.305px] font-[700] "
              style={{ textShadow: "6.534px -0.817px 24.583px #F1AD03" }}
            >
              DOGE
            </h1>
            <h4
              className="text-[#fff] text-[31.852px] font-[700] "
              style={{ textShadow: "0px 0px 7.024px #74FF60" }}
            >
              VS
            </h4>
            <h1
              className="text-[#00FF2F] text-[83.305px] font-[700] "
              style={{ textShadow: "6.534px -0.817px 24.583px #74FF60" }}
            >
              PEPE
            </h1>
          </div>
          <h3 className="text-[39px] font-[700] pb-[8px] uppercase leading-[112.406%] text-[#FFF]  text-center">
            THE ULTIMATE showdown
          </h3>
          <h4 className="text-[32.669px] font-[700] pb-[22px] leading-[134.19%] text-[#FFF] text-center">
            Who’s Raising <span className="text-[#00FF2F]">$1 Million</span>{" "}
            First?
          </h4>
          <p className="text-[16px] max-w-[575px] w-[100%] pb-[24px] mx-auto font-[700] leading-[137.5%] text-[#FFF]  text-center">
            Only one coin will survive this fight, break out of the Matrix and
            launch. On <br /> one side, we’ve got the OG meme king, Doge, and on the
            other, the meme <br /> sensation, Pepe. The first to hit $1M wins and 
            launches! <br /> The choice is yours!
          </p>
        </div>
       <div className="absolute bottom-0 min-h-[490px] w-[100%]">
        <div className="flex relative min-h-[490px]">
          <img src={vsimgr} className="absolute -left-12 -top-9" alt="" />
          <div className="max-w-[618px] pt-10 w-[100%] flex items-center justify-between mx-auto">
            <button
              className="rounded-[60px] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[700] text-[#000] space-x-2"
              style={{
                background: "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)",
                boxShadow: "0px 2px 0px 0px #FFF",
              }}
            >
              <img className="mr-2" src={arwr} alt="" />
              BUY $DOGE
            </button>
            <img src={vsimg} className="max-h-[210px]" alt="" />
            <button
              className=" rounded-[60px] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[700] text-[#000] space-x-2"
              style={{
                background: "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)",
                boxShadow: "0px 2px 0px 0px #FFF",
              }}
            >
              BUY $PEPE <img className="ml-2" src={arwl} alt="" />
            </button>
          </div>
          <img className="absolute -right-12 -top-9" src={vsimgl} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
