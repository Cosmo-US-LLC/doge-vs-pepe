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
  {
    img: img7,
    text: "⚖️ Meme heavyweight champions Doge and Pepe have each been sentenced to a 3-year probation period and 100 hours of charitable work following their nightclub altercation.",
  },
  {
    img: img8,
    text: "🏛 Doge and Pepe were spotted leaving the court, both hinting at 'unfinished business' without revealing any details. Rumors are now spreading about a potential fight in the near future.",
  },
  {
    img: img9,
    text: "🐶 Doge, the undefeated Meme Heavyweight, is back on social media after his release from custody. He shared a gym post captioned “Back to Work,” fueling more rumors of a potential fight with Pepe.",
  },
  {
    img: img10,
    text: "🐸 Pepe responds with a post of him casually leaning against a wall, captioned: I’m always ready, especially after the nightclub thing. I saw the dog in his eyes. No more games. Let’s fight! This time, no one’s saving you!",
  },
];

function HowItSec() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <div className="w-[100%]  py-[100px] flex justify-center items-center howitbg relative overflow-hidden  ">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 ">
        <img className="w-full h-auto" src={bottomShadow} alt="" />
      </div>
      <div
        className="max-w-[992px]  px-[22px] py-[26px] rounded-[26.9px] space-y-[23px] w-[100%] mx-auto relative min-h-[500px] howitborder bg-[#01010182]"
        style={{ backdropFilter: "blur(9.899999618530273px)" }}
      >
        <div className="space-y-[16px] flex flex-col justify-center items-center ">
          <h3 className="text-center section_heading">How It All Began</h3>

          <div className="relative flex justify-center w-[600px] z-40">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={false}
              navigation={{
                nextEl: ".swiper-button-next3",
                prevEl: ".swiper-button-prev3",
              }}
              className="w-full"
            >
              {sliderData.map((item, index) => (
                <SwiperSlide key={index}>
                  <p className=" font-[400]  text-[#fff] leading-[20px] text-[16px] font-helvetica text-center mb-6">
                    {item.text}
                  </p>
                 <div className="mx-auto max-w-[450px]">
                   <img
                    src={item.img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto"
                  />
                 </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="!h-[35px] !w-[35px] swiper-button-prev3   cursor-pointer  absolute !left-[-10%] !top-[48%] rotate-180">
              <img src={awr1} className="!h-[25px] !w-[25px]" alt="Previous" />
            </div>
            <div className="!h-[35px] !w-[35px] swiper-button-next3   cursor-pointer  absolute !right-[-10%] !top-[48%] ">
              <img src={awr1} className="!h-[25px] !w-[25px]" alt="Next" />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              style={{
                background:
                  "linear-gradient(90deg, #FFBF01 36%, #01FE37 134.57%)",
              }}
              className="w-[457px] leading-normal mx-auto h-[61px] text-anton text-[30px] font-[400] rounded-[60px] cursor-pointer relative z-10"
              onClick={() =>
                (window.location.href = "https://forms.gle/J11hnTDHwJVfhY348")
              }
            >
              JOIN THE PRESALE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HowItSec;
