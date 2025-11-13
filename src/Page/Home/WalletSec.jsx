import React, { useState, useEffect } from "react";
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
import arwbtn1 from "../../assets/walletsec/btnicns (3).svg";
import arwbtn2 from "../../assets/walletsec/btnicns (1).svg";
import arwbtn3 from "../../assets/walletsec/btnicns (2).svg";

import coinsw1 from "../../assets/walletsec/coins/tokens (1).svg";
import coinsw2 from "../../assets/walletsec/coins/tokens (13).svg";
import coinsw3 from "../../assets/walletsec/coins/tokens (12).svg";
import coinsw4 from "../../assets/walletsec/coins/tokens (11).svg";
import coinsw5 from "../../assets/walletsec/coins/tokens (10).svg";
import coinsw6 from "../../assets/walletsec/coins/tokens (9).svg";
import coinsw7 from "../../assets/walletsec/coins/tokens (8).svg";
import coinsw8 from "../../assets/walletsec/coins/tokens (7).svg";
import coinsw9 from "../../assets/walletsec/coins/tokens (6).svg";
import coinsw10 from "../../assets/walletsec/coins/tokens (5).svg";
import coinsw11 from "../../assets/walletsec/coins/tokens (4).svg";
import coinsw12 from "../../assets/walletsec/coins/tokens (3).svg";
import coinsw13 from "../../assets/walletsec/coins/tokens (16).svg";
import coinsw14 from "../../assets/walletsec/coins/tokens (15).svg";
import tokens from "../../assets/walletsec/coins/tokens.svg";

import doge_icn from "../../assets/walletsec/coins/doge_logo.webp";
import pepe_icn from "../../assets/walletsec/coins/pepe_logo.webp";

import dogeicon from "../../assets/walletsec/coins (2).svg";
import pepeicon from "../../assets/walletsec/coins (1).svg";

import arw from "../../assets/walletsec/arw.svg";
import bg_img_doge from "../../assets/walletsec/DOGGGEEEEEE.png";
import bg_img_pepe from "../../assets/walletsec/Pepe Avator.png";
import downArrow from "../../assets/herosec/down-arrow.svg";
import WidgetMob from "../../component/Widget/WidgetMob";
import TokenSelectDropdown from "../../component/TokenDropdown";

const Buybuttons = [
  { id: "Buy", label: "Buy", img: arwbtn1 },
  { id: "Transactions ", label: "Transactions ", img: arwbtn3 },
];

const tokenSelect = [
  [
    { id: 1, symbol: "ETH", sub_symbol: "ERC-20", icon: coinsw3 },
    { id: 2, symbol: "USDT", sub_symbol: "ERC-20", icon: coinsw5 },
  ],
  [
    { id: 3, symbol: "USDT", sub_symbol: "ERC-20", icon: coinsw5 },
    { id: 4, symbol: "SOL", sub_symbol: "SOLANA", icon: coinsw4 },
  ],
  [
    { id: 5, symbol: "BNB", sub_symbol: "BSC-20", icon: coinsw13 },
    { id: 6, symbol: "AVAX", sub_symbol: "BITCOIN", icon: coinsw6 },
  ],
  [
    { id: 7, symbol: "SOL", icon: coinsw4 },
    { id: 8, symbol: "ADA", icon: coinsw10 },
  ],
  [
    { id: 9, symbol: "USDC", sub_symbol: "ERC-20", icon: coinsw6 },
    { id: 10, symbol: "DOGE", sub_symbol: "ERC-20", icon: coinsw11 },
  ],
  [{ id: 11, symbol: "More" }],
];

const iconsData = [
  {
    img: coinsw14,
  },
  {
    img: coinsw7,
  },
  {
    img: coinsw9,
  },
  {
    img: coinsw8,
  },
  {
    img: coinsw11,
  },
  {
    img: coinsw1,
  },
];

