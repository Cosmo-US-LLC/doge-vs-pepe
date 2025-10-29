import React from "react";
import topShadow from "../../assets/tokenomics/rectangle_306.webp";
import bottomShadow from "../../assets/tokenomics/rectangle_307.webp";
import awr1 from "../../assets/RoadmapSec/Vector (2).svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

import img1 from "../../assets/HowItSec/v2_how_it_card1.webp";
import img2 from "../../assets/HowItSec/v2_how_it_card2.webp";
import img3 from "../../assets/HowItSec/v2_how_it_card3.webp";
import img4 from "../../assets/HowItSec/v2_how_it_card1.webp";
import img5 from "../../assets/HowItSec/v2_how_it_card2.webp";
import img6 from "../../assets/HowItSec/v2_how_it_card3.webp";

const sliderData = [
  {
    img: img1,
    text: "The rivalry started when Pepe, the rising star, reached #3 among meme heavyweights and began calling out Doge, the undefeated champ. Doge couldn’t let this slide, and after months of trading insults on social media, the two meme legends bumped into each other at MOON, one of the city’s hottest nightclubs. Things quickly escalated, turning into a massive brawl with serious consequences.",
  },
  {
    img: img2,
    text: "🗣 When DOGE and PEPE bumped into each other, it all went downhill quickly. Satoshi Whiskey flew, fists followed, and the cops ended it with handcuffs! 👮🚨",
  },
  {
    img: img3,
    text: "📹 CCTV footage leaked! The Doge vs. Pepe brawl at the MOON Lounge has been caught on camera! See what really went down last night!",
  },
  {
    img: img4,
    text: "🚨 Breaking News: Police have released mugshots! Meme heavyweights Doge and Pepe are set to appear before a judge tomorrow following their arrest after a physical altercation at the MOON Club.",
  },
  {
    img: img5,
    text: "📷 Doge and Pepe being transported to the City County Meme Jail",
  },
  {
    img: img6,
    text: "🔒 Pictures show the famous meme heavyweight champs Doge and Pepe in police custody after the infamous brawl at the Moon Lounge.",
  },
];

function HowItSec() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="w-[100%] h-[700px] flex justify-center items-center how_it_all_began_bg relative overflow-hidden  ">
      <div className="max-w-[1280px] w-[100%] mx-auto relative flex flex-col justify-center items-center gap-[40px]">
        <h2 className="text-center">HOW IT ALL BEGAN</h2>

        <div className="relative flex justify-center w-[1200px] z-40">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            loop={false}
            navigation={{
              nextEl: ".swiper-button-next3",
              prevEl: ".swiper-button-prev3",
            }}
            className="w-full "
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="gradient-bg p-[1px] rounded-[20px] overflow-hidden">
                  <div className="relative mx-auto max-w-[450px] h-[300px] rounded-[20px] overflow-hidden gradient-bg">
                    {/* Background Image */}
                    <img
                      src={item.img}
                      alt={`Slide ${index + 1}`}
                      className="absolute inset-0 w-full h-full "
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-end">
                      <div className="p-4 z-20 relative text-[#fff]">
                        <p className="  text-left text-white !text-[14px] !leading-[157%] !font-[200] z-20">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="!h-[35px] !w-[35px] swiper-button-prev3   cursor-pointer  absolute !left-[-80px] !top-[48%] z-10 rotate-180">
            <img src={awr1} className="!h-[25px] !w-[25px]" alt="Previous" />
          </div>
          <div className="!h-[35px] !w-[35px] swiper-button-next3   cursor-pointer  absolute !right-[-80px] !top-[48%] z-10">
            <img src={awr1} className="!h-[25px] !w-[25px]" alt="Next" />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="btn-primary gradient-bg"
            onClick={() => {
              document.getElementById("wallet")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            JOIN THE PRESALE
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowItSec;
