import React from "react";
import card1 from "../../assets/DogeVSPepeSec/v2_making_headlines_c1.webp";
import card2 from "../../assets/DogeVSPepeSec/v2_making_headline_c2.webp";
import card3 from "../../assets/DogeVSPepeSec/v2_making_headline_c3.webp";
import cryptoLogo from "../../assets/DogeVSPepeSec/v2_crypto_logo.webp";
import coinSpeakerLogo from "../../assets/DogeVSPepeSec/v2_coinspeake_logo.webp";
import bitcoinistLogo from "../../assets/DogeVSPepeSec/v2_bitcoin_logo.webp";
import arw from "../../assets/DogeVSPepeSec/arw.svg";
import topShadow from "../../assets/DogeVSPepeSec/top-shadow.webp";
import bottomShadow from "../../assets/DogeVSPepeSec/bottom-shadow.webp";
import cryptoNewsLogo from "../../assets/DogeVSPepeSec/v2_dvp_logo.webp";

function DogeVSPepeSec() {
  return (
    <div className="relative w-[100%] h-[700px] flex justify-center items-center dogeVsPepeBG overflow-hidden">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={bottomShadow} alt="" />
      </div>
      <div className="max-w-[1038px] w-[100%] space-y-[50px] mx-auto relative z-10">
        <div className=" w-[100%]">
          <img
            src={cryptoNewsLogo}
            alt=""
            className="w-full max-w-[760px] mx-auto h-full"
          />
          <h2 className="text-center">IS MAKING HEADLINES</h2>
        </div>
        <div className="flex justify-center space-x-[20px]">
          {/* Card 1 - THE OG MEME IS BACK */}
          <div className="relative w-[350px] h-[330px] rounded-[20px] overflow-hidden border-[4px] border-[#fff]">
            {/* Background Image */}
            <img
              src={card1}
              alt="Doge boxing"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end">
              <div className=" space-y-4">
                <h3 className="p-6 text-[28px] font-bold text-white uppercase font-anton leading-tight">
                  THE OG MEME IS BACK!
                </h3>

                <p className="p-6 text-white font-helvetica text-[14px] leading-[20px]">
                  Doge or Pepe? Fans are rallying to decide who has the
                  strongest community. Will Doge stay on top, or is Pepe set to
                  dethrone him? The battle is on!
                </p>

                <div className="flex justify-between items-center bg-[#fff] h-[60px] p-6">
                  <div className="flex items-center space-x-2">
                    <img src={cryptoLogo} alt="" className="w-[140px] h-full" />
                  </div>
                  <div className="flex items-center text-[#000] text-[12px]">
                    <span>Find out more</span>
                    <img src={arw} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - TWO LEGENDS FACE OFF */}
          <div className="relative w-[350px] h-[330px] rounded-[20px] overflow-hidden border-[4px] border-[#fff]">
            {/* Background Image */}
            <img
              src={card2}
              alt="Doge vs Pepe boxing"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end">
              <div className="space-y-4">
                <h3 className=" p-6 text-[28px] font-bold text-white uppercase font-anton leading-tight">
                  TWO LEGENDS FACE OFF
                </h3>

                <p className="p-6  text-white font-helvetica text-[14px] leading-[20px]">
                  Finding the next winning narrative is the key to hitting big
                  with memes. Two presales, but only one will win and launch!
                  Backed by two of the most iconic meme coins, this might just
                  be it.
                </p>

                <div className="flex justify-between items-center bg-[#fff] h-[60px] p-6">
                  <div className="flex items-center space-x-2">
                    <img
                      src={coinSpeakerLogo}
                      alt=""
                      className="w-[140px] h-full"
                    />
                  </div>
                  <div className="flex items-center space-x-1 text-[#000] text-[12px]">
                    <span>Find out more</span>
                    <img src={arw} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - THE NEW MEME KING */}
          <div className="relative w-[350px] h-[330px] rounded-[20px] overflow-hidden border-[4px] border-[#fff]">
            {/* Background Image */}
            <img
              src={card3}
              alt="Pepe boxing"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end">
              <div className=" space-y-4">
                <h3 className=" p-6 text-[28px] font-bold text-white uppercase font-anton leading-tight">
                  THE NEW MEME KING?
                </h3>

                <p className="p-6  text-white font-helvetica text-[14px] leading-[20px]">
                  Two legendary memes face off in an exciting presale, with
                  rumors of well-known crypto developers behind the project.
                  This could be the next big thing!
                </p>

                <div className="flex justify-between items-center bg-[#fff] h-[60px] p-6">
                  <div className="flex items-center space-x-2">
                    <img
                      src={bitcoinistLogo}
                      alt=""
                      className="w-[140px] h-full"
                    />
                  </div>
                  <div className="flex items-center space-x-1 text-[#000] text-[12px]">
                    <span>Find out more</span>
                    <img src={arw} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogeVSPepeSec;
