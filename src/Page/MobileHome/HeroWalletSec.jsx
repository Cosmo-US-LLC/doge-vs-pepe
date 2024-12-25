import React, {useState} from "react";
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
  const [selectedItem, setSelectedItem] = useState(options[0])
  const [selectedItempepe, setSelectedItempepe] = useState(options[0])
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

  return (
    <div className="w-[100%] bgwltsecmob w-[100%] pt-[30px] pb-[50px]">
      <div className="max-w-[922px] w-[90%] mx-auto ">
        <div className="block space-y-[5rem]">
      <div className="flex justify-end">
      <div className=" max-w-[216.31px] bg-[#F2B60F] w-[100%] space-y-[10px]  px-[13px] pb-[15px] pt-[15px] rounded-[24px] border border-[#fff]">
            <div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
              {Buybuttons.map((button) => (
                <div
                  key={button.id}
                  onClick={() => setActiveButton(button.id)}
                  className={`w-[63.8px] rounded-[30px] py-[1px] space-x-[4px] flex justify-center items-center cursor-pointer ${
                    activeButton === button.id ? "bg-[#EFAB00] border border-black" : "text-[#000]"
                  }`}
                >
                  <img src={button.img} className="h-[12px]" alt={button.label} />
                  <p
                    className={`text-[9.832px] font-[700] ${
                      activeButton === button.id ? "text-[#000]" : "text-[#000]"
                    }`}
                  >
                    {button.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-[8px]">
              <h3 className="text-[20.484px] font-[700] text-center leading-[88%] text-[#00]">
              Buy $DOPE
              </h3>
              <h5 className="text-[#000] leading-[183.333%] text-[9.832px] font-[700] text-center">
              1 GG = $0.0005
              </h5>
            </div>
            <div className=" pb-1 space-y-[4px]">
              <div className="bg-[#FFFFFF47] w-[100%] h-[8px] rounded-[30px]">
                <div className="bg-[#000] h-[8px] w-[60%] rounded-[30px]"></div>
              </div>
              <div className="flex justify-between">
                <h4 className="text-[9.832px] font-[600] text-[#000]">
                  USD Raised
                </h4>
                <h5 className="text-[9.832px] font-[600] text-[#000]">
                  $1,252,523 / $2,000,000
                </h5>
              </div>
            </div>
            <div className="bg-[#00000078] px-2 flex relative z-[9] justify-between items-center  py-2 rounded-[8px]">
              <div className="">
                <h5 className="text-[#fff] text-[8.194px] leading-[5px] font-[600]">
                  You pay
                </h5>
                <input
                  type="text"
                  className="text-[#fff] w-[73px] text-[9.832px] font-[700] bg-[transparent] outline-none"
                  defaultValue={1}
                />
              </div>

              <div className="relative max-w-[205px] w-[100%] inline-block text-left">
                <div
                  className="flex items-center justify-between space-x-1 cursor-pointer  p-1 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A]"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                 <div className="flex items-center space-x-2">
                 <img
                    src={selectedItem.img}
                    className="w-[12px] h-[12px]"
                    alt="Selected Icon"
                  />
                  <h5 className="text-[8.194px] text-[#fff] leading-[80%] font-[400]">
                    {selectedItem.text}
                  </h5>
                 </div>
                  <img
                    src={arw}
                    className="w-[9px] h-[9px]"
                    alt="Arrow Icon"
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute mt-2 w-full bg-[#191F1F] rounded-md shadow-lg">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-800  cursor-pointer"
                        onClick={() => handleSelect(option)}
                      >
                        <img
                          src={option.img}
                          className="w-[12px] h-[12px]"
                          alt={`Option ${index + 1}`}
                        />
                        <h5 className="text-[9px] text-[#fff] font-[400]">
                          {option.text}
                        </h5>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#00000078] relative z-[1] px-2 flex justify-between items-center  py-2 rounded-[8px]">
              <div className="w-[50%]">
                <h5 className="text-[#fff] text-[8.194px] leading-[5px] font-[600]">
                  You receive
                </h5>
                <input
                  type="text"
                  className="text-[#fff] text-[9.832px] font-[700] bg-[transparent] outline-none"
                  defaultValue={`7,414,420`}
                />
              </div>

              <div className="relative max-w-[203px] w-[100%] inline-block text-left">
                <div className="flex items-center justify-center space-x-1 cursor-pointer  p-1 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A] w-[100%]">
                  <img
                    src={ggicon}
                    className="w-[12px] h-[12px]"
                    alt="Selected Icon"
                  />
                  <h5 className="text-[8.194px] text-[#fff] font-[600]">
                    GG (ERC-20)
                  </h5>
                </div>
              </div>
            </div>
            <div className=" space-y-[10px]">
              <h5 className="text-[#000] text-[9.832px] font-[700] text-center">Accepting</h5>
              <div className="flex space-x-2 justify-center">
                {iconsData.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    className="h-[12px] w-[12px]"
                    alt={`Icon`}
                  />
                ))}
              </div>
            </div>
            <div className="">
             <div className="flex justify-center">
             <button className="bg-[#000] text-[#FFF] max-w-[166.331px] mx-auto w-[100%] h-[22.123px] text-[11.471px] font-[700] rounded-[50px]">Connect Wallet</button>
             </div>
            <p className="text-[8.031px] text-center">Max Buy-in $10'000</p>
            </div>
          </div>
      </div>
      <div className="flex justify-start">
      <div className=" max-w-[216.31px] bg-[#F2B60F] w-[100%] space-y-[10px]  px-[13px] pb-[15px] pt-[15px] rounded-[24px] border border-[#fff]"
      style={{
        background: "linear-gradient(180deg, #4EB52A 64.5%, #4EB52A 100%)"
      }}>
            <div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
              {Buybuttons.map((button) => (
                <div
                  key={button.id}
                  onClick={() => setActiveButtonpepe(button.id)}
                  className={`w-[63.8px] rounded-[30px] py-[1px] space-x-[4px] flex justify-center items-center cursor-pointer ${
                    activeButtonpepe === button.id ? "bg-[#4EB52A] border border-black" : "text-[#000]"
                  }`}
                >
                  <img src={button.img} className="h-[12px]" alt={button.label} />
                  <p
                    className={`text-[9.832px] font-[700] ${
                        activeButtonpepe === button.id ? "text-[#000]" : "text-[#000]"
                    }`}
                  >
                    {button.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-[8px]">
              <h3 className="text-[20.484px] font-[700] text-center leading-[88%] text-[#00]">
              $PEGE
              </h3>
              <h5 className="text-[#000] leading-[183.333%] text-[9.832px] font-[700] text-center">
              1 GG = $0.0005
              </h5>
            </div>
            <div className=" pb-1 space-y-[4px]">
              <div className="bg-[#FFFFFF47] w-[100%] h-[8px] rounded-[30px]">
                <div className="bg-[#000] h-[8px] w-[60%] rounded-[30px]"></div>
              </div>
              <div className="flex justify-between">
                <h4 className="text-[9.832px] font-[600] text-[#000]">
                  USD Raised
                </h4>
                <h5 className="text-[9.832px] font-[600] text-[#000]">
                  $1,252,523 / $2,000,000
                </h5>
              </div>
            </div>
            <div className="bg-[#00000078] px-2 flex relative z-[9] justify-between items-center  py-2 rounded-[8px]">
              <div className="">
                <h5 className="text-[#fff] text-[8.194px] leading-[5px] font-[600]">
                  You pay
                </h5>
                <input
                  type="text"
                  className="text-[#fff] w-[73px] text-[9.832px] font-[700] bg-[transparent] outline-none"
                  defaultValue={1}
                />
              </div>

              <div className="relative max-w-[205px] w-[100%] inline-block text-left">
                <div
                  className="flex items-center justify-between space-x-1 cursor-pointer  p-1 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A]"
                  onClick={() => setIsDropdownOpenpepe((prev) => !prev)}
                >
                 <div className="flex items-center space-x-2">
                 <img
                    src={selectedItempepe.img}
                    className="w-[12px] h-[12px]"
                    alt="Selected Icon"
                  />
                  <h5 className="text-[8.194px] text-[#fff] leading-[80%] font-[400]">
                    {selectedItempepe.text}
                  </h5>
                 </div>
                  <img
                    src={arw}
                    className="w-[9px] h-[9px]"
                    alt="Arrow Icon"
                  />
                </div>

                {isDropdownOpenpepe && (
                  <div className="absolute mt-2 w-full bg-[#191F1F] rounded-md shadow-lg">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-800  cursor-pointer"
                        onClick={() => handleSelectpepe(option)}
                      >
                        <img
                          src={option.img}
                          className="w-[12px] h-[12px]"
                          alt={`Option ${index + 1}`}
                        />
                        <h5 className="text-[9px] text-[#fff] font-[400]">
                          {option.text}
                        </h5>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#00000078] relative z-[1] px-2 flex justify-between items-center  py-2 rounded-[8px]">
              <div className="w-[50%]">
                <h5 className="text-[#fff] text-[8.194px] leading-[5px] font-[600]">
                  You receive
                </h5>
                <input
                  type="text"
                  className="text-[#fff] text-[9.832px] font-[700] bg-[transparent] outline-none"
                  defaultValue={`7,414,420`}
                />
              </div>

              <div className="relative max-w-[203px] w-[100%] inline-block text-left">
                <div className="flex items-center justify-center space-x-1 cursor-pointer  p-1 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A] w-[100%]">
                  <img
                    src={ggicon}
                    className="w-[12px] h-[12px]"
                    alt="Selected Icon"
                  />
                  <h5 className="text-[8.194px] text-[#fff] font-[600]">
                    GG (ERC-20)
                  </h5>
                </div>
              </div>
            </div>
            <div className=" space-y-[10px]">
              <h5 className="text-[#000] text-[9.832px] font-[700] text-center">Accepting</h5>
              <div className="flex space-x-2 justify-center">
                {iconsData.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    className="h-[12px] w-[12px]"
                    alt={`Icon`}
                  />
                ))}
              </div>
            </div>
            <div className="">
             <div className="flex justify-center">
             <button className="bg-[#000] text-[#FFF] max-w-[166.331px] mx-auto w-[100%] h-[22.123px] text-[11.471px] font-[700] rounded-[50px]">Connect Wallet</button>
             </div>
            <p className="text-[8.031px] text-center">Max Buy-in $10'000</p>
            </div>
          </div>
      </div>
        
        </div>
      </div>
    </div>
  );
}

export default HeroWalletSec;
