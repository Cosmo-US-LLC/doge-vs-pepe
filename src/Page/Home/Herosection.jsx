import react from "react";

function HeroSection() {
  return (
    <div className="w-[100%] min-h-[791px] h-[100vh] hero_bg pb-[20px]">
      <div className="max-w-[1280px] mx-auto px-8 w-[100%] h-full flex items-end relative">
        <div className="flex items-center  justify-center flex-col space-y-2 pt-12 w-full">
          <h1 className="text-[#fff] text-[70px] text-center font-anton font-[400] leading-[74px] uppercase">
            THE MEME FIGHT<br />OF THE CENTURY
          </h1>

          <div>
            {/* <button
              onClick={() => {
              document.getElementById("wallet")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
              style={{
                background:
                  "linear-gradient(90deg, #FFBF01 36%, #01FE37 134.57%)",
              }}
              className="w-[322px] font-anton leading-normal mx-auto h-[65px] text-[28px] font-[400] rounded-[60px] cursor-pointer relative z-10"
            >
              JOIN THE PRESALE
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
