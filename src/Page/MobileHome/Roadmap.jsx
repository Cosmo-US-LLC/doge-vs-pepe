// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import awr1 from "../../assets/RoadmapSec/Vector (2).svg";
// import line from "../../assets/RoadmapSec/Line 1.png";
// import verc1 from "../../assets/RoadmapSec/Ellipse 80 (3).png";
// import verc2 from "../../assets/RoadmapSec/Ellipse 81 (1).png";
// import imgrod from "../../assets/RoadmapSec/imgrd.png";

// function RoadmapMobile() {
//   return (
//     <div className="w-full bgroadmapMob pt-[40px] overflow-hidden bg-black relative" id="roadmap">
//        {/* <div className="absolute inset-0 bg-black pointer-events-none opacity-30"></div> */}
//       <div className="relative z-10 mb-6 text-center">
//         <h3 className="text-[22px] text-white font-HiJack font-[400]">Roadmap</h3>
//       </div>
//       <div className="flex items-center justify-center gap-11 pb-[1rem] relative z-10">
//         <div className="flex w-[152px] h-[28px] justify-center items-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600">
//           <span className="text-[#131212] font-inter text-[12px] font-[700] leading-none">
//           The  $DOGE Roadmap
//           </span>
//         </div>
//         <div className="flex w-[153px] h-[28px] justify-center items-center rounded-full bg-gradient-to-r from-green-400 to-green-600">
//           <span className="text-[#131212] font-inter text-[12px] font-[700] leading-none">
//           The  $PEPE Roadmap
//           </span>
//         </div>
//       </div>

//       <div className="relative z-10 grid grid-cols-2 gap-10 p-2 px-4">
//         <div className="w-[100%] mx-auto h-[100%]">
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={20}
//             slidesPerView={1}
//             navigation={{
//               nextEl: ".swiper-button-next1",
//               prevEl: ".swiper-button-prev1",
//             }}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 1 },
//               1024: { slidesPerView: 1 },
//             }}
//             loop={false}
//             className="!min-h-[600px]"
//           >
//             <SwiperSlide>
//               <div className="bg-[#181818] !min-h-[547px] !max-h-[600px] rounded-[6px] p-2   text-white relative">
//                 <h4 className="text-yellow-400 text-[10px] font-[600] mb-4">
//                 The Battle Begins
//                 </h4>
//                 <ul className="list-disc pl-5 space-y-2 text-[13px]">
//                   <li>
//                     <span className="font-bold">Concept Development:</span>{" "}
//                     Craft the vision for $DOGE, combining Doge’s charm with a
//                     competitive presale.
//                   </li>
//                   <li>
//                     <span className="font-bold">Website Launch:</span> Launch
//                     the $DOGE site with presale details, community channels, and
//                     resources for supporters.
//                   </li>
//                   <li>
//                     <span className="font-bold">Community Setup:</span> Create
//                     Telegram channels for rallying Team Doge fans.
//                   </li>
//                   <li>
//                     <span className="font-bold">Marketing Kickoff:</span> Roll
//                     out social media campaigns, influencer promos, and press
//                     releases to unite Doge fans globally.
//                   </li>
//                 </ul>
//                 <div
//                   className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
//                   }}
//                 ></div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-[#181818] rounded-[6px] p-2  !min-h-[547px] !max-h-[600px] text-white relative">
//                 <h4 className="text-yellow-400 text-[10px] font-semibold mb-4">
//                   The Presale Showdown
//                 </h4>
//                 <ul className="list-disc pl-5 space-y-2 text-[13px]">
//                   <li>
//                     <span className="font-bold">Presale Launch:</span> Team Doge
//                     enters as the Orange Coin, rallying positivity and community
//                     spirit.
//                   </li>
//                   <li>
//                     <span className="font-bold">Live Updates:</span> Real-time
//                     funding stats drive $DOGE’s climb.
//                   </li>
//                   <li>
//                     <span className="font-bold">Community Challenges:</span>{" "}
//                     Polls and contests energize Doge supporters.
//                   </li>
//                 </ul>
//                 <div
//                   className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
//                   }}
//                 ></div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-[#181818] rounded-[6px] !min-h-[547px] !max-h-[600px] p-2 text-white relative">
//                 <h4 className="text-yellow-400 text-[10px] font-semibold mb-4">
//                   Crowning the Champion
//                 </h4>
//                 <ul className="list-disc pl-5 space-y-2 text-[13px]">
//                   <li>
//                     <span className="font-bold">Winner Announcement:</span>{" "}
//                     $DOGE is crowned the winning token, showcasing Team Doge’s
//                     dominance.
//                   </li>
//                   <li>
//                     <span className="font-bold">Liquidity Boost:</span> Rival
//                     funds strengthen $DOGE’s liquidity pool.
//                   </li>
//                   <li>
//                     <span className="font-bold">Token Launch:</span> $DOGE goes
//                     live within 24 hours.
//                   </li>
//                 </ul>
//                 <div
//                   className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
//                   }}
//                 ></div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <div className="!h-[35px] !w-[35px] swiper-button-prev1 swiper-button-next cursor-pointer  absolute !left-[-2%] !top-[49%] rotate-180">
//             <img src={awr1} className="w-[16px] h-[16px]" alt="Previous" />
//           </div>
//           <div className="!h-[35px] !w-[35px] swiper-button-next1 swiper-button-next cursor-pointer  absolute !right-[48%] !top-[49%] ">
//             <img src={awr1} className="w-[16px] h-[16px]" alt="Next" />
//           </div>
//         </div>

