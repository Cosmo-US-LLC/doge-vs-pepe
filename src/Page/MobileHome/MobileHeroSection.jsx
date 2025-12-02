import hero_msg from "../../assets/hero/v2_hero_msg.webp";
import dvp_fight_video from "../../assets/hero/dvp_fight_video.webm";
import bottom_shadow from "../../assets/fightRule/bottom_shadow.webp";
import BannerSecMob from "./BannerSecMob";

function MobileHeroSection() {
  return (
    <div className="w-[100%] pt-[150px] hero_bg">
      <div className="max-w-[1280px] px-2 mx-auto w-[100%] h-full flex items-end relative">
        <div className="flex relative flex-col justify-center items-center w-full">
          <img
            src={hero_msg}
            alt="hero_msg"
            className="absolute top-[-52px] left-[45%] translate-x-[-50%] w-[320px] h-auto z-40"
          />

          <div className="flex relative z-20 justify-center items-center space-x-4">
            <h1 className="text-[#fff] tracking-[-1px] text-[69px] relative z-20 text-center font-anton font-[400] leading-[normal] uppercase ">
              DOGE vs PEPE
            </h1>
          </div>

          <div
            style={{
              boxShadow: "0 -6px 10px 0 rgba(0, 0, 0, 0.60)",
            }}
            className="gradient-bg overflow-hidden relative top-[-30px] shadow-[0 -6px 10px 0 rgba(0, 0, 0, 0.60)] rounded-[12px] z-30 p-[1px] "
          >
            <div className="overflow-hidden rounded-[12px] relative">
              <img
                src={bottom_shadow}
                alt="bottom_shadow"
                className="absolute top-[-40px] left-0 right-0 w-[90%] mx-auto h-[20px] z-10"
              />
              <video
                src={dvp_fight_video}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover object-top w-full h-full"
              />
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
            className="btn-primary relative top-[-15px] gradient-bg !text-[22px] w-full py-[14px] "
          >
            Join the Presale
          </button>
        </div>
      </div>
      <BannerSecMob />
    </div>
  );
}

export default MobileHeroSection;
