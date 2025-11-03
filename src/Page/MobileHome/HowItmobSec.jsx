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

import card1 from "../../assets/HowItSec/howCard1.png";
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
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
  {
    img: card1,
    text: "The rivalry started when Pepe, the rising star, reached #3 among meme heavyweights and began calling out Doge, the undefeated champ. Doge couldn’t let this slide, and after months of trading insults on social media, the two meme legends bumped into each other at MOON, one of the city’s hottest nightclubs. Things quickly escalated, turning into a massive brawl with serious consequences.",
  },
  {
    img: card1,
    text: "🗣 When DOGE and PEPE bumped into each other, it all went downhill quickly. Satoshi Whiskey flew, fists followed, and the cops ended it with handcuffs! 👮🚨",
  },
  {
    img: card1,
    text: "📹 CCTV footage leaked! The Doge vs. Pepe brawl at the MOON Lounge has been caught on camera! See what really went down last night!",
  },
  {
    img: card1,
    text: "🚨 Breaking News: Police have released mugshots! Meme heavyweights Doge and Pepe are set to appear before a judge tomorrow following their arrest after a physical altercation at the MOON Club.",
  },
  {
    img: card1,
    text: "📷 Doge and Pepe being transported to the City County Meme Jail",
  },
  {
    img: card1,
    text: "🔒 Pictures show the famous meme heavyweight champs Doge and Pepe in police custody after the infamous brawl at the Moon Lounge.",
  },
  {
    img: card1,
    text: "⚖️ Meme heavyweight champions Doge and Pepe have each been sentenced to a 3-year probation period and 100 hours of charitable work following their nightclub altercation.",
  },
  {
    img: card1,
    text: "🏛 Doge and Pepe were spotted leaving the court, both hinting at 'unfinished business' without revealing any details. Rumors are now spreading about a potential fight in the near future.",
  },
  {
    img: card1,
    text: "🐶 Doge, the undefeated Meme Heavyweight, is back on social media after his release from custody. He shared a gym post captioned “Back to Work,” fueling more rumors of a potential fight with Pepe.",
  },
  {
    img: card1,
    text: "🐸 Pepe responds with a post of him casually leaning against a wall, captioned: I’m always ready, especially after the nightclub thing. I saw the dog in his eyes. No more games. Let’s fight! This time, no one’s saving you!",
  },
];

function HowItmobSec() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div
      className="w-[100%] min-h-[658px] flex items-end  overflow-hidden pt-[60px] pb-[100px]"
      id="how-it-all-began"
    >
      <div className="relative w-[90%] mx-auto min-h-[578px]">
        <h3 className="text-[#FFFCFC] font-[Anton]  text-center text-[32px] leading-[104.377%] font-[400]">
          How It All Began
        </h3>
        <br />
        <div className="howitborder">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            navigation={{
              nextEl: ".swiper-button-next4",
              prevEl: ".swiper-button-prev4",
            }}
            className="max-w-[380px] h-[446px]"
          >
            {sliderData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative p-0 h-[446px] flex flex-col justify-end rounded-[20px] overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={`Slide ${index + 1}`}
                  className="absolute w-full h-full top-0 left-0 object-cover z-0"
                />
                <p className="absolute bottom-0 z-10 font-[Helvetica] pb-4 w-[100%] font-[400] mx-auto text-[#fff] leading-[157%] text-[14px] text-center">
                  {item.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="pt-2.5 flex justify-center items-center gap-2">
          <div
            className="swiper-button-prev4 flex justify-center items-center h-[60px] w-[60px] aspect-square border border-white/10 bg-white/20 rounded-full"
          >
            <ChevronLeft className="text-[#E67500]" />
          </div>
          <div
            className="swiper-button-next4 flex justify-center items-center h-[60px] w-[60px] aspect-square border border-white/10 bg-white/20 rounded-full"
          >
            <ChevronRight className="text-[#E67500]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItmobSec;