//         <div className="w-[100%] mx-auto h-[100%]">
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={20}
//             slidesPerView={1}
//             navigation={{
//               nextEl: ".swiper-button-next2",
//               prevEl: ".swiper-button-prev2",
//             }}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 1 },
//               1024: { slidesPerView: 1 },
//             }}
//             loop={false}
//             className="!min-h-[600px]"
//           >
//             <SwiperSlide>
//               <div className="bg-[#181818] rounded-[6px] p-2  !min-h-[547px] !max-h-[600px] text-white relative">
//                 <h4 className="text-green-400 text-[10px] font-semibold mb-4">
//                 The Battle Begins
//                 </h4>
//                 <ul className="list-disc pl-5 space-y-2 text-[13px]">
//                   <li>
//                     <span className="font-bold">Concept Development:</span>{" "}
//                     Craft the vision for $PEPE, combining Pepe’s iconic status
//                     with a thrilling presale.
//                   </li>
//                   <li>
//                     <span className="font-bold">Website Launch:</span> Launch
//                     the $PEPE site with presale details and community tools.
//                   </li>
//                   <li>
//                     <span className="font-bold">Community Setup:</span> Create
//                     Telegram channels for rallying Team Pepe believers.
//                   </li>
//                   <li>
//                     <span className="font-bold">Marketing Kickoff:</span> Launch
//                     social media campaigns, influencer shoutouts, and press
//                     releases to unite the Pepe army.
//                   </li>
//                 </ul>
//                 <div
//                   className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
//                   }}
//                 ></div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-[#181818] rounded-[6px] p-2  !min-h-[547px] !max-h-[600px] text-white relative">
//                 <h4 className="text-green-400 text-[10px] font-[600] mb-4">
//                   The Presale Showdown
//                 </h4>
//                 <ul className="list-disc pl-5 space-y-2 text-[13px]">
//                   <li>
//                     <span className="font-bold">Presale Launch:</span> Team Pepe
//                     takes the lead as the Green Coin, fueled by humor and
//                     resilience.
//                   </li>
//                   <li>
//                     <span className="font-bold">Live Updates:</span> Real-time
//                     stats highlight $PEPE’s progress.
//                   </li>
//                   <li>
//                     <span className="font-bold">Community Challenges:</span>{" "}
//                     Polls and events energize the Pepe army.
//                   </li>
//                 </ul>
//                 <div
//                   className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
//                   }}
//                 ></div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-[#181818] rounded-[6px] p-2  !min-h-[547px] !max-h-[600px] text-white relative">
//                 <h4 className="text-green-400 text-[10px] font-semibold mb-4">
//                   Crowning the Champion
//                 </h4>
//                 <ul className="list-disc pl-5 space-y-2 text-[13px]">
//                   <li>
//                     <span className="font-bold">Winner Announcement:</span>{" "}
//                     $PEPE is crowned the ultimate meme king, solidifying Pepe’s
//                     legacy.
//                   </li>
//                   <li>
//                     <span className="font-bold">Liquidity Boost:</span> Rival
//                     funds strengthen $PEPE’s market position.
//                   </li>
//                   <li>
//                     <span className="font-bold">Token Launch:</span> $PEPE goes
//                     live for trading within 24 hours.
//                   </li>
//                 </ul>
//                 <div
//                   className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
//                   }}
//                 ></div>
//               </div>
//             </SwiperSlide>
//           </Swiper>

