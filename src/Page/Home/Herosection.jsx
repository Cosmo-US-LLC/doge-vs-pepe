import DVPHero from "../../assets/hero/v2_hero_section_dvp.webp";
import hero_msg from "../../assets/hero/v2_hero_msg.webp";

function HeroSection() {
  return (
    <div className="w-[100%] h-[800px] hero_bg">
      <div className="max-w-[1280px] mx-auto w-[100%] h-full flex items-end relative">
        <div className="flex items-center justify-center flex-col space-y-3  w-full relative">
          <img
            src={hero_msg}
            alt="hero_msg"
            className="absolute top-[-30px] left-[55%] translate-x-[-50%] w-[320px] h-auto z-40"
          />

          <div className="flex items-center justify-center space-x-4 relative z-20">
            <div className="flex flex-col space-y-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] rounded-full border-[#fff] border bg-[rgba(255, 255, 255, 0.20] flex items-center justify-center hover:bg-[rgba(255, 255, 255, 0.30)] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M9.31305 13.6363L9.0153 17.8244C9.44131 17.8244 9.62581 17.6414 9.84707 17.4216L11.8444 15.5128L15.983 18.5437C16.742 18.9667 17.2767 18.7439 17.4815 17.8454L20.1981 5.11609L20.1988 5.11534C20.4396 3.99331 19.7931 3.55455 19.0535 3.82981L3.08565 9.9432C1.99588 10.3662 2.01238 10.9737 2.9004 11.249L6.98275 12.5188L16.4652 6.58537C16.9115 6.28987 17.3172 6.45337 16.9835 6.74888L9.31305 13.6363Z"
                    fill="#E67500"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] rounded-full border bg-[rgba(255, 255, 255, 0.20)] flex items-center justify-center hover:bg-[rgba(255, 255, 255, 0.30)] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M12.9624 9.87177L19.6633 2.25H18.0754L12.2571 8.86788L7.60992 2.25H2.25L9.27738 12.2574L2.25 20.25H3.83799L9.98237 13.2613L14.8901 20.25H20.25L12.9621 9.87177H12.9624ZM10.7875 12.3456L10.0755 11.3491L4.41017 3.41971H6.84922L11.4212 9.81895L12.1332 10.8155L18.0762 19.1335H15.6371L10.7875 12.346V12.3456Z"
                    fill="#FECF30"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/Doge_V_Pepe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] rounded-full border bg-[rgba(255, 255, 255, 0.20)] flex items-center justify-center hover:bg-[rgba(255, 255, 255, 0.30)] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M16.9856 2.25H8.51442C7.53996 2.25 6.75 3.08932 6.75 4.12467V14.6253C6.75 15.6607 7.53996 16.5 8.51442 16.5H16.9856C17.96 16.5 18.75 15.6607 18.75 14.6253V4.12467C18.75 3.08932 17.96 2.25 16.9856 2.25Z"
                    fill="#00FF2F"
                  />
                  <path
                    d="M15.9 17.5687V17.9719C15.8998 18.5064 15.6874 19.0189 15.3094 19.3969C14.9314 19.7748 14.4189 19.9873 13.8844 19.9875H5.01562C4.48111 19.9873 3.96856 19.7748 3.5906 19.3969C3.21264 19.0189 3.00021 18.5064 3 17.9719V7.4906C3.00021 6.95609 3.21264 6.44353 3.5906 6.06557C3.96856 5.68762 4.48111 5.47519 5.01562 5.47498H5.33018V14.8517C5.33188 15.5717 5.61867 16.2618 6.12783 16.771C6.63698 17.2802 7.32706 17.567 8.04713 17.5687H15.9Z"
                    fill="#00FF2F"
                  />
                </svg>
              </a>
            </div>
            <h1 className="text-[#fff] text-[175.566px] relative z-20 text-center font-anton font-[400] leading-[74px] uppercase ">
              DOGE vs PEPE
            </h1>
          </div>

          <div className="gradient-bg overflow-hidden rounded-[30px] z-30 p-[1px] shadow-[0_-6px_0_rgba(0,0,0,0.7)]">
            <div className="w-[1240px] mx-auto h-[520px] overflow-hidden rounded-[30px]">
              <img src={DVPHero} alt="heroSec" className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
