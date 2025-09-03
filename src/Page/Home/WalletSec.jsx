// import React, { useState } from "react";
// import arwbtn1 from "../../assets/walletsec/btnicns (3).svg";
// import arwbtn2 from "../../assets/walletsec/btnicns (1).svg";
// import arwbtn3 from "../../assets/walletsec/btnicns (2).svg";
// import coinsw1 from "../../assets/walletsec/coinsw (5).svg";
// import coinsw2 from "../../assets/walletsec/coinsw (2).svg";
// import coinsw3 from "../../assets/walletsec/coinsw (3).svg";
// import coinsw4 from "../../assets/walletsec/coinsw (1).svg";
// import coinsw5 from "../../assets/walletsec/coinsw (6).svg";
// import coinsw6 from "../../assets/walletsec/coinsw (4).svg";
// import ggicon from "../../assets/walletsec/gg.svg";
// import shodow from "../../assets/shodow.svg";
// import downShodow from "../../assets/Mobile/down-shodwo.svg";
// import arw from "../../assets/walletsec/arw.svg";
// import downArrow from "../../assets/herosec/down-arrow.svg";
// import Widget from "../../component/Widget/Widget";
// import coinsultIcon from "../../assets/walletsec/coinsult.webp";
// import solidIcon from "../../assets/walletsec/solid-proof.webp";

// const Buybuttons = [
//   { id: "Buy", label: "Buy", img: arwbtn1 },
//   { id: "Stake", label: "Stake", img: arwbtn2 },
//   { id: "History", label: "History", img: arwbtn3 },
// ];

// const options = [
//   {
//     img: coinsw2,
//     text: "ETH (ERC-20)",
//   },
//   {
//     img: coinsw1,
//     text: "Option 2",
//   },
//   {
//     img: coinsw3,
//     text: "Option 3",
//   },
//   {
//     img: coinsw4,
//     text: "Option 4",
//   },
//   {
//     img: coinsw5,
//     text: "Option 5",
//   },
//   {
//     img: coinsw6,
//     text: "Option 5",
//   },
// ];
// const iconsData = [
//   {
//     img: coinsw1,
//   },
//   {
//     img: coinsw2,
//   },
//   {
//     img: coinsw3,
//   },
//   {
//     img: coinsw4,
//   },
//   {
//     img: coinsw5,
//   },
//   {
//     img: coinsw6,
//   },
// ];

// function WalletSec() {
//   const [selectedItem, setSelectedItem] = useState(options[0]);
//   const [selectedItempepe, setSelectedItempepe] = useState(options[0]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isDropdownOpenpepe, setIsDropdownOpenpepe] = useState(false);
//   const [activeButton, setActiveButton] = useState("Buy");
//   const [activeButtonpepe, setActiveButtonpepe] = useState("Buy");

//   const handleSelect = (option) => {
//     setSelectedItem(option);
//     setIsDropdownOpen(false);
//   };
//   const handleSelectpepe = (option) => {
//     setSelectedItempepe(option);
//     setIsDropdownOpenpepe(false);
//   };

//   const handleScroll = (event, targetId, offset) => {
//     event.preventDefault();
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       const elementPosition = targetElement.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY - offset;
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div
//       className="relative w-[100%] h-[810px] bgwltsec pt-[107px] pb-[128px] "
//       id="how-to-buy"
//     >
//       <div className="h-[100%] hidden bg-[#000000cf] flex justify-center items-center z-[-1] absolute w-[100%] top-0 ">
//         <div className="max-w-[700px] mx-auto space-y-[5px]">
//           <h3
//             className="text-[#FFFCFC] text-[61.623px] text-center font-[400] uppercase font-HiJack"
//             style={{
//               textShadow: "0px 0px 32.291px #000, 0px 0px 17.871px #000",
//             }}
//           >
//             The Fight Starts In
//           </h3>
//           <div className="flex items-center justify-center space-x-5">
//             <div
//               className="relative z-[80] rounded-[26.089px] border border-[#fff] w-[160.97px] h-[160.97px] flex flex-col justify-center items-center"
//               style={{
//                 background: "rgb(0 0 0 / 53%)",
//               }}
//             >
//               <h3 className="text-[#FFF] text-[76.413px] font-[600] leading-[100%]">
//                 16
//               </h3>
//               <p className="text-[27.553px] font-[700] text-[#FFF]">Days</p>
//             </div>
//             <span className="text-[#FFF] text-[85.755px] font-[700] leading-[100%]">
//               :
//             </span>
//             <div
//               className="relative z-[80] rounded-[26.089px] border border-[#fff] w-[160.97px] h-[160.97px] flex flex-col justify-center items-center"
//               style={{
//                 background: "rgb(0 0 0 / 53%)",
//               }}
//             >
//               <h3 className="text-[#FFF] text-[76.413px] font-[600] leading-[100%]">
//                 02
//               </h3>
//               <p className="text-[27.553px] font-[700] text-[#FFF]">Hours</p>
//             </div>
//             <span className="text-[#FFF] text-[85.755px] font-[700] leading-[100%]">
//               :
//             </span>
//             <div
//               className="relative z-[80] rounded-[26.089px] border border-[#fff] w-[160.97px] h-[160.97px] flex flex-col justify-center items-center"
//               style={{
//                 background: "rgb(0 0 0 / 53%)",
//               }}
//             >
//               <h3 className="text-[#FFF] text-[76.413px] font-[600] leading-[100%]">
//                 55
//               </h3>
//               <p className="text-[27.553px] font-[700] text-[#FFF]">Sec</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <img
//         src={shodow}
//         alt="shodow"
//         className="absolute top-0 z-[1] left-0 right-0 w-full"
//       />
//       <img
//         src={downShodow}
//         alt="shodow"
//         className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
//       />
//       <div className="max-w-[922px] w-[100%] mx-auto relative z-[9]">
//         {/* <div className="flex justify-between">
//           <div className="min-h-[596.83px] max-w-[404.01px] bg-[#F2B60F] w-[100%] space-y-[14px]  px-[16px] pb-[26px] pt-[24px] rounded-[24px] border border-[#fff]">
//             <div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
//               {Buybuttons.map((button) => (
//                 <div
//                   key={button.id}
//                   onClick={() => setActiveButton(button.id)}
//                   className={`w-[104.8px] rounded-[30px] py-[2px] space-x-2 flex justify-center items-center cursor-pointer ${
//                     activeButton === button.id
//                       ? "bg-[#EFAB00] border border-black"
//                       : "text-[#000]"
//                   }`}
//                 >
//                   <img src={button.img} alt={button.label} />
//                   <p
//                     className={`text-[18.364px] font-[700] ${
//                       activeButton === button.id ? "text-[#000]" : "text-[#000]"
//                     }`}
//                   >
//                     {button.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="space-y-[8px]">
//               <h3 className="text-[38.258px] font-[700] text-center leading-[88%] text-[#00]">
//                 Buy $DOGE
//               </h3>
//               <h5 className="text-[#000] leading-[133.333%] text-[18.364px] font-[700] text-center">
//                 1 GG = $0.0005
//               </h5>
//             </div>
//             <div className=" pb-2 space-y-[8px]">
//               <div className="bg-[#FFFFFF47] w-[100%] h-[16px] rounded-[30px]">
//                 <div className="bg-[#000] h-[16px] w-[60%] rounded-[30px]"></div>
//               </div>
//               <div className="flex justify-between">
//                 <h4 className="text-[18.364px] font-[600] text-[#000]">
//                   USD Raised
//                 </h4>
//                 <h5 className="text-[18.364px] font-[600] text-[#000]">
//                   $252,523 / $1,000,000
//                 </h5>
//               </div>
//             </div>
//             <div className="bg-[#00000078] px-5 flex relative z-[9] justify-between items-center  py-3 rounded-[14px]">
//               <div className="">
//                 <h5 className="text-[#fff] text-[15.303px] font-[600]">
//                   You pay
//                 </h5>
//                 <input
//                   type="text"
//                   className="text-[#fff] w-[155px] text-[18.364px] font-[700] bg-[transparent] outline-none"
//                   defaultValue={1}
//                 />
//               </div>

//               <div className="relative max-w-[205px] w-[100%] inline-block text-left">
//                 <div
//                   className="flex items-center justify-between space-x-2 cursor-pointer  p-2 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A]"
//                   onClick={() => setIsDropdownOpen((prev) => !prev)}
//                 >
//                   <div className="flex items-center space-x-2">
//                     <img
//                       src={selectedItem.img}
//                       className="w-[20px] h-[20px]"
//                       alt="Selected Icon"
//                     />
//                     <h5 className="text-[15.303px] text-[#fff] leading-[80%] font-[400]">
//                       {selectedItem.text}
//                     </h5>
//                   </div>
//                   <img
//                     src={arw}
//                     className="w-[12px] h-[12px]"
//                     alt="Arrow Icon"
//                   />
//                 </div>

//                 {isDropdownOpen && (
//                   <div className="absolute mt-2 w-full bg-[#191F1F] rounded-md shadow-lg">
//                     {options.map((option, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center px-2 py-2 space-x-2 cursor-pointer hover:bg-gray-800"
//                         onClick={() => handleSelect(option)}
//                       >
//                         <img
//                           src={option.img}
//                           className="w-[20px] h-[20px]"
//                           alt={`Option ${index + 1}`}
//                         />
//                         <h5 className="text-[12.8px] text-[#fff] font-[400]">
//                           {option.text}
//                         </h5>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="bg-[#00000078] relative z-[1] px-5 flex justify-between items-center  py-3 rounded-[14px]">
//               <div className="w-[55%]">
//                 <h5 className="text-[#fff] text-[15.303px]  font-[600]">
//                   You receive
//                 </h5>
//                 <input
//                   type="text"
//                   className="text-[#fff] text-[18.364px] font-[700] bg-[transparent] outline-none"
//                   defaultValue={`7,414,420`}
//                 />
//               </div>

//               <div className="relative max-w-[203px] w-[100%] inline-block text-left">
//                 <div className="flex items-center justify-center space-x-2 cursor-pointer  p-2 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A] w-[100%]">
//                   <img
//                     src={ggicon}
//                     className="w-[25px] h-[25px]"
//                     alt="Selected Icon"
//                   />
//                   <h5 className="text-[15.303px] text-[#fff] font-[600]">
//                     GG (ERC-20)
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="pb-[10px] space-y-[10px]">
//               <h5 className="text-[#000] text-[18.364px] font-[700] text-center">
//                 Accepting
//               </h5>
//               <div className="flex justify-center space-x-6">
//                 {iconsData.map((item) => (
//                   <img
//                     key={item.id}
//                     src={item.img}
//                     className="h-[29px] w-[29px]"
//                     alt={`Icon`}
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="">
//               <button className="bg-[#000] text-[#FFF] w-[100%] h-[41.319px] text-[21.425px] font-[700] rounded-[50px] transition-all duration-300 hover:bg-[#0184E2] hover:text-[#FFFFFF] hover:opacity-90 cursor-pointer">
//                 Connect Wallet
//               </button>
//             </div>

//             <div className="flex items-center justify-center ">
//               <p className="text-[15px] font-normal text-black font-k2d capitalize leading-normal">
//                 Max Buy-in $25,000
//               </p>
//             </div>
//           </div>
//           <div
//             className="min-h-[596.83px] max-w-[404.01px]  w-[100%] space-y-[14px]  px-[16px] pb-[26px] pt-[24px] rounded-[24px] border border-[#fff]"
//             style={{
//               background:
//                 "linear-gradient(180deg, #4EB52A 64.5%, #4EB52A 100%)",
//             }}
//           >
//             <div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
//               {Buybuttons.map((button) => (
//                 <div
//                   key={button.id}
//                   onClick={() => setActiveButtonpepe(button.id)}
//                   className={`w-[104.8px] rounded-[30px] py-[2px] space-x-2 flex justify-center items-center cursor-pointer ${
//                     activeButtonpepe === button.id
//                       ? "bg-[#4EB52A] border border-black"
//                       : "text-[#000]"
//                   }`}
//                 >
//                   <img src={button.img} alt={button.label} />
//                   <p
//                     className={`text-[18.364px] font-[700] ${
//                       activeButtonpepe === button.id
//                         ? "text-[#000]"
//                         : "text-[#000]"
//                     }`}
//                   >
//                     {button.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="space-y-[8px]">
//               <h3 className="text-[38.258px] font-[700] text-center leading-[88%] text-[#00]">
//                 Buy $PEPE
//               </h3>
//               <h5 className="text-[#000] leading-[133.333%] text-[18.364px] font-[700] text-center">
//                 1 GG = $0.0005
//               </h5>
//             </div>
//             <div className="pb-2 space-y-[8px]">
//               <div className="bg-[#FFFFFF47] w-[100%] h-[16px] rounded-[30px]">
//                 <div className="bg-[#000] h-[16px] w-[60%] rounded-[30px]"></div>
//               </div>
//               <div className="flex justify-between">
//                 <h4 className="text-[18.364px] font-[600] text-[#000]">
//                   USD Raised
//                 </h4>
//                 <h5 className="text-[18.364px] font-[600] text-[#000]">
//                   $252,523 / $1,000,000
//                 </h5>
//               </div>
//             </div>
//             <div className="bg-[#00000078] px-5 flex relative z-[9] justify-between items-center  py-3 rounded-[14px]">
//               <div className="">
//                 <h5 className="text-[#fff] text-[15.303px] font-[600]">
//                   You pay
//                 </h5>
//                 <input
//                   type="text"
//                   className="text-[#fff] w-[155px] text-[18.364px] font-[700] bg-[transparent] outline-none"
//                   defaultValue={1}
//                 />
//               </div>

//               <div className="relative max-w-[205px] w-[100%] inline-block text-left">
//                 <div
//                   className="flex items-center justify-between space-x-2 cursor-pointer  p-2 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A]"
//                   onClick={() => setIsDropdownOpenpepe((prev) => !prev)}
//                 >
//                   <div className="flex items-center space-x-2">
//                     <img
//                       src={selectedItempepe.img}
//                       className="w-[20px] h-[20px]"
//                       alt="Selected Icon"
//                     />
//                     <h5 className="text-[15.303px] text-[#fff] leading-[80%] font-[400]">
//                       {selectedItempepe.text}
//                     </h5>
//                   </div>
//                   <img
//                     src={arw}
//                     className="w-[12px] h-[12px]"
//                     alt="Arrow Icon"
//                   />
//                 </div>

//                 {isDropdownOpenpepe && (
//                   <div className="absolute mt-2 w-full bg-[#191F1F] rounded-md shadow-lg">
//                     {options.map((option, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center px-2 py-2 space-x-2 cursor-pointer hover:bg-gray-800"
//                         onClick={() => handleSelectpepe(option)}
//                       >
//                         <img
//                           src={option.img}
//                           className="w-[20px] h-[20px]"
//                           alt={`Option ${index + 1}`}
//                         />
//                         <h5 className="text-[12.8px] text-[#fff] font-[400]">
//                           {option.text}
//                         </h5>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="bg-[#00000078] relative z-[1] px-5 flex justify-between items-center  py-3 rounded-[14px]">
//               <div className="w-[55%]">
//                 <h5 className="text-[#fff] text-[15.303px]  font-[600]">
//                   You receive
//                 </h5>
//                 <input
//                   type="text"
//                   className="text-[#fff] text-[18.364px] font-[700] bg-[transparent] outline-none"
//                   defaultValue={`7,414,420`}
//                 />
//               </div>

//               <div className="relative max-w-[203px] w-[100%] inline-block text-left">
//                 <div className="flex items-center justify-center space-x-2 cursor-pointer  p-2 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A] w-[100%]">
//                   <img
//                     src={ggicon}
//                     className="w-[25px] h-[25px]"
//                     alt="Selected Icon"
//                   />
//                   <h5 className="text-[15.303px] text-[#fff] font-[600]">
//                     GG (ERC-20)
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="pb-[10px] space-y-[10px]">
//               <h5 className="text-[#000] text-[18.364px] font-[700] text-center">
//                 Accepting
//               </h5>
//               <div className="flex justify-center space-x-6">
//                 {iconsData.map((item) => (
//                   <img
//                     key={item.id}
//                     src={item.img}
//                     className="h-[29px] w-[29px]"
//                     alt={`Icon`}
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="">
//               <button className="bg-[#000] text-[#FFF] w-[100%] h-[41.319px] text-[21.425px] font-[700] rounded-[50px] transition-all duration-300 hover:bg-[#0184E2] hover:text-[#FFFFFF] hover:opacity-90 cursor-pointer">
//                 Connect Wallet
//               </button>
//             </div>

//             <div className="flex items-center justify-center ">
//               <p className="text-[15px] font-normal text-black font-k2d capitalize leading-normal">
//                 Max Buy-in: $25,000
//               </p>
//             </div>
//           </div> */}
//           <div className="flex justify-between">
//           <Widget
//             project="doge"
//             symbol="DOGE"
//             theme={{bg: "#f2b60f"}}
//           />
//           <Widget
//             project="pepe"
//             symbol="PEPE"
//             theme={{bg: "#4eb52a"}}
//           />
//         </div>
//       </div>
//       <div className="absolute bottom-[-3%] left-0 right-0 flex items-center justify-center z-30">
//         <img
//           className="transition-all duration-300 cursor-pointer hover:animate-bounce hover:scale-110"
//           src={downArrow}
//           alt=""
//           onClick={(e) => handleScroll(e, "firstever", 90)}
//         />
//       </div>
//     </div>
//   );
// }

// export default WalletSec;


import React, { useState } from "react";
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
import arwbtn1 from "../../assets/walletsec/btnicns (3).svg";
import arwbtn2 from "../../assets/walletsec/btnicns (1).svg";
import arwbtn3 from "../../assets/walletsec/btnicns (2).svg";
import coinsw1 from "../../assets/walletsec/coinsw (5).svg";
import coinsw2 from "../../assets/walletsec/coinsw (2).svg";
import coinsw3 from "../../assets/walletsec/coinsw (3).svg";
import coinsw4 from "../../assets/walletsec/coinsw (1).svg";
import coinsw5 from "../../assets/walletsec/coinsw (6).svg";
import coinsw6 from "../../assets/walletsec/coinsw (4).svg";
import doge_icn from "../../assets/mobile_assets/coins (2).png";
import pepe_icn from "../../assets/mobile_assets/coins (1).png"

