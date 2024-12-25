import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import awr1 from "../../assets/RoadmapSec/Vector (2).svg";
import line from "../../assets/RoadmapSec/Line 1.png";
import verc1 from "../../assets/RoadmapSec/Ellipse 80 (3).png";
import verc2 from "../../assets/RoadmapSec/Ellipse 81 (1).png";
import imgrod from "../../assets/RoadmapSec/imgrd.png";

function RoadmapMobile() {
  return (
    <div className="w-full pt-8 overflow-hidden bg-black">
      <div className="mb-6 text-center">
        <h3 className="text-[32px] text-white font-bold">Roadmap</h3>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="flex w-[149px] h-[18px] justify-center items-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600">
          <span className="text-[#131212] font-inter text-[12px] font-bold leading-none">
            The $DOPE Roadmap
          </span>
        </div>
        <div className="flex w-[149px] h-[18px] justify-center items-center rounded-full bg-gradient-to-r from-green-400 to-green-600">
          <span className="text-[#131212] font-inter text-[12px] font-bold leading-none">
            The $DOPE Roadmap
          </span>
        </div>
      </div>

      <div className="relative flex py-2">
        <div className="w-[45%] mx-auto max-w-[150px] h-[100%]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next1",
              prevEl: ".swiper-button-prev1",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            loop={false}
            className="!min-h-[422px]"
          >
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[16px] px-2 py-4  min-h-[390px] text-white relative">
                <h4 className="text-yellow-400 text-[10px] font-semibold mb-4">
                  Phase 1: The Battle Begins
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[10px]">
                  <li>
                    <span className="font-bold">Concept Development:</span>{" "}
                    Craft the vision for $DOPE, combining Doge’s charm with a
                    competitive presale.
                  </li>
                  <li>
                    <span className="font-bold">Website Launch:</span> Launch
                    the $DOPE site with presale details, community channels, and
                    resources for supporters.
                  </li>
                  <li>
                    <span className="font-bold">Community Setup:</span> Create
                    Telegram channels for rallying Team Doge fans.
                  </li>
                  <li>
                    <span className="font-bold">Marketing Kickoff:</span> Roll
                    out social media campaigns, influencer promos, and press
                    releases to unite Doge fans globally.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[16px] px-2 py-4  min-h-[390px] text-white relative">
                <h4 className="text-yellow-400 text-[10px] font-semibold mb-4">
                  Phase 2: The Presale Showdown
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[10px]">
                  <li>
                    <span className="font-bold">Presale Launch:</span> Team Doge
                    enters as the Orange Coin, rallying positivity and community
                    spirit.
                  </li>
                  <li>
                    <span className="font-bold">Live Updates:</span> Real-time
                    funding stats drive $DOPE’s climb.
                  </li>
                  <li>
                    <span className="font-bold">Community Challenges:</span>{" "}
                    Polls and contests energize Doge supporters.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[16px] min-h-[390px] px-2 py-4 text-white relative">
                <h4 className="text-yellow-400 text-[10px] font-semibold mb-4">
                  Phase 3: Crowning the Champion
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[10px]">
                  <li>
                    <span className="font-bold">Winner Announcement:</span>{" "}
                    $DOPE is crowned the winning token, showcasing Team Doge’s
                    dominance.
                  </li>
                  <li>
                    <span className="font-bold">Liquidity Boost:</span> Rival
                    funds strengthen $DOPE’s liquidity pool.
                  </li>
                  <li>
                    <span className="font-bold">Token Launch:</span> $DOPE goes
                    live within 24 hours.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="!h-[35px] !w-[35px] swiper-button-prev1 swiper-button-next cursor-pointer  absolute !left-[-2%] !top-[49%] rotate-180">
            <img src={awr1} className="w-[16px] h-[16px]" alt="Previous" />
          </div>
          <div className="!h-[35px] !w-[35px] swiper-button-next1 swiper-button-next cursor-pointer  absolute !right-[48%] !top-[49%] ">
            <img src={awr1} className="w-[16px] h-[16px]" alt="Next" />
          </div>
        </div>

        <div className="flex justify-center w-[2px] relative">
          <img src={line} alt="Line Divider" className="w-[1px] h-[100%] absolute top-[-10%]" />
        </div>

        <div className="w-[45%] mx-auto max-w-[150px] h-[100%]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next2",
              prevEl: ".swiper-button-prev2",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            loop={false}
            className="!min-h-[422px]"
          >
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[16px] px-2 py-4  min-h-[390px] text-white relative">
                <h4 className="text-green-400 text-[10px] font-semibold mb-4">
                  Phase 1: The Battle Begins
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[10px]">
                  <li>
                    <span className="font-bold">Concept Development:</span>{" "}
                    Craft the vision for $PEGE, combining Pepe’s iconic status
                    with a thrilling presale.
                  </li>
                  <li>
                    <span className="font-bold">Website Launch:</span> Launch
                    the $PEGE site with presale details and community tools.
                  </li>
                  <li>
                    <span className="font-bold">Community Setup:</span> Create
                    Telegram channels for rallying Team Pepe believers.
                  </li>
                  <li>
                    <span className="font-bold">Marketing Kickoff:</span> Launch
                    social media campaigns, influencer shoutouts, and press
                    releases to unite the Pepe army.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[16px] px-2 py-4  min-h-[390px] text-white relative">
                <h4 className="text-green-400 text-[10px] font-semibold mb-4">
                  Phase 2: The Presale Showdown
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[10px]">
                  <li>
                    <span className="font-bold">Presale Launch:</span> Team Pepe
                    takes the lead as the Green Coin, fueled by humor and
                    resilience.
                  </li>
                  <li>
                    <span className="font-bold">Live Updates:</span> Real-time
                    stats highlight $PEGE’s progress.
                  </li>
                  <li>
                    <span className="font-bold">Community Challenges:</span>{" "}
                    Polls and events energize the Pepe army.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[16px] px-2 py-4  min-h-[390px] text-white relative">
                <h4 className="text-green-400 text-[10px] font-semibold mb-4">
                  Phase 3: Crowning the Champion
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[10px]">
                  <li>
                    <span className="font-bold">Winner Announcement:</span>{" "}
                    $PEGE is crowned the ultimate meme king, solidifying Pepe’s
                    legacy.
                  </li>
                  <li>
                    <span className="font-bold">Liquidity Boost:</span> Rival
                    funds strengthen $PEGE’s market position.
                  </li>
                  <li>
                    <span className="font-bold">Token Launch:</span> $PEGE goes
                    live for trading within 24 hours.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="!h-[35px] !w-[35px] swiper-button-prev2 swiper-button-next cursor-pointer   absolute !left-[48%] !top-[49%] rotate-180">
            <img src={awr1} className="w-[16px] h-[16px]" alt="Previous" />
          </div>
          <div className="!h-[35px] !w-[35px] swiper-button-next2  swiper-button-next cursor-pointer absolute !right-[-2%] !top-[49%] ">
            <img src={awr1} alt="Next" className="w-[16px] h-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapMobile;
