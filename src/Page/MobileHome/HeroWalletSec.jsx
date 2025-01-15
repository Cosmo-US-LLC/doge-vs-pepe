import React, { useState } from "react";
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from "react-countdown";
import arwbtn1 from "../../assets/walletsec/btnicns (3).svg";
import arwbtn2 from "../../assets/walletsec/btnicns (1).svg";
import arwbtn3 from "../../assets/walletsec/btnicns (2).svg";
import coinsw1 from "../../assets/walletsec/coinsw (5).svg";
import coinsw2 from "../../assets/walletsec/coinsw (2).svg";
import coinsw3 from "../../assets/walletsec/coinsw (3).svg";
import coinsw4 from "../../assets/walletsec/coinsw (1).svg";
import coinsw5 from "../../assets/walletsec/coinsw (6).svg";
import coinsw6 from "../../assets/walletsec/coinsw (4).svg";
import ggicon from "../../assets/walletsec/gg.svg";
import arw from "../../assets/walletsec/arw.svg";
import downArrow from "../../assets/herosec/down-arrow.svg";
import Widget from "../../component/Widget/Widget";

const Buybuttons = [
  { id: "Buy", label: "Buy", img: arwbtn1 },
  { id: "Stake", label: "Stake", img: arwbtn2 },
  { id: "History", label: "History", img: arwbtn3 },
];

const options = [
  {
    img: coinsw2,
    text: "ETH (ERC-20)",
  },
  {
    img: coinsw1,
    text: "Option 2",
  },
  {
    img: coinsw3,
    text: "Option 3",
  },
  {
    img: coinsw4,
    text: "Option 4",
  },
  {
    img: coinsw5,
    text: "Option 5",
  },
  {
    img: coinsw6,
    text: "Option 5",
  },
];
const iconsData = [
  {
    img: coinsw1,
  },
  {
    img: coinsw2,
  },
  {
    img: coinsw3,
  },
  {
    img: coinsw4,
  },
  {
    img: coinsw5,
  },
  {
    img: coinsw6,
  },
];

function HeroWalletSec() {
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [selectedItempepe, setSelectedItempepe] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenpepe, setIsDropdownOpenpepe] = useState(false);
  const [activeButton, setActiveButton] = useState("Buy");
  const [activeButtonpepe, setActiveButtonpepe] = useState("Buy");

  const handleSelect = (option) => {
    setSelectedItem(option);
    setIsDropdownOpen(false);
  };
  const handleSelectpepe = (option) => {
    setSelectedItempepe(option);
    setIsDropdownOpenpepe(false);
  };
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

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="text-white justify-center">
      <div className="bg-black border border-neutral-400 w-[94px] h-[94px] rounded-[15px] flex flex-col justify-center items-center font-Inter">
        <span className="text-[44px] font-semibold leading-none">{zeroPad(days)}</span>
        <span className="text-[16px] font-bold">days</span>
      </div>
      <span className="text-[50px] px-1">:</span>
      <div className="bg-black border border-neutral-400 w-[94px] h-[94px] rounded-[15px] flex flex-col justify-center items-center font-Inter">
        <span className="text-[44px] font-semibold leading-none">{zeroPad(hours)}</span>
        <span className="text-[16px] font-bold">days</span>
      </div>
      <span className="text-[50px] px-1">:</span>
      <div className="bg-black border border-neutral-400 w-[94px] h-[94px] rounded-[15px] flex flex-col justify-center items-center font-Inter">
        <span className="text-[44px] font-semibold leading-none">{zeroPad(minutes)}</span>
        <span className="text-[16px] font-bold">days</span>
      </div>
      {/* :{zeroPad(seconds)} */}
    </div>
  );  

  return (
    <div
      className="w-[100%] bgwltsecmob pt-[30px] pb-[50px] relative"
      id="how-to-buy"
    >
      <div className="max-w-[922px] w-[90%] mx-auto ">
        <div className="block space-y-[5rem]">
          <div className="flex justify-center">
            <Widget
              project="doge"
              symbol="DOPE"
              theme={{bg: "#f2b60f"}}
              className="scale-[0.7] -m-16 w-[calc(100%+7.5rem)] xs:transform-none xs:m-auto xs:w-full"
            />
          </div>
          <div className="flex justify-center">
            <Widget
              project="pepe"
              symbol="PEGE"
              theme={{bg: "#4eb52a"}}
              className="scale-[0.7] -m-16 w-[calc(100%+7.5rem)] xs:transform-none xs:m-auto xs:w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full hidden h-full absolute top-0 left-0 z-20 bg-[#000000c6] flex flex-col justify-center gap-y-[15px]">
        <h4 className="font-HiJack uppercase text-white text-[22px] text-center">
          THE FIGHT STARTS IN
        </h4>
        <div>
          <Countdown
            date={new Date("1/31/2025")}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroWalletSec;