function HeroWalletSec({
  initialHours = 2,
  initialMinutes = 13,
  initialSeconds = 54,
}) {
  const [activeButton, setActiveButton] = useState("Buy");
  const [activeButtonPepe, setActiveButtonPepe] = useState("Buy");

  const [time, setTime] = useState(
    initialHours * 3600 + initialMinutes * 60 + initialSeconds
  );

  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div
      className="w-[100%] h-[100%] mx-auto relative py-[80px] wallet_sec"
      id="wallet"
    >
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col items-center justify-center relative">
        {/* <img className="absolute left-0 z-[1]" src={bg_img_doge} alt="" /> */}
        <div className="flex w-[100%] max-w-[1240px] z-[9999] mx-auto items-center justify-center absolute top-[400px]">
          <div className="w-full  ax-w-[400px] mx-auto">
            {/* Main Progress Bar */}
            <div className="relative z-[99] p-2">
              {/* Background Bar with Glowing Border */}
              <div className="h-[80px]  rounded-[30px] relative overflow-hidden  border-[2px] border-[#E67500]">
                <div
                  className="w-full h-full flex rounded-[28px] relative overflow-hidden"
                  style={{
                    background: "rgba(1, 47, 43, 0.72)",
                  }}
                >
                  {/* Gradient Fill */}
                  <div
                    className="absolute  h-[30px] inset-3 top-[23.5px] left-[170px] right-[170px] rounded-[26px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E67500 0%, #FFFFFF 50%, #00FF2F 100%)",
                    }}
                  ></div>

                  {/* Left End - Doge */}
                  <div className="absolute left-0 top-0 h-full flex items-center pl-4 z-10">
                    <div className="flex items-center space-x-3">
                      <img src={doge_icn} alt="Doge" className="w-8 h-8" />
                      <span className="text-white text-[48px] font-[400] font-anton">
                        18%
                      </span>
                    </div>
                  </div>

                  {/* Right End - Pepe */}
                  <div className="absolute right-0 top-0 h-full flex items-center pr-4 z-10">
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-[48px] font-[400] font-anton">
                        24%
                      </span>
                      <img src={pepe_icn} alt="Pepe" className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full relative">
          <div className="flex flex-col w-[40%] relative z-[99] pt-[500px]  ">
            <div className="wallet_doge_bg absolute top-0 left-[-190px] z-[99]  w-[180%] h-[80%]"></div>
            <div className="absolute top-[-4px] left-0 w-[100%] z-[9] ">
              <h2
                className="text-center !text-[#E67500] !font-[112.5px] !leading-[120%]"
                // style={{
                //   textShadow: "4.556px -0.57px 17.144px #F1AD03",
                //   webkitTextStrokeWidth: "1.09px",
                //   webkitTextStrokeColor: "#000",
                // }}
              >
                TEAM DOGE
              </h2>
            </div>

            {/* <div>
              <div className="flex flex-col space-y-[5px] justify-center ">
                <div className="flex items-center space-x-1">
                  <img src={doge_icn} alt="" />
                  <div className="w-[100%] h-[40px] flex items-center rounded-[24px] pl-[2px] border-[#EFAB00] border-[1px]">
                    <div
                      className="w-[79px] h-[35px] flex items-center justify-center text-[#0B0101] text-[25.125px] font-[Anton] rounded-[43.445px]"
                      style={{
                        background:
                          "linear-gradient(66deg, #FFC676 25.98%, #FFBF00 65.48%)",
                        boxShadow: " 0 8.582px 16.091px 0 #615500",
                      }}
                    >
                      18%
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="px-4 bg-[#040404] z-[99] w-[100%] space-y-[10px] pb-[15px] pt-[15px] rounded-[13px] border border-[#fff]">
              <div className="bg-[rgba(255, 255, 255, 0.10)] flex justify-between rounded-[30px] border border-[rgba(255, 255, 255, 0.20)]">
                {Buybuttons.map((button) => (
                  <div
                    key={button.id}
                    onClick={() => setActiveButton(button.id)}
                    className={`w-[100%] rounded-[30px] space-x-[4px] flex justify-center items-center cursor-pointer ${
                      activeButton === button.id
                        ? "bg-[#E67500] border border-black"
                        : "text-[#000]"
                    }`}
                  >
                    <p
                      className={`text-[18px] font-[Helvetica] font-[700] ${
                        activeButton === button.id
                          ? "text-[#fff]"
                          : "text-[#fff]"
                      }`}
                    >
                      {button.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-[10px]">
                <h3 className="text-[50px] font-[400] font-[Anton] text-center leading-[ 76%] text-[#fff]">
                  180,492.39
                </h3>
              </div>
              <div className=" pb-1 space-y-[10px]">
                <div
                  className="w-[100%] flex  items-center h-[23px] rounded-[30px]   "
                  style={{
                    background: "rgba(255, 255, 255, 0.28)",
                  }}
                >
                  <div className="bg-[#E67500] h-[23px] w-[20%] rounded-[30px]"></div>
                  <span className=" w-[70%] text-center text-[12px] text-[#fff] font-[Helvetica]">
                    Until Presale Round Win
                  </span>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-[16px] font-[Anton] font-[400] text-[#fff]">
                    USD Raised
                  </h4>
                  <h5 className="text-[16px] font-[400] font-[Anton] text-[#fff]">
                    {" "}
                    $1,000,000
                  </h5>
                </div>
              </div>
              <div className="space-y-[15px]">
                <div className="border border-[rgba(255, 255, 255, 0.20)] rounded-[8px] p-2">
                  <h3 className="text-[18px] font-[400] font-[Anton] text-center leading-[150%] text-[#fff]">
                    1 Team Doge = $0.006
                  </h3>
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-2 md:grid-cols-3">
                    {tokenSelect.map((data, index) => (
                      <TokenSelectDropdown
                        key={index}
                        tokens={data}
                        onChange={(token) =>
                          console.log(`Dropdown ${index + 1}:`, token)
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-[rgba(255, 255, 255, 0.10)] border-[1px] border-[rgba(255, 255, 255, 0.20)] px-2 flex relative z-[9] justify-between items-center  py-2 rounded-[8px]">
                  <div className="">
                    <h5 className=" text-[16px] text-[#fff] leading-[16px] font-[400] font-[Anton]">
                      You pay
                    </h5>
                    <input
                      type="text"
                      className=" w-[73px] text-[16px] text-[#fff] font-[Anton] font-[400] bg-[transparent] outline-none"
                      defaultValue={1}
                    />
                  </div>

                  <div className="relative min-w-[136px] w-fit inline-block text-left">
                    <TokenSelectDropdown
                      tokens={tokenSelect[0]}
                      onChange={(token) => console.log("Selected:", token)}
                    />
                  </div>
                </div>
                <div className="bg-[rgba(255, 255, 255, 0.10)] border-[1px] border-[rgba(255, 255, 255, 0.20)] relative z-[1] px-2 flex justify-between items-center  py-2 rounded-[8px] ">
                  <div className="w-[50%]">
                    <h5 className="font-[Anton] text-[#fff] text-[16px] leading-[16px] font-[400]">
                      You receive
                    </h5>
                    <input
                      type="text"
                      className="text-[16px] font-[400] text-[#fff] font-[Anton] bg-[transparent] outline-none"
                      defaultValue={`7,414,420`}
                    />
                  </div>

                  <div className="relative min-w-[136px] w-fit inline-block text-left">
                    <div
                      className="flex items-center justify-start space-x-2 cursor-pointer p-2 rounded-[8px]  w-[100%]"
                      style={{ background: "rgba(255, 255, 255, 0.20)" }}
                    >
                      <img
                        src={dogeicon}
                        className="w-[18px] h-[18px]"
                        alt="Selected Icon"
                      />
                      <h5 className="text-[14px] text-[#fff] font-[Helvetica] leading-[100%] font-[700]">
                        TEAM DOGE
                      </h5>
                    </div>
                  </div>
                </div>
                <div className=" space-y-[5px]">
                  <h5 className="text-[#fff] text-[16px] font-[Helvetica] font-[600] text-center">
                    Accepting
                  </h5>
                  <div className="flex justify-between space-x-1 max-w-[200px] mx-auto">
                    <img src={tokens} className="max-h-[24px]" alt={`tokens`} />
                  </div>
                </div>
                <div className="space-y-[10px]">
                  <div className="flex justify-center">
                    <button className="bg-[#E67500] text-[#000] font-[Anton] py-[10px] max-w-[100%] mx-auto w-[100%] text-[18px] font-[400] rounded-[30px]">
                      Connect Wallet
                    </button>
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <button
                      style={{
                        background: "rgba(255, 255, 255, 0.10)",
                      }}
                      className="flex items-center font-[Helvetica] py-[10px] justify-center text-[#fff] w-[100%] rounded-[4px] text-[10px] font-[400] space-x-1 text-[#fff"
                    >
                      <div className="pr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_3505_1005)">
                            <path
                              d="M8.12969 1.29338C7.12811 0.67527 5.96226 0.376333 4.78683 0.436234C2.65254 0.436234 0.929688 1.20766 0.929688 2.15052C0.929688 2.65623 1.42683 3.11052 2.2154 3.43623"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.2154 8.57896C1.42683 8.25325 0.929688 7.79896 0.929688 7.29325V2.15039"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.2154 6.00788C1.42683 5.68217 0.929688 5.22788 0.929688 4.72217"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.21652 6.42857C10.3465 6.42857 12.0737 5.66143 12.0737 4.71429C12.0737 3.76714 10.3465 3 8.21652 3C6.08652 3 4.35938 3.76714 4.35938 4.71429C4.35938 5.66143 6.08652 6.42857 8.21652 6.42857Z"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4.35938 4.71436V9.85721C4.35938 10.8001 6.07366 11.5715 8.21652 11.5715C10.3594 11.5715 12.0737 10.8001 12.0737 9.85721V4.71436"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.0737 7.28564C12.0737 8.2285 10.3594 8.99993 8.21652 8.99993C6.07366 8.99993 4.35938 8.2285 4.35938 7.28564"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3505_1005">
                              <rect
                                width="12"
                                height="12"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      Apply Bonus
                    </button>
                    <button
                      style={{
                        background: "rgba(255, 255, 255, 0.10)",
                      }}
                      className="flex items-center font-[Helvetica] py-[10px] w-[100%] justify-center text-[#fff] rounded-[4px] text-[10px] font-[400] text-[#fff"
                    >
                      <div className="pl-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                        >
                          <path
                            d="M7.10661 4.89337C6.9492 4.73592 6.76232 4.61101 6.55664 4.52579C6.35095 4.44058 6.1305 4.39672 5.90786 4.39672C5.68522 4.39672 5.46476 4.44058 5.25907 4.52579C5.05339 4.61101 4.86651 4.73592 4.70911 4.89337L2.99661 6.60637C2.67874 6.9243 2.5002 7.35548 2.50024 7.80505C2.50029 8.25462 2.67893 8.68576 2.99686 9.00362C3.31478 9.32149 3.74596 9.50003 4.19553 9.49999C4.6451 9.49994 5.07624 9.3213 5.39411 9.00337L5.55461 8.85137M5.39411 6.60637C5.55151 6.76383 5.73839 6.88873 5.94407 6.97395C6.14976 7.05917 6.37022 7.10303 6.59286 7.10303C6.8155 7.10303 7.03595 7.05917 7.24164 6.97395C7.44732 6.88873 7.6342 6.76383 7.79161 6.60637L9.50361 4.89337C9.82153 4.57551 10.0002 4.14437 10.0002 3.6948C10.0003 3.24523 9.82172 2.81405 9.50386 2.49612C9.18599 2.1782 8.75485 1.99956 8.30528 1.99951C7.85571 1.99946 7.42453 2.17801 7.10661 2.49587L6.59261 2.97637"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      Referral Code
                    </button>
                  </div>
                  <div>
                    <h4 className="text-[15px] pb-2 font-[400] font-[Anton] text-center leading-[150%] text-[#fff]">
                      Max Buy In: $25,000
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <h4 className="text-[13px] font-[Helvetica] font-[700]">
                  Audited by
                </h4>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3505_1026)">
                      <path
                        d="M6.33751 0H18.4746V12.1371C18.4746 13.692 17.8569 15.1833 16.7574 16.2828C15.6579 17.3823 14.1666 18 12.6117 18H0.474609V5.8629C0.474609 4.30796 1.09231 2.81671 2.19181 1.7172C3.29132 0.617697 4.78257 0 6.33751 0Z"
                        fill="url(#paint0_linear_3505_1026)"
                      />
                      <path
                        d="M14.704 7.08342L13.5006 7.63484L12.6558 8.02203L12.6181 8.03898L11.4565 8.56365C11.4565 8.55913 11.4547 8.55461 11.4531 8.55009C11.3846 8.26427 11.2524 7.99762 11.0663 7.77005L10.959 7.5354L12.1179 7.00433L12.9752 6.61148L14.1891 6.05518C14.2564 6.16013 14.3192 6.26748 14.3774 6.37721L14.6946 7.06911L14.704 7.08342Z"
                        fill="white"
                      />
                      <path
                        d="M14.898 10.2623C14.8087 10.6419 14.6793 11.0108 14.5119 11.3629L10.748 10.7203L10.7835 10.5128C11.058 10.2898 11.2664 9.99595 11.3861 9.66309L14.898 10.2623Z"
                        fill="white"
                      />
                      <path
                        d="M8.11732 10.861L6.59679 11.9378L5.50979 12.7077C5.25026 12.4242 5.02113 12.1142 4.82617 11.783L5.90753 11.0169L6.66723 10.4787L7.45291 9.92236L8.11732 10.861Z"
                        fill="white"
                      />
                      <path
                        d="M8.25605 6.13144L7.78599 7.18078L7.09748 6.8723L6.22554 6.48172L4.99805 5.93144C5.22178 5.59963 5.4812 5.29334 5.77168 5.01807L7.11104 5.61807L8.13515 6.07758L8.25605 6.13144Z"
                        fill="white"
                      />
                      <path
                        d="M13.5987 10.0396C13.4148 10.7534 13.0452 11.4059 12.5272 11.9305C12.0093 12.4551 11.3617 12.8331 10.6502 13.0261C9.93873 13.219 9.18883 13.22 8.47683 13.029C7.76483 12.838 7.11614 12.4618 6.59679 11.9386C6.32582 11.6649 6.09389 11.3551 5.90753 11.0181L4.82617 11.7842C5.38114 12.73 6.20673 13.4878 7.19646 13.9599C8.1862 14.432 9.29468 14.5968 10.379 14.4331C11.4632 14.2693 12.4736 13.7844 13.2797 13.041C14.0858 12.2975 14.6507 11.3297 14.9015 10.2621L13.5987 10.0396Z"
                        fill="white"
                      />
                      <path
                        d="M7.10878 5.61784C7.63639 5.23758 8.24555 4.98584 8.88768 4.88271C9.52981 4.77957 10.1872 4.82789 10.8073 5.0238C11.4275 5.21971 11.9933 5.5578 12.4596 6.01112C12.926 6.46443 13.2799 7.02043 13.4933 7.63478L14.6967 7.08337C14.6945 7.07772 14.6926 7.07207 14.6903 7.0668L14.3732 6.3749C14.3137 6.26542 14.2509 6.15807 14.1849 6.05286C13.6952 5.28414 13.022 4.64932 12.2258 4.20562C11.4297 3.76193 10.5357 3.52329 9.62431 3.51122C8.71296 3.49916 7.81292 3.71403 7.00531 4.13649C6.1977 4.55895 5.50789 5.17571 4.99805 5.93121L6.22554 6.48149C6.47546 6.15136 6.77314 5.86029 7.10878 5.61784Z"
                        fill="white"
                      />
                      <path
                        d="M5.46408 8.20254C5.5101 7.9659 5.57639 7.73366 5.66219 7.50838L4.45692 6.96826C3.98253 8.16336 3.94122 9.48677 4.34016 10.7091L5.48366 9.89934C5.3607 9.34108 5.35403 8.76348 5.46408 8.20254Z"
                        fill="white"
                      />
                      <path
                        d="M13.4397 7.47363L12.6099 7.89058L12.5738 7.90904L11.4355 8.48041"
                        fill="white"
                      />
                      <path
                        d="M7.39999 9.95175L6.66515 10.4723C6.47914 10.1081 6.3641 9.71184 6.32617 9.30467L6.73596 9.01465L7.39999 9.95175Z"
                        fill="white"
                      />
                      <path
                        d="M7.94993 7.27391L7.47987 8.32325L6.50586 7.88559C6.63833 7.52017 6.83586 7.18176 7.08891 6.88672L7.94993 7.27391Z"
                        fill="white"
                      />
                      <path
                        d="M12.6842 9.8841C12.5067 10.5121 12.1442 11.0721 11.6439 11.491C11.1436 11.91 10.5286 12.1685 9.87925 12.2329C9.22985 12.2973 8.57612 12.1646 8.00326 11.852C7.43039 11.5395 6.96496 11.0616 6.66763 10.4807C6.66588 10.4783 6.66449 10.4756 6.66349 10.4728C6.37227 9.90013 6.25738 9.25396 6.33334 8.616C6.40929 7.97804 6.67269 7.37691 7.09023 6.88862L7.10417 6.8728C7.48276 6.4365 7.97081 6.10901 8.51805 5.92404C9.0653 5.73907 9.65195 5.70331 10.2176 5.82044C10.7833 5.93758 11.3075 6.20338 11.7363 6.59047C12.165 6.97755 12.4829 7.47194 12.6571 8.02271L12.6194 8.03928L11.4578 8.56358C11.4578 8.55906 11.456 8.55454 11.4544 8.55002C11.3462 8.09445 11.0775 7.69306 10.6977 7.41923C10.3178 7.14539 9.85214 7.0174 9.3857 7.05863C8.91926 7.09986 8.48323 7.30758 8.15731 7.6438C7.8314 7.98003 7.63736 8.42231 7.61067 8.88981C7.58398 9.35731 7.72641 9.81881 8.01194 10.1899C8.29747 10.5611 8.70702 10.8171 9.16574 10.9111C9.62446 11.0052 10.1017 10.931 10.5103 10.7022C10.9188 10.4734 11.2314 10.1052 11.3908 9.66489L12.6842 9.8841Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_3505_1026"
                        x1="0.762368"
                        y1="0.448965"
                        x2="27.1096"
                        y2="26.3085"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3B916F" />
                        <stop offset="1" stop-color="#096AA5" />
                      </linearGradient>
                      <clipPath id="clip0_3505_1026">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0.474609)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3 className="pl-1 text-[12px] font-[Inter] font-[600]">
                    Coinsult
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[20%] h-auto items-start justify-center">
            <div className="p-[1.5px] rounded-xl h-auto gradient-bg inline-block mt-[500px]">
              <div className="bg-[#063b3b] rounded-xl px-6 py-4 text-center">
                <p className="text-sm font-bold tracking-widest text-white">
                  TIME LEFT:
                </p>
                <h2 className="font-mono text-4xl font-bold text-white">
                  {formatTime(time)}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex wallet_pepe_bg w-[40%] relative z-[99] pt-[500px] flex-col  ">
            <div className="wallet_pepe_bg absolute z-[99] top-[10px] left-[-190px] w-[180%] h-[80%]"></div>
            <div className="absolute top-[-10px]  left-0 w-[100%] ">
              <h2
                className="text-center !text-[#00FF2F] !font-[112.5px] !leading-[120%]"
                // style={{
                //   textShadow: "6.534px -0.817px 24.583px #74FF60",
                //   webkitTextStrokeWidth: "1.09px",
                //   webkitTextStrokeColor: "#000",
                // }}
              >
                TEAM PEPE
              </h2>
            </div>
            {/* <div>
              <div className="flex flex-col space-y-[5px] justify-center ">
                <div className="flex items-center space-x-1">
                  <img src={pepe_icn} alt="" />
                  <div className="w-[100%] h-[40px] flex items-center rounded-[24px] pl-[2px] border-[#0AFC3D] border-[1px]">
                    <div
                      className="w-[79px] h-[35px] flex items-center justify-center text-[#0B0101] text-[25.125px] font-[Anton] rounded-[43.445px]"
                      style={{
                        background:
                          "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
                        boxShadow: " 0 8.582px 16.091px 0 #615500",
                      }}
                    >
                      24%
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="px-4 bg-[#040404] z-[99] w-[100%] space-y-[10px] pb-[15px] pt-[15px] rounded-[13px] border border-[#fff]">
              <div className="bg-[rgba(255, 255, 255, 0.10)] flex justify-between rounded-[30px] border border-[rgba(255, 255, 255, 0.20)]">
                {Buybuttons.map((button) => (
                  <div
                    key={button.id}
                    onClick={() => setActiveButtonPepe(button.id)}
                    className={`w-[100%] rounded-[30px] space-x-[4px] flex justify-center items-center cursor-pointer ${
                      activeButtonPepe === button.id
                        ? "bg-[#00FF2F] "
                        : "text-[#000]"
                    }`}
                  >
                    {/* <img
                    src={button.img}
                    className="h-[18px]"
                    alt={button.label}
                  /> */}
                    <p
                      className={`text-[18px] font-[Helvetica] font-[700] ${
                        activeButtonPepe === button.id
                          ? "text-[#fff]"
                          : "text-[#fff]"
                      }`}
                    >
                      {button.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-[8px]">
                <h3 className="text-[50px] font-[400] font-[Anton] text-center leading-[ 76%] text-[#fff]">
                  240,492.39
                </h3>
              </div>
              <div className=" pb-1 space-y-[10px]">
                <div
                  className="w-[100%] flex  items-center h-[23px] rounded-[30px]   "
                  style={{
                    background: "rgba(255, 255, 255, 0.20)",
                  }}
                >
                  <div className="bg-[#00FF2F] h-[23px] w-[20%] rounded-[30px]"></div>
                  <span className=" w-[70%] text-[#fff] text-center text-[12px] font-[Helvetica]">
                    Until Presale Round Win
                  </span>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-[16px] font-[Anton] font-[400] text-[#fff]">
                    USD Raised
                  </h4>
                  <h5 className="text-[16px] font-[400] font-[Anton] text-[#fff]">
                    {" "}
                    $1,000,000
                  </h5>
                </div>
              </div>
              <div className="space-y-[15px]">
                <div className="border border-[rgba(255, 255, 255, 0.20)] rounded-[8px] p-2">
                  <h3 className="text-[18px] font-[400] font-[Anton] text-center leading-[150%] text-[fff]">
                    1 Team Pepe = $0.006
                  </h3>
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-2 md:grid-cols-3">
                    {tokenSelect.map((data, index) => (
                      <TokenSelectDropdown
                        key={index}
                        tokens={data}
                        onChange={(token) =>
                          console.log(`Dropdown ${index + 1}:`, token)
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-[rgba(255, 255, 255, 0.10)] border-[1px] border-[#fff] px-2 flex relative z-[9] justify-between items-center  py-2 rounded-[8px]">
                  <div className="">
                    <h5 className=" text-[16px] text-[#fff] leading-[16px] font-[400] font-[Anton]">
                      You pay
                    </h5>
                    <input
                      type="text"
                      className=" w-[73px] text-[16px] text-[#fff] font-[Anton] font-[400] bg-[transparent] outline-none"
                      defaultValue={1}
                    />
                  </div>

                  <div className="relative min-w-[136px]">
                    <TokenSelectDropdown
                      tokens={tokenSelect[0]}
                      onChange={(token) => console.log("Selected:", token)}
                    />
                  </div>
                </div>
                <div className="bg-[rgba(255, 255, 255, 0.10)] border-[1px] border-[rgba(255, 255, 255, 0.20)] relative z-[1] px-2 flex justify-between items-center  py-2 rounded-[8px] ">
                  <div className="w-[50%]">
                    <h5 className="font-[Anton] text-[16px] text-[#fff] leading-[16px] font-[400]">
                      You receive
                    </h5>
                    <input
                      type="text"
                      className="text-[16px] font-[400] text-[#fff] font-[Anton] bg-[transparent] outline-none"
                      defaultValue={`7,414,420`}
                    />
                  </div>

                  <div className="relative min-w-[136px] w-fit inline-block text-left">
                    <div
                      className="flex items-center justify-start space-x-2 border border-[rgba(255, 255, 255, 0.20)] cursor-pointer p-2 rounded-[8px]  w-[100%]"
                      style={{ background: "rgba(255, 255, 255, 0.10)" }}
                    >
                      <img
                        src={pepeicon}
                        className="w-[18px] h-[18px]"
                        alt="Selected Icon"
                      />
                      <h5 className="text-[14px] text-[#fff] font-[Helvetica] leading-[100%] font-[700]">
                        TEAM PEPE
                      </h5>
                    </div>
                  </div>
                </div>
                <div className=" space-y-[5px]">
                  <h5 className="text-[#fff] text-[16px] font-[Helvetica] font-[600] text-center">
                    Accepting
                  </h5>
                  <div className="flex justify-between text-[#fff] space-x-1 max-w-[200px] mx-auto">
                    <img src={tokens} className="max-h-[24px]" alt={`tokens`} />
                  </div>
                </div>
                <div className="space-y-[10px]">
                  <div className="flex justify-center">
                    <button className="bg-[#00FF2F] text-[#000] font-[Anton] py-[10px] max-w-[100%] mx-auto w-[100%] text-[18px] font-[400] rounded-[30px]">
                      Connect Wallet
                    </button>
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <button
                      style={{
                        background: "rgba(18, 70, 0, 0.60)",
                      }}
                      className="flex items-center font-[Helvetica] py-[10px] justify-center text-[#fff] w-[100%] rounded-[4px] text-[10px] font-[400] space-x-1 text-[#fff"
                    >
                      <div className="pr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_3505_1005)">
                            <path
                              d="M8.12969 1.29338C7.12811 0.67527 5.96226 0.376333 4.78683 0.436234C2.65254 0.436234 0.929688 1.20766 0.929688 2.15052C0.929688 2.65623 1.42683 3.11052 2.2154 3.43623"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.2154 8.57896C1.42683 8.25325 0.929688 7.79896 0.929688 7.29325V2.15039"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.2154 6.00788C1.42683 5.68217 0.929688 5.22788 0.929688 4.72217"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.21652 6.42857C10.3465 6.42857 12.0737 5.66143 12.0737 4.71429C12.0737 3.76714 10.3465 3 8.21652 3C6.08652 3 4.35938 3.76714 4.35938 4.71429C4.35938 5.66143 6.08652 6.42857 8.21652 6.42857Z"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4.35938 4.71436V9.85721C4.35938 10.8001 6.07366 11.5715 8.21652 11.5715C10.3594 11.5715 12.0737 10.8001 12.0737 9.85721V4.71436"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.0737 7.28564C12.0737 8.2285 10.3594 8.99993 8.21652 8.99993C6.07366 8.99993 4.35938 8.2285 4.35938 7.28564"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3505_1005">
                              <rect
                                width="12"
                                height="12"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      Apply Bonus
                    </button>
                    <button
                      style={{
                        background: "rgba(18, 70, 0, 0.60)",
                      }}
                      className="flex items-center font-[Helvetica] py-[10px] w-[100%] justify-center text-[#fff] rounded-[4px] text-[10px] font-[400] text-[#fff"
                    >
                      <div className="pl-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                        >
                          <path
                            d="M7.10661 4.89337C6.9492 4.73592 6.76232 4.61101 6.55664 4.52579C6.35095 4.44058 6.1305 4.39672 5.90786 4.39672C5.68522 4.39672 5.46476 4.44058 5.25907 4.52579C5.05339 4.61101 4.86651 4.73592 4.70911 4.89337L2.99661 6.60637C2.67874 6.9243 2.5002 7.35548 2.50024 7.80505C2.50029 8.25462 2.67893 8.68576 2.99686 9.00362C3.31478 9.32149 3.74596 9.50003 4.19553 9.49999C4.6451 9.49994 5.07624 9.3213 5.39411 9.00337L5.55461 8.85137M5.39411 6.60637C5.55151 6.76383 5.73839 6.88873 5.94407 6.97395C6.14976 7.05917 6.37022 7.10303 6.59286 7.10303C6.8155 7.10303 7.03595 7.05917 7.24164 6.97395C7.44732 6.88873 7.6342 6.76383 7.79161 6.60637L9.50361 4.89337C9.82153 4.57551 10.0002 4.14437 10.0002 3.6948C10.0003 3.24523 9.82172 2.81405 9.50386 2.49612C9.18599 2.1782 8.75485 1.99956 8.30528 1.99951C7.85571 1.99946 7.42453 2.17801 7.10661 2.49587L6.59261 2.97637"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      Referral Code
                    </button>
                  </div>
                  <div>
                    <h4 className="text-[15px] pb-2 font-[400] font-[Anton] text-center leading-[150%] text-[#fff]">
                      Max Buy In: $25,000
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <h4 className="text-[13px] font-[Helvetica] font-[700]">
                  Audited by
                </h4>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3505_1026)">
                      <path
                        d="M6.33751 0H18.4746V12.1371C18.4746 13.692 17.8569 15.1833 16.7574 16.2828C15.6579 17.3823 14.1666 18 12.6117 18H0.474609V5.8629C0.474609 4.30796 1.09231 2.81671 2.19181 1.7172C3.29132 0.617697 4.78257 0 6.33751 0Z"
                        fill="url(#paint0_linear_3505_1026)"
                      />
                      <path
                        d="M14.704 7.08342L13.5006 7.63484L12.6558 8.02203L12.6181 8.03898L11.4565 8.56365C11.4565 8.55913 11.4547 8.55461 11.4531 8.55009C11.3846 8.26427 11.2524 7.99762 11.0663 7.77005L10.959 7.5354L12.1179 7.00433L12.9752 6.61148L14.1891 6.05518C14.2564 6.16013 14.3192 6.26748 14.3774 6.37721L14.6946 7.06911L14.704 7.08342Z"
                        fill="white"
                      />
                      <path
                        d="M14.898 10.2623C14.8087 10.6419 14.6793 11.0108 14.5119 11.3629L10.748 10.7203L10.7835 10.5128C11.058 10.2898 11.2664 9.99595 11.3861 9.66309L14.898 10.2623Z"
                        fill="white"
                      />
                      <path
                        d="M8.11732 10.861L6.59679 11.9378L5.50979 12.7077C5.25026 12.4242 5.02113 12.1142 4.82617 11.783L5.90753 11.0169L6.66723 10.4787L7.45291 9.92236L8.11732 10.861Z"
                        fill="white"
                      />
                      <path
                        d="M8.25605 6.13144L7.78599 7.18078L7.09748 6.8723L6.22554 6.48172L4.99805 5.93144C5.22178 5.59963 5.4812 5.29334 5.77168 5.01807L7.11104 5.61807L8.13515 6.07758L8.25605 6.13144Z"
                        fill="white"
                      />
                      <path
                        d="M13.5987 10.0396C13.4148 10.7534 13.0452 11.4059 12.5272 11.9305C12.0093 12.4551 11.3617 12.8331 10.6502 13.0261C9.93873 13.219 9.18883 13.22 8.47683 13.029C7.76483 12.838 7.11614 12.4618 6.59679 11.9386C6.32582 11.6649 6.09389 11.3551 5.90753 11.0181L4.82617 11.7842C5.38114 12.73 6.20673 13.4878 7.19646 13.9599C8.1862 14.432 9.29468 14.5968 10.379 14.4331C11.4632 14.2693 12.4736 13.7844 13.2797 13.041C14.0858 12.2975 14.6507 11.3297 14.9015 10.2621L13.5987 10.0396Z"
                        fill="white"
                      />
                      <path
                        d="M7.10878 5.61784C7.63639 5.23758 8.24555 4.98584 8.88768 4.88271C9.52981 4.77957 10.1872 4.82789 10.8073 5.0238C11.4275 5.21971 11.9933 5.5578 12.4596 6.01112C12.926 6.46443 13.2799 7.02043 13.4933 7.63478L14.6967 7.08337C14.6945 7.07772 14.6926 7.07207 14.6903 7.0668L14.3732 6.3749C14.3137 6.26542 14.2509 6.15807 14.1849 6.05286C13.6952 5.28414 13.022 4.64932 12.2258 4.20562C11.4297 3.76193 10.5357 3.52329 9.62431 3.51122C8.71296 3.49916 7.81292 3.71403 7.00531 4.13649C6.1977 4.55895 5.50789 5.17571 4.99805 5.93121L6.22554 6.48149C6.47546 6.15136 6.77314 5.86029 7.10878 5.61784Z"
                        fill="white"
                      />
                      <path
                        d="M5.46408 8.20254C5.5101 7.9659 5.57639 7.73366 5.66219 7.50838L4.45692 6.96826C3.98253 8.16336 3.94122 9.48677 4.34016 10.7091L5.48366 9.89934C5.3607 9.34108 5.35403 8.76348 5.46408 8.20254Z"
                        fill="white"
                      />
                      <path
                        d="M13.4397 7.47363L12.6099 7.89058L12.5738 7.90904L11.4355 8.48041"
                        fill="white"
                      />
                      <path
                        d="M7.39999 9.95175L6.66515 10.4723C6.47914 10.1081 6.3641 9.71184 6.32617 9.30467L6.73596 9.01465L7.39999 9.95175Z"
                        fill="white"
                      />
                      <path
                        d="M7.94993 7.27391L7.47987 8.32325L6.50586 7.88559C6.63833 7.52017 6.83586 7.18176 7.08891 6.88672L7.94993 7.27391Z"
                        fill="white"
                      />
                      <path
                        d="M12.6842 9.8841C12.5067 10.5121 12.1442 11.0721 11.6439 11.491C11.1436 11.91 10.5286 12.1685 9.87925 12.2329C9.22985 12.2973 8.57612 12.1646 8.00326 11.852C7.43039 11.5395 6.96496 11.0616 6.66763 10.4807C6.66588 10.4783 6.66449 10.4756 6.66349 10.4728C6.37227 9.90013 6.25738 9.25396 6.33334 8.616C6.40929 7.97804 6.67269 7.37691 7.09023 6.88862L7.10417 6.8728C7.48276 6.4365 7.97081 6.10901 8.51805 5.92404C9.0653 5.73907 9.65195 5.70331 10.2176 5.82044C10.7833 5.93758 11.3075 6.20338 11.7363 6.59047C12.165 6.97755 12.4829 7.47194 12.6571 8.02271L12.6194 8.03928L11.4578 8.56358C11.4578 8.55906 11.456 8.55454 11.4544 8.55002C11.3462 8.09445 11.0775 7.69306 10.6977 7.41923C10.3178 7.14539 9.85214 7.0174 9.3857 7.05863C8.91926 7.09986 8.48323 7.30758 8.15731 7.6438C7.8314 7.98003 7.63736 8.42231 7.61067 8.88981C7.58398 9.35731 7.72641 9.81881 8.01194 10.1899C8.29747 10.5611 8.70702 10.8171 9.16574 10.9111C9.62446 11.0052 10.1017 10.931 10.5103 10.7022C10.9188 10.4734 11.2314 10.1052 11.3908 9.66489L12.6842 9.8841Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_3505_1026"
                        x1="0.762368"
                        y1="0.448965"
                        x2="27.1096"
                        y2="26.3085"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3B916F" />
                        <stop offset="1" stop-color="#096AA5" />
                      </linearGradient>
                      <clipPath id="clip0_3505_1026">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0.474609)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3 className="pl-1 text-[12px] font-[Inter] font-[600]">
                    Coinsult
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* <img className="absolute right-0 z-[1]" src={bg_img_pepe} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default HeroWalletSec;
