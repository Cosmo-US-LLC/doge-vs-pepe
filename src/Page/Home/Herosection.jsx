import react from "react";
import DVPHero from "../../assets/hero/v2_hero_section_dvp.webp";
import hero_msg from "../../assets/hero/v2_hero_msg.webp";
import { X, Copy, Send } from "lucide-react";

function HeroSection() {
  return (
    <div className="w-[100%] h-[800px] hero_bg">
      <div className="max-w-[1280px] mx-auto w-[100%] h-full flex items-end relative">
        <div className="flex items-center justify-center flex-col space-y-4  w-full relative">
          <img
            src={hero_msg}
            alt="hero_msg"
            className="absolute top-[-30px] left-[55%] translate-x-[-50%] w-[320px] h-auto z-40"
          />

          <div className="flex items-center justify-center space-x-4 relative z-20">
            <div className="flex flex-col space-y-2">
              <div className="w-[40px] h-[40px] rounded-full border bg-[rgba(255, 255, 255, 0.20)] flex items-center justify-center">
                <Send className="w-5 h-5 text-[#E67500]" />
              </div>
              <div className="w-[40px] h-[40px] rounded-full border bg-[rgba(255, 255, 255, 0.20)] flex items-center justify-center">
                <X className="w-6 h-6 text-[#FECF30]" />
              </div>
              <div className="w-[40px] h-[40px] rounded-full border bg-[rgba(255, 255, 255, 0.20)] flex items-center justify-center">
                <Copy className="w-5 h-5 text-[#00FF2F]" />
              </div>
            </div>
            <h1 className="text-[#fff]  text-[175.566px] relative z-20 text-center font-anton font-[400] leading-[74px] uppercase">
              DOGE vs PEPE
            </h1>
          </div>

          <div className="gradient-bg overflow-hidden rounded-[18px] p-[1px]">
            <div className="w-[1210px] mx-auto h-[520px] overflow-hidden rounded-[18px]">
              <img src={DVPHero} alt="heroSec" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
