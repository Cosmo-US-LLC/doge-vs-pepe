import React from "react";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";
import vsimg from "../../assets/herosec/vs.png";
import vsimgr from "../../assets/herosec/vects (2).png";
import vsimgl from "../../assets/herosec/vects (1).png";
import downArrow from "../../assets/herosec/down-arrow.svg";

function MobileHeroSection() {
  const handleScroll = (event, targetId, offset = 0) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const elementPosition =
        targetElement.getBoundingClientRect().top + scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="w-[100%] bgheromobsec pt-[5rem] pb-[40px] min-h-[647px] relative"
      id="what-is"
    >
      <div className="w-[90%] relative mx-auto px-3">
        <div className="max-w-[575px] w-full flex flex-col justify-center items-center mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <h1
              className="text-[#F2B60F] text-[54px] font-[700]"
              style={{ textShadow: "6px -1px 24px #F1AD03" }}
            >
              DOGE
            </h1>
            <h4
              className="text-[#fff] text-[20px] font-[500]"
              style={{ textShadow: "0px 0px 7px #74FF60" }}
            >
              VS
            </h4>
            <h1
              className="text-[#00FF2F] text-[54px] font-[700]"
              style={{ textShadow: "6px -1px 24px #74FF60" }}
            >
              PEPE
            </h1>
          </div>

          <h3 className="w-[340px] text-[26px] font-[700] pb-2 uppercase leading-[1.13] text-[#FFF] text-center">
            THE ULTIMATE showdown
          </h3>
          <h4 className="w-[340px] text-[23px] font-[700] pb-4 leading-[1.3] text-[#FFF] text-center">
            Who’s Raising <span className="text-[#00FF2F]">$1 Million</span>{" "}
            First?
          </h4>
          <p className="text-[15px] max-w-[311px] w-full pb-6 mx-auto font-[700] leading-[1.2] text-[#FFF] text-center">
            Only one coin will survive this fight, break out of the Matrix and
            launch. On one side, we’ve got the OG meme king, Doge, and on the
            other, the meme sensation, Pepe. The first to hit $1M wins and
            launches!<br/><br/> The choice is yours!
          </p>
        </div>

         
        <div className="relative">
          <img src={vsimgr} className="h-[243px] w-[163px] absolute left-[-10%] top-[-33px]" alt="" />
          <img
            src={vsimg}
            className="max-h-[66px] h-[62px] absolute left-[50%] top-[45px] translate-x-[-50%] translate-y-[-50%]"
            alt=""
          />
          <img className="h-[243px] w-[163px] absolute right-[-30px] top-[-33px]"  src={vsimgl} alt="" />
        </div>
      </div>

      <div className="max-w-[618px] w-[100%] flex items-center justify-between px-6 pb-6 absolute bottom-[1%]">
        <button
          className="rounded-[60px] max-w-[112.957px] w-[100%] h-[34px] flex justify-center items-center text-[11px] font-[800] text-[#000] space-x-2"
          style={{
            background: "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)",
            boxShadow: "0px 2px 0px 0px #FFF",
          }}
        >
          <img className="mr-2 max-h-[12px]" src={arwr} alt="" />
          BUY $DOGE
        </button>
        <button
          className=" rounded-[60px] max-w-[112.957px] w-[100%] h-[34px] flex justify-center items-center text-[11px] font-[800] text-[#000] space-x-2"
          style={{
            background: "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)",
            boxShadow: "0px 2px 0px 0px #FFF",
          }}
        >
          BUY $PEGE <img className="ml-2 max-h-[12px]" src={arwl} alt="" />
        </button>
      </div>
      <div className="absolute bottom-[0%] left-0 right-0 flex items-center justify-center z-30">
        <img
          className="h-[32px] w-[32px]"
          src={downArrow}
          alt=""
          onClick={(e) => handleScroll(e, "how-to-buy", 50)}
        />
      </div>
    </div>
  );
}

export default MobileHeroSection;
