import React from "react";
import Logo from "../../assets/navbar/navLogo.svg";
import howitimg from "../../assets/HowItSec/how-it-img.png";
import telicon1 from "../../assets/HowItSec/logos_telegram.svg";
import telicon2 from "../../assets/HowItSec/logos_telegram (1).svg";
import vecleft from "../../assets/HowItSec/P (43).png";
import vecright from "../../assets/HowItSec/P (43) (1).png";
function HowItSecPlaceholder() {
  return (
    <div className="w-[100%] h-[100vh] bg-black overflow-hidden pt-[60px] pb-[80px]">
      <div className="max-w-[992px] px-[22px] py-[10px] rounded-[26.9px] space-y-[23px] w-[100%] mx-auto relative min-h-[500px] bg-[#01010182]">
        <div className="space-y-[20px]">
          <img
            className="w-[340px] h-auto mx-auto cursor-pointer"
            src={Logo}
            alt="Logo"
            onClick={(e) => handleScroll(e, "what-is", 90)}
          />
          <p className="text-[#fff] leading-[114%] font-[400] text-[20px] text-center">
            Chapter I
          </p>
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[50px] leading-[104.377%] font-[400]">
            How It All Began
          </h3>
          <p className="max-w-[535px] w-[100%] font-[400] mx-auto text-[#fff] leading-[114%] text-[20px] text-center">
            Doge has been the undefeated meme heavyweight champion for years.
            But now, Pepe, the rising star in the meme world, has made it to the
            top 3 and is ready to challenge him. These two have a long history
            and an Intense rivalry.
          </p>
          <div className="flex justify-center">
            <img src={howitimg} alt="" />
          </div>
          <div className="space-y-[23px]">
            <h4 className="text-[#fff] leading-[114%] font-[400] text-[20px] text-center">
              Follow us on social media to keep up with the story!
            </h4>
            <div className="flex justify-center space-x-[4rem]">
              <div className="flex justify-center items-center space-x-2">
                <p className="text-[18px] font-[600] text-[#fff] uppercase">
                  {" "}
                  Join X
                </p>
                <img className="cursor-pointer" src={telicon1} alt="" />
              </div>
              <div className="flex justify-center items-center space-x-2">
                <p className="text-[18px] font-[600] text-[#fff] uppercase">
                  {" "}
                  Join Telegram
                </p>
                <img className="cursor-pointer" src={telicon2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <img
          src={vecleft}
          className="absolute bottom-[-10%] left-[-32%]"
          alt=""
        />
        <img
          src={vecright}
          className="absolute bottom-[-10%] right-[-35%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default HowItSecPlaceholder;
