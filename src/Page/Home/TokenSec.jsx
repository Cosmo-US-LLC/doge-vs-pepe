import React from "react";
// Figma assets
const imgFreepikTheStyleIsCandidImagePhotographyWithNatural360502 =
  "https://www.figma.com/api/mcp/asset/4635f322-2ded-443f-ada3-b9955d9d613c";
const imgPepeImage =
  "https://www.figma.com/api/mcp/asset/475ccc2c-e9d7-4aa1-a444-3da60cb92aaa";
const imgDogeImage =
  "https://www.figma.com/api/mcp/asset/00da171f-0d4b-4394-ba6a-ba35beb076ee";
const imgLeftCharacterImage =
  "https://www.figma.com/api/mcp/asset/090991ba-92c0-464a-9b2b-9a655f3bab03";
const imgRightCharacterImage =
  "https://www.figma.com/api/mcp/asset/979fea61-b435-4e12-97fc-217c195e9aed";
const imgFreepikTheStyleIsCandidImagePhotographyWithNatural360501 =
  "https://www.figma.com/api/mcp/asset/02f3745a-ed6a-4b43-973e-64ccefc64480";
const imgEllipse30 =
  "https://www.figma.com/api/mcp/asset/d215be05-8c18-4053-ac8b-57c8937ca4d8";
const imgSubtract =
  "https://www.figma.com/api/mcp/asset/cc73cb82-a92f-4900-8a8f-8bf260cd2036";
const imgEllipse6468 =
  "https://www.figma.com/api/mcp/asset/c22c2eba-8161-4805-9749-037e747c6fa8";
const imgEllipse31 =
  "https://www.figma.com/api/mcp/asset/b7e54173-df87-4770-a7db-566e1a88aadd";

function TokenSec() {
  return (
    <div className="relative w-full h-[1057px] overflow-hidden" id="tokenomics">
      {/* Cinematic Background - Dim Locker Room */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
        <img
          src={imgFreepikTheStyleIsCandidImagePhotographyWithNatural360502}
          alt="Locker room background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Main Title - TOKENOMICS */}
      <div className="absolute left-1/2 top-[67px] transform -translate-x-1/2 -translate-y-1/2 z-20">
        <h1 className="text-[90px] font-anton font-normal text-white text-center uppercase tracking-[1.8px] leading-none">
          TOKENOMICS
        </h1>
      </div>

      {/* Team Doge Section - Left */}
      <div className="absolute left-[46px] top-[28px] z-10">
        {/* Orange Gradient Info Box */}
        <div className="relative w-[348px] h-[250px]">
          <img
            src={imgSubtract}
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
                <div className="w-[45px] h-[45px] rounded-full bg-[#d3fc00] flex items-center justify-center">
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
                <div className="w-[45px] h-[45px] rounded-full bg-[#d3fc00] flex items-center justify-center">
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

      {/* Team Pepe Section - Right */}
      <div className="absolute right-[46px] top-[28px] z-10">
        {/* Green Gradient Info Box */}
        <div className="relative w-[348px] h-[250px]">
          <img
            src={imgSubtract}
            alt="Team Pepe background"
            className="w-full h-full"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <h2 className="text-[36px] font-anton font-normal text-[#00ff2f] text-center uppercase tracking-[0.72px] mb-10">
              TEAM PEPE
            </h2>

            <div className="space-y-6 w-full">
              {/* Total Supply */}
              <div className="flex items-center space-x-4">
                <div className="w-[45px] h-[45px] rounded-full bg-[#d3fc00] flex items-center justify-center">
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

              {/* Blockchain Info */}
              <div className="flex items-center space-x-4">
                <div className="w-[45px] h-[45px] rounded-full bg-[#d3fc00] flex items-center justify-center">
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

      {/* Character Images */}
      <div className="absolute inset-0 z-5">
        {/* Pepe Image - Left */}
        <div className="absolute left-[-77px] top-0 w-[581px] h-[858px]">
          <img
            src={imgPepeImage}
            alt="Pepe character"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        </div>

        {/* Doge Image - Right */}
        <div className="absolute right-[-77px] top-[34px] w-[464px] h-[824px]">
          <img
            src={imgDogeImage}
            alt="Doge character"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        </div>
      </div>

      {/* VS Panel - Center */}
      <div className="absolute left-1/2 top-[144px] transform -translate-x-1/2 z-30">
        <div className="w-[553px] h-[469px] bg-black/10 backdrop-blur-[15px] border-[1.5px] border-[#e67500] rounded-[30px] p-8">
          {/* VS Header */}
          <div className="flex items-center justify-center space-x-[122px] mb-8">
            {/* Doge Character */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-[90px] h-[90px] rounded-full bg-white overflow-hidden">
                <img
                  src={imgLeftCharacterImage}
                  alt="Doge icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[27px] font-anton text-white text-center uppercase tracking-[0.54px]">
                DOGE
              </p>
            </div>

            {/* VS Text */}
            <div className="text-[72px] font-anton text-white text-center uppercase tracking-[1.44px]">
              VS
            </div>

            {/* Pepe Character */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-[90px] h-[90px] rounded-full bg-white overflow-hidden">
                <img
                  src={imgRightCharacterImage}
                  alt="Pepe icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[27px] font-anton text-white text-center uppercase tracking-[0.54px]">
                PEPE
              </p>
            </div>
          </div>

          {/* Stats Comparison */}
          <div className="space-y-4">
            {/* Presale */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[24px] font-helvetica text-white">
                  70%
                </span>
                <span className="text-[16px] font-helvetica text-white/60 text-center absolute left-1/2 transform -translate-x-1/2">
                  Presale
                </span>
                <span className="text-[24px] font-helvetica text-white">
                  65%
                </span>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#e67500] h-full w-[70%] rounded-[34.5px]"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#00ff2f] h-full w-[65%] rounded-[34.5px] ml-auto"></div>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[24px] font-helvetica text-white">
                  3%
                </span>
                <span className="text-[16px] font-helvetica text-white/60 text-center absolute left-1/2 transform -translate-x-1/2">
                  Team
                </span>
                <span className="text-[24px] font-helvetica text-white">
                  2%
                </span>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#e67500] h-full w-[3%] rounded-[34.5px]"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#00ff2f] h-full w-[2%] rounded-[34.5px] ml-auto"></div>
                </div>
              </div>
            </div>

            {/* Mystery */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[24px] font-helvetica text-white">
                  12%
                </span>
                <span className="text-[16px] font-helvetica text-white/60 text-center absolute left-1/2 transform -translate-x-1/2">
                  Mystery
                </span>
                <span className="text-[24px] font-helvetica text-white">
                  18%
                </span>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#e67500] h-full w-[12%] rounded-[34.5px]"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#00ff2f] h-full w-[18%] rounded-[34.5px] ml-auto"></div>
                </div>
              </div>
            </div>

            {/* CEX */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[24px] font-helvetica text-white">
                  15%
                </span>
                <span className="text-[16px] font-helvetica text-white/60 text-center absolute left-1/2 transform -translate-x-1/2">
                  CEX
                </span>
                <span className="text-[24px] font-helvetica text-white">
                  15%
                </span>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#e67500] h-full w-[15%] rounded-[34.5px]"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-[34.5px] h-[12px] overflow-hidden">
                  <div className="bg-[#00ff2f] h-full w-[15%] rounded-[34.5px] ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenSec;
