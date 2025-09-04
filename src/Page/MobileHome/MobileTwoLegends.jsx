import React from "react";

import doge_icn from "../../assets/mobile_assets/coins (2).png"
import pepe_icn from "../../assets/mobile_assets/coins (1).png"
import vd_icn from "../../assets/mobile_assets/vs_icn.png"
import two_leg_img from "../../assets/mobile_assets/mob_two_led_sec.png"
function MobileTwoLegends() {
  return (
    <div className="w-[100%] relative flex flex-col justify-center items-center" id="what-is-dogevsPepe">
      <div className=" w-[100%]  mx-auto px-[8px]">
        <div
          className="w-[100%] relative z-[9] flex justify-between items-center border-[1px]  border-[#fff] rounded-[24px] p-[13px]"
          style={{
            background: "rgba(0, 0, 0, 0.50)",
            backdropFilter: "blur(40px)",
          }}
        >
          <div className="flex flex-col space-y-[5px] justify-center ">
           <div className="flex items-center space-x-1 justify-center">
            <img src={doge_icn} alt="" />
             <h3
              className="text-[#FFBF0C] text-center text-[20px] font-[Anton]"
              style={{
                textShadow: "4.556px -0.57px 17.144px #F1AD03",
                webkitTextStrokeWidth: "1.09px",
                webkitTextStrokeColor: "#000",
              }}
            >
              TEAM DOGE
            </h3>
           </div>
            <h4 className="text-[25px] text-center text-[#fff] font-[400] font-[Anton]">
              $180,492.39
            </h4>
              
            <div className='flex items-center '>
              <div className="w-[100%] h-[29px] flex items-center rounded-[24px] pl-[2px] border-[#EFAB00] border-[1px]">
                <div
                  className="w-[55.092px] h-[24.408px] flex items-center justify-center text-[#0B0101] text-[14px] font-[Anton] rounded-[43.445px]"
                  style={{
                    background:
                      "linear-gradient(66deg, #FFC676 25.98%, #FFBF00 65.48%)",
                    boxShadow: " 0 8.582px 16.091px 0 #615500",
                  }}
                >
                  18%
                </div>
              </div>
            </div>
            <button
              className="text-[16px] font-[400] text-[#000] font-[Anton] px-[26px] py-[6px] rounded-[41.842px]"
              style={{
                background:
                  "linear-gradient(90deg, #FFBF01 134.56%, #01FE37 134.57%)",
                boxShadow: "0 1.395px 0 0 #FFF",
              }}
               onClick={() => {
              const el = document.getElementById("wallet");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            >
              BUY NOW
            </button>
          </div>
          <div>
            <img src={vd_icn} alt="" />
          </div>
          <div className="flex flex-col space-y-[5px] justify-center ">
            <div className="flex items-center space-x-1 justify-center">
               <img src={pepe_icn} alt="" />
            <h3
              className="text-[#00FF2F] text-center text-[20px] font-[Anton]"
              style={{
                textShadow: "4.548px -0.568px 17.111px #74FF60",
                webkitTextStrokeWidth: "1.09px",
                webkitTextStrokeColor: "#000",
              }}
            >
              TEAM PEPE
            </h3>
            </div>
            <h4 className="text-[25px] text-center text-[#fff] font-[400] font-[Anton]">
            $240,492.39
            </h4>
            <div className='flex items-center'>
             
              <div className="w-[100%] h-[29px] border-[#09FC3C] border-[1px] flex items-center rounded-[24px] !pl-[1px]">
                <div
                  className="w-[55.092px] flex items-center justify-center h-[24.408px] text-[#0B0101] text-[14px] font-[Anton] rounded-[43.445px]"
                  style={{
                    background:
                      "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
                    boxShadow: "0 8.565px 16.06px 0 #615500",
                  }}
                >
                  24%
                </div>
              </div>
            </div>
            <button
             onClick={() => {
              const el = document.getElementById("wallet");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
              className="text-[16px] font-[400] text-[#000] font-[Anton] px-[26px] py-[6px] rounded-[41.842px]"
              style={{
                background:
                  "linear-gradient(90deg, #01FE37 36%, #01FE37 36.01%)",
                boxShadow: "0 1.395px 0 0 #FFF",
              }}
            >
              BUY NOW
            </button>
          </div>
        </div>
        <div className="  z-[1] absolute left-0 top-[5%] h-[100%] w-[100%]">
          <img src={two_leg_img} alt="" />
        </div>
        <div className="w-[100%] relative z-[9] min-h-[320px] h-[100%] px-[8px]  flex justify-center items-end pb-[2rem]">
          <p className="text-center text-[#FFFCFC] leading-[125%] text-[32px] font-[Anton]">
            Two Legends.
            <br /> One Crown.
          </p>
        </div>
        <div className=" w-[100%] relative z-[9]">
          <div
            className="border-[1px] border-[#fff] px-1 py-5 !rounded-[24px]  flex flex-col gap-4"
            style={{
              background: "rgba(0, 0, 0, 0.50)",
              backdropFilter: "blur(40px)",
            }}
          >
            <p className="font-[Helvetica] text-[#FFFCFC] font-[700] leading-[150%] text-center">
              Only one will win this epic fight and launch! <br />
              <br /> This is the first crypto meme battle where you back your
              favorite legendary meme by buying tokens during the presale and
              joining their team. <br />
              <br /> In one corner: Doge, the undefeated OG Meme Heavyweight
              Champion, dominating for years with his wild, unpredictable style.
              <br />
              <br /> In the other: Pepe, the fearless rising star, already in
              the top 3 meme heavyweights, known for his brutal knockouts.
              <br />
              <br /> The first to hit $1M wins the presale round.
              <br />
              <br /> The choice is yours!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTwoLegends;
