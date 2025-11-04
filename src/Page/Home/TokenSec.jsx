import React from "react";
import dogeDP from "../../assets/tokenomics/v2_doge.webp";
import pepeDP from "../../assets/tokenomics/v2_pepe.webp";
import leftCharacterImg from "../../assets/tokenomics/leftCharacterImg.png";
import rightCharacterImg from "../../assets/tokenomics/rightCharacterImg.png";
import ticketLeft from "../../assets/tokenomics/v2_ticket_left.webp";
import ticketRight from "../../assets/tokenomics/v2_ticket_right.webp";
import top_shadow from "../../assets/fightRule/top_shadow.webp";
import bottom_shadow from "../../assets/fightRule/bottom_shadow.webp";

function TokenSec() {
  return (
    <div
      className="relative w-full h-[800px] TokenBG overflow-hidden flex items-center justify-center "
      id="tokenomics"
    >
      {/* Cinematic Background - Dim Locker Room */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
        <img
          src={imgFreepikTheStyleIsCandidImagePhotographyWithNatural360502}
          alt="Locker room background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div> */}

      <img
        src={top_shadow}
        alt="top_shadow"
        className="absolute top-0 left-0 right-0 w-full h-[130px]"
      />
      <img
        src={bottom_shadow}
        alt="bottom_shadow"
        className="absolute bottom-0 left-0 right-0 w-full h-[500px]"
      />
      {/* Main Title - TOKENOMICS */}
      <div className="absolute left-1/2 top-[117px] transform -translate-x-1/2 -translate-y-1/2 z-20">
        <h1 className="text-[90px] font-anton font-normal text-white text-center uppercase tracking-[1.8px] leading-none">
          TOKENOMICS
        </h1>
      </div>

      {/* Team Doge Section - Left */}
      <div className="relative w-full bg-slate-50 flex">
        {/* <div className="absolute left-[0px] top-[68px] z-10 w-full max-w-[1280px] mx-auto">
          <div className="relative w-[348px] h-[250px]">
            <img
              src={ticketLeft}
              alt="Team Doge background"
              className="w-full h-full"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h2 className="text-[36px] font-anton font-normal text-[#e67500] text-center uppercase tracking-[0.72px] mb-10">
                TEAM DOGE
              </h2>

              <div className="space-y-6 w-full">
                 
                <div className="flex items-center space-x-4">
                  <div className="w-[35px] h-[35px] rounded-full bg-[#d3fc00] flex items-center justify-center">
                    <span className="text-[21px]">💰</span>
                  </div>
                  <div className="text-white">
                    <span className="text-[16px] font-helvetica">
                      TOTAL SUPPLY:{" "}
                    </span>
                    <span className="text-[16px] font-helvetica text-[#e67500] font-bold">
                      8.88 BILLION
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-[45px] h-[35px] rounded-full bg-[#d3fc00] flex items-center justify-center">
                    <span className="text-[21px]">⚡️</span>
                  </div>
                  <p className="text-[16px] font-helvetica text-white">
                    Coin will be launched on Ethereum Blockchain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Team Pepe Section - Right */}
        {/* <div className="absolute right-[46px] top-[28px] z-10">
          
          <div className="relative w-[348px] h-[250px]">
            <img
              src={ticketRight}
              alt="Team Pepe background"
              className="w-full h-full"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h2 className="text-[36px] font-anton font-normal text-[#00ff2f] text-center uppercase tracking-[0.72px] mb-10">
                TEAM PEPE
              </h2>

              <div className="space-y-6 w-full">
                 
                <div className="flex items-center space-x-4">
                  <div className="w-[35px] h-[35px] rounded-full bg-[#d3fc00] flex items-center justify-center">
                    <span className="text-[21px]">💰</span>
                  </div>
                  <div className="text-white">
                    <span className="text-[16px] font-helvetica">
                      TOTAL SUPPLY:{" "}
                    </span>
                    <span className="text-[16px] font-helvetica text-[#00ff2f] font-bold">
                      7.89 BILLION
                    </span>
                  </div>
                </div>

                
                <div className="flex items-center space-x-4">
                  <div className="w-[45px] h-[35px] rounded-full bg-[#d3fc00] flex items-center justify-center">
                    <span className="text-[21px]">⚡️</span>
                  </div>
                  <p className="text-[16px] font-helvetica text-white">
                    Coin will be launched on Ethereum Blockchain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Character Images */}
      <div className="absolute inset-0 z-5 flex items-center justify-center max-w-[1280px] mx-auto">
        <div className="absolute top-[260px] left-[-77px] w-[581px] h-auto">
          <div className="absolute left-[60px] top-[-200px] z-10 w-full max-w-[1280px] mx-auto">
            {/* Orange Gradient Info Box */}
            <div className="relative w-[348px] h-[250px]">
              <img
                src={ticketLeft}
                alt="Team Doge background"
                className="w-full h-full"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <h2 className="text-[36px] font-anton font-normal text-[#e67500] text-center uppercase tracking-[0.72px] mb-10">
                  TEAM DOGE
                </h2>

                <div className="space-y-6 w-full">
                  {/* Total Supply */}
                  <div className="flex items-center space-x-4">
                    <div className="w-[35px] h-[35px] rounded-full bg-[#d3fc00] flex items-center justify-center">
                      <span className="text-[21px]">💰</span>
                    </div>
                    <div className="text-white">
                      <span className="text-[16px] font-helvetica">
                        TOTAL SUPPLY:{" "}
                      </span>
                      <span className="text-[16px] font-helvetica text-[#e67500] font-bold">
                        8.88 BILLION
                      </span>
                    </div>
                  </div>

                  {/* Blockchain Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-[45px] h-[35px] rounded-full bg-[#d3fc00] flex items-center justify-center">
                      <span className="text-[21px]">⚡️</span>
                    </div>
                    <p className="text-[16px] font-helvetica text-white">
                      Coin will be launched on Ethereum Blockchain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={leftCharacterImg}
            alt="Pepe character"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div> */}
        </div>

        <div className="absolute z-30 right-[-77px] top-[300px] w-[464px] h-auto">
          <div className="absolute right-[46px] top-[-250px] z-10">
            <div className="relative w-[348px] h-[250px]">
              <img
                src={ticketRight}
                alt="Team Pepe background"
                className="w-full h-full"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <h2 className="text-[36px] font-anton font-normal text-[#00ff2f] text-center uppercase tracking-[0.72px] mb-10">
                  TEAM PEPE
                </h2>

                <div className="space-y-6 w-full">
                  <div className="flex items-center space-x-4">
                    <div className="w-[35px] h-[35px] rounded-full bg-[#d3fc00] flex items-center justify-center">
                      <span className="text-[21px]">💰</span>
                    </div>
                    <div className="text-white">
                      <span className="text-[16px] font-helvetica">
                        TOTAL SUPPLY:{" "}
                      </span>
                      <span className="text-[16px] font-helvetica text-[#00ff2f] font-bold">
                        7.89 BILLION
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-[45px] h-[35px] rounded-full bg-[#d3fc00] flex items-center justify-center">
                      <span className="text-[21px]">⚡️</span>
                    </div>
                    <p className="text-[16px] font-helvetica text-white">
                      Coin will be launched on Ethereum Blockchain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={rightCharacterImg}
            alt="Doge character"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div> */}
        </div>
      </div>

      {/* VS Panel - Center */}
      <div className="absolute left-1/2 top-[224px] transform -translate-x-1/2 z-30">
        <div className="w-[503px] h-[500px] bg-black/10 backdrop-blur-[15px] border-[1.5px] border-[#e67500] rounded-[30px] p-8">
          {/* VS Header */}
          <div className="flex items-center justify-center space-x-[122px] mb-10">
            {/* Doge Character */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-[#fff]  h-[76px] w-[76px] flex justify-center items-center rounded-full overflow-hidden">
                <img
                  src={dogeDP}
                  alt="Doge icon"
                  className="w-[56px] h-[66px] object-cover"
                />
              </div>
              <p className="text-[27px] font-anton text-white text-center uppercase tracking-[0.54px]">
                DOGE
              </p>
            </div>

            {/* VS Text */}
            <div className="text-[72px] font-anton text-[#fff] text-center uppercase tracking-[1.44px]">
              VS
            </div>

            {/* Pepe Character */}
            <div className="flex flex-col items-center space-y-2">
              <div className=" bg-[#fff]  h-[76px] w-[76px] flex justify-center items-center rounded-full overflow-hidden">
                <img
                  src={pepeDP}
                  alt="Pepe icon"
                  className="w-[56px] h-[66px] object-cover"
                />
              </div>
              <p className="text-[27px] font-anton text-white text-center uppercase tracking-[0.54px]">
                PEPE
              </p>
            </div>
          </div>

          {/* Stats Comparison */}
          <div className="space-y-6">
            {/* Presale */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                {/* <span className="text-[24px] font-helvetica text-white">
                  70%
                </span> */}
                <span className="text-[16px] font-helvetica text-white/60 text-center absolute left-1/2 transform -translate-x-1/2">
                  Presale
                </span>
                {/* <span className="text-[24px] font-helvetica text-white">
                  65%
                </span> */}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[24px] font-helvetica text-white">
                  70%
                </span>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#e67500] h-full w-[70%] rounded-[34.5px]"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#00ff2f] h-full w-[65%] rounded-[34.5px] ml-auto"></div>
                </div>
                <span className="text-[24px] font-helvetica text-white">
                  65%
                </span>
              </div>
            </div>

            {/* Team */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                {/* <span className="text-[24px] font-helvetica text-white">
                  3%
                </span> */}
                <span className="text-[16px] font-helvetica text-white/60 text-center absolute left-1/2 transform -translate-x-1/2">
                  Team
                </span>
                {/* <span className="text-[24px] font-helvetica text-white">
                  2%
                </span> */}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[24px] font-helvetica text-white">
                  03%
                </span>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#e67500] h-full w-[3%] rounded-[34.5px]"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#00ff2f] h-full w-[2%] rounded-[34.5px] ml-auto"></div>
                </div>
                <span className="text-[24px] font-helvetica text-white">
                  02%
                </span>
              </div>
            </div>

            {/* Mystery */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                {/* <span className="text-[24px] font-helvetica text-white">
                  12%
                </span> */}
                <span className="text-[16px] font-helvetica text-white/60 text-center absolute left-1/2 transform -translate-x-1/2">
                  Mystery
                </span>
                {/* <span className="text-[24px] font-helvetica text-white">
                  18%
                </span> */}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[24px] font-helvetica text-white">
                  12%
                </span>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#e67500] h-full w-[12%] rounded-[34.5px]"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#00ff2f] h-full w-[18%] rounded-[34.5px] ml-auto"></div>
                </div>
                <span className="text-[24px] font-helvetica text-white">
                  18%
                </span>
              </div>
            </div>

            {/* CEX */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                {/* <span className="text-[24px] font-helvetica text-white">
                  15%
                </span> */}
                <span className="text-[16px] font-helvetica text-white/60 text-center absolute left-1/2 transform -translate-x-1/2">
                  CEX
                </span>
                {/* <span className="text-[24px] font-helvetica text-white">
                  15%
                </span> */}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[24px] font-helvetica text-white">
                  15%
                </span>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#e67500] h-full w-[15%] rounded-[34.5px]"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#00ff2f] h-full w-[15%] rounded-[34.5px] ml-auto"></div>
                </div>
                <span className="text-[24px] font-helvetica text-white">
                  15%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenSec;
