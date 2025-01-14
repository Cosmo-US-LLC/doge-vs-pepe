import React from "react";
import Logo from "../../assets/navbar/navLogo.svg";
import howitimg from "../../assets/HowItSec/how-it-img.png";
import howitimg2 from "../../assets/HowItSec/newsImage.png";
import telicon1 from "../../assets/HowItSec/logos_telegram.svg";
import telicon2 from "../../assets/HowItSec/logos_telegram (1).svg";
import pepePlace from "../../assets/HowItSec/pepePlace.png";
import dogePlace from "../../assets/HowItSec/dogePlace.png";
import topLogo from "../../assets/HowItSec/topLogo.png";
import vecleft from "../../assets/HowItSec/P (43).png";
import vecright from "../../assets/HowItSec/P (43) (1).png";
function HowItSecPlaceholder() {
  return (
    <div className="w-[100%] min-h-screen bg-black max-2xl:pt-[60px] pt-[30px] pb-[80px]">
      <div className="max-w-[992px] 2xl:max-w-[1440px] px-[22px] pb-[10px] rounded-[26.9px] space-y-[23px] w-[100%] mx-auto relative min-h-[500px] bg-[#01010182]">
          <img
            className="w-[237px] lg:w-[328px] 2xl:w-[340px] h-auto mx-auto cursor-pointer"
            src={topLogo}
            alt="Logo"
            onClick={(e) => handleScroll(e, "what-is", 90)}
          />
        <div className="space-y-[20px] gradient-box-black">
          <p className="text-[#fff] leading-[114%] font-[400] text-[12px] lg:text-[20px] 2xl:text-[30px] text-center">
            Chapter I
          </p>
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[21px] lg:text-[37px] 2xl:text-[50px] leading-[80.377%] font-[400]">
            How It All Began
          </h3>
          <p className="w-[100%] font-[400] px-2 mx-auto text-[#fff] leading-[114%] text-[12px] lg:text-[20px] 2xl:text-[30px] text-center">
            The rivalry started when Pepe, the rising star, climbed to #3 among
            all meme heavyweight champions and called out Doge, the undefeated
            champion. Doge couldn’t let this slide. After months of
            back-of-forth insults on social media, they ran into each other at
            MOON, the city’s hottest nightclub. Things escalated quickly,
            turning into a big fight with serious consequences.
          </p>
          <div className="flex justify-center gradient-box-black-3 lg:gradient-box-black-2 rounded-[48px] w-fit mx-auto p-1 px-2 lg:p-3 lg:px-5">
            <img src={howitimg2} alt="" className="h-[156px] lg:h-[355px] 2xl:h-[449px] w-auto" />
          </div>
          <div className="flex justify-center max-lg:flex-col pt-2 2xl:pt-3  pb-40 lg:pb-8 2xl:pb-10 gap-y-2 gap-x-8">
            <h4 className="hidden lg:block text-[#fff] leading-[114%] font-HiJack text-[21px] lg:text-[37px] 2xl:text-[50px] text-center">
              MORE INFO
              <br />
              COMING SOON
            </h4>
            <h4 className="lg:hidden text-[#fff] leading-[114%] font-HiJack text-[21px] lg:text-[37px] 2xl:text-[50px] text-center">
              MORE INFO COMING SOON
            </h4>
            <div className="">
              <p className="text-center text-[12px] lg:text-[22px] text-[#fff]">
                Get updates on
              </p>
              <div className="flex justify-center items-center space-x-2 pt-1">
                <img className="cursor-pointer w-[22px] lg:w-[45px] h-[22px] lg:h-[45px]" src={telicon1} alt="" />
                <img className="cursor-pointer w-[22px] lg:w-[45px] h-[22px] lg:h-[45px]" src={telicon2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={dogePlace}
        className="absolute -bottom-10 lg:bottom-0 -left-9 lg:left-0 h-[266px] lg:h-[440px] xl:h-[540px] 2xl:h-[736px]"
        alt=""
      />
      <img
        src={pepePlace}
        className="absolute -bottom-10 lg:bottom-0 -right-9 lg:right-0 h-[260px] lg:h-[452px] xl:h-[552px] 2xl:h-[700px]"
        alt=""
      />
    </div>
  );
}

export default HowItSecPlaceholder;
