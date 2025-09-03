import React, { useRef } from "react";
// import howitimg from "../../assets/HowItSec/how-it-img4.png";
// import telicon1 from "../../assets/HowItSec/logos_telegram.svg";
// import telicon2 from "../../assets/HowItSec/logos_telegram (1).svg";
// import vecleft from "../../assets/HowItSec/P (43).png";
// import vecright from "../../assets/HowItSec/P (43) (1).png";
import awr1 from "../../assets/RoadmapSec/Vector (2).svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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
function HowItmobSec() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div
      className="w-[100%] howitbgmob min-h-[994px] flex items-end  overflow-hidden pt-[60px] pb-[100px]"
      id="how-it-all-began"
    >
      <div
        className="relative  rounded-[20.9px] w-[90%] mx-auto relative min-h-[480px]  bg-[#01010182]"
        style={{ backdropFilter: "blur(9.899999618530273px)" }}
      >
        <div className="howitborder px-[22px] pt-[20px] pb-[40px]">
          <div className="space-y-[20px]">
            <h3 className="text-[#FFFCFC] font-[Anton]  text-center text-[32px] leading-[104.377%] font-[400]">
              How It All Began
            </h3>
            <p className="max-w-[317px] font-[Helvetica] w-[100%] font-[400] mx-auto text-[#fff] leading-[157%] text-[15px] text-center">
              The heated rivalry began when Pepe, the rising star, reached #3
              among all meme heavyweights and started calling out Doge, the
              undefeated champ. Doge couldn’t let this slide, and after months
              of back-and-forth insults on social media, the two meme icons
              bumped into each other at MOON, one of the hottest nightclubs in
              the city. Things escalated quickly, turning into a massive brawl
              with serious consequences.
            </p>
            <div className="relative flex justify-center w-full">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                navigation={{
                  nextEl: ".swiper-button-next4",
                  prevEl: ".swiper-button-prev4",
                }}
                className="max-w-[240px]"
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
                ].map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

               <div className="!h-[25px] !w-[25px] swiper-button-prev4   cursor-pointer  absolute !left-[-1%] !top-[45%] rotate-180">
                <img
                  src={awr1}
                  className="!h-[20px] !w-[20px]"
                  alt="Previous"
                />
              </div>
              <div className="!h-[25px] !w-[25px] swiper-button-next4   cursor-pointer  absolute !right-[-1%] !top-[45%] ">
                <img src={awr1} className="!h-[20px] !w-[20px]" alt="Next" />
              </div>

            </div>
              <div className="w-[100%] mt-6 flex justify-center items-center">
                <button
                  style={{
                    background:
                      "linear-gradient(90deg, #FFBF01 36%, #01FE37 134.57%)",
                  }}
                  className="max-w-[324px] w-[100%] leading-normal !text-[16px] mx-auto h-[60px] text-anton font-[400] rounded-[60px] cursor-pointer relative z-10"
                  onClick={() =>
                    (window.location.href =
                      "https://forms.gle/J11hnTDHwJVfhY348")
                  }
                >
                  JOIN THE PRESALE
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItmobSec;
