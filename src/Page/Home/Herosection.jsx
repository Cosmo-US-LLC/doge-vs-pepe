import react from "react";
import { Send } from "lucide-react";
import DVPHero from "../../assets/hero/v2_hero_section_dvp.webp";

function HeroSection() {
  return (
    <div className="w-[100%] h-[100vh] hero_bg">
      <div className="max-w-[1280px] mx-auto px-8 w-[100%]  h-full flex items-end relative">
        <div className="flex items-center justify-center flex-col space-y-2 pt-12 w-full">
          <div>
            <div className="flex justify-center mb-4 bg-white/20"></div>
            <h1 className="text-[#fff] text-[175.566px] z-20 text-center font-anton font-[400] leading-[74px] uppercase">
              DOGE vs PEPE
            </h1>
          </div>

          <div className="">
            <div className="w-[1180px] mx-auto h-[490px] overflow-hidden rounded-[18px]">
              <img src={DVPHero} alt="heroSec" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
