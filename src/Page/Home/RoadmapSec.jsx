import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import awr1 from "../../assets/RoadmapSec/Vector (2).svg";
import line from "../../assets/RoadmapSec/Line 1.png";
import imgrod from "../../assets/RoadmapSec/imgrd.png";
import verc1 from "../../assets/RoadmapSec/Ellipse 80 (3).png";
import verc2 from "../../assets/RoadmapSec/Ellipse 81 (1).png";

function RoadmapSec() {
  return (
    <div className="w-[100%] relative w-[100%] pt-[40px] overflow-hidden pb-[40px]">
      <div className="max-w-[1245px] space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[50px]">
          <div>
            <h3 className="text-[42px] text-[#FFFCFC] text-center font-[700]">
              Roadmap
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-[5rem]  max-w-[530px] w-[100%]">
            <div className="max-w-[485px] mx-auto w-[100%]">
              <button
                className=" rounded-[60px] mx-auto ml-[2.9rem] max-w-[353px] w-[100%] h-[59px] flex justify-center items-center text-[25px] font-[700] text-[#131212] "
                style={{
                  background:
                    "linear-gradient(66deg, #FFC676 25.98%, #FFBF00 65.48%)",
                  boxShadow: "0px 16px 30px 0px #615500",
                }}
              >
                The $DOPE Roadmapp
              </button>
            </div>
            <div className="max-w-[485px] w-[100%] relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                className="!min-h-[500px]"
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                  },
                  320: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="p-3 roadborder">
                    <div className="pl-[29px] relative pr-[70px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#FEBF01] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 1: The Battle Begins
                      </h4>
                      <ol className="pl-[1.5rem] list-disc">
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">
                            Concept Development:
                          </span>{" "}
                          Craft the vision for $DOPE, combining Doge’s charm
                          with a competitive presale.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">Website Launch:</span>{" "}
                          Launch the $DOPE site with presale details, community
                          channels, and resources for supporters.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">Community Setup: </span>
                          Create Telegram channels for rallying Team Doge fans.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">Marketing Kickoff:</span>{" "}
                          Roll out social media campaigns, influencer promos,
                          and press releases to unite Doge fans globally.
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-3 roadborder">
                    <div className="pl-[29px] relative pr-[70px] min-h-[476px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#FEBF01] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 2: The Presale Showdown
                      </h4>
                      <ol className="pl-[1.5rem] list-disc">
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">Presale Launch: </span>
                          Team Doge enters as the Orange Coin, rallying
                          positivity and community spirit.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">
                            Live Updates: Real-time funding stats drive $DOPE’s
                            climb.
                          </span>
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">
                            Community Challenges: Polls and contests energize
                            Doge supporters.
                          </span>
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-3 roadborder">
                    <div className="pl-[29px] relative min-h-[476px] pr-[70px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#FEBF01] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 3: Crowning the Champion
                      </h4>
                      <ol className="pl-[1.5rem] list-disc">
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">
                            Winner Announcement:{" "}
                          </span>
                          $DOPE is crowned the winning token, showcasing Team
                          Doge's dominance.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">
                            <span className="font-[600]">
                              Liquidity Boost:{" "}
                            </span>
                            Rival funds strengthen $DOPE’s liquidity pool.
                          </span>
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">Token Launch:</span>$DOPE
                          goes live within 24 hours.
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="!h-[35px] !w-[35px] cursor-pointer swiper-button-next absolute !left-[-10%] !top-[48%] rotate-180" >
            <img src={awr1} className="" alt="Previous" />
          </div>
              <div className="!h-[35px] !w-[35px] cursor-pointer swiper-button-next absolute !right-[-10%] !top-[48%] ">
                <img src={awr1} className="" alt="Next" />
              </div>
            </div>
          </div>
          <div>
            <img src={line} alt="" />
          </div>
          <div className="space-y-[5rem]  max-w-[530px] w-[100%]">
            <div className="max-w-[485px] ml-[0.6rem] mx-auto w-[100%]">
              <button
                className=" rounded-[60px] mx-auto max-w-[353px] w-[100%] h-[59px] flex justify-center items-center text-[25px] font-[700] text-[#131212] "
                style={{
                  background:
                    "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
                  boxShadow: "0px 16px 30px 0px rgba(9, 252, 60, 0.35)",
                }}
              >
                The $PEGE Roadmap
              </button>
            </div>
            <div className="max-w-[485px] w-[100%] relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                className="!min-h-[500px]"
                navigation={{
                  nextEl: ".swiper-button-next2",
                  prevEl: ".swiper-button-prev2",
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                  },
                  320: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="p-3 card2border ">
                    <div className="pl-[29px] relative pr-[70px] min-h-[476px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#4EB52A] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 1: The Battle Begins
                      </h4>
                      <ol className="pl-[1.5rem] list-disc">
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          Concept Development: Craft the vision for $PEGE,
                          combining Pepe’s iconic status with a thrilling
                          presale.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          Website Launch: Launch the $PEGE site with presale
                          details and community tools.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          Community Setup: Create Telegram channels for rallying
                          Team Pepe believers..
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          Marketing Kickoff: Launch social media campaigns,
                          influencer shoutouts, and press releases to unite the
                          Pepe army..
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-3 card2border">
                    <div className="pl-[29px] relative pr-[70px] min-h-[476px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#4EB52A] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 2: The Presale Showdown
                      </h4>
                      <ol className="pl-[1.5rem] list-disc">
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          Presale Launch: Team Pepe takes the lead as the Green
                          Coin, fueled by humor and resilience.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">
                            Live Updates: Real-time stats highlight $PEGE’s
                            progress.
                          </span>
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">
                            Community Challenges: Polls and events energize the
                            Pepe army.
                          </span>
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-3 card2border">
                    <div className="pl-[29px] relative min-h-[476px] pr-[70px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#4EB52A] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 3: Crowning the Champion
                      </h4>
                      <ol className="pl-[1.5rem] list-disc">
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">
                            Winner Announcement:{" "}
                          </span>
                          $PEGE is crowned the ultimate meme king, solidifying
                          Pepe’s legacy.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">
                            <span className="font-[600]">
                              Liquidity Boost:{" "}
                            </span>
                            Rival funds strengthen $PEGE’s market position.
                          </span>
                        </li>
                        <li className="text-[18px] text-[#fff] font-[400] leading-[169.309%]">
                          <span className="font-[600]">Token Launch:</span>{" "}
                          $PEGE goes live for trading within 24 hours..
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* <div className="!h-[35px] !w-[35px] swiper-button-prev  absolute !left-[9%] !top-[19%] -translate-y-1/2 bg-[#fff] border border-black p-2 hover:bg-white/90 z-10" >
            <img src={awr1} className="" alt="Previous" />
          </div> */}
            <div className="!h-[35px] !w-[35px] cursor-pointer swiper-button-next absolute !left-[-10%] !top-[48%] rotate-180" >
            <img src={awr1} className="" alt="Previous" />
          </div>
              <div className="!h-[35px] !w-[35px] swiper-button-next2 cursor-pointer absolute !right-[-10%] !top-[48%] ">
                <img src={awr1} className="" alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[83px]">
        <div className=" max-w-[1245px] w-[100%] mx-auto flex justify-between">
          <div className="max-w-[479.306px] relative space-y-[20px] w-[100%]">
            <h3 className="text-[52.95px] leading-[102.804%] font-[700] text-[#FFF] uppercase">
              $DOPE <br /> Tokenomics
            </h3>
            <div className="space-y-[11px]">
              <h5 className="text-[26.475px] leading-normal font-[700] text-[#FFF] uppercase">
                tOTAL sUPPLY $888 mILLION
              </h5>
              <p className="text-[22.062px] leading-normal font-[600] text-[#FFF] ">
                Coin will be launched on Solana Blockchain
              </p>
            </div>
            <img
              src={verc1}
              className="absolute top-[-55%] left-[-10%]"
              alt=""
            />
          </div>
          <div>
            <div className="max-w-[479.306px] relative space-y-[20px] w-[100%]">
              <h3 className="text-[52.95px] text-right leading-[102.804%] font-[700] text-[#FFF] uppercase">
                $peGe <br /> Tokenomics
              </h3>
              <div className="space-y-[11px]">
                <h5 className="text-[26.475px] text-right leading-normal font-[700] text-[#FFF] uppercase">
                  tOTAL sUPPLY $879 mILLION
                </h5>
                <p className="text-[22.062px] text-right leading-normal font-[600] text-[#FFF] ">
                  Coin will be launched on Solana Blockchain
                </p>
              </div>
              <img
                src={verc2}
                className="absolute top-[-55%] right-[-10%]"
                alt=""
              />
            </div>
          </div>
        </div>
        <img src={imgrod} className="w-[100%] max-w-[1440px] mx-auto" alt="" />
      </div>
    </div>
  );
}

export default RoadmapSec;
