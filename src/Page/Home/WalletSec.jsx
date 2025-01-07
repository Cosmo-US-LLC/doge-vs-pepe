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
      <img
        src={shodow}
        alt="shodow"
        className="absolute top-0 left-0 right-0 w-full"
      />
      <img
        src={downShodow}
        alt="shodow"
        className="absolute bottom-0 left-0 right-0 w-full"
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
      <div className="absolute bottom-[-3%] left-0 right-0 flex items-center justify-center z-30">
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
