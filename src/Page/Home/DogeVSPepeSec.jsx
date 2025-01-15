import React from "react";
import bit from "../../assets/DogeVSPepeSec/bit.svg";
import coin from "../../assets/DogeVSPepeSec/coin.svg";
import tioicn from "../../assets/DogeVSPepeSec/crypto.svg";
import arw from "../../assets/DogeVSPepeSec/arw.svg";

function DogeVSPepeSec() {
  return (
    <div className="relative w-[100%] pt-[90px] pb-[80px] dogevspepebg overflow-hidden">
      <div className="max-w-[1038px] w-[100%] space-y-[50px] mx-auto ">
        <div className=" w-[100%]">
          <h3 className="text-[50px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
          DOGE VS PEPE IS MAKING HEADLINES
          </h3>
        </div>
        <div className="flex justify-between space-x-[30px]">
        <div className="crypbg rounded-[15.016px] border min-h-[614.73px] max-w-[675.732px]  border-[#fff]">
            <div className="py-[20px] px-[35px] bg-[#fff] rounded-t-[15.016px]"><img src={tioicn} alt="" /></div>
           <div className="px-[35px] space-y-[20px] pt-[260px] pb-[20px]">
           <div className="space-y-[0px]">
                <h3 className="text-[42.703px] font-[400] text-[#fff] leading-[100%]  uppercase font-HiJack"><span className="text-[#FFBF01]">Doge</span> vs <span className="text-[#00FF2F]">Pepe</span></h3>
                <h4 className="text-[28.156px] pb-[10px] font-[400] leading-[132.8%] text-[#fff]">The Most Anticipated Crypto Event!</h4>
                <p className="text-[16.893px] font-[400] leading-[22.434px] text-[#fff]">The crypto world is abuzz with the rivalry between Dogecoin (DOGE) and the emerging meme coin, Pepe (PEPE). Once the undisputed leader in the meme coin space, Dogecoin faces stiff competition as Pepe rapidly gains traction. This lighthearted battle between two internet-fueled icons underscores the unpredictable and community-driven nature of cryptocurrency markets.</p>
            </div>
            <div className="flex space-x-2">
                <h4 className="text-[16.893px] font-[700] text-[#fff]">Find out more</h4>
                <img src={arw} alt="" />
            </div>
           </div>
        </div>
        <div className="flex flex-col justify-between space-y-[20px]">
        <div className="crypbg2 rounded-[15.016px] border min-h-[300.97px]  max-w-[675.732px]  border-[#fff]">
            <div className="py-[10px] px-[15px] bg-[#fff] rounded-t-[15.016px]"><img src={coin} alt="" /></div>
           <div className="px-[15px] pt-[120px] space-y-[10px]  pb-[20px]">
           <div className="">
                <h3 className="text-[20.907px] leading-[100%] font-[400] text-[#fff] uppercase font-HiJack"><span className="text-[#FFBF01]">Doge</span> vs <span className="text-[#00FF2F]">Pepe</span></h3>
                <h4 className="text-[13.785px] font-[400] text-[#fff]">Popular Memes Are Fighting for the #1 Spot</h4>
                <p className="text-[8.271px] pt-[10px] font-[400]  text-[#fff]">Get ready for a showdown like no other! The much-anticipated Doge vs. Pepe boxing pre-sale event has launched, and it’s already creating waves in the crypto community. These two iconic internet legends are stepping into the virtual ring, offering fans an exclusive opportunity to secure pre-sale tokens tied to this one-of-a-kind event. With Doge’s loyal following and Pepe’s cult-like status,.</p>
            </div>
            <div className="flex space-x-2">
                <h4 className="text-[8.271px] font-[700] text-[#fff]">Find out more</h4>
                <img src={arw} alt="" />
            </div>
           </div>
        </div>
        <div className="crypbg3 rounded-[15.016px] border min-h-[300.97px]  max-w-[675.732px]  border-[#fff]">
            <div className="py-[10px] px-[15px] bg-[#fff] rounded-t-[15.016px]"><img src={bit} alt="" /></div>
           <div className="px-[15px] pt-[100px] space-y-[10px]  pb-[20px]">
           <div className="">
                <h3 className="text-[20.907px] leading-[100%] font-[400] text-[#fff] uppercase font-HiJack"><span className="text-[#FFBF01]">Doge</span> vs <span className="text-[#00FF2F]">Pepe</span></h3>
                <h4 className="text-[13.785px] font-[400] text-[#fff]">Battle of the Meme Icons!</h4>
                <p className="pt-[5px] text-[8.271px] font-[400]  text-[#fff]">Doge and Pepe are more than just memes—they represent the power of the internet to connect, inspire, and entertain. This pre-sale event encapsulates that spirit, offering something for everyone: excitement for fight fans, opportunity for crypto enthusiasts, and fun for meme lovers. As the countdown to the big showdown continues, the Doge vs. Pepe boxing event promises to deliver a knockout. </p>
            </div>
            <div className="flex space-x-2">
                <h4 className="text-[8.271px] font-[700] text-[#fff]">Find out more</h4>
                <img src={arw} alt="" />
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
