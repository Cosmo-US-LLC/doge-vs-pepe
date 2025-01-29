import React from "react";
import howitimg2 from "../../assets/HowItSec/newsImage.webp";
import telicon1 from "../../assets/HowItSec/logos_telegram.svg";
import telicon2 from "../../assets/HowItSec/logos_telegram (1).svg";
import pepePlace from "../../assets/HowItSec/pepePlace.webp";
import dogePlace from "../../assets/HowItSec/dogePlace.webp";
import pepePlaceMob from "../../assets/HowItSec/pepePlaceMob.webp";
import dogePlaceMob from "../../assets/HowItSec/dogePlaceMob.webp";
import topLogo from "../../assets/HowItSec/topLogo.webp";
import awr1 from "../../assets/HowItSec/Vector (2).svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

// Import your images
import img1 from "../../assets/HowItSec/slide1.webp";
import img2 from "../../assets/HowItSec/slide2.webp";
import img3 from "../../assets/HowItSec/slide3.webp";
import img4 from "../../assets/HowItSec/slide4.webp";
import img5 from "../../assets/HowItSec/slide5.webp";
import img6 from "../../assets/HowItSec/slide6.webp";
import img7 from "../../assets/HowItSec/slide7.webp";
import img8 from "../../assets/HowItSec/slide8.webp";
import img9 from "../../assets/HowItSec/slide9.webp";
import img10 from "../../assets/HowItSec/slide10.webp";

function HowItSecPlaceholder() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="flex flex-col lg:justify-center max-lg:pt-[5dvh] w-[100%] h-[100dvh] bg-black overflow-hidden">
      <div className="flex flex-col justify-center max-w-[900px] xl:max-w-[1089px] 3xl:max-w-[1440px] px-[22px] space-y-[23px] w-[100%] mx-auto relative min-h-[500px] overflow-hidden">
        <img
          className="w-[237px] lg:w-[240px] xl:w-[280px] 3xl:w-[340px] h-auto mx-auto cursor-pointer"
          src={topLogo}
          alt="Logo"
          onClick={(e) => handleScroll(e, "what-is", 90)}
        />
        <div className="space-y-[16px] gradient-box-black max-lg:pb-3 flex flex-col items-center">
          <p className="text-[#fff] -mt-1.5 xl:-mt-2 leading-[10px] bg-gradient-to-r from-transparent via-black to-transparent font-[400] text-[12px] lg:text-[15px] xl:text-[18px] 3xl:text-[25px] text-center">
            Chapter I
          </p>
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[21px] xl:pt-3 lg:text-[30px] xl:text-[37px] 3xl:text-[50px] leading-[80.377%] font-[400]">
            How It All Began
          </h3>
          <p className="lg:w-[80%] font-[400] px-2 mx-auto text-[#fff] leading-[114%] text-[12px] lg:text-[15px] xl:text-[18px] 3xl:text-[25px] text-center">
            The rivalry started when Pepe, the rising star, reached #3 among
            meme heavyweights and began calling out Doge, the undefeated champ.
            Doge couldn’t let this slide, and after months of trading insults on
            social media, the two meme legends bumped into each other at MOON,
            one of the city’s hottest nightclubs. Things quickly escalated,
            turning into a massive brawl with serious consequences.
          </p>
          <div className="relative flex justify-center w-[469px] z-40">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={false}
              navigation={{
                nextEl: ".swiper-button-next1",
                prevEl: ".swiper-button-prev1",
              }}
              className="w-full"
            >
              {[
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7,
                img8,
                img9,
                img10,
              ].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="!h-[35px] !w-[35px] swiper-button-prev1   cursor-pointer  absolute !left-[-10%] !top-[48%] rotate-180">
              <img src={awr1} className="!h-[25px] !w-[25px]" alt="Previous" />
            </div>
            <div className="!h-[35px] !w-[35px] swiper-button-next1   cursor-pointer  absolute !right-[-10%] !top-[48%] ">
              <img src={awr1} className="!h-[25px] !w-[25px]" alt="Next" />
            </div>
 
          </div>
        </div>
        <div className="flex justify-center max-lg:flex-col gap-y-2 gap-x-8">
          <h4 className="hidden lg:block lg:-mt-2 text-[#fff] font-HiJack leading-[35px] xl:leading-[42px] text-[21px] lg:text-[30px] xl:text-[37px] 3xl:text-[50px] text-center">
            MORE INFO
            <br />
            COMING SOON
          </h4>
          <h4 className="lg:hidden text-[#fff] leading-[114%] font-HiJack text-[18px] lg:text-[37px] 3xl:text-[50px] text-center">
            MORE INFO COMING SOON
          </h4>
          <div className="lg:space-y-1 lg:-mt-2">
            <p className="text-center text-[12px] lg:text-[15px] xl:text-[22px] 3xl:text-[30px] leading-[22px] xl:leading-[28px] text-[#fff]">
              Get updates on
            </p>
            <div className="relative z-30 flex items-center justify-center space-x-2 lg:pt-1">
              {/* <a href="https://x.com/Doge_V_Pepe?t=4XlB3j6oNybhEgxK1R5KZw&s=09" target="_blank">
                <img
                  className="cursor-pointer w-[22px] lg:w-[34px] xl:w-[45px] h-[22px] lg:h-[34px] xl:h-[45px]"
                  src={telicon1}
                  alt=""
                />
              </a> */}
              <a href="https://t.me/DogevsPepe_io" target="_blank">
                <img
                  className="cursor-pointer w-[22px] lg:w-[34px] xl:w-[45px] h-[22px] lg:h-[34px] xl:h-[45px]"
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
          className="hidden lg:block absolute -bottom-10 lg:bottom-0 max-sm:-left-11 -left-9 lg:left-0 h-[35%] lg:h-[60%] xl:h-[63%] 3xl:h-[65%]"
          alt=""
        />
        <img
          src={pepePlace}
          className="hidden lg:block absolute -bottom-10 lg:bottom-0 max-sm:-right-11 -right-9 lg:right-0 h-[35%] lg:h-[60%] xl:h-[63%] 3xl:h-[65%]"
          alt=""
        />

        <img
          src={dogePlaceMob}
          className="absolute bottom-0 lg:hidden leftManagedDoge"
          alt=""
        />
        <img
          src={pepePlaceMob}
          className="absolute bottom-0 lg:hidden rightManagedPepe"
          alt=""
        />
      </div>

      <div className="fixed text-black bg-white bottom-5 right-5">
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block 3xl:hidden">2xl</span>
        <span className="hidden 3xl:block">3xl</span>
      </div>
    </div>
  );
}

export default HowItSecPlaceholder;
