import React from "react";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";
import vsimg from "../../assets/herosec/vs.png";
import vsimgr from "../../assets/herosec/vects (2).png";
import vsimgl from "../../assets/herosec/vects (1).png";

function MobileHeroSection() {
  return (
    <div className="w-[100%] bgheromobsec w-[100%] pt-[5rem] pb-[40px]">
      <div className="max-w-[1245px] w-[90%] mx-auto relative">
        <div className="max-w-[575px] w-[100%] mx-auto text-center">
          <div className="flex items-center space-x-4 justify-center">
            <h1
              className="text-[#F2B60F] text-[53.771px] font-[700] "
              style={{ textShadow: "6.534px -0.817px 24.583px #F1AD03" }}
            >
              DOGE
            </h1>
            <h4
              className="text-[#fff] text-[20.559px] font-[700] "
              style={{ textShadow: "0px 0px 7.024px #74FF60" }}
            >
              VS
            </h4>
            <h1
              className="text-[#00FF2F] text-[53.771px] font-[700] "
              style={{ textShadow: "6.534px -0.817px 24.583px #74FF60" }}
            >
              PEPE
            </h1>
          </div>
          <h3 className="text-[25px] font-[700] pb-[8px] uppercase leading-[113.185%] text-[#FFF]  text-center">
            THE ULTIMATE showdown
          </h3>
          <h4 className="text-[22px] font-[700] pb-[22px] leading-[128.619%] text-[#FFF] text-center">
            Who’s Raising <span className="text-[#00FF2F]">$1 Million</span>{" "}
            First?
          </h4>
          <p className="text-[12px] max-w-[575px] w-[100%] pb-[24px] mx-auto font-[700] leading-[118.336%] text-[#FFF]  text-center">
            Only one coin will survive this fight, break out of the Matrix and
            launch. On  one side, we’ve got the OG meme king, Doge, and on the
            other, the meme  sensation, Pepe. The first to hit $1M wins and 
            launches!  The choice is yours!
          </p>
        </div>
       <div className="w-[100%]">
        <div className="">
          <div className="flex justify-between items-center">
          <img src={vsimgr} className=" h-[229px] -left-12 -top-9" alt="" />
              <img src={vsimg} className="max-h-[50px]" alt="" />
          <img className=" -right-12 h-[229px] -top-9" src={vsimgl} alt="" />
          </div>
          <div className="max-w-[618px] w-[100%] flex items-center justify-between mx-auto">
            <button
              className="rounded-[60px] max-w-[112.957px] w-[100%] h-[25.819px] flex justify-center items-center text-[9.037px] font-[700] text-[#000] space-x-2"
              style={{
                background: "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)",
                boxShadow: "0px 2px 0px 0px #FFF",
              }}
            >
              <img className="mr-2 max-h-[12px]" src={arwr} alt="" />
              BUY $DOGE
            </button>
            <button
              className=" rounded-[60px] max-w-[112.957px] w-[100%] h-[25.819px] flex justify-center items-center text-[9.037px] font-[700] text-[#000] space-x-2"
              style={{
                background: "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)",
                boxShadow: "0px 2px 0px 0px #FFF",
              }}
            >
              BUY $PEPE <img className="ml-2 max-h-[12px]" src={arwl} alt="" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeroSection;
