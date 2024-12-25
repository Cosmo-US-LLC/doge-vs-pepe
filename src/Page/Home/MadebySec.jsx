import React from "react";
import babeDoge from "../../assets/madebySec/baby-doge-logo.svg";
import babePepe from "../../assets/madebySec/baby-pepe.svg";
import downShodow from "../../assets/madebySec/down-shodwo.svg";

function MadebySec() {
  return (
    <div className="relative w-[100%] bgMadebySec   overflow-hidden w-[100%] pt-[60px] pb-[80px]">
      <div className="max-w-[1291.63px] min-h-[80vh] flex items-center justify-center h-[100%] space-y-[45px] w-[100%] mx-auto relative ">
        <div className="space-y-[8px]">
          <h3 className="text-[#fff] text-center text-[42px] leading-[104.377%] font-[700]">
            Made by Ex Team Members Of
          </h3>
          <h4 className="text-center space-x-3  text-[64px] pt-4">
            <span
              className="text-[#EFAB00] leading-[100%] text-[58px] font-[900]"
              style={{
                textShadow: "6.534px -0.817px 24.583px #F1AD03",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              Baby Doge
            </span>
            <span
              className="text-[#fff] leading-[100%] text-[88px] font-[900] "
              style={{
                textShadow: "6.534px -0.817px 24.583px #F1AD03",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              &
            </span>
            <span
              className="text-[#00FF2F] leading-[100%] text-[83.305px] font-[900]"
              style={{
                textShadow: "6.534px -0.817px 24.583px #74FF60",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              PEPE
            </span>
          </h4>
          <div className="flex items-end justify-center w-full gap-8 pt-6">
            <div className="w-[180px] h-[220px] bg-[#ECB214] rounded-[15px] shadow-md flex flex-col items-center justify-center p-4">
              <img
                src={babeDoge}
                alt="Dog"
                className="w-[100px] h-[100px] object-contain"
              />

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-black">Market Cap</h3>
                <p className="text-2xl font-extrabold text-white">$530M</p>
              </div>
            </div>
            <div className="w-[180px] h-[220px] bg-[#ECB214] rounded-[15px] shadow-md flex flex-col items-center justify-center p-4">
              <img
                src={babePepe}
                alt="Dog"
                className="w-[100px] h-[100px] object-contain"
              />

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-black">Market Cap</h3>
                <p className="text-2xl font-extrabold text-white">$6.93B</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={downShodow}
        alt="Dog"
        className="absolute bottom-0 left-0 right-0"
      />
    </div>
  );
}

export default MadebySec;
