import React from "react";
import Logo from "../../assets/navbar/navLogo.svg";
import howitimg from "../../assets/HowItSec/how-it-img.png";
import howitimg2 from "../../assets/HowItSec/newsImage.png";
import telicon1 from "../../assets/HowItSec/logos_telegram.svg";
import telicon2 from "../../assets/HowItSec/logos_telegram (1).svg";
import pepePlace from "../../assets/HowItSec/pepePlace.webp";
import dogePlace from "../../assets/HowItSec/dogePlace.webp";
import pepePlaceMob from "../../assets/HowItSec/pepePlaceMob.webp";
import dogePlaceMob from "../../assets/HowItSec/dogePlaceMob.webp";
import topLogo from "../../assets/HowItSec/topLogo.webp";
import vecleft from "../../assets/HowItSec/P (43).png";
import vecright from "../../assets/HowItSec/P (43) (1).png";
function HowItSecPlaceholder() {
  return (
    <div className="flex flex-col lg:justify-center max-lg:pt-[5dvh] w-[100%] h-[100dvh] bg-black overflow-hidden">
      <div className="flex flex-col justify-center max-w-[1089px] 3xl:max-w-[1440px] px-[22px] space-y-[23px] w-[100%] mx-auto relative min-h-[500px] overflow-hidden">
        <img
          className="w-[237px] lg:w-[280px] 3xl:w-[340px] h-auto mx-auto cursor-pointer"
          src={topLogo}
          alt="Logo"
          onClick={(e) => handleScroll(e, "what-is", 90)}
        />
        <div className="space-y-[20px] gradient-box-black pb-3">
          <p className="text-[#fff] -mt-1.5 lg:-mt-2 leading-[10px] bg-gradient-to-r from-transparent via-black to-transparent font-[400] text-[12px] lg:text-[18px] 3xl:text-[25px] text-center">
            Chapter I
          </p>
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[21px] lg:pt-3 lg:text-[37px] 3xl:text-[50px] leading-[80.377%] font-[400]">
            How It All Began
          </h3>
          <p className="w-[100%] font-[400] px-2 mx-auto text-[#fff] leading-[114%] text-[12px] lg:text-[18px] 3xl:text-[25px] text-center">
            The rivalry started when Pepe, the rising star, reached #3 among
            meme heavyweights and began calling out Doge, the undefeated champ.
            Doge couldn’t let this slide, and after months of trading insults on
            social media, the two meme legends bumped into each other at MOON,
            one of the city’s hottest nightclubs. Things quickly escalated,
            turning into a massive brawl with serious consequences.
          </p>
          <div className="flex justify-center gradient-box-black-3 lg:gradient-box-black-2 rounded-[48px] w-fit mx-auto p-1 px-2 lg:p-3 lg:px-5">
            <img
              src={howitimg2}
              alt=""
              className="h-[156px] lg:h-[280px] 3xl:h-[400px] w-auto"
            />
          </div>
        </div>
        <div className="flex justify-center max-lg:flex-col gap-y-2 gap-x-8">
          <h4 className="hidden lg:block text-[#fff] font-HiJack leading-[42px] text-[21px] lg:text-[37px] 3xl:text-[50px] text-center">
            MORE INFO
            <br />
            COMING SOON
          </h4>
          <h4 className="lg:hidden text-[#fff] leading-[114%] font-HiJack text-[18px] lg:text-[37px] 3xl:text-[50px] text-center">
            MORE INFO COMING SOON
          </h4>
          <div className="lg:space-y-1">
            <p className="text-center text-[12px] lg:text-[22px] 3xl:text-[30px] leading-[28px] text-[#fff]">
              Get updates on
            </p>
            <div className="flex justify-center items-center space-x-2 relative z-30 lg:pt-1">
              <a href="https://x.com/DogevsPepe_io" target="_blank">
                <img
                  className="cursor-pointer w-[22px] lg:w-[45px] h-[22px] lg:h-[45px]"
                  src={telicon1}
                  alt=""
                />
              </a>
              <a href="https://t.me/dogevpepe" target="_blank">
                <img
                  className="cursor-pointer w-[22px] lg:w-[45px] h-[22px] lg:h-[45px]"
                  src={telicon2}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-[100vw] h-[100dvh] overflow-hidden">
        <img
          src={dogePlace}
          className="hidden lg:block absolute -bottom-10 lg:bottom-0 max-sm:-left-11 -left-9 lg:left-0 h-[35%] lg:h-[440px] xl:h-[63%] 3xl:h-[65%]"
          alt=""
        />
        <img
          src={pepePlace}
          className="hidden lg:block absolute -bottom-10 lg:bottom-0 max-sm:-right-11 -right-9 lg:right-0 h-[35%] lg:h-[452px] xl:h-[63%] 3xl:h-[65%]"
          alt=""
        />

        <img
          src={dogePlaceMob}
          className="lg:hidden leftManagedDoge absolute bottom-0"
          alt=""
        />
        <img
          src={pepePlaceMob}
          className="lg:hidden rightManagedPepe absolute bottom-0"
          alt=""
        />
      </div>
    </div>
  );
}

export default HowItSecPlaceholder;