//           <div className="!h-[35px] !w-[35px] swiper-button-prev2 swiper-button-next cursor-pointer   absolute !left-[48%] !top-[49%] rotate-180">
//             <img src={awr1} className="w-[16px] h-[16px]" alt="Previous" />
//           </div>
//           <div className="!h-[35px] !w-[35px] swiper-button-next2  swiper-button-next cursor-pointer absolute !right-[-2%] !top-[49%] ">
//             <img src={awr1} alt="Next" className="w-[16px] h-[16px]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RoadmapMobile;

import cardimg2 from "../../assets/mobile_assets/pepe_rd_mob.png";
import cardimg1 from "../../assets/mobile_assets/doge_mob.png";
import vectcard2 from "../../assets/CommunitySec/Ellipse 80.webp";
import vectcard1 from "../../assets/CommunitySec/Ellipse 81.webp";
import topShadow from "../../assets/CommunitySec/rectangle_290.webp";
import bottomShadow from "../../assets/CommunitySec/rectangle_294.webp";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";
function RoadmapMob() {
  const dogeRoadmapPhases = [
    {
      description:
        "<strong>Preparation:</strong> Prove once again why Doge is the undefeated champion. Rally millions of loyal fans and build the strongest Doge Army in meme history.",
    },
    {
      description:
        "<strong>The Fight:</strong> Take on Pepe head-to-head. Show the world that an OG Meme Heavyweight never backs down and secure the crown.",
    },
    {
      description:
        "<strong>Victory Launch:</strong> Celebrate the triumph with a massive launch event and CEX listings, powered by global hype and top industry support.",
    },
    {
      description:
        "<strong>Domination:</strong>  Lead the Doge movement to the next level. Become the fastest growing meme by market cap with millions of Doge holders driving the legacy forward.",
    },
  ];

   const pepeRoadmapPhases = [
    {
      description:
        "<strong>Preparation:</strong>  Rise as the fearless challenger. Unite Pepe fans across the globe and build unstoppable momentum toward the top.  ",
    },
    {
      description:
        "<strong>The Fight:</strong> Shock the meme world by knocking out Doge and becoming the new Meme Heavyweight Champion.",
    },
    {
      description:
        "<strong>Victory Launch:</strong> Ignite the scene with a legendary launch event and CEX listings, fueled by explosive community power and massive worldwide attention.",
    },
    {
      description:
        "<strong>Domination:</strong>  Establish Pepe as the new meme king. Aim for the fastest growth in market cap with millions of believers joining the Pepe movement.",
    },
  ];

  return (
    <div
      className="w-[100%] flex justify-center items-center  h-full Communitybgmob overflow-hidden relative"
      id="roadmap"
    >
      {/* <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={bottomShadow} alt="" />
      </div> */}
      <div className="max-w-[1312px] px-4 py-[30px] space-y-[40px] w-[100%] mx-auto z-10 relative">
        <div>
          <h3
            style={{
              textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
            }}
            className="mb-3 text-center section_heading"
          >
            Roadmap
          </h3>
        </div>
        <div className="flex flex-col justify-between">
          <div className="p-4 relative rounded-[21.168px]">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                backgroundColor: "rgba(0, 0, 0, 0.47)",
                borderRadius: "21.168px",
                zIndex: 1,
              }}
            ></div>
            <img
              src={vectcard1}
              className="absolute left-[8%] top-[8%] z-[10]"
              alt=""
            />
            <div className="flex flex-col items-center roadborder  relative w-[100%]  px-4 py-11  ">
              <div className="w-[100%] flex justify-center min-h-[220px] pr-6 pb-3">
                <img src={cardimg1} className="h-[220px]" alt="" />
              </div>
              <div className=" space-y-[10px]">
                <div>
                  <h3 className="text-[18px] text-center text-[#FFF] font-[Anton] font-[400]">
                    DOGE
                  </h3>
                  <hr className="bg-[#F1A900] h-[5px] border-none w-[68px] mx-auto rounded-full" />
                </div>
                <h4 className="text-[16px] text-center text-[#FFF] font-[Anton] font-[400]">
                  REPRESENTING TEAM DOGE
                </h4>
                <p className="text-[14px] text-center text-[#FFF] font-helvetica font-[400] leading-[136%]">
                  &ldquo;Pepe, you&apos;re just a hyped up fair-weather fighter.
                  This will be my easiest payday. I&apos;ll show you why
                  I&apos;m the undisputed champ!&rdquo;
                </p>
              </div>
              <button
                className="rounded-[60px] font-[Anton] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[400] text-[#000] space-x-2 absolute bottom-[-17px] left-[24%] transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)",
                  boxShadow: "0px 2px 0px 0px #FFF",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)";
                  e.currentTarget.style.boxShadow =
                    "0px 4px 8px rgba(0, 0, 0, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)";
                  e.currentTarget.style.boxShadow = "0px 2px 0px 0px #FFF";
                }}
                onClick={() => {
                  const el = document.getElementById("wallet");
                  if (el) {
                    const y =
                      el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                <img className="mr-2" src={arwr} alt="" />
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6">
          <div
            className=" p-6 rounded-[21.168px] border border-[#FFBF00]/80 "
            style={{
              background: "rgba(118, 93, 19, 0.32)",
              boxShadow: "6.534px -0.817px 32.1px 0 rgba(241, 173, 3, 0.32)",
              backdropFilter: "blur(16.210472106933594px)",
            }}
          >
            <h2 className="text-[20px] font-[700] text-[#FFBF00] font-helvetica text-center mb-8">
              TEAM DOGE ROADMAP
            </h2>
            <div className="space-y-6">
              {dogeRoadmapPhases.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#FFF] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p
                      className="text-[16px] text-[#fff] font-[400] font-helvetica leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: phase.description }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 relative rounded-[21.168px]">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                backgroundColor: "rgba(0, 0, 0, 0.47)",
                borderRadius: "21.168px",
                zIndex: 1,
              }}
            ></div>
            <img
              src={vectcard2}
              className="absolute -right-[40%] -top-[60%]"
              alt=""
            />
            <div className="flex flex-col card2border  w-[100%]  px-4 py-11 justify-between ">
              <div className="flex justify-center min-h-[220px]">
                <img src={cardimg2} className="h-[220px] pr-6" alt="" />
              </div>
              <div className=" space-y-[10px]">
                <div>
                  <h3 className="text-[18px] text-center font-[Anton] text-[#FFF] font-[400]">
                    PEPE
                  </h3>
                  <hr className="bg-[#4EB52A] h-[5px] mx-auto border-none w-[68px] rounded-full" />
                </div>
                <h4 className="text-[16px] text-center font-[Anton] text-[#FFF] font-[400]">
                  REPRESENTING TEAM PEPE
                </h4>
                <p className="text-[14px] text-[#FFF] text-center font-[400] font-helvetica leading-[136%]">
                  &ldquo;Doge, your time is up. You&apos;re just an old dog now.
                  One punch, and I&apos;ll have you chasing your tail! This will
                  be your retirement party!&rdquo;
                </p>
              </div>
              <button
                className="rounded-[60px] font-[Anton] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[400] text-[#000] space-x-2 absolute bottom-[-17px] left-[24%] transition-all duration-300  hover:scale-105"
                style={{
                  background:
                    "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)",
                  boxShadow: "0px 2px 0px 0px #FFF",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, #F2B60F 0%, #F7D635 100%)";
                  e.currentTarget.style.boxShadow =
                    "0px 4px 8px rgba(0, 0, 0, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)";
                  e.currentTarget.style.boxShadow = "0px 2px 0px 0px #FFF";
                }}
                onClick={() => {
                  const el = document.getElementById("wallet");
                  if (el) {
                    const y =
                      el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                BUY NOW <img className="ml-2 " src={arwl} alt="" />
              </button>
            </div>
          </div>

          {/* Right Div - Team Pepe Roadmap */}
          <div
            className=" p-6 rounded-[21.168px] border border-[#4EB52A]/80 "
            style={{
              background: "rgba(29, 114, 0, 0.32)",
              boxShadow: "6.534px -0.817px 32px 0 rgba(116, 255, 96, 0.16)",
              backdropFilter: "blur(16.210472106933594px)",
            }}
          >
            <h2 className="text-[20px] font-[700] text-[#4EB52A] font-helvetica text-center mb-8  ">
              TEAM PEPE ROADMAP
            </h2>
            <div className="space-y-6">
              {pepeRoadmapPhases.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#fff] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p
                      className="text-[16px] text-[#fff] font-[400] font-helvetica leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: phase.description }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapMob;
