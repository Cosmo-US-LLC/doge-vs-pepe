import React from "react";
import cardimg2 from "../../assets/CommunitySec/Frame 1410116893.svg";
import cardimg1 from "../../assets/CommunitySec/Frame 1410116892.svg";
import vectcard2 from "../../assets/CommunitySec/Ellipse 80.webp";
import vectcard1 from "../../assets/CommunitySec/Ellipse 81.webp";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";

function CommunitySec() {
  
  return (
    <div className="w-[100%] pt-[10px] overflow-hidden pb-[50px]">
      <div className="max-w-[1168px] space-y-[40px] w-[100%] mx-auto ">
        <div>
            <h3 className="text-[50px] text-[#FFFCFC] text-center font-[700]">The Community Decides </h3>
            <p className="text-[20px] font-[400] text-center text-[#FFF]">This isn’t just about picking a meme <br /> it’s about choosing a winner that you are proud to represent. </p>
        </div>
        <div className="flex justify-between space-x-[15px]">
       <div className="bg-[#28649721] p-4 relative rounded-[21.168px]">
        <img src={vectcard1} className="absolute -left-[20%] top-[30%]" alt="" />
       <div className="flex roadborder  relative max-w-[588px] space-x-[2rem]  w-[100%]  px-5 py-11 justify-between ">

            <div className="w-[38%] min-h-[220px]">
                <img src={cardimg1} className="absolute left-0 top-8" alt="" />
            </div>
            <div className="w-[62%] space-y-[10px]">
                <div>
                <h3 className="text-[22px] text-[#FFF] font-[600]">TEAM DOGE</h3>
                <hr className="bg-[#F1A900] h-[5px] border-none w-[68px] rounded-full" />
                </div>
                <h4 className="text-[20px] text-[#FFF] font-[700]">$DOPE</h4>
                <p className="text-[18px] text-[#FFF] font-[400] leading-[130%]">Choosing me means backing the original meme coin king. I’ll lead the pack and prove there’s only ever been one true leader of the meme coin world.</p>
                <button
  className="rounded-[60px] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[700] text-[#000] space-x-2 absolute bottom-[-17px] left-[32%] transition-all duration-300 hover:scale-105"
  style={{
    background: "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)",
    boxShadow: "0px 2px 0px 0px #FFF",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background =
      "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)";
    e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background =
      "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)";
    e.currentTarget.style.boxShadow = "0px 2px 0px 0px #FFF";
  }}
>
  <img className="mr-2" src={arwr} alt="" />
  BUY $DOGE
</button>

            </div>
        </div>
       </div>
       <div className="bg-[#28649721] p-4 relative rounded-[21.168px]">
        <img src={vectcard2} className="absolute -right-[40%] -top-[60%]" alt="" />
        <div className="flex card2border  max-w-[588px] space-x-[2rem]  w-[100%]  px-5 py-11 justify-between ">

            <div className="w-[38%] min-h-[220px]">
                <img src={cardimg2} className="absolute left-0 top-8" alt="" />
            </div>
            <div className="w-[62%] space-y-[10px]">
                <div>
                <h3 className="text-[22px] text-[#FFF] font-[600]">TEAM PEPE</h3>
                <hr className="bg-[#4EB52A] h-[5px] border-none w-[68px] rounded-full" />
                </div>
                <h4 className="text-[20px] text-[#FFF] font-[700]">$PEGE</h4>
                <p className="text-[18px] text-[#FFF] font-[400] leading-[130%]">Picking me means backing the ultimate meme underdog. I’ll take risks, break rules, and show everyone just how high I can jump.</p>
                <button
  className="rounded-[60px] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[700] text-[#000] space-x-2 absolute bottom-[-17px] left-[32%] transition-all duration-300  hover:scale-105"
  style={{
    background: "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)",
    boxShadow: "0px 2px 0px 0px #FFF",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background =
      "linear-gradient(90deg, #F2B60F 0%, #F7D635 100%)";
    e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background =
      "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)";
    e.currentTarget.style.boxShadow = "0px 2px 0px 0px #FFF";
  }}
>
  BUY $PEPE <img className="ml-2 " src={arwl} alt="" />
</button>

            </div>
        </div>
       </div>
        
        </div>
      </div>
    </div>
  );
}

export default CommunitySec;
