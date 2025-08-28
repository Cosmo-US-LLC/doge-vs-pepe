import cardimg2 from "../../assets/CommunitySec/pepe-icon.webp";
import cardimg1 from "../../assets/CommunitySec/doge-icon.webp";
import vectcard2 from "../../assets/CommunitySec/Ellipse 80.webp";
import vectcard1 from "../../assets/CommunitySec/Ellipse 81.webp";
import topShadow from "../../assets/CommunitySec/rectangle_290.webp";
import bottomShadow from "../../assets/CommunitySec/rectangle_294.webp";

function CommunitySec() {
  const dogeRoadmapPhases = [
    {
      title: "Preparation",
      description:
        "Prove once again why Doge is the undefeated champion. Rally millions of loyal fans and build the strongest Doge Army in meme history.",
    },
    {
      title: "The Fight",
      description:
        "Take on Pepe head-to-head. Show the world that an OG Meme Heavyweight never backs down and secure the crown.",
    },
    {
      title: "Victory Launch",
      description:
        "Celebrate the triumph with a massive launch event and CEX listings, powered by global hype and top industry support.",
    },
    {
      title: "Domination",
      description:
        "Lead the Doge movement to the next level. Become the fastest growing meme by market cap with millions of Doge holders driving the legacy forward.",
    },
  ];

  const pepeRoadmapPhases = [
    {
      title: "Concept Development",
      description:
        "Craft the vision for $PEPE, combining Pepe's iconic status with a thrilling presale.",
    },
    {
      title: "Website Launch",
      description:
        "Launch the $PEPE site with presale details and community tools.",
    },
    {
      title: "Community Setup",
      description: "Create Telegram channel and invite Team Pepe fans to join.",
    },
    {
      title: "Marketing Kickoff",
      description:
        "Launch social media campaigns, influencer shoutouts, and press releases to unite the Pepe army.",
    },
  ];

  return (
    <div className="w-[100%] flex justify-center items-center  h-full Communitybg overflow-hidden relative">
      <div className="absolute top-0 right-0 left-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute right-0 bottom-0 left-0 w-full h-full">
        <img className="w-full h-full" src={bottomShadow} alt="" />
      </div>
      <div
        className="max-w-[1312px] px-[30px] py-[80px] space-y-[40px] w-[100%] mx-auto z-10 relative"
        style={{
          backdropFilter: "blur(9.899999618530273px)",
          background: "rgba(0, 0, 0, 0.47)",
          borderRadius: "21.168px",
        }}
      >
        <div>
          <h3
            style={{
              textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
            }}
            className="text-[50px] text-[#FFFCFC] font-HiJack text-center font-[400]"
          >
            The Community Decides{" "}
          </h3>
          <p
            style={{
              textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
            }}
            className="text-[20px] font-[400] text-center text-[#FFF]"
          >
            This isn&apos;t just about picking a meme <br /> it&apos;s about
            choosing a winner that you are proud to represent.{" "}
          </p>
        </div>
        <div className="flex justify-between space-x-[15px]">
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
                  className="h-[220px] absolute left-2 top-2"
                  alt=""
                />
              </div>
              <div className="w-[62%] space-y-[10px]">
                <div>
                  <h3 className="text-[22px] text-[#FFF] font-HiJack font-[400]">
                    TEAM DOGE
                  </h3>
                  <hr className="bg-[#F1A900] h-[5px] border-none w-[68px] rounded-full" />
                </div>
                <h4 className="text-[20px] text-[#FFF] font-HiJack font-[400]">
                  $DOGE
                </h4>
                <p className="text-[18px] text-[#FFF] font-[400] leading-[130%]">
                  &ldquo;Pepe, you&apos;re just a hyped up fair-weather fighter.
                  This will be my easiest payday. I&apos;ll show you why
                  I&apos;m the undisputed champ!&rdquo;
                </p>
              </div>
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
                  className="h-[220px] absolute left-2 top-2"
                  alt=""
                />
              </div>
              <div className="w-[62%] space-y-[10px]">
                <div>
                  <h3 className="text-[22px] font-HiJack text-[#FFF] font-[400]">
                    TEAM PEPE
                  </h3>
                  <hr className="bg-[#4EB52A] h-[5px] border-none w-[68px] rounded-full" />
                </div>
                <h4 className="text-[20px] font-HiJack text-[#FFF] font-[400]">
                  $PEPE
                </h4>
                <p className="text-[18px] text-[#FFF] font-[400] leading-[130%]">
                  &ldquo;Doge, your time is up. You&apos;re just an old dog now.
                  One punch, and I&apos;ll have you chasing your tail! This will
                  be your retirement party!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-[15px]">
          {/* Left Div - Team Doge Roadmap */}
          <div className="w-[46%] p-6 rounded-[21.168px] border border-white/20 bg-black/40 backdrop-blur-sm">
            <h2 className="text-[32px] font-bold text-white text-center mb-8 tracking-wide">
              TEAM DOGE ROADMAP
            </h2>
            <div className="space-y-6">
              {dogeRoadmapPhases.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#F1A900] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-[20px] font-bold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-[16px] text-gray-300 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Div - Team Pepe Roadmap */}
          <div className="w-[50%] p-6 rounded-[21.168px] border border-[#4EB52A]/30 bg-black/40 backdrop-blur-sm">
            <h2 className="text-[32px] font-bold text-white text-center mb-8 tracking-wide">
              TEAM PEPE ROADMAP
            </h2>
            <div className="space-y-6">
              {pepeRoadmapPhases.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#4EB52A] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-[20px] font-bold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-[16px] text-gray-300 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySec;
