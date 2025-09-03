import cardimg2 from "../../assets/CommunitySec/card_img (2).png";
import cardimg1 from "../../assets/CommunitySec/card_img (1).png";
import vectcard2 from "../../assets/CommunitySec/Ellipse 80.webp";
import vectcard1 from "../../assets/CommunitySec/Ellipse 81.webp";
import topShadow from "../../assets/CommunitySec/rectangle_290.webp";
import bottomShadow from "../../assets/CommunitySec/rectangle_294.webp";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";

function CommunitySec() {
  const dogeRoadmapPhases = [
    {
      description:
        "<strong>Preparation:</strong> Prove once again why Doge is the undefeated champion. Rally millions of loyal fans and build the strongest Doge Army in meme history.",
    },
    {
      description:
        "<strong>The Fight:</strong> Take on Pepe head-to-head. Show the world that an OG Meme Heavyweight never backs down and secure the crown.",
    },
    {
      description:
        "<strong>Victory Launch:</strong> Celebrate the triumph with a massive launch event and CEX listings, powered by global hype and top industry support.",
    },
    {
      description:
        "<strong>Domination:</strong>  Lead the Doge movement to the next level. Become the fastest growing meme by market cap with millions of Doge holders driving the legacy forward.",
    },
  ];

  const pepeRoadmapPhases = [
    {
      description:
        "<strong>Concept Development:</strong>  Craft the vision for $PEPE, combining Pepe’s iconic status with a thrilling presale.",
    },
    {
      description:
        "<strong>Website Launch:</strong>  Launch the $PEPE site with presale details and community tools.",
    },
    {
      description: "<strong>Community Setup:</strong>  Create Telegram channel and invite Team Pepe fans to join.",
    },
    {
      description:
        "<strong>Marketing Kickoff</strong>  Launch social media campaigns, influencer shoutouts, and press releases to unite the Pepe army.",
    },
  ];

  return (
    <div className="w-[100%] flex justify-center items-center  h-full Communitybg overflow-hidden relative"
    id="roadmap"
    >
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={bottomShadow} alt="" />
      </div>
      <div
        className="max-w-[1312px] px-[30px] py-[80px] space-y-[40px] w-[100%] mx-auto z-10 relative"
       
      >
        <div>
          <h3
            style={{
              textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
            }}
            className="mb-3 text-center section_heading"
          >
            Roadmap
          </h3>
        </div>
        <div className="flex justify-between space-x-[130px]">
          <div className="p-4 relative rounded-[21.168px]">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                backgroundColor: "rgba(0, 0, 0, 0.47)",
                borderRadius: "21.168px",
                zIndex: 1,
              }}
            ></div>
            <img
              src={vectcard1}
              className="absolute -left-[18%] top-[6%] z-[10]"
              alt=""
            />
            <div className="flex roadborder  relative max-w-[588px] space-x-[2rem]  w-[100%]  px-5 py-11 justify-between ">
              <div className="w-[38%] min-h-[220px]">
                <img
                  src={cardimg1}
                  className="h-[220px] absolute left-0 top-2"
                  alt=""
                />
              </div>
              <div className="w-[62%] space-y-[10px]">
                <div>
                  <h3 className="text-[22px] text-[#FFF] font-[Anton] font-[400]">
                    TEAM DOGE
                  </h3>
                  <hr className="bg-[#F1A900] h-[5px] border-none w-[68px] rounded-full" />
                </div>
                <h4 className="text-[20px] text-[#FFF] font-[Anton] font-[400]">
                  $DOGE
                </h4>
                <p className="text-[18px] text-[#FFF] font-helvetica font-[400] leading-[136%]">
                  “Pepe, you’re just a hyped up fair-weather fighter, This will be my easiest payday. I’ll show you why I’m the undisputed champ!”
                </p>
              </div>
            <button
                                            className="rounded-[60px] font-[Anton] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[30px] leading-[80%] font-[400] text-[#000] space-x-2 absolute bottom-[-17px] left-[24%] transition-all duration-300 hover:scale-105"
                                            style={{
                                              background:
                                                "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)",
                                              boxShadow: "0px 2px 0px 0px #FFF",
                                            }}
                                            onMouseEnter={(e) => {
                                              e.currentTarget.style.background =
                                                "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)";
                                              e.currentTarget.style.boxShadow =
                                                "0px 4px 8px rgba(0, 0, 0, 0.25)";
                                            }}
                                            onMouseLeave={(e) => {
                                              e.currentTarget.style.background =
                                                "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)";
                                              e.currentTarget.style.boxShadow = "0px 2px 0px 0px #FFF";
                                            }}
                                          >
                                            BUY $DOGE
                                            <img className="ml-2" src={arwl} alt="" />
                                          </button>
            </div>
          </div>
          <div className="p-4 relative rounded-[21.168px]">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                backgroundColor: "rgba(0, 0, 0, 0.47)",
                borderRadius: "21.168px",
                zIndex: 1,
              }}
            ></div>
            <img
              src={vectcard2}
              className="absolute -right-[40%] -top-[60%]"
              alt=""
            />
            <div className="flex card2border  max-w-[588px] space-x-[2rem]  w-[100%]  px-5 py-11 justify-between ">
              <div className="w-[38%] min-h-[220px]">
                <img
                  src={cardimg2}
                  className="h-[220px] absolute left-0 top-2"
                  alt=""
                />
              </div>
              <div className="w-[62%] space-y-[10px]">
                <div>
                  <h3 className="text-[22px] font-[Anton] text-[#FFF] font-[400]">
                    TEAM PEPE
                  </h3>
                  <hr className="bg-[#4EB52A] h-[5px] border-none w-[68px] rounded-full" />
                </div>
                <h4 className="text-[20px] font-[Anton] text-[#FFF] font-[400]">
                 $PEPE
                </h4>
                <p className="text-[18px] text-[#FFF] font-[400] font-helvetica leading-[136%]">
                "Doge, your time is up. You’re just an old dog now. One punch, and I’ll have you chasing your tail! This will be your retirement party!"
                </p>
              </div>
                <button
                                              className="rounded-[60px] font-[Anton] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[30px] leading-[80%] font-[400] text-[#000] space-x-2 absolute bottom-[-17px] left-[24%] transition-all duration-300  hover:scale-105"
                                              style={{
                                                background:
                                                  "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)",
                                                boxShadow: "0px 2px 0px 0px #FFF",
                                              }}
                                              onMouseEnter={(e) => {
                                                e.currentTarget.style.background =
                                                  "linear-gradient(90deg, #F2B60F 0%, #F7D635 100%)";
                                                e.currentTarget.style.boxShadow =
                                                  "0px 4px 8px rgba(0, 0, 0, 0.25)";
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
        <div className="flex justify-between space-x-[130px]">
         
       <div className="w-[50%] p-[10px] rounded-[24px]"
        style={{
            border:"1.5px solid #FFBF00",
            boxShadow:"6.534px -0.817px 32.1px 0 rgba(241, 173, 3, 0.32)"
          }}
       >
           <div className="p-6 rounded-[24px] "
          style={{
            backdropFilter:"blur(16.210472106933594px)",
            background:"rgba(118, 93, 19, 0.32)",
            boxShadow:"6.534px -0.817px 32.1px 0 rgba(241, 173, 3, 0.32)"
          }}
          >
            <h2 className="text-[24px] font-[700] text-[#FFBF00] font-[Helvetica] text-center mb-8">
              TEAM DOGE ROADMAP
            </h2>
            <div className="space-y-6">
              {dogeRoadmapPhases.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#FFF] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-[20px] text-[#fff] font-[400] font-[Helvetica] leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: phase.description }}
                    >
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
       </div>

      
        <div className="w-[50%] p-[10px] rounded-[24px]"
         style={{
            border:"1.5px solid #FFBF00",
            boxShadow:"6.534px -0.817px 32.1px 0 rgba(241, 173, 3, 0.32)"
          }}
        >
            <div className=" p-6 rounded-[24px] h-[100%]"
              style={{
            backdropFilter:"blur(16.210472106933594px)",
            background:"rgba(29, 114, 0, 0.32)",
            boxShadow:"6.534px -0.817px 32px 0 rgba(116, 255, 96, 0.16)"
          }}
            >
            <h2 className="text-[24px] font-[700] text-[#4EB52A] font-helvetica text-center mb-8  ">
              TEAM PEPE ROADMAP
            </h2>
            <div className="space-y-6">
              {pepeRoadmapPhases.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#fff] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                  
                    <p className="text-[20px] text-[#fff] font-[400] font-helvetica leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: phase.description }}
                    >
                   
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySec;
