import React, { useState } from "react";
import shodow from "../../assets/shodow.svg";
import downShodow from "../../assets/Mobile/down-shodwo.svg";
import downArrow from "../../assets/herosec/down-arrow.svg";
import Widget from "../../component/Widget/Widget";

function WalletSec() {
  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="relative w-[100%] bgwltsec pt-[107px] pb-[128px]"
      id="how-to-buy"
    >
      <div className="h-[100%] bg-[#000000cf] flex justify-center items-center z-[60] absolute w-[100%] top-0 ">
        <div className="max-w-[700px] mx-auto space-y-[5px]">
          <h3
            className="text-[#FFFCFC] text-[61.623px] text-center font-[400] uppercase font-HiJack"
            style={{
              textShadow: "0px 0px 32.291px #000, 0px 0px 17.871px #000",
            }}
          >
            The Fight Starts In
          </h3>
          <div className="flex items-center justify-center space-x-5">
            <div
              className="relative z-[80] rounded-[26.089px] border border-[#fff] w-[160.97px] h-[160.97px] flex flex-col justify-center items-center"
              style={{
                background: "rgb(0 0 0 / 53%)",
              }}
            >
              <h3 className="text-[#FFF] text-[76.413px] font-[600] leading-[100%]">
                16
              </h3>
              <p className="text-[27.553px] font-[700] text-[#FFF]">Days</p>
            </div>
            <span className="text-[#FFF] text-[85.755px] font-[700] leading-[100%]">
              :
            </span>
            <div
              className="relative z-[80] rounded-[26.089px] border border-[#fff] w-[160.97px] h-[160.97px] flex flex-col justify-center items-center"
              style={{
                background: "rgb(0 0 0 / 53%)",
              }}
            >
              <h3 className="text-[#FFF] text-[76.413px] font-[600] leading-[100%]">
                02
              </h3>
              <p className="text-[27.553px] font-[700] text-[#FFF]">Hours</p>
            </div>
            <span className="text-[#FFF] text-[85.755px] font-[700] leading-[100%]">
              :
            </span>
            <div
              className="relative z-[80] rounded-[26.089px] border border-[#fff] w-[160.97px] h-[160.97px] flex flex-col justify-center items-center"
              style={{
                background: "rgb(0 0 0 / 53%)",
              }}
            >
              <h3 className="text-[#FFF] text-[76.413px] font-[600] leading-[100%]">
                55
              </h3>
              <p className="text-[27.553px] font-[700] text-[#FFF]">Sec</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={shodow}
        alt="shodow"
        className="absolute top-0 left-0 right-0 w-full pointer-events-none"
      />
      <img
        src={downShodow}
        alt="shodow"
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
      />
      <div className="max-w-[922px] w-[100%] mx-auto ">
        <div className="flex justify-between">
          <Widget
            project="doge"
            symbol="DOPE"
            theme={{bg: "#f2b60f"}}
          />
          <Widget
            project="pepe"
            symbol="PEGE"
            theme={{bg: "#4eb52a"}}
          />
        </div>
      </div>
      <div className="absolute bottom-[-3%] left-0 right-0 flex items-center justify-center z-[99]">
        <img
          className="transition-all duration-300 cursor-pointer hover:animate-bounce hover:scale-110"
          src={downArrow}
          alt=""
          onClick={(e) => handleScroll(e, "firstever", 90)}
        />
      </div>
    </div>
  );
}

export default WalletSec;