import ggicon from "../../assets/walletsec/gg.svg";
import arw from "../../assets/walletsec/arw.svg";
import bg_img_doge from "../../assets/walletsec/DOGGGEEEEEE (1).png";
import bg_img_pepe from "../../assets/walletsec/Pepe Avator.png";
import downArrow from "../../assets/herosec/down-arrow.svg";
import WidgetMob from "../../component/Widget/WidgetMob";

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
    <div className="justify-center text-white ">
      <div className="bg-black border border-neutral-400 w-[94px] h-[94px] rounded-[15px] flex flex-col justify-center items-center font-Inter">
        <span className="text-[44px] font-semibold leading-none">
          {zeroPad(days)}
        </span>
        <span className="text-[16px] font-bold">days</span>
      </div>
      <span className="text-[50px] px-1">:</span>
      <div className="bg-black border border-neutral-400 w-[94px] h-[94px] rounded-[15px] flex flex-col justify-center items-center font-Inter">
        <span className="text-[44px] font-semibold leading-none">
          {zeroPad(hours)}
        </span>
        <span className="text-[16px] font-bold">days</span>
      </div>
      <span className="text-[50px] px-1">:</span>
      <div className="bg-black border border-neutral-400 w-[94px] h-[94px] rounded-[15px] flex flex-col justify-center items-center font-Inter">
        <span className="text-[44px] font-semibold leading-none">
          {zeroPad(minutes)}
        </span>
        <span className="text-[16px] font-bold">days</span>
      </div>
      {/* :{zeroPad(seconds)} */}
    </div>
  );

  return (
    <div className="w-[100%] max-w-[1440px] mx-auto relative py-[80px]" id="wallet">
      <div className="max-w-[1240px] mx-auto flex justify-center space-x-[80px]">
        <img className="absolute left-0 z-[1]" src={bg_img_doge} alt="" />
        <div className="flex flex-col w-[100%] relative z-[99] max-w-[404px]  py-10 space-y-[20px] px-4 ">
          <div>
            <h3
              className="text-center text-[56px] leading-[116.667%] text-[#FFBF0C] font-[Anton] font-[400]"
              style={{
                textShadow: "4.556px -0.57px 17.144px #F1AD03",
                webkitTextStrokeWidth: "1.09px",
                webkitTextStrokeColor: "#000",
              }}
            >
              TEAM DOGE
            </h3>
          </div>
          <div>
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
          </div>

          <div className="px-4 bg-[#F2B60F] w-[100%] space-y-[10px]  px-[13px] pb-[15px] pt-[15px] rounded-[13px] border border-[#fff]">
            <div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
              {Buybuttons.map((button) => (
                <div
                  key={button.id}
                  onClick={() => setActiveButton(button.id)}
                  className={`w-[63.8px] rounded-[30px] space-x-[4px] flex justify-center items-center cursor-pointer ${
                    activeButton === button.id
                      ? "bg-[#EFAB00] border border-black"
                      : "text-[#000]"
                  }`}
                >
                  <img
                    src={button.img}
                    className="h-[10px]"
                    alt={button.label}
                  />
                  <p
                    className={`text-[11px] font-[Anton] font-[400] ${
                      activeButton === button.id ? "text-[#000]" : "text-[#000]"
                    }`}
                  >
                    {button.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-[8px]">
              <h3 className="text-[50px] font-[400] font-[Anton] text-center leading-[ 76%] text-[#000]">
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
                <div className="bg-[#F6FF00] h-[23px] w-[20%] rounded-[30px]"></div>
                <span className=" w-[70%] text-center text-[12px] font-[Helvetica]">
                  Until Presale Round Win
                </span>
              </div>
              <div className="flex justify-between">
                <h4 className="text-[16px] font-[Anton] font-[400] text-[#000]">
                  USD Raised
                </h4>
                <h5 className="text-[16px] font-[400] font-[Anton] text-[#000]">
                  {" "}
                  $1,000,000
                </h5>
              </div>
            </div>
            <div className="border-[1px] p-1 rounded-[13px] space-y-[15px] border-[#fff]">
              <div>
                <h3 className="text-[18px] font-[400] font-[Anton] text-center leading-[150%] text-[#000]">
                  1 Team Pepe = $0.006
                </h3>
              </div>
              <div className="bg-[#000000] px-2 flex relative z-[9] justify-between items-center  py-2 rounded-[8px]">
                <div className="">
                  <h5 className="text-[#fff] text-[14px] leading-[5px] font-[400] font-[Anton]">
                    You pay
                  </h5>
                  <input
                    type="text"
                    className="text-[#fff] w-[73px] text-[16px] font-[Anton] font-[400] bg-[transparent] outline-none"
                    defaultValue={1}
                  />
                </div>

                <div className="relative max-w-[205px] w-fit inline-block text-left">
                  <div
                    className="flex items-center justify-between space-x-1 cursor-pointer p-1 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A]"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    <div className="flex items-center space-x-2">
                      <img
                        src={selectedItem.img}
                        className="w-[12px] h-[12px]"
                        alt="Selected Icon"
                      />
                      <h5 className="text-[12px] text-[#fff] font-[Helvetica] leading-[80%] font-[400]">
                        {selectedItem.text}
                      </h5>
                    </div>
                    <img
                      src={arw}
                      className="w-[6px] h-[6px]"
                      alt="Arrow Icon"
                    />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute mt-2 w-full bg-[#191F1F] rounded-md shadow-lg">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center px-2 py-2 space-x-2 cursor-pointer hover:bg-gray-800"
                          onClick={() => handleSelect(option)}
                        >
                          <img
                            src={option.img}
                            className="w-[12px] h-[12px]"
                            alt={`Option ${index + 1}`}
                          />
                          <h5 className="text-[12px] font-[Helvetica] text-[#fff] font-[400]">
                            {option.text}
                          </h5>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-[#000000] relative z-[1] px-2 flex justify-between items-center  py-2 rounded-[8px]">
                <div className="w-[50%]">
                  <h5 className="text-[#fff] font-[Anton] text-[12px] leading-[5px] font-[400]">
                    You receive
                  </h5>
                  <input
                    type="text"
                    className="text-[#fff] text-[16px] font-[400] font-[Anton] bg-[transparent] outline-none"
                    defaultValue={`7,414,420`}
                  />
                </div>

                <div className="relative max-w-[203px] w-fit inline-block text-left">
                  <div className="flex items-center justify-center space-x-1 cursor-pointer px-2 p-1 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A] w-[100%]">
                    <img
                      src={ggicon}
                      className="w-[12px] h-[12px]"
                      alt="Selected Icon"
                    />
                    <h5 className="text-[12px] font-[Helvetica] text-[#fff] font-[400]">
                      TEAM DOGE
                    </h5>
                  </div>
                </div>
              </div>
              <div className=" space-y-[5px]">
                <h5 className="text-[#000] text-[16px] font-[Helvetica] font-[600] text-center">
                  Accepting
                </h5>
                <div className="flex justify-between space-x-1 max-w-[200px] mx-auto">
                  {iconsData.map((item) => (
                    <img
                      key={item.id}
                      src={item.img}
                      className="h-[18px] w-[18px]"
                      alt={`Icon`}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-[10px]">
                <div className="flex justify-center">
                  <button className="bg-[#000] text-[#FFF] font-[Anton] py-[10px] max-w-[100%] mx-auto w-[100%] text-[18px] font-[400] rounded-[8px]">
                    Connect Wallet
                  </button>
                </div>
                <div className="flex space-x-2  justify-between items-center">
                  <button
                    style={{
                      background: "rgba(176, 133, 11, 0.60)",
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
                      background: "rgba(176, 133, 11, 0.60)",
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
                  <h4 className="text-[15px] pb-2 font-[400] font-[Anton] text-center leading-[150%] text-[#000]">
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

        <div className="flex w-[50%] w-[100%] relative z-[99] max-w-[404px] flex-col py-10 space-y-[20px] px-4  ">
          <div>
            <h3
              className="text-center text-[56px] leading-[116.667%] text-[#00FF2F] font-[Anton] font-[400]"
              style={{
                textShadow: "6.534px -0.817px 24.583px #74FF60",
                webkitTextStrokeWidth: "1.09px",
                webkitTextStrokeColor: "#000",
              }}
            >
             TEAM PEPE
            </h3>
          </div>
          <div>
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
          </div>

          <div className=" max-w-[100%] px-4 bg-[#4EB52A] w-[100%] space-y-[10px]  px-[13px] pb-[15px] pt-[15px] rounded-[13px] border border-[#fff]">
            <div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
              {Buybuttons.map((button) => (
                <div
                  key={button.id}
                  onClick={() => setActiveButton(button.id)}
                  className={`w-[63.8px] rounded-[30px] space-x-[4px] flex justify-center items-center cursor-pointer ${
                    activeButton === button.id
                      ? "bg-[#4EB52A] border border-black"
                      : "text-[#000]"
                  }`}
                >
                  <img
                    src={button.img}
                    className="h-[10px]"
                    alt={button.label}
                  />
                  <p
                    className={`text-[11px] font-[Anton] font-[400] ${
                      activeButton === button.id ? "text-[#000]" : "text-[#000]"
                    }`}
                  >
                    {button.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-[8px]">
              <h3 className="text-[45px] font-[400] font-[Anton] text-center leading-[ 76%] text-[#000]">
                240,492.39
              </h3>
            </div>
            <div className=" pb-1 space-y-[10px]">
              <div
                className="w-[100%] flex  items-center h-[23px] rounded-[30px]   "
                style={{
                  background: "rgba(255, 255, 255, 0.28)",
                }}
              >
                <div className="bg-[#66FF83] h-[23px] w-[28%] rounded-[30px]"></div>
                <span className=" w-[70%] text-center text-[12px] font-[Helvetica]">
                  Until Presale Round Win
                </span>
              </div>
              <div className="flex justify-between">
                <h4 className="text-[16px] font-[Anton] font-[400] text-[#000]">
                  USD Raised
                </h4>
                <h5 className="text-[16px] font-[400] font-[Anton] text-[#000]">
                  {" "}
                  $1,000,000
                </h5>
              </div>
            </div>
            <div className="border-[1px] p-1 rounded-[13px] space-y-[15px] border-[#fff]">
              <div>
                <h3 className="text-[18px] font-[400] font-[Anton] text-center leading-[150%] text-[#000]">
                  1 Team Pepe = $0.006
                </h3>
              </div>
              <div className="bg-[#000000] px-2 flex relative z-[9] justify-between items-center  py-2 rounded-[8px]">
                <div className="">
                  <h5 className="text-[#fff] text-[14px] leading-[5px] font-[400] font-[Anton]">
                    You pay
                  </h5>
                  <input
                    type="text"
                    className="text-[#fff] w-[73px] text-[16px] font-[Anton] font-[400] bg-[transparent] outline-none"
                    defaultValue={1}
                  />
                </div>

                <div className="relative max-w-[205px] w-fit inline-block text-left">
                  <div
                    className="flex items-center justify-between space-x-1 cursor-pointer p-1 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A]"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    <div className="flex items-center space-x-2">
                      <img
                        src={selectedItem.img}
                        className="w-[12px] h-[12px]"
                        alt="Selected Icon"
                      />
                      <h5 className="text-[12px] text-[#fff] font-[Helvetica] leading-[80%] font-[400]">
                        {selectedItem.text}
                      </h5>
                    </div>
                    <img
                      src={arw}
                      className="w-[6px] h-[6px]"
                      alt="Arrow Icon"
                    />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute mt-2 w-full bg-[#191F1F] rounded-md shadow-lg">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center px-2 py-2 space-x-2 cursor-pointer hover:bg-gray-800"
                          onClick={() => handleSelect(option)}
                        >
                          <img
                            src={option.img}
                            className="w-[12px] h-[12px]"
                            alt={`Option ${index + 1}`}
                          />
                          <h5 className="text-[12px] font-[Helvetica] text-[#fff] font-[400]">
                            {option.text}
                          </h5>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-[#000000] relative z-[1] px-2 flex justify-between items-center  py-2 rounded-[8px]">
                <div className="w-[50%]">
                  <h5 className="text-[#fff] font-[Anton] text-[12px] leading-[5px] font-[400]">
                    You receive
                  </h5>
                  <input
                    type="text"
                    className="text-[#fff] text-[16px] font-[400] font-[Anton] bg-[transparent] outline-none"
                    defaultValue={`7,414,420`}
                  />
                </div>

                <div className="relative max-w-[203px] w-fit inline-block text-left">
                  <div className="flex items-center justify-center space-x-1 cursor-pointer px-2 p-1 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A] w-[100%]">
                    <img
                      src={ggicon}
                      className="w-[12px] h-[12px]"
                      alt="Selected Icon"
                    />
                    <h5 className="text-[12px] font-[Helvetica] text-[#fff] font-[400]">
                      TEAM PEPE
                    </h5>
                  </div>
                </div>
              </div>
              <div className=" space-y-[5px]">
                <h5 className="text-[#000] text-[16px] font-[Helvetica] font-[600] text-center">
                  Accepting
                </h5>
                <div className="flex justify-between space-x-1 max-w-[200px] mx-auto">
                  {iconsData.map((item) => (
                    <img
                      key={item.id}
                      src={item.img}
                      className="h-[18px] w-[18px]"
                      alt={`Icon`}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-[10px]">
                <div className="flex justify-center">
                  <button className="bg-[#000] text-[#FFF] font-[Anton] py-[10px] max-w-[100%] mx-auto w-[100%] text-[18px] font-[400] rounded-[8px]">
                    Connect Wallet
                  </button>
                </div>
                <div className="flex space-x-2  justify-between items-center">
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
                  <h4 className="text-[15px] pb-2 font-[400] font-[Anton] text-center leading-[150%] text-[#000]">
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
                  width="83"
                  height="18"
                  viewBox="0 0 83 18"
                  fill="none"
                >
                  <path
                    d="M8.7848 18C7.43676 17.256 6.21604 16.3669 5.12638 15.3344C2.76732 13.0973 1.21521 10.4806 0.573019 7.43875C0.559913 7.37633 0.584252 7.29366 0.5 7.2498V2.69631C0.661015 2.61027 0.842625 2.61196 1.01862 2.60015C2.74298 2.4888 4.39619 2.1227 5.98014 1.49509C6.90504 1.12899 7.75879 0.658293 8.562 0.108298C8.6294 0.0627461 8.69306 0.00875888 8.7848 0.00201048C8.89526 -0.0131734 8.8653 0.0610589 8.86718 0.109985C8.86718 0.341118 8.86156 0.573938 8.86905 0.80507C8.87279 0.914732 8.80539 0.965345 8.72301 1.02439C7.27762 2.06533 5.62628 2.70643 3.83264 3.07422C3.03318 3.23787 2.22436 3.33403 1.40618 3.36272C1.30508 3.36609 1.25827 3.38296 1.24891 3.48925C1.02798 5.9288 1.35188 8.2958 2.46588 10.5447C3.80456 13.2491 5.88091 15.3833 8.67059 16.9489C8.78667 17.013 8.82786 17.0805 8.82412 17.1986C8.81663 17.4652 8.82599 17.7318 8.82973 17.9983H8.78292L8.7848 18Z"
                    fill="black"
                  />
                  <path
                    d="M8.86132 1.99936C8.86132 2.52911 8.86132 3.0673 8.86132 3.60548C8.85196 6.42294 8.84073 9.23871 8.83324 12.0562C8.82949 13.3131 8.82762 14.5716 8.82762 15.8285C8.82762 15.9466 8.83137 16.0293 8.65912 15.9331C7.31483 15.1807 6.15964 14.2376 5.16172 13.1359C5.14861 13.1207 5.14299 13.1005 5.12053 13.0583C5.57923 13.0752 6.01734 13.0617 6.45171 12.9841C7.62562 12.7732 8.47189 12.073 8.69656 11.1148C8.9643 9.96923 8.44381 9.01602 7.23058 8.42722C6.85987 8.2467 6.46294 8.12016 6.07913 7.97001C5.86382 7.88566 5.65412 7.79287 5.47064 7.65959C5.08683 7.38121 5.12802 6.89702 5.55489 6.67432C5.74774 6.57309 5.96118 6.53429 6.1821 6.53092C6.8917 6.51742 7.60129 6.50392 8.309 6.50392C8.47376 6.50392 8.51683 6.46512 8.51683 6.31834C8.51683 5.89657 8.53555 5.47648 8.55053 5.0547C8.5524 4.97203 8.55614 4.89949 8.42696 4.90286C7.37661 4.92817 6.31316 4.79826 5.28154 5.02602C4.2106 5.26222 3.45982 5.84764 3.252 6.86665C3.07975 7.70683 3.36995 8.41709 4.1095 8.96709C4.52327 9.27414 4.99696 9.48334 5.49685 9.64868C5.78144 9.74315 6.06228 9.84776 6.31878 9.99622C6.682 10.2071 6.81306 10.4703 6.72319 10.8415C6.64268 11.1738 6.36559 11.3206 6.02483 11.3813C5.36954 11.4977 4.75731 11.3661 4.1769 11.0911C3.95036 10.9849 3.73505 10.855 3.51037 10.7436C3.42238 10.6997 3.41114 10.6221 3.37744 10.5563C2.62292 9.07675 2.22787 7.52293 2.16796 5.89657C2.14736 5.34151 2.16608 4.78814 2.21289 4.23308C2.22225 4.13017 2.24097 4.07787 2.38327 4.07112C4.72735 3.95809 6.87672 3.35073 8.74337 2.02973C8.77145 2.00949 8.79392 1.97406 8.8632 1.99768L8.86132 1.99936Z"
                    fill="black"
                  />
                  <path
                    d="M10.3163 0.90618C10.3875 1.1255 10.2489 1.1255 10.0598 1.14406C9.779 1.16937 9.82768 1.01922 9.80896 0.867376C9.78462 0.67336 9.89695 0.676734 10.0542 0.67336C10.2452 0.668298 10.3856 0.685169 10.3163 0.90618Z"
                    fill="black"
                  />
                  <path
                    d="M9.47394 0.613772C9.25676 0.666072 9.20621 0.571595 9.22119 0.394449C9.23242 0.262855 9.18936 0.136323 9.43463 0.149819C9.64058 0.159942 9.75478 0.16669 9.74355 0.402885C9.73419 0.600275 9.66679 0.649201 9.47207 0.613772H9.47394Z"
                    fill="black"
                  />
                  <path
                    d="M11.243 1.63981C11.0501 1.67861 10.9921 1.6145 10.9846 1.42386C10.9771 1.20622 11.0876 1.20453 11.2711 1.18766C11.5519 1.16067 11.4808 1.32769 11.5032 1.46266C11.5369 1.66849 11.3965 1.6533 11.243 1.64149V1.63981Z"
                    fill="black"
                  />
                  <path
                    d="M9.76028 3.01217C9.80147 3.1792 9.75654 3.25005 9.54684 3.25005C9.33715 3.25005 9.24728 3.22306 9.25664 3.00711C9.26413 2.83503 9.30532 2.78273 9.50004 2.78441C9.69475 2.7861 9.82394 2.80297 9.76028 3.01217Z"
                    fill="black"
                  />
                  <path
                    d="M10.4342 2.99601C10.3874 2.8273 10.4623 2.775 10.6607 2.775C10.8685 2.775 10.9341 2.81886 10.9416 3.01794C10.9528 3.26257 10.7918 3.21533 10.6345 3.23389C10.408 3.26089 10.4173 3.13773 10.4323 2.99601H10.4342Z"
                    fill="black"
                  />
                  <path
                    d="M10.1084 4.28042C9.91372 4.32091 9.84444 4.26018 9.85568 4.08809C9.86504 3.94132 9.83883 3.81984 10.086 3.83165C10.2713 3.84178 10.3649 3.85359 10.3518 4.05604C10.3406 4.22812 10.3219 4.3361 10.1066 4.28042H10.1084Z"
                    fill="black"
                  />
                  <path
                    d="M9.5076 2.27415C9.72104 2.22354 9.75287 2.31802 9.76223 2.49347C9.77533 2.69593 9.67985 2.70774 9.49637 2.71786C9.28105 2.72967 9.2511 2.65881 9.24174 2.48504C9.2305 2.28427 9.31663 2.2421 9.50573 2.27415H9.5076Z"
                    fill="black"
                  />
                  <path
                    d="M9.5205 4.28542C9.26587 4.35122 9.29396 4.20275 9.27524 4.05597C9.24715 3.83834 9.38196 3.85015 9.55046 3.83834C9.74705 3.82484 9.77513 3.8957 9.77701 4.05091C9.77701 4.223 9.76203 4.34784 9.52238 4.28542H9.5205Z"
                    fill="black"
                  />
                  <path
                    d="M9.85965 3.01734C9.80161 2.82164 9.90084 2.78959 10.0974 2.77946C10.3333 2.76765 10.324 2.86719 10.3408 3.02241C10.3652 3.23329 10.2491 3.23498 10.0731 3.2451C9.85778 3.25691 9.81659 3.17424 9.85778 3.01734H9.85965Z"
                    fill="black"
                  />
                  <path
                    d="M9.53358 3.75582C9.33325 3.79631 9.249 3.73895 9.26585 3.54156C9.27708 3.39984 9.26772 3.30536 9.48303 3.31886C9.66277 3.32898 9.79196 3.31717 9.77323 3.54324C9.76013 3.7052 9.74702 3.80643 9.53545 3.75582H9.53358Z"
                    fill="black"
                  />
                  <path
                    d="M10.7133 3.32206C10.9567 3.26301 10.9155 3.4216 10.9342 3.56163C10.966 3.80457 10.7807 3.73202 10.6421 3.75227C10.395 3.78601 10.4512 3.63248 10.4306 3.50764C10.395 3.28663 10.5541 3.317 10.7133 3.32374V3.32206Z"
                    fill="black"
                  />
                  <path
                    d="M9.79208 7.2393C9.85573 7.42657 9.73778 7.45356 9.57115 7.4485C9.44196 7.44513 9.2978 7.48056 9.32214 7.28148C9.33899 7.14314 9.26784 6.98961 9.54868 7.00142C9.7565 7.00986 9.83701 7.05541 9.79208 7.2393Z"
                    fill="black"
                  />
                  <path
                    d="M12.428 4.77326C12.2427 4.82387 12.2034 4.74289 12.2034 4.59105C12.2034 4.44427 12.1977 4.33967 12.4243 4.34305C12.6134 4.34474 12.6976 4.37679 12.7089 4.56575C12.7201 4.77663 12.6078 4.79857 12.428 4.77326Z"
                    fill="black"
                  />
                  <path
                    d="M11.2674 4.79694C11.082 4.83574 11.024 4.76657 11.0296 4.59955C11.0352 4.45108 11.0296 4.35491 11.2543 4.35829C11.4602 4.36166 11.5333 4.40215 11.5351 4.59955C11.5389 4.80031 11.434 4.81887 11.2655 4.79694H11.2674Z"
                    fill="black"
                  />
                  <path
                    d="M10.0654 4.81165C9.88941 4.85551 9.87256 4.75091 9.86508 4.59064C9.85571 4.4118 9.92312 4.38312 10.1085 4.36794C10.3931 4.34263 10.3406 4.49953 10.3594 4.648C10.3893 4.86395 10.2208 4.79477 10.0654 4.81333V4.81165Z"
                    fill="black"
                  />
                  <path
                    d="M12.0836 3.50632C12.1323 3.69022 12.0536 3.73239 11.8589 3.74927C11.565 3.77457 11.6286 3.6008 11.6099 3.46246C11.5818 3.26507 11.7466 3.3258 11.8552 3.31399C12.0199 3.29712 12.1491 3.31905 12.0817 3.50632H12.0836Z"
                    fill="black"
                  />
                  <path
                    d="M12.4243 2.14483C12.1435 2.21063 12.2015 2.03011 12.1791 1.89008C12.1528 1.73318 12.2352 1.72137 12.3738 1.71968C12.5516 1.71799 12.6864 1.70787 12.6733 1.939C12.664 2.11446 12.619 2.18701 12.4243 2.14483Z"
                    fill="black"
                  />
                  <path
                    d="M10.7056 4.26859C10.5446 4.2939 10.4247 4.28209 10.4603 4.09988C10.4828 3.99191 10.3667 3.80632 10.6401 3.835C10.7767 3.8485 10.964 3.76921 10.9396 4.02059C10.9246 4.17917 10.949 4.32595 10.7037 4.26859H10.7056Z"
                    fill="black"
                  />
                  <path
                    d="M10.1086 6.90748C9.93071 6.95134 9.89701 6.86024 9.90075 6.70503C9.9045 6.57174 9.90262 6.47727 10.1048 6.49414C10.2658 6.50763 10.4081 6.48064 10.3801 6.70503C10.3557 6.90579 10.3763 6.90748 10.1067 6.90916L10.1086 6.90748Z"
                    fill="black"
                  />
                  <path
                    d="M12.0724 1.94039C12.1099 2.09223 12.0818 2.17996 11.8852 2.16477C11.7167 2.15296 11.5744 2.14453 11.5894 1.93702C11.5987 1.81386 11.5707 1.7042 11.7822 1.71938C11.9601 1.73288 12.1511 1.69407 12.0706 1.94039H12.0724Z"
                    fill="black"
                  />
                  <path
                    d="M12.9916 2.14235C12.78 2.19465 12.7519 2.09005 12.7575 1.92809C12.7613 1.79481 12.7575 1.7054 12.9616 1.71383C13.1582 1.72058 13.2537 1.75263 13.2518 1.95846C13.2518 2.15079 13.1544 2.16429 12.9897 2.14235H12.9916Z"
                    fill="black"
                  />
                  <path
                    d="M10.3706 7.23405C10.4286 7.42132 10.3013 7.41963 10.144 7.43144C9.93995 7.44662 9.91187 7.37576 9.90251 7.20874C9.89127 7.00123 10.0111 7.01641 10.1684 7.00292C10.3874 6.98436 10.3968 7.08896 10.3706 7.23405Z"
                    fill="black"
                  />
                  <path
                    d="M10.6776 4.79654C10.4361 4.85559 10.4773 4.70544 10.4586 4.57047C10.4305 4.36465 10.5578 4.38152 10.7188 4.36633C10.9529 4.34609 10.9266 4.46418 10.9416 4.60421C10.966 4.80835 10.8461 4.82016 10.6776 4.79654Z"
                    fill="black"
                  />
                  <path
                    d="M14.7798 2.64744C14.5832 2.68793 14.5308 2.61876 14.5308 2.45342C14.5308 2.2864 14.572 2.2206 14.7723 2.22566C14.9464 2.22903 15.0176 2.26278 15.0101 2.43486C15.0026 2.59345 14.9876 2.70311 14.7798 2.64912V2.64744Z"
                    fill="black"
                  />
                  <path
                    d="M12.0968 4.05389C12.153 4.24284 12.0425 4.25971 11.8759 4.26477C11.6962 4.26983 11.6026 4.24453 11.6232 4.05389C11.6363 3.92229 11.61 3.81263 11.8328 3.82613C12.0182 3.83794 12.1642 3.83625 12.0968 4.0522V4.05389Z"
                    fill="black"
                  />
                  <path
                    d="M11.5016 4.05806C11.5671 4.26558 11.4286 4.26051 11.2619 4.26895C11.0766 4.27907 11.026 4.22509 11.0298 4.06144C11.0335 3.90622 11.0447 3.82524 11.2601 3.82862C11.4623 3.83199 11.5521 3.86911 11.5035 4.05806H11.5016Z"
                    fill="black"
                  />
                  <path
                    d="M11.0822 7.20861C11.0485 7.05846 11.0934 6.99098 11.2825 6.99773C11.4492 7.00447 11.5521 7.00279 11.5484 7.20355C11.5465 7.38576 11.4772 7.41613 11.2956 7.42287C11.0972 7.42962 11.0466 7.36214 11.0822 7.20861Z"
                    fill="black"
                  />
                  <path
                    d="M9.50737 4.80482C9.26023 4.87062 9.29955 4.71878 9.28457 4.58212C9.26585 4.41341 9.33325 4.3763 9.51299 4.37461C9.70209 4.37461 9.77511 4.39823 9.77885 4.59562C9.7826 4.80313 9.69086 4.83181 9.50737 4.80313V4.80482Z"
                    fill="black"
                  />
                  <path
                    d="M10.1218 3.32489C10.3764 3.26078 10.3278 3.42442 10.3465 3.56277C10.3764 3.77197 10.2379 3.74497 10.0862 3.76353C9.83348 3.7939 9.8728 3.65556 9.85407 3.51384C9.82599 3.30295 9.95892 3.30801 10.1218 3.32489Z"
                    fill="black"
                  />
                  <path
                    d="M14.4332 4.56719C14.4856 4.76627 14.3452 4.75277 14.1935 4.76627C13.9876 4.78483 13.9782 4.69372 13.9707 4.54695C13.9613 4.37824 14.025 4.33943 14.2047 4.33606C14.4088 4.33268 14.4706 4.40017 14.4313 4.56719H14.4332Z"
                    fill="black"
                  />
                  <path
                    d="M11.2747 3.74048C11.0463 3.79784 11.0313 3.68312 11.0219 3.51778C11.0126 3.34064 11.0893 3.31533 11.2597 3.31196C11.4432 3.30858 11.5237 3.33895 11.5143 3.52622C11.5068 3.68649 11.4919 3.79447 11.2728 3.74217L11.2747 3.74048Z"
                    fill="black"
                  />
                  <path
                    d="M14.3977 2.43852C14.4577 2.64435 14.3322 2.65447 14.16 2.66291C13.9653 2.67303 13.9297 2.60554 13.9297 2.44864C13.9297 2.29343 13.9596 2.22089 14.1581 2.23101C14.3266 2.24113 14.4633 2.24113 14.3977 2.43852Z"
                    fill="black"
                  />
                  <path
                    d="M13.5927 2.2438C13.8098 2.19318 13.8304 2.29104 13.8454 2.453C13.8679 2.6757 13.7275 2.65208 13.5664 2.66726C13.3399 2.68751 13.3699 2.56435 13.3586 2.43444C13.3436 2.26067 13.4167 2.19993 13.5927 2.2438Z"
                    fill="black"
                  />
                  <path
                    d="M13.0404 3.83231C13.2876 3.77327 13.2576 3.92342 13.2744 4.0702C13.2988 4.27771 13.1565 4.23891 13.0179 4.25746C12.7877 4.28614 12.8083 4.16299 12.7951 4.02296C12.7783 3.84075 12.8682 3.80363 13.0404 3.83231Z"
                    fill="black"
                  />
                  <path
                    d="M10.9773 8.31729C11.0316 8.51637 10.8537 8.45901 10.7245 8.47756C10.513 8.50793 10.5261 8.39996 10.5092 8.26161C10.4793 8.03217 10.6347 8.0676 10.7882 8.0541C11.0297 8.03217 10.9679 8.18232 10.9792 8.31729H10.9773Z"
                    fill="black"
                  />
                  <path
                    d="M10.1608 7.54282C10.3967 7.47871 10.3705 7.62042 10.3873 7.76214C10.4079 7.94603 10.3106 7.95447 10.1477 7.96628C9.92863 7.98146 9.92301 7.88867 9.91177 7.73346C9.89867 7.54619 9.98854 7.51413 10.1608 7.54282Z"
                    fill="black"
                  />
                  <path
                    d="M12.664 4.04981C12.7164 4.22527 12.6303 4.26913 12.4487 4.2607C12.297 4.25395 12.1753 4.26745 12.1997 4.07006C12.2165 3.93509 12.1809 3.81699 12.4168 3.82543C12.6059 3.83386 12.722 3.84905 12.664 4.04812V4.04981Z"
                    fill="black"
                  />
                  <path
                    d="M13.0292 4.76306C12.8327 4.80861 12.8027 4.7175 12.8008 4.56229C12.7971 4.4037 12.8345 4.34466 13.0274 4.34297C13.2258 4.34297 13.2708 4.4037 13.2783 4.57073C13.2857 4.75125 13.2034 4.79174 13.0311 4.76306H13.0292Z"
                    fill="black"
                  />
                  <path
                    d="M13.6022 4.75966C13.3963 4.80521 13.3851 4.69893 13.3776 4.55046C13.3682 4.37838 13.4431 4.34632 13.6191 4.33789C13.8363 4.32776 13.8456 4.41718 13.855 4.57239C13.8662 4.76135 13.767 4.78497 13.6022 4.75966Z"
                    fill="black"
                  />
                  <path
                    d="M14.7835 4.75447C14.5832 4.79327 14.5476 4.69879 14.5458 4.54358C14.5439 4.39512 14.5776 4.33269 14.763 4.33607C14.9427 4.33775 15.0269 4.36475 15.0232 4.55202C15.0195 4.71735 14.9708 4.7899 14.7854 4.75616L14.7835 4.75447Z"
                    fill="black"
                  />
                  <path
                    d="M11.857 4.78257C11.6548 4.82981 11.6286 4.73196 11.6248 4.58012C11.6211 4.4266 11.6511 4.35574 11.8495 4.3608C12.0293 4.36586 12.1098 4.38948 12.1098 4.57506C12.1098 4.75558 12.0461 4.818 11.857 4.78257Z"
                    fill="black"
                  />
                  <path
                    d="M13.9859 5.08978C13.9372 4.90251 14.0383 4.87552 14.2105 4.87383C14.3846 4.87383 14.4502 4.90926 14.452 5.08134C14.452 5.26355 14.3772 5.29898 14.1955 5.30235C13.999 5.30573 13.9409 5.24162 13.9877 5.08809L13.9859 5.08978Z"
                    fill="black"
                  />
                  <path
                    d="M17.3448 3.99585C17.3785 4.15612 17.3205 4.22361 17.1258 4.21855C16.9498 4.21349 16.8786 4.16962 16.8768 4.00091C16.8749 3.83558 16.9273 3.78159 17.1127 3.78665C17.2849 3.79171 17.3879 3.81702 17.3448 3.99585Z"
                    fill="black"
                  />
                  <path
                    d="M11.3029 6.89398C11.1288 6.9311 11.0558 6.88555 11.0745 6.73033C11.0876 6.61392 11.0296 6.46714 11.2674 6.49583C11.404 6.5127 11.5594 6.45196 11.5501 6.67803C11.5426 6.85686 11.5033 6.94797 11.3048 6.89398H11.3029Z"
                    fill="black"
                  />
                  <path
                    d="M10.7244 7.42205C10.496 7.47941 10.5054 7.3495 10.4979 7.20104C10.4904 7.04751 10.5335 7.00027 10.7132 6.99521C10.9229 6.99015 10.9697 7.05089 10.9734 7.2314C10.9791 7.41699 10.8948 7.44904 10.7226 7.42036L10.7244 7.42205Z"
                    fill="black"
                  />
                  <path
                    d="M15.3695 6.3181C15.186 6.35691 15.1561 6.27086 15.1486 6.12409C15.1411 5.94357 15.2216 5.90645 15.4051 5.8997C15.6204 5.89127 15.6092 5.99418 15.6204 6.12915C15.6373 6.31642 15.5324 6.34172 15.3676 6.3181H15.3695Z"
                    fill="black"
                  />
                  <path
                    d="M12.4546 7.40723C12.2318 7.45615 12.2599 7.3195 12.243 7.1879C12.2168 6.98883 12.3441 7.00738 12.4939 6.99389C12.7111 6.97364 12.7017 7.07993 12.713 7.21827C12.7298 7.4106 12.6175 7.42747 12.4546 7.40891V7.40723Z"
                    fill="black"
                  />
                  <path
                    d="M11.3349 8.46458C11.1533 8.50169 11.0765 8.44433 11.0896 8.27056C11.099 8.1474 11.0727 8.03605 11.2862 8.04955C11.4453 8.05967 11.5726 8.0428 11.552 8.25032C11.5389 8.39034 11.552 8.51013 11.3349 8.46289V8.46458Z"
                    fill="black"
                  />
                  <path
                    d="M9.55797 6.90929C9.37636 6.94809 9.29585 6.89579 9.31083 6.72202C9.32019 6.59549 9.28649 6.4639 9.51491 6.49426C9.65158 6.51113 9.81447 6.45377 9.79387 6.67984C9.78077 6.83506 9.79387 6.96665 9.55797 6.90929Z"
                    fill="black"
                  />
                  <path
                    d="M13.3793 4.01727C13.3325 3.8435 13.4373 3.82832 13.5964 3.82325C13.7874 3.81651 13.8473 3.86543 13.8473 4.04258C13.8473 4.21298 13.7874 4.25009 13.6096 4.25347C13.3999 4.25853 13.3437 4.18429 13.3793 4.01727Z"
                    fill="black"
                  />
                  <path
                    d="M14.2012 4.24137C14.0027 4.28355 13.9709 4.19244 13.9671 4.03723C13.9634 3.88033 14.0008 3.81116 14.1956 3.82128C14.3547 3.82972 14.4539 3.83646 14.4465 4.02036C14.4408 4.18401 14.4071 4.28017 14.2012 4.24137Z"
                    fill="black"
                  />
                  <path
                    d="M10.7188 6.90215C10.5035 6.95445 10.4867 6.8431 10.4792 6.68789C10.4717 6.52593 10.5372 6.49219 10.7039 6.49219C10.8874 6.49219 10.9585 6.52762 10.9566 6.70814C10.9566 6.87685 10.9023 6.94096 10.717 6.90384L10.7188 6.90215Z"
                    fill="black"
                  />
                  <path
                    d="M11.9058 8.46152C11.7017 8.51045 11.6793 8.40922 11.6793 8.25738C11.6793 8.11904 11.6905 8.03974 11.8871 8.04649C12.0668 8.05155 12.1492 8.07517 12.1473 8.26244C12.1473 8.43453 12.0893 8.49526 11.9058 8.46152Z"
                    fill="black"
                  />
                  <path
                    d="M15.3301 2.64684C15.1261 2.69071 15.0905 2.58948 15.1036 2.43596C15.1129 2.33304 15.0755 2.2082 15.2683 2.23182C15.4163 2.24869 15.581 2.22676 15.5773 2.44945C15.5754 2.6266 15.5061 2.67721 15.3283 2.64684H15.3301Z"
                    fill="black"
                  />
                  <path
                    d="M10.8985 1.41554C10.9079 1.55051 10.9378 1.66524 10.73 1.64836C10.5521 1.63487 10.408 1.62306 10.4155 1.41048C10.4192 1.28058 10.4136 1.18947 10.6158 1.1996C10.8086 1.20803 10.9697 1.1996 10.8966 1.41554H10.8985Z"
                    fill="black"
                  />
                  <path
                    d="M10.6326 1.12885C10.3012 1.18453 10.4398 0.955081 10.4136 0.835297C10.3986 0.7695 10.3761 0.673335 10.5203 0.675022C10.6813 0.678396 10.8929 0.843732 10.9079 0.968577C10.9341 1.19802 10.745 1.10861 10.6326 1.12885Z"
                    fill="black"
                  />
                  <path
                    d="M11.3646 11.2298C11.5892 11.1775 11.5668 11.3141 11.5799 11.4457C11.5967 11.6043 11.5106 11.6178 11.3646 11.628C11.168 11.6414 11.138 11.5638 11.1324 11.4137C11.1249 11.2484 11.1961 11.1994 11.3646 11.2298Z"
                    fill="black"
                  />
                  <path
                    d="M11.5428 7.74562C11.6064 7.99194 11.4024 7.93289 11.2619 7.95145C11.0541 7.98013 11.0972 7.84685 11.0822 7.73887C11.0597 7.57522 11.1215 7.52461 11.3088 7.52461C11.4979 7.52461 11.5896 7.5651 11.5428 7.74393V7.74562Z"
                    fill="black"
                  />
                  <path
                    d="M12.4188 3.73517C12.2335 3.77735 12.1698 3.69131 12.2054 3.53272C12.2222 3.45849 12.1286 3.33533 12.2822 3.31509C12.475 3.28809 12.6604 3.42812 12.6772 3.56646C12.7015 3.76217 12.5611 3.74024 12.4188 3.73517Z"
                    fill="black"
                  />
                  <path
                    d="M10.7545 7.53801C11.0278 7.48233 10.9436 7.67466 10.9642 7.79613C10.996 8.00196 10.8275 7.94291 10.7077 7.95809C10.4493 7.99184 10.528 7.82313 10.5092 7.70503C10.4774 7.5127 10.6122 7.5262 10.7564 7.53801H10.7545Z"
                    fill="black"
                  />
                  <path
                    d="M10.3798 8.29207C10.4079 8.41523 10.3761 8.49284 10.1833 8.47934C10.0297 8.46922 9.92113 8.49115 9.91177 8.28532C9.90054 8.04407 10.0466 8.06938 10.2113 8.07106C10.378 8.07106 10.378 8.07106 10.3798 8.29376V8.29207Z"
                    fill="black"
                  />
                  <path
                    d="M12.7148 7.75377C12.7654 7.93598 12.6231 7.91911 12.4752 7.9326C12.2711 7.95116 12.2655 7.86006 12.2505 7.71665C12.2243 7.47371 12.4115 7.53782 12.5482 7.52264C12.7541 7.49902 12.7129 7.63399 12.7148 7.75377Z"
                    fill="black"
                  />
                  <path
                    d="M13.8474 5.07287C13.8418 5.19603 13.8793 5.30063 13.7108 5.29725C13.5273 5.29388 13.3962 5.19097 13.3812 5.04756C13.3588 4.84511 13.5142 4.89572 13.6377 4.88054C13.8587 4.85186 13.8624 4.96996 13.8474 5.07287Z"
                    fill="black"
                  />
                  <path
                    d="M9.34844 8.28493C9.27355 8.01499 9.49448 8.0926 9.6349 8.07573C9.88953 8.04368 9.79591 8.21913 9.81089 8.32036C9.84646 8.57849 9.62179 8.46208 9.50197 8.4857C9.27917 8.52956 9.36342 8.36928 9.34844 8.28493Z"
                    fill="black"
                  />
                  <path
                    d="M15.6111 5.60063C15.6635 5.83682 15.4557 5.77271 15.3321 5.7879C15.1449 5.81151 15.1636 5.69004 15.1505 5.57363C15.1262 5.36949 15.2685 5.39986 15.4108 5.38974C15.5999 5.37624 15.6392 5.45722 15.613 5.60063H15.6111Z"
                    fill="black"
                  />
                  <path
                    d="M17.109 4.34244C17.2831 4.31376 17.3562 4.36438 17.3562 4.53984C17.3562 4.71867 17.2569 4.71867 17.1109 4.72373C16.948 4.72879 16.8731 4.69842 16.8769 4.5314C16.8806 4.37112 16.9386 4.31208 17.109 4.34244Z"
                    fill="black"
                  />
                  <path
                    d="M11.3647 10.7071C11.6155 10.6515 11.5669 10.805 11.5818 10.9282C11.6099 11.1374 11.447 11.0766 11.3272 11.0918C11.1437 11.1154 11.1362 11.026 11.1288 10.8961C11.1175 10.7173 11.1924 10.665 11.3647 10.7071Z"
                    fill="black"
                  />
                  <path
                    d="M11.8795 7.4059C11.6455 7.4582 11.6867 7.31142 11.6698 7.18489C11.6473 7.00943 11.7466 7.00437 11.9001 6.99425C12.1079 6.97907 12.1135 7.06848 12.1248 7.21357C12.1379 7.39747 12.0499 7.43458 11.8795 7.4059Z"
                    fill="black"
                  />
                  <path
                    d="M9.78454 7.75753C9.85382 7.97517 9.69468 7.95324 9.52992 7.97011C9.26593 7.99541 9.35579 7.83177 9.33333 7.71873C9.29401 7.52471 9.44192 7.55677 9.57111 7.54327C9.76208 7.52303 9.82573 7.5922 9.78454 7.75753Z"
                    fill="black"
                  />
                  <path
                    d="M11.7767 1.64506C11.6288 1.6788 11.5502 1.60963 11.5858 1.4443C11.6045 1.36163 11.5053 1.23172 11.6663 1.20641C11.8086 1.18448 12.052 1.37681 12.0669 1.47972C12.0988 1.68893 11.9303 1.62988 11.7749 1.64506H11.7767Z"
                    fill="black"
                  />
                  <path
                    d="M17.1014 3.66253C16.9348 3.6929 16.8768 3.63385 16.8749 3.47358C16.8712 3.30318 16.9517 3.28125 17.1108 3.28125C17.2831 3.28125 17.3579 3.31162 17.3561 3.48876C17.3542 3.66928 17.2512 3.67772 17.1014 3.66422V3.66253Z"
                    fill="black"
                  />
                  <path
                    d="M17.302 2.96112C17.3375 3.11296 17.2645 3.1602 17.0904 3.16526C16.8994 3.17032 16.8807 3.09271 16.877 2.951C16.8732 2.7941 16.9125 2.72999 17.1072 2.73167C17.3076 2.73336 17.3169 2.82615 17.302 2.96112Z"
                    fill="black"
                  />
                  <path
                    d="M15.3601 4.88702C15.5473 4.85666 15.6203 4.90558 15.6222 5.08273C15.6222 5.26156 15.5323 5.26662 15.3807 5.27C15.2178 5.27506 15.1392 5.24638 15.1467 5.07598C15.1542 4.92751 15.1822 4.8381 15.3601 4.88534V4.88702Z"
                    fill="black"
                  />
                  <path
                    d="M14.5867 5.57815C14.5456 5.41618 14.6448 5.39763 14.8058 5.38919C15.0211 5.37738 15.008 5.48198 15.0211 5.61864C15.0398 5.81265 14.92 5.8059 14.7684 5.81603C14.5493 5.82952 14.583 5.70299 14.5867 5.57983V5.57815Z"
                    fill="black"
                  />
                  <path
                    d="M15.5736 4.55605C15.6148 4.72139 15.5268 4.75344 15.3583 4.76188C15.1392 4.77369 15.1505 4.66403 15.143 4.52906C15.1355 4.38228 15.1879 4.3401 15.3527 4.33504C15.5455 4.32998 15.6092 4.39409 15.5736 4.55605Z"
                    fill="black"
                  />
                  <path
                    d="M14.789 3.82948C14.9837 3.78899 15.0043 3.88685 15.0137 4.03868C15.0286 4.24957 14.8789 4.20402 14.7459 4.2192C14.5437 4.24282 14.5512 4.13485 14.54 4.00494C14.5269 3.82442 14.6336 3.81093 14.7871 3.82948H14.789Z"
                    fill="black"
                  />
                  <path
                    d="M15.3678 4.21124C15.1843 4.24836 15.1394 4.17413 15.1394 4.02229C15.1394 3.88226 15.1749 3.82321 15.3453 3.83165C15.5101 3.84008 15.6205 3.85021 15.6168 4.04591C15.6131 4.23318 15.5026 4.22643 15.3678 4.21124Z"
                    fill="black"
                  />
                  <path
                    d="M12.1473 10.3659C12.2072 10.5836 12.0481 10.5549 11.9039 10.5701C11.6998 10.5903 11.7317 10.4773 11.7167 10.3626C11.6923 10.1821 11.7878 10.1618 11.9563 10.1567C12.151 10.1534 12.1866 10.2293 12.1454 10.3643L12.1473 10.3659Z"
                    fill="black"
                  />
                  <path
                    d="M16.9291 5.06391C16.9123 4.93063 16.9235 4.83615 17.1238 4.84121C17.2867 4.84458 17.3579 4.87158 17.356 5.03691C17.3522 5.19719 17.2923 5.25961 17.1163 5.26973C16.931 5.27986 16.9104 5.19044 16.931 5.06391H16.9291Z"
                    fill="black"
                  />
                  <path
                    d="M12.1531 11.4104C12.2112 11.6146 12.067 11.6061 11.9191 11.6213C11.6981 11.6449 11.7468 11.5116 11.7281 11.4003C11.7 11.2232 11.8067 11.2181 11.9565 11.213C12.1381 11.2063 12.1999 11.2636 12.1531 11.4104Z"
                    fill="black"
                  />
                  <path
                    d="M16.3675 8.20607C16.3282 8.03061 16.4311 8.00868 16.5922 8.00531C16.7719 8.00025 16.7831 8.07954 16.7925 8.20945C16.8075 8.4119 16.6596 8.41696 16.5098 8.4254C16.3076 8.43721 16.3825 8.2938 16.3675 8.20607Z"
                    fill="black"
                  />
                  <path
                    d="M9.74523 1.17474C9.56736 1.05664 9.43256 0.967226 9.29776 0.879496C9.23972 0.84238 9.22287 0.791767 9.23784 0.732719C9.25844 0.650051 9.3352 0.683793 9.3895 0.678731C9.44379 0.67367 9.49809 0.683793 9.55051 0.677044C9.70591 0.655112 9.75833 0.715847 9.74523 0.849128C9.73774 0.938545 9.74523 1.02796 9.74523 1.17474Z"
                    fill="black"
                  />
                  <path
                    d="M16.5116 3.12144C16.3206 3.16024 16.2776 3.03371 16.2832 2.88862C16.2907 2.7081 16.4498 2.74184 16.579 2.74015C16.8505 2.73678 16.7213 2.92405 16.7381 3.03202C16.7662 3.20917 16.6183 3.11469 16.5116 3.12144Z"
                    fill="black"
                  />
                  <path
                    d="M12.4919 11.5961C12.2878 11.64 12.3234 11.5033 12.3065 11.3836C12.2841 11.2081 12.3983 11.225 12.5312 11.2115C12.754 11.1895 12.7353 11.3161 12.7503 11.4426C12.7709 11.6333 12.6267 11.5928 12.4919 11.5961Z"
                    fill="black"
                  />
                  <path
                    d="M12.5143 11.073C12.3252 11.1169 12.3065 11.0224 12.2971 10.8773C12.2877 10.7204 12.3551 10.6968 12.5087 10.6917C12.6978 10.6833 12.7446 10.7474 12.7483 10.906C12.7539 11.0747 12.6584 11.0916 12.5124 11.073H12.5143Z"
                    fill="black"
                  />
                  <path
                    d="M11.1681 12.4847C11.1231 12.3126 11.2074 12.2789 11.3759 12.2755C11.5594 12.2721 11.5856 12.3379 11.5931 12.4847C11.6024 12.6652 11.4976 12.6652 11.3534 12.6737C11.1812 12.6838 11.125 12.6214 11.1681 12.4864V12.4847Z"
                    fill="black"
                  />
                  <path
                    d="M13.8942 10.88C13.9428 11.0841 13.7725 11.0622 13.6358 11.074C13.4448 11.0909 13.4823 10.9661 13.4692 10.8631C13.4467 10.6894 13.5515 10.6742 13.7069 10.6691C13.8942 10.6624 13.9148 10.7484 13.8942 10.88Z"
                    fill="black"
                  />
                  <path
                    d="M14.2407 9.99761C14.0909 10.0263 14.031 9.96555 14.031 9.80528C14.031 9.65513 14.0909 9.62139 14.2482 9.60958C14.486 9.5927 14.4672 9.73442 14.4822 9.86264C14.5009 10.0263 14.368 9.99255 14.2388 9.99761H14.2407Z"
                    fill="black"
                  />
                  <path
                    d="M15.9405 2.74302C16.1221 2.71434 16.1933 2.78858 16.1764 2.95054C16.1689 3.03489 16.1802 3.14455 16.0416 3.10744C15.9143 3.0737 15.6971 3.15636 15.7027 2.90499C15.7084 2.73628 15.7982 2.72615 15.9386 2.74134L15.9405 2.74302Z"
                    fill="black"
                  />
                  <path
                    d="M13.898 9.85252C13.9336 9.99086 13.8381 10.028 13.664 10.028C13.5198 10.028 13.458 10.001 13.4618 9.85589C13.4674 9.67369 13.6059 9.64163 13.7501 9.62307C13.9317 9.59777 13.883 9.72936 13.898 9.85421V9.85252Z"
                    fill="black"
                  />
                  <path
                    d="M16.7832 8.74402C16.8188 8.89417 16.7439 8.93466 16.5829 8.93972C16.4031 8.94478 16.362 8.88742 16.3601 8.73389C16.3601 8.57699 16.4312 8.55169 16.581 8.55C16.742 8.55 16.8188 8.59218 16.7813 8.74233L16.7832 8.74402Z"
                    fill="black"
                  />
                  <path
                    d="M16.0213 9.98439C15.8603 10.0131 15.7948 9.96246 15.8004 9.80893C15.806 9.67903 15.8172 9.60142 15.9989 9.60479C16.1617 9.60817 16.2404 9.63179 16.231 9.8005C16.2235 9.94053 16.1936 10.0198 16.0213 9.98439Z"
                    fill="black"
                  />
                  <path
                    d="M12.7224 10.3569C12.7711 10.534 12.6588 10.5475 12.5034 10.5509C12.3367 10.556 12.2937 10.5054 12.2937 10.3603C12.2937 10.2084 12.3274 10.1511 12.5108 10.1544C12.6831 10.1578 12.7636 10.1932 12.7243 10.3552L12.7224 10.3569Z"
                    fill="black"
                  />
                  <path
                    d="M13.1079 10.163C13.2951 10.1225 13.3176 10.212 13.3251 10.357C13.3344 10.5291 13.2502 10.5409 13.0929 10.5494C12.8888 10.5612 12.8963 10.4633 12.8888 10.3334C12.8795 10.1765 12.9487 10.1327 13.1079 10.1613V10.163Z"
                    fill="black"
                  />
                  <path
                    d="M13.6584 10.5342C13.4655 10.5747 13.4786 10.4633 13.4655 10.3401C13.4468 10.163 13.5441 10.1562 13.6977 10.1512C13.8793 10.1444 13.8868 10.222 13.8961 10.3503C13.9092 10.524 13.8156 10.5544 13.6584 10.5342Z"
                    fill="black"
                  />
                  <path
                    d="M14.2651 10.5297C14.0816 10.5685 14.0741 10.4707 14.0648 10.3408C14.0517 10.1737 14.1303 10.1501 14.2932 10.1484C14.4654 10.1484 14.4917 10.2075 14.4973 10.3441C14.5029 10.5095 14.4317 10.5584 14.2651 10.528V10.5297Z"
                    fill="black"
                  />
                  <path
                    d="M11.9264 11.0794C11.7448 11.1233 11.7204 11.0389 11.7186 10.9023C11.7167 10.7622 11.7317 10.6829 11.9264 10.6931C12.078 10.7015 12.1623 10.7065 12.1604 10.882C12.1567 11.0473 12.1099 11.1165 11.9264 11.0794Z"
                    fill="black"
                  />
                  <path
                    d="M13.3138 10.8814C13.3568 11.0467 13.2726 11.0771 13.1153 11.0821C12.9374 11.0872 12.8888 11.0366 12.8906 10.8797C12.8906 10.7329 12.9356 10.684 13.1022 10.689C13.2632 10.6941 13.3699 10.7143 13.3156 10.8814H13.3138Z"
                    fill="black"
                  />
                  <path
                    d="M12.9093 11.4165C12.87 11.2613 12.9262 11.209 13.0984 11.209C13.2632 11.209 13.3362 11.236 13.3306 11.403C13.3249 11.543 13.2969 11.6038 13.1246 11.597C12.973 11.5903 12.8456 11.592 12.9093 11.4165Z"
                    fill="black"
                  />
                  <path
                    d="M11.5801 11.9615C11.6363 12.1538 11.4921 12.1285 11.3555 12.1437C11.1401 12.1657 11.1757 12.0476 11.1589 11.9278C11.1364 11.7574 11.2412 11.7624 11.3779 11.754C11.5651 11.7422 11.6138 11.813 11.5801 11.9632V11.9615Z"
                    fill="black"
                  />
                  <path
                    d="M13.0348 2.23713C13.2052 2.2017 13.2707 2.28268 13.2426 2.44296C13.2314 2.50707 13.2932 2.60829 13.149 2.61167C12.9561 2.61841 12.7596 2.49863 12.7614 2.37716C12.7627 2.28381 12.8538 2.23713 13.0348 2.23713Z"
                    fill="black"
                  />
                  <path
                    d="M12.1513 11.9309C12.2074 12.1283 12.082 12.1283 11.9247 12.1384C11.7337 12.1519 11.7469 12.0591 11.7337 11.9393C11.715 11.7656 11.8086 11.7521 11.9622 11.7504C12.1213 11.7504 12.2037 11.7824 12.1531 11.9309H12.1513Z"
                    fill="black"
                  />
                  <path
                    d="M13.1172 11.7546C13.31 11.7158 13.3212 11.8153 13.3287 11.9536C13.3381 12.1173 13.252 12.124 13.1078 12.1325C12.915 12.146 12.9 12.065 12.8962 11.925C12.8925 11.7697 12.958 11.7242 13.1153 11.7546H13.1172Z"
                    fill="black"
                  />
                  <path
                    d="M11.3665 12.8166C11.5556 12.7728 11.5949 12.8571 11.5987 13.0157C11.6024 13.1709 11.535 13.1878 11.3852 13.1996C11.1755 13.2148 11.1737 13.1203 11.1662 12.9786C11.1587 12.8318 11.2167 12.7896 11.3665 12.8166Z"
                    fill="black"
                  />
                  <path
                    d="M13.7034 13.6896C13.5143 13.7301 13.5199 13.6204 13.5087 13.4972C13.4955 13.3403 13.5742 13.3218 13.724 13.3133C13.9168 13.3032 13.928 13.3842 13.9337 13.5226C13.9411 13.6896 13.8475 13.7081 13.7034 13.6879V13.6896Z"
                    fill="black"
                  />
                  <path
                    d="M9.64396 13.3636C9.86863 13.3096 9.84054 13.4412 9.8574 13.5644C9.88361 13.7533 9.75442 13.7297 9.61962 13.7432C9.41367 13.7635 9.43052 13.6555 9.41741 13.5307C9.39869 13.3484 9.50354 13.3349 9.64396 13.3653V13.3636Z"
                    fill="black"
                  />
                  <path
                    d="M10.4192 13.5346C10.466 13.6965 10.3855 13.7337 10.2151 13.7387C10.0316 13.7455 9.99979 13.6864 9.99792 13.5363C9.99792 13.3912 10.0372 13.3456 10.202 13.349C10.3555 13.3524 10.4697 13.3541 10.4192 13.5346Z"
                    fill="black"
                  />
                  <path
                    d="M10.4285 14.0637C10.4753 14.229 10.3873 14.2594 10.2188 14.2577C10.0653 14.2577 10.0073 14.2307 10.0016 14.0772C9.9979 13.9085 10.0578 13.868 10.2357 13.868C10.4061 13.868 10.4603 13.9203 10.4266 14.0637H10.4285Z"
                    fill="black"
                  />
                  <path
                    d="M9.62918 14.4145C9.79206 14.3858 9.86696 14.4213 9.86321 14.5934C9.85947 14.7452 9.82577 14.7958 9.64603 14.7975C9.46255 14.7992 9.42697 14.7452 9.43072 14.595C9.43446 14.4584 9.45131 14.3723 9.62918 14.4162V14.4145Z"
                    fill="black"
                  />
                  <path
                    d="M9.63683 15.3055C9.45709 15.3494 9.44211 15.2582 9.43649 15.125C9.429 14.9748 9.46832 14.9208 9.64993 14.9191C9.83342 14.9191 9.85775 14.9765 9.86524 15.1233C9.87273 15.292 9.80159 15.3325 9.6387 15.3038L9.63683 15.3055Z"
                    fill="black"
                  />
                  <path
                    d="M14.7967 5.26542C14.6113 5.30253 14.5739 5.22155 14.5739 5.0714C14.5739 4.928 14.6169 4.8757 14.7836 4.87738C14.9446 4.87907 15.0213 4.90269 15.0176 5.0714C15.0138 5.22493 14.9745 5.29916 14.7948 5.26542H14.7967Z"
                    fill="black"
                  />
                  <path
                    d="M17.1443 6.27592C16.9851 6.30292 16.9177 6.2523 16.9233 6.09878C16.9289 5.96887 16.9402 5.89126 17.1218 5.89464C17.2847 5.89801 17.3614 5.92332 17.354 6.09034C17.3483 6.23037 17.3146 6.30798 17.1443 6.27592Z"
                    fill="black"
                  />
                  <path
                    d="M15.3862 6.82956C15.2009 6.86499 15.1953 6.76377 15.184 6.63555C15.169 6.46178 15.2608 6.44659 15.4181 6.44322C15.5959 6.43816 15.6128 6.5107 15.6203 6.64398C15.6296 6.81438 15.5472 6.85318 15.3862 6.82956Z"
                    fill="black"
                  />
                  <path
                    d="M17.15 6.8241C16.9965 6.84772 16.916 6.8106 16.9235 6.65201C16.931 6.52717 16.9291 6.43775 17.1163 6.4445C17.2717 6.44956 17.3653 6.46137 17.3541 6.63514C17.3447 6.76842 17.3279 6.85784 17.15 6.8241Z"
                    fill="black"
                  />
                  <path
                    d="M17.1556 7.32884C16.9852 7.35752 16.9197 7.30691 16.9253 7.15339C16.929 7.02348 16.944 6.94756 17.1237 6.94925C17.2866 6.95093 17.3653 6.97793 17.3559 7.14495C17.3484 7.28161 17.3241 7.36765 17.1574 7.32884H17.1556Z"
                    fill="black"
                  />
                  <path
                    d="M17.343 5.57218C17.3767 5.72908 17.3111 5.77463 17.1464 5.778C16.9704 5.78138 16.9217 5.72908 16.9217 5.57386C16.9217 5.41865 16.9872 5.38828 17.1426 5.38828C17.2999 5.38828 17.3879 5.42202 17.3448 5.57049L17.343 5.57218Z"
                    fill="black"
                  />
                  <path
                    d="M12.1138 7.74667C12.1644 7.92888 12.0389 7.92044 11.8948 7.93394C11.687 7.9525 11.687 7.85802 11.6757 7.71799C11.6608 7.54422 11.7487 7.53747 11.9041 7.52904C12.1026 7.51891 12.1494 7.59315 12.1157 7.74667H12.1138Z"
                    fill="black"
                  />
                  <path
                    d="M15.4463 10.669C15.641 10.6387 15.656 10.7416 15.6635 10.8799C15.671 11.0368 15.5774 11.0368 15.4482 11.047C15.2516 11.0621 15.2404 10.9727 15.2366 10.8344C15.2329 10.6876 15.3003 10.6454 15.4463 10.669Z"
                    fill="black"
                  />
                  <path
                    d="M12.1865 13.5454C12.2333 13.7361 12.0798 13.6956 11.9618 13.7091C11.7896 13.7293 11.7653 13.6551 11.7578 13.5184C11.7503 13.3514 11.827 13.3278 11.9881 13.3244C12.1865 13.3194 12.2034 13.4105 12.1846 13.5437L12.1865 13.5454Z"
                    fill="black"
                  />
                  <path
                    d="M12.7483 11.9436C12.7951 12.1258 12.6697 12.1224 12.5236 12.1326C12.3401 12.1444 12.3345 12.0617 12.327 11.9335C12.3196 11.7867 12.372 11.7445 12.5349 11.7445C12.7015 11.7445 12.7895 11.78 12.7483 11.9419V11.9436Z"
                    fill="black"
                  />
                  <path
                    d="M9.63084 13.8815C9.83679 13.8376 9.84802 13.9439 9.85738 14.0907C9.87049 14.2661 9.76377 14.2493 9.63271 14.2628C9.43987 14.283 9.42301 14.2003 9.42301 14.0603C9.42301 13.9186 9.45671 13.8427 9.63084 13.8832V13.8815Z"
                    fill="black"
                  />
                  <path
                    d="M10.8126 14.2446C10.6553 14.2783 10.5935 14.2311 10.5973 14.0759C10.601 13.9358 10.6141 13.8633 10.807 13.8633C10.9904 13.8633 11.0241 13.9223 11.0279 14.0708C11.0316 14.2226 10.9773 14.2783 10.8144 14.2446H10.8126Z"
                    fill="black"
                  />
                  <path
                    d="M11.2205 16.1594C11.1793 16.0126 11.2524 15.9789 11.4152 15.9722C11.6043 15.9637 11.6249 16.0346 11.6324 16.178C11.6437 16.3602 11.5238 16.3332 11.3965 16.3467C11.2187 16.3669 11.1999 16.2843 11.2205 16.1577V16.1594Z"
                    fill="black"
                  />
                  <path
                    d="M10.4268 14.5875C10.4774 14.7579 10.3763 14.7815 10.2171 14.7866C10.0505 14.7933 10.0149 14.7376 10.0056 14.5976C9.99621 14.4323 10.0636 14.4019 10.2284 14.4036C10.3819 14.407 10.4718 14.4289 10.425 14.5875H10.4268Z"
                    fill="black"
                  />
                  <path
                    d="M11.9453 12.8185C12.1438 12.7746 12.1644 12.8624 12.1681 13.0075C12.1719 13.1576 12.1138 13.1863 11.9584 13.193C11.7693 13.2015 11.7469 13.1256 11.7431 12.9855C11.7375 12.8371 11.7881 12.7746 11.9453 12.8168V12.8185Z"
                    fill="black"
                  />
                  <path
                    d="M12.535 12.6448C12.3365 12.6903 12.3365 12.5824 12.329 12.4474C12.3197 12.2871 12.4002 12.2753 12.5462 12.2669C12.7372 12.2567 12.7522 12.3377 12.7578 12.4761C12.7634 12.6363 12.6848 12.6684 12.535 12.6431V12.6448Z"
                    fill="black"
                  />
                  <path
                    d="M12.1605 12.4832C12.2148 12.6755 12.065 12.6469 11.9321 12.6604C11.7504 12.6789 11.7411 12.5929 11.7317 12.463C11.7205 12.2943 11.8047 12.2757 11.9639 12.269C12.1586 12.2605 12.1848 12.3415 12.1605 12.4832Z"
                    fill="black"
                  />
                  <path
                    d="M11.859 6.88041C11.6756 6.92258 11.655 6.82642 11.6531 6.68302C11.6512 6.55142 11.698 6.50924 11.8384 6.52443C11.9751 6.53961 12.1268 6.49575 12.123 6.71676C12.1193 6.91415 11.9976 6.88209 11.8609 6.87872L11.859 6.88041Z"
                    fill="black"
                  />
                  <path
                    d="M11.9959 15.8049C11.8293 15.842 11.7825 15.7762 11.7806 15.6294C11.7788 15.4827 11.8293 15.4371 11.9903 15.4371C12.1513 15.4371 12.2038 15.481 12.2038 15.6278C12.2038 15.7712 12.1663 15.842 11.9959 15.8049Z"
                    fill="black"
                  />
                  <path
                    d="M13.4785 11.379C13.4392 11.2271 13.5403 11.2086 13.6882 11.2103C13.8193 11.2119 13.911 11.217 13.8979 11.3739C13.8848 11.5257 13.8212 11.5915 13.6414 11.5949C13.4523 11.5983 13.4767 11.4954 13.4785 11.379Z"
                    fill="black"
                  />
                  <path
                    d="M11.5855 13.5429C11.6379 13.7251 11.5031 13.7032 11.3721 13.715C11.1923 13.7302 11.1773 13.6526 11.1717 13.5193C11.1661 13.3691 11.2242 13.3337 11.3833 13.3303C11.5705 13.3253 11.6173 13.3944 11.5855 13.5429Z"
                    fill="black"
                  />
                  <path
                    d="M15.8696 2.65249C15.7086 2.68455 15.6992 2.5732 15.7105 2.45004C15.7161 2.38255 15.673 2.27795 15.8284 2.31338C15.9632 2.34375 16.1617 2.27289 16.1767 2.49222C16.1898 2.68792 16.0269 2.64405 15.8696 2.65418V2.65249Z"
                    fill="black"
                  />
                  <path
                    d="M15.0493 8.75789C15.0923 8.9266 14.9856 8.95022 14.8283 8.94685C14.7066 8.94348 14.613 8.93841 14.6299 8.79332C14.6467 8.65498 14.6898 8.5605 14.8789 8.55713C15.0568 8.55375 15.0661 8.63811 15.0511 8.75789H15.0493Z"
                    fill="black"
                  />
                  <path
                    d="M14.3005 12.7821C14.4615 12.75 14.5046 12.8226 14.5008 12.966C14.4971 13.0841 14.4896 13.1499 14.3192 13.16C14.1039 13.1735 14.1039 13.0588 14.0889 12.9323C14.0702 12.7855 14.1695 12.772 14.3024 12.7821H14.3005Z"
                    fill="black"
                  />
                  <path
                    d="M16.7849 7.70896C16.8242 7.86924 16.7156 7.89623 16.5695 7.88105C16.4872 7.87261 16.343 7.91479 16.3786 7.77645C16.4067 7.6651 16.3524 7.47952 16.6163 7.49639C16.7961 7.5082 16.7961 7.58918 16.7849 7.70896Z"
                    fill="black"
                  />
                  <path
                    d="M14.7986 5.93699C14.9895 5.90324 15.0289 5.98928 15.0176 6.13775C15.0101 6.23898 15.027 6.32839 14.8566 6.32671C14.6375 6.32502 14.6113 6.18161 14.5907 6.04833C14.5664 5.89312 14.7162 5.95217 14.7986 5.93699Z"
                    fill="black"
                  />
                  <path
                    d="M13.636 2.13816C13.4394 2.16347 13.3084 2.15503 13.3383 1.96102C13.3477 1.90028 13.3121 1.7805 13.4319 1.8193C13.5742 1.86316 13.8045 1.81424 13.8288 2.03187C13.8476 2.20902 13.6772 2.11285 13.636 2.13816Z"
                    fill="black"
                  />
                  <path
                    d="M15.1955 7.16996C15.1506 6.98438 15.2835 6.97764 15.4277 6.99113C15.5007 6.99788 15.6411 6.95908 15.5981 7.08561C15.5625 7.1919 15.6561 7.3876 15.3809 7.37916C15.1993 7.37242 15.1712 7.30325 15.1936 7.16996H15.1955Z"
                    fill="black"
                  />
                  <path
                    d="M11.1831 14.0505C11.1325 13.8616 11.258 13.8582 11.4059 13.8633C11.522 13.8666 11.6212 13.8582 11.6006 14.01C11.58 14.1686 11.4883 14.2378 11.316 14.2479C11.1232 14.258 11.1962 14.1298 11.1812 14.0505H11.1831Z"
                    fill="black"
                  />
                  <path
                    d="M12.1941 15.13C12.2371 15.3021 12.0948 15.2869 11.9563 15.292C11.8327 15.297 11.7672 15.27 11.7803 15.1435C11.7953 14.9917 11.8795 14.9259 12.0462 14.9174C12.2296 14.9073 12.1884 15.0203 12.1941 15.13Z"
                    fill="black"
                  />
                  <path
                    d="M16.6033 9.06623C16.7213 9.05441 16.8074 9.07635 16.7868 9.20794C16.7681 9.32773 16.7437 9.44245 16.5621 9.44582C16.3955 9.4492 16.3805 9.35303 16.3693 9.24168C16.3543 9.08141 16.4591 9.05273 16.6033 9.06623Z"
                    fill="black"
                  />
                  <path
                    d="M12.9485 14.5485C12.9111 14.4085 12.9916 14.368 13.1507 14.3765C13.2687 14.3832 13.3679 14.3765 13.3586 14.5249C13.3492 14.6784 13.2706 14.7459 13.0983 14.7527C12.9167 14.7611 12.9485 14.6565 12.9485 14.5469V14.5485Z"
                    fill="black"
                  />
                  <path
                    d="M14.8847 9.10555C14.9278 9.11735 15.0719 9.06505 15.0364 9.18821C15.0027 9.30125 15.0364 9.48008 14.7986 9.48514C14.5889 9.4902 14.6432 9.36536 14.6301 9.26413C14.6076 9.09374 14.7218 9.08699 14.8847 9.10555Z"
                    fill="black"
                  />
                  <path
                    d="M9.86494 17.2253C9.90987 17.3856 9.81626 17.4024 9.66648 17.4126C9.483 17.4244 9.47363 17.3468 9.46802 17.2186C9.46053 17.0768 9.5167 17.0431 9.66461 17.0414C9.82188 17.0414 9.90613 17.0684 9.86494 17.2253Z"
                    fill="black"
                  />
                  <path
                    d="M15.0605 11.9044C15.0905 12.0428 15.0399 12.1052 14.8677 12.1052C14.7086 12.1052 14.6711 12.0529 14.673 11.9213C14.673 11.788 14.6954 11.7155 14.8733 11.7189C15.0287 11.7222 15.0905 11.7661 15.0624 11.9044H15.0605Z"
                    fill="black"
                  />
                  <path
                    d="M10.6045 13.7096C10.5408 13.5915 10.5371 13.4734 10.6045 13.3553C10.6644 13.3351 10.7262 13.3435 10.788 13.3435C10.979 13.3435 11.0932 13.5241 10.9996 13.6776C10.9715 13.7231 10.9247 13.7215 10.8797 13.7198C10.788 13.7181 10.6944 13.7299 10.6045 13.7096Z"
                    fill="black"
                  />
                  <path
                    d="M10.2452 16.8748C10.0636 16.9169 10.0524 16.8258 10.043 16.6926C10.0318 16.5323 10.1086 16.5154 10.2565 16.512C10.425 16.507 10.4605 16.5626 10.4643 16.7044C10.4699 16.8646 10.3988 16.9018 10.2434 16.8748H10.2452Z"
                    fill="black"
                  />
                  <path
                    d="M15.465 11.5496C15.3133 11.5715 15.2403 11.5412 15.2384 11.391C15.2384 11.2442 15.289 11.197 15.45 11.2037C15.5811 11.2088 15.6672 11.2172 15.6653 11.3691C15.6653 11.5125 15.6222 11.5833 15.4668 11.5496H15.465Z"
                    fill="black"
                  />
                  <path
                    d="M16.021 10.1583C16.1671 10.1364 16.227 10.1786 16.2307 10.322C16.2345 10.4806 16.154 10.5008 16.0079 10.5008C15.8656 10.5008 15.802 10.4738 15.8001 10.3304C15.7982 10.1735 15.8712 10.1347 16.021 10.1583Z"
                    fill="black"
                  />
                  <path
                    d="M14.2068 5.38997C14.2911 5.41527 14.409 5.35117 14.4333 5.45408C14.4558 5.56037 14.4427 5.6734 14.4277 5.78306C14.424 5.81849 14.3585 5.81512 14.3304 5.7915C14.2162 5.69871 14.0552 5.61773 14.0102 5.50132C13.9372 5.31742 14.1488 5.44058 14.2068 5.38828V5.38997Z"
                    fill="black"
                  />
                  <path
                    d="M9.28088 15.1448C9.30334 15.2478 9.28088 15.3186 9.10863 15.3203C8.942 15.322 8.94012 15.2461 8.94574 15.1398C8.95136 15.0318 8.91391 14.9238 9.11986 14.9238C9.31832 14.9238 9.27526 15.0284 9.28088 15.1448Z"
                    fill="black"
                  />
                  <path
                    d="M15.3638 2.74203C15.4874 2.72685 15.6035 2.74203 15.5735 2.91074C15.5642 2.96979 15.6072 3.0862 15.4743 3.04571C15.3489 3.0069 15.1279 3.13006 15.1092 2.8905C15.0961 2.72347 15.2272 2.74034 15.3638 2.74203Z"
                    fill="black"
                  />
                  <path
                    d="M9.85942 2.27227C10.0073 2.35325 10.129 2.4241 10.2563 2.48653C10.3312 2.52364 10.3443 2.57763 10.335 2.64343C10.3237 2.73284 10.2451 2.70248 10.1908 2.70585C9.82197 2.72778 9.82197 2.72441 9.85942 2.27227Z"
                    fill="black"
                  />
                  <path
                    d="M8.94032 17.23C8.91598 17.1052 8.95155 17.0461 9.11631 17.0394C9.3129 17.0326 9.29418 17.1288 9.30354 17.2469C9.31477 17.3869 9.26047 17.419 9.11069 17.4224C8.9347 17.4274 8.91972 17.3498 8.93844 17.23H8.94032Z"
                    fill="black"
                  />
                  <path
                    d="M14.25 9.48668C14.1788 9.46812 14.0777 9.5238 14.044 9.43269C14.0178 9.36352 14.1021 9.3264 14.147 9.28085C14.1564 9.27073 14.1676 9.25892 14.1807 9.25048C14.2631 9.1965 14.3174 9.05309 14.4372 9.11889C14.5458 9.17794 14.4934 9.31459 14.4784 9.41076C14.4597 9.53729 14.3268 9.45968 14.25 9.48668Z"
                    fill="black"
                  />
                  <path
                    d="M12.7671 14.6091C12.8064 14.7526 12.6885 14.7542 12.5462 14.7559C12.4189 14.7576 12.3608 14.7289 12.3721 14.6041C12.3852 14.4624 12.4563 14.3898 12.6173 14.3797C12.8064 14.3679 12.7521 14.4894 12.7652 14.6091H12.7671Z"
                    fill="black"
                  />
                  <path
                    d="M8.95135 15.7192C8.93075 15.5454 8.93075 15.4594 9.11423 15.4594C9.27712 15.4594 9.28274 15.5269 9.28648 15.6365C9.29397 15.7799 9.22657 15.839 9.07117 15.8457C8.89518 15.8525 8.95322 15.7377 8.94948 15.7192H8.95135Z"
                    fill="black"
                  />
                  <path
                    d="M12.7576 15.0825C12.8194 15.2816 12.6734 15.2647 12.5404 15.2816C12.3645 15.3035 12.3851 15.2057 12.3757 15.1045C12.3626 14.9628 12.4094 14.9071 12.5779 14.9138C12.7202 14.9206 12.8157 14.9341 12.7595 15.0825H12.7576Z"
                    fill="black"
                  />
                  <path
                    d="M12.6061 12.8173C12.6323 12.8258 12.7484 12.76 12.7559 12.8933C12.7615 12.9995 12.5556 13.1902 12.4432 13.1834C12.2803 13.175 12.3608 13.0637 12.344 12.9945C12.3047 12.8275 12.402 12.7853 12.6061 12.8173Z"
                    fill="black"
                  />
                  <path
                    d="M11.5969 15.6532C11.6475 15.8337 11.4996 15.8 11.3779 15.8135C11.2169 15.8304 11.2112 15.7544 11.2056 15.6414C11.2 15.4879 11.2805 15.4592 11.4303 15.4508C11.6157 15.4406 11.61 15.5334 11.5969 15.6532Z"
                    fill="black"
                  />
                  <path
                    d="M11.5465 10.2005C11.5465 10.3135 11.5465 10.4249 11.5465 10.5379C11.4828 10.5733 11.4117 10.5497 11.3443 10.5581C11.1983 10.5767 11.1402 10.5311 11.1458 10.3894C11.1552 10.1583 11.172 10.1448 11.5465 10.2005Z"
                    fill="black"
                  />
                  <path
                    d="M15.0607 12.4546C15.0925 12.6233 14.9652 12.6064 14.8454 12.6148C14.6563 12.6283 14.6863 12.5153 14.6769 12.4107C14.6619 12.2572 14.7705 12.2724 14.8828 12.2639C15.0551 12.2504 15.0776 12.3348 15.0607 12.4546Z"
                    fill="black"
                  />
                  <path
                    d="M9.25845 13.5609C9.27156 13.6672 9.27156 13.7448 9.10118 13.7448C8.92332 13.7448 8.94017 13.6571 8.94578 13.5575C8.9514 13.4597 8.90834 13.3517 9.1068 13.35C9.31462 13.35 9.24535 13.4698 9.25845 13.5592V13.5609Z"
                    fill="black"
                  />
                  <path
                    d="M10.7994 12.891C10.9155 12.8809 11.0035 12.8825 11.0053 13.0462C11.0053 13.2402 10.8724 13.1845 10.7601 13.1947C10.6271 13.2082 10.571 13.1778 10.5672 13.0394C10.5616 12.869 10.6664 12.8809 10.7994 12.891Z"
                    fill="black"
                  />
                  <path
                    d="M10.2189 13.1995C10.0672 13.2282 9.9867 13.208 9.99419 13.0511C10.0017 12.933 10.0129 12.8621 10.1683 12.884C10.2825 12.9009 10.4323 12.8334 10.4304 13.0409C10.4304 13.2147 10.3387 13.2181 10.217 13.1995H10.2189Z"
                    fill="black"
                  />
                  <path
                    d="M9.64978 12.8811C9.81079 12.8457 9.83139 12.9301 9.83701 13.0667C9.8445 13.2658 9.69284 13.1949 9.58612 13.2118C9.40826 13.2388 9.41387 13.1376 9.40451 13.0245C9.39141 12.8491 9.52059 12.8811 9.64791 12.8811H9.64978Z"
                    fill="black"
                  />
                  <path
                    d="M13.1249 14.2091C12.9845 14.2361 12.9396 14.1821 12.9415 14.0538C12.9415 13.9088 13.0089 13.8666 13.1643 13.8581C13.3477 13.848 13.329 13.9459 13.3402 14.0538C13.3552 14.2091 13.2616 14.2276 13.1268 14.2107L13.1249 14.2091Z"
                    fill="black"
                  />
                  <path
                    d="M13.5198 14.025C13.4861 13.8832 13.576 13.8394 13.7295 13.8579C13.8119 13.8681 13.9523 13.8208 13.9223 13.9608C13.898 14.0857 13.8119 14.192 13.6509 14.2105C13.5011 14.2257 13.5217 14.1262 13.5198 14.025Z"
                    fill="black"
                  />
                  <path
                    d="M16.9272 7.66519C16.9104 7.56565 16.9441 7.47792 17.1126 7.50323C17.1744 7.51167 17.3035 7.46105 17.2717 7.58253C17.2418 7.69556 17.2923 7.87102 17.0658 7.88114C16.8991 7.88789 16.9328 7.77823 16.9272 7.66519Z"
                    fill="black"
                  />
                  <path
                    d="M9.26962 14.5836C9.27336 14.7 9.30519 14.8029 9.1086 14.7996C8.94197 14.7962 8.93635 14.722 8.94571 14.6174C8.9532 14.5229 8.89516 14.4082 9.09924 14.4048C9.28272 14.4014 9.28272 14.4841 9.26962 14.5836Z"
                    fill="black"
                  />
                  <path
                    d="M10.6269 14.6273C10.5633 14.3995 10.6831 14.3928 10.8198 14.4046C10.9078 14.4113 11.0482 14.3624 11.0201 14.5193C10.9939 14.6644 10.8778 14.7488 10.7224 14.7639C10.5408 14.7842 10.6326 14.6442 10.6251 14.6273H10.6269Z"
                    fill="black"
                  />
                  <path
                    d="M9.26754 14.0908C9.29376 14.2022 9.26005 14.2663 9.09529 14.268C8.91556 14.2696 8.94739 14.1667 8.94739 14.0739C8.94551 13.971 8.91743 13.8715 9.1084 13.8715C9.30312 13.8715 9.26567 13.9761 9.26754 14.0891V14.0908Z"
                    fill="black"
                  />
                  <path
                    d="M9.83135 0.246094C10.013 0.357442 10.1702 0.453607 10.3406 0.55652C9.92122 0.721856 9.78641 0.640875 9.83135 0.246094Z"
                    fill="black"
                  />
                  <path
                    d="M16.504 7.19699C16.5134 7.08564 16.4816 6.93886 16.6744 6.96079C16.8804 6.9861 16.768 7.14637 16.7849 7.2476C16.8092 7.391 16.6838 7.37413 16.5846 7.37244C16.3973 7.37244 16.5265 7.25604 16.5059 7.19699H16.504Z"
                    fill="black"
                  />
                  <path
                    d="M12.2692 8.24366C12.2224 8.02265 12.3778 8.0429 12.5069 8.05471C12.5762 8.05977 12.6904 8.00072 12.7054 8.12388C12.7148 8.19136 12.432 8.39044 12.3384 8.38369C12.2092 8.37526 12.2841 8.2774 12.2673 8.24535L12.2692 8.24366Z"
                    fill="black"
                  />
                  <path
                    d="M11.0464 2.86289C11.1775 2.91688 11.2992 2.97255 11.4265 3.01642C11.5014 3.04341 11.5089 3.08896 11.5032 3.14801C11.4958 3.22224 11.4321 3.20537 11.3815 3.21043C11.0146 3.24418 10.994 3.22562 11.0464 2.86289Z"
                    fill="black"
                  />
                  <path
                    d="M9.85937 16.684C9.92303 16.9135 9.76575 16.8882 9.6347 16.8898C9.5467 16.8915 9.45683 16.8983 9.46994 16.7785C9.47743 16.7093 9.72269 16.5102 9.80133 16.5254C9.93239 16.5507 9.83877 16.6537 9.8575 16.684H9.85937Z"
                    fill="black"
                  />
                  <path
                    d="M11.4807 2.0538C11.3215 1.98463 11.1886 1.92895 11.0575 1.8699C11.0126 1.84966 10.9883 1.81423 11.0032 1.76699C11.0163 1.71975 11.0613 1.72987 11.0987 1.7265C11.1287 1.72313 11.1605 1.7265 11.1923 1.7265C11.4083 1.72425 11.505 1.83335 11.4825 2.0538H11.4807Z"
                    fill="black"
                  />
                  <path
                    d="M14.4951 12.4448C14.525 12.5916 14.4651 12.6625 14.2985 12.6372C14.233 12.627 14.0982 12.6726 14.13 12.5646C14.1656 12.4482 14.2217 12.2981 14.3846 12.2728C14.5438 12.2474 14.4764 12.3774 14.4951 12.4448Z"
                    fill="black"
                  />
                  <path
                    d="M8.94754 17.798C8.91009 17.6344 8.95128 17.5551 9.12915 17.577C9.20966 17.5871 9.30327 17.5551 9.3014 17.6833C9.29953 17.8655 9.12541 17.8976 9.00371 17.9279C8.89137 17.9566 8.96252 17.8267 8.94754 17.798Z"
                    fill="black"
                  />
                  <path
                    d="M11.0238 16.2721C10.9358 16.429 10.7861 16.3311 10.6625 16.3429C10.6232 16.3092 10.6307 16.2636 10.6363 16.2248C10.6494 16.1286 10.5689 16.0004 10.7917 15.992C10.9976 15.9836 11.0276 16.0662 11.0107 16.213C11.0089 16.2349 11.0182 16.2535 11.0257 16.2737L11.0238 16.2721Z"
                    fill="black"
                  />
                  <path
                    d="M8.94972 13.0185C8.98155 12.9595 8.88045 12.8194 9.06018 12.8329C9.18563 12.8414 9.28111 12.8954 9.26613 13.0472C9.2549 13.1569 9.25677 13.226 9.09763 13.2277C8.91228 13.2277 8.95908 13.1214 8.95159 13.0202L8.94972 13.0185Z"
                    fill="black"
                  />
                  <path
                    d="M15.3696 7.50458C15.4313 7.51133 15.5437 7.49108 15.5044 7.58725C15.4613 7.69353 15.5512 7.88924 15.3059 7.88249C15.1355 7.87743 15.2067 7.75427 15.1936 7.67666C15.1748 7.56194 15.2085 7.47927 15.3696 7.50458Z"
                    fill="black"
                  />
                  <path
                    d="M16.5192 2.61176C16.3956 2.61682 16.2702 2.67081 16.2758 2.51053C16.2776 2.44305 16.2683 2.3317 16.3769 2.3705C16.4967 2.41437 16.712 2.30977 16.7326 2.50885C16.7495 2.68093 16.5678 2.57295 16.5192 2.61176Z"
                    fill="black"
                  />
                  <path
                    d="M16.2232 9.28427C16.2531 9.44792 16.137 9.45467 16.0116 9.44455C15.9554 9.43948 15.8356 9.47491 15.8843 9.36694C15.9292 9.26571 15.9067 9.097 16.1127 9.10206C16.2625 9.10713 16.2119 9.21341 16.2232 9.28427Z"
                    fill="black"
                  />
                  <path
                    d="M8.94198 3.55168C8.99253 3.46395 8.87271 3.31549 9.07679 3.32899C9.28086 3.34248 9.16666 3.48757 9.18163 3.57193C9.19474 3.64616 9.24529 3.77269 9.07491 3.77269C8.85024 3.77269 9.02624 3.60398 8.94386 3.55337L8.94198 3.55168Z"
                    fill="black"
                  />
                  <path
                    d="M8.94587 4.06909C8.98331 3.98642 8.87847 3.83964 9.07505 3.85145C9.27539 3.86326 9.17428 4.01004 9.18552 4.09608C9.19488 4.16863 9.25105 4.29516 9.07505 4.29516C8.856 4.29516 9.00016 4.13826 8.94587 4.06909Z"
                    fill="black"
                  />
                  <path
                    d="M13.3118 12.286C13.2163 12.4058 13.1395 12.502 13.0628 12.5981C13.0384 12.6285 13.0066 12.6488 12.9635 12.6403C12.9167 12.6302 12.9205 12.5914 12.913 12.556C12.8587 12.2793 12.9017 12.2455 13.3118 12.286Z"
                    fill="black"
                  />
                  <path
                    d="M14.7667 2.74336C14.8753 2.75179 15.0027 2.71637 15.0064 2.87158C15.0064 2.94412 14.9783 3.02004 14.8978 2.98124C14.7817 2.92557 14.5627 3.0386 14.5458 2.83952C14.5327 2.69275 14.69 2.76698 14.7667 2.74336Z"
                    fill="black"
                  />
                  <path
                    d="M15.8151 10.8855C15.7926 10.7387 15.8094 10.6442 15.9836 10.6644C16.0491 10.6729 16.1577 10.6594 16.1165 10.7505C16.0697 10.8568 16.0697 11.0221 15.8956 11.0339C15.7645 11.0424 15.8263 10.9226 15.8151 10.8855Z"
                    fill="black"
                  />
                  <path
                    d="M10.6607 16.7246C10.597 16.5188 10.7093 16.5019 10.8516 16.5171C10.9228 16.5255 11.0538 16.4732 11.0295 16.6048C11.0033 16.7465 10.8554 16.8275 10.7262 16.8562C10.5951 16.8849 10.6794 16.7448 10.6607 16.7246Z"
                    fill="black"
                  />
                  <path
                    d="M8.94587 6.70916C8.98144 6.61637 8.88596 6.48141 9.08442 6.48647C9.3222 6.49321 9.17803 6.65012 9.2005 6.73278C9.21735 6.80027 9.26603 6.91836 9.08442 6.91668C8.856 6.91668 9.01327 6.75809 8.94774 6.70748L8.94587 6.70916Z"
                    fill="black"
                  />
                  <path
                    d="M8.9532 7.76208C8.95695 7.64398 8.9195 7.52251 9.10111 7.54951C9.31455 7.57987 9.18349 7.7334 9.21345 7.82957C9.23779 7.90886 9.22655 7.96959 9.09549 7.97297C8.85584 7.97803 9.00375 7.81438 8.9532 7.76377V7.76208Z"
                    fill="black"
                  />
                  <path
                    d="M8.95536 4.59379C8.95536 4.53474 8.95536 4.49425 8.95536 4.45208C8.95536 4.38122 9.00778 4.37953 9.06395 4.37953C9.12574 4.37953 9.19314 4.3711 9.19314 4.45545C9.19314 4.52462 9.19314 4.59379 9.19876 4.66296C9.20625 4.75744 9.19314 4.83336 9.05834 4.81986C8.85051 4.79962 9.00404 4.65284 8.95536 4.59379Z"
                    fill="black"
                  />
                  <path
                    d="M8.94749 8.29432C8.96808 8.20322 8.88757 8.06487 9.0954 8.08006C9.3182 8.09524 9.18526 8.24708 9.21335 8.33312C9.24143 8.41916 9.23582 8.51364 9.0748 8.50521C8.88196 8.49677 8.97744 8.36855 8.94749 8.29432Z"
                    fill="black"
                  />
                  <path
                    d="M9.21923 7.23077C9.17804 7.31513 9.28663 7.4501 9.08817 7.45347C8.87848 7.45685 8.95898 7.31682 8.95711 7.23246C8.95711 7.15485 8.88222 7.02832 9.07694 7.02326C9.29974 7.01651 9.16306 7.17173 9.21923 7.23246V7.23077Z"
                    fill="black"
                  />
                  <path
                    d="M8.94198 5.12196C8.98692 5.04604 8.87084 4.9077 9.06743 4.90095C9.22095 4.89589 9.20785 5.00387 9.18538 5.07472C9.15542 5.16751 9.28648 5.34466 9.05619 5.34466C8.86896 5.34466 8.99253 5.19451 8.94198 5.12196Z"
                    fill="black"
                  />
                  <path
                    d="M10.0298 15.3151C10.0298 15.2088 10.0261 15.1532 10.0298 15.0992C10.0354 15.0401 9.99424 14.9524 10.0804 14.9355C10.1833 14.9153 10.3013 14.9136 10.3986 14.9406C10.4698 14.9608 10.4342 15.0334 10.3799 15.0722C10.2788 15.1447 10.1758 15.2139 10.0279 15.3151H10.0298Z"
                    fill="black"
                  />
                  <path
                    d="M15.4146 11.7224C15.4539 11.7409 15.5794 11.6785 15.5438 11.7882C15.5063 11.9012 15.4595 12.0446 15.321 12.0817C15.2199 12.1087 15.248 11.9974 15.2498 11.9468C15.2536 11.8506 15.1843 11.7021 15.4165 11.7241L15.4146 11.7224Z"
                    fill="black"
                  />
                  <path
                    d="M13.016 4.88767C13.0946 4.88767 13.1508 4.87923 13.2014 4.88936C13.3287 4.91635 13.2706 5.01252 13.2688 5.07831C13.2688 5.16604 13.1995 5.12049 13.1527 5.11037C13.1077 5.10024 13.0628 5.09012 13.0216 5.07325C12.9449 5.04288 12.8026 5.07831 12.8157 4.95515C12.8288 4.8185 12.9711 4.93322 13.0141 4.88767H13.016Z"
                    fill="black"
                  />
                  <path
                    d="M8.9381 12.4898C8.96618 12.4189 8.88568 12.2974 9.04669 12.3025C9.22081 12.3076 9.13843 12.4341 9.14218 12.5066C9.14779 12.5758 9.19834 12.6939 9.04295 12.6905C8.86882 12.6872 8.97742 12.5539 8.9381 12.4898Z"
                    fill="black"
                  />
                  <path
                    d="M15.0532 6.65398C15.0382 6.72653 15.0906 6.83281 14.9745 6.84631C14.8528 6.8615 14.8791 6.7434 14.8566 6.67929C14.8323 6.61012 14.7667 6.53926 14.8154 6.4684C14.8323 6.44309 14.9165 6.44309 14.9652 6.45153C15.1037 6.47852 15.027 6.58481 15.0532 6.65398Z"
                    fill="black"
                  />
                  <path
                    d="M9.15536 11.4526C9.13289 11.5268 9.20591 11.6483 9.04489 11.6415C8.87077 11.6348 8.95503 11.5049 8.94941 11.4306C8.94379 11.3632 8.88762 11.24 9.05051 11.2468C9.22838 11.2535 9.11791 11.3868 9.15536 11.4526Z"
                    fill="black"
                  />
                  <path
                    d="M9.17054 3.01447C9.17054 3.07352 9.17054 3.12076 9.17054 3.16969C9.17054 3.2068 9.1593 3.24055 9.10875 3.24055C9.06382 3.24055 8.99454 3.26079 8.98144 3.2203C8.9365 3.09377 8.95148 2.96049 8.97395 2.83227C8.98331 2.78165 9.05071 2.78672 9.0919 2.79684C9.24356 2.83395 9.13122 2.95205 9.17241 3.01447H9.17054Z"
                    fill="black"
                  />
                  <path
                    d="M13.0254 3.7189C12.9243 3.70709 12.782 3.76277 12.797 3.59574C12.8007 3.54513 12.7614 3.43716 12.8831 3.47765C13.0067 3.51814 13.2145 3.45909 13.2351 3.63623C13.2501 3.76783 13.0947 3.69022 13.0254 3.7189Z"
                    fill="black"
                  />
                  <path
                    d="M8.95331 2.48656C8.95893 2.41907 8.95331 2.35327 8.97391 2.29591C8.99076 2.25205 9.06565 2.25711 9.09935 2.27398C9.2379 2.34484 9.15177 2.46968 9.16862 2.57091C9.17799 2.62321 9.20981 2.70588 9.09935 2.71938C9.05442 2.72444 8.99076 2.73625 8.97578 2.68901C8.95518 2.62321 8.9608 2.55067 8.95519 2.48656H8.95331Z"
                    fill="black"
                  />
                  <path
                    d="M9.16658 6.19362C9.16658 6.2358 9.16658 6.27629 9.16658 6.31846C9.16658 6.3792 9.13288 6.40113 9.06548 6.40113C9.00369 6.40113 8.95876 6.38932 8.95689 6.32353C8.95689 6.24761 8.95689 6.17169 8.95689 6.09408C8.95502 6.01985 8.95689 5.95574 9.07484 5.95911C9.18343 5.96249 9.1722 6.02491 9.17033 6.08733C9.17033 6.12276 9.17033 6.1565 9.17033 6.19193C9.17033 6.19193 9.17033 6.19193 9.16845 6.19193L9.16658 6.19362Z"
                    fill="black"
                  />
                  <path
                    d="M12.2727 6.58828C12.3982 6.6507 12.5199 6.70807 12.6397 6.7688C12.6715 6.78399 12.7146 6.80254 12.6921 6.84641C12.6846 6.8599 12.6584 6.87003 12.6397 6.87678C12.357 6.96113 12.2297 6.86834 12.2727 6.58997V6.58828Z"
                    fill="black"
                  />
                  <path
                    d="M15.0549 8.22675C15.0418 8.32123 15.0923 8.43764 14.9238 8.42921C14.8714 8.42583 14.7684 8.44776 14.8059 8.35835C14.8508 8.25375 14.7984 8.0766 14.9744 8.05973C15.098 8.04792 15.0231 8.17951 15.0549 8.22675Z"
                    fill="black"
                  />
                  <path
                    d="M14.1245 13.5271C14.0908 13.3702 14.1339 13.2943 14.2968 13.3196C14.3492 13.3281 14.4222 13.2859 14.4541 13.3584C14.4653 13.3871 14.2013 13.6857 14.1751 13.6773C14.0665 13.6436 14.1489 13.5558 14.1264 13.5271H14.1245Z"
                    fill="black"
                  />
                  <path
                    d="M12.6474 1.64125C12.5276 1.64125 12.4096 1.64125 12.2898 1.64125C12.2336 1.64125 12.1756 1.64125 12.1662 1.57546C12.1606 1.52822 12.1494 1.46748 12.1737 1.43374C12.2111 1.38482 12.2711 1.43205 12.316 1.44724C12.4302 1.48435 12.5407 1.52991 12.653 1.57208L12.6455 1.64125H12.6474Z"
                    fill="black"
                  />
                  <path
                    d="M8.94393 1.9703C9.00009 1.89944 8.87652 1.75098 9.03941 1.75435C9.20043 1.75773 9.1686 1.90619 9.15924 2.00404C9.15362 2.07153 9.23038 2.19131 9.06375 2.18794C8.86155 2.18288 9.0132 2.03441 8.9458 1.96862L8.94393 1.9703Z"
                    fill="black"
                  />
                  <path
                    d="M12.6508 2.47491C12.486 2.40574 12.3119 2.40574 12.194 2.28427C12.5516 2.16617 12.6864 2.21847 12.6508 2.47491Z"
                    fill="black"
                  />
                  <path
                    d="M9.1684 8.80862C9.11972 8.87611 9.23767 9.01276 9.06355 9.01951C8.86321 9.02626 8.96432 8.87779 8.9587 8.80356C8.95496 8.73439 8.87819 8.59942 9.0598 8.6028C9.24141 8.60617 9.12159 8.74114 9.1684 8.80862Z"
                    fill="black"
                  />
                  <path
                    d="M8.95146 9.84624C8.95146 9.81756 8.95146 9.79056 8.95146 9.76188C8.95146 9.70115 8.96269 9.65391 9.05069 9.65391C9.13494 9.65391 9.15928 9.68765 9.15554 9.75513C9.15179 9.81755 9.15554 9.88166 9.15554 9.94409C9.15554 10.0065 9.16677 10.0706 9.05631 10.0723C8.94959 10.074 8.94959 10.0149 8.95146 9.94915C8.95146 9.91372 8.95146 9.87998 8.95146 9.84455V9.84624Z"
                    fill="black"
                  />
                  <path
                    d="M15.6579 10.3233C15.671 10.4549 15.6467 10.5392 15.4931 10.5325C15.4332 10.5291 15.377 10.5173 15.4107 10.4498C15.4613 10.3486 15.4538 10.19 15.6036 10.1748C15.6991 10.1647 15.6373 10.2878 15.6598 10.325L15.6579 10.3233Z"
                    fill="black"
                  />
                  <path
                    d="M9.18542 5.62858C9.11427 5.69944 9.27342 5.8749 9.05998 5.8614C8.86526 5.84959 8.97947 5.68932 8.96075 5.59821C8.94951 5.53748 8.90832 5.43625 9.05811 5.43288C9.2472 5.4295 9.1461 5.55604 9.18542 5.6269V5.62858Z"
                    fill="black"
                  />
                  <path
                    d="M10.4698 17.0493C10.4005 17.105 10.3631 17.1387 10.3219 17.1674C10.2489 17.2163 10.1721 17.2619 10.0935 17.3125C10.0092 17.0274 10.0205 17.0173 10.4698 17.0493Z"
                    fill="black"
                  />
                  <path
                    d="M9.14802 11.9719C9.11993 12.0427 9.20231 12.1693 9.04504 12.1642C8.87654 12.1591 8.96266 12.0259 8.95517 11.9516C8.94956 11.8892 8.89713 11.7762 9.03568 11.7728C9.21729 11.7677 9.11057 11.9044 9.14614 11.9719H9.14802Z"
                    fill="black"
                  />
                  <path
                    d="M14.3567 10.6698C14.3267 10.7407 14.3192 10.7778 14.2986 10.8031C14.235 10.8807 14.2387 11.0427 14.1039 11.0174C14.0271 11.0039 14.0646 10.8554 14.0739 10.7694C14.0927 10.6074 14.2312 10.6934 14.3567 10.6698Z"
                    fill="black"
                  />
                  <path
                    d="M16.5921 6.65771C16.624 6.58179 16.5491 6.44682 16.697 6.46032C16.8561 6.4755 16.7681 6.61553 16.785 6.69988C16.8018 6.78087 16.7625 6.83654 16.6577 6.82642C16.491 6.80955 16.6296 6.70663 16.5921 6.65771Z"
                    fill="black"
                  />
                  <path
                    d="M9.83898 1.23483C10.3295 1.16059 10.3501 1.17072 10.3145 1.47946C10.146 1.4339 10.0225 1.32593 9.83898 1.23483Z"
                    fill="black"
                  />
                  <path
                    d="M8.9478 10.3827C8.97962 10.3152 8.88788 10.1904 9.05451 10.1955C9.23238 10.2005 9.14251 10.3304 9.14813 10.403C9.15374 10.4705 9.21366 10.5936 9.05077 10.5886C8.87103 10.5835 8.98711 10.4502 8.9478 10.3827Z"
                    fill="black"
                  />
                  <path
                    d="M9.16869 9.33037C9.1275 9.41304 9.22112 9.53957 9.0601 9.53789C8.86539 9.5362 8.96836 9.39279 8.959 9.31519C8.94964 9.24939 8.89721 9.12792 9.06197 9.13636C9.24733 9.14648 9.09942 9.28482 9.16869 9.33037Z"
                    fill="black"
                  />
                  <path
                    d="M12.8682 9.99992C12.9712 9.8852 13.1135 9.8852 13.224 9.8329C13.2745 9.80759 13.3138 9.83796 13.3138 9.89026C13.3138 9.94256 13.3344 10.0151 13.2464 10.0219C13.1285 10.0303 13.0068 10.0488 12.8682 9.99823V9.99992Z"
                    fill="black"
                  />
                  <path
                    d="M14.4144 2.10732C14.2759 2.16468 14.1598 2.136 14.0493 2.14443C13.9576 2.15118 13.9295 2.10563 13.9332 2.02971C13.9389 1.93186 14.0156 1.96391 14.0643 1.9791C14.1748 2.01284 14.3077 2.00103 14.4144 2.10732Z"
                    fill="black"
                  />
                  <path
                    d="M9.26767 1.89258C9.4137 1.98874 9.53727 2.06972 9.66833 2.15745C9.24894 2.24012 9.23022 2.22831 9.26767 1.89258Z"
                    fill="black"
                  />
                  <path
                    d="M15.0285 11.2312C15.0397 11.3527 15.1296 11.4826 14.9929 11.5771C14.9555 11.6041 14.8525 11.6007 14.845 11.5636C14.8169 11.4236 14.9274 11.3291 15.0285 11.2312Z"
                    fill="black"
                  />
                  <path
                    d="M11.3949 1.12273C11.2975 1.12273 11.1983 1.12273 11.1009 1.12273C11.041 1.12273 10.9961 1.10417 10.9961 1.04175C10.9961 1.00801 10.9886 0.962454 11.0073 0.942208C11.0541 0.893282 11.1028 0.942208 11.1459 0.960767C11.2339 0.99957 11.3181 1.04343 11.4043 1.08392C11.4005 1.09742 11.3986 1.10923 11.3949 1.12273Z"
                    fill="black"
                  />
                  <path
                    d="M14.6674 9.99777C14.615 9.88979 14.6393 9.79363 14.6375 9.70084C14.6356 9.60805 14.7124 9.60973 14.7835 9.61479C14.8958 9.62323 14.8453 9.68734 14.8284 9.73458C14.7966 9.82399 14.7723 9.91678 14.6674 9.99777Z"
                    fill="black"
                  />
                  <path
                    d="M10.0542 16.3476C10.2059 16.243 10.3107 16.1705 10.4231 16.0945C10.4755 16.2734 10.3526 16.3577 10.0542 16.3476Z"
                    fill="black"
                  />
                  <path
                    d="M15.1934 8.23197C15.214 8.15605 15.1579 8.05483 15.2983 8.04976C15.3732 8.04639 15.3994 8.09869 15.3769 8.14762C15.3339 8.23534 15.3919 8.39056 15.244 8.40237C15.1597 8.40912 15.2253 8.28427 15.1934 8.23197Z"
                    fill="black"
                  />
                  <path
                    d="M13.9035 2.80065C14.0888 2.71798 14.2199 2.74666 14.3453 2.74835C14.3959 2.74835 14.4352 2.78209 14.4277 2.83102C14.4183 2.89681 14.3659 2.8985 14.306 2.88332C14.1955 2.85801 14.0832 2.83608 13.9035 2.80065Z"
                    fill="black"
                  />
                  <path
                    d="M16.4575 10.0247C16.392 9.87621 16.407 9.77498 16.4182 9.67713C16.4257 9.59952 16.5025 9.60796 16.5624 9.61471C16.6579 9.62483 16.6111 9.68894 16.5961 9.72437C16.5642 9.8121 16.5193 9.89477 16.4575 10.0247Z"
                    fill="black"
                  />
                  <path
                    d="M9.16666 10.9275C9.14044 11.0051 9.22282 11.1367 9.04496 11.13C8.85773 11.1232 8.94198 10.9866 8.93637 10.9056C8.93075 10.8297 8.87833 10.6998 9.05058 10.7065C9.24155 10.7133 9.12734 10.855 9.16666 10.9292V10.9275Z"
                    fill="black"
                  />
                  <path
                    d="M11.5465 10.2005C11.5016 10.2005 11.4547 10.2002 11.4097 10.1969C11.2731 10.1918 11.1626 10.1851 11.1626 10.3689C11.1626 10.5545 11.2749 10.5461 11.4097 10.5393C11.4547 10.5377 11.5016 10.5396 11.5465 10.5379C11.2507 10.6442 11.127 10.6035 11.1214 10.401C11.1158 10.1311 11.2206 10.0805 11.5445 10.2002L11.5465 10.2005Z"
                    fill="black"
                  />
                  <path
                    d="M10.6045 13.7096C10.6663 13.7063 10.7281 13.6995 10.7899 13.7029C10.9266 13.7113 11.0015 13.6843 10.9977 13.5325C10.994 13.3908 10.9378 13.3469 10.7918 13.3621C10.7319 13.3689 10.6682 13.357 10.6064 13.3554C10.7038 13.2946 10.8142 13.325 10.9191 13.3233C11.067 13.3199 11.0427 13.4262 11.0333 13.5021C11.0239 13.5848 11.1082 13.7181 10.9378 13.735C10.8292 13.7451 10.7094 13.7788 10.6045 13.708L10.6045 13.7096Z"
                    fill="black"
                  />
                  <path
                    d="M13.9053 12.8543C13.9353 13.0579 13.8598 13.1546 13.6788 13.1445C13.7181 13.0331 13.7986 12.9555 13.9053 12.8543Z"
                    fill="black"
                  />
                  <path
                    d="M16.1839 8.51836C16.2419 8.67526 16.227 8.7748 16.2195 8.87434C16.2157 8.92664 16.1633 8.93507 16.1146 8.93001C16.0472 8.92326 16.051 8.88446 16.0678 8.83891C16.1015 8.75118 16.1315 8.66345 16.1839 8.51836Z"
                    fill="black"
                  />
                  <path
                    d="M11.0238 16.2721C10.9639 16.2147 11.0054 16.1376 10.9773 16.0752C10.938 15.9858 10.8462 16.0263 10.777 16.0195C10.7039 16.0128 10.6609 16.0431 10.6609 16.1157C10.6609 16.1916 10.6609 16.2675 10.6609 16.3434C10.5354 16.0499 10.5954 15.9537 10.8912 15.9756C11.1533 15.9942 10.9901 16.1691 11.0238 16.2721Z"
                    fill="black"
                  />
                  <path
                    d="M9.77327 15.4744C9.65906 15.5554 9.5823 15.6212 9.47745 15.6533C9.4475 15.5194 9.5461 15.4598 9.77327 15.4744Z"
                    fill="black"
                  />
                  <path
                    d="M14.9632 7.48528C15.0268 7.52915 15.0362 7.53252 15.0362 7.53758C15.0512 7.65062 15.0961 7.76703 15.0081 7.87331C15.0025 7.88006 14.9688 7.87838 14.965 7.87331C14.9107 7.75184 14.98 7.63881 14.9632 7.48359V7.48528Z"
                    fill="black"
                  />
                  <path
                    d="M13.8416 3.70939C13.6825 3.70939 13.5626 3.70939 13.4428 3.70939C13.396 3.70939 13.3754 3.6824 13.3792 3.64022C13.3848 3.59298 13.4185 3.58624 13.4597 3.59805C13.5739 3.63179 13.7031 3.61998 13.8416 3.70939Z"
                    fill="black"
                  />
                  <path
                    d="M15.0233 7.35704C14.9634 7.34523 14.9634 7.31487 14.9615 7.28956C14.9596 7.19508 14.9615 7.1006 14.9615 7.00781C14.9821 7.0095 15.0177 7.00781 15.0214 7.01456C15.072 7.12928 15.0701 7.24232 15.0233 7.35704Z"
                    fill="black"
                  />
                  <path
                    d="M12.8515 7.90072C12.8515 7.81637 12.844 7.75394 12.8533 7.6949C12.8646 7.63753 12.7953 7.5245 12.9189 7.53462C13.0181 7.54137 12.9432 7.63922 12.9451 7.69321C12.9469 7.75901 12.9264 7.82818 12.8496 7.90072H12.8515Z"
                    fill="black"
                  />
                  <path
                    d="M14.6694 13.0334C14.7012 12.9153 14.6207 12.8158 14.7611 12.782C14.7854 12.7753 14.8416 12.7921 14.8416 12.8006C14.8491 12.8917 14.7929 12.9524 14.6694 13.0334Z"
                    fill="black"
                  />
                  <path
                    d="M12.8665 7.06875C12.9451 7.1666 12.9807 7.26783 12.9432 7.38086C12.9414 7.3893 12.8908 7.39605 12.8833 7.38761C12.8009 7.28639 12.8702 7.17504 12.8646 7.06875H12.8665Z"
                    fill="black"
                  />
                  <path
                    d="M12.6658 4.92952C12.5197 5.00207 12.3831 4.94808 12.2464 4.9059C12.3868 4.88566 12.5272 4.87047 12.6658 4.92952Z"
                    fill="black"
                  />
                  <path
                    d="M13.3119 13.5492C13.3512 13.5526 13.3606 13.5762 13.3625 13.6066C13.3662 13.6639 13.3437 13.7027 13.2726 13.7011C13.2445 13.7011 13.2033 13.7011 13.2146 13.6589C13.2277 13.6116 13.2557 13.5695 13.3119 13.5492Z"
                    fill="black"
                  />
                  <path
                    d="M13.5328 11.9477C13.5122 11.8785 13.4598 11.8009 13.5628 11.7553C13.5852 11.7452 13.6433 11.752 13.647 11.7638C13.6789 11.8515 13.5871 11.8886 13.5328 11.9477Z"
                    fill="black"
                  />
                  <path
                    d="M11.8814 3.20258C11.7634 3.20258 11.6792 3.24476 11.6118 3.1739C11.6024 3.16378 11.6099 3.11991 11.6174 3.11822C11.711 3.09629 11.7821 3.14016 11.8814 3.20258Z"
                    fill="black"
                  />
                  <path
                    d="M12.1511 4.91939H11.6886C11.8197 4.89577 11.9508 4.87047 12.1511 4.91939Z"
                    fill="black"
                  />
                  <path
                    d="M80.7494 5.80898C80.7344 6.15989 80.7494 6.51081 80.7438 6.86173C80.7401 7.13504 80.6876 7.17384 80.3881 7.18903C80.2009 7.19746 80.0061 7.1536 79.7946 7.23964C79.9462 7.34593 80.0979 7.30712 80.2346 7.30712C80.7307 7.31219 80.7438 7.32231 80.7438 7.77108C80.7438 9.5341 80.7438 11.2971 80.7457 13.0601C80.7457 13.1563 80.6933 13.3301 80.8262 13.3301C80.991 13.3301 80.9217 13.1546 80.9217 13.0551C80.9273 11.3275 80.9254 9.59989 80.9254 7.8723C80.9254 7.78795 80.9236 7.70359 80.9292 7.61924C80.9441 7.3881 81.0153 7.31893 81.2737 7.31218C81.6013 7.30206 81.929 7.30712 82.2566 7.3105C82.3427 7.3105 82.4289 7.31893 82.4981 7.37461V7.12154C82.0563 7.11986 81.6125 7.11817 81.1707 7.11648C81.0827 7.11648 81.0003 7.1266 81.0059 7.00513C81.0247 6.57155 80.9666 6.13796 81.0415 5.70607C81.1407 5.13076 81.504 4.85408 82.1499 4.84564C82.266 4.84564 82.382 4.84564 82.5 4.84564V4.59258C82.309 4.67187 82.1031 4.62126 81.9027 4.65163C81.2044 4.75454 80.7775 5.16788 80.7513 5.80898H80.7494Z"
                    fill="black"
                  />
                  <path
                    d="M80.6726 6.01424C80.6726 6.31624 80.6632 6.61823 80.6763 6.92022C80.6819 7.07037 80.6482 7.13617 80.4629 7.12098C80.2532 7.10411 80.0416 7.12098 79.8319 7.11592C79.7214 7.11255 79.684 7.14123 79.6859 7.24414C79.6877 7.34368 79.7027 7.39767 79.8356 7.39092C80.0453 7.3808 80.2569 7.39767 80.4666 7.38586C80.6295 7.37573 80.6763 7.42129 80.6763 7.57144C80.6688 8.48416 80.6726 9.39688 80.6726 10.3096C80.6726 11.2999 80.6763 12.2903 80.6688 13.2789C80.6688 13.4206 80.7175 13.4476 80.8635 13.451C81.0583 13.4544 81.004 13.3413 81.004 13.2553C81.004 11.3742 81.0096 9.49136 81.0002 7.61024C81.0002 7.41623 81.062 7.37742 81.2605 7.38248C81.6723 7.39261 82.0862 7.37967 82.4981 7.37461C82.4289 7.31893 82.3446 7.3105 82.2566 7.3105C81.929 7.30712 81.6013 7.30206 81.2737 7.31218C81.0153 7.31893 80.9441 7.3881 80.9292 7.61924C80.9236 7.70359 80.9254 7.78795 80.9254 7.8723C80.9254 9.59989 80.9254 11.3275 80.9217 13.0551C80.9217 13.1529 80.991 13.3284 80.8262 13.3301C80.6951 13.3301 80.7457 13.1563 80.7457 13.0601C80.7419 11.2971 80.7438 9.5341 80.7438 7.77108C80.7438 7.32231 80.7288 7.31387 80.2346 7.30712C80.096 7.30712 79.9462 7.34593 79.7946 7.23964C80.0061 7.1536 80.2009 7.19746 80.3881 7.18903C80.6876 7.17553 80.7382 7.13504 80.7438 6.86173C80.7494 6.51081 80.7344 6.15989 80.7494 5.80898C80.7756 5.16788 81.2024 4.75398 81.9008 4.65107C82.0992 4.62239 82.307 4.67131 82.498 4.59202C81.3316 4.44355 80.6744 4.95474 80.6726 6.01424Z"
                    fill="black"
                  />
                  <path
                    d="M49.7517 4.63467C48.3793 4.46596 47.0182 4.56719 45.6552 4.73758C45.4342 4.76458 45.4043 4.84387 45.4062 5.01596C45.4118 6.3707 45.4099 7.72713 45.4099 9.08187C45.4099 10.4585 45.4118 11.8352 45.4062 13.2119C45.4062 13.3502 45.438 13.4127 45.6046 13.416C45.7825 13.4194 45.9604 13.4565 46.1382 13.4683C47.4058 13.5544 48.6752 13.6185 49.9296 13.3587C51.1952 13.0955 52.2362 12.5337 52.9252 11.5113C53.5206 10.6306 53.6947 9.66054 53.6779 8.64491C53.6442 6.50398 52.1033 4.92485 49.7498 4.63467H49.7517ZM51.2495 9.95579C50.9537 10.9225 50.1299 11.545 49.014 11.68C48.6171 11.7272 48.2202 11.7121 47.8233 11.7256C47.6623 11.7306 47.6323 11.6766 47.6342 11.545C47.6398 10.7082 47.6379 9.87312 47.6379 9.03632C47.6379 8.2147 47.6435 7.39308 47.6342 6.56978C47.6342 6.41625 47.6772 6.36226 47.8514 6.35889C48.4205 6.34876 48.9916 6.32852 49.5476 6.4618C50.5587 6.70474 51.1653 7.28679 51.3431 8.22313C51.4536 8.80687 51.4255 9.38555 51.2514 9.9541L51.2495 9.95579Z"
                    fill="black"
                  />
                  <path
                    d="M31.4073 4.48783C29.5668 4.21115 28.0128 4.72403 26.9044 6.12263C26.105 7.13321 25.8897 8.29393 25.9833 9.50865C26.0563 10.445 26.3577 11.3172 27.0093 12.0629C27.9847 13.1798 29.2916 13.6319 30.84 13.5239C32.2385 13.4261 33.3694 12.8694 34.1707 11.8166C34.8335 10.9444 35.0432 9.95573 35.0563 8.91985C35.0544 8.41203 35.0039 7.90928 34.8466 7.42002C34.3355 5.8392 33.2496 4.76621 31.4073 4.48783ZM32.3509 10.6323C31.9671 11.3105 31.3754 11.7255 30.5029 11.7154C29.6492 11.7053 29.0557 11.2936 28.6681 10.6323C28.3199 10.0384 28.245 9.39561 28.2862 8.73427C28.318 8.23151 28.4229 7.74731 28.6812 7.29686C29.2766 6.2576 30.6808 5.91681 31.6731 6.57815C32.2273 6.94763 32.4932 7.48244 32.6486 8.06786C32.7272 8.36142 32.7646 8.66172 32.7572 8.9654C32.7515 9.54745 32.6467 10.1109 32.3509 10.6339V10.6323Z"
                    fill="black"
                  />
                  <path
                    d="M23.5645 8.13668C23.0889 7.94772 22.5853 7.81275 22.1565 7.53438C21.9 7.36905 21.7802 7.15141 21.8308 6.86292C21.8832 6.56767 22.0985 6.41077 22.3906 6.32979C22.7257 6.237 23.0702 6.26062 23.411 6.3028C23.8996 6.36353 24.3228 6.5778 24.7403 6.79375C24.8451 6.84773 24.8938 6.85279 24.935 6.7347C25.1203 6.22182 25.3113 5.71231 25.5098 5.20281C25.5453 5.11171 25.5322 5.07122 25.4386 5.0206C25.0679 4.82321 24.686 4.6545 24.2628 4.56846C23.1282 4.33564 22.0199 4.34576 20.9789 4.88395C19.3594 5.72075 19.2283 7.54282 20.1176 8.5399C20.6231 9.10676 21.3028 9.43743 22.0367 9.69387C22.4149 9.82547 22.7931 9.95369 23.1282 10.1646C23.4578 10.3721 23.5795 10.6589 23.5158 11.0081C23.4559 11.3439 23.2069 11.5328 22.8643 11.629C22.4598 11.742 22.0498 11.7184 21.6398 11.6526C21.0519 11.5581 20.5445 11.3 20.0577 11.0064C19.9398 10.9356 19.8967 10.9457 19.8574 11.0739C19.6982 11.5784 19.5335 12.0828 19.3519 12.5822C19.3032 12.7172 19.335 12.7779 19.4586 12.8538C20.2824 13.3599 21.211 13.5185 22.1827 13.5388C22.6789 13.5489 23.1638 13.4899 23.6338 13.3532C25.9348 12.6902 26.18 10.5526 25.3843 9.40369C24.9537 8.77946 24.2891 8.4218 23.5664 8.1333L23.5645 8.13668Z"
                    fill="black"
                  />
                  <path
                    d="M41.4261 11.6862C40.3346 11.6946 39.243 11.6862 38.1515 11.6946C37.9456 11.6963 37.895 11.6508 37.8969 11.4652C37.9044 9.26691 37.9006 7.06862 37.9062 4.87032C37.9062 4.72017 37.8782 4.66787 37.6947 4.67125C37.0937 4.68306 36.4945 4.68474 35.8935 4.67125C35.7007 4.66787 35.667 4.72523 35.667 4.88382C35.6726 6.28918 35.6707 7.69284 35.6707 9.0982C35.6707 10.517 35.6726 11.9359 35.667 13.3548C35.667 13.4982 35.7044 13.5454 35.8711 13.5437C37.734 13.5386 39.5988 13.5386 41.4617 13.5437C41.604 13.5437 41.6452 13.5133 41.6433 13.3817C41.6339 12.8824 41.6321 12.3847 41.6433 11.8853C41.647 11.7267 41.6021 11.6862 41.4261 11.6879V11.6862Z"
                    fill="black"
                  />
                  <path
                    d="M44.0957 4.67131C43.4947 4.67974 42.8956 4.68143 42.2946 4.67131C42.1055 4.66793 42.0493 4.70336 42.0512 4.88388C42.0606 6.28924 42.0568 7.6929 42.0568 9.09826C42.0568 10.5171 42.0587 11.936 42.0531 13.3548C42.0531 13.4982 42.0849 13.5455 42.2534 13.5421C42.8619 13.532 43.4704 13.5336 44.0789 13.5421C44.2343 13.5438 44.2923 13.5168 44.2923 13.3616C44.2867 10.5239 44.2867 7.68616 44.2923 4.84845C44.2923 4.7118 44.2549 4.66962 44.0976 4.67299L44.0957 4.67131Z"
                    fill="black"
                  />
                  <path
                    d="M58.6678 4.68318C57.625 4.65113 56.5784 4.67475 55.5337 4.66294C55.3521 4.66125 55.3034 4.70343 55.3034 4.86876C55.3109 6.25894 55.3071 7.64911 55.3071 9.04097V12.3494C55.3071 12.6649 55.3127 12.982 55.3034 13.2975C55.2996 13.4156 55.3408 13.4443 55.4719 13.4527C55.6572 13.4645 55.6479 13.3768 55.6479 13.2638C55.646 12.211 55.6479 11.1566 55.6479 10.1038C55.6479 9.89351 55.7608 9.78835 55.9868 9.78835C56.7506 9.78835 57.5145 9.78666 58.2784 9.78835C58.6229 9.78835 58.9618 9.76136 59.2988 9.69219C61.3358 9.2721 62.1802 7.01644 60.8341 5.57397C60.2724 4.97168 59.5141 4.71018 58.6678 4.68487V4.68318ZM61.0906 7.54957C60.9015 8.68667 60.0177 9.42394 58.7034 9.47624C57.7392 9.51504 56.7712 9.48973 55.8051 9.49986C55.6554 9.49986 55.646 9.43912 55.646 9.33283C55.6497 8.631 55.646 7.92917 55.646 7.22565C55.646 6.53056 55.6497 5.83547 55.6423 5.14039C55.6423 4.99361 55.6853 4.94975 55.8501 4.95143C56.6926 4.95818 57.5332 4.95312 58.3758 4.95481C58.8719 4.95481 59.3512 5.03579 59.8024 5.2298C60.7442 5.63471 61.2534 6.55587 61.0887 7.54788L61.0906 7.54957Z"
                    fill="black"
                  />
                  <path
                    d="M69.0776 7.02176C67.8232 6.97959 66.7635 7.53633 66.2748 8.57052C65.7206 9.738 65.7169 10.9325 66.3272 12.0814C67.2821 13.8748 70.1448 14.0722 71.4123 12.4525C71.9216 11.8013 72.0788 11.059 72.0882 10.2222C72.0732 10.0062 72.0639 9.73293 72.0152 9.463C71.7493 7.99522 70.6447 7.07575 69.0776 7.02345V7.02176ZM71.3561 11.9295C70.89 12.8406 70.0381 13.2758 68.9334 13.2556C67.7839 13.2354 66.9807 12.7191 66.5313 11.7659C66.3048 11.2868 66.2317 10.7823 66.2336 10.2644C66.2336 9.60809 66.3553 8.97711 66.7429 8.41025C67.2821 7.62069 68.0928 7.26639 69.1038 7.30182C70.0905 7.33556 70.8656 7.7371 71.3093 8.53847C71.9253 9.65195 71.9328 10.8042 71.3561 11.9295Z"
                    fill="black"
                  />
                  <path
                    d="M73.7059 7.98134C73.1311 8.65955 72.9401 9.44068 72.9383 10.4378C72.9345 10.7617 73 11.2408 73.1854 11.7014C73.6048 12.7406 74.3986 13.3952 75.6381 13.5184C76.9168 13.6449 77.9896 13.267 78.6131 12.2126C79.347 10.9692 79.3489 9.66844 78.6581 8.40817C77.6789 6.6266 74.8573 6.62491 73.7078 7.98134H73.7059ZM78.2368 12.1822C77.6601 13.0814 76.6922 13.3683 75.5838 13.2265C74.5465 13.0933 73.8856 12.518 73.5243 11.6508C73.3389 11.2054 73.2734 10.7397 73.2771 10.2657C73.2809 9.56553 73.4213 8.89743 73.8613 8.30357C74.8761 6.93196 77.2726 6.93702 78.2274 8.36094C79.0606 9.60264 79.0419 10.927 78.2368 12.1805V12.1822Z"
                    fill="black"
                  />
                  <path
                    d="M65.505 7.0574C65.0501 6.98485 64.6045 7.00847 64.1832 7.19912C63.6721 7.43025 63.3931 7.83347 63.1666 8.29404C63.1666 7.96337 63.1647 7.63439 63.1666 7.30372C63.1666 7.19405 63.1834 7.1097 62.9962 7.10801C62.7959 7.10801 62.8371 7.21261 62.8371 7.31046C62.8371 9.29112 62.8371 11.2718 62.8371 13.2507C62.8371 13.3503 62.7977 13.4515 62.9999 13.4515C63.1928 13.4515 63.1666 13.3587 63.1666 13.2541C63.1666 12.0327 63.1666 10.8095 63.1666 9.58805C63.1666 9.36198 63.1722 9.1376 63.219 8.91658C63.3538 8.27717 63.6421 7.7238 64.3405 7.43531C64.8104 7.24129 65.2953 7.26997 65.7747 7.42519C65.8233 7.11982 65.8196 7.10464 65.505 7.05571V7.0574Z"
                    fill="black"
                  />
                  <path
                    d="M9.11813 10.9232C9.10128 10.9789 9.14996 11.0784 9.05448 11.0767C8.91967 11.0767 8.98707 10.962 8.98146 10.8996C8.97584 10.8473 8.94214 10.7494 9.04699 10.7545C9.15932 10.7612 9.09941 10.8641 9.12001 10.9215L9.11813 10.9232Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <img className="absolute right-0 z-[1]" src={bg_img_pepe} alt="" />

      </div>
    
    </div>
  );
}

export default HeroWalletSec;

{
  /*
  <div className="block space-y-[5rem]">
    <div className="flex justify-center">
      <Widget
      project="doge"
      symbol="DOPE"
      theme={{ bg: "#f2b60f" }}
      className="scale-[0.7] -m-16 w-[calc(100%+7.5rem)] xs:transform-none xs:m-auto xs:w-full"
    />; */
}

{
  /* <Widget
  project="pepe"
  symbol="PEGE"
  theme={{ bg: "#4eb52a" }}
  className="scale-[0.7] -m-16 w-[calc(100%+7.5rem)] xs:transform-none xs:m-auto xs:w-full"
/>; */
}

