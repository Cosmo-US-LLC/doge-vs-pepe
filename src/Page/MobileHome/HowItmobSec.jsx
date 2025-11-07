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

import img1 from "../../assets/HowItSec/v2_c1.webp";
import img2 from "../../assets/HowItSec/v2_c2.webp";
import img3 from "../../assets/HowItSec/v2_c3.webp";
import img4 from "../../assets/HowItSec/v2_c4.webp";
import img5 from "../../assets/HowItSec/v2_c5.webp";
import img6 from "../../assets/HowItSec/v2_c6.webp";
import img7 from "../../assets/HowItSec/v2_c7.webp";
import img8 from "../../assets/HowItSec/v2_c8.webp";
import img9 from "../../assets/HowItSec/v2_c9.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
  {
    img: img1,
    text: "The rivalry started when Pepe, the rising star, reached #3 among meme heavyweights and began calling out Doge, the undefeated champ. Doge couldn’t let this slide, and after months of trading insults on social media, the two meme legends bumped into each other at MOON, one of the city’s hottest nightclubs. Things quickly escalated, turning into a massive brawl with serious consequences.",
  },
  {
    img: img2,
    text: "📹 CCTV footage leaked! The Doge vs. Pepe brawl at the MOON Lounge has been caught on camera! See what really went down last night!",
  },
  {
    img: img3,
    text: "🚨 Breaking News: Police have released mugshots! Meme heavyweights Doge and Pepe are set to appear before a judge tomorrow following their arrest after a physical altercation at the MOON Club.",
  },
  {
    img: img4,
    text: "📷 Doge and Pepe being transported to the City County Meme Jail",
  },
  {
    img: img5,
    text: "🔒 Pictures show the famous meme heavyweight champs Doge and Pepe in police custody after the infamous brawl at the Moon Lounge.",
  },
  {
    img: img6,
    text: "⚖️ Meme heavyweight champions Doge and Pepe have each been sentenced to a 3-year probation period and 100 hours of charitable work following their nightclub altercation.",
  },
  {
    img: img7,
    text: "Doge and Pepe were spotted leaving the court, both hinting at unfinished business without revealing any details. Rumors are now spreading about a potential fight in the near future.",
  },
  {
    img: img8,
    text: "🐶 Doge, the undefeated Meme Heavyweight, is back on social media after his release from custody. He shared a gym post captioned Back to Work, fueling more rumors of a potential fight with Pepe.",
  },
  {
    img: img9,
    text: "🐸 Pepe responds with a post of him casually leaning against a wall, captioned: I'm always ready, especially after the nightclub thing. I saw the dog in his eyes. No more games. Let's fight! This time, no one's saving you!",
  },
];

function HowItmobSec() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div
      className="w-[100%] min-h-[658px] flex items-end  overflow-hidden pt-[50px] pb-[40px]"
      id="how-it-all-began"
    >
      <div className="relative w-full px-4 mx-auto min-h-[578px]">
        <h3 className="text-[#FFFCFC] font-[Anton]  text-center text-[32px] leading-[104.377%] font-[400]">
          How It All Began
        </h3>
        <br />
        <div className="gradient-bg overflow-hidden rounded-[20px] p-[1px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            navigation={{
              nextEl: ".swiper-button-next4",
              prevEl: ".swiper-button-prev4",
            }}
            className="max-w-[350px] h-[426px] rounded-[20px]"
          >
            {sliderData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative p-0  h-[446px] flex flex-col justify-end rounded-[20px] overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover absolute top-0 left-0 z-0 w-full h-full"
                />
                <p className="absolute bottom-0 z-10 font-[Helvetica] pb-4 w-[100%] font-[400] mx-auto text-[#fff] leading-[157%] text-[14px] text-center">
                  {item.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex gap-2 justify-center items-center pt-6">
          <div className="swiper-button-prev4 flex justify-center items-center h-[60px] w-[60px] aspect-square border border-white/10 bg-white/20 rounded-full">
            <ChevronLeft className="text-[#E67500]" />
          </div>
          <div className="swiper-button-next4 flex justify-center items-center h-[60px] w-[60px] aspect-square border border-white/10 bg-white/20 rounded-full">
            <ChevronRight className="text-[#E67500]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItmobSec;
